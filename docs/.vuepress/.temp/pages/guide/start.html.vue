<template><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i @dongdong-components/TwoColumns
<span class="token comment"># or</span>
<span class="token function">yarn</span> <span class="token function">add</span> @dongdong-components/TwoColumns


<span class="token comment">## 使用</span>

```vue
<span class="token operator">&lt;</span>template<span class="token operator">></span>
 <span class="token operator">&lt;</span>TwoColumns<span class="token operator">></span>
 <span class="token operator">&lt;</span>/TwoColumns<span class="token operator">></span>
<span class="token operator">&lt;</span>/template<span class="token operator">></span>

<span class="token operator">&lt;</span>script <span class="token assign-left variable">lang</span><span class="token operator">=</span><span class="token string">"ts"</span><span class="token operator">></span>
<span class="token function">import</span> <span class="token punctuation">{</span> defineComponent, toRefs <span class="token punctuation">}</span> from <span class="token string">'vue'</span>
<span class="token function">import</span> TwoColumns from <span class="token string">'@dongdong-components/TwoColumns'</span>

<span class="token builtin class-name">export</span> default defineComponent<span class="token punctuation">(</span><span class="token punctuation">{</span>
  name: <span class="token string">'oa-TwoColumns'</span>,
  components: <span class="token punctuation">{</span> TwoColumns <span class="token punctuation">}</span>,
  <span class="token function-name function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span>/script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
