module BioMarkovChains

using BioSequences:
    LongSequence,
    LongSubSeq,
    LongNuc,
    LongDNA,
    LongRNA,
    ACGT,
    ACGU,
    NucleicAcidAlphabet,
    DNA,
    DNAAlphabet,
    
    #RNA
    RNA,
    
    #AminoAcids
    AminoAcid,
    AminoAcidAlphabet,
    LongAA,
    AA_A, AA_R, AA_N, AA_D, AA_C, AA_Q, AA_E, AA_G, AA_H, AA_I, AA_L, AA_K, AA_M, AA_F, AA_P, AA_S, AA_T, AA_W, AA_Y, AA_V, AA_O, AA_U, AA_B, AA_J, AA_Z, AA_X, AA_Term, AA_Gap,

    # Other functions
    SeqOrView, NucleicSeqOrView

using PrecompileTools: @setup_workload, @compile_workload
using TestItems: @testitem
using StatsAPI: StatsAPI, fit, fit!
using VectorizedKmers: count_kmers

include("types.jl")
export BioMarkovChain, BMC

include("utils.jl")
export randbmc

include("transitions.jl")
export initials, transition_count_matrix, transition_probability_matrix, logoddsratio, logoddsratioscore

include("models.jl")
export ECOLICDS, ECOLINOCDS

include("perronfrobenius.jl")
export perronfrobenius, generatedna

include("extended.jl")

@setup_workload begin
    # Putting some things in `@setup_workload` instead of `@compile_workload` can reduce the size of the
    # precompile file and potentially make loading faster.
    using BioSequences
    seq = randdnaseq(10^3)
    @compile_workload begin
        # all calls in this block will be precompiled, regardless of whether
        # they belong to your package or not (on Julia 1.8 and higher)
        transition_count_matrix(seq)
        transition_probability_matrix(seq)
        perronfrobenius(seq)
        BioMarkovChain(seq)
    end
end

end # BioMarkovChains
