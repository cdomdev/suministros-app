import{c as p,u,a as Q,b as U}from"./ThemeProvider.C_HRE9zQ.js";import{P as j}from"./index.CFq_IdT0.js";import{r as l}from"./index.CZlPm10g.js";import{j as n}from"./jsx-runtime.D5qyYPMi.js";function W(e,o){return l.Children.toArray(e).some(s=>l.isValidElement(s)&&s.type===o)}function X({as:e,bsPrefix:o,className:s,...a}){o=u(o,"col");const t=Q(),r=U(),c=[],i=[];return t.forEach(d=>{const m=a[d];delete a[d];let f,y,N;typeof m=="object"&&m!=null?{span:f,offset:y,order:N}=m:f=m;const h=d!==r?`-${d}`:"";f&&c.push(f===!0?`${o}${h}`:`${o}${h}-${f}`),N!=null&&i.push(`order${h}-${N}`),y!=null&&i.push(`offset${h}-${y}`)}),[{...a,className:p(s,...c,...i)},{as:e,bsPrefix:o,spans:c}]}const B=l.forwardRef((e,o)=>{const[{className:s,...a},{as:t="div",bsPrefix:r,spans:c}]=X(e);return n.jsx(t,{...a,ref:o,className:p(s,!c.length&&r)})});B.displayName="Col";const Y={type:j.string,tooltip:j.bool,as:j.elementType},w=l.forwardRef(({as:e="div",className:o,type:s="valid",tooltip:a=!1,...t},r)=>n.jsx(e,{...t,ref:r,className:p(o,`${s}-${a?"tooltip":"feedback"}`)}));w.displayName="Feedback";w.propTypes=Y;const F=l.createContext({}),x=l.forwardRef(({id:e,bsPrefix:o,className:s,type:a="checkbox",isValid:t=!1,isInvalid:r=!1,as:c="input",...i},d)=>{const{controlId:m}=l.useContext(F);return o=u(o,"form-check-input"),n.jsx(c,{...i,ref:d,type:a,id:e||m,className:p(s,o,t&&"is-valid",r&&"is-invalid")})});x.displayName="FormCheckInput";const C=l.forwardRef(({bsPrefix:e,className:o,htmlFor:s,...a},t)=>{const{controlId:r}=l.useContext(F);return e=u(e,"form-check-label"),n.jsx("label",{...a,ref:t,htmlFor:s||r,className:p(o,e)})});C.displayName="FormCheckLabel";const O=l.forwardRef(({id:e,bsPrefix:o,bsSwitchPrefix:s,inline:a=!1,reverse:t=!1,disabled:r=!1,isValid:c=!1,isInvalid:i=!1,feedbackTooltip:d=!1,feedback:m,feedbackType:f,className:y,style:N,title:h="",type:v="checkbox",label:g,children:R,as:z="input",...D},H)=>{o=u(o,"form-check"),s=u(s,"form-switch");const{controlId:L}=l.useContext(F),J=l.useMemo(()=>({controlId:e||L}),[L,e]),T=!R&&g!=null&&g!==!1||W(R,C),K=n.jsx(x,{...D,type:v==="switch"?"checkbox":v,ref:H,isValid:c,isInvalid:i,disabled:r,as:z});return n.jsx(F.Provider,{value:J,children:n.jsx("div",{style:N,className:p(y,T&&o,a&&`${o}-inline`,t&&`${o}-reverse`,v==="switch"&&s),children:R||n.jsxs(n.Fragment,{children:[K,T&&n.jsx(C,{title:h,children:g}),m&&n.jsx(w,{type:f,tooltip:d,children:m})]})})})});O.displayName="FormCheck";const $=Object.assign(O,{Input:x,Label:C}),S=l.forwardRef(({bsPrefix:e,type:o,size:s,htmlSize:a,id:t,className:r,isValid:c=!1,isInvalid:i=!1,plaintext:d,readOnly:m,as:f="input",...y},N)=>{const{controlId:h}=l.useContext(F);return e=u(e,"form-control"),n.jsx(f,{...y,type:o,size:a,ref:N,readOnly:m,id:t||h,className:p(r,d?`${e}-plaintext`:e,s&&`${e}-${s}`,o==="color"&&`${e}-color`,c&&"is-valid",i&&"is-invalid")})});S.displayName="FormControl";const Z=Object.assign(S,{Feedback:w}),E=l.forwardRef(({className:e,bsPrefix:o,as:s="div",...a},t)=>(o=u(o,"form-floating"),n.jsx(s,{ref:t,className:p(e,o),...a})));E.displayName="FormFloating";const k=l.forwardRef(({controlId:e,as:o="div",...s},a)=>{const t=l.useMemo(()=>({controlId:e}),[e]);return n.jsx(F.Provider,{value:t,children:n.jsx(o,{...s,ref:a})})});k.displayName="FormGroup";const G=l.forwardRef(({as:e="label",bsPrefix:o,column:s=!1,visuallyHidden:a=!1,className:t,htmlFor:r,...c},i)=>{const{controlId:d}=l.useContext(F);o=u(o,"form-label");let m="col-form-label";typeof s=="string"&&(m=`${m} ${m}-${s}`);const f=p(t,o,a&&"visually-hidden",s&&m);return r=r||d,s?n.jsx(B,{ref:i,as:"label",className:f,htmlFor:r,...c}):n.jsx(e,{ref:i,className:f,htmlFor:r,...c})});G.displayName="FormLabel";const M=l.forwardRef(({bsPrefix:e,className:o,id:s,...a},t)=>{const{controlId:r}=l.useContext(F);return e=u(e,"form-range"),n.jsx("input",{...a,type:"range",ref:t,className:p(o,e),id:s||r})});M.displayName="FormRange";const V=l.forwardRef(({bsPrefix:e,size:o,htmlSize:s,className:a,isValid:t=!1,isInvalid:r=!1,id:c,...i},d)=>{const{controlId:m}=l.useContext(F);return e=u(e,"form-select"),n.jsx("select",{...i,size:s,ref:d,className:p(a,e,o&&`${e}-${o}`,t&&"is-valid",r&&"is-invalid"),id:c||m})});V.displayName="FormSelect";const A=l.forwardRef(({bsPrefix:e,className:o,as:s="small",muted:a,...t},r)=>(e=u(e,"form-text"),n.jsx(s,{...t,ref:r,className:p(o,e,a&&"text-muted")})));A.displayName="FormText";const _=l.forwardRef((e,o)=>n.jsx($,{...e,ref:o,type:"switch"}));_.displayName="Switch";const b=Object.assign(_,{Input:$.Input,Label:$.Label}),q=l.forwardRef(({bsPrefix:e,className:o,children:s,controlId:a,label:t,...r},c)=>(e=u(e,"form-floating"),n.jsxs(k,{ref:c,className:p(o,e),controlId:a,...r,children:[s,n.jsx("label",{htmlFor:a,children:t})]})));q.displayName="FloatingLabel";const P={_ref:j.any,validated:j.bool,as:j.elementType},I=l.forwardRef(({className:e,validated:o,as:s="form",...a},t)=>n.jsx(s,{...a,ref:t,className:p(e,o&&"was-validated")}));I.displayName="Form";I.propTypes=P;const te=Object.assign(I,{Group:k,Control:Z,Floating:E,Check:$,Switch:b,Label:G,Text:A,Range:M,Select:V,FloatingLabel:q});export{te as F};
