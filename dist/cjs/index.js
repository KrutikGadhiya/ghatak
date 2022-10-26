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
***************************************************************************** */function a(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}exports.Button=function(e){var r=e.className,l=e.children,c=e.disabled,o=e.fullWidth,u=e.htmlType,d=e.loading,s=e.prefix,i=e.rounded,p=e.size,f=e.type,m=e.suffix,y=a(e,["className","children","disabled","fullWidth","htmlType","loading","prefix","rounded","size","type","suffix"]);return t.default.createElement("button",n({type:u||"button",className:"button ".concat(r||""," ").concat(p||"md"," ").concat(f||"primary"," ").concat(i||"rounded-md"," ").concat(o?"fullWidth":""," ").concat(d?"loading":""),disabled:c||!1},y),t.default.createElement("div",{className:"wrapper"},t.default.createElement("div",{className:"spinningLoader"}),t.default.createElement("span",{className:"content"},s&&t.default.createElement("span",null,s),t.default.createElement("span",null,l),m&&t.default.createElement("span",null,m))))},exports.Tag=function(e){var r=e.className,l=e.children,c=e.rounded,o=e.size,u=e.translucentBg,d=e.type,s=a(e,["className","children","rounded","size","translucentBg","type"]);return t.default.createElement("div",n({className:"tag ".concat(d||"primary"," ").concat(o||"md"," ").concat(c||"rounded-md"," ").concat(r||""," ").concat(u?"translucentBg":"")},s),t.default.createElement("span",null,l))};
//# sourceMappingURL=index.js.map
