import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as S,i as f}from"./assets/vendor-77e16229.js";const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(l=t[0].getTime()-Date.now(),l<0){o.disabled=!0,f.error({message:"Please choose a date in the future",messageColor:"#ffffff",backgroundColor:"red",close:!1,position:"topRight"});return}o.disabled=!1,s=t[0]}},i=document.querySelector("#datetime-picker"),o=document.querySelector(".input-button > button"),n=document.querySelectorAll(".timer .value");o.addEventListener("click",y);o.disabled=!0;let s=0,l=0,r,e,a;S(i,b);const c=t=>{n[0].textContent=String(t.days).padStart(2,"0"),n[1].textContent=String(t.hours).padStart(2,"0"),n[2].textContent=String(t.minutes).padStart(2,"0"),n[3].textContent=String(t.seconds).padStart(2,"0")};function y(t){r=Date.now(),e=s-r,a=u(e),c(a),i.disabled=!0,o.disabled=!0;const d=setInterval(()=>{r=Date.now(),e=s-r,Math.floor(e/1e3)===0&&(clearInterval(d),i.disabled=!1,f.show({title:"Success",message:"Timer is FINISH",messageColor:"#f7f7f7",titleColor:"#f6f6f6",backgroundColor:"green",close:!1,position:"topRight"})),a=u(e),c(a)},1e3)}function u(t){const m=Math.floor(t/864e5),h=Math.floor(t%864e5/36e5),p=Math.floor(t%864e5%36e5/6e4),g=Math.floor(t%864e5%36e5%6e4/1e3);return{days:m,hours:h,minutes:p,seconds:g}}
//# sourceMappingURL=commonHelpers.js.map
