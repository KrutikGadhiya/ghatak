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
***************************************************************************** */var t=function(){return t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},t.apply(this,arguments)};var n=function(n){var r=n.className,a=n.children,l=n.disabled,c=n.fullWidth,o=n.htmlType,i=n.loading,p=n.prefix,s=n.rounded,d=n.size,u=n.type,f=n.suffix,m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(n,["className","children","disabled","fullWidth","htmlType","loading","prefix","rounded","size","type","suffix"]);return e.createElement("button",t({type:o||"button",className:"button ".concat(r||""," ").concat(d||"md"," ").concat(u||"primary"," ").concat(s||"rounded-md"," ").concat(c?"fullWidth":""," ").concat(i?"loading":""),disabled:l||!1},m),e.createElement("div",{className:"wrapper"},e.createElement("div",{className:"spinningLoader"}),e.createElement("span",{className:"content"},p&&e.createElement("span",null,p),e.createElement("span",null,a),f&&e.createElement("span",null,f))))};export{n as Button};
//# sourceMappingURL=index.js.map
