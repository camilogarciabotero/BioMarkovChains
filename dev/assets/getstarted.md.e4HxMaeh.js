import{_ as l,c as e,a5 as n,j as t,a as s,o as i}from"./chunks/framework.S-lPSwUw.js";const f=JSON.parse('{"title":"Get started","description":"","frontmatter":{},"headers":[],"relativePath":"getstarted.md","filePath":"getstarted.md","lastUpdated":null}'),o={name:"getstarted.md"},r={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},p={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.666ex"},xmlns:"http://www.w3.org/2000/svg",width:"14.679ex",height:"2.363ex",role:"img",focusable:"false",viewBox:"0 -750 6487.9 1044.2","aria-hidden":"true"},d={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},T={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.357ex",height:"1.025ex",role:"img",focusable:"false",viewBox:"0 -442 600 453","aria-hidden":"true"},Q={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},m={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.113ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.751ex",height:"1.744ex",role:"img",focusable:"false",viewBox:"0 -721 1216 771","aria-hidden":"true"},h={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},c={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.462ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.985ex",height:"1.957ex",role:"img",focusable:"false",viewBox:"0 -661 2645.6 865","aria-hidden":"true"};function g(x,a,u,k,w,b){return i(),e("div",null,[a[17]||(a[17]=n(`<h1 id="Get-started" tabindex="-1">Get started <a class="header-anchor" href="#Get-started" aria-label="Permalink to &quot;Get started {#Get-started}&quot;">​</a></h1><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>You can install <code>BioMarkovChains</code> from the julia REPL. Press <code>]</code> to enter pkg mode, and enter the following:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]add BioMarkovChains</span></span></code></pre></div><p>If you are interested in the cutting edge of the development, please check out the main branch to try new features before release.</p><h2 id="Create-a-BioMarkovChain-of-DNA" tabindex="-1">Create a BioMarkovChain of DNA <a class="header-anchor" href="#Create-a-BioMarkovChain-of-DNA" aria-label="Permalink to &quot;Create a BioMarkovChain of DNA {#Create-a-BioMarkovChain-of-DNA}&quot;">​</a></h2><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BioSequences, BioMarkovChains</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">seq </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dna</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;CCTCCCGGACCCTGGGCTCGGGAC&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">BioMarkovChain</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(seq)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>BioMarkovChain of DNA alphabet and order 1:</span></span>
<span class="line"><span>  - Transition Probability Matrix -&gt; Matrix{Float64}(4 × 4):</span></span>
<span class="line"><span>   0.0     1.0     0.0     0.0</span></span>
<span class="line"><span>   0.0     0.5     0.2     0.3</span></span>
<span class="line"><span>   0.25    0.125   0.625   0.0</span></span>
<span class="line"><span>   0.0     0.6667  0.3333  0.0</span></span>
<span class="line"><span>  - Initial Probabilities -&gt; Vector{Float64}(4 × 1):</span></span>
<span class="line"><span>   0.087   0.4348  0.3478  0.1304</span></span></code></pre></div><p>Note that, sometimes the dinucleotides transition do not harbor important biological meaning, whereas trinucleotides or codons are, in fact, the building block of proteins. Therefore, sometimes the transition model we want to build is usually a second-order Markov chain, that represents the possible transitions of a trinucleotide.</p>`,9)),t("p",null,[a[8]||(a[8]=s("A very nice nice property of the transition probability matrix is that the ")),a[9]||(a[9]=t("em",null,"n-step transition probability matrix",-1)),a[10]||(a[10]=s()),t("mjx-container",r,[(i(),e("svg",p,a[0]||(a[0]=[n('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mi"><path data-c="2133" d="M112 -7Q86 -7 58 6T30 48T54 103T113 130Q129 130 141 121T153 94Q153 71 132 59T90 47H80Q95 30 133 30Q180 30 228 63T311 137T402 249T500 361Q566 425 703 529T910 693Q942 721 945 721T958 716T970 709Q974 704 964 691Q961 688 905 622T847 554L595 181Q553 121 527 77T496 19L492 5Q497 5 531 46Q579 98 685 224T850 409L972 524Q994 543 1004 556Q1012 567 1097 643T1186 720Q1194 720 1206 715T1215 703Q1215 701 1191 671T1133 599T1080 530Q1036 461 983 357T862 152Q802 64 799 17Q799 7 800 5T811 2Q836 2 882 37T969 126Q972 130 974 134T978 138T983 139T996 140H1012Q1018 134 1018 132Q1018 122 981 83T889 4T795 -35Q761 -35 745 -12T728 48Q728 122 781 190Q833 269 890 370L927 434L914 422Q848 360 752 245Q643 117 582 51T498 -33T461 -50Q424 -48 424 -4Q424 84 481 172L714 495Q591 406 523 333Q507 316 430 226T313 95Q263 48 221 24T162 -4T120 -7H112Z" style="stroke-width:3;"></path></g></g><g data-mml-node="TeXAtom" transform="translate(1305.8,363) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mi"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g></g></g><g data-mml-node="mo" transform="translate(2057.8,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(3113.6,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="stroke-width:3;"></path></g><g data-mml-node="msub" transform="translate(3502.6,0)"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mi"><text data-variant="script" transform="scale(1,-1)" font-size="884px">𝓂</text></g></g><g data-mml-node="TeXAtom" transform="translate(633,-150) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mi"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(345,0)"><path data-c="1D457" d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z" style="stroke-width:3;"></path></g></g></g><g data-mml-node="mo" transform="translate(4720.9,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(5109.9,0)"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(5709.9,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(6098.9,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="stroke-width:3;"></path></g></g></g>',1)]))),a[1]||(a[1]=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msup",null,[t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",{mathvariant:"script"},"M")]),t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",null,"n")])]),t("mo",null,"="),t("mo",{stretchy:"false"},"("),t("msub",null,[t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",{mathvariant:"script"},"m")]),t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",null,"i"),t("mi",null,"j")])]),t("mo",{stretchy:"false"},"("),t("mi",null,"n"),t("mo",{stretchy:"false"},")"),t("mo",{stretchy:"false"},")")])],-1))]),a[11]||(a[11]=s(", that is the ")),t("mjx-container",d,[(i(),e("svg",T,a[2]||(a[2]=[t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})])])],-1)]))),a[3]||(a[3]=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"n")])],-1))]),a[12]||(a[12]=s("th power of ")),t("mjx-container",Q,[(i(),e("svg",m,a[4]||(a[4]=[n('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mi"><path data-c="2133" d="M112 -7Q86 -7 58 6T30 48T54 103T113 130Q129 130 141 121T153 94Q153 71 132 59T90 47H80Q95 30 133 30Q180 30 228 63T311 137T402 249T500 361Q566 425 703 529T910 693Q942 721 945 721T958 716T970 709Q974 704 964 691Q961 688 905 622T847 554L595 181Q553 121 527 77T496 19L492 5Q497 5 531 46Q579 98 685 224T850 409L972 524Q994 543 1004 556Q1012 567 1097 643T1186 720Q1194 720 1206 715T1215 703Q1215 701 1191 671T1133 599T1080 530Q1036 461 983 357T862 152Q802 64 799 17Q799 7 800 5T811 2Q836 2 882 37T969 126Q972 130 974 134T978 138T983 139T996 140H1012Q1018 134 1018 132Q1018 122 981 83T889 4T795 -35Q761 -35 745 -12T728 48Q728 122 781 190Q833 269 890 370L927 434L914 422Q848 360 752 245Q643 117 582 51T498 -33T461 -50Q424 -48 424 -4Q424 84 481 172L714 495Q591 406 523 333Q507 316 430 226T313 95Q263 48 221 24T162 -4T120 -7H112Z" style="stroke-width:3;"></path></g></g></g></g>',1)]))),a[5]||(a[5]=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",{mathvariant:"script"},"M")])])],-1))]),a[13]||(a[13]=s(" represents ")),t("mjx-container",h,[(i(),e("svg",c,a[6]||(a[6]=[n('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g><g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(345,0)"><g data-mml-node="mo"><path data-c="2004" d="" style="stroke-width:3;"></path></g></g><g data-mml-node="mo" transform="translate(955.8,0)"><path data-c="2192" d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(2233.6,0)"><path data-c="1D457" d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z" style="stroke-width:3;"></path></g></g></g>',1)]))),a[7]||(a[7]=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"i"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mo",null," ")]),t("mo",{stretchy:"false"},"→"),t("mi",null,"j")])],-1))]),a[14]||(a[14]=s(" transitions in ")),a[15]||(a[15]=t("em",null,"n",-1)),a[16]||(a[16]=s(" steps. We can also have higher order transition models as:"))]),a[18]||(a[18]=n(`<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">BioMarkovChain</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(seq, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>BioMarkovChain of DNA alphabet and order 2:</span></span>
<span class="line"><span>  - Transition Probability Matrix -&gt; Matrix{Float64}(4 × 4):</span></span>
<span class="line"><span>   0.0     0.5     0.2     0.3</span></span>
<span class="line"><span>   0.05    0.475   0.325   0.15</span></span>
<span class="line"><span>   0.1562  0.3906  0.4156  0.0375</span></span>
<span class="line"><span>   0.0833  0.375   0.3417  0.2</span></span>
<span class="line"><span>  - Initial Probabilities -&gt; Vector{Float64}(4 × 1):</span></span>
<span class="line"><span>   0.087   0.4348  0.3478  0.1304</span></span></code></pre></div>`,2))])}const y=l(o,[["render",g]]);export{f as __pageData,y as default};
