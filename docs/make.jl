using BioMarkovChains
using Documenter
using DocumenterVitepress

DocMeta.setdocmeta!(BioMarkovChains, :DocTestSetup, :(using BioMarkovChains); recursive = true)

# fmt = Documenter.HTML(
#     mathengine = MathJax3(),
#     prettyurls = get(ENV, "CI", "false") == "true",
#     canonical = "https://camilogarciabotero.github.io/BioMarkovChains.jl",
#     repolink = "https://camilogarciabotero.github.io/BioMarkovChains.jl",
#     edit_link = "main"
# )

fmt = DocumenterVitepress.MarkdownVitepress(
    repo = "https://github.com/camilogarciabotero/BioMarkovChains.jl/",
    # deploy_url = "https://camilogarciabotero.github.io/BioMarkovChains.jl",
    devbranch = "main",
    devurl = "dev",
)

pgs = [
    "Get Started" => "index.md",
    "Towards Markov Chains" => "biomarkovchains.md",
    "API" => "api.md"
]

makedocs(;
    modules = [BioMarkovChains],
    authors = "Camilo García-Botero",
    repo = "https://github.com/camilogarciabotero/BioMarkovChains.jl/",
    sitename = "BioMarkovChains.jl",
    format = fmt,
    pages = pgs,
    source = "src",
    build = "build",
    warnonly = true,
)

deploydocs(; 
    repo = "https://github.com/camilogarciabotero/BioMarkovChains.jl",
    devbranch = "main",
    target = "build", # this is where Vitepress stores its output
    branch = "gh-pages",
    push_preview = true
)