import{_ as a,o as i,c as n,a2 as t}from"./chunks/framework.wVcpyw2-.js";const c=JSON.parse('{"title":"架构概览","description":"灵萌 V2 模块化单体架构简介：分层设计、模块装配与扩展方式。","frontmatter":{"title":"架构概览","description":"灵萌 V2 模块化单体架构简介：分层设计、模块装配与扩展方式。"},"headers":[],"relativePath":"backend/architecture.md","filePath":"backend/architecture.md","lastUpdated":1785020677000}'),e={name:"backend/architecture.md"};function l(p,s,r,h,d,E){return i(),n("div",null,[...s[0]||(s[0]=[t(`<h2 id="设计原则" tabindex="-1">设计原则 <a class="header-anchor" href="#设计原则" aria-label="Permalink to &quot;设计原则&quot;">​</a></h2><p>灵萌 V2 采用 <strong>Go 模块化单体 + uni-app X 四端</strong> 架构：</p><ul><li><strong>30 个业务模块</strong>遵循统一五层结构（handler → service → repository → model → dto）</li><li><strong>横切能力</strong>（缓存、锁、Outbox、通知、账本等）沉淀在 <code>pkg/</code> 与 <code>infrastructure/</code></li><li><strong>bootstrap/wiring</strong> 统一装配，支持 <code>full</code>（API + 任务）与 <code>worker</code>（仅后台任务）启动模式</li></ul><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart TB</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  subgraph Client[&quot;客户端&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    App[App / 小程序 / H5]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Admin[管理后台 H5]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  subgraph Server[&quot;灵萌服务端&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    API[HTTP / WebSocket API]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Modules[30 业务模块]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    PKG[pkg 工具库]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Infra[基础设施]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  subgraph Data[&quot;数据与中间件&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    MySQL[(MySQL)]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Redis[(Redis)]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    MS[Meilisearch 可选]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  App --&gt; API</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Admin --&gt; API</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  API --&gt; Modules</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Modules --&gt; PKG</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Modules --&gt; Infra</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Infra --&gt; MySQL</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Infra --&gt; Redis</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Infra --&gt; MS</span></span></code></pre></div><h2 id="模块与能力" tabindex="-1">模块与能力 <a class="header-anchor" href="#模块与能力" aria-label="Permalink to &quot;模块与能力&quot;">​</a></h2><p>对外以<strong>功能模块</strong>形式交付（社区、消息、支付、外卖、AI 等），可按区域与授权开关启用。</p><p>完整清单见 <strong><a href="/guide/modules">功能模块总览</a></strong>（不含价格，含配置文档链接）。</p><h2 id="相关文档" tabindex="-1">相关文档 <a class="header-anchor" href="#相关文档" aria-label="Permalink to &quot;相关文档&quot;">​</a></h2><table tabindex="0"><thead><tr><th>文档</th><th>说明</th></tr></thead><tbody><tr><td><a href="/guide/modules">功能模块总览</a></td><td>全部模块能力说明与配置入口</td></tr><tr><td><a href="/guide/quick-start">快速部署</a></td><td>首次安装与启动</td></tr><tr><td><a href="/config/system-settings">系统配置总览</a></td><td>微信、存储、地图等基础配置</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">二次开发</p><p>若需阅读代码结构、数据库迁移、架构守卫等开发内容，请参考项目仓库内 <code>docs/</code> 目录与 <code>DEVELOPMENT_GUIDELINES.md</code>。</p></div>`,10)])])}const k=a(e,[["render",l]]);export{c as __pageData,k as default};
