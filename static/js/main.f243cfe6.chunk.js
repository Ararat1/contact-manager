(this["webpackJsonpcontact-manager"]=this["webpackJsonpcontact-manager"]||[]).push([[0],{111:function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__2u9mI",btnGroup:"Toolbar_btnGroup__1PYXH"}},112:function(e,t,n){e.exports={NoSearched:"NoSearched_NoSearched__KJLEw"}},113:function(e,t,n){e.exports={NoContacts:"NoContacts_NoContacts__25V0n"}},114:function(e,t,n){e.exports={Home:"Home_Home__EyIR7"}},119:function(e,t,n){e.exports={NotFound:"NotFound_NotFound__ltBMX"}},120:function(e,t,n){e.exports={Footer:"Footer_Footer__1khEt"}},121:function(e,t,n){e.exports={App:"App_App__8VJex"}},148:function(e,t,n){},149:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(18),o=n.n(a),r=n(27),s=n(10),i=n(31),l=n(105),j="ADD_CONTACT",d="DELETE_CONTACT",u="SET_CONTACTS",b="SET_SEARCHED_CONTACTS",m="SET_ALERTS",h="SELECT_CONTACT",f="SELECT_ALL_CONTACTS",O="UNSELECT_CONTACT",x={contacts:[],searchedContacts:null},p={alerts:[]},N={selectedContacts:{}},y=n(106),k=Object(i.combineReducers)({contacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload,a=JSON.parse(JSON.stringify(e));switch(n){case j:case u:return a.contacts=c,a;case d:return a.contacts=a.contacts.filter((function(e){return e.id!==c})),a;case b:return a.searchedContacts=c,a;default:return e}},alerts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload,a=JSON.parse(JSON.stringify(e));switch(n){case m:return a.alerts=c,a;default:return e}},selectedContacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload,a=JSON.parse(JSON.stringify(e));switch(n){case h:return a.selectedContacts[c]=!0,a;case O:return delete a.selectedContacts[c],a;case f:return Object.keys(a.selectedContacts).length===c.length?a.selectedContacts={}:c.forEach((function(e){return a.selectedContacts[e]=!0})),a;default:return e}}}),g=Object(i.createStore)(k,Object(l.composeWithDevTools)(Object(i.applyMiddleware)(y.a))),C=n(17),v=n(38),_=n(9),S=n(166),E=n(122),T=function(e){return{type:j,payload:e}},A=function(e){return{type:b,payload:e}},w=function(e){return{type:m,payload:e}},D=function(e){return{type:O,payload:e}},G={link:"https://contact-manager--backend.herokuapp.com/api"},L=function(e){var t={method:"DELETE"};return function(n){fetch("".concat(G.link,"/contacts/").concat(e),t).then((function(){return n({type:d,payload:e})})).catch((function(e){return console.log(e.message)}))}},F=n(158),P=n(159),H=n(107),I=n(172),B=n(171),J=n(52),M=n(160),R=n(123),U=n(161),W=n(170),q=n(162),V=n(83),X=n.n(V),Z=n(1),Y=function(){var e=Object(_.g)(),t=Object(s.c)((function(e){return e.contacts.contacts})).map((function(e){return e._id})),n=Object(s.c)((function(e){return e.selectedContacts.selectedContacts})),c=Object.keys(n).length,a=Object(s.b)();return Object(Z.jsx)("header",{className:X.a.Header,children:Object(Z.jsx)(F.a,{children:Object(Z.jsx)(P.a,{children:Object(Z.jsx)(H.a,{children:Object(Z.jsxs)(I.a,{variant:"dark",expand:"sm",children:[Object(Z.jsx)(I.a.Brand,{className:X.a.logo,children:Object(Z.jsx)(r.b,{to:"/",children:"Contact Manager"})}),Object(Z.jsx)(I.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(Z.jsx)(I.a.Collapse,{id:"responsive-navbar-nav",children:Object(Z.jsxs)(B.a,{className:"d-flex flex-row align-items-center justify-content-center ml-md-auto ",children:[Object(Z.jsx)(J.a,{variant:"outline-light",onClick:function(){return e.push("/")},children:Object(Z.jsx)("i",{className:"fas fa-home"})}),Object(Z.jsx)(J.a,{variant:"outline-light",onClick:function(){return e.push("/add-contact")},children:Object(Z.jsx)("i",{className:"fas fa-plus"})}),Object(Z.jsxs)(M.a,{drop:"left",variant:"outline-light",title:Object(Z.jsx)("i",{className:"fas fa-cog"}),className:X.a.dropdownMenu,children:[Object(Z.jsxs)(R.a.Item,{className:"d-flex justify-content-around align-items-center",onClick:function(){return a({type:f,payload:t})},children:["Select All",Object(Z.jsx)(U.a,{variant:"dark",children:"".concat(c)})]}),c?Object(Z.jsx)(R.a.Item,{onClick:function(){a(function(e){var t={method:"DELETE"};return function(n){var c=[],a=function(e){var a=new Promise((function(c,a){c(fetch("".concat(G.link,"/contacts/").concat(e),t).then((function(){return n(D(e))})))}));c.push(a)};for(var o in e)a(o);Promise.all(c).then((function(){return fetch("".concat(G.link,"/contacts"))})).then((function(e){return e.json()})).then((function(e){return n(T(e))})).catch((function(e){return console.log(e)}))}}(n))},children:"Delete Selected"}):Object(Z.jsx)(W.a,{placement:"bottom",overlay:Object(Z.jsx)(q.a,{id:"tooltip-disabled",children:"No contacts selected"}),children:Object(Z.jsx)("span",{className:"d-inline-block",children:Object(Z.jsx)(R.a.Item,{disabled:!0,children:"Delete Selected"})})})]})]})})]})})})})})},K=n(12),Q=n(168),z=n(169),$=n(173),ee=n(167),te="Contact",ne=n(44),ce=n.n(ne),ae=function(e){var t=e.contact,n=e.index,a=e.onDelete,o=e.onDnD,r=Object(_.g)(),i=Object(s.c)((function(e){return e.selectedContacts.selectedContacts}))[t._id],l=Object(s.b)(),j=Object(c.useRef)(null),d=Object(Q.a)({accept:te,collect:function(e){return{handlerId:e.getHandlerId()}},hover:function(e){if(j.current){var t=e.index,c=n;t!==c&&(o(t,c),e.index=c)}}}),u=Object(K.a)(d,2)[1],b=Object(z.a)({type:te,item:function(){return{index:n}},collect:function(e){return{isDragging:e.isDragging()}}}),m=Object(K.a)(b,2),f=m[0].isDragging;(0,m[1])(u(j));var O=f?.5:1;return Object(Z.jsx)(H.a,{ref:j,xs:10,sm:8,md:6,lg:4,xl:3,style:{opacity:O},children:Object(Z.jsxs)($.a,{className:ce.a.Contact,text:i?"light":"dark",bg:i?"dark":"light",children:[Object(Z.jsxs)($.a.Body,{className:ce.a.cardBody,children:[Object(Z.jsxs)($.a.Title,{children:[t.firstName," ",t.lastName]}),Object(Z.jsx)($.a.Text,{children:t.email}),Object(Z.jsx)($.a.Text,{children:t.primaryNumber}),Object(Z.jsx)($.a.Text,{children:t.workNumber}),Object(Z.jsx)($.a.Subtitle,{className:"text-muted",children:t.notes}),Object(Z.jsx)(W.a,{placement:"bottom",overlay:Object(Z.jsx)(q.a,{id:"tooltip-bottom",children:"More Info"}),children:Object(Z.jsx)(J.a,{variant:i?"dark":"light",className:ce.a.detailsBtn,onClick:function(){return r.push("/details/".concat(t._id),{contact:t})},children:Object(Z.jsx)("i",{className:"fas fa-info-circle"})})})]}),Object(Z.jsxs)($.a.Footer,{className:ce.a.options,children:[Object(Z.jsx)(W.a,{placement:"bottom",overlay:Object(Z.jsx)(q.a,{id:"tooltip-bottom",children:"Delete"}),children:Object(Z.jsx)(J.a,{variant:"danger",onClick:function(){return a(t._id,"".concat(t.firstName," ").concat(t.lastName))},children:Object(Z.jsx)("i",{className:"fas fa-user-slash"})})}),Object(Z.jsx)(W.a,{placement:"bottom",overlay:Object(Z.jsx)(q.a,{id:"tooltip-bottom",children:"Select"}),children:Object(Z.jsx)(ee.a.Check,{type:"checkbox",className:ce.a.check,onChange:function(e){var n,c=e.target.checked;l(c?(n=t._id,{type:h,payload:n}):D(t._id))},checked:!!i})}),Object(Z.jsx)(W.a,{placement:"bottom",overlay:Object(Z.jsx)(q.a,{id:"tooltip-bottom",children:"Edit"}),children:Object(Z.jsx)(J.a,{variant:"primary",onClick:function(){r.push("/edit-contact/".concat(t._id),{contact:t})},children:Object(Z.jsx)("i",{className:"fas fa-user-edit"})})})]})]})})},oe=n(30),re=n.n(oe),se=function(){return Object(Z.jsx)(F.a,{children:Object(Z.jsx)(P.a,{className:"d-flex justify-content-center",children:Object(Z.jsx)(H.a,{xs:10,sm:8,md:6,lg:4,xl:3,children:Object(Z.jsxs)($.a,{className:re.a.Contact,bg:"light",children:[Object(Z.jsxs)($.a.Body,{className:re.a.cardBody,children:[Object(Z.jsx)($.a.Title,{className:re.a.placeholder,children:"\xa0"}),Object(Z.jsx)($.a.Text,{className:re.a.placeholder,children:"\xa0"}),Object(Z.jsx)($.a.Text,{className:re.a.placeholder,children:"\xa0"}),Object(Z.jsx)($.a.Text,{className:re.a.placeholder,children:"\xa0"}),Object(Z.jsx)($.a.Subtitle,{className:"".concat(re.a.placeholder," text-muted"),children:"\xa0"})]}),Object(Z.jsxs)($.a.Footer,{className:re.a.options,children:[Object(Z.jsx)(J.a,{variant:"danger",disabled:!0,children:Object(Z.jsx)("i",{className:"fas fa-user-slash"})}),Object(Z.jsx)(ee.a.Check,{type:"checkbox",className:re.a.check,disabled:!0}),Object(Z.jsx)(J.a,{variant:"primary",disabled:!0,children:Object(Z.jsx)("i",{className:"fas fa-user-edit"})})]})]})})})})},ie=n(85),le=n.n(ie),je=function(e){var t=e.children,n=e.onClose,a=document.createElement("div"),r=Object(c.useRef)(null);return Object(c.useEffect)((function(){document.body.appendChild(a);var e=function(e){"Escape"===e.key&&n()};return document.documentElement.addEventListener("keydown",e),a.addEventListener("click",(function(e){e.target===r.current&&n()})),function(){document.documentElement.removeEventListener("keydown",e),a.remove()}}),[a,n]),o.a.createPortal(Object(Z.jsx)(F.a,{className:le.a.Modal,ref:r,fluid:!0,children:Object(Z.jsx)(P.a,{children:Object(Z.jsxs)(H.a,{className:le.a.block,children:[Object(Z.jsx)(J.a,{variant:"light",onClick:n,className:le.a.closeBtn,children:Object(Z.jsx)("i",{className:"fas fa-times"})}),t]})})}),a)},de=function(e){var t=e.onConfirm,n=e.onCancel;return Object(Z.jsxs)(je,{onClose:n,children:[Object(Z.jsx)("h2",{style:{marginBottom:"24px"},children:"Are you sure you want to delete this contact?"}),Object(Z.jsxs)("div",{className:"justify-content-center",children:[Object(Z.jsx)(J.a,{variant:"primary",onClick:n,style:{marginRight:"16px"},children:"Cancel"}),Object(Z.jsx)(J.a,{variant:"danger",onClick:t,children:"Delete"})]})]})},ue=n(164),be=n(110),me=n(111),he=n.n(me),fe=function(){var e=Object(s.c)((function(e){return e.contacts.contacts})),t=Object(s.c)((function(t){t.searchedContacts;return e.contacts})),n=Object(s.b)();Object(c.useEffect)((function(){t||n(A(null))}),[t,n]);return Object(Z.jsx)("section",{className:he.a.Toolbar,children:Object(Z.jsx)(F.a,{children:Object(Z.jsx)(P.a,{className:"justify-content-center",children:Object(Z.jsx)(H.a,{xs:10,sm:8,md:6,lg:4,children:Object(Z.jsxs)(ue.a,{className:"mb-3",onInput:function(t){var c=t.target.value;if((c=c.toString().trim().replace(/\s+/g," ")).length>0){var a=new RegExp("".concat(c),"gim"),o=e.filter((function(e){var t=e.firstName,n=e.lastName;return a.test("".concat(t," ").concat(n))}));n(A(o))}else n(A(null))},children:[Object(Z.jsx)(be.a,{placeholder:"Contact name .."}),Object(Z.jsx)(ue.a.Append,{children:Object(Z.jsx)(ue.a.Text,{children:Object(Z.jsx)("i",{className:"fas fa-search"})})})]})})})})})},Oe=n.p+"static/media/noSearched.c36f2123.png",xe=n(112),pe=n.n(xe),Ne=function(){return Object(Z.jsxs)(H.a,{xs:10,sm:8,md:6,lg:4,className:pe.a.NoSearched,children:[Object(Z.jsx)("img",{src:Oe,alt:"no-searched"}),Object(Z.jsx)("h2",{children:"Not found .."})]})},ye=n.p+"static/media/noContacts.fef44e3d.png",ke=n(113),ge=n.n(ke),Ce=function(){var e=Object(_.g)();return Object(Z.jsxs)(H.a,{xs:10,sm:8,md:6,lg:4,className:ge.a.NoContacts,children:[Object(Z.jsx)("img",{src:ye,alt:"no-searched"}),Object(Z.jsx)("h2",{children:"No contacts yet .."}),Object(Z.jsxs)(J.a,{variant:"secondary",onClick:function(){return e.push("/add-contact")},children:["Add Contact ",Object(Z.jsx)("i",{className:"fas fa-plus"})]})]})},ve=n(114),_e=n.n(ve),Se=function(){var e=Object(c.useState)(!1),t=Object(K.a)(e,2),n=t[0],a=t[1],o=Object(s.c)((function(e){return e.contacts.contacts})),r=Object(s.c)((function(e){return e.contacts.searchedContacts})),i=Object(s.c)((function(e){return e.alerts.alerts})),l=Object(c.useState)(null),j=Object(K.a)(l,2),d=j[0],b=j[1],m=Object(c.useState)(""),h=Object(K.a)(m,2),f=h[0],O=h[1],x=Object(s.b)(),p=Object(_.g)();Object(c.useEffect)((function(){if(p.location.state){var e=Object(v.a)(i),t="";p.location.state.edited&&(t='Edited "'.concat(p.location.state.contactFullName,'" contact')),p.location.state.added&&(t='Added "'.concat(p.location.state.contactFullName,'" contact')),e.unshift(t),p.replace("/",void 0),x(w(e))}o.length||a(!0),x(function(e){return function(t){fetch("".concat(G.link,"/contacts")).then((function(e){return e.json()})).then((function(e){return t(T(e))})).catch((function(e){return console.log(e.message)})).finally((function(){return e(!1)}))}}(a))}),[p,i,x,o.length]);var N=function(e,t){b(e),O(t)},y=function(){b(null),O("")},k=function(e,t){var n=o.map((function(n,c){return c===e?Object(C.a)({},o[t]):c===t?Object(C.a)({},o[e]):n}));x({type:u,payload:n})};return Object(Z.jsxs)("main",{className:_e.a.Home,children:[Object(Z.jsx)(fe,{}),Object(Z.jsx)("section",{children:n&&Object(Z.jsx)(se,{})||Object(Z.jsx)(F.a,{children:Object(Z.jsx)(P.a,{className:"d-flex justify-content-center",children:o.length&&!r?o.map((function(e,t){return Object(Z.jsx)(ae,{contact:e,index:t,onDelete:N,onDnD:k},e._id)})):r&&!r.length?Object(Z.jsx)(Ne,{}):r?r.map((function(e,t){return Object(Z.jsx)(ae,{contact:e,index:t,onDelete:N,onDnD:k},e._id)})):n||Object(Z.jsx)(Ce,{})})})}),d&&Object(Z.jsx)(de,{onConfirm:function(){return function(e){var t=Object(v.a)(i),n='Deleted "'.concat(f,'" contact');t.unshift(n),x(w(t)),y(),x(L(e))}(d)},onCancel:y})]})},Ee=n(76),Te=n(77),Ae=n(45),we=n.n(Ae),De=n(96),Ge=n.n(De),Le=n(95),Fe=n.n(Le),Pe=n(115),He=n.n(Pe),Ie=n(116),Be=n.n(Ie),Je=n(117),Me=n.n(Je),Re=function(){function e(){Object(Ee.a)(this,e)}return Object(Te.a)(e,null,[{key:"isUsername",value:function(e){return!we()(e)&&Fe()(e,"en-US")&&Ge()(e,{min:2,max:16})}},{key:"isEmail",value:function(e){return!we()(e)&&He()(e)}},{key:"isPhoneNumber",value:function(e){return!we()(e)&&Be()(e,"am-AM")}},{key:"isNotes",value:function(e){return!we()(e)&&Fe()(e,"en-US")&&Ge()(e,{min:2,max:8})}},{key:"isLink",value:function(e){return we()(e)||Me()(e,{protocols:["http","https"]})}}]),e}(),Ue=n(97),We=n.n(Ue),qe=n(86),Ve=n.n(qe),Xe=n(118),Ze=n.n(Xe),Ye=function(){function e(){Object(Ee.a)(this,e)}return Object(Te.a)(e,null,[{key:"email",value:function(e){return Ve()(We()(Ze()(e)))}},{key:"text",value:function(e){return Ve()(We()(e))}},{key:"telNumber",value:function(e){return Ve()(e)}}]),e}(),Ke=function(e){for(var t={firstName:"First name *",lastName:"Last name *",email:"@ Email *",primaryNumber:"Primary Number *",workNumber:"Work Number *",notes:"Notes *",github:"GitHub link",linkedin:"Linkedin link",skype:"Skype link"},n=0,c=Object.entries(e);n<c.length;n++){var a=Object(K.a)(c[n],2),o=a[0];if(!1===a[1]){var r="Invalid ".concat(t[o]);alert(r);break}}},Qe=n(87),ze=n.n(Qe),$e=function(){var e=Object(s.c)((function(e){return e.alerts.alerts})),t=Object(c.useState)(!1),n=Object(K.a)(t,2),a=n[0],o=n[1],r=Object(s.b)(),i=Object(_.g)();Object(c.useEffect)((function(){if(i.location.state){var t=Object(v.a)(e),n="";i.location.state.added&&(n='Added "'.concat(i.location.state.contactFullName,'" contact')),t.unshift(n),i.replace(i.location.pathname,void 0),r(w(t))}}),[e,r,i]);return Object(Z.jsx)("main",{className:ze.a.AddContact,children:Object(Z.jsx)(F.a,{children:Object(Z.jsxs)(P.a,{className:"d-flex justify-content-center align-items-center",children:[Object(Z.jsx)(H.a,{xs:12,sm:10,md:8,lg:6,className:ze.a.title,children:Object(Z.jsx)("h2",{children:"Add Contact"})}),Object(Z.jsx)("div",{className:"w-100"}),Object(Z.jsx)(H.a,{xs:12,sm:10,md:8,lg:6,className:ze.a.form,children:Object(Z.jsxs)(ee.a,{onSubmit:function(e){o(!0),e.preventDefault();for(var t=e.target,n={firstName:Ye.text(t.firstName.value),lastName:Ye.text(t.lastName.value),email:Ye.email(t.email.value),primaryNumber:Ye.telNumber(t.primaryNumber.value),workNumber:Ye.telNumber(t.workNumber.value),notes:Ye.text(t.notes.value)},c={details:{github:t.github.value,linkedin:t.linkedin.value,skype:t.skype.value}},a=!0,r={firstName:Re.isUsername(n.firstName),lastName:Re.isUsername(n.lastName),email:Re.isEmail(n.email),primaryNumber:Re.isPhoneNumber(n.primaryNumber),workNumber:Re.isPhoneNumber(n.workNumber),notes:Re.isNotes(n.notes),github:Re.isLink(c.details.github),linkedin:Re.isLink(c.details.linkedin),skype:Re.isLink(c.details.skype)},s=0,l=Object.values(r);s<l.length;s++){if(!1===l[s]){a=!1;break}}if(!a)return Ke(r),void o(!1);fetch("".concat(G.link,"/contacts"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){var t=e._id;return fetch("".concat(G.link,"/details/").concat(t),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)})})).then((function(){o(!1),t.stayOnThePage.checked?(i.push(i.location.pathname,{added:!0,contactFullName:"".concat(n.firstName," ").concat(n.lastName)}),t.reset()):i.push("/",{added:!0,contactFullName:"".concat(n.firstName," ").concat(n.lastName)})})).catch((function(e){return console.log(e)}))},children:[Object(Z.jsxs)(ee.a.Row,{children:[Object(Z.jsx)(ee.a.Group,{as:H.a,children:Object(Z.jsx)(ee.a.Control,{type:"text",name:"firstName",placeholder:"First name *",autoComplete:"off"})}),Object(Z.jsx)(ee.a.Group,{as:H.a,children:Object(Z.jsx)(ee.a.Control,{type:"text",name:"lastName",placeholder:"Last name *",autoComplete:"off"})})]}),Object(Z.jsx)(ee.a.Group,{children:Object(Z.jsx)(ee.a.Control,{type:"text",name:"email",placeholder:"@ Email *",autoComplete:"off"})}),Object(Z.jsx)(ee.a.Group,{children:Object(Z.jsx)(ee.a.Control,{type:"text",name:"primaryNumber",placeholder:"Primary phone number *",autoComplete:"off"})}),Object(Z.jsx)(ee.a.Group,{children:Object(Z.jsx)(ee.a.Control,{type:"text",name:"workNumber",placeholder:"Work phone number *",autoComplete:"off"})}),Object(Z.jsx)(ee.a.Group,{children:Object(Z.jsx)(ee.a.Control,{type:"text",name:"notes",placeholder:"Notes *",autoComplete:"off"})}),Object(Z.jsx)(ee.a.Group,{children:Object(Z.jsx)(ee.a.Control,{type:"text",name:"github",placeholder:"GitHub link",autoComplete:"off"})}),Object(Z.jsx)(ee.a.Group,{children:Object(Z.jsx)(ee.a.Control,{type:"text",name:"linkedin",placeholder:"Linkedin link",autoComplete:"off"})}),Object(Z.jsx)(ee.a.Group,{children:Object(Z.jsx)(ee.a.Control,{type:"text",name:"skype",placeholder:"Skype link",autoComplete:"off"})}),Object(Z.jsx)(ee.a.Group,{children:Object(Z.jsx)(ee.a.Check,{type:"checkbox",name:"stayOnThePage",id:"stayOnThePage",label:"Stay on the page"})}),Object(Z.jsx)(J.a,{variant:"secondary",onClick:function(){return i.push("/")},disabled:a,children:"Cancel"}),Object(Z.jsxs)(J.a,{variant:"primary",type:"submit",disabled:a,children:["Save ",Object(Z.jsx)("i",{className:"fas fa-save"})]})]})})]})})})},et=n(78),tt=n.n(et),nt=function(e){return void 0===e?{id:"",firstName:"",lastName:"",email:"",primaryNumber:"",workNumber:"",notes:""}:e.contact},ct=n(58),at=n.n(ct),ot=function(){var e=Object(c.useState)(!1),t=Object(K.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(!1),r=Object(K.a)(o,2),s=r[0],i=r[1],l=Object(_.g)(),j=Object(_.h)().id,d=Object(c.useState)(nt(l.location.state)),u=Object(K.a)(d,2),b=u[0],m=u[1],h=Object(c.useState)({github:"",linkedin:"",skype:""}),f=Object(K.a)(h,2),O=f[0],x=f[1];Object(c.useEffect)((function(){a(!0),j||l.push("/not-found"),fetch("".concat(G.link,"/details/").concat(j)).then((function(e){return e.json()})).then((function(e){void 0===l.location.state&&fetch("".concat(G.link,"/contacts/").concat(j)).then((function(e){return e.json()})).then((function(e){return m(e)})).catch((function(e){return console.log(e.message)})),x(e),a(!1)})).catch((function(e){return console.log(e)})).finally((function(){return a(!1)})),void 0===l.location.state&&(a(!0),fetch("".concat(G.link,"/contacts/").concat(j),{method:"GET"}).then((function(e){return e.json()})).then((function(e){return m(e)})).catch((function(e){return console.log(e.message)})))}),[l,j]);var p=function(e){var t=e.target,n=t.name,c=t.value,a=Object(C.a)({},b),o=Object(C.a)({},O),r=!0;switch(n){case"firstName":case"lastName":case"notes":a[n]=Ye.text(c);break;case"email":a[n]=Ye.email(c);break;case"primaryNumber":case"workNumber":a[n]=Ye.telNumber(c);break;case"github":case"linkedin":case"skype":r=!1,o[n]=c}r?m(a):x(o)};return Object(Z.jsx)("main",{className:at.a.EditContact,children:n&&Object(Z.jsx)(F.a,{className:at.a.loader,children:Object(Z.jsx)(P.a,{children:Object(Z.jsx)(H.a,{children:Object(Z.jsx)(tt.a,{loading:n})})})})||Object(Z.jsx)(F.a,{children:Object(Z.jsxs)(P.a,{className:"d-flex justify-content-center align-items-center",children:[Object(Z.jsx)(H.a,{xs:12,sm:10,md:8,lg:6,className:at.a.title,children:Object(Z.jsx)("h2",{children:"Edit Contact"})}),Object(Z.jsx)("div",{className:"w-100"}),Object(Z.jsx)(H.a,{xs:12,sm:10,md:8,lg:6,className:at.a.form,children:Object(Z.jsxs)(ee.a,{onSubmit:function(e){i(!0),e.preventDefault();for(var t=!0,n={firstName:Re.isUsername(b.firstName),lastName:Re.isUsername(b.lastName),email:Re.isEmail(b.email),primaryNumber:Re.isPhoneNumber(b.primaryNumber),workNumber:Re.isPhoneNumber(b.workNumber),notes:Re.isNotes(b.notes),github:Re.isLink(O.github),linkedin:Re.isLink(O.linkedin),skype:Re.isLink(O.skype)},c=0,a=Object.values(n);c<a.length;c++){if(!1===a[c]){t=!1;break}}if(!t)return Ke(n),void i(!1);var o={headers:{"Content-Type":"application/json"},method:"PUT"};fetch("".concat(G.link,"/contacts/").concat(j),Object(C.a)(Object(C.a)({},o),{},{body:JSON.stringify(b)})).then((function(){fetch("".concat(G.link,"/details/").concat(j),Object(C.a)(Object(C.a)({},o),{},{method:"PATCH",body:JSON.stringify({details:O})}))})).then((function(){i(!1),l.push("/",{edited:!0,contactFullName:"".concat(b.firstName," ").concat(b.lastName)})})).catch((function(e){return console.log(e.message)}))},children:[Object(Z.jsxs)(ee.a.Row,{children:[Object(Z.jsx)(ee.a.Group,{as:H.a,children:Object(Z.jsx)(ee.a.Control,{type:"text",name:"firstName",value:b.firstName,onInput:p,placeholder:"First name *",autoComplete:"off"})}),Object(Z.jsx)(ee.a.Group,{as:H.a,children:Object(Z.jsx)(ee.a.Control,{type:"text",name:"lastName",value:b.lastName,onInput:p,placeholder:"Last name *",autoComplete:"off"})})]}),Object(Z.jsx)(ee.a.Group,{children:Object(Z.jsx)(ee.a.Control,{type:"text",name:"email",value:b.email,onInput:p,placeholder:"@ Email *",autoComplete:"off"})}),Object(Z.jsx)(ee.a.Group,{children:Object(Z.jsx)(ee.a.Control,{type:"text",name:"primaryNumber",value:b.primaryNumber,onInput:p,placeholder:"Primary phone number *",autoComplete:"off"})}),Object(Z.jsx)(ee.a.Group,{children:Object(Z.jsx)(ee.a.Control,{type:"text",name:"workNumber",value:b.workNumber,onInput:p,placeholder:"Work phone number *",autoComplete:"off"})}),Object(Z.jsx)(ee.a.Group,{children:Object(Z.jsx)(ee.a.Control,{type:"text",name:"notes",value:b.notes,onInput:p,placeholder:"Notes *",autoComplete:"off"})}),Object(Z.jsx)(ee.a.Group,{children:Object(Z.jsx)(ee.a.Control,{type:"text",name:"github",value:O.github,onInput:p,placeholder:"GitHub link",autoComplete:"off"})}),Object(Z.jsx)(ee.a.Group,{children:Object(Z.jsx)(ee.a.Control,{type:"text",name:"linkedin",value:O.linkedin,onInput:p,placeholder:"Linkedin link",autoComplete:"off"})}),Object(Z.jsx)(ee.a.Group,{children:Object(Z.jsx)(ee.a.Control,{type:"text",name:"skype",value:O.skype,onInput:p,placeholder:"Skype link",autoComplete:"off"})}),Object(Z.jsx)(J.a,{variant:"secondary",onClick:function(){return l.push("/")},disabled:s,children:"Cancel"}),Object(Z.jsxs)(J.a,{variant:"primary",type:"submit",disabled:s,children:["Save ",Object(Z.jsx)("i",{className:"fas fa-save"})]})]})})]})})})},rt=n.p+"static/media/notFound.34f679e2.png",st=n(119),it=n.n(st),lt=function(){var e=Object(_.g)();return Object(Z.jsx)("main",{className:it.a.NotFound,children:Object(Z.jsx)(F.a,{children:Object(Z.jsx)(P.a,{className:"justify-content-center",children:Object(Z.jsxs)(H.a,{xs:10,sm:8,md:6,lg:4,className:"text-center",children:[Object(Z.jsx)("img",{src:rt,alt:"not-found"}),Object(Z.jsxs)(J.a,{variant:"secondary",onClick:function(){return e.push("/")},children:["Go to homepage ",Object(Z.jsx)("i",{className:"fas fa-home"})]}),Object(Z.jsxs)(J.a,{variant:"secondary",onClick:function(){return e.push("/add-contact")},children:["Add Contact ",Object(Z.jsx)("i",{className:"fas fa-plus"})]})]})})})})},jt=n(120),dt=n.n(jt),ut=function(){var e=(new Date).getFullYear();return Object(Z.jsx)("footer",{className:dt.a.Footer,children:Object(Z.jsx)(F.a,{children:Object(Z.jsx)(P.a,{children:Object(Z.jsx)(H.a,{children:Object(Z.jsxs)("p",{children:["Copyright \xa9 ",e," |",Object(Z.jsx)(W.a,{placement:"top",overlay:Object(Z.jsx)(q.a,{id:"tooltip-bottom",children:"Client Side"}),children:Object(Z.jsx)("a",{href:"https://github.com/Ararat1/contact-manager",target:"_blank",rel:"noreferrer",children:Object(Z.jsx)("i",{className:"fab fa-github"})})}),"_",Object(Z.jsx)(W.a,{placement:"top",overlay:Object(Z.jsx)(q.a,{id:"tooltip-bottom",children:"Server Side"}),children:Object(Z.jsx)("a",{href:"https://github.com/Ararat1/contact-manager-backend",target:"_blank",rel:"noreferrer",children:Object(Z.jsx)("i",{className:"fab fa-github"})})}),"| Contact Manager"]})})})})})},bt=n(174),mt=n(98),ht=n.n(mt),ft=function(e){var t=e.message;return Object(Z.jsx)(H.a,{xs:12,sm:6,md:5,className:ht.a.Alert,children:Object(Z.jsx)(bt.a,{variant:"dark",children:t})})},Ot=function(e){var t=e.messages;return Object(Z.jsx)(F.a,{className:ht.a.Alerts,children:Object(Z.jsx)(P.a,{className:"d-flex flex-column align-items-end justify-content-end m-0",children:t.map((function(e,t){return Object(Z.jsx)(ft,{message:e},t)}))})})},xt=n(165),pt=n(99),Nt=n.n(pt),yt=function(){var e=Object(c.useState)(!1),t=Object(K.a)(e,2),n=t[0],a=t[1],o=Object(_.g)(),r=Object(_.h)().id,s=Object(c.useState)(nt(o.location.state)),i=Object(K.a)(s,2),l=i[0],j=i[1],d=Object(c.useState)(null),u=Object(K.a)(d,2),b=u[0],m=u[1];Object(c.useEffect)((function(){a(!0),fetch("".concat(G.link,"/details/").concat(r),{method:"GET"}).then((function(e){return e.json()})).then((function(e){void 0===o.location.state&&fetch("".concat(G.link,"/contacts/").concat(r)).then((function(e){return e.json()})).then((function(e){return j(e)})).catch((function(e){return console.log(e)})),m(e),a(!1)})).catch((function(e){return console.log(e)}))}),[a,o.location.state,r]);return Object(Z.jsx)("main",{className:Nt.a.Details,children:n&&Object(Z.jsx)(F.a,{className:Nt.a.loader,children:Object(Z.jsx)(P.a,{children:Object(Z.jsx)(H.a,{children:Object(Z.jsx)(tt.a,{loading:n})})})})||Object(Z.jsxs)(F.a,{children:[Object(Z.jsx)(P.a,{className:"d-flex flex-column",children:Object(Z.jsx)(H.a,{children:Object(Z.jsx)(xt.a,{striped:!0,bordered:!0,responsive:!0,children:Object(Z.jsxs)("tbody",{children:[Object.entries(l).map((function(e,t){var n=Object(K.a)(e,2),c=n[0],a=n[1];if("_id"!==c)return Object(Z.jsxs)("tr",{children:[Object(Z.jsx)("td",{children:Object(Z.jsx)("b",{children:c})}),Object(Z.jsx)("td",{children:a})]},t)})),b&&Object.entries(b).map((function(e,t){var n=Object(K.a)(e,2),c=n[0],a=n[1];if(""!==a)return Object(Z.jsxs)("tr",{children:[Object(Z.jsx)("td",{children:Object(Z.jsx)("b",{children:c})}),Object(Z.jsx)("td",{children:Object(Z.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",children:a})})]},t)}))]})})})}),Object(Z.jsx)(P.a,{children:Object(Z.jsx)(H.a,{className:"text-center",children:Object(Z.jsx)(J.a,{variant:"dark",onClick:function(){return o.push("/")},children:Object(Z.jsx)("i",{className:"fas fa-arrow-left"})})})})]})})},kt=n(121),gt=n.n(kt),Ct=function(){var e=Object(s.c)((function(e){return e.alerts.alerts})),t=Object(s.b)();return Object(c.useEffect)((function(){setTimeout((function(){if(e.length){var n=Object(v.a)(e);n.shift(),t(w(n))}}),2e3)}),[e,t]),Object(Z.jsxs)("div",{className:gt.a.App,children:[Object(Z.jsx)(Y,{}),Object(Z.jsxs)(_.d,{children:[Object(Z.jsx)(_.b,{path:"/",exact:!0,render:function(e){return Object(Z.jsx)(S.a,{backend:E.a,children:Object(Z.jsx)(Se,Object(C.a)({},e))})}}),Object(Z.jsx)(_.b,{path:"/add-contact",render:function(e){return Object(Z.jsx)($e,Object(C.a)({},e))}}),Object(Z.jsx)(_.b,{path:"/edit-contact/:id",render:function(e){return Object(Z.jsx)(ot,Object(C.a)({},e))}}),Object(Z.jsx)(_.b,{path:"/details/:id",render:function(e){return Object(Z.jsx)(yt,Object(C.a)({},e))}}),Object(Z.jsx)(_.b,{path:"/not-found",render:function(e){return Object(Z.jsx)(lt,Object(C.a)({},e))}}),Object(Z.jsx)(_.a,{to:"/not-found"})]}),Object(Z.jsx)(ut,{}),Object(Z.jsx)(Ot,{messages:e})]})};n(147),n(148);o.a.render(Object(Z.jsx)(s.a,{store:g,children:Object(Z.jsx)(r.a,{basename:"",children:Object(Z.jsx)(Ct,{})})}),document.getElementById("root"))},30:function(e,t,n){e.exports={Contact:"ContactSkeleton_Contact__1HosH",placeholder:"ContactSkeleton_placeholder__CWS_Z",cardBody:"ContactSkeleton_cardBody__W1N2S",options:"ContactSkeleton_options__2GZaD",check:"ContactSkeleton_check__2gj_X"}},44:function(e,t,n){e.exports={Contact:"Contact_Contact__1Pi4i",cardBody:"Contact_cardBody__1sBUa",detailsBtn:"Contact_detailsBtn__1zAgj",options:"Contact_options__19l-6",check:"Contact_check__1aw1_"}},58:function(e,t,n){e.exports={EditContact:"EditContact_EditContact__1ufhJ",loader:"EditContact_loader__Y3nqk",title:"EditContact_title__1P62N",form:"EditContact_form__GtnwV"}},83:function(e,t,n){e.exports={Header:"Header_Header__A3JwQ",logo:"Header_logo__2KQFS",dropdownMenu:"Header_dropdownMenu__3uqOC"}},85:function(e,t,n){e.exports={Modal:"Modal_Modal__2ojh-",block:"Modal_block__2nHZE",closeBtn:"Modal_closeBtn__10sqJ"}},87:function(e,t,n){e.exports={AddContact:"AddContact_AddContact__1Wi6k",title:"AddContact_title__2kE79",form:"AddContact_form__1oG2q"}},98:function(e,t,n){e.exports={Alerts:"Alerts_Alerts__16RbX",Alert:"Alerts_Alert__2D19T"}},99:function(e,t,n){e.exports={Details:"Details_Details__1VUZP",loader:"Details_loader__M7J4h"}}},[[149,1,2]]]);
//# sourceMappingURL=main.f243cfe6.chunk.js.map