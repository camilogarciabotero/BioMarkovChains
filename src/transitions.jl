"""
    transition_count_matrix(sequence::LongSequence{DNAAlphabet{4}})

Compute the transition count matrix (TCM) of a given DNA sequence.

# Arguments
- `sequence::LongSequence{DNAAlphabet{4}}`: a `LongSequence{DNAAlphabet{4}}` object representing the DNA sequence.

# Keywords

- `extended_alphabet::Bool=false`: If true will pass the extended alphabet of DNA to search

# Returns
A `Matrix` object representing the transition count matrix of the sequence.

# Example
```
seq = LongDNA{4}("AGCTAGCTAGCT")

tcm = transition_count_matrix(seq)

4x4 Matrix{Int64}:
   A C G T
A  0 0 3 0
C  0 0 0 3
G  0 3 0 0
T  2 0 0 0

```
 """
function transition_count_matrix(sequence::LongNucOrView{4})
    alphabetsymb = eltype(sequence) == DNA ? ACGT : ACGU
    matrix = [(i,j) for i in alphabetsymb, j in alphabetsymb]
    trans = transitions(sequence)
    return reshape([get(trans, t, 0) for t in matrix], size(matrix))
end

function transition_count_matrix(sequence::LongAA)
    matrix = [(i,j) for i in AA20, j in AA20]
    trans = transitions(sequence)
    return reshape([get(trans, t, 0) for t in matrix], size(matrix))
end

@doc raw"""
    transition_probability_matrix(sequence::LongSequence{DNAAlphabet{4}})

Compute the transition probability matrix (TPM) of a given DNA sequence. Formally it construct `` \hat{A}`` where: 
```math
a_{ij} = P(X_t = j \mid X_{t-1} = i) = \frac{{P(X_{t-1} = i, X_t = j)}}{{P(X_{t-1} = i)}}
```

# Arguments
- `sequence::LongNucOrView{4}`: a `LongNucOrView{4}` object representing the DNA sequence.
- `n::Int64=1`: The order of the Markov model. That is the `` \hat{A}^{n}``

# Keywords

- `extended_alphabet::Bool=false`: If true will pass the extended alphabet of DNA to search

# Returns
A `Matrix` object representing the transition probability matrix of the sequence.

# Example
```
seq = dna"AGCTAGCTAGCT"

tpm = transition_probability_matrix(seq)

4x4 Matrix{Float64}:
   A   C   G   T
A  0.0 0.0 1.0 0.0
C  0.0 0.0 0.0 1.0
G  0.0 1.0 0.0 0.0
T  1.0 0.0 0.0 0.0
```
"""
function transition_probability_matrix(
    sequence::LongNucOrView{4},
    n::Int64 = 1;
)
    tcm = transition_count_matrix(sequence)
    rowsums = sum(tcm, dims = 2)
    freqs = tcm ./ rowsums

    freqs[isinf.(freqs)] .= 0.0
    freqs[isnan.(freqs)] .= 0.0

    return freqs^(n)
end

function transition_probability_matrix(
    sequence::LongAA,
    n::Int64 = 1;
)
    tcm = transition_count_matrix(sequence)
    rowsums = sum(tcm, dims = 2)
    freqs = tcm ./ rowsums

    freqs[isinf.(freqs)] .= 0.0
    freqs[isnan.(freqs)] .= 0.0

    return freqs^(n)
end

@testitem "tpm" begin
    using BioSequences, BioMarkovChains
    seq = dna"CCTCCCGGACCCTGGGCTCGGGAC"
    tpm = transition_probability_matrix(seq)

    @test round.(tpm, digits = 3) == [0.0 1.0 0.0 0.0; 0.0 0.5 0.2 0.3; 0.25 0.125 0.625 0.0; 0.0 0.667 0.333 0.0]
end

function initials(sequence::LongSequence) ## π̂ estimates of the initial probabilies
    # initials = Array{Float64}(undef, 1, 4)
    inits = Array{Float64, 1}(undef, 1)
    tcm = transition_count_matrix(sequence)
    inits = sum(tcm, dims = 1) ./ sum(tcm)
    return vec(inits)
end

initials(bmc::BioMarkovChain) = bmc.inits

