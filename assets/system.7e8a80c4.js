import{I as t}from"./index-1de63c67.js";const n=t(),e=()=>n.statusBarHeight||15,i=()=>{if(uni.getMenuButtonBoundingClientRect){const{top:t,height:n}=uni.getMenuButtonBoundingClientRect();return n+2*(t-e())}return 40},u=()=>e()+i(),o=()=>0;export{i as a,o as b,u as c,e as g};
