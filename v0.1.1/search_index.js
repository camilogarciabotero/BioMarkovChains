var documenterSearchIndex = {"docs":
[{"location":"api/","page":"API","title":"API","text":"CurrentModule = BioMarkovChains\nDocTestSetup = quote\n    using GeneFinder\nend","category":"page"},{"location":"api/","page":"API","title":"API","text":"","category":"page"},{"location":"api/","page":"API","title":"API","text":"Modules = [BioMarkovChains]","category":"page"},{"location":"api/#BioMarkovChains.TransitionCountMatrix","page":"API","title":"BioMarkovChains.TransitionCountMatrix","text":"TransitionCountMatrix(alphabet::Vector{DNA})\n\nA data structure for storing a DNA Transition Count Matrix (TCM). The TCM is a square matrix where each row and column corresponds to a nucleotide in the given alphabet. The value at position (i, j) in the matrix represents the number of times that nucleotide i is immediately followed by nucleotide j in a DNA sequence. \n\nFields:\n\norder::Dict{DNA, Int64}: A dictionary that maps each nucleotide in the alphabet to its corresponding index in the matrix.\ncounts::Matrix{Int64}: The actual matrix of counts.\n\nInternal function:\n\nTransitionCountMatrix(alphabet::Vector{DNA}): Constructs a new TCM object with the given alphabet. This function initializes the order field by creating a dictionary that maps each nucleotide in the alphabet to its corresponding index in the matrix. It also initializes the counts field to a matrix of zeros with dimensions len x len, where len is the length of the alphabet.\n\nExample usage:\n\nalphabet = [DNA_A, DNA_C, DNA_G, DNA_T]\ndtcm = TCM(alphabet)\n\n\n\n\n\n","category":"type"},{"location":"api/#BioMarkovChains.TransitionModel","page":"API","title":"BioMarkovChains.TransitionModel","text":"struct TransitionModel\n\nThe TransitionModel struct represents a transition model used in a sequence analysis. It consists of a transition probability matrix (TransitionProbabilityMatrix) and initial distribution probabilities.\n\nFields\n\nTransitionProbabilityMatrix::Matrix{Float64}: The transition probability matrix, a matrix of type Float64 representing the probabilities of transitioning from one state to another.\ninitials::Matrix{Float64}: The initial distribution probabilities, a matrix of type Float64 representing the probabilities of starting in each state.\nn: is the order of the transition model, or in other words the order of the resulted Markov chain.\n\nConstructors\n\nTransitionModel(TransitionProbabilityMatrix::Matrix{Float64}, initials::Matrix{Float64}): Constructs a TransitionModel object with the provided transition probability matrix TransitionProbabilityMatrix and initial distribution probabilities initials.\nTransitionModel(sequence::LongSequence{DNAAlphabet{4}}): Constructs a TransitionModel object based on a given DNA sequence. The transition probability matrix is calculated using transition_probability_matrix(sequence).probabilities, and the initial distribution probabilities are calculated using initial_distribution(sequence).\n\n\n\n\n\n","category":"type"},{"location":"api/#BioMarkovChains.TransitionProbabilityMatrix","page":"API","title":"BioMarkovChains.TransitionProbabilityMatrix","text":"TransitionProbabilityMatrix(alphabet::Vector{DNA})\n\nA data structure for storing a DNA Transition Probability Matrix (TransitionProbabilityMatrix). The TransitionProbabilityMatrix is a square matrix where each row and column corresponds to a nucleotide in the given alphabet. The value at position (i, j) in the matrix represents the probability of transitioning from nucleotide i to nucleotide j in a DNA sequence. \n\nFields:\n\norder::Dict{DNA, Int64}: A dictionary that maps each nucleotide in the alphabet to its corresponding index in the matrix.\nprobabilities::Matrix{Float64}: The actual matrix of probabilities.\n\nExample usage:\n\nalphabet = [DNA_A, DNA_C, DNA_G, DNA_T]\ndTransitionProbabilityMatrix = TransitionProbabilityMatrix(alphabet)\n\n\n\n\n\n","category":"type"},{"location":"api/#BioMarkovChains.dinucleotides-Tuple{Union{BioSequences.LongSubSeq{<:BioSequences.NucleicAcidAlphabet{4}}, BioSequences.LongNuc{4, <:BioSequences.NucleicAcidAlphabet{4}}}}","page":"API","title":"BioMarkovChains.dinucleotides","text":"dinucleotides(sequence::LongNucOrView{4})\n\nCompute the transition counts of each dinucleotide in a given DNA sequence.\n\nArguments\n\nsequence::LongSequence{DNAAlphabet{4}}: a LongSequence{DNAAlphabet{4}} object representing the DNA sequence.\n\nKeywords\n\nextended_alphabet::Bool=false: If true will pass the extended alphabet of DNA to search\n\nReturns\n\nA dictionary with keys being LongSequence{DNAAlphabet{4}} objects representing the dinucleotides, and values being the number of occurrences of each dinucleotide in the sequence.\n\nExample\n\nseq = dna\"AGCTAGCTAGCT\"\n\ndinucleotides(seq)\n\nDict{LongSequence{DNAAlphabet{4}}, Int64} with 16 entries:\n  GG => 0\n  TC => 0\n  GC => 3\n  CG => 0\n  CC => 0\n  AG => 3\n  TT => 0\n  AC => 0\n  TA => 2\n  GT => 0\n  GA => 0\n  CT => 3\n  CA => 0\n  AT => 0\n  AA => 0\n  TG => 0\n\n\n\n\n\n","category":"method"},{"location":"api/#BioMarkovChains.hasprematurestop-Tuple{Union{BioSequences.LongSubSeq{<:BioSequences.NucleicAcidAlphabet{4}}, BioSequences.LongNuc{4, <:BioSequences.NucleicAcidAlphabet{4}}}}","page":"API","title":"BioMarkovChains.hasprematurestop","text":"hasprematurestop(sequence::LongNucOrView{4})::Bool\n\nDetermine whether the sequence of type LongSequence{DNAAlphabet{4}} contains a premature stop codon.\n\nReturns a boolean indicating whether the sequence has more than one stop codon.\n\n\n\n\n\n","category":"method"},{"location":"api/#BioMarkovChains.iscoding","page":"API","title":"BioMarkovChains.iscoding","text":"iscoding(\n    sequence::LongSequence{DNAAlphabet{4}}, \n    codingmodel::TransitionModel, \n    noncodingmodel::TransitionModel,\n    η::Float64 = 1e-5\n    )\n\nCheck if a given DNA sequence is likely to be coding based on a log-odds ratio.     The log-odds ratio is a statistical measure used to assess the likelihood of a sequence being coding or non-coding. It compares the probability of the sequence generated by a coding model to the probability of the sequence generated by a non-coding model. If the log-odds ratio exceeds a given threshold (η), the sequence is considered likely to be coding.     It is formally described as a decision rule:\n\nS(X) = log left( fracP_C(X_1=i_1 ldots X_T=i_T)P_N(X_1=i_1 ldots X_T=i_T) right) begincases  eta  Rightarrow textcoding   eta  Rightarrow textnoncoding endcases\n\nArguments\n\nsequence::LongSequence{DNAAlphabet{4}}: The DNA sequence to be evaluated.\ncodingmodel::TransitionModel: The transition model for coding regions.\nnoncodingmodel::TransitionModel: The transition model for non-coding regions.\nη::Float64 = 1e-5: The threshold value for the log-odds ratio (default: 1e-5).\n\nReturns\n\ntrue if the sequence is likely to be coding.\nfalse if the sequence is likely to be non-coding.\n\nRaises\n\nErrorException: if the length of the sequence is not divisible by 3.\nErrorException: if the sequence contains a premature stop codon.\n\nExample\n\nsequence = LondDNA(\"ATGGCATCTAG\")\ncodingmodel = TransitionModel()\nnoncodingmodel = TransitionModel()\niscoding(sequence, codingmodel, noncodingmodel)  # Returns: true\n\n\n\n\n\n","category":"function"},{"location":"api/#BioMarkovChains.sequenceprobability-Tuple{Union{BioSequences.LongSubSeq{<:BioSequences.NucleicAcidAlphabet{4}}, BioSequences.LongNuc{4, <:BioSequences.NucleicAcidAlphabet{4}}}, TransitionModel}","page":"API","title":"BioMarkovChains.sequenceprobability","text":"sequenceprobability(sequence::LongNucOrView{4}, tpm::Matrix{Float64}, initials=Vector{Float64})\n\nCompute the probability of a given sequence using a transition probability matrix and the initial probabilities distributions.\n\nP(X_1 = i_1 ldots X_T = i_T) = pi_i_1^T-1 prod_t=1^T-1 a_i_t i_t+1\n\nArguments\n\nsequence::LongNucOrView{4}: The input sequence of nucleotides.\ntm::TransitionModel is the actual data structure composed of a tpm::Matrix{Float64} the transition probability matrix and initials=Vector{Float64} the initial state probabilities.\n\nReturns\n\nprobability::Float64: The probability of the input sequence.\n\nExample\n\nmainseq = LongDNA{4}(\"CCTCCCGGACCCTGGGCTCGGGAC\")\n\ntpm = transition_probability_matrix(mainseq)\n    \n    4×4 Matrix{Float64}:\n    0.0   1.0    0.0    0.0\n    0.0   0.5    0.2    0.3\n    0.25  0.125  0.625  0.0\n    0.0   0.667  0.333  0.0\n\ninitials = initial_distribution(mainseq)\n\n    1×4 Matrix{Float64}:\n    0.0869565  0.434783  0.347826  0.130435\n    \ntm = transition_model(tpm, initials)\n    - Transition Probability Matrix (Size: 4 × 4):\n    0.0\t1.0\t0.0\t0.0\n    0.0\t0.5\t0.2\t0.3\n    0.25\t0.125\t0.625\t0.0\n    0.0\t0.667\t0.333\t0.0\n    - Initials (Size: 1 × 4):\n    0.087\t0.435\t0.348\t0.13\n    - order: 1\n\nnewseq = LondDNA(\"CCTG\")\n\n    4nt DNA Sequence:\n    CCTG\n\n\nsequenceprobability(newseq, tm)\n    \n    0.0217\n\n\n\n\n\n","category":"method"},{"location":"api/#BioMarkovChains.transition_count_matrix-Tuple{Union{BioSequences.LongSubSeq{<:BioSequences.NucleicAcidAlphabet{4}}, BioSequences.LongNuc{4, <:BioSequences.NucleicAcidAlphabet{4}}}}","page":"API","title":"BioMarkovChains.transition_count_matrix","text":"transition_count_matrix(sequence::LongSequence{DNAAlphabet{4}})\n\nCompute the transition count matrix (TCM) of a given DNA sequence.\n\nArguments\n\nsequence::LongSequence{DNAAlphabet{4}}: a LongSequence{DNAAlphabet{4}} object representing the DNA sequence.\n\nKeywords\n\nextended_alphabet::Bool=false: If true will pass the extended alphabet of DNA to search\n\nReturns\n\nA TransitionCountMatrix object representing the transition count matrix of the sequence.\n\nExample\n\nseq = LongDNA{4}(\"AGCTAGCTAGCT\")\n\ntcm = transition_count_matrix(seq)\n\nGeneFinder.TransitionCountMatrix{Dict{DNA, Int64}, Matrix{Int64}:\n   A C G T\nA  0 0 3 0\nC  0 0 0 3\nG  0 3 0 0\nT  2 0 0 0\n\n\n\n\n\n\n\n\n","category":"method"},{"location":"api/#BioMarkovChains.transition_model","page":"API","title":"BioMarkovChains.transition_model","text":"transition_model(sequence::LongNucOrView{4}, n::Int64=1)\n\nConstructs a transition model based on the given DNA sequence and transition order.\n\nArguments\n\nsequence::LongNucOrView{4}: A DNA sequence represented as a LongNucOrView{4} object.\nn::Int64 (optional): The transition order (default: 1).\n\nReturns\n\nA TransitionModel object representing the transition model.\n\n\n\ntransition_model(tpm::Matrix{Float64}, initials::Matrix{Float64}, n::Int64=1)\n\nBuilds a transtition model based on the transition probability matrix and the initial distributions. It can also calculates higer orders of the model if n is changed.\n\nArguments\n\ntpm::Matrix{Float64}: the transition probability matrix TPM\ninitials::Matrix{Float64}: the initial distributions of the model.\nn::Int64 (optional): The transition order (default: 1).\n\nReturns\n\nA TransitionProbabilityMatrix object representing the transition probability matrix.\n\nExample\n\nsequence = LongDNA{4}(\"ACTACATCTA\")\n\nmodel = transition_model(sequence, 2)\nTransitionModel:\n  - Transition Probability Matrix (Size: 4 × 4):\n    0.444\t0.111\t0.0\t0.444\n    0.444\t0.444\t0.0\t0.111\n    0.0\t0.0\t0.0\t0.0\n    0.111\t0.444\t0.0\t0.444\n  - Initials (Size: 1 × 4):\n    0.333\t0.333\t0.0\t0.333\n  - order: 2\n\n\n\n\n\n","category":"function"},{"location":"api/#BioMarkovChains.transition_probability_matrix","page":"API","title":"BioMarkovChains.transition_probability_matrix","text":"transition_probability_matrix(sequence::LongSequence{DNAAlphabet{4}})\n\nCompute the transition probability matrix (TPM) of a given DNA sequence. Formally it construct hatA where: \n\na_ij = P(X_t = j mid X_t-1 = i) = fracP(X_t-1 = i X_t = j)P(X_t-1 = i)\n\nArguments\n\nsequence::LongNucOrView{4}: a LongNucOrView{4} object representing the DNA sequence.\nn::Int64=1: The order of the Markov model. That is the hatA^n\n\nKeywords\n\nextended_alphabet::Bool=false: If true will pass the extended alphabet of DNA to search\n\nReturns\n\nA TPM object representing the transition probability matrix of the sequence.\n\nExample\n\nseq = dna\"AGCTAGCTAGCT\"\n\ntpm = transition_probability_matrix(seq)\n\nGeneFinder.TransitionProbabilityMatrix{Dict{DNA, Int64}, Matrix{Float64}:\n   A   C   G   T\nA  0.0 0.0 1.0 0.0\nC  0.0 0.0 0.0 1.0\nG  0.0 1.0 0.0 0.0\nT  1.0 0.0 0.0 0.0\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"(Image: )","category":"page"},{"location":"#BioMarkovChains","page":"Home","title":"BioMarkovChains","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for BioMarkovChains.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"#Overview","page":"Home","title":"Overview","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package aim to represent BioSequences types as Markov chains to perform different operations and predictions","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"You can install BioMarkovChains from the julia REPL. Press ] to enter pkg mode, and enter the following:","category":"page"},{"location":"","page":"Home","title":"Home","text":"add BioMarkovChains","category":"page"},{"location":"","page":"Home","title":"Home","text":"If you are interested in the cutting edge of the development, please check out the master branch to try new features before release.","category":"page"},{"location":"biomarkovchains/#DNA-as-a-Markov-chain","page":"Towards Markov Chains","title":"DNA as a Markov chain","text":"","category":"section"},{"location":"biomarkovchains/","page":"Towards Markov Chains","title":"Towards Markov Chains","text":"Several packages (e.g. MarkovChainsHammer.jl, DiscreteMarkovChains.jl, etc.) in the Julia ecosystem have been implemented to work with Markov chains with a state space of integers, those could be efficient in many ways, but they are clumsy to work with a specialized biological types as in the BioJulia ecosystem. Therefore, in the GeneFinder package we dedicated some implementations to work with BioSequence types so that we can expand the functionality in an efficient way (see complete API).","category":"page"},{"location":"biomarkovchains/","page":"Towards Markov Chains","title":"Towards Markov Chains","text":"One important step towards many gene finding algorithms is to represent a DNA sequence as a Markov chain. In this representation a DNA sequence of a reduced alphabet mathscrA = A  C  G   T  is draw as a four-vertex graph, where each letter of mathscrA is a state (vertex) and the edges of the graph represent transitions from one nucleotide to another in a sequence (e.g. A rightarrow T represent a single nucleotide to nucleotide transition). This is also considered more specifically as a Discrete Markov chain (Axelson-Fisk 2015). The complete set of transitions and states of a DNA sequence of alphabet mathscrA.","category":"page"},{"location":"biomarkovchains/","page":"Towards Markov Chains","title":"Towards Markov Chains","text":"More formally a Markov chain is a random process where each state is a random variable X_t where t in T is a discrete time in a finite sequence T and the probability to jump from one state into another is only dependent of the current state. Therefore a definition of this Markov property is given by:","category":"page"},{"location":"biomarkovchains/","page":"Towards Markov Chains","title":"Towards Markov Chains","text":"beginalign\nP(X_t = j X_t1 = i)\nendalign","category":"page"},{"location":"biomarkovchains/","page":"Towards Markov Chains","title":"Towards Markov Chains","text":"where i j in  mathscrA . This property led us to generalize a way to calculate the probability of a sequence T from a process (X_1X_T) where each random variable is a nucleotide from mathscrA so that:","category":"page"},{"location":"biomarkovchains/","page":"Towards Markov Chains","title":"Towards Markov Chains","text":"beginalign\nP(X_1 = i_1X_T = i_T) = P(X_1 = i_1) prod_t=2^T P(X_t = i_t  X_t1 = i_t1)\nendalign","category":"page"},{"location":"biomarkovchains/","page":"Towards Markov Chains","title":"Towards Markov Chains","text":"Note that previous equations has two terms, a initial probability P(X_1 = i_1) and the the product of all transitions beginning at t = 2. So, to calculate the initial probability distribution of each of the nucleotides of a string T with the alphabet 𝒜 we can first calculate the transition probability matrix widehatmathscrM out of the frequency count of the transitions. In an alphabet 𝒜 we got 4^2 transitions of one order, that is the AA AC AG  which coincides with the frequency of the dinucleotides in the sequence. So we can later in fact build a 4 x 4 matrix representing all the transitions. For instance in a DNA sequence T of 24 nucleotides:  ","category":"page"},{"location":"biomarkovchains/","page":"Towards Markov Chains","title":"Towards Markov Chains","text":"CCTCCCGGACCCTGGGCTCGGGAC","category":"page"},{"location":"biomarkovchains/","page":"Towards Markov Chains","title":"Towards Markov Chains","text":"We can calculate each frequency nucleotide to any other nucleotide widehatm_ij = fracc_ijc_i where c_ij is the actual count of the dinucleotide, and therefore c_i is the counts of the nucleotide i to any other nucleotide and build the transition probability matrix:","category":"page"},{"location":"biomarkovchains/","page":"Towards Markov Chains","title":"Towards Markov Chains","text":"beginbmatrix\n    textA  textC  textG  textT \ntextA  000  100  000  000 \ntextC  000  056  022  030 \ntextG  025  012  062  000 \ntextT  000  067  033  000 \nendbmatrix","category":"page"},{"location":"biomarkovchains/","page":"Towards Markov Chains","title":"Towards Markov Chains","text":"It is noteworthy that initial probabilities can also be obtained from the counts of each nucleotide transitions c_ij over the total sum of the dinucleotide counts c_k:","category":"page"},{"location":"biomarkovchains/","page":"Towards Markov Chains","title":"Towards Markov Chains","text":"beginalign\nwidehatpi_i = fracc_isum_kc_k\nendalign","category":"page"},{"location":"biomarkovchains/","page":"Towards Markov Chains","title":"Towards Markov Chains","text":"That way for the previous example example we can can calculate the initial probabilities widehatpi = (008043034013). Both set of probabilities composed a transition model that can be used to predict the probability of any DNA sequence using equation (2).","category":"page"},{"location":"biomarkovchains/#Transition-models-with-BioSequences","page":"Towards Markov Chains","title":"Transition models with BioSequences","text":"","category":"section"},{"location":"biomarkovchains/","page":"Towards Markov Chains","title":"Towards Markov Chains","text":"We can now calculate a transition probability matrix from a LongDNA sequence using the transition_probability_matrix and initial_distribution methods for a given LongDNA sequence:","category":"page"},{"location":"biomarkovchains/","page":"Towards Markov Chains","title":"Towards Markov Chains","text":"using BioSequences, GeneFinder\n\nsequence = dna\"CCTCCCGGACCCTGGGCTCGGGAC\"\n\ntpm = transition_probability_matrix(sequence)\ninitials = initial_distribution(sequence)\n\nprintln(tpm)\nprintln(initials)","category":"page"},{"location":"biomarkovchains/","page":"Towards Markov Chains","title":"Towards Markov Chains","text":"TPM{Dict{DNA, Int64}, Matrix{Float64}:\n   A     C     G     T     \nA  0.0   1.0   0.0   0.0   \nC  0.0   0.5   0.2   0.3   \nG  0.25  0.125 0.625 0.0   \nT  0.0   0.667 0.333 0.0   \n\n[0.08695652173913043 0.43478260869565216 0.34782608695652173 0.13043478260869565]","category":"page"},{"location":"biomarkovchains/","page":"Towards Markov Chains","title":"Towards Markov Chains","text":"More conveniently, we can now use the transition_model method and obtain the transition probabilities and the initial distribution and build a transition model:","category":"page"},{"location":"biomarkovchains/","page":"Towards Markov Chains","title":"Towards Markov Chains","text":"transition_model(sequence)","category":"page"},{"location":"biomarkovchains/","page":"Towards Markov Chains","title":"Towards Markov Chains","text":"TransitionModel:\n  - Transition Probability Matrix (Size: 4 × 4):\n    0.0 1.0 0.0 0.0 \n    0.0 0.5 0.2 0.3 \n    0.25    0.125   0.625   0.0 \n    0.0 0.667   0.333   0.0 \n  - Initials (Size: 1 × 4):\n    0.087   0.435   0.348   0.13    \n  - order: 1","category":"page"},{"location":"biomarkovchains/","page":"Towards Markov Chains","title":"Towards Markov Chains","text":"Note that, sometimes the dinucleotides transition do not harbor important biological meaning, whereas trinucleotides or codons are, in fact, the building block of proteins. Therefore, sometimes the transition model we want to build is usually a second-order Markov chain, that represents the possible transitions of a trinucleotide.","category":"page"},{"location":"biomarkovchains/","page":"Towards Markov Chains","title":"Towards Markov Chains","text":"A very nice nice property of the transition probability matrix is that the n-step transition probability matrix mathscrM^n = (mathscrm_ij(n)), that is the nth power of mathscrM represents i rightarrow j transitions in n steps. We can also have higher order transition models as:","category":"page"},{"location":"biomarkovchains/","page":"Towards Markov Chains","title":"Towards Markov Chains","text":"transition_model(sequence, 2)","category":"page"},{"location":"biomarkovchains/","page":"Towards Markov Chains","title":"Towards Markov Chains","text":"TransitionModel:\n  - Transition Probability Matrix (Size: 4 × 4):\n    0.0 0.5 0.2 0.3 \n    0.05    0.475   0.325   0.15    \n    0.156   0.391   0.416   0.038   \n    0.083   0.375   0.342   0.2 \n  - Initials (Size: 1 × 4):\n    0.087   0.435   0.348   0.13    \n  - order: 2","category":"page"},{"location":"biomarkovchains/#The-*log-odds-ratio*-decision-rule","page":"Towards Markov Chains","title":"The log-odds ratio decision rule","text":"","category":"section"},{"location":"biomarkovchains/","page":"Towards Markov Chains","title":"Towards Markov Chains","text":"The sequence probability given a transition probability model (eq. 2) could be used as the source of a sequence classification based on a decision rule to classify whether a sequence correspond to a model or another. Now, imagine we got two DNA sequence transition models, a CDS model and a No-CDS model. The log-odds ratio decision rule could be establish as:","category":"page"},{"location":"biomarkovchains/","page":"Towards Markov Chains","title":"Towards Markov Chains","text":"beginalign\nS(X) = log fracP_C(X_1=i_1 ldots X_T=i_T)P_N(X_1=i_1 ldots X_T=i_T)  begincases  eta  Rightarrow textcoding   eta  Rightarrow textnoncoding endcases\nendalign","category":"page"},{"location":"biomarkovchains/","page":"Towards Markov Chains","title":"Towards Markov Chains","text":"Where the P_C is the probability of the sequence given a CDS model, P_N is the probability of the sequence given a No-CDS model, the decision rule is finally based on whether the ratio is greater or lesser than a given threshold η of significance level.","category":"page"},{"location":"biomarkovchains/","page":"Towards Markov Chains","title":"Towards Markov Chains","text":"In the GeneFinder we have implemented this rule and a couple of basic transition probability models of CDS and No-CDS of E. coli from Axelson-Fisk (2015) work. To check whether a random sequence could be coding based on these decision we use the predicate iscoding with the ECOLICDS and ECOLINOCDS models:","category":"page"},{"location":"biomarkovchains/","page":"Towards Markov Chains","title":"Towards Markov Chains","text":"randseq = getcds(randdnaseq(99))[1] # this will retrieved a random coding ORF\n\niscoding(randseq, ECOLICDS, ECOLINOCDS)","category":"page"},{"location":"biomarkovchains/","page":"Towards Markov Chains","title":"Towards Markov Chains","text":"true","category":"page"},{"location":"biomarkovchains/#References","page":"Towards Markov Chains","title":"References","text":"","category":"section"},{"location":"biomarkovchains/","page":"Towards Markov Chains","title":"Towards Markov Chains","text":"Axelson-Fisk, Marina. 2015. Comparative Gene Finding. Vol. 20. Computational Biology. London: Springer London. http://link.springer.com/10.1007/978-1-4471-6693-1.","category":"page"}]
}