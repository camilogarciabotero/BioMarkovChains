export ECOLICDS, ECOLINOCDS, CPGPOS, CPGNEG

const ECOLICDS = begin
    tpm = [
        0.310 0.224 0.199 0.268
        0.251 0.215 0.313 0.221
        0.236 0.308 0.249 0.207
        0.178 0.217 0.338 0.267
    ]
    inits = [0.245, 0.243, 0.273, 0.239]
    n = 1
    BMC{DNAAlphabet{4}}(tpm, inits, n)
end

const ECOLINOCDS = begin
    tpm = [
        0.321 0.204 0.200 0.275
        0.282 0.233 0.269 0.215
        0.236 0.305 0.235 0.225
        0.207 0.219 0.259 0.314
    ]
    inits = [0.262, 0.239, 0.240, 0.259]
    n = 1
    BMC{DNAAlphabet{4}}(tpm, inits,n)
end


const CPGPOS = begin
    tpm = [
        0.180 0.274 0.426 0.120
        0.171 0.368 0.274 0.188
        0.161 0.339 0.375 0.125 
        0.079 0.355 0.384 0.182
    ]
    inits = [0.262, 0.239, 0.240, 0.259] # not stablished
    n = 1
    BMC{DNAAlphabet{4}}(tpm, inits,n)
end

const CPGNEG = begin
    tpm = [
        0.300 0.205 0.285 0.210 
        0.322 0.298 0.078 0.302
        0.248 0.246 0.298 0.208
        0.177 0.239 0.292 0.292
    ]
    inits = [0.262, 0.239, 0.240, 0.259] # not stablished
    n = 1
    BMC{DNAAlphabet{4}}(tpm, inits,n)
end