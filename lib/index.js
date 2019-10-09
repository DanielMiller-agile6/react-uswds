!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.ReactUSWDS=t(require("react")):e.ReactUSWDS=t(e.React)}(window,(function(e){return function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=2)}([function(t,a){t.exports=e},function(e,t,a){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var u=typeof n;if("string"===u||"number"===u)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===u)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Alert",{enumerable:!0,get:function(){return n.Alert}}),Object.defineProperty(t,"Accordion",{enumerable:!0,get:function(){return r.Accordion}}),Object.defineProperty(t,"GovBanner",{enumerable:!0,get:function(){return u.GovBanner}}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return o.Button}}),a(3);var n=a(4),r=a(5),u=a(6),o=a(10)},function(e,t,a){},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Alert=void 0;var n=u(a(0)),r=u(a(1));function u(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=e.type,a=e.heading,u=e.children,o=(0,r.default)("usa-alert",{"usa-alert--success":"success"===t,"usa-alert--warning":"warning"===t,"usa-alert--error":"error"===t,"usa-alert--info":"info"===t});return n.default.createElement("div",{className:o,"data-testid":"alert"},n.default.createElement("div",{className:"usa-alert__body"},a&&n.default.createElement("h3",{className:"usa-alert__heading"},a),u&&n.default.createElement("p",{className:"usa-alert__text"},u)))};t.Alert=o;var i=o;t.default=i},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Accordion=t.AccordionItem=void 0;var n,r=function(e){if(e&&e.__esModule)return e;var t=o();if(t&&t.has(e))return t.get(e);var a={};if(null!=e){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var u=n?Object.getOwnPropertyDescriptor(e,r):null;u&&(u.get||u.set)?Object.defineProperty(a,r,u):a[r]=e[r]}}a.default=e,t&&t.set(e,a);return a}(a(0)),u=(n=a(1))&&n.__esModule?n:{default:n};function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}var i=function(){return(i=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=function(e){var t=e.title,a=e.id,n=e.content,u=e.expanded,o=e.handleToggle;return r.default.createElement(r.default.Fragment,null,r.default.createElement("h2",{className:"usa-accordion__heading"},r.default.createElement("button",{type:"button",className:"usa-accordion__button","aria-expanded":u,"aria-controls":a,"data-testid":"accordionButton_"+a,onClick:o},t)),r.default.createElement("div",{id:a,"data-testid":"accordionItem_"+a,className:"usa-accordion__content usa-prose",hidden:!u},n))};t.AccordionItem=l;var c=function(e){var t=e.bordered,a=e.items,n=(0,r.useState)(a[0].id),o=n[0],c=n[1],d=(0,u.default)("usa-accordion",{"usa-accordion--bordered":t});return r.default.createElement("div",{className:d,"data-testid":"accordion"},a.map((function(e,t){return r.default.createElement(l,i({key:"accordionItem_"+t},e,{expanded:o===e.id,handleToggle:function(){c(e.id)}}))})))};t.Accordion=c;var d=c;t.default=d},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.GovBanner=void 0;var n=function(e){if(e&&e.__esModule)return e;var t=l();if(t&&t.has(e))return t.get(e);var a={};if(null!=e){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var u=n?Object.getOwnPropertyDescriptor(e,r):null;u&&(u.get||u.set)?Object.defineProperty(a,r,u):a[r]=e[r]}}a.default=e,t&&t.set(e,a);return a}(a(0)),r=i(a(7)),u=i(a(8)),o=i(a(9));function i(e){return e&&e.__esModule?e:{default:e}}function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}var c=function(){var e=(0,n.useState)(!1),t=e[0],a=e[1];return n.default.createElement("div",{className:"usa-banner","data-testid":"govBanner"},n.default.createElement("div",{className:"usa-accordion"},n.default.createElement("header",{className:"usa-banner__header"},n.default.createElement("div",{className:"usa-banner__inner"},n.default.createElement("div",{className:"grid-col-auto"},n.default.createElement("img",{className:"usa-banner__header-flag",src:r.default,alt:"U.S. flag"})),n.default.createElement("div",{className:"grid-col-fill tablet:grid-col-auto"},n.default.createElement("p",{className:"usa-banner__header-text"},"An official website of the United States government"),n.default.createElement("p",{className:"usa-banner__header-action","aria-hidden":"true"},"Here’s how you know")),n.default.createElement("button",{type:"button",className:"usa-accordion__button usa-banner__button","aria-expanded":t,"aria-controls":"gov-banner",onClick:function(){a(!t)}},n.default.createElement("span",{className:"usa-banner__button-text"},"Here’s how you know")))),n.default.createElement("div",{className:"usa-banner__content usa-accordion__content",id:"gov-banner",hidden:!t},n.default.createElement("div",{className:"grid-row grid-gap-lg"},n.default.createElement("div",{className:"usa-banner__guidance tablet:grid-col-6"},n.default.createElement("img",{className:"usa-banner__icon usa-media-block__img",src:u.default,alt:"Dot gov"}),n.default.createElement("div",{className:"usa-media-block__body"},n.default.createElement("p",null,n.default.createElement("strong",null,"The .gov means it’s official."),n.default.createElement("br",null),"Federal government websites often end in .gov or .mil. Before sharing sensitive information, make sure you’re on a federal government site."))),n.default.createElement("div",{className:"usa-banner__guidance tablet:grid-col-6"},n.default.createElement("img",{className:"usa-banner__icon usa-media-block__img",src:o.default,alt:"Https"}),n.default.createElement("div",{className:"usa-media-block__body"},n.default.createElement("p",null,n.default.createElement("strong",null,"The site is secure."),n.default.createElement("br",null),"The ",n.default.createElement("strong",null,"https://")," ensures that you are connecting to the official website and that any information you provide is encrypted and transmitted securely.")))))))};t.GovBanner=c;var d=c;t.default=d},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAG1BMVEUdM7EeNLIeM7HgQCDaPh/bPh/bPx/////bPyBEby41AAAAUElEQVQI123MNw4CABDEwD3jC/9/MQ1BQrgeOSkIqYe2o2FZtthXgQLgbHVMZdlsfUQFQnHtjP1+8BUhBDKOqtmfot6ojqPzR7TjdU+f6vkED+IDPhTBcMAAAAAASUVORK5CYII="},function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgNjQgNjQiPjx0aXRsZT5pY29uLWRvdC1nb3Y8L3RpdGxlPjxwYXRoIGZpbGw9IiMyMzc4QzMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMyIDBjMTcuNjczIDAgMzIgMTQuMzI3IDMyIDMyIDAgMTcuNjczLTE0LjMyNyAzMi0zMiAzMkMxNC4zMjcgNjQgMCA0OS42NzMgMCAzMiAwIDE0LjMyNyAxNC4zMjcgMCAzMiAwem0wIDEuMjA4QzE0Ljk5NCAxLjIwOCAxLjIwOCAxNC45OTQgMS4yMDggMzJTMTQuOTk0IDYyLjc5MiAzMiA2Mi43OTIgNjIuNzkyIDQ5LjAwNiA2Mi43OTIgMzIgNDkuMDA2IDEuMjA4IDMyIDEuMjA4em0xMC41OSAzOC44NThhLjg1Ny44NTcgMCAwIDEgLjg4Mi44MjJ2MS42NDJIMTguODg2di0xLjY0MmEuODU3Ljg1NyAwIDAgMSAuODgyLS44MjJINDIuNTl6TTI1LjQ0MyAyNy43NzR2OS44MjloMS42NDJ2LTkuODNoMy4yNzN2OS44M0gzMnYtOS44M2gzLjI3MnY5LjgzaDEuNjQzdi05LjgzaDMuMjcydjkuODNoLjc2YS44NTcuODU3IDAgMCAxIC44ODIuODIxdi44MjFoLTIxLjN2LS44MDlhLjg1Ny44NTcgMCAwIDEgLjg4LS44MmguNzYydi05Ljg0MmgzLjI3MnptNS43MzYtOC4xODhsMTIuMjkzIDQuOTE1djEuNjQyaC0xLjYzYS44NTcuODU3IDAgMCAxLS44ODIuODIySDIxLjQxYS44NTcuODU3IDAgMCAxLS44ODItLjgyMmgtMS42NDJ2LTEuNjQybDEyLjI5My00LjkxNXoiLz48L3N2Zz4="},function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgNjQgNjQiPjx0aXRsZT5pY29uLWh0dHBzPC90aXRsZT48cGF0aCBmaWxsPSIjNzE5RjJBIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMiAwYzE3LjY3MyAwIDMyIDE0LjMyNyAzMiAzMiAwIDE3LjY3My0xNC4zMjcgMzItMzIgMzJDMTQuMzI3IDY0IDAgNDkuNjczIDAgMzIgMCAxNC4zMjcgMTQuMzI3IDAgMzIgMHptMCAxLjIwOEMxNC45OTQgMS4yMDggMS4yMDggMTQuOTk0IDEuMjA4IDMyUzE0Ljk5NCA2Mi43OTIgMzIgNjIuNzkyIDYyLjc5MiA0OS4wMDYgNjIuNzkyIDMyIDQ5LjAwNiAxLjIwOCAzMiAxLjIwOHptMCAxOC44ODZhNy4yNDUgNy4yNDUgMCAwIDEgNy4yNDUgNy4yNDV2My4xMDNoLjUyYy44NiAwIDEuNTU3LjY5OCAxLjU1NyAxLjU1OHY5LjMyMmMwIC44Ni0uNjk3IDEuNTU4LTEuNTU3IDEuNTU4aC0xNS41M2MtLjg2IDAtMS41NTctLjY5Ny0xLjU1Ny0xLjU1OFYzMmMwLS44Ni42OTctMS41NTggMS41NTctMS41NThoLjUyVjI3LjM0QTcuMjQ1IDcuMjQ1IDAgMCAxIDMyIDIwLjA5NHptMCAzLjEwM2E0LjE0MiA0LjE0MiAwIDAgMC00LjE0MiA0LjE0MnYzLjEwM2g4LjI4NFYyNy4zNEE0LjE0MiA0LjE0MiAwIDAgMCAzMiAyMy4xOTd6Ii8+PC9zdmc+"},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Button=void 0;var n=u(a(0)),r=u(a(1));function u(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=e.type,a=e.disabled,u=e.children,o=e.secondary,i=e.base,l=e.accent,c=e.outline,d=e.inverse,s=e.big,f=e.unstyled,M=e.onClick,g=(0,r.default)("usa-button",{"usa-button--secondary":o,"usa-button--base":i,"usa-button--accent-cool":l,"usa-button--outline":c,"usa-button--inverse":d,"usa-button--big":s,"usa-button--unstyled":f});return n.default.createElement("button",{type:t,className:g,disabled:a,onClick:M,"data-testid":"button"},u)};t.Button=o;var i=o;t.default=i}])}));