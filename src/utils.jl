"""
    dinucleotides(sequence::LongNucOrView{4})

Compute the transition counts of each dinucleotide in a given DNA sequence.

# Arguments
- `sequence::LongSequence{DNAAlphabet{4}}`: a `LongSequence{DNAAlphabet{4}}` object representing the DNA sequence.

# Keywords

- `extended_alphabet::Bool=false`: If true will pass the extended alphabet of DNA to search

# Returns
A dictionary with keys being `LongSequence{DNAAlphabet{4}}` objects representing
the dinucleotides, and values being the number of occurrences of each dinucleotide
in the sequence.

# Example
```
seq = dna"AGCTAGCTAGCT"

dinucleotides(seq)

Dict{LongSequence{DNAAlphabet{4}}, Int64} with 16 entries:
  GG => 0
  TC => 0
  GC => 3
  CG => 0
  CC => 0
  AG => 3
  TT => 0
  AC => 0
  TA => 2
  GT => 0
  GA => 0
  CT => 3
  CA => 0
  AT => 0
  AA => 0
  TG => 0
```
"""
function dinucleotides(sequence::LongNucOrView{4}; extended_alphabet::Bool = false)
    A = extended_alphabet ? collect(alphabet(DNA)) : [DNA_A, DNA_C, DNA_G, DNA_T]
    dinucleotides = vec([LongSequence{DNAAlphabet{4}}([n1, n2]) for n1 in A, n2 in A])

    # counts = zeros(Int64, length(dinucleotides))
    counts = Array{Int64,1}(undef, 64)
    for (index, pair) in enumerate(dinucleotides)
        count = 0
        for i in 1:length(sequence)-1
            if sequence[i] == pair[1] && sequence[i+1] == pair[2]
                count += 1
            end
        end
        counts[index] = count
    end

    pairsdict = Dict{LongSequence{DNAAlphabet{4}},Int64}()
    for (index, pair) in enumerate(dinucleotides)
        pairsdict[pair] = counts[index]
    end

    return pairsdict
end

"""
    hasprematurestop(sequence::LongNucOrView{4})::Bool

Determine whether the `sequence` of type `LongSequence{DNAAlphabet{4}}` contains a premature stop codon.

Returns a boolean indicating whether the `sequence` has more than one stop codon.
"""
function hasprematurestop(sequence::LongNucOrView{4})::Bool
    
    stopcodons = [LongDNA{4}("TAA"), LongDNA{4}("TAG"), LongDNA{4}("TGA")]  # Create a set of stop codons
    
    length(sequence) % 3 == 0 || error("The sequence is not divisible by 3")
    
    occursin(biore"T(AG|AA|GA)"dna, sequence[end-2:end]) || error("There is no stop codon at the end of the sequence")

    @inbounds for i in 1:3:length(sequence) - 4
        codon = sequence[i:i+2]
        if codon in stopcodons
            return true
        end
    end

    return false
end

function _int_to_dna(index::Int64; extended_alphabet::Bool = false)
    A = extended_alphabet ? collect(alphabet(DNA)) : [DNA_A, DNA_C, DNA_G, DNA_T]
    return LongSequence{DNAAlphabet{4}}([A[index]])
end

function _dna_to_int(nucleotide::DNA; extended_alphabet::Bool = false)
    A = extended_alphabet ? collect(alphabet(DNA)) : [DNA_A, DNA_C, DNA_G, DNA_T]
    return findfirst(nucleotide, LongSequence{DNAAlphabet{4}}(A))
end