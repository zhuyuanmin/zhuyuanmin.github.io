import{r,d as a}from"./api.b5d4f119.js";const d=async t=>await r({url:a.product.list,method:"post",data:t}),e=async t=>await r({url:a.product.add,method:"post",data:t}),s=async t=>await r({url:a.product.edit,method:"post",data:t}),c=async t=>await r({url:a.product.delete,method:"post",data:t}),u=async t=>await r({url:a.product.view,method:"post",data:t}),n=async t=>await r({url:a.product.entryStore,method:"post",data:t}),p=async t=>await r({url:a.product.entryStoreRecord,method:"post",data:t}),i=async t=>await r({url:a.product.consume,method:"post",data:t});export{e as a,n as b,p as c,c as d,s as e,i as f,d as g,u as v};
