import{u as e}from"./app.ccb05a9b.js";import{g as o,v as n,x as d,y as s,z as l,o as a,b as c,d as t,A as r,k as u,l as i,F as b}from"./vendor.e09b58be.js";const k=["disabled"],m={key:0},C=o({setup(o){const C=e();let A;return n((()=>{console.log(`The addPerClick has changed to: ${C.addPerClick}`)})),d((()=>{console.log("beforeMount"),C.tick(),A=setInterval((()=>{C.tick()}),1e3)})),s((()=>{console.log("mounted")})),l((()=>{console.log("unmounted"),clearInterval(A)})),(e,o)=>(a(),c(b,null,[t("h1",null,"Amount "+r(u(C).amount),1),t("h3",null,"+ "+r(u(C).perSecond)+"/s",1),t("button",{class:"m-3 text-sm btn",disabled:!1,onClick:o[0]||(o[0]=(...e)=>u(C).onClickAddOnce&&u(C).onClickAddOnce(...e))}," + "+r(u(C).addPerClick),1),t("button",{class:"m-3 text-sm btn",disabled:!u(C).canBuyAddPerSecond,onClick:o[1]||(o[1]=(...e)=>u(C).onClickAddPerSec&&u(C).onClickAddPerSec(...e))}," Buy + "+r(u(C).addPerSecond)+"/s for "+r(u(C).costAddPerSecond),9,k),11===u(C).amount?(a(),c("div",m," Eleven ")):i("",!0)],64))}});export{C as default};
