import{q as ae,v as D,r as C,B as ce,o as se,b as v,c as E,I as R,C as L,f as c,s as de,x as oe,Q as Ge,H as B,g as w,h as _,E as Ke,J as q,W as me,R as we,U as ve,K as Ee,b7 as Je,T as Be,z as g,a as Ce,w as te,ab as Pe,V as T,e as Ue,a3 as Qe,F,ah as Xe,M as ne,aq as Ye,y as Ze,a6 as et,k as Ne,j as J,L as Ae,d as $,b6 as xe,G as Se,u as tt,b8 as nt}from"./index.4123b150.js";import{a0 as ot,a as P,_ as U,g as V,h as O,ak as ue,S as re,T as _e,A as at,al as st,L as pe,k as Oe,t as lt,a8 as Te,M as rt,am as ut,z as it,an as ct,ao as dt}from"./el-button.94108e53.js";import"./el-tooltip.586473e3.js";import{E as Re,d as pt}from"./el-popper.ef829556.js";/* empty css                *//* empty css                       */import{a as mt,b as vt,E as ft}from"./el-dropdown-menu.421fd34f.js";import{_ as ze}from"./plugin-vue_export-helper.21dcd24c.js";import"./refs.d7d40db4.js";const Le=Symbol("breadcrumbKey"),ht=ae({separator:{type:String,default:"/"},separatorIcon:{type:ot,default:""}}),bt={name:"ElBreadcrumb"},gt=D({...bt,props:ht,setup(e){const o=e,n=P("breadcrumb"),t=C();return ce(Le,o),se(()=>{const s=t.value.querySelectorAll(`.${n.e("item")}`);s.length&&s[s.length-1].setAttribute("aria-current","page")}),(s,b)=>(v(),E("div",{ref_key:"breadcrumb",ref:t,class:L(c(n).b()),"aria-label":"Breadcrumb",role:"navigation"},[R(s.$slots,"default")],2))}});var _t=U(gt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb.vue"]]);const yt=ae({to:{type:de([String,Object]),default:""},replace:{type:Boolean,default:!1}}),Mt={name:"ElBreadcrumbItem"},kt=D({...Mt,props:yt,setup(e){const o=e,n=me(),t=oe(Le,void 0),s=P("breadcrumb"),{separator:b,separatorIcon:i}=Ge(t),d=n.appContext.config.globalProperties.$router,r=C(),f=()=>{!o.to||!d||(o.replace?d.replace(o.to):d.push(o.to))};return(m,h)=>(v(),E("span",{class:L(c(s).e("item"))},[B("span",{ref_key:"link",ref:r,class:L([c(s).e("inner"),c(s).is("link",!!m.to)]),role:"link",onClick:f},[R(m.$slots,"default")],2),c(i)?(v(),w(c(V),{key:0,class:L(c(s).e("separator"))},{default:_(()=>[(v(),w(Ke(c(i))))]),_:1},8,["class"])):(v(),E("span",{key:1,class:L(c(s).e("separator")),role:"presentation"},q(c(b)),3))],2))}});var He=U(kt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb-item.vue"]]);const Ct=we(_t,{BreadcrumbItem:He}),$e=ve(He),It={name:"ElCollapseTransition"},xt=D({...It,setup(e){const o=P("collapse-transition"),n={beforeEnter(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){t.dataset.oldOverflow=t.style.overflow,t.scrollHeight!==0?(t.style.maxHeight=`${t.scrollHeight}px`,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom):(t.style.maxHeight=0,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom),t.style.overflow="hidden"},afterEnter(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.maxHeight=`${t.scrollHeight}px`,t.style.overflow="hidden"},leave(t){t.scrollHeight!==0&&(t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom}};return(t,s)=>(v(),w(Be,Ee({name:c(o).b()},Je(n)),{default:_(()=>[R(t.$slots,"default")]),_:3},16,["name"]))}});var ie=U(xt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);ie.install=e=>{e.component(ie.name,ie)};const St=ie;class Tt{constructor(o,n){this.parent=o,this.domNode=n,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(o){o===this.subMenuItems.length?o=0:o<0&&(o=this.subMenuItems.length-1),this.subMenuItems[o].focus(),this.subIndex=o}addListeners(){const o=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,n=>{n.addEventListener("keydown",t=>{let s=!1;switch(t.code){case O.down:{this.gotoSubIndex(this.subIndex+1),s=!0;break}case O.up:{this.gotoSubIndex(this.subIndex-1),s=!0;break}case O.tab:{ue(o,"mouseleave");break}case O.enter:case O.space:{s=!0,t.currentTarget.click();break}}return s&&(t.preventDefault(),t.stopPropagation()),!1})})}}class $t{constructor(o,n){this.domNode=o,this.submenu=null,this.submenu=null,this.init(n)}init(o){this.domNode.setAttribute("tabindex","0");const n=this.domNode.querySelector(`.${o}-menu`);n&&(this.submenu=new Tt(this,n)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",o=>{let n=!1;switch(o.code){case O.down:{ue(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),n=!0;break}case O.up:{ue(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),n=!0;break}case O.tab:{ue(o.currentTarget,"mouseleave");break}case O.enter:case O.space:{n=!0,o.currentTarget.click();break}}n&&o.preventDefault()})}}class wt{constructor(o,n){this.domNode=o,this.init(n)}init(o){const n=this.domNode.childNodes;Array.from(n).forEach(t=>{t.nodeType===1&&new $t(t,o)})}}const Et=D({name:"ElMenuCollapseTransition",setup(){const e=P("menu");return{listeners:{onBeforeEnter:n=>n.style.opacity="0.2",onEnter(n,t){re(n,`${e.namespace.value}-opacity-transition`),n.style.opacity="1",t()},onAfterEnter(n){_e(n,`${e.namespace.value}-opacity-transition`),n.style.opacity=""},onBeforeLeave(n){n.dataset||(n.dataset={}),at(n,e.m("collapse"))?(_e(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),re(n,e.m("collapse"))):(re(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),_e(n,e.m("collapse"))),n.style.width=`${n.scrollWidth}px`,n.style.overflow="hidden"},onLeave(n){re(n,"horizontal-collapse-transition"),n.style.width=`${n.dataset.scrollWidth}px`}}}}});function Bt(e,o,n,t,s,b){return v(),w(Be,Ee({mode:"out-in"},e.listeners),{default:_(()=>[R(e.$slots,"default")]),_:3},16)}var Pt=U(Et,[["render",Bt],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);function De(e,o){const n=g(()=>{let s=e.parent;const b=[o.value];for(;s.type.name!=="ElMenu";)s.props.index&&b.unshift(s.props.index),s=s.parent;return b});return{parentMenu:g(()=>{let s=e.parent;for(;s&&!["ElMenu","ElSubMenu"].includes(s.type.name);)s=s.parent;return s}),indexPath:n}}function Nt(e){return g(()=>{const n=e.backgroundColor;return n?new st(n).shade(20).toString():""})}const We=(e,o)=>{const n=P("menu");return g(()=>n.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":Nt(e).value||"","active-color":e.activeTextColor||"",level:`${o}`}))},At=ae({index:{type:String,required:!0},showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300},popperClass:String,disabled:Boolean,popperAppendToBody:{type:Boolean,default:void 0},popperOffset:{type:Number,default:6}}),ye="ElSubMenu";var Ie=D({name:ye,props:At,setup(e,{slots:o,expose:n}){const t=me(),{indexPath:s,parentMenu:b}=De(t,g(()=>e.index)),i=P("menu"),d=P("sub-menu"),r=oe("rootMenu");r||pe(ye,"can not inject root menu");const f=oe(`subMenu:${b.value.uid}`);f||pe(ye,"can not inject sub menu");const m=C({}),h=C({});let M;const I=C(!1),fe=C(),le=C(null),W=g(()=>a.value==="horizontal"&&G.value?"bottom-start":"right-start"),Q=g(()=>a.value==="horizontal"&&G.value||a.value==="vertical"&&!r.props.collapse?Oe:lt),G=g(()=>f.level===0),X=g(()=>e.popperAppendToBody===void 0?G.value:Boolean(e.popperAppendToBody)),he=g(()=>r.props.collapse?`${i.namespace.value}-zoom-in-left`:`${i.namespace.value}-zoom-in-top`),be=g(()=>a.value==="horizontal"&&G.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","left-start","bottom-start","bottom-end","top-start","top-end"]),j=g(()=>r.openedMenus.includes(e.index)),H=g(()=>{let p=!1;return Object.values(m.value).forEach(k=>{k.active&&(p=!0)}),Object.values(h.value).forEach(k=>{k.active&&(p=!0)}),p}),Y=g(()=>r.props.backgroundColor||""),K=g(()=>r.props.activeTextColor||""),Z=g(()=>r.props.textColor||""),a=g(()=>r.props.mode),l=Ce({index:e.index,indexPath:s,active:H}),u=g(()=>a.value!=="horizontal"?{color:Z.value}:{borderBottomColor:H.value?r.props.activeTextColor?K.value:"":"transparent",color:H.value?K.value:Z.value}),y=()=>{var p,k,S;return(S=(k=(p=le.value)==null?void 0:p.popperRef)==null?void 0:k.popperInstanceRef)==null?void 0:S.destroy()},x=p=>{p||y()},A=()=>{r.props.menuTrigger==="hover"&&r.props.mode==="horizontal"||r.props.collapse&&r.props.mode==="vertical"||e.disabled||r.handleSubMenuClick({index:e.index,indexPath:s.value,active:H.value})},N=(p,k=e.showTimeout)=>{var S;p.type!=="focus"&&(r.props.menuTrigger==="click"&&r.props.mode==="horizontal"||!r.props.collapse&&r.props.mode==="vertical"||e.disabled||(f.mouseInChild.value=!0,M==null||M(),{stop:M}=Te(()=>{r.openMenu(e.index,s.value)},k),X.value&&((S=b.value.vnode.el)==null||S.dispatchEvent(new MouseEvent("mouseenter")))))},z=(p=!1)=>{var k,S;r.props.menuTrigger==="click"&&r.props.mode==="horizontal"||!r.props.collapse&&r.props.mode==="vertical"||(M==null||M(),f.mouseInChild.value=!1,{stop:M}=Te(()=>!I.value&&r.closeMenu(e.index,s.value),e.hideTimeout),X.value&&p&&((k=t.parent)==null?void 0:k.type.name)==="ElSubMenu"&&((S=f.handleMouseleave)==null||S.call(f,!0)))};te(()=>r.props.collapse,p=>x(Boolean(p)));{const p=S=>{h.value[S.index]=S},k=S=>{delete h.value[S.index]};ce(`subMenu:${t.uid}`,{addSubMenu:p,removeSubMenu:k,handleMouseleave:z,mouseInChild:I,level:f.level+1})}return n({opened:j}),se(()=>{r.addSubMenu(l),f.addSubMenu(l)}),Pe(()=>{f.removeSubMenu(l),r.removeSubMenu(l)}),()=>{var p;const k=[(p=o.title)==null?void 0:p.call(o),T(V,{class:d.e("icon-arrow")},{default:()=>T(Q.value)})],S=We(r.props,f.level+1),Ve=r.isMenuPopup?T(Re,{ref:le,visible:j.value,effect:"light",pure:!0,offset:e.popperOffset,showArrow:!1,persistent:!0,popperClass:e.popperClass,placement:W.value,teleported:X.value,fallbackPlacements:be.value,transition:he.value,gpuAcceleration:!1},{content:()=>{var ee;return T("div",{class:[i.m(a.value),i.m("popup-container"),e.popperClass],onMouseenter:ge=>N(ge,100),onMouseleave:()=>z(!0),onFocus:ge=>N(ge,100)},[T("ul",{class:[i.b(),i.m("popup"),i.m(`popup-${W.value}`)],style:S.value},[(ee=o.default)==null?void 0:ee.call(o)])])},default:()=>T("div",{class:d.e("title"),style:[u.value,{backgroundColor:Y.value}],onClick:A},k)}):T(F,{},[T("div",{class:d.e("title"),style:[u.value,{backgroundColor:Y.value}],ref:fe,onClick:A},k),T(St,{},{default:()=>{var ee;return Ue(T("ul",{role:"menu",class:[i.b(),i.m("inline")],style:S.value},[(ee=o.default)==null?void 0:ee.call(o)]),[[Qe,j.value]])}})]);return T("li",{class:[d.b(),d.is("active",H.value),d.is("opened",j.value),d.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:j.value,onMouseenter:N,onMouseleave:()=>z(!0),onFocus:N},[Ve])}}});const Ot=ae({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:de(Array),default:()=>rt([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0}}),Me=e=>Array.isArray(e)&&e.every(o=>ne(o)),Rt={close:(e,o)=>ne(e)&&Me(o),open:(e,o)=>ne(e)&&Me(o),select:(e,o,n,t)=>ne(e)&&Me(o)&&Ye(n)&&(t===void 0||t instanceof Promise)};var zt=D({name:"ElMenu",props:Ot,emits:Rt,setup(e,{emit:o,slots:n,expose:t}){const s=me(),b=s.appContext.config.globalProperties.$router,i=C(),d=P("menu"),r=P("sub-menu"),f=C(-1),m=C(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),h=C(e.defaultActive),M=C({}),I=C({}),fe=g(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),le=()=>{const a=h.value&&M.value[h.value];if(!a||e.mode==="horizontal"||e.collapse)return;a.indexPath.forEach(u=>{const y=I.value[u];y&&W(u,y.indexPath)})},W=(a,l)=>{m.value.includes(a)||(e.uniqueOpened&&(m.value=m.value.filter(u=>l.includes(u))),m.value.push(a),o("open",a,l))},Q=(a,l)=>{const u=m.value.indexOf(a);u!==-1&&m.value.splice(u,1),o("close",a,l)},G=({index:a,indexPath:l})=>{m.value.includes(a)?Q(a,l):W(a,l)},X=a=>{(e.mode==="horizontal"||e.collapse)&&(m.value=[]);const{index:l,indexPath:u}=a;if(!(l===void 0||u===void 0))if(e.router&&b){const y=a.route||l,x=b.push(y).then(A=>(A||(h.value=l),A));o("select",l,u,{index:l,indexPath:u,route:y},x)}else h.value=l,o("select",l,u,{index:l,indexPath:u})},he=a=>{const l=M.value,u=l[a]||h.value&&l[h.value]||l[e.defaultActive];u?h.value=u.index:h.value=a},be=()=>{var a;const l=Array.from((a=i.value.childNodes)!=null?a:[]).filter(p=>p.nodeName!=="#text"||p.nodeValue),u=64,y=Number.parseInt(getComputedStyle(i.value).paddingLeft,10),x=Number.parseInt(getComputedStyle(i.value).paddingRight,10),A=i.value.clientWidth-y-x;let N=0,z=0;return l.forEach((p,k)=>{N+=p.offsetWidth||0,N<=A-u&&(z=k+1)}),z===l.length?-1:z},j=(a,l=33.34)=>{let u;return()=>{u&&clearTimeout(u),u=setTimeout(()=>{a()},l)}};let H=!0;const Y=()=>{const a=()=>{f.value=-1,Ze(()=>{f.value=be()})};H?a():j(a)(),H=!1};te(()=>e.defaultActive,a=>{M.value[a]||(h.value=""),he(a)}),te(()=>e.collapse,a=>{a&&(m.value=[])}),te(M.value,le);let K;Xe(()=>{e.mode==="horizontal"&&e.ellipsis?K=it(i,Y).stop:K==null||K()});{const a=x=>{I.value[x.index]=x},l=x=>{delete I.value[x.index]};ce("rootMenu",Ce({props:e,openedMenus:m,items:M,subMenus:I,activeIndex:h,isMenuPopup:fe,addMenuItem:x=>{M.value[x.index]=x},removeMenuItem:x=>{delete M.value[x.index]},addSubMenu:a,removeSubMenu:l,openMenu:W,closeMenu:Q,handleMenuItemClick:X,handleSubMenuClick:G})),ce(`subMenu:${s.uid}`,{addSubMenu:a,removeSubMenu:l,mouseInChild:C(!1),level:0})}se(()=>{e.mode==="horizontal"&&new wt(s.vnode.el,d.namespace.value)}),t({open:l=>{const{indexPath:u}=I.value[l];u.forEach(y=>W(y,u))},close:Q,handleResize:Y});const Z=a=>{const l=Array.isArray(a)?a:[a],u=[];return l.forEach(y=>{Array.isArray(y.children)?u.push(...Z(y.children)):u.push(y)}),u};return()=>{var a,l;let u=(l=(a=n.default)==null?void 0:a.call(n))!=null?l:[];const y=[];if(e.mode==="horizontal"&&i.value){const N=Z(u),z=f.value===-1?N:N.slice(0,f.value),p=f.value===-1?[]:N.slice(f.value);(p==null?void 0:p.length)&&e.ellipsis&&(u=z,y.push(T(Ie,{index:"sub-menu-more",class:r.e("hide-arrow")},{title:()=>T(V,{class:r.e("icon-more")},{default:()=>T(ut)}),default:()=>p})))}const x=We(e,0),A=T("ul",{key:String(e.collapse),role:"menubar",ref:i,style:x.value,class:{[d.b()]:!0,[d.m(e.mode)]:!0,[d.m("collapse")]:e.collapse}},[...u,...y]);return e.collapseTransition&&e.mode==="vertical"?T(Pt,()=>A):A}}});const Lt=ae({index:{type:de([String,null]),default:null},route:{type:de([String,Object])},disabled:Boolean}),Ht={click:e=>ne(e.index)&&Array.isArray(e.indexPath)},ke="ElMenuItem",Dt=D({name:ke,components:{ElTooltip:Re},props:Lt,emits:Ht,setup(e,{emit:o}){const n=me(),t=oe("rootMenu"),s=P("menu"),b=P("menu-item");t||pe(ke,"can not inject root menu");const{parentMenu:i,indexPath:d}=De(n,et(e,"index")),r=oe(`subMenu:${i.value.uid}`);r||pe(ke,"can not inject sub menu");const f=g(()=>e.index===t.activeIndex),m=Ce({index:e.index,indexPath:d,active:f}),h=()=>{e.disabled||(t.handleMenuItemClick({index:e.index,indexPath:d.value,route:e.route}),o("click",m))};return se(()=>{r.addSubMenu(m),t.addMenuItem(m)}),Pe(()=>{r.removeSubMenu(m),t.removeMenuItem(m)}),{Effect:pt,parentMenu:i,rootMenu:t,active:f,nsMenu:s,nsMenuItem:b,handleClick:h}}});function Wt(e,o,n,t,s,b){const i=Ne("el-tooltip");return v(),E("li",{class:L([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:o[0]||(o[0]=(...d)=>e.handleClick&&e.handleClick(...d))},[e.parentMenu.type.name==="ElMenu"&&e.rootMenu.props.collapse&&e.$slots.title?(v(),w(i,{key:0,effect:e.Effect.DARK,placement:"right","fallback-placements":["left"],persistent:""},{content:_(()=>[R(e.$slots,"title")]),default:_(()=>[B("div",{class:L(e.nsMenu.be("tooltip","trigger"))},[R(e.$slots,"default")],2)]),_:3},8,["effect"])):(v(),E(F,{key:1},[R(e.$slots,"default"),R(e.$slots,"title")],64))],2)}var je=U(Dt,[["render",Wt],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);const jt={title:String},qt="ElMenuItemGroup",Ft=D({name:qt,props:jt,setup(){return{ns:P("menu-item-group")}}});function Vt(e,o,n,t,s,b){return v(),E("li",{class:L(e.ns.b())},[B("div",{class:L(e.ns.e("title"))},[e.$slots.title?R(e.$slots,"title",{key:1}):(v(),E(F,{key:0},[J(q(e.title),1)],64))],2),B("ul",null,[R(e.$slots,"default")])],2)}var qe=U(Ft,[["render",Vt],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);const Gt=we(zt,{MenuItem:je,MenuItemGroup:qe,SubMenu:Ie}),Kt=ve(je);ve(qe);const Jt=ve(Ie);var Ut="/assets/boy.bab95d36.png",Qt="/assets/girl.6e949849.png";const Fe={__name:"MenuItem",props:{menuRoute:{type:Array,default:[],require:!0}},setup(e){return(o,n)=>(v(!0),E(F,null,Ae(e.menuRoute.filter(t=>t.hidden!==!0),(t,s)=>(v(),E(F,null,[t.children&&t.children.filter(b=>b.hidden!==!0).length>0?(v(),w(c(Jt),{key:t.name,index:t.path},{title:_(()=>[t.icon?(v(),w(c(V),{key:0},{default:_(()=>[$(xe,{iconClass:t.icon},null,8,["iconClass"])]),_:2},1024)):Se("",!0),B("span",null,q(t.name),1)]),default:_(()=>[$(Fe,{menuRoute:t.children},null,8,["menuRoute"])]),_:2},1032,["index"])):(v(),w(c(Kt),{key:s,index:t.path},{title:_(()=>[J(q(t.name),1)]),default:_(()=>[t.icon?(v(),w(c(V),{key:0},{default:_(()=>[$(xe,{iconClass:t.icon},null,8,["iconClass"])]),_:2},1024)):Se("",!0)]),_:2},1032,["index"]))],64))),256))}};const Xt={class:"class-menu"},Yt={class:"right-content"},Zt={class:"nav-bar"},en={class:"left"},tn={class:"right"},nn=["src"],on={class:"el-dropdown-link"},an=J("\u9000\u51FA\u767B\u5F55"),sn={class:"content"},ln={__name:"MenuBar",setup(e){const o=tt(),n=C(!1),t=o.currentRoute.value,s=t.matched.filter(m=>m.path!=="/"),b=C(s),i=C(t),d=C({}),r=()=>{o.replace("/login")};se(()=>{d.value=JSON.parse(window.localStorage.getItem("userInfo")||"{}")}),te(()=>o.currentRoute.value,m=>{const h=m.matched.filter(M=>M.path!=="/");b.value=h,i.value=m});const f=g(()=>d.staffImg?d.staffImg:!d.staffSex||d.staffSex==="\u7537"?Ut:Qt);return(m,h)=>{const M=Ne("router-view");return v(),E("div",Xt,[$(c(Gt),{"active-text-color":"#3894FF","background-color":"#545c64","text-color":"#fff","default-active":i.value.fullPath,class:"el-menu-vertical-demo",collapse:n.value,router:""},{default:_(()=>[$(Fe,{menuRoute:c(nt)},null,8,["menuRoute"])]),_:1},8,["default-active","collapse"]),B("div",Yt,[B("div",Zt,[B("div",en,[$(c(V),{size:25,color:"#666",class:"class-expand"},{default:_(()=>[n.value?(v(),w(c(ct),{key:0,onClick:h[0]||(h[0]=I=>n.value=!n.value)})):(v(),w(c(dt),{key:1,onClick:h[1]||(h[1]=I=>n.value=!n.value)}))]),_:1}),$(c(Ct),{separator:">"},{default:_(()=>[(v(!0),E(F,null,Ae(b.value,I=>(v(),E(F,null,[I.path!==i.value.fullPath?(v(),w(c($e),{key:I.path,to:{path:I.path}},{default:_(()=>[J(q(I.name),1)]),_:2},1032,["to"])):(v(),w(c($e),{key:I.name},{default:_(()=>[J(q(I.name),1)]),_:2},1024))],64))),256))]),_:1})]),B("div",tn,[B("img",{src:c(f),alt:"",srcset:""},null,8,nn),$(c(ft),null,{dropdown:_(()=>[$(c(mt),null,{default:_(()=>[$(c(vt),{onClick:r},{default:_(()=>[an]),_:1})]),_:1})]),default:_(()=>[B("span",on,[J(q(d.value.staffName)+" ",1),$(c(V),{class:"el-icon--right"},{default:_(()=>[$(c(Oe))]),_:1})])]),_:1})])]),B("div",sn,[$(M)])])])}}};var rn=ze(ln,[["__scopeId","data-v-3b995121"]]);const un={class:"container"},cn={__name:"Home",setup(e){return(o,n)=>(v(),E("div",un,[$(rn)]))}};var yn=ze(cn,[["__scopeId","data-v-a1a7fb56"]]);export{yn as default};
