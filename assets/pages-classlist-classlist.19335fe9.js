import{e as a,y as e,z as s,o as t,c as l,w as r,i,a as o,f as n,b as p,d as u,F as d,s as m,h as c,m as g,l as f}from"./index-a8c3b4ae.js";import{_ as h}from"./uv-skeletons.410fdddf.js";import{h as y,i as x,o as _,a as v,j as w,k as j,r as k}from"./apis.7443bd4e.js";import{_ as L,a as $}from"./z-paging.b334779b.js";import{g as z}from"./common.a0cf3544.js";import{_ as M}from"./plugin-vueexport-helper.1b428a4d.js";const C=M({__name:"classlist",setup(M){const C=a(null),N=a([]),S=[{type:"flex",num:4,gap:"5rpx",children:[{type:"custom",style:"width:242rpx;height:400rpx;marginLeft:5rpx;"},{type:"custom",style:"width:242rpx;height:400rpx;marginLeft:5rpx;"},{type:"custom",style:"width:242rpx;height:400rpx;marginLeft:5rpx;"}]}];let V="",b="",F="",q=1,I=12;const P=(a,e)=>{q=a,I=e,b?U():Q()},Q=async()=>{let a=await w({classid:V,pageNum:q,pageSize:I});C.value.complete(a.data)},U=async()=>{let a=await j({type:b,pageNum:q,pageSize:I});C.value.complete(a.data)},A=()=>{m("storgClassList",N.value)};return y((a=>{({id:V=null,name:F="分类列表",type:b}=a),e({title:F}),"download"===b||"score"===b||V||z()})),x((()=>{s("storgClassList")})),_((()=>({title:`虾米壁纸-${F}`,path:`/pages/classlist/classlist?id=${V}&name=${F}`}))),v((()=>({title:"虾米壁纸，${name}分类",query:`id=${V}&name=${F}`}))),(a,e)=>{const s=k(c("uv-skeletons"),h),m=k(c("custom-refresher"),L),y=i,x=g,_=f,v=k(c("z-paging"),$);return t(),l(y,{class:"classlist"},{default:r((()=>[o(v,{ref_key:"paging",ref:C,modelValue:N.value,"onUpdate:modelValue":e[0]||(e[0]=a=>N.value=a),onQuery:P,onListChange:A,"default-page-size":"12","empty-view-text":"没有更多数据了"},{loading:r((()=>[o(s,{loading:!0,skeleton:S})])),refresher:r((({refresherStatus:a})=>[o(m,{status:a},null,8,["status"])])),loadingMoreLoading:r((()=>[o(s,{loading:!0,skeleton:S})])),loadingMoreNoMore:r((()=>[o(y,{class:"noMore"},{default:r((()=>[n("没有更多数据了")])),_:1}),o(y,{class:"safe-area-inset-bottom"})])),default:r((()=>[o(y,{class:"content"},{default:r((()=>[(t(!0),p(d,null,u(N.value,(a=>(t(),l(_,{url:`/pages/preview/preview?id=${a._id}`,class:"item",key:a._id,data:a},{default:r((()=>[o(x,{src:a.smallPicurl,mode:"aspectFill"},null,8,["src"])])),_:2},1032,["url","data"])))),128))])),_:1})])),_:1},8,["modelValue"])])),_:1})}}},[["__scopeId","data-v-484377aa"]]);export{C as default};
