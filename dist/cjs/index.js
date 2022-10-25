"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("react")),n=function(){return n=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},n.apply(this,arguments)};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */exports.Button=function(e){var a=e.className,r=e.children,l=e.disabled,o=e.fullWidth,c=e.htmlType,u=e.loading,i=e.prefix,d=e.rounded,s=e.size,f=e.type,p=e.suffix,m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["className","children","disabled","fullWidth","htmlType","loading","prefix","rounded","size","type","suffix"]);return t.default.createElement("button",n({type:c||"button",className:"button ".concat(a||""," ").concat(s||"md"," ").concat(f||"primary"," ").concat(d||"rounded-md"," ").concat(o?"fullWidth":""," ").concat(u?"loading":""),disabled:l||!1},m),t.default.createElement("div",{className:"wrapper"},t.default.createElement("div",{className:"spinningLoader"}),t.default.createElement("span",{className:"content"},i&&t.default.createElement("span",null,i),t.default.createElement("span",null,r),p&&t.default.createElement("span",null,p))))};
//# sourceMappingURL=index.js.map
