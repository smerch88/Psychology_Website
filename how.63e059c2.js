var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function v(e,t,n){var o,r,i,a,f,u,c=0,l=!1,v=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,f=setTimeout(O,t),l?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||v&&e-c>=i}function O(){var e=m();if(j(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-u);return v?d(n,i-(e-c)):n}(e))}function h(e){return f=void 0,g&&o?y(e):(o=r=void 0,a)}function w(){var e=m(),n=j(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return S(u);if(v)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),a}return t=b(t)||0,p(n)&&(l=!!n.leading,i=(v="maxWait"in n)?s(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},w.flush=function(){return void 0===f?a:h(m())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=r.test(e);return f||i.test(e)?a(e.slice(2),f?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const g=document.querySelector(".contact__form");g.addEventListener("input",t((function(e){var t;let n=null!==(t=JSON.parse(localStorage.getItem("feedback-form-state")))&&void 0!==t?t:{};const{name:o,value:r}=e.target;n={...n,[o]:r},localStorage.setItem("feedback-form-state",JSON.stringify(n))}),500)),g.addEventListener("submit",(function(e){e.preventDefault();let t={};const n=new FormData(g);for(const[e,o]of n.entries()){if(!o)return;t[e]=o}t.canBeSpammed=!!t.canBeSpammed,localStorage.removeItem("feedback-form-state"),g.reset()}));(()=>{var e;let t=null!==(e=JSON.parse(localStorage.getItem("feedback-form-state")))&&void 0!==e?e:{};Object.keys(t).forEach((e=>{g.elements[e].value=t[e]}))})();
//# sourceMappingURL=how.63e059c2.js.map
