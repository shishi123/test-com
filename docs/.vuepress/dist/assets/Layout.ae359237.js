var De=Object.defineProperty,Ie=Object.defineProperties;var He=Object.getOwnPropertyDescriptors;var de=Object.getOwnPropertySymbols;var Me=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable;var _e=(l,t,e)=>t in l?De(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e,Y=(l,t)=>{for(var e in t||(t={}))Me.call(t,e)&&_e(l,e,t[e]);if(de)for(var e of de(t))Pe.call(t,e)&&_e(l,e,t[e]);return l},J=(l,t)=>Ie(l,He(t));import{_ as S,r as R,o as r,b as c,f as $,d as C,i as P,j as p,k as me,g as a,F as I,l as A,e as g,t as x,m as w,n as z,p as Q,q as T,w as N,s as pe,v as y,h as j,x as X,y as Ee,z as Re,A as Ae,B as Z,C as ee,D as E,E as K,G as fe,H as be,u as ge,a as D,T as ke,I as O,J as $e,K as q,L as G,M as Fe,N as Oe,O as te,P as Le,Q as ye,c as ze,R as we,S as We,U,V as ae,W as Ve,X as Ue,Y as je,Z as Ke}from"./app.8cc3ff52.js";const qe={},Ge={class:"theme-default-content custom"};function Xe(l,t){const e=R("Content");return r(),c("div",Ge,[$(e)])}var Ye=S(qe,[["render",Xe],["__file","HomeContent.vue"]]);const Je={key:0,class:"features"},Qe=C({__name:"HomeFeatures",setup(l){const t=P(),e=p(()=>me(t.value.features)?t.value.features:[]);return(i,o)=>a(e).length?(r(),c("div",Je,[(r(!0),c(I,null,A(a(e),d=>(r(),c("div",{key:d.title,class:"feature"},[g("h2",null,x(d.title),1),g("p",null,x(d.details),1)]))),128))])):w("",!0)}});var Ze=S(Qe,[["__file","HomeFeatures.vue"]]);const et=["innerHTML"],tt=["textContent"],at=C({__name:"HomeFooter",setup(l){const t=P(),e=p(()=>t.value.footer),i=p(()=>t.value.footerHtml);return(o,d)=>a(e)?(r(),c(I,{key:0},[a(i)?(r(),c("div",{key:0,class:"footer",innerHTML:a(e)},null,8,et)):(r(),c("div",{key:1,class:"footer",textContent:x(a(e))},null,8,tt))],64)):w("",!0)}});var nt=S(at,[["__file","HomeFooter.vue"]]);const rt=["href","rel","target","aria-label"],ot=C({inheritAttrs:!1}),st=C(J(Y({},ot),{__name:"AutoLink",props:{item:{type:Object,required:!0}},setup(l){const t=l,e=z(),i=Ae(),{item:o}=Q(t),d=p(()=>X(o.value.link)),m=p(()=>Ee(o.value.link)||Re(o.value.link)),h=p(()=>{if(!m.value){if(o.value.target)return o.value.target;if(d.value)return"_blank"}}),n=p(()=>h.value==="_blank"),s=p(()=>!d.value&&!m.value&&!n.value),u=p(()=>{if(!m.value){if(o.value.rel)return o.value.rel;if(n.value)return"noopener noreferrer"}}),v=p(()=>o.value.ariaLabel||o.value.text),_=p(()=>{const L=Object.keys(i.value.locales);return L.length?!L.some(f=>f===o.value.link):o.value.link!=="/"}),b=p(()=>_.value?e.path.startsWith(o.value.link):!1),k=p(()=>s.value?o.value.activeMatch?new RegExp(o.value.activeMatch).test(e.path):b.value:!1);return(L,f)=>{const B=R("RouterLink"),H=R("AutoLinkExternalIcon");return a(s)?(r(),T(B,pe({key:0,class:{"router-link-active":a(k)},to:a(o).link,"aria-label":a(v)},L.$attrs),{default:N(()=>[y(L.$slots,"before"),j(" "+x(a(o).text)+" ",1),y(L.$slots,"after")]),_:3},16,["class","to","aria-label"])):(r(),c("a",pe({key:1,class:"external-link",href:a(o).link,rel:a(u),target:a(h),"aria-label":a(v)},L.$attrs),[y(L.$slots,"before"),j(" "+x(a(o).text)+" ",1),a(n)?(r(),T(H,{key:0})):w("",!0),y(L.$slots,"after")],16,rt))}}}));var M=S(st,[["__file","AutoLink.vue"]]);const lt={class:"hero"},ut={key:0,id:"main-title"},it={key:1,class:"description"},ct={key:2,class:"actions"},vt=C({__name:"HomeHero",setup(l){const t=P(),e=Z(),i=ee(),o=p(()=>i.value&&t.value.heroImageDark!==void 0?t.value.heroImageDark:t.value.heroImage),d=p(()=>t.value.heroText===null?null:t.value.heroText||e.value.title||"Hello"),m=p(()=>t.value.heroAlt||d.value||"hero"),h=p(()=>t.value.tagline===null?null:t.value.tagline||e.value.description||"Welcome to your VuePress site"),n=p(()=>me(t.value.actions)?t.value.actions.map(({text:u,link:v,type:_="primary"})=>({text:u,link:v,type:_})):[]),s=()=>{if(!o.value)return null;const u=K("img",{src:fe(o.value),alt:m.value});return t.value.heroImageDark===void 0?u:K(be,()=>u)};return(u,v)=>(r(),c("header",lt,[$(s),a(d)?(r(),c("h1",ut,x(a(d)),1)):w("",!0),a(h)?(r(),c("p",it,x(a(h)),1)):w("",!0),a(n).length?(r(),c("p",ct,[(r(!0),c(I,null,A(a(n),_=>(r(),T(M,{key:_.text,class:E(["action-button",[_.type]]),item:_},null,8,["class","item"]))),128))])):w("",!0)]))}});var dt=S(vt,[["__file","HomeHero.vue"]]);const _t={class:"home"},pt=C({__name:"Home",setup(l){return(t,e)=>(r(),c("main",_t,[$(dt),$(Ze),$(Ye),$(nt)]))}});var ht=S(pt,[["__file","Home.vue"]]);const mt=C({__name:"NavbarBrand",setup(l){const t=ge(),e=Z(),i=D(),o=ee(),d=p(()=>i.value.home||t.value),m=p(()=>e.value.title),h=p(()=>o.value&&i.value.logoDark!==void 0?i.value.logoDark:i.value.logo),n=()=>{if(!h.value)return null;const s=K("img",{class:"logo",src:fe(h.value),alt:m.value});return i.value.logoDark===void 0?s:K(be,()=>s)};return(s,u)=>{const v=R("RouterLink");return r(),T(v,{to:a(d)},{default:N(()=>[$(n),a(m)?(r(),c("span",{key:0,class:E(["site-name",{"can-hide":a(h)}])},x(a(m)),3)):w("",!0)]),_:1},8,["to"])}}});var ft=S(mt,[["__file","NavbarBrand.vue"]]);const bt=C({__name:"DropdownTransition",setup(l){const t=i=>{i.style.height=i.scrollHeight+"px"},e=i=>{i.style.height=""};return(i,o)=>(r(),T(ke,{name:"dropdown",onEnter:t,onAfterEnter:e,onBeforeLeave:t},{default:N(()=>[y(i.$slots,"default")]),_:3}))}});var Se=S(bt,[["__file","DropdownTransition.vue"]]);const gt=["aria-label"],kt={class:"title"},$t=g("span",{class:"arrow down"},null,-1),Lt=["aria-label"],yt={class:"title"},wt={class:"navbar-dropdown"},St={class:"navbar-dropdown-subtitle"},Ct={key:1},Tt={class:"navbar-dropdown-subitem-wrapper"},xt=C({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(l){const t=l,{item:e}=Q(t),i=p(()=>e.value.ariaLabel||e.value.text),o=O(!1),d=z();$e(()=>d.path,()=>{o.value=!1});const m=n=>{n.detail===0?o.value=!o.value:o.value=!1},h=(n,s)=>s[s.length-1]===n;return(n,s)=>(r(),c("div",{class:E(["navbar-dropdown-wrapper",{open:o.value}])},[g("button",{class:"navbar-dropdown-title",type:"button","aria-label":a(i),onClick:m},[g("span",kt,x(a(e).text),1),$t],8,gt),g("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":a(i),onClick:s[0]||(s[0]=u=>o.value=!o.value)},[g("span",yt,x(a(e).text),1),g("span",{class:E(["arrow",o.value?"down":"right"])},null,2)],8,Lt),$(Se,null,{default:N(()=>[q(g("ul",wt,[(r(!0),c(I,null,A(a(e).children,u=>(r(),c("li",{key:u.text,class:"navbar-dropdown-item"},[u.children?(r(),c(I,{key:0},[g("h4",St,[u.link?(r(),T(M,{key:0,item:u,onFocusout:v=>h(u,a(e).children)&&u.children.length===0&&(o.value=!1)},null,8,["item","onFocusout"])):(r(),c("span",Ct,x(u.text),1))]),g("ul",Tt,[(r(!0),c(I,null,A(u.children,v=>(r(),c("li",{key:v.link,class:"navbar-dropdown-subitem"},[$(M,{item:v,onFocusout:_=>h(v,u.children)&&h(u,a(e).children)&&(o.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(r(),T(M,{key:1,item:u,onFocusout:v=>h(u,a(e).children)&&(o.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[G,o.value]])]),_:1})],2))}});var Bt=S(xt,[["__file","NavbarDropdown.vue"]]);const he=l=>decodeURI(l).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Nt=(l,t)=>{if(t.hash===l)return!0;const e=he(t.path),i=he(l);return e===i},Ce=(l,t)=>l.link&&Nt(l.link,t)?!0:l.children?l.children.some(e=>Ce(e,t)):!1,Te=l=>!X(l)||/github\.com/.test(l)?"GitHub":/bitbucket\.org/.test(l)?"Bitbucket":/gitlab\.com/.test(l)?"GitLab":/gitee\.com/.test(l)?"Gitee":null,Dt={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},It=({docsRepo:l,editLinkPattern:t})=>{if(t)return t;const e=Te(l);return e!==null?Dt[e]:null},Ht=({docsRepo:l,docsBranch:t,docsDir:e,filePathRelative:i,editLinkPattern:o})=>{if(!i)return null;const d=It({docsRepo:l,editLinkPattern:o});return d?d.replace(/:repo/,X(l)?l:`https://github.com/${l}`).replace(/:branch/,t).replace(/:path/,Fe(`${Oe(e)}/${i}`)):null},Mt={key:0,class:"navbar-items"},Pt=C({__name:"NavbarItems",setup(l){const t=()=>{const s=te(),u=ge(),v=Z(),_=D();return p(()=>{var B,H;const b=Object.keys(v.value.locales);if(b.length<2)return[];const k=s.currentRoute.value.path,L=s.currentRoute.value.fullPath;return[{text:(B=_.value.selectLanguageText)!=null?B:"unknown language",ariaLabel:(H=_.value.selectLanguageAriaLabel)!=null?H:"unkown language",children:b.map(F=>{var oe,se,le,ue,ie,ce;const W=(se=(oe=v.value.locales)==null?void 0:oe[F])!=null?se:{},ne=(ue=(le=_.value.locales)==null?void 0:le[F])!=null?ue:{},re=`${W.lang}`,Be=(ie=ne.selectLanguageName)!=null?ie:re;let V;if(re===v.value.lang)V=L;else{const ve=k.replace(u.value,F);s.getRoutes().some(Ne=>Ne.path===ve)?V=ve:V=(ce=ne.home)!=null?ce:F}return{text:Be,link:V}})}]})},e=()=>{const s=D(),u=p(()=>s.value.repo),v=p(()=>u.value?Te(u.value):null),_=p(()=>u.value&&!X(u.value)?`https://github.com/${u.value}`:u.value),b=p(()=>_.value?s.value.repoLabel?s.value.repoLabel:v.value===null?"Source":v.value:null);return p(()=>!_.value||!b.value?[]:[{text:b.value,link:_.value}])},i=s=>Le(s)?ye(s):s.children?J(Y({},s),{children:s.children.map(i)}):s,d=(()=>{const s=D();return p(()=>(s.value.navbar||[]).map(i))})(),m=t(),h=e(),n=p(()=>[...d.value,...m.value,...h.value]);return(s,u)=>a(n).length?(r(),c("nav",Mt,[(r(!0),c(I,null,A(a(n),v=>(r(),c("div",{key:v.text,class:"navbar-item"},[v.children?(r(),T(Bt,{key:0,item:v},null,8,["item"])):(r(),T(M,{key:1,item:v},null,8,["item"]))]))),128))])):w("",!0)}});var xe=S(Pt,[["__file","NavbarItems.vue"]]);const Et=["title"],Rt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},At=ze('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),Ft=[At],Ot={class:"icon",focusable:"false",viewBox:"0 0 32 32"},zt=g("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),Wt=[zt],Vt=C({__name:"ToggleDarkModeButton",setup(l){const t=D(),e=ee(),i=()=>{e.value=!e.value};return(o,d)=>(r(),c("button",{class:"toggle-dark-button",title:a(t).toggleDarkMode,onClick:i},[q((r(),c("svg",Rt,Ft,512)),[[G,!a(e)]]),q((r(),c("svg",Ot,Wt,512)),[[G,a(e)]])],8,Et))}});var Ut=S(Vt,[["__file","ToggleDarkModeButton.vue"]]);const jt=["title"],Kt=g("div",{class:"icon","aria-hidden":"true"},[g("span"),g("span"),g("span")],-1),qt=[Kt],Gt=C({__name:"ToggleSidebarButton",emits:["toggle"],setup(l){const t=D();return(e,i)=>(r(),c("div",{class:"toggle-sidebar-button",title:a(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:i[0]||(i[0]=o=>e.$emit("toggle"))},qt,8,jt))}});var Xt=S(Gt,[["__file","ToggleSidebarButton.vue"]]);const Yt=C({__name:"Navbar",emits:["toggle-sidebar"],setup(l){const t=D(),e=O(null),i=O(null),o=O(0),d=p(()=>o.value?{maxWidth:o.value+"px"}:{}),m=p(()=>t.value.darkMode);we(()=>{const s=h(e.value,"paddingLeft")+h(e.value,"paddingRight"),u=()=>{var v;window.innerWidth<=719?o.value=0:o.value=e.value.offsetWidth-s-(((v=i.value)==null?void 0:v.offsetWidth)||0)};u(),window.addEventListener("resize",u,!1),window.addEventListener("orientationchange",u,!1)});function h(n,s){var _,b,k;const u=(k=(b=(_=n==null?void 0:n.ownerDocument)==null?void 0:_.defaultView)==null?void 0:b.getComputedStyle(n,null))==null?void 0:k[s],v=Number.parseInt(u,10);return Number.isNaN(v)?0:v}return(n,s)=>{const u=R("NavbarSearch");return r(),c("header",{ref_key:"navbar",ref:e,class:"navbar"},[$(Xt,{onToggle:s[0]||(s[0]=v=>n.$emit("toggle-sidebar"))}),g("span",{ref_key:"navbarBrand",ref:i},[$(ft)],512),g("div",{class:"navbar-items-wrapper",style:We(a(d))},[y(n.$slots,"before"),$(xe,{class:"can-hide"}),y(n.$slots,"after"),a(m)?(r(),T(Ut,{key:0})):w("",!0),$(u)],4)],512)}}});var Jt=S(Yt,[["__file","Navbar.vue"]]);const Qt={class:"page-meta"},Zt={key:0,class:"meta-item edit-link"},ea={key:1,class:"meta-item last-updated"},ta={class:"meta-item-label"},aa={class:"meta-item-info"},na={key:2,class:"meta-item contributors"},ra={class:"meta-item-label"},oa={class:"meta-item-info"},sa=["title"],la=j(", "),ua=C({__name:"PageMeta",setup(l){const t=()=>{const n=D(),s=U(),u=P();return p(()=>{var H,F,W;if(!((F=(H=u.value.editLink)!=null?H:n.value.editLink)!=null?F:!0))return null;const{repo:_,docsRepo:b=_,docsBranch:k="main",docsDir:L="",editLinkText:f}=n.value;if(!b)return null;const B=Ht({docsRepo:b,docsBranch:k,docsDir:L,filePathRelative:s.value.filePathRelative,editLinkPattern:(W=u.value.editLinkPattern)!=null?W:n.value.editLinkPattern});return B?{text:f!=null?f:"Edit this page",link:B}:null})},e=()=>{const n=D(),s=U(),u=P();return p(()=>{var b,k,L,f;return!((k=(b=u.value.lastUpdated)!=null?b:n.value.lastUpdated)!=null?k:!0)||!((L=s.value.git)!=null&&L.updatedTime)?null:new Date((f=s.value.git)==null?void 0:f.updatedTime).toLocaleString()})},i=()=>{const n=D(),s=U(),u=P();return p(()=>{var _,b,k,L;return((b=(_=u.value.contributors)!=null?_:n.value.contributors)!=null?b:!0)&&(L=(k=s.value.git)==null?void 0:k.contributors)!=null?L:null})},o=D(),d=t(),m=e(),h=i();return(n,s)=>{const u=R("ClientOnly");return r(),c("footer",Qt,[a(d)?(r(),c("div",Zt,[$(M,{class:"meta-item-label",item:a(d)},null,8,["item"])])):w("",!0),a(m)?(r(),c("div",ea,[g("span",ta,x(a(o).lastUpdatedText)+": ",1),$(u,null,{default:N(()=>[g("span",aa,x(a(m)),1)]),_:1})])):w("",!0),a(h)&&a(h).length?(r(),c("div",na,[g("span",ra,x(a(o).contributorsText)+": ",1),g("span",oa,[(r(!0),c(I,null,A(a(h),(v,_)=>(r(),c(I,{key:_},[g("span",{class:"contributor",title:`email: ${v.email}`},x(v.name),9,sa),_!==a(h).length-1?(r(),c(I,{key:0},[la],64)):w("",!0)],64))),128))])])):w("",!0)])}}});var ia=S(ua,[["__file","PageMeta.vue"]]);const ca={key:0,class:"page-nav"},va={class:"inner"},da={key:0,class:"prev"},_a={key:1,class:"next"},pa=C({__name:"PageNav",setup(l){const t=n=>n===!1?null:Le(n)?ye(n):Ve(n)?n:!1,e=(n,s,u)=>{const v=n.findIndex(_=>_.link===s);if(v!==-1){const _=n[v+u];return _!=null&&_.link?_:null}for(const _ of n)if(_.children){const b=e(_.children,s,u);if(b)return b}return null},i=P(),o=ae(),d=z(),m=p(()=>{const n=t(i.value.prev);return n!==!1?n:e(o.value,d.path,-1)}),h=p(()=>{const n=t(i.value.next);return n!==!1?n:e(o.value,d.path,1)});return(n,s)=>a(m)||a(h)?(r(),c("nav",ca,[g("p",va,[a(m)?(r(),c("span",da,[$(M,{item:a(m)},null,8,["item"])])):w("",!0),a(h)?(r(),c("span",_a,[$(M,{item:a(h)},null,8,["item"])])):w("",!0)])])):w("",!0)}});var ha=S(pa,[["__file","PageNav.vue"]]);const ma={class:"page"},fa={class:"theme-default-content"},ba=C({__name:"Page",setup(l){return(t,e)=>{const i=R("Content");return r(),c("main",ma,[y(t.$slots,"top"),g("div",fa,[$(i)]),$(ia),$(ha),y(t.$slots,"bottom")])}}});var ga=S(ba,[["__file","Page.vue"]]);const ka={class:"sidebar-item-children"},$a=C({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(l){const t=l,{item:e,depth:i}=Q(t),o=z(),d=te(),m=p(()=>Ce(e.value,o)),h=p(()=>({"sidebar-item":!0,"sidebar-heading":i.value===0,active:m.value,collapsible:e.value.collapsible})),n=O(!0),s=O(void 0);return e.value.collapsible&&(n.value=m.value,s.value=()=>{n.value=!n.value},d.afterEach(()=>{n.value=m.value})),(u,v)=>{var b;const _=R("SidebarItem",!0);return r(),c("li",null,[a(e).link?(r(),T(M,{key:0,class:E(a(h)),item:a(e)},null,8,["class","item"])):(r(),c("p",{key:1,tabindex:"0",class:E(a(h)),onClick:v[0]||(v[0]=(...k)=>s.value&&s.value(...k)),onKeydown:v[1]||(v[1]=Ue((...k)=>s.value&&s.value(...k),["enter"]))},[j(x(a(e).text)+" ",1),a(e).collapsible?(r(),c("span",{key:0,class:E(["arrow",n.value?"down":"right"])},null,2)):w("",!0)],34)),(b=a(e).children)!=null&&b.length?(r(),T(Se,{key:2},{default:N(()=>[q(g("ul",ka,[(r(!0),c(I,null,A(a(e).children,k=>(r(),T(_,{key:`${a(i)}${k.text}${k.link}`,item:k,depth:a(i)+1},null,8,["item","depth"]))),128))],512),[[G,n.value]])]),_:1})):w("",!0)])}}});var La=S($a,[["__file","SidebarItem.vue"]]);const ya={key:0,class:"sidebar-items"},wa=C({__name:"SidebarItems",setup(l){const t=z(),e=ae();return $e(()=>t.hash,i=>{const o=document.querySelector(".sidebar");if(!o)return;const d=document.querySelector(`.sidebar a.sidebar-item[href="${t.path}${i}"]`);if(!d)return;const m=o.getBoundingClientRect().top,h=o.getBoundingClientRect().height,n=d.getBoundingClientRect().top,s=d.getBoundingClientRect().height;n<m?d.scrollIntoView(!0):n+s>m+h&&d.scrollIntoView(!1)}),(i,o)=>a(e).length?(r(),c("ul",ya,[(r(!0),c(I,null,A(a(e),d=>(r(),T(La,{key:d.link||d.text,item:d},null,8,["item"]))),128))])):w("",!0)}});var Sa=S(wa,[["__file","SidebarItems.vue"]]);const Ca={class:"sidebar"},Ta=C({__name:"Sidebar",setup(l){return(t,e)=>(r(),c("aside",Ca,[$(xe),y(t.$slots,"top"),$(Sa),y(t.$slots,"bottom")]))}});var xa=S(Ta,[["__file","Sidebar.vue"]]);const Ba=C({__name:"Layout",setup(l){const t=U(),e=P(),i=D(),o=p(()=>e.value.navbar!==!1&&i.value.navbar!==!1),d=ae(),m=O(!1),h=f=>{m.value=typeof f=="boolean"?f:!m.value},n={x:0,y:0},s=f=>{n.x=f.changedTouches[0].clientX,n.y=f.changedTouches[0].clientY},u=f=>{const B=f.changedTouches[0].clientX-n.x,H=f.changedTouches[0].clientY-n.y;Math.abs(B)>Math.abs(H)&&Math.abs(B)>40&&(B>0&&n.x<=80?h(!0):h(!1))},v=p(()=>[{"no-navbar":!o.value,"no-sidebar":!d.value.length,"sidebar-open":m.value},e.value.pageClass]);let _;we(()=>{_=te().afterEach(()=>{h(!1)})}),je(()=>{_()});const b=Ke(),k=b.resolve,L=b.pending;return(f,B)=>(r(),c("div",{class:E(["theme-container",a(v)]),onTouchstart:s,onTouchend:u},[y(f.$slots,"navbar",{},()=>[a(o)?(r(),T(Jt,{key:0,onToggleSidebar:h},{before:N(()=>[y(f.$slots,"navbar-before")]),after:N(()=>[y(f.$slots,"navbar-after")]),_:3})):w("",!0)]),g("div",{class:"sidebar-mask",onClick:B[0]||(B[0]=H=>h(!1))}),y(f.$slots,"sidebar",{},()=>[$(xa,null,{top:N(()=>[y(f.$slots,"sidebar-top")]),bottom:N(()=>[y(f.$slots,"sidebar-bottom")]),_:3})]),y(f.$slots,"page",{},()=>[a(e).home?(r(),T(ht,{key:0})):(r(),T(ke,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:a(k),onBeforeLeave:a(L)},{default:N(()=>[(r(),T(ga,{key:a(t).path},{top:N(()=>[y(f.$slots,"page-top")]),bottom:N(()=>[y(f.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});var Ia=S(Ba,[["__file","Layout.vue"]]);export{Ia as default};
