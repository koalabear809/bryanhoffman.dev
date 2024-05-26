var me=Object.defineProperty;var be=(a,t,e)=>t in a?me(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var d=(a,t,e)=>(be(a,typeof t!="symbol"?t+"":t,e),e),we=(a,t,e)=>{if(!t.has(a))throw TypeError("Cannot "+e)};var D=(a,t,e)=>{if(t.has(a))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(a):t.set(a,e)};var C=(a,t,e)=>(we(a,t,"access private method"),e);import{b as ye}from"../chunks/paths.VWquPzr2.js";import{s as $e,n as j}from"../chunks/scheduler.Bmg8oFKD.js";import{S as Te,i as ze,H as _e,m as te,A as Re,g as Se,d as Ie}from"../chunks/index.HVR3O4Bt.js";async function Ae({params:a,fetch:t}){let e=await t(`${ye}/posts/`+a.url+".md");return e=await e.text(),{post:e}}const mt=Object.freeze(Object.defineProperty({__proto__:null,load:Ae},Symbol.toStringTag,{value:"Module"}));function F(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let z=F();function oe(a){z=a}const ae=/[&<>"']/,Ee=new RegExp(ae.source,"g"),ce=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Ce=new RegExp(ce.source,"g"),Le={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ne=a=>Le[a];function x(a,t){if(t){if(ae.test(a))return a.replace(Ee,ne)}else if(ce.test(a))return a.replace(Ce,ne);return a}const qe=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Pe(a){return a.replace(qe,(t,e)=>(e=e.toLowerCase(),e==="colon"?":":e.charAt(0)==="#"?e.charAt(1)==="x"?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):""))}const Ze=/(^|[^\[])\^/g;function k(a,t){let e=typeof a=="string"?a:a.source;t=t||"";const n={replace:(i,r)=>{let s=typeof r=="string"?r:r.source;return s=s.replace(Ze,"$1"),e=e.replace(i,s),n},getRegex:()=>new RegExp(e,t)};return n}function se(a){try{a=encodeURI(a).replace(/%25/g,"%")}catch{return null}return a}const R={exec:()=>null};function ie(a,t){const e=a.replace(/\|/g,(r,s,l)=>{let o=!1,p=s;for(;--p>=0&&l[p]==="\\";)o=!o;return o?"|":" |"}),n=e.split(/ \|/);let i=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(/\\\|/g,"|");return n}function L(a,t,e){const n=a.length;if(n===0)return"";let i=0;for(;i<n;){const r=a.charAt(n-i-1);if(r===t&&!e)i++;else if(r!==t&&e)i++;else break}return a.slice(0,n-i)}function ve(a,t){if(a.indexOf(t[1])===-1)return-1;let e=0;for(let n=0;n<a.length;n++)if(a[n]==="\\")n++;else if(a[n]===t[0])e++;else if(a[n]===t[1]&&(e--,e<0))return n;return-1}function re(a,t,e,n){const i=t.href,r=t.title?x(t.title):null,s=a[1].replace(/\\([\[\]])/g,"$1");if(a[0].charAt(0)!=="!"){n.state.inLink=!0;const l={type:"link",raw:e,href:i,title:r,text:s,tokens:n.inlineTokens(s)};return n.state.inLink=!1,l}return{type:"image",raw:e,href:i,title:r,text:x(s)}}function Be(a,t){const e=a.match(/^(\s+)(?:```)/);if(e===null)return t;const n=e[1];return t.split(`
`).map(i=>{const r=i.match(/^\s+/);if(r===null)return i;const[s]=r;return s.length>=n.length?i.slice(n.length):i}).join(`
`)}class P{constructor(t){d(this,"options");d(this,"rules");d(this,"lexer");this.options=t||z}space(t){const e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){const e=this.rules.block.code.exec(t);if(e){const n=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?n:L(n,`
`)}}}fences(t){const e=this.rules.block.fences.exec(t);if(e){const n=e[0],i=Be(n,e[3]||"");return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:i}}}heading(t){const e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(/#$/.test(n)){const i=L(n,"#");(this.options.pedantic||!i||/ $/.test(i))&&(n=i.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){const e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:e[0]}}blockquote(t){const e=this.rules.block.blockquote.exec(t);if(e){let n=e[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`);n=L(n.replace(/^ *>[ \t]?/gm,""),`
`);const i=this.lexer.state.top;this.lexer.state.top=!0;const r=this.lexer.blockTokens(n);return this.lexer.state.top=i,{type:"blockquote",raw:e[0],tokens:r,text:n}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=e[1].trim();const i=n.length>1,r={type:"list",raw:"",ordered:i,start:i?+n.slice(0,-1):"",loose:!1,items:[]};n=i?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=i?n:"[*+-]");const s=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);let l="",o="",p=!1;for(;t;){let c=!1;if(!(e=s.exec(t))||this.rules.block.hr.test(t))break;l=e[0],t=t.substring(l.length);let u=e[2].split(`
`,1)[0].replace(/^\t+/,Q=>" ".repeat(3*Q.length)),h=t.split(`
`,1)[0],g=0;this.options.pedantic?(g=2,o=u.trimStart()):(g=e[2].search(/[^ ]/),g=g>4?1:g,o=u.slice(g),g+=e[1].length);let y=!1;if(!u&&/^ *$/.test(h)&&(l+=h+`
`,t=t.substring(h.length+1),c=!0),!c){const Q=new RegExp(`^ {0,${Math.min(3,g-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),V=new RegExp(`^ {0,${Math.min(3,g-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),Y=new RegExp(`^ {0,${Math.min(3,g-1)}}(?:\`\`\`|~~~)`),ee=new RegExp(`^ {0,${Math.min(3,g-1)}}#`);for(;t;){const O=t.split(`
`,1)[0];if(h=O,this.options.pedantic&&(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),Y.test(h)||ee.test(h)||Q.test(h)||V.test(t))break;if(h.search(/[^ ]/)>=g||!h.trim())o+=`
`+h.slice(g);else{if(y||u.search(/[^ ]/)>=4||Y.test(u)||ee.test(u)||V.test(u))break;o+=`
`+h}!y&&!h.trim()&&(y=!0),l+=O+`
`,t=t.substring(O.length+1),u=h.slice(g)}}r.loose||(p?r.loose=!0:/\n *\n *$/.test(l)&&(p=!0));let m=null,$;this.options.gfm&&(m=/^\[[ xX]\] /.exec(o),m&&($=m[0]!=="[ ] ",o=o.replace(/^\[[ xX]\] +/,""))),r.items.push({type:"list_item",raw:l,task:!!m,checked:$,loose:!1,text:o,tokens:[]}),r.raw+=l}r.items[r.items.length-1].raw=l.trimEnd(),r.items[r.items.length-1].text=o.trimEnd(),r.raw=r.raw.trimEnd();for(let c=0;c<r.items.length;c++)if(this.lexer.state.top=!1,r.items[c].tokens=this.lexer.blockTokens(r.items[c].text,[]),!r.loose){const u=r.items[c].tokens.filter(g=>g.type==="space"),h=u.length>0&&u.some(g=>/\n.*\n/.test(g.raw));r.loose=h}if(r.loose)for(let c=0;c<r.items.length;c++)r.items[c].loose=!0;return r}}html(t){const e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){const e=this.rules.block.def.exec(t);if(e){const n=e[1].toLowerCase().replace(/\s+/g," "),i=e[2]?e[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:e[0],href:i,title:r}}}table(t){const e=this.rules.block.table.exec(t);if(!e||!/[:|]/.test(e[2]))return;const n=ie(e[1]),i=e[2].replace(/^\||\| *$/g,"").split("|"),r=e[3]&&e[3].trim()?e[3].replace(/\n[ \t]*$/,"").split(`
`):[],s={type:"table",raw:e[0],header:[],align:[],rows:[]};if(n.length===i.length){for(const l of i)/^ *-+: *$/.test(l)?s.align.push("right"):/^ *:-+: *$/.test(l)?s.align.push("center"):/^ *:-+ *$/.test(l)?s.align.push("left"):s.align.push(null);for(const l of n)s.header.push({text:l,tokens:this.lexer.inline(l)});for(const l of r)s.rows.push(ie(l,s.header.length).map(o=>({text:o,tokens:this.lexer.inline(o)})));return s}}lheading(t){const e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){const e=this.rules.block.paragraph.exec(t);if(e){const n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){const e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){const e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:x(e[1])}}tag(t){const e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){const e=this.rules.inline.link.exec(t);if(e){const n=e[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const s=L(n.slice(0,-1),"\\");if((n.length-s.length)%2===0)return}else{const s=ve(e[2],"()");if(s>-1){const o=(e[0].indexOf("!")===0?5:4)+e[1].length+s;e[2]=e[2].substring(0,s),e[0]=e[0].substring(0,o).trim(),e[3]=""}}let i=e[2],r="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);s&&(i=s[1],r=s[3])}else r=e[3]?e[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(n)?i=i.slice(1):i=i.slice(1,-1)),re(e,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){const i=(n[2]||n[1]).replace(/\s+/g," "),r=e[i.toLowerCase()];if(!r){const s=n[0].charAt(0);return{type:"text",raw:s,text:s}}return re(n,r,n[0],this.lexer)}}emStrong(t,e,n=""){let i=this.rules.inline.emStrongLDelim.exec(t);if(!i||i[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const s=[...i[0]].length-1;let l,o,p=s,c=0;const u=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,e=e.slice(-1*t.length+s);(i=u.exec(e))!=null;){if(l=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!l)continue;if(o=[...l].length,i[3]||i[4]){p+=o;continue}else if((i[5]||i[6])&&s%3&&!((s+o)%3)){c+=o;continue}if(p-=o,p>0)continue;o=Math.min(o,o+p+c);const h=[...i[0]][0].length,g=t.slice(0,s+i.index+h+o);if(Math.min(s,o)%2){const m=g.slice(1,-1);return{type:"em",raw:g,text:m,tokens:this.lexer.inlineTokens(m)}}const y=g.slice(2,-2);return{type:"strong",raw:g,text:y,tokens:this.lexer.inlineTokens(y)}}}}codespan(t){const e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(/\n/g," ");const i=/[^ ]/.test(n),r=/^ /.test(n)&&/ $/.test(n);return i&&r&&(n=n.substring(1,n.length-1)),n=x(n,!0),{type:"codespan",raw:e[0],text:n}}}br(t){const e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){const e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){const e=this.rules.inline.autolink.exec(t);if(e){let n,i;return e[2]==="@"?(n=x(e[1]),i="mailto:"+n):(n=x(e[1]),i=n),{type:"link",raw:e[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}url(t){var n;let e;if(e=this.rules.inline.url.exec(t)){let i,r;if(e[2]==="@")i=x(e[0]),r="mailto:"+i;else{let s;do s=e[0],e[0]=((n=this.rules.inline._backpedal.exec(e[0]))==null?void 0:n[0])??"";while(s!==e[0]);i=x(e[0]),e[1]==="www."?r="http://"+e[0]:r=e[0]}return{type:"link",raw:e[0],text:i,href:r,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(t){const e=this.rules.inline.text.exec(t);if(e){let n;return this.lexer.state.inRawBlock?n=e[0]:n=x(e[0]),{type:"text",raw:e[0],text:n}}}}const Me=/^(?: *(?:\n|$))+/,Qe=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,Oe=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,A=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,De=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,he=/(?:[*+-]|\d{1,9}[.)])/,pe=k(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,he).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),U=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,je=/^[^\n]+/,X=/(?!\s*\])(?:\\.|[^\[\]\\])+/,He=k(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",X).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Ne=k(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,he).getRegex(),M="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",G=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Fe=k("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",G).replace("tag",M).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ue=k(U).replace("hr",A).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",M).getRegex(),Ue=k(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ue).getRegex(),W={blockquote:Ue,code:Qe,def:He,fences:Oe,heading:De,hr:A,html:Fe,lheading:pe,list:Ne,newline:Me,paragraph:ue,table:R,text:je},le=k("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",A).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",M).getRegex(),Xe={...W,table:le,paragraph:k(U).replace("hr",A).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",le).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",M).getRegex()},Ge={...W,html:k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",G).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:R,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:k(U).replace("hr",A).replace("heading",` *#{1,6} *[^
]`).replace("lheading",pe).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},fe=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,We=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ge=/^( {2,}|\\)\n(?!\s*$)/,Je=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,E="\\p{P}\\p{S}",Ke=k(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,E).getRegex(),Ve=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,Ye=k(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,E).getRegex(),et=k("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,E).getRegex(),tt=k("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,E).getRegex(),nt=k(/\\([punct])/,"gu").replace(/punct/g,E).getRegex(),st=k(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),it=k(G).replace("(?:-->|$)","-->").getRegex(),rt=k("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",it).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Z=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,lt=k(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Z).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ke=k(/^!?\[(label)\]\[(ref)\]/).replace("label",Z).replace("ref",X).getRegex(),de=k(/^!?\[(ref)\](?:\[\])?/).replace("ref",X).getRegex(),ot=k("reflink|nolink(?!\\()","g").replace("reflink",ke).replace("nolink",de).getRegex(),J={_backpedal:R,anyPunctuation:nt,autolink:st,blockSkip:Ve,br:ge,code:We,del:R,emStrongLDelim:Ye,emStrongRDelimAst:et,emStrongRDelimUnd:tt,escape:fe,link:lt,nolink:de,punctuation:Ke,reflink:ke,reflinkSearch:ot,tag:rt,text:Je,url:R},at={...J,link:k(/^!?\[(label)\]\((.*?)\)/).replace("label",Z).getRegex(),reflink:k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Z).getRegex()},H={...J,escape:k(fe).replace("])","~|])").getRegex(),url:k(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},ct={...H,br:k(ge).replace("{2,}","*").getRegex(),text:k(H.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},q={normal:W,gfm:Xe,pedantic:Ge},_={normal:J,gfm:H,breaks:ct,pedantic:at};class b{constructor(t){d(this,"tokens");d(this,"options");d(this,"state");d(this,"tokenizer");d(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||z,this.options.tokenizer=this.options.tokenizer||new P,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={block:q.normal,inline:_.normal};this.options.pedantic?(e.block=q.pedantic,e.inline=_.pedantic):this.options.gfm&&(e.block=q.gfm,this.options.breaks?e.inline=_.breaks:e.inline=_.gfm),this.tokenizer.rules=e}static get rules(){return{block:q,inline:_}}static lex(t,e){return new b(e).lex(t)}static lexInline(t,e){return new b(e).inlineTokens(t)}lex(t){t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){const n=this.inlineQueue[e];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,e=[]){this.options.pedantic?t=t.replace(/\t/g,"    ").replace(/^ +$/gm,""):t=t.replace(/^( *)(\t+)/gm,(l,o,p)=>o+"    ".repeat(p.length));let n,i,r,s;for(;t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(n=l.call({lexer:this},t,e))?(t=t.substring(n.raw.length),e.push(n),!0):!1))){if(n=this.tokenizer.space(t)){t=t.substring(n.raw.length),n.raw.length===1&&e.length>0?e[e.length-1].raw+=`
`:e.push(n);continue}if(n=this.tokenizer.code(t)){t=t.substring(n.raw.length),i=e[e.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):e.push(n);continue}if(n=this.tokenizer.fences(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.heading(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.hr(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.blockquote(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.list(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.html(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.def(t)){t=t.substring(n.raw.length),i=e[e.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.lheading(t)){t=t.substring(n.raw.length),e.push(n);continue}if(r=t,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const o=t.slice(1);let p;this.options.extensions.startBlock.forEach(c=>{p=c.call({lexer:this},o),typeof p=="number"&&p>=0&&(l=Math.min(l,p))}),l<1/0&&l>=0&&(r=t.substring(0,l+1))}if(this.state.top&&(n=this.tokenizer.paragraph(r))){i=e[e.length-1],s&&i.type==="paragraph"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):e.push(n),s=r.length!==t.length,t=t.substring(n.raw.length);continue}if(n=this.tokenizer.text(t)){t=t.substring(n.raw.length),i=e[e.length-1],i&&i.type==="text"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):e.push(n);continue}if(t){const l="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,e}inline(t,e=[]){return this.inlineQueue.push({src:t,tokens:e}),e}inlineTokens(t,e=[]){let n,i,r,s=t,l,o,p;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)c.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,l.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;t;)if(o||(p=""),o=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(c=>(n=c.call({lexer:this},t,e))?(t=t.substring(n.raw.length),e.push(n),!0):!1))){if(n=this.tokenizer.escape(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.tag(t)){t=t.substring(n.raw.length),i=e[e.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):e.push(n);continue}if(n=this.tokenizer.link(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(n.raw.length),i=e[e.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):e.push(n);continue}if(n=this.tokenizer.emStrong(t,s,p)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.codespan(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.br(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.del(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.autolink(t)){t=t.substring(n.raw.length),e.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(t))){t=t.substring(n.raw.length),e.push(n);continue}if(r=t,this.options.extensions&&this.options.extensions.startInline){let c=1/0;const u=t.slice(1);let h;this.options.extensions.startInline.forEach(g=>{h=g.call({lexer:this},u),typeof h=="number"&&h>=0&&(c=Math.min(c,h))}),c<1/0&&c>=0&&(r=t.substring(0,c+1))}if(n=this.tokenizer.inlineText(r)){t=t.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(p=n.raw.slice(-1)),o=!0,i=e[e.length-1],i&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):e.push(n);continue}if(t){const c="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return e}}class v{constructor(t){d(this,"options");this.options=t||z}code(t,e,n){var r;const i=(r=(e||"").match(/^\S*/))==null?void 0:r[0];return t=t.replace(/\n$/,"")+`
`,i?'<pre><code class="language-'+x(i)+'">'+(n?t:x(t,!0))+`</code></pre>
`:"<pre><code>"+(n?t:x(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
${t}</blockquote>
`}html(t,e){return t}heading(t,e,n){return`<h${e}>${t}</h${e}>
`}hr(){return`<hr>
`}list(t,e,n){const i=e?"ol":"ul",r=e&&n!==1?' start="'+n+'"':"";return"<"+i+r+`>
`+t+"</"+i+`>
`}listitem(t,e,n){return`<li>${t}</li>
`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(t){return`<p>${t}</p>
`}table(t,e){return e&&(e=`<tbody>${e}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+e+`</table>
`}tablerow(t){return`<tr>
${t}</tr>
`}tablecell(t,e){const n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong(t){return`<strong>${t}</strong>`}em(t){return`<em>${t}</em>`}codespan(t){return`<code>${t}</code>`}br(){return"<br>"}del(t){return`<del>${t}</del>`}link(t,e,n){const i=se(t);if(i===null)return n;t=i;let r='<a href="'+t+'"';return e&&(r+=' title="'+e+'"'),r+=">"+n+"</a>",r}image(t,e,n){const i=se(t);if(i===null)return n;t=i;let r=`<img src="${t}" alt="${n}"`;return e&&(r+=` title="${e}"`),r+=">",r}text(t){return t}}class K{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,e,n){return""+n}image(t,e,n){return""+n}br(){return""}}class w{constructor(t){d(this,"options");d(this,"renderer");d(this,"textRenderer");this.options=t||z,this.options.renderer=this.options.renderer||new v,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new K}static parse(t,e){return new w(e).parse(t)}static parseInline(t,e){return new w(e).parseInline(t)}parse(t,e=!0){let n="";for(let i=0;i<t.length;i++){const r=t[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]){const s=r,l=this.options.extensions.renderers[s.type].call({parser:this},s);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(s.type)){n+=l||"";continue}}switch(r.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{const s=r;n+=this.renderer.heading(this.parseInline(s.tokens),s.depth,Pe(this.parseInline(s.tokens,this.textRenderer)));continue}case"code":{const s=r;n+=this.renderer.code(s.text,s.lang,!!s.escaped);continue}case"table":{const s=r;let l="",o="";for(let c=0;c<s.header.length;c++)o+=this.renderer.tablecell(this.parseInline(s.header[c].tokens),{header:!0,align:s.align[c]});l+=this.renderer.tablerow(o);let p="";for(let c=0;c<s.rows.length;c++){const u=s.rows[c];o="";for(let h=0;h<u.length;h++)o+=this.renderer.tablecell(this.parseInline(u[h].tokens),{header:!1,align:s.align[h]});p+=this.renderer.tablerow(o)}n+=this.renderer.table(l,p);continue}case"blockquote":{const s=r,l=this.parse(s.tokens);n+=this.renderer.blockquote(l);continue}case"list":{const s=r,l=s.ordered,o=s.start,p=s.loose;let c="";for(let u=0;u<s.items.length;u++){const h=s.items[u],g=h.checked,y=h.task;let m="";if(h.task){const $=this.renderer.checkbox(!!g);p?h.tokens.length>0&&h.tokens[0].type==="paragraph"?(h.tokens[0].text=$+" "+h.tokens[0].text,h.tokens[0].tokens&&h.tokens[0].tokens.length>0&&h.tokens[0].tokens[0].type==="text"&&(h.tokens[0].tokens[0].text=$+" "+h.tokens[0].tokens[0].text)):h.tokens.unshift({type:"text",text:$+" "}):m+=$+" "}m+=this.parse(h.tokens,p),c+=this.renderer.listitem(m,y,!!g)}n+=this.renderer.list(c,l,o);continue}case"html":{const s=r;n+=this.renderer.html(s.text,s.block);continue}case"paragraph":{const s=r;n+=this.renderer.paragraph(this.parseInline(s.tokens));continue}case"text":{let s=r,l=s.tokens?this.parseInline(s.tokens):s.text;for(;i+1<t.length&&t[i+1].type==="text";)s=t[++i],l+=`
`+(s.tokens?this.parseInline(s.tokens):s.text);n+=e?this.renderer.paragraph(l):l;continue}default:{const s='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return n}parseInline(t,e){e=e||this.renderer;let n="";for(let i=0;i<t.length;i++){const r=t[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]){const s=this.options.extensions.renderers[r.type].call({parser:this},r);if(s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)){n+=s||"";continue}}switch(r.type){case"escape":{const s=r;n+=e.text(s.text);break}case"html":{const s=r;n+=e.html(s.text);break}case"link":{const s=r;n+=e.link(s.href,s.title,this.parseInline(s.tokens,e));break}case"image":{const s=r;n+=e.image(s.href,s.title,s.text);break}case"strong":{const s=r;n+=e.strong(this.parseInline(s.tokens,e));break}case"em":{const s=r;n+=e.em(this.parseInline(s.tokens,e));break}case"codespan":{const s=r;n+=e.codespan(s.text);break}case"br":{n+=e.br();break}case"del":{const s=r;n+=e.del(this.parseInline(s.tokens,e));break}case"text":{const s=r;n+=e.text(s.text);break}default:{const s='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return n}}class S{constructor(t){d(this,"options");this.options=t||z}preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}}d(S,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var I,N,B,xe;class ht{constructor(...t){D(this,I);D(this,B);d(this,"defaults",F());d(this,"options",this.setOptions);d(this,"parse",C(this,I,N).call(this,b.lex,w.parse));d(this,"parseInline",C(this,I,N).call(this,b.lexInline,w.parseInline));d(this,"Parser",w);d(this,"Renderer",v);d(this,"TextRenderer",K);d(this,"Lexer",b);d(this,"Tokenizer",P);d(this,"Hooks",S);this.use(...t)}walkTokens(t,e){var i,r;let n=[];for(const s of t)switch(n=n.concat(e.call(this,s)),s.type){case"table":{const l=s;for(const o of l.header)n=n.concat(this.walkTokens(o.tokens,e));for(const o of l.rows)for(const p of o)n=n.concat(this.walkTokens(p.tokens,e));break}case"list":{const l=s;n=n.concat(this.walkTokens(l.items,e));break}default:{const l=s;(r=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&r[l.type]?this.defaults.extensions.childTokens[l.type].forEach(o=>{const p=l[o].flat(1/0);n=n.concat(this.walkTokens(p,e))}):l.tokens&&(n=n.concat(this.walkTokens(l.tokens,e)))}}return n}use(...t){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{const i={...n};if(i.async=this.defaults.async||i.async||!1,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){const s=e.renderers[r.name];s?e.renderers[r.name]=function(...l){let o=r.renderer.apply(this,l);return o===!1&&(o=s.apply(this,l)),o}:e.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const s=e[r.level];s?s.unshift(r.tokenizer):e[r.level]=[r.tokenizer],r.start&&(r.level==="block"?e.startBlock?e.startBlock.push(r.start):e.startBlock=[r.start]:r.level==="inline"&&(e.startInline?e.startInline.push(r.start):e.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(e.childTokens[r.name]=r.childTokens)}),i.extensions=e),n.renderer){const r=this.defaults.renderer||new v(this.defaults);for(const s in n.renderer){if(!(s in r))throw new Error(`renderer '${s}' does not exist`);if(s==="options")continue;const l=s,o=n.renderer[l],p=r[l];r[l]=(...c)=>{let u=o.apply(r,c);return u===!1&&(u=p.apply(r,c)),u||""}}i.renderer=r}if(n.tokenizer){const r=this.defaults.tokenizer||new P(this.defaults);for(const s in n.tokenizer){if(!(s in r))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;const l=s,o=n.tokenizer[l],p=r[l];r[l]=(...c)=>{let u=o.apply(r,c);return u===!1&&(u=p.apply(r,c)),u}}i.tokenizer=r}if(n.hooks){const r=this.defaults.hooks||new S;for(const s in n.hooks){if(!(s in r))throw new Error(`hook '${s}' does not exist`);if(s==="options")continue;const l=s,o=n.hooks[l],p=r[l];S.passThroughHooks.has(s)?r[l]=c=>{if(this.defaults.async)return Promise.resolve(o.call(r,c)).then(h=>p.call(r,h));const u=o.call(r,c);return p.call(r,u)}:r[l]=(...c)=>{let u=o.apply(r,c);return u===!1&&(u=p.apply(r,c)),u}}i.hooks=r}if(n.walkTokens){const r=this.defaults.walkTokens,s=n.walkTokens;i.walkTokens=function(l){let o=[];return o.push(s.call(this,l)),r&&(o=o.concat(r.call(this,l))),o}}this.defaults={...this.defaults,...i}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return b.lex(t,e??this.defaults)}parser(t,e){return w.parse(t,e??this.defaults)}}I=new WeakSet,N=function(t,e){return(n,i)=>{const r={...i},s={...this.defaults,...r};this.defaults.async===!0&&r.async===!1&&(s.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),s.async=!0);const l=C(this,B,xe).call(this,!!s.silent,!!s.async);if(typeof n>"u"||n===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(s.hooks&&(s.hooks.options=s),s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(n):n).then(o=>t(o,s)).then(o=>s.hooks?s.hooks.processAllTokens(o):o).then(o=>s.walkTokens?Promise.all(this.walkTokens(o,s.walkTokens)).then(()=>o):o).then(o=>e(o,s)).then(o=>s.hooks?s.hooks.postprocess(o):o).catch(l);try{s.hooks&&(n=s.hooks.preprocess(n));let o=t(n,s);s.hooks&&(o=s.hooks.processAllTokens(o)),s.walkTokens&&this.walkTokens(o,s.walkTokens);let p=e(o,s);return s.hooks&&(p=s.hooks.postprocess(p)),p}catch(o){return l(o)}}},B=new WeakSet,xe=function(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){const i="<p>An error occurred:</p><pre>"+x(n.message+"",!0)+"</pre>";return e?Promise.resolve(i):i}if(e)return Promise.reject(n);throw n}};const T=new ht;function f(a,t){return T.parse(a,t)}f.options=f.setOptions=function(a){return T.setOptions(a),f.defaults=T.defaults,oe(f.defaults),f};f.getDefaults=F;f.defaults=z;f.use=function(...a){return T.use(...a),f.defaults=T.defaults,oe(f.defaults),f};f.walkTokens=function(a,t){return T.walkTokens(a,t)};f.parseInline=T.parseInline;f.Parser=w;f.parser=w.parse;f.Renderer=v;f.TextRenderer=K;f.Lexer=b;f.lexer=b.lex;f.Tokenizer=P;f.Hooks=S;f.parse=f;f.options;f.setOptions;f.use;f.walkTokens;f.parseInline;const pt=f;w.parse;b.lex;function ut(a){let t,e;return{c(){t=new _e(!1),e=te(),this.h()},l(n){t=Re(n,!1),e=te(),this.h()},h(){t.a=e},m(n,i){t.m(a[0],n,i),Se(n,e,i)},p:j,i:j,o:j,d(n){n&&(Ie(e),t.d())}}}function ft(a,t,e){let{data:n}=t,i=pt(n.post);return a.$$set=r=>{"data"in r&&e(1,n=r.data)},[i,n]}class bt extends Te{constructor(t){super(),ze(this,t,ft,ut,$e,{data:1})}}export{bt as component,mt as universal};
