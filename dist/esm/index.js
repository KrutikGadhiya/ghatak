import e from"react";
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
***************************************************************************** */var t=function(){return t=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},t.apply(this,arguments)};function n(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}var a=function(a){var r=a.className,c=a.children,l=a.disabled,o=a.fullWidth,s=a.htmlType,i=a.loading,d=a.prefix,p=a.rounded,u=a.size,m=a.type,f=a.suffix,y=n(a,["className","children","disabled","fullWidth","htmlType","loading","prefix","rounded","size","type","suffix"]);return e.createElement("button",t({type:s||"button",className:"button ".concat(r||""," ").concat(u||"md"," ").concat(m||"primary"," ").concat(p||"rounded-md"," ").concat(o?"fullWidth":""," ").concat(i?"loading":""),disabled:l||!1},y),e.createElement("div",{className:"wrapper"},e.createElement("div",{className:"spinningLoader"}),e.createElement("span",{className:"content"},d&&e.createElement("span",null,d),e.createElement("span",null,c),f&&e.createElement("span",null,f))))},r=function(a){var r=a.className,c=a.children,l=a.rounded,o=a.size,s=a.translucentBg,i=a.type,d=n(a,["className","children","rounded","size","translucentBg","type"]);return e.createElement("div",t({className:"tag ".concat(i||"primary"," ").concat(o||"md"," ").concat(l||"rounded-md"," ").concat(r||""," ").concat(s?"translucentBg":"")},d),e.createElement("span",null,c))};export{a as Button,r as Tag};
//# sourceMappingURL=index.js.map
