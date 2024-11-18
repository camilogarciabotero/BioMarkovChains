import{_ as a,o as n,c as i,a5 as e}from"./chunks/framework.B-5ieMJV.js";const k=JSON.parse('{"title":"From BMC to sequence probabilties","description":"","frontmatter":{},"headers":[],"relativePath":"article01.md","filePath":"article01.md","lastUpdated":null}'),p={name:"article01.md"};function t(l,s,o,c,h,r){return n(),i("div",null,s[0]||(s[0]=[e(`<h1 id="From-BMC-to-sequence-probabilties" tabindex="-1">From BMC to sequence probabilties <a class="header-anchor" href="#From-BMC-to-sequence-probabilties" aria-label="Permalink to &quot;From BMC to sequence probabilties {#From-BMC-to-sequence-probabilties}&quot;">​</a></h1><p>We can now calculate a transition probability matrix from a <code>LongDNA</code> sequence using the <code>transition_probability_matrix</code> and <code>initials</code> methods:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BioSequences</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sequence </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dna</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;CCTCCCGGACCCTGGGCTCGGGAC&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tpm </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> transition_probability_matrix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sequence)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">initials </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> initials</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sequence)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tpm)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(initials)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>4×4 Matrix{Float64}:</span></span>
<span class="line"><span> 0.0   1.0       0.0       0.0</span></span>
<span class="line"><span> 0.0   0.5       0.2       0.3</span></span>
<span class="line"><span> 0.25  0.125     0.625     0.0</span></span>
<span class="line"><span> 0.0   0.666667  0.333333  0.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4-element Vector{Float64}:</span></span>
<span class="line"><span> 0.08695652173913043</span></span>
<span class="line"><span> 0.43478260869565216</span></span>
<span class="line"><span> 0.34782608695652173</span></span>
<span class="line"><span> 0.13043478260869565</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span></code></pre></div>`,5)]))}const u=a(p,[["render",t]]);export{k as __pageData,u as default};
