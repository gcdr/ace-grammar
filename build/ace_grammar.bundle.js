/**
*
*   Classy
*   @version: 0.4.4
*
*   Object-Oriented mini-framework for JavaScript
*   https://github.com/foo123/classy.js
*
**/!function(e,t,n,r,l){var o="undefined"!=typeof global&&"[object global]"=={}.toString.call(global)?1:0,a=o||"undefined"==typeof navigator?0:1,i="function"==typeof importScripts&&navigator instanceof WorkerNavigator?1:0,c=Array,u=c.prototype,f=function(){var e=null;if(o)return e=__filename,{path:__dirname,file:__filename};if(i)e=self.location.href;else if(a){var t;(t=document.getElementsByTagName("script"))&&t.length&&(e=t[t.length-1].src)}return e?{path:e.split("/").slice(0,-1).join("/"),file:e}:{path:null,file:null}},p=f(),s=function(e,t){if(o)return t;if("."==t.charAt(0)){e=e.split("/"),t=t.split("/");var n,r=0,l=0,a=t.length,i=e.length;for(n=0;a>n;n++)if(/^\.\./.test(t[n]))r++,l++;else{if(!/^\./.test(t[n]))break;l++}r=r>=i?0:i-r,t=e.slice(0,r).concat(t.slice(l)).join("/")}return t};n=n?[].concat(n):[];var y,b,d,g=n.length,v=new c(g),m=new c(g),h=new c(g),j=new c(g);for(y=0;g>y;y++)v[y]=n[y][0],m[y]=n[y][1],h[y]=/\.js$/i.test(m[y])?s(p.path,m[y]):s(p.path,m[y]+".js");if("object"==typeof module&&module.exports){if(l===module.exports[t]){for(y=0;g>y;y++)j[y]=module.exports[v[y]]||require(h[y])[v[y]];b=r.apply(e,j),module.exports[t]=b||1}}else if("function"==typeof define&&define.amd)define(["exports"].concat(m),function(n){if(l===n[t]){for(var o=u.slice.call(arguments,1),a=o.length,i=0;a>i;i++)j[i]=n[v[i]]||o[i];b=r.apply(e,j),n[t]=b||1}});else if(i){for(y=0;g>y;y++)self[v[y]]||importScripts(h[y]),j[y]=self[v[y]];b=r.apply(e,j),self[t]=b||1}else if(l===e[t]){var w=function(e,t){d=d||document.getElementsByTagName("head")[0];var n=0,r=document.createElement("script");r.type="text/javascript",r.language="javascript",r.src=e,r.onload=r.onreadystatechange=function(){n||r.readyState&&"loaded"!=r.readyState&&"complete"!=r.readyState||(n=1,r.onload=r.onreadystatechange=null,d.removeChild(r),r=null,t&&t())},d.appendChild(r)},x=function(t,n,r){e[t]?r():w(n,r)},E=function(n){return function(){g>n&&(j[n]=e[v[n]]),++n<g?x(v[n],h[n],E(n)):(b=r.apply(e,j),e[t]=b||1)}};g?x(v[0],h[0],E(0)):(b=r.apply(e,j),e[t]=b||1)}}(this,"Classy",null,function(){var e={};return function(e){var t=function(e,t,n){this.v=e||null,this.prev=t||null,n=n||null};t.prototype={constructor:t,v:null,prev:null,next:null};var n=Array.prototype,r=Object.prototype,l=n.slice,o=(n.splice,n.concat,r.toString),a=r.hasOwnProperty,i=r.propertyIsEnumerable,c=Object.keys,u=Object.defineProperty,f=function(e){return"function"==typeof e},p=function(e,t){if("object"!=typeof e||null===e)throw new TypeError("bad desc");var n={};if(a.call(e,"enumerable")&&(n.enumerable=!!t.enumerable),a.call(e,"configurable")&&(n.configurable=!!t.configurable),a.call(e,"value")&&(n.value=t.value),a.call(e,"writable")&&(n.writable=!!e.writable),a.call(e,"get")){var r=e.get;if(!f(r)&&"undefined"!==r)throw new TypeError("bad get");n.get=r}if(a.call(e,"set")){var l=e.set;if(!f(l)&&"undefined"!==l)throw new TypeError("bad set");n.set=l}if(("get"in n||"set"in n)&&("value"in n||"writable"in n))throw new TypeError("identity-confused descriptor");return n},s=Object.defineProperties||function(e,t){if("object"!=typeof e||null===e)throw new TypeError("bad obj");t=Object(t);for(var n=c(t),r=[],l=0;l<n.length;l++)r.push([n[l],p(t[n[l]],e)]);for(var l=0;l<r.length;l++)u(e,r[l][0],r[l][1]);return e},y=Object.create||function(e,t){var n,r=function(){};return r.prototype=e,n=new r,n.__proto__=e,"object"==typeof t&&s(n,t),n},b=function(e){var n=new t(e);return function(e){if(e&&n&&n.v){var r,o=this;if(e="constructor"==e?n.v:n.v.prototype[e])return n=new t(n.v.$super,n),r=e.apply(o,l.call(arguments,1)),n=n.prev,r}}},d=function(){var e,t,n,r,c,u,f,p,s=l.call(arguments);for(t=s.shift()||{},e=s.length,p=0;e>p;p++)if(n=s[p],n&&"object"==typeof n)for(f in n)a.call(n,f)&&i.call(n,f)&&(u=n[f],r=o.call(u),c=typeof u,t[f]="number"==c||u instanceof Number?0+u:u&&("[object Array]"==r||u instanceof Array||"string"==c||u instanceof String)?u.slice(0):u);return t},g=function(e,t){e=e||Object,t=t||{};var n=t.constructor?t.constructor:function(){};return n.prototype=y(e.prototype),n.prototype=d(n.prototype,t),s(n.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0},$class:{value:n,enumerable:!1,writable:!0,configurable:!0},$super:{value:b(e),enumerable:!1,writable:!0,configurable:!0}}),s(n,{$super:{value:e,enumerable:!1,writable:!0,configurable:!0},$static:{value:e.$static&&"object"==typeof e.$static?d(null,e.$static):null,enumerable:!1,writable:!0,configurable:!0}}),n},v=Mixin=d,m=function(){var e=l.call(arguments),t=e.length,n=null;if(t>=2){var r=typeof e[0];r="function"==r?{Extends:e[0]}:"object"==r?e[0]:{Extends:Object};var o,a,i=e[1]||{},c=e[2]||null,u={},f=r.Extends||r.extends||Object,p=r.Implements||r.implements,s=r.Mixin||r.mixin;if(p=p?[].concat(p):null,s=s?[].concat(s):null)for(o=0,a=s.length;a>o;o++)s[o].prototype&&(u=Mixin(u,s[o].prototype));if(p)for(o=0,a=p.length;a>o;o++)p[o].prototype&&(u=v(u,p[o].prototype));n=g(f,d(u,i)),c&&"object"==typeof c&&(n.$static=d(n.$static,c))}else n=g(Object,e[0]);return n};e.Classy={VERSION:"0.4.4",Class:m,Extends:g,Implements:v,Mixin:Mixin,Create:y,Merge:d}}(e),e.Classy});
/**
*
*   RegExAnalyzer
*   @version: 0.2.5
*
*   A simple Regular Expression Analyzer in JavaScript
*   https://github.com/foo123/regex-analyzer
*
**/!function(t,e,r,a,p){var s="undefined"!=typeof global&&"[object global]"=={}.toString.call(global)?1:0,h=s||"undefined"==typeof navigator?0:1,n="function"==typeof importScripts&&navigator instanceof WorkerNavigator?1:0,i=Array,l=i.prototype,g=function(){var t=null;if(s)return t=__filename,{path:__dirname,file:__filename};if(n)t=self.location.href;else if(h){var e;(e=document.getElementsByTagName("script"))&&e.length&&(t=e[e.length-1].src)}return t?{path:t.split("/").slice(0,-1).join("/"),file:t}:{path:null,file:null}},o=g(),u=function(t,e){if(s)return e;if("."==e.charAt(0)){t=t.split("/"),e=e.split("/");var r,a=0,p=0,h=e.length,n=t.length;for(r=0;h>r;r++)if(/^\.\./.test(e[r]))a++,p++;else{if(!/^\./.test(e[r]))break;p++}a=a>=n?0:n-a,e=t.slice(0,a).concat(e.slice(p)).join("/")}return e};r=r?[].concat(r):[];var f,c,y,d=r.length,S=new i(d),C=new i(d),x=new i(d),m=new i(d);for(f=0;d>f;f++)S[f]=r[f][0],C[f]=r[f][1],x[f]=/\.js$/i.test(C[f])?u(o.path,C[f]):u(o.path,C[f]+".js");if("object"==typeof module&&module.exports){if(p===module.exports[e]){for(f=0;d>f;f++)m[f]=module.exports[S[f]]||require(x[f])[S[f]];c=a.apply(t,m),module.exports[e]=c||1}}else if("function"==typeof define&&define.amd)define(["exports"].concat(C),function(r){if(p===r[e]){for(var s=l.slice.call(arguments,1),h=s.length,n=0;h>n;n++)m[n]=r[S[n]]||s[n];c=a.apply(t,m),r[e]=c||1}});else if(n){for(f=0;d>f;f++)self[S[f]]||importScripts(x[f]),m[f]=self[S[f]];c=a.apply(t,m),self[e]=c||1}else if(p===t[e]){var M=function(t,e){y=y||document.getElementsByTagName("head")[0];var r=0,a=document.createElement("script");a.type="text/javascript",a.language="javascript",a.src=t,a.onload=a.onreadystatechange=function(){r||a.readyState&&"loaded"!=a.readyState&&"complete"!=a.readyState||(r=1,a.onload=a.onreadystatechange=null,y.removeChild(a),a=null,e&&e())},y.appendChild(a)},A=function(e,r,a){t[e]?a():M(r,a)},v=function(r){return function(){d>r&&(m[r]=t[S[r]]),++r<d?A(S[r],x[r],v(r)):(c=a.apply(t,m),t[e]=c||1)}};d?A(S[0],x[0],v(0)):(c=a.apply(t,m),t[e]=c||1)}}(this,"RegExAnalyzer",null,function(){var t={};return function(t){var e="\\",r=/^\{\s*(\d+)\s*,?\s*(\d+)?\s*\}/,a=/^u([0-9a-fA-F]{4})/,p=/^x([0-9a-fA-F]{2})/,s={".":"MatchAnyChar","|":"MatchEither","?":"MatchZeroOrOne","*":"MatchZeroOrMore","+":"MatchOneOrMore","^":"MatchStart",$:"MatchEnd","{":"StartRepeats","}":"EndRepeats","(":"StartGroup",")":"EndGroup","[":"StartCharGroup","]":"EndCharGroup"},h={"\\":"EscapeChar","/":"/",0:"NULChar",f:"FormFeed",n:"LineFeed",r:"CarriageReturn",t:"HorizontalTab",v:"VerticalTab",b:"MatchWordBoundary",B:"MatchNonWordBoundary",s:"MatchSpaceChar",S:"MatchNonSpaceChar",w:"MatchWordChar",W:"MatchNonWordChar",d:"MatchDigitChar",D:"MatchNonDigitChar"},n=Object.prototype.toString,i=function(t,e){if(e&&(e instanceof Array||"[object Array]"==n.call(e)))for(var r=0,a=e.length;a>r;r++)t[e[r]]=1;else for(var r in e)t[r]=1;return t},l=function(t,e){t&&(t instanceof Array||"[object Array]"==n.call(t))&&(e=t[1],t=t[0]);var r,a,p=t.charCodeAt(0),s=e.charCodeAt(0);if(s==p)return[String.fromCharCode(p)];for(a=[],r=p;s>=r;++r)a.push(String.fromCharCode(r));return a},g=function(t){var e,r,a,p,s,h,n={},o={};if("Alternation"==t.type)for(a=0,p=t.part.length;p>a;a++)s=g(t.part[a]),n=i(n,s.peek),o=i(o,s.negativepeek);else if("Group"==t.type)s=g(t.part),n=i(n,s.peek),o=i(o,s.negativepeek);else if("Sequence"==t.type){for(a=0,p=t.part.length,r=t.part[a],h=a>=p||!r||"Quantifier"!=r.type||!r.flags.MatchZeroOrMore&&!r.flags.MatchZeroOrOne&&"0"!=r.flags.MatchMinimum;!h;)s=g(r.part),n=i(n,s.peek),o=i(o,s.negativepeek),a++,r=t.part[a],h=a>=p||!r||"Quantifier"!=r.type||!r.flags.MatchZeroOrMore&&!r.flags.MatchZeroOrOne&&"0"!=r.flags.MatchMinimum;p>a&&(r=t.part[a],"Special"!=r.type||"^"!=r.part&&"$"!=r.part||(r=t.part[a+1]||null),r&&"Quantifier"==r.type&&(r=r.part),r&&(s=g(r),n=i(n,s.peek),o=i(o,s.negativepeek)))}else if("CharGroup"==t.type)for(e=t.flags.NotMatch?o:n,a=0,p=t.part.length;p>a;a++)r=t.part[a],"Chars"==r.type?e=i(e,r.part):"CharRange"==r.type?e=i(e,l(r.part)):"UnicodeChar"==r.type||"HexChar"==r.type?e[r.flags.Char]=1:"Special"==r.type&&("D"==r.part?t.flags.NotMatch?n["\\d"]=1:o["\\d"]=1:"W"==r.part?t.flags.NotMatch?n["\\w"]=1:o["\\W"]=1:"S"==r.part?t.flags.NotMatch?n["\\s"]=1:o["\\s"]=1:e["\\"+r.part]=1);else"String"==t.type?n[t.part.charAt(0)]=1:"Special"!=t.type||t.flags.MatchStart||t.flags.MatchEnd?("UnicodeChar"==t.type||"HexChar"==t.type)&&(n[t.flags.Char]=1):"D"==t.part?o["\\d"]=1:"W"==t.part?o["\\W"]=1:"S"==t.part?o["\\s"]=1:n["\\"+t.part]=1;return{peek:n,negativepeek:o}},o=function(t,e){t&&this.setRegex(t,e)};o.VERSION="0.2.5",o.getCharRange=l,o.prototype={constructor:o,VERSION:o.VERSION,regex:null,groupIndex:null,pos:null,flags:null,parts:null,getCharRange:o.getCharRange,getPeekChars:function(){var t,e,r,a,p=this.flags&&this.flags.i,h=g(this.parts);for(t in h){a={},r=h[t];for(e in r)"\\d"==e?(delete r[e],a=i(a,l("0","9"))):"\\s"==e?(delete r[e],a=i(a,["\f","\n","\r","	",""," ","\u2028","\u2029"])):"\\w"==e?(delete r[e],a=i(a,["_"].concat(l("0","9")).concat(l("a","z")).concat(l("A","Z")))):"\\."==e?(delete r[e],a[s["."]]=1):"\\"!=e.charAt(0)&&p?(a[e.toLowerCase()]=1,a[e.toUpperCase()]=1):"\\"==e.charAt(0)&&delete r[e];h[t]=i(r,a)}return h},setRegex:function(t,e){if(t){this.flags={},e=e||"/";for(var r=t.toString(),a=r.length,p=r.charAt(a-1);e!=p;)this.flags[p]=1,r=r.substr(0,a-1),a=r.length,p=r.charAt(a-1);e==r.charAt(0)&&e==r.charAt(a-1)&&(r=r.substr(1,a-2)),this.regex=r}return this},analyze:function(){var t,n,i,l="",g=[],o=[],u=!1;for(this.pos=0,this.groupIndex=0;this.pos<this.regex.length;)t=this.regex.charAt(this.pos++),u=e==t?!0:!1,u&&(t=this.regex.charAt(this.pos++)),u?"u"==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),i=a.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,o.push({part:i[0],flags:{Char:String.fromCharCode(parseInt(i[1],16)),Code:i[1]},type:"UnicodeChar"})):"x"==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),i=p.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,o.push({part:i[0],flags:{Char:String.fromCharCode(parseInt(i[1],16)),Code:i[1]},type:"HexChar"})):h[t]&&"/"!=t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),n={},n[h[t]]=1,o.push({part:t,flags:n,type:"Special"})):l+=t:"|"==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),g.push({part:o,flags:{},type:"Sequence"}),o=[]):"["==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),o.push(this.chargroup())):"("==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),o.push(this.subgroup())):"{"==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),i=r.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,o.push({part:o.pop(),flags:{part:i[0],MatchMinimum:i[1],MatchMaximum:i[2]||"unlimited"},type:"Quantifier"})):"*"==t||"+"==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),n={},n[s[t]]=1,"?"==this.regex.charAt(this.pos)?(n.isGreedy=0,this.pos++):n.isGreedy=1,o.push({part:o.pop(),flags:n,type:"Quantifier"})):"?"==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),n={},n[s[t]]=1,o.push({part:o.pop(),flags:n,type:"Quantifier"})):s[t]?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),n={},n[s[t]]=1,o.push({part:t,flags:n,type:"Special"})):l+=t;return l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),g.length?(g.push({part:o,flags:{},type:"Sequence"}),o=[],n={},n[s["|"]]=1,this.parts={part:g,flags:n,type:"Alternation"}):this.parts={part:o,flags:{},type:"Sequence"},this},subgroup:function(){var t,n,i,l="",g=[],o=[],u={},f=!1,c=this.regex.substr(this.pos,2);for("?:"==c?(u.NotCaptured=1,this.pos+=2):"?="==c?(u.LookAhead=1,this.pos+=2):"?!"==c&&(u.NegativeLookAhead=1,this.pos+=2),u.GroupIndex=++this.groupIndex;this.pos<this.regex.length;)if(t=this.regex.charAt(this.pos++),f=e==t?!0:!1,f&&(t=this.regex.charAt(this.pos++)),f)"u"==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),i=a.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,o.push({part:i[0],flags:{Char:String.fromCharCode(parseInt(i[1],16)),Code:i[1]},type:"UnicodeChar"})):"x"==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),i=p.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,o.push({part:i[0],flags:{Char:String.fromCharCode(parseInt(i[1],16)),Code:i[1]},type:"HexChar"})):h[t]&&"/"!=t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),n={},n[h[t]]=1,o.push({part:t,flags:n,type:"Special"})):l+=t;else{if(")"==t)return l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),g.length?(g.push({part:o,flags:{},type:"Sequence"}),o=[],n={},n[s["|"]]=1,{part:{part:g,flags:n,type:"Alternation"},flags:u,type:"Group"}):{part:{part:o,flags:{},type:"Sequence"},flags:u,type:"Group"};"|"==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),g.push({part:o,flags:{},type:"Sequence"}),o=[]):"["==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),o.push(this.chargroup())):"("==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),o.push(this.subgroup())):"{"==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),i=r.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,o.push({part:o.pop(),flags:{part:i[0],MatchMinimum:i[1],MatchMaximum:i[2]||"unlimited"},type:"Quantifier"})):"*"==t||"+"==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),n={},n[s[t]]=1,"?"==this.regex.charAt(this.pos)?(n.isGreedy=0,this.pos++):n.isGreedy=1,o.push({part:o.pop(),flags:n,type:"Quantifier"})):"?"==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),n={},n[s[t]]=1,o.push({part:o.pop(),flags:n,type:"Quantifier"})):s[t]?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),n={},n[s[t]]=1,o.push({part:t,flags:n,type:"Special"})):l+=t}return l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),g.length?(g.push({part:o,flags:{},type:"Sequence"}),o=[],n={},n[s["|"]]=1,{part:{part:g,flags:n,type:"Alternation"},flags:u,type:"Group"}):{part:{part:o,flags:{},type:"Sequence"},flags:u,type:"Group"}},chargroup:function(){var t,r,s,n,i,l,g=[],o=[],u={},f=!1,c=!1;for("^"==this.regex.charAt(this.pos)&&(u.NotMatch=1,this.pos++);this.pos<this.regex.length;)if(l=!1,s=r,r=this.regex.charAt(this.pos++),c=e==r?!0:!1,c&&(r=this.regex.charAt(this.pos++)),c&&("u"==r?(i=a.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,r=String.fromCharCode(parseInt(i[1],16)),l=!0):"x"==r&&(i=p.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,r=String.fromCharCode(parseInt(i[1],16)),l=!0)),f)o.length&&(g.push({part:o,flags:{},type:"Chars"}),o=[]),n[1]=r,f=!1,g.push({part:n,flags:{},type:"CharRange"});else if(c)!l&&h[r]&&"/"!=r?(o.length&&(g.push({part:o,flags:{},type:"Chars"}),o=[]),t={},t[h[r]]=1,g.push({part:r,flags:t,type:"Special"})):o.push(r);else{if("]"==r)return o.length&&(g.push({part:o,flags:{},type:"Chars"}),o=[]),{part:g,flags:u,type:"CharGroup"};"-"==r?(n=[s,""],o.pop(),f=!0):o.push(r)}return o.length&&(g.push({part:o,flags:{},type:"Chars"}),o=[]),{part:g,flags:u,type:"CharGroup"}}},t.RegExAnalyzer=o}(t),t.RegExAnalyzer});
/**
*
*   AceGrammar
*   @version: 0.6.3
*
*   Transform a grammar specification in JSON format, into an ACE syntax-highlight parser mode
*   https://github.com/foo123/ace-grammar
*
**/!function(t,e,n,r,o){var i="undefined"!=typeof global&&"[object global]"=={}.toString.call(global)?1:0,s=i||"undefined"==typeof navigator?0:1,l="function"==typeof importScripts&&navigator instanceof WorkerNavigator?1:0,u=Array,a=u.prototype,c=function(){var t=null;if(i)return t=__filename,{path:__dirname,file:__filename};if(l)t=self.location.href;else if(s){var e;(e=document.getElementsByTagName("script"))&&e.length&&(t=e[e.length-1].src)}return t?{path:t.split("/").slice(0,-1).join("/"),file:t}:{path:null,file:null}},f=c(),h=function(t,e){if(i)return e;if("."==e.charAt(0)){t=t.split("/"),e=e.split("/");var n,r=0,o=0,s=e.length,l=t.length;for(n=0;s>n;n++)if(/^\.\./.test(e[n]))r++,o++;else{if(!/^\./.test(e[n]))break;o++}r=r>=l?0:l-r,e=t.slice(0,r).concat(e.slice(o)).join("/")}return e};n=n?[].concat(n):[];var p,g,m,d=n.length,k=new u(d),v=new u(d),w=new u(d),y=new u(d);for(p=0;d>p;p++)k[p]=n[p][0],v[p]=n[p][1],w[p]=/\.js$/i.test(v[p])?h(f.path,v[p]):h(f.path,v[p]+".js");if("object"==typeof module&&module.exports){if(o===module.exports[e]){for(p=0;d>p;p++)y[p]=module.exports[k[p]]||require(w[p])[k[p]];g=r.apply(t,y),module.exports[e]=g||1}}else if("function"==typeof define&&define.amd)define(["exports"].concat(v),function(n){if(o===n[e]){for(var i=a.slice.call(arguments,1),s=i.length,l=0;s>l;l++)y[l]=n[k[l]]||i[l];g=r.apply(t,y),n[e]=g||1}});else if(l){for(p=0;d>p;p++)self[k[p]]||importScripts(w[p]),y[p]=self[k[p]];g=r.apply(t,y),self[e]=g||1}else if(o===t[e]){var R=function(t,e){m=m||document.getElementsByTagName("head")[0];var n=0,r=document.createElement("script");r.type="text/javascript",r.language="javascript",r.src=t,r.onload=r.onreadystatechange=function(){n||r.readyState&&"loaded"!=r.readyState&&"complete"!=r.readyState||(n=1,r.onload=r.onreadystatechange=null,m.removeChild(r),r=null,e&&e())},m.appendChild(r)},b=function(e,n,r){t[e]?r():R(n,r)},E=function(n){return function(){d>n&&(y[n]=t[k[n]]),++n<d?b(k[n],w[n],E(n)):(g=r.apply(t,y),t[e]=g||1)}};d?b(k[0],w[0],E(0)):(g=r.apply(t,y),t[e]=g||1)}}(this,"AceGrammar",[["Classy","./classy"],["RegExAnalyzer","./regexanalyzer"]],function(t,e){function n(){ace.define("ace/grammar_worker",["require","exports","module","ace/worker/mirror"],function(t,e){var n=t("./worker/mirror").Mirror;e.AceGrammarWorker=D(n,{constructor:function(t){var e=this;e.$super("constructor",t),e.setTimeout(500)},parser:null,Init:function(t,e){var n=this,i=n.sender;n.parser=$e(Te(t),{DEFAULT:r,ERROR:o}),i.callback(1,e)},onUpdate:function(){var t,e,n,r,o,i,s,l,u,a=this,c=a.sender,f=a.parser,h=0;if(!f)return c.emit("ok",[]),void 0;if(t=a.doc.getValue(),!t||!t.length)return c.emit("ok",[]),void 0;for(r=[],e=f.parse(t),i=e.length,o=0;i>o;o++)if(n=e[o],n&&n.length)for(u=0,s=0;s<n.length;s++)l=n[s],f.ERR==l.type&&(r.push({row:o,column:u,text:l.error||"Syntax Error",type:"error",raw:l.error||"Syntax Error"}),h=1),u+=l.value.length;h?c.emit("error",r):c.emit("ok",[])}})})}var r,o,s=1/0,u=2,a=4,c=8,f=9,h=10,p=16,g=32,m=64,d=128,k=256,v=512,w=2,y=4,R=8,b=4,E=8,_=16,C=17,x=18,L=32,S=33,T=34,B=64,A=128,O=256,q=257,j=258,$=259,I=512,M=1024,N={ONEOF:B,EITHER:B,ALL:A,ZEROORONE:q,ZEROORMORE:j,ONEORMORE:$,REPEATED:O},U={BLOCK:L,COMMENT:T,ESCAPEDBLOCK:S,SIMPLE:_,GROUP:I,NGRAM:M},D=t.Class,K=Array.prototype,P=Object.prototype,z=K.slice,F=(K.splice,K.concat),G=P.hasOwnProperty,W=P.toString,Q=P.propertyIsEnumerable,V=Object.keys,Z=function(t){var e=typeof t,n=W.call(t);return"undefined"==e?k:"number"==e||t instanceof Number?u:null===t?d:!0===t||!1===t?a:t&&("string"==e||t instanceof String)?1==t.length?f:c:t&&("[object RegExp]"==n||t instanceof RegExp)?p:t&&("[object Array]"==n||t instanceof Array)?g:t&&"[object Object]"==n?m:v},H=function(t,e){return e||g!=Z(t)?[t]:t},J=function(t,e){return t=H(t,e),(e||g!=Z(t[0]))&&(t=[t]),t},X=function(t){var e,n=Z(t);if(!((m|g)&n))return t;var r,o={};for(r in t)G.call(t,r)&&Q.call(t,r)&&(e=Z(t[r]),o[r]=m&e?X(t[r]):g&e?t[r].slice():t[r]);return o},Y=function(){var t=z.call(arguments),e=t.length;if(1>e)return null;if(2>e)return X(t[0]);var n,r,o,i,s=t.shift(),l=X(s);for(e--,r=0;e>r;r++)if(n=t.shift())for(o in n)G.call(n,o)&&Q.call(n,o)&&(G.call(s,o)&&Q.call(s,o)?(i=Z(s[o]),m&~c&i&&(l[o]=Y(s[o],n[o]))):l[o]=X(n[o]));return l},te=function(t){return t.replace(/([.*+?^${}()|[\]\/\\])/g,"\\$1")},ee=function(t,e){var n,r,o,i;for(i=function(t,n){return e[1+parseInt(n,10)]},n=t.split("$$"),o=n.length,r=0;o>r;r++)n[r]=n[r].replace(/\$(\d{1,2})/g,i);return n.join("$")},ne=function(t,e){return e.length-t.length},re=function(t,e){return c&Z(e)&&c&Z(t)&&e.length&&e.length<=t.length&&e==t.substr(0,e.length)},oe=function(t,n,r){if(!t||u==Z(t))return t;var o=n?n.length||0:0;if(o&&n==t.substr(0,o)){var i,s,l,a="^("+t.substr(o)+")";return r[a]||(i=new RegExp(a),l=new e(i).analyze(),s=l.getPeekChars(),V(s.peek).length||(s.peek=null),V(s.negativepeek).length||(s.negativepeek=null),r[a]=[i,s]),r[a]}return t},ie=function(t,e){var n={},r="",o=Z(e);(c==o||f==o)&&(r=e);var i=t.sort(ne).map(function(t){return n[t.charAt(0)]=1,te(t)}).join("|");return[new RegExp("^("+i+")"+r),{peek:n,negativepeek:null},1]},se="undefined"!=typeof global&&"[object global]"=={}.toString.call(global)?1:0,le=se||"undefined"==typeof navigator?0:1,ue="function"==typeof importScripts&&navigator instanceof WorkerNavigator?1:0,ae=function(){var t,e,n=null;return se?(n=__filename,{path:__dirname,file:__filename,base:__dirname}):(ue?n=self.location.href:le&&(t=document.location.href.split("#")[0].split("?")[0].split("/").slice(0,-1).join("/"),(e=document.getElementsByTagName("script"))&&e.length&&(n=e[e.length-1].src)),n?{path:n.split("/").slice(0,-1).join("/"),file:n,base:t}:{path:null,file:null,base:null})},ce=ae(),fe=D({constructor:function(t){this.string=t?""+t:"",this.start=this.pos=0,this._=null},_:null,string:"",start:0,pos:0,fromStream:function(t){return this._=t,this.string=""+t.string,this.start=t.start,this.pos=t.pos,this},toString:function(){return this.string},sol:function(){return 0==this.pos},eol:function(){return this.pos>=this.string.length},chr:function(t,e){var n=this.string.charAt(this.pos)||null;return n&&t==n?(!1!==e&&(this.pos+=1,this._&&(this._.pos=this.pos)),n):!1},chl:function(t,e){var n=this.string.charAt(this.pos)||null;return n&&-1<t.indexOf(n)?(!1!==e&&(this.pos+=1,this._&&(this._.pos=this.pos)),n):!1},str:function(t,e,n){var r=this.pos,o=this.string,i=o.charAt(r)||null;if(i&&e[i]){var s=t.length,l=o.substr(r,s);if(t==l)return!1!==n&&(this.pos+=s,this._&&(this._.pos=this.pos)),l}return!1},rex:function(t,e,n,r,o){var i=this.pos,s=this.string,l=s.charAt(i)||null;if(l&&e&&e[l]||n&&!n[l]){var u=s.slice(i).match(t);return!u||u.index>0?!1:(!1!==o&&(this.pos+=u[r||0].length,this._&&(this._.pos=this.pos)),u)}return!1},end:function(){return this.pos=this.string.length,this._&&(this._.pos=this.pos),this},nxt:function(){if(this.pos<this.string.length){var t=this.string.charAt(this.pos++)||null;return this._&&(this._.pos=this.pos),t}},bck:function(t){return this.pos-=t,0>this.pos&&(this.pos=0),this._&&(this._.pos=this.pos),this},bck2:function(t){return this.pos=t,0>this.pos&&(this.pos=0),this._&&(this._.pos=this.pos),this},spc:function(){for(var t=this.pos,e=this.pos,n=this.string;/[\s\u00a0]/.test(n.charAt(e));)++e;return this.pos=e,this._&&(this._.pos=this.pos),this.pos>t},cur:function(){return this.string.slice(this.start,this.pos)},sft:function(){return this.start=this.pos,this}}),he=D({constructor:function(t){this.l=t||0,this.stack=[],this.t=E,this.r="0",this.inBlock=null,this.endBlock=null},l:0,stack:null,t:null,r:null,inBlock:null,endBlock:null,clone:function(){var t=new this.$class(this.l);return t.t=this.t,t.r=this.r,t.stack=this.stack.slice(),t.inBlock=this.inBlock,t.endBlock=this.endBlock,t},toString:function(){return["",this.l,this.t,this.r,this.inBlock||"0",this.stack.length].join("_")}}),pe=D({constructor:function(t,e,n,r){var o=this;switch(o.type=w,o.tt=t||f,o.tn=e,o.tk=r||0,o.tg=0,o.tp=null,o.p=null,o.np=null,o.tt){case f:case h:o.tp=n;break;case c:o.tp=n,o.p={},o.p[""+n.charAt(0)]=1;break;case p:o.tp=n[0],o.p=n[1].peek||null,o.np=n[1].negativepeek||null,o.tg=n[2]||0;break;case d:o.tp=null}},type:null,tt:null,tn:null,tp:null,tg:0,tk:0,p:null,np:null,get:function(t,e){var n,r=this,o=r.tt,i=r.tk,s=r.tp,l=r.tg,u=r.p,a=r.np;switch(o){case f:if(n=t.chr(s,e))return[i,n];break;case h:if(n=t.chl(s,e))return[i,n];break;case c:if(n=t.str(s,u,e))return[i,n];break;case p:if(n=t.rex(s,u,a,l,e))return[i,n];break;case d:return!1!==e&&t.end(),[i,""]}return!1},toString:function(){return["[","Matcher: ",this.tn,", Pattern: ",this.tp?this.tp.toString():null,"]"].join("")}}),ge=D(pe,{constructor:function(t,e,n){var r=this;r.type=y,r.tn=t,r.ms=e,r.ownKey=!1!==n},ms:null,ownKey:!0,get:function(t,e){var n,r,o=this.ms,i=o.length,s=this.ownKey;for(n=0;i>n;n++)if(r=o[n].get(t,e))return s?[n,r[1]]:r;return!1}}),me=D(pe,{constructor:function(t,e,n){var r=this;r.type=R,r.tn=t,r.s=new ge(r.tn+"_Start",e,!1),r.e=n},s:null,e:null,get:function(t,e){var n,r=this,o=r.s,i=r.e;if(n=o.get(t,e)){var s=i[n[0]],l=Z(s),a=o.ms[n[0]].tt;return p==a&&(u==l?s=new pe(c,r.tn+"_End",n[1][s+1]):c==l&&(s=new pe(c,r.tn+"_End",ee(s,n[1])))),s}return!1}}),de=function(t,e,n,r){var o=Z(e);if(u==o)return e;if(!r[t]){n=n||0;var i,s=0;e&&e.isCharList&&(s=1,delete e.isCharList),i=d&o?new pe(d,t,e,n):f==o?new pe(f,t,e,n):c&o?s?new pe(h,t,e,n):new pe(c,t,e,n):g&o?new pe(p,t,e,n):e,r[t]=i}return r[t]},ke=function(t,e,n,r,o,i){if(!i[t]){var s,l,u,a,h,p,m,d=0,k=0,v=1;if(s=H(e),u=s.length,1==u)m=de(t,oe(s[0],n,o),0,i);else if(u>1){for(a=(u>>1)+1,l=0;a>=l;l++)h=Z(s[l]),p=Z(s[u-1-l]),(f!=h||f!=p)&&(v=0),g&h||g&p?d=1:(re(s[l],n)||re(s[u-1-l],n))&&(k=1);if(!v||r&&c&Z(r))if(!r||d||k){for(l=0;u>l;l++)s[l]=g&Z(s[l])?ke(t+"_"+l,s[l],n,r,o,i):de(t+"_"+l,oe(s[l],n,o),l,i);m=u>1?new ge(t,s):s[0]}else m=de(t,ie(s,r),0,i);else s=s.slice().join(""),s.isCharList=1,m=de(t,s,0,i)}i[t]=m}return i[t]},ve=function(t,e,n,r,o){if(!o[t]){var i,s,l,u,a,f,h;for(u=[],a=[],i=J(e),s=0,l=i.length;l>s;s++)f=de(t+"_0_"+s,oe(i[s][0],n,r),s,o),h=i[s].length>1?p!=f.tt||c!=Z(i[s][1])||re(i[s][1],n)?de(t+"_1_"+s,oe(i[s][1],n,r),s,o):i[s][1]:f,u.push(f),a.push(h);o[t]=new me(t,u,a)}return o[t]},we=function(t){return x==t.tt?"NONSPACE Required":d==t.tt?"EOL Required":t.required?'Token Missing "'+t.tn+'"':'Syntax Error "'+t.tn+'"'},ye=D({constructor:function(t,e,n){var r=this;r.tt=_,r.tn=t,r.t=e,r.r=n,r.required=0,r.ERR=0,r.toClone=["t","r"]},tn:null,tt:null,t:null,r:null,required:0,ERR:0,toClone:null,get:function(t,e){var n=this,r=n.t,o=n.tt;if(C==o){if(t.spc(),t.eol())return e.t=E,n.r}else if(x==o)n.ERR=n.required&&t.spc()&&!t.eol()?1:0,n.required=0;else if(r.get(t))return e.t=n.tt,n.r;return!1},require:function(t){return this.required=t?1:0,this},push:function(t,e,n){return e?t.splice(e,0,n):t.push(n),this},clone:function(){var t,e,n,r=this,o=r.toClone;if(t=new r.$class,t.tt=r.tt,t.tn=r.tn,o&&o.length)for(n=o.length,e=0;n>e;e++)t[o[e]]=r[o[e]];return t},toString:function(){return["[","Tokenizer: ",this.tn,", Matcher: ",this.t?this.t.toString():null,"]"].join("")}}),Re=D(ye,{constructor:function(t,e,n,r,o,i,s){var l=this;l.$super("constructor",e,n,r),l.ri="undefined"==typeof o?l.r:o,l.tt=t,l.mline="undefined"==typeof i?1:i,l.esc=s||"\\",l.toClone=["t","r","ri","mline","esc"]},ri:null,mline:0,esc:null,get:function(t,e){var n,r,o,i,s,l,u,a,c,f=this,h=0,p=0,g="",m=f.mline,k=f.t,v=f.tn,w=f.tt,y=f.r,R=f.ri,b=y!=R,E=0,_=S==w,C=f.esc;if(T==w&&(f.required=0),s=0,e.inBlock==v?(p=1,n=e.endBlock,s=1,l=R):!e.inBlock&&(n=k.get(t))&&(p=1,e.inBlock=v,e.endBlock=n,l=y),p){if(o=e.stack.length,i=d==n.tt,b){if(s&&i&&t.sol())return f.required=0,e.inBlock=null,e.endBlock=null,!1;if(!s)return f.push(e.stack,o,f.clone()),e.t=w,l}if(h=n.get(t),r=m,c=0,h)l=i?R:y;else for(a=t.pos;!t.eol();){if(u=t.pos,!(_&&E||!n.get(t))){b?t.pos>u&&u>a?(l=R,t.bck2(u),c=1):(l=y,h=1):(l=y,h=1);break}g=t.nxt(),E=!E&&g==C}return r=m||_&&E,h||!r&&!c?(e.inBlock=null,e.endBlock=null):f.push(e.stack,o,f.clone()),e.t=w,l}return!1}}),be=D(ye,{constructor:function(t,e,n,r){var o=this;o.tt=O,o.tn=t||null,o.t=null,o.ts=null,o.min=n||0,o.max=r||s,o.found=0,o.toClone=["ts","min","max","found"],e&&o.set(e)},ts:null,min:0,max:1,found:0,set:function(t){return t&&(this.ts=H(t)),this},get:function(t,e){var n,r,o,i,s,l=this,u=l.ts,a=u.length,c=l.found,f=l.min,h=l.max,p=0;for(l.ERR=0,l.required=0,i=t.pos,s=e.stack.length,n=0;a>n;n++){if(r=u[n].clone().require(1),o=r.get(t,e),!1!==o){if(++c,h>=c)return l.found=c,l.push(e.stack,s,l.clone()),l.found=0,o;break}r.required&&p++,r.ERR&&t.bck2(i)}return l.required=f>c,l.ERR=c>h||f>c&&p>0,!1}}),Ee=D(be,{constructor:function(t,e){this.$super("constructor",t,e,1,1),this.tt=B},get:function(t,e){var n,r,o,i,s=this,l=s.ts,u=l.length,a=0,c=0;for(s.required=1,s.ERR=0,i=t.pos,o=0;u>o;o++){if(r=l[o].clone(),n=r.get(t,e),a+=r.required?1:0,!1!==n)return n;r.ERR&&(c++,t.bck2(i))}return s.required=a>0,s.ERR=u==c&&a>0,!1}}),_e=D(be,{constructor:function(t,e){this.$super("constructor",t,e,1,1),this.tt=A},get:function(t,e){var n,r,o,i,s=this,l=s.ts,u=l.length;if(s.required=1,s.ERR=0,o=t.pos,i=e.stack.length,n=l[0].clone().require(1),r=n.get(t,e),!1!==r){for(var a=u-1;a>0;a--)s.push(e.stack,i+u-a-1,l[a].clone().require(1));return r}return n.ERR?(s.ERR=1,t.bck2(o)):n.required&&(s.ERR=1),!1}}),Ce=D(be,{constructor:function(t,e){this.$super("constructor",t,e,1,1),this.tt=M},get:function(t,e){var n,r,o,i,s=this,l=s.ts,u=l.length;if(s.required=0,s.ERR=0,o=t.pos,i=e.stack.length,n=l[0].clone().require(0),r=n.get(t,e),!1!==r){for(var a=u-1;a>0;a--)s.push(e.stack,i+u-a-1,l[a].clone().require(1));return r}return n.ERR&&t.bck2(o),!1}}),xe=function(t,e,n,o,i,l,u,a,f,h,p){if(null===t){var m=new ye(t,t,r);return m.tt=C,m}if(""===t){var m=new ye(t,t,r);return m.tt=x,m}if(t=""+t,!a[t]){var d,k,v,w,y,R,b,m=null;if(d=n[t]||o[t]||{type:"simple",tokens:t}){if((c|g)&Z(d)&&(d={type:"simple",tokens:d}),k=d.type?U[d.type.toUpperCase().replace("-","").replace("_","")]:_,_&k&&""===d.tokens)return m=new ye(t,"",r),m.tt=x,a[t]=m,m;if(d.tokens=H(d.tokens),w=d.action||null,_&k)d.autocomplete&&Se(d,t,p),v="undefined"==typeof d.combine?"\\b":d.combine,m=new ye(t,ke(t,d.tokens.slice(),e,v,l,u),i[t]||r),a[t]=m;else if(L&k)T&k&&Le(d,h),m=new Re(k,t,ve(t,d.tokens.slice(),e,l,u),i[t]||r,i[t+".inside"],d.multiline,d.escape),a[t]=m,d.interleave&&f.push(m.clone());else if(I&k){R=d.tokens.slice(),g&Z(d.match)?m=new be(t,null,d.match[0],d.match[1]):(y=N[d.match.toUpperCase()],m=q==y?new be(t,null,0,1):j==y?new be(t,null,0,s):$==y?new be(t,null,1,s):B&y?new Ee(t,null):new _e(t,null)),a[t]=m,b=[];for(var E=0,S=R.length;S>E;E++)b=b.concat(xe(R[E],e,n,o,i,l,u,a,f,h,p));m.set(b)}else if(M&k){m=J(d.tokens.slice()).slice();for(var A,O=[],E=0,S=m.length;S>E;E++)O[E]=m[E].slice(),m[E]=new Ce(t+"_NGRAM_"+E,null);a[t]=m;for(var E=0,S=m.length;S>E;E++){A=O[E],b=[];for(var D=0,K=A.length;K>D;D++)b=b.concat(xe(A[D],e,n,o,i,l,u,a,f,h,p));m[E].set(b)}}}}return a[t]},Le=function(t,e){var n,r,o,s=J(t.tokens.slice());for(i=0,l=s.length;l>i;i++)n=s[i][0],r=s[i].length>1?s[i][1]:s[i][0],o=s[i].length>2?s[i][2]:"",null===r?(e.line=e.line||[],e.line.push(n)):(e.block=e.block||[],e.block.push([n,r,o]))},Se=function(t,e,n){var r=[].concat(H(t.tokens)).map(function(t){return{word:t,meta:e}});n.autocomplete=F.apply(n.autocomplete||[],r)},Te=function(t){var e,n,r,o,i,s,l,u,a,c,f,h,p,m,d,k;if(t.__parsed)return t;for(f={},h={},p={},d={},k={},m=[],t=X(t),e=t.RegExpID||null,t.RegExpID=null,delete t.RegExpID,s=t.Lex||{},t.Lex=null,delete t.Lex,l=t.Syntax||{},t.Syntax=null,delete t.Syntax,i=t.Style||{},o=t.Parser||[],r=o.length,n=[],u=0;r>u;u++)a=o[u],c=xe(a,e,s,l,i,f,h,p,m,d,k)||null,c&&(g&Z(c)?n=n.concat(c):n.push(c));return t.Parser=n,t.cTokens=m,t.Style=i,t.Comments=d,t.Keywords=k,t.__parsed=1,t},Be="undefined"!=typeof ace?ace:{require:function(){return{}},config:{}},Ae=Be.require,Oe=Be.config,qe=D(Ae("ace/worker/worker_client").WorkerClient,{constructor:function(t,e,n){var r=this,o=Ae,i=Oe;r.$sendDeltaQueue=r.$sendDeltaQueue.bind(r),r.changeListener=r.changeListener.bind(r),r.onMessage=r.onMessage.bind(r),o.nameToUrl&&!o.toUrl&&(o.toUrl=o.nameToUrl);var s;if(i.get("packaged")||!o.toUrl)s=i.moduleUrl(e,"worker");else{var l=r.$normalizePath;s=l(o.toUrl("ace/worker/worker.js",null,"_"));var u={};t.forEach(function(t){u[t]=l(o.toUrl(t,null,"_").replace(/(\.js)?(\?.*)?$/,""))})}r.$worker=new Worker(s),r.$worker.postMessage({load:!0,ace_worker_base:ce.base+"/"+Oe.moduleUrl("ace/worker/json")}),r.$worker.postMessage({init:!0,tlns:u,module:e,classname:n}),r.callbackId=1,r.callbacks={},r.$worker.onmessage=r.onMessage}}),je=D(Ae("ace/tokenizer").Tokenizer,{constructor:function(t,e){var n,r=this;r.LC=t.Comments.line||null,r.BC=t.Comments.block?{start:t.Comments.block[0][0],end:t.Comments.block[0][1]}:null,r.LC&&(n=g&Z(r.LC)?r.LC.map(te).join("|"):te(r.LC),r.rxLine=new RegExp("^(\\s*)(?:"+n+") ?")),r.BC&&(r.rxStart=new RegExp("^(\\s*)(?:"+te(r.BC.start)+")"),r.rxEnd=new RegExp("(?:"+te(r.BC.end)+")\\s*$")),r.DEF=e.DEFAULT,r.ERR=t.Style.error||e.ERROR,r.Keywords=t.Keywords.autocomplete||null,r.Tokens=t.Parser||[],r.cTokens=t.cTokens.length?t.cTokens:null},ERR:null,DEF:null,LC:null,BC:null,rxLine:null,rxStart:null,rxEnd:null,Keywords:null,cTokens:null,Tokens:null,parse:function(t){t=t||"";var e,n,r=t.split(/\r\n|\r|\n/g),o=r.length,i=[];for(n={state:new he,tokens:null},e=0;o>e;e++)n=this.getLineTokens(r[e],n.state,e),i.push(n.tokens);return i},getLineTokens:function(t,e,n){var r,o,i,s,l,u,a,c,f,h,p=this,g=p.cTokens,m=p.Tokens,d=m.length,k=null,v=p.DEF,w=p.ERR;for(u=[],f=new fe(t),e=e?e.clone():new he,e.l=1+n,h=e.stack,a={type:null,value:""},c=null,h.length&&C==h[h.length-1].tt&&h.pop();!f.eol();)if(o=0,c&&c!==a.type?(a.type&&u.push(a),a={type:c,value:f.cur(),error:k},k=null,f.sft()):a.type&&(a.value+=f.cur(),f.sft()),h.length&&x==h[h.length-1].tt||!f.spc()){for(;h.length&&!f.eol();){if(g){for(s=0,i=0;s<g.length;)if(l=g[s++],e.r=c=l.get(f,e),!1!==c){i=1;break}if(i){o=1;break}}if(l=h.pop(),e.r=c=l.get(f,e),!1!==c){o=1;break}if(l.ERR||l.required){h.length=0,f.nxt(),e.t=b,e.r=c=w,o=1,k=we(l);break}}if(!o){if(f.eol())break;for(r=0;d>r;r++){if(l=m[r],e.r=c=l.get(f,e),!1!==c){o=1;break}if(l.ERR||l.required){h.length=0,f.nxt(),e.t=b,e.r=c=w,o=1,k=we(l);break}}if(!o){if(f.eol())break;f.nxt(),e.t=E,e.r=c=v}}}else e.t=E,e.r=c=v;return c&&c!==a.type?(a.type&&u.push(a),u.push({type:c,value:f.cur(),error:k}),k=null):a.type&&(a.value+=f.cur(),u.push(a)),a=null,{state:e,tokens:u}},tCL:function(t,e,n,r){function o(t){for(var e=n;r>=e;e++)t(c.getLine(e),e)}var i,s,l,u,a=this,c=e.doc,f=!0,h=!0,p=1/0,m=e.getTabSize(),d=!1;if(a.LC){var k,v=g==Z(a.LC)?a.LC[0]:a.LC,w=a.rxLine,y=v+" ";d=e.getUseSoftTabs(),s=function(t,e){var n,r,o=t.match(w);o&&(n=o[1].length,r=o[0].length,u(t,n,r)||" "!=o[0][r-1]||r--,c.removeInLine(e,n,r))},i=function(t,e){(!f||/\S/.test(t))&&(u(t,p,p)?c.insertInLine({row:e,column:p},y):c.insertInLine({row:e,column:p},v))},l=function(t){return w.test(t)},u=function(t,e,n){for(var r=0;e--&&" "==t.charAt(e);)r++;if(0!=r%m)return!1;for(r=0;" "==t.charAt(n++);)r++;return m>2?r%m!=m-1:0==r%m}}else{if(!a.BC)return!1;var v=a.BC.start,R=a.BC.end,b=a.rxStart,E=a.rxEnd;i=function(t,e){l(t,e)||(!f||/\S/.test(t))&&(c.insertInLine({row:e,column:t.length},R),c.insertInLine({row:e,column:p},v))},s=function(t,e){var n;(n=t.match(E))&&c.removeInLine(e,t.length-n[0].length,t.length),(n=t.match(b))&&c.removeInLine(e,n[1].length,n[0].length)},l=function(t,n){if(b.test(t))return!0;for(var r=e.getTokens(n),o=0;o<r.length;o++)if("comment"===r[o].type)return!0}}k=1/0,o(function(t,e){var n=t.search(/\S/);-1!==n?(p>n&&(p=n),h&&!l(t,e)&&(h=!1)):k>t.length&&(k=t.length)}),1/0==p&&(p=k,f=!1,h=!1),d&&0!=p%m&&(p=Math.floor(p/m)*m),o(h?s:i)},tBC:function(t,e,n,r){var o,i,s,l,u,a,c,f,h,p,g,m=this,d=Ae("ace/token_iterator").TokenIterator,k=Ae("ace/range").Range,v=m.BC;if(v){if(o=new d(e,r.row,r.column),i=o.getCurrentToken(),s=e.selection,l=s.toOrientedRange(),i&&/comment/.test(i.type)){for(;i&&/comment/.test(i.type);){if(h=i.value.indexOf(v.start),-1!=h){p=o.getCurrentTokenRow(),g=o.getCurrentTokenColumn()+h,c=new k(p,g,p,g+v.start.length);break}i=o.stepBackward()}for(o=new d(e,r.row,r.column),i=o.getCurrentToken();i&&/comment/.test(i.type);){if(h=i.value.indexOf(v.end),-1!=h){p=o.getCurrentTokenRow(),g=o.getCurrentTokenColumn()+h,f=new k(p,g,p,g+v.end.length);break}i=o.stepForward()}f&&e.remove(f),c&&(e.remove(c),u=c.start.row,a=-v.start.length)}else a=v.start.length,u=n.start.row,e.insert(n.end,v.end),e.insert(n.start,v.start);l.start.row==u&&(l.start.column+=a),l.end.row==u&&(l.end.column+=a),e.selection.fromOrientedRange(l)}},indent:function(t){return t.match(/^\s*/)[0]},getNextLineIndent:function(t,e){return e.match(/^\s*/)[0]}}),$e=function(t,e){return new je(t,e)},Ie=function(t,e){var n;return n={getTokenizer:function(){return t},supportGrammarAnnotations:0,createWorker:function(t){if(!n.supportGrammarAnnotations)return null;Oe.setModuleUrl("ace/grammar_worker",ce.file);var r=new qe(["ace"],"ace/grammar_worker","AceGrammarWorker");return r.attachToDocument(t.getDocument()),r.call("Init",[e],function(){r.on("error",function(e){t.setAnnotations(e.data)}),r.on("ok",function(){t.clearAnnotations()})}),r},transformAction:function(){},toggleCommentLines:function(e,n,r,o){return t.tCL(e,n,r,o)},toggleBlockComment:function(e,n,r,o){return t.tBC(e,n,r,o)},getNextLineIndent:function(e,n,r){return t.getNextLineIndent(e,n,r)},checkOutdent:function(){return!1},autoOutdent:function(){},getKeywords:function(){var e=t.Keywords;return e?e.map(function(t){var e=t.word,n=t.meta;return{name:e,value:e,score:1e3,meta:n}}):[]},getCompletions:function(e,n,r,o){var i=t.Keywords;if(!i)return[];var s=o.length;return i.map(function(t){var e=t.word,n=t.meta,r=e.length,i=r>=s&&o==e.substr(0,s);return{name:e,value:e,score:i?1e3-r:0,meta:n}})}}},Me=function(t,e){var n={DEFAULT:e||r,ERROR:o};t=X(t);var i=Te(t);return Ie($e(i,n),t)};if(ue){var Ne=this;onmessage=function(t){var e=t.data;e.load&&e.ace_worker_base&&(importScripts(e.ace_worker_base),n.call(Ne))}}r="text",o="invalid";var Ue={VERSION:"0.6.3",extend:Y,parse:Te,getMode:Me};return Ue});