@doc raw"""
    sequenceprobability(sequence::LongNucOrView{4}, tpm::Matrix{Float64}, initials=Vector{Float64})

Compute the probability of a given sequence using a transition probability matrix and the initial probabilities distributions.

```math
P(X_1 = i_1, \ldots, X_T = i_T) = \pi_{i_1}^{T-1} \prod_{t=1}^{T-1} a_{i_t, i_{t+1}}
```

# Arguments
- `sequence::LongNucOrView{4}`: The input sequence of nucleotides.
- `tm::BioMarkovChain` is the actual data structure composed of a `tpm::Matrix{Float64}` the transition probability matrix and `initials=Vector{Float64}` the initial state probabilities.

# Returns
- `probability::Float64`: The probability of the input sequence.

# Example

```
mainseq = LongDNA{4}("CCTCCCGGACCCTGGGCTCGGGAC")

tpm = transition_probability_matrix(mainseq)
    
    4×4 Matrix{Float64}:
    0.0   1.0    0.0    0.0
    0.0   0.5    0.2    0.3
    0.25  0.125  0.625  0.0
    0.0   0.667  0.333  0.0

initials = initial_distribution(mainseq)

    1×4 Vector{Float64}:
    0.0869565  
    0.434783
    0.347826
    0.130435
    
tm = transition_model(tpm, initials)
- Transition Probability Matrix -> Matrix{Float64}(4 × 4):
    0.0	  1.0	 0.0	0.0
    0.0	  0.5	 0.2	0.3
    0.25  0.125	 0.625	0.0
    0.0	  0.667	 0.333	0.0
- Initial Probabilities -> Vector{Float64}(4 × 1):
   0.087	
   0.435	
   0.348	
   0.13
- Markov Chain Order:1

newseq = LondDNA("CCTG")

    4nt DNA Sequence:
    CCTG


dnaseqprobability(newseq, tm)
    
    0.0217
```
"""
function dnaseqprobability(
    sequence::LongNucOrView{4},
    model::BioMarkovChain
)
    init = model.inits[NUCLEICINDEXES[sequence[1]]]

    probability = init

    for t in 1:length(sequence)-1
        i, j = DINUCLEICINDEXES[@view sequence[t:t+1]]
        probability *= model.tpm[i, j]
    end
    return probability
end

transition_probability_matrix(bmc::BioMarkovChain) = bmc.tpm

# findfirst(i -> i == (AA_T, AA_R), aamatrix)

@doc raw"""
    iscoding(
        sequence::LongSequence{DNAAlphabet{4}}, 
        codingmodel::BioMarkovChain, 
        noncodingmodel::BioMarkovChain,
        η::Float64 = 1e-5
        )

Check if a given DNA sequence is likely to be coding based on a log-odds ratio.
    The log-odds ratio is a statistical measure used to assess the likelihood of a sequence being coding or non-coding. It compares the probability of the sequence generated by a coding model to the probability of the sequence generated by a non-coding model. If the log-odds ratio exceeds a given threshold (`η`), the sequence is considered likely to be coding.
    It is formally described as a decision rule:

```math
S(X) = \log \left( \frac{{P_C(X_1=i_1, \ldots, X_T=i_T)}}{{P_N(X_1=i_1, \ldots, X_T=i_T)}} \right) \begin{cases} > \eta & \Rightarrow \text{{coding}} \\ < \eta & \Rightarrow \text{{noncoding}} \end{cases}
```

# Arguments
- `sequence::LongSequence{DNAAlphabet{4}}`: The DNA sequence to be evaluated.
- `codingmodel::BioMarkovChain`: The transition model for coding regions.
- `noncodingmodel::BioMarkovChain`: The transition model for non-coding regions.
- `η::Float64 = 1e-5`: The threshold value (eta) for the log-odds ratio (default: 1e-5).

# Returns
- `true` if the sequence is likely to be coding.
- `false` if the sequence is likely to be non-coding.

# Raises
- `ErrorException`: if the length of the sequence is not divisible by 3.
- `ErrorException`: if the sequence contains a premature stop codon.

# Example

```
sequence = LondDNA("ATGGCATCTAG")
codingmodel = BioMarkovChain()
noncodingmodel = BioMarkovChain()
iscoding(sequence, codingmodel, noncodingmodel)  # Returns: true
```
"""
function iscoding(
    sequence::LongNucOrView{4},
    codingmodel::BioMarkovChain,
    noncodingmodel::BioMarkovChain,
    η::Float64 = 1e-5
)
    pcoding = dnaseqprobability(sequence, codingmodel)
    pnoncoding = dnaseqprobability(sequence, noncodingmodel)

    logodds = log(pcoding / pnoncoding)

    length(sequence) % 3 == 0 || error("The sequence is not divisible by 3")

    !hasprematurestop(sequence) || error("There is a premature stop codon in the sequence")

    if logodds > η
        return true
    else
        false
    end
end