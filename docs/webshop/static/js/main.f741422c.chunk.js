(this.webpackJsonpwebshop=this.webpackJsonpwebshop||[]).push([[0],{129:function(e,t,a){e.exports=a(144)},134:function(e,t,a){},143:function(e){e.exports=JSON.parse('[{"id":624,"name":"Grill"},{"id":2296,"name":"Redskap till grillen"},{"id":2232,"name":"T\xe4ndare & T\xe4ndstickor"},{"id":5224,"name":"Tr\xe4dg\xe5rg/ Odla & plantera"}]')},144:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(11),i=a.n(l),o=(a(134),a(20)),c=a(16),m=a(17),s=a(18),d=a(19),u=a(48),g=a(50),p=a(99),f=a.n(p),E=a(47),h=a(59),y=a(198),k=a(218),b=a(184),v=a(222),x=a(186),j=a(188),C=a(189),S=a(190),O=a(196),P=a(219),w=a(191),L=a(64),D=a(29),T={currentUser:"",cartList:[],snackbarOpen:!1,snackbarText:"",categoryList:Array(),userData:null,sidebarDrawer:!1},I=Object(D.a)(T);function B(e){var t=I.cartList.findIndex((function(t){return t.productData.id===e.id}));if(t<0){var a={productData:e,quantity:1};I.cartList.push(a)}else I.cartList[t].quantity+=1;I.snackbarText="Till\xe4gd i kundvagn",I.snackbarOpen=!0,N()}function A(e){I.cartList=I.cartList.filter((function(t){return t.productData.id!==e})),N()}function G(e){var t=I.cartList.find((function(t){return t.productData.id===e}));t&&(t.quantity+=1),N()}function M(e){var t=I.cartList.find((function(t){return t.productData.id===e}));t&&(t.quantity-=1,0===t.quantity&&A(e)),N()}function N(){var e=JSON.stringify(T.cartList),t=I.currentUser;localStorage.setItem("sommarButiqueCartList_"+(t||""),e)}function R(){console.log("load from local storage");var e=I.currentUser,t=localStorage.getItem("sommarButiqueCartList_"+(e||""));I.cartList=null!=t?JSON.parse(t):[]}R();var F=Object(b.a)((function(e){return Object(v.a)({login:{fontSize:"2.5em",maxWidth:"600px",margin:"auto",backgroundColor:"#fefefe",paddingBottom:"1em",paddingTop:"1em"},root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"100%"}},button:{width:"100%",marginTop:"1em",fontSize:"0.4em"}})}));function q(e){var t=F(),a=function(e){var t;null===(t=e.currentTarget.form)||void 0===t||t.reportValidity()},r=n.a.useState({checked:!1,username:"",password:"",firstname:"",secondname:"",address:"",loginError:!1,registrationMode:!1,snackbarOpen:!1,snackbarText:""}),l=Object(h.a)(r,2),i=l[0],c=l[1],m=function(e){c(Object(o.a)({},i,Object(E.a)({},e.target.name,e.target.value)))};return n.a.createElement(n.a.Fragment,null,n.a.createElement(x.a,{onClose:function(e,t){},"aria-labelledby":"form-dialog-title",open:e.open},n.a.createElement(j.a,{id:"form-dialog-title"},i.registrationMode?"REGISTRERA DIG":"LOGGA IN"),n.a.createElement(C.a,null,n.a.createElement("div",{className:t.login},n.a.createElement(S.a,{maxWidth:"sm"},n.a.createElement("form",{className:t.root,autoComplete:"on",noValidate:!0},n.a.createElement(w.a,{container:!0,justify:"center",alignItems:"center",direction:"column"},i.registrationMode?n.a.createElement(n.a.Fragment,null,n.a.createElement(k.a,{required:!0,variant:"outlined",label:"NAMN",type:"text",name:"firstname",onChange:m}),n.a.createElement(k.a,{required:!0,variant:"outlined",label:"EFTERNAMN",type:"text",name:"secondname",onChange:m}),n.a.createElement(k.a,{required:!0,variant:"outlined",label:"MOBILNUMMER",type:"text",name:"Mobilnummer",onChange:m}),n.a.createElement(k.a,{required:!0,variant:"outlined",label:"ADRESS",type:"text",name:"address",onChange:m})):"",n.a.createElement(k.a,{required:!0,variant:"outlined",label:"E-POSTADRESS",type:"email",name:"username",onBlur:a,onChange:m,error:i.loginError,helperText:i.loginError?"Ok\xe4nd anv\xe4ndaren eller l\xf6senord":""}),n.a.createElement(k.a,{required:!0,variant:"outlined",label:"PASSWORD",type:"password",name:"password",autoComplete:"current-password",onBlur:a,onChange:m}),n.a.createElement(O.a,{label:"Kom ih\xe5g mig",control:n.a.createElement(P.a,{checked:i.checked,onChange:function(e){c(Object(o.a)({},i,Object(E.a)({},e.target.name,e.target.checked)))},name:"checked",color:"primary"})}),i.registrationMode?n.a.createElement(n.a.Fragment,null,n.a.createElement(y.a,{variant:"contained",color:"primary",size:"large",className:t.button,onClick:function(){if(i.checked){var t=new Date;t.setMonth(t.getMonth()+1),Object(L.c)("currentUser",i.username,{expires:t.toGMTString()})}var a={firstname:i.firstname,secondname:i.secondname,username:i.username,address:i.address,password:i.password};localStorage.setItem("userdata_"+i.username,JSON.stringify(a)),I.currentUser=i.username,e.onClose(),c(Object(o.a)({},i,{registrationMode:!1})),I.snackbarText="Allt gick bra, tack!",I.snackbarOpen=!0}},"SPARA")):n.a.createElement(n.a.Fragment,null,n.a.createElement(y.a,{variant:"contained",color:"primary",size:"large",className:t.button,onClick:function(){var t=localStorage.getItem("userdata_"+i.username);if(null!=t){console.log("user found");var a=JSON.parse(t);if(a.password===i.password){if(I.currentUser=i.username,I.userData=a,i.checked){var r=new Date;r.setMonth(r.getMonth()+1),Object(L.c)("currentUser",i.username,{expires:r.toGMTString()})}return void e.onClose()}}c(Object(o.a)({},i,{loginError:!0}))}},"Logga In"),n.a.createElement(y.a,{variant:"contained",color:"secondary",size:"large",className:t.button,onClick:function(){c(Object(o.a)({},i,{registrationMode:!0}))}},"Bli medlem")),n.a.createElement(y.a,{variant:"outlined",color:"default",size:"large",className:t.button,onClick:function(){e.onClose(),c(Object(o.a)({},i,{registrationMode:!1}))}},"Close"))))))))}var z=a(220),U=a(197),W=a(199),K=a(51),J=a(102),H=a.n(J),V=a(101),_=a.n(V),Q=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={showLogin:!1},e.openLogin=function(){e.setState({showLogin:!0})},e.closeLogin=function(){e.setState({showLogin:!1}),R()},e.logout=function(){I.currentUser="",Object(L.b)("currentUser"),R()},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(L.a)("currentUser");if(null!=e){I.currentUser=e;var t=localStorage.getItem("userdata_"+e);if(console.log("foundJSON",t),null!=t){var a=JSON.parse(t);console.log(a),I.userData=a}}}},{key:"render",value:function(){var e=this;return r.createElement("div",{style:Z},r.createElement(z.a,{mdUp:!0},r.createElement(U.a,{color:"inherit","aria-label":"open drawer",onClick:function(){I.sidebarDrawer=!0},edge:"start"},r.createElement(f.a,null))),r.createElement(z.a,{smDown:!0},r.createElement("div",{style:$},""===I.currentUser?"":("V\xe4lkommen "+I.currentUser).toUpperCase())),r.createElement("div",{style:X},r.createElement(W.a,{color:"secondary",badgeContent:I.cartList.length>0?I.cartList.map((function(e){return e.quantity})).reduce((function(e,t){return e+t})):0,showZero:!0},r.createElement(u.a,{icon:g.c,onClick:function(){return e.props.handleCart()}}))),r.createElement(K.a,{render:function(e){var t=e.history;return r.createElement(y.a,{variant:"contained",color:"secondary",size:"medium",onClick:function(){t.push("/checkout")}},"TILL KASSAN")}}),""===I.currentUser?r.createElement("div",{style:Y,onClick:this.openLogin},r.createElement(z.a,{xsDown:!0},"LOGGA IN / SKAPA KONTO"),r.createElement(z.a,{smUp:!0},r.createElement(_.a,null))):r.createElement("div",{style:Y,onClick:this.logout},r.createElement(z.a,{xsDown:!0},"LOGGA UT"),r.createElement(z.a,{smUp:!0},r.createElement(H.a,null))),r.createElement(q,{open:this.state.showLogin,onClose:this.closeLogin}))}}]),a}(r.Component),Z={height:"4rem",backgroundColor:"#c0c0c0",display:"flex",alignItems:"center",justifyContent:"center",paddingLeft:"1rem",paddingRight:"1rem"},X={fontSize:"1.7rem",width:"1.7em",height:"1.7em",backgroundColor:"#e0e0e0",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"2rem",marginRight:"2rem",cursor:"pointer"},Y={cursor:"pointer",marginLeft:"2rem"},$={paddingLeft:"3em",cursor:"pointer"},ee=Object(D.b)(Q),te=a(24),ae=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.createElement("div",{style:Object(o.a)({},re,{backgroundColor:this.props.color})},this.props.data.name)}}]),a}(r.Component),re={width:"300px",height:"300px",backgroundColor:"#e0e0e0",margin:"1rem 1rem",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"2.0rem",fontWeight:"bold",padding:"2rem 2rem",textAlign:"center",color:"#222222"},ne=["#ffffc5","#f0dd92","#d6e4aa","#83b582"],le=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).getColor=function(e){return ne[e%8]},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.createElement("div",{style:ie},I.categoryList.map((function(t,a){return r.createElement(te.b,{style:{textDecoration:"none"},to:"/category/"+t.id.toString(),key:a},r.createElement(ae,{key:a,data:t,color:e.getColor(a)}))})))}}]),a}(r.Component),ie={display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"center",margin:"2rem 0",fontWeight:"bold"};function oe(e){return n.a.createElement("div",{style:ce,onClick:function(){I.sidebarDrawer=!1}},n.a.createElement("h2",null,"Kategori"),n.a.createElement("ul",{style:me},I.categoryList.map((function(e,t){return n.a.createElement(te.b,{key:t,style:{textDecoration:"none",cursor:"pointer"},to:"/category/"+e.id.toString()},n.a.createElement("li",{id:"category"+t,key:t,style:se},e.name))}))))}var ce={fontSize:"1.5rem",backgroundColor:"#d7e3ed",width:"350px",minWidth:"250px",border:"2px solid white",borderRadius:"12px",textAlign:"left",display:"flex",flexDirection:"column",fontFamily:"Calibri, serif",fontWeight:"bold",padding:"1em 1.5em"},me={display:"flex",flexDirection:"column",marginTop:"20px"},se={padding:"0.5em 0",fontSize:"1rem",listStyle:"none",userSelect:"none"},de=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).onCartIconClick=function(){B(e.props.productData)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.productData.name;return e.length>45&&(e=e.substr(0,45)+"..."),r.createElement("div",{style:ue},r.createElement(te.b,{style:ge,to:"/product/"+this.props.productData.id},r.createElement("img",{style:pe,src:this.props.productData.image,alt:this.props.productData.name})),r.createElement("div",{style:fe},r.createElement("div",{style:he},e),r.createElement("div",{style:Ee},r.createElement(U.a,{style:ye,onClick:this.onCartIconClick},r.createElement(u.a,{icon:g.b})),r.createElement("div",{style:ke},this.props.productData.salePrice.toFixed(2)))))}}]),a}(r.Component),ue={width:"220px",height:"340px",backgroundColor:"white",margin:"1rem 0.5rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},ge={maxWidth:"220px",maxHeight:"70%",flexGrow:1},pe={maxWidth:"100%",padding:"1rem 1rem",objectFit:"contain"},fe={width:"100%",height:"120px",padding:"1rem 1rem",backgroundColor:"#f5f5f5",display:"flex",flexDirection:"column",paddingBottom:"0.5rem"},Ee={height:"2rem",color:"#a0a0a0",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"2rem",marginBottom:"0.17em"},he={flexGrow:1},ye={color:"#444",cursor:"pointer",fontSize:"1em",marginLeft:"-0.45em"},ke={color:"red"},be=Object(D.b)(de);function ve(){var e=Object(K.f)().id,t=I.categoryList.find((function(t){return t.id.toString()===e})),r=a(94).filter((function(t){return t.category.toString()===e})),l=[n.a.createElement("div",{key:1,style:Se},n.a.createElement("h1",null,"Sorry, no available products in this category"))];return r.length>0&&(l=r.map((function(e){return n.a.createElement(be,{key:e.id,productData:e})}))),n.a.createElement("div",{style:xe},n.a.createElement("h1",{style:je},null===t||void 0===t?void 0:t.name),n.a.createElement("div",{style:Ce},l))}var xe={flexGrow:1},je={paddingLeft:"1em"},Ce={flexGrow:1,display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"center",margin:"2rem 0",backgroundColor:"#f0f0f0",border:"2px solid white",borderRadius:"12px"},Se={height:"500px",width:"100%",backgroundColor:"#ffc9c2",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"12px"},Oe=a(66),Pe=a(200),we=a(201),Le=a(202);function De(){var e=Object(K.f)().id,t=a(94).find((function(t){return t.id.toString()===e}));return n.a.createElement(S.a,{maxWidth:"md"},n.a.createElement(Pe.a,null,n.a.createElement(we.a,null,n.a.createElement(Oe.a,{variant:"h3",gutterBottom:!0},t.name),n.a.createElement("div",{style:{textAlign:"center",padding:"3rem"}},n.a.createElement("img",{style:{width:"100%",maxWidth:"700px"},src:t.image,alt:t.name})),n.a.createElement(Oe.a,{variant:"h5",gutterBottom:!0},n.a.createElement("strong",null,"Produkt detaljer: "),n.a.createElement("div",null,t.description)),n.a.createElement(Oe.a,{variant:"h5",gutterBottom:!0},n.a.createElement("strong",null,"Pris: ",n.a.createElement("span",{style:{color:"red"}},t.salePrice.toFixed(2)+" kr"))),n.a.createElement(Oe.a,{variant:"h5",gutterBottom:!0},n.a.createElement("strong",null,"Packning: "),t.measure),n.a.createElement(Le.a,null,n.a.createElement(y.a,{variant:"contained",color:"secondary",size:"large",onClick:function(){B(t)}},n.a.createElement(Oe.a,{variant:"h5"},"L\xe4gg i Kundvagnen"))))))}var Te=a(195),Ie=a(209),Be=a(210),Ae=a(224),Ge=a(211),Me=a(212),Ne=a(214),Re=a(103),Fe=a(106),qe=a.n(Fe),ze=a(105),Ue=a.n(ze),We=a(104),Ke=a.n(We),Je=a(204),He=a(208),Ve=a(207),_e=a(203),Qe=a(205),Ze=a(206),Xe=a(111),Ye=a(217);function $e(e){return Math.floor(100*e+.5)/100}var et=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={page:0,rowsPerPage:4},e.deleteCartItem=function(e){return function(t){A(e)}},e.reduceCartItem=function(e){return function(t){M(e)}},e.increaseCartItem=function(e){return function(t){G(e)}},e}return Object(m.a)(a,[{key:"render",value:function(){var e,t,a=this,n=0,l=Object(Re.a)(I.cartList);try{for(l.s();!(t=l.n()).done;)n+=$e((e=t.value).productData.salePrice)*e.quantity}catch(c){l.e(c)}finally{l.f()}var i=$e(n/1.25*.25),o=I.cartList;return this.props.pagination&&(o=o.slice(this.state.page*this.state.rowsPerPage,this.state.page*this.state.rowsPerPage+this.state.rowsPerPage)),r.createElement("div",{style:tt},r.createElement(Xe.a,null,r.createElement(_e.a,{style:rt},r.createElement(Je.a,{stickyHeader:!0,"aria-label":"spanning table"},r.createElement(Qe.a,null,r.createElement(Ze.a,null,r.createElement(Ve.a,null,"Produkt namn"),r.createElement(Ve.a,{align:"right"},"Antal"),r.createElement(Ve.a,{align:"right"},"Pris"),r.createElement(Ve.a,{align:"right"},"Summa"),r.createElement(Ve.a,{align:"center"},"Ta bort"))),r.createElement(He.a,null,o.map((function(e,t){return r.createElement(Ze.a,{key:e.productData.id},r.createElement(Ve.a,null,e.productData.name),r.createElement(Ve.a,{align:"right"},r.createElement(Ke.a,{style:at,onClick:a.reduceCartItem(e.productData.id)}),r.createElement("span",{style:{}},e.quantity),r.createElement(Ue.a,{style:at,onClick:a.increaseCartItem(e.productData.id)})),r.createElement(Ve.a,{align:"right"},e.productData.salePrice," "),r.createElement(Ve.a,{align:"right"},$e(e.quantity*e.productData.salePrice).toFixed(2)),r.createElement(Ve.a,{align:"center"},r.createElement(qe.a,{style:at,onClick:a.deleteCartItem(e.productData.id)})))})),this.props.pagination?"":r.createElement(r.Fragment,null,r.createElement(Ze.a,null,r.createElement(Ve.a,{rowSpan:3}),r.createElement(Ve.a,{colSpan:2,style:{fontWeight:"bold"}},"Att betala:"),r.createElement(Ve.a,{align:"right",style:{fontWeight:"bold"}},n.toFixed(2)+" kr")),r.createElement(Ze.a,null,r.createElement(Ve.a,null,"Inkl. moms"),r.createElement(Ve.a,{align:"right"},"25 %"),r.createElement(Ve.a,{align:"right"},i.toFixed(2))))))),this.props.pagination?r.createElement(Ye.a,{rowsPerPageOptions:[4],component:"div",count:I.cartList.length,rowsPerPage:this.state.rowsPerPage,page:this.state.page,onChangePage:function(e,t){a.setState({page:t})}}):""))}}]),a}(r.Component),tt={backgroundColor:"#dddddd"},at={cursor:"pointer"},rt={fontSize:"3rem"},nt=Object(D.b)(et),lt=Object(b.a)((function(e){return Object(v.a)({root:{marginTop:"1rem",marginBottom:"2rem"}})}));var it={padding:"1rem 1rem",marginBottom:"1rem"},ot={display:"flex",flexDirection:"column",alignItems:"center"},ct=Object(D.b)((function(){var e,t=lt(),a=n.a.useState({checked:["0"],checkedB:[""],username:"",password:"",firstname:"",secondname:"",address:"",loginError:!1,deliveryType:"",personnummer:""}),r=Object(h.a)(a,2),l=r[0],i=r[1],c=(null===(e=I.userData)||void 0===e||e.firstname,0);I.cartList.forEach((function(e){c+=e.productData.salePrice*e.quantity})),c+=[0,59,79,129][Number(l.checked[0])];var m=function(e){i(Object(o.a)({},l,Object(E.a)({},e.target.name,e.target.value)))},s=function(e){return function(){var t=[e];i(Object(o.a)({},l,{checked:t}))}},d=function(e){return function(){var t=[""];t.push(e),i(Object(o.a)({},l,{checkedB:t}))}};return n.a.createElement(S.a,{maxWidth:"lg"},n.a.createElement(Oe.a,{variant:"h3",gutterBottom:!0},"KASSAN"),n.a.createElement(nt,{pagination:!1}),n.a.createElement(Pe.a,{className:t.root},n.a.createElement(we.a,null,n.a.createElement(Oe.a,{variant:"h5",gutterBottom:!0},"Dina uppgifter".toUpperCase()),n.a.createElement(k.a,{required:!0,variant:"outlined",label:"NAMN",type:"text",name:"firstname",value:l.firstname,onChange:m}),n.a.createElement(k.a,{required:!0,variant:"outlined",label:"EFTERNAMN",type:"text",name:"secondname",onChange:m}),n.a.createElement(k.a,{required:!0,variant:"outlined",label:"MOBILNUMMER",type:"text",name:"mobilnummer",onChange:m}),n.a.createElement(k.a,{required:!0,variant:"outlined",label:"ADRESS",type:"text",name:"address",onChange:m}),n.a.createElement(k.a,{required:!0,variant:"outlined",label:"E-POSTADRESS",type:"email",name:"username",onBlur:function(e){var t;null===(t=e.currentTarget.form)||void 0===t||t.reportValidity()},onChange:m,error:l.loginError,helperText:l.loginError?"Ok\xe4nd anv\xe4ndaren eller l\xf6senord":""}))),n.a.createElement(Pe.a,{className:t.root},n.a.createElement(we.a,null,n.a.createElement(Oe.a,{variant:"h5",gutterBottom:!0},"V\xc4LJ LEVERANSS\xc4TT"),n.a.createElement(Te.a,null,n.a.createElement(Ie.a,{key:"1",button:!0},n.a.createElement(Be.a,null,n.a.createElement(Ae.a,{src:"/img/fedex.png"})),n.a.createElement(w.a,{container:!0},n.a.createElement(Ge.a,{id:"11",primary:"FedEx"}),n.a.createElement(Ge.a,{id:"12",primary:"Leveranstid 2-3 dagar"}),n.a.createElement(Ge.a,{id:"13",primary:"59 kr"})),n.a.createElement(Me.a,null,n.a.createElement(P.a,{edge:"end",onChange:s("1"),checked:-1!==l.checked.indexOf("1"),inputProps:{"aria-labelledby":"1"}}))),n.a.createElement(Ie.a,{key:"2",button:!0},n.a.createElement(Be.a,null,n.a.createElement(Ae.a,{src:"/img/dhl.png"})),n.a.createElement(w.a,{container:!0},n.a.createElement(Ge.a,{id:"21",primary:"DHL"}),n.a.createElement(Ge.a,{id:"22",primary:"Leveranstid 48 timmar"}),n.a.createElement(Ge.a,{id:"23",primary:"79 kr"})),n.a.createElement(Me.a,null,n.a.createElement(P.a,{edge:"end",onChange:s("2"),checked:-1!==l.checked.indexOf("2"),inputProps:{"aria-labelledby":"2"}}))),n.a.createElement(Ie.a,{key:"3",button:!0},n.a.createElement(Be.a,null,n.a.createElement(Ae.a,{src:"/img/ups.png"})),n.a.createElement(w.a,{container:!0},n.a.createElement(Ge.a,{id:"31",primary:"UPS"}),n.a.createElement(Ge.a,{id:"32",primary:"Leveranstid 24 timmar"}),n.a.createElement(Ge.a,{id:"33",primary:"129 kr"})),n.a.createElement(Me.a,null,n.a.createElement(P.a,{edge:"end",onChange:s("3"),checked:-1!==l.checked.indexOf("3"),inputProps:{"aria-labelledby":"3"}})))))),n.a.createElement(Pe.a,{className:t.root},n.a.createElement(we.a,null,n.a.createElement(Oe.a,{variant:"h5",gutterBottom:!0},"V\xc4LJ BETALNINGSS\xc4TT"),n.a.createElement(Te.a,null,n.a.createElement(Ie.a,{key:"1",button:!0},n.a.createElement(Be.a,null,n.a.createElement(Ae.a,{src:"/img/visa.png"})),n.a.createElement(w.a,{container:!0},n.a.createElement(Ge.a,{id:"11",primary:"Kredit/Betalkort"}),n.a.createElement(Ge.a,{id:"12",primary:"Krypterade transaktioner f\xf6r din s\xe4kerhet"}),n.a.createElement(Ge.a,{id:"13",primary:""})),n.a.createElement(Me.a,null,n.a.createElement(P.a,{edge:"end",onChange:d("1"),checked:-1!==l.checkedB.indexOf("1"),inputProps:{"aria-labelledby":"1"}}))),l.checkedB.includes("1")?n.a.createElement(Ne.a,{style:it},n.a.createElement(k.a,{required:!0,variant:"outlined",label:"Kortnummer",type:"text",name:"cardNumber",onChange:m}),n.a.createElement(k.a,{required:!0,variant:"outlined",label:"Kortinnehavare",type:"text",name:"cardHolder",onChange:m})):"",n.a.createElement(Ie.a,{key:"2",button:!0},n.a.createElement(Be.a,null,n.a.createElement(Ae.a,{src:"/img/swish.png"})),n.a.createElement(w.a,{container:!0},n.a.createElement(Ge.a,{id:"21",primary:"SWISH"}),n.a.createElement(Ge.a,{id:"22",primary:"Betala direkt"}),n.a.createElement(Ge.a,{id:"23",primary:""})),n.a.createElement(Me.a,null,n.a.createElement(P.a,{edge:"end",onChange:d("2"),checked:-1!==l.checkedB.indexOf("2"),inputProps:{"aria-labelledby":"2"}}))),l.checkedB.includes("2")?n.a.createElement(Ne.a,{style:it},n.a.createElement(k.a,{required:!0,variant:"outlined",label:"Mobilnummer",type:"text",name:"mobilnummer",onChange:m})):"",n.a.createElement(Ie.a,{key:"3",button:!0},n.a.createElement(Be.a,null,n.a.createElement(Ae.a,{src:"/img/klarna.png"})),n.a.createElement(w.a,{container:!0},n.a.createElement(Ge.a,{id:"31",primary:"KLARNA"}),n.a.createElement(Ge.a,{id:"32",primary:"K\xf6p nu betala senare"}),n.a.createElement(Ge.a,{id:"33",primary:""})),n.a.createElement(Me.a,null,n.a.createElement(P.a,{edge:"end",onChange:d("3"),checked:-1!==l.checkedB.indexOf("3"),inputProps:{"aria-labelledby":"3"}}))),l.checkedB.includes("3")?n.a.createElement(Ne.a,{style:it},n.a.createElement(k.a,{required:!0,variant:"outlined",label:"Personnummer",type:"text",name:"personnummer",onChange:m})):""))),n.a.createElement(Ne.a,{style:ot},n.a.createElement(Oe.a,{variant:"h4"},"Att betala: ",c.toFixed(2)," kr"),n.a.createElement(Oe.a,{variant:"h6"},"Inkl. moms och frakt"),n.a.createElement(y.a,{style:{marginTop:"1rem",marginBottom:"2rem"},variant:"contained",color:"secondary",size:"large",onClick:function(){}},n.a.createElement(Oe.a,{variant:"h5"},"Slutf\xf6r k\xf6p"))))}));var mt={flexGrow:1,display:"flex",flexDirection:"column"},st={textAlign:"center",borderRadius:"12px"},dt={fontSize:"1.5rem",borderRadius:"0.15em",border:"1px solid #cccccc",padding:"0.2em 0.8em",maxWidth:"90%",marginLeft:"1rem",marginRight:"1rem"},ut={marginTop:"0.5em",marginBottom:"0.2em",textShadow:"10px 10px 3px #e0e0e0",color:"#444444"},gt={fontSize:"1.5rem",marginTop:"0.5em",marginBottom:"0.5em"},pt={display:"flex"},ft={margin:"auto",marginBottom:"1em",marginTop:"1em",fontSize:"1.5rem",borderRadius:"1em",display:"flex",alignItems:"center",textDecoration:"none",cursor:"pointer"},Et={marginRight:"0.3em",marginLeft:"0.08em"},ht=Object(K.g)((function(e){var t=function(){e.history.goBack()};return n.a.createElement("div",{style:mt},n.a.createElement("div",{style:st},n.a.createElement(Oe.a,{variant:"h2",style:ut},"SOMMAR BUTIQUE"),n.a.createElement("div",{style:gt},"Tr\xe4dg\xe5rd & grill"),n.a.createElement("div",null,n.a.createElement("input",{style:dt,type:"text",placeholder:"S\xf6k"}))),n.a.createElement(K.c,null,n.a.createElement(K.a,{path:"/category/:id"},n.a.createElement(te.b,{style:ft,to:"/"},n.a.createElement(u.a,{icon:g.a,style:Et}),n.a.createElement("a",null,"G\xe5 hem")),n.a.createElement("div",{style:pt},n.a.createElement(z.a,{smDown:!0},n.a.createElement(oe,null)),n.a.createElement(ve,null))),n.a.createElement(K.a,{path:"/product/:id"},n.a.createElement("div",{style:ft,onClick:t},n.a.createElement(u.a,{icon:g.a,style:Et}),n.a.createElement("a",null,"G\xe5 tillbaka")),n.a.createElement(De,null)),n.a.createElement(K.a,{path:"/checkout"},n.a.createElement("div",{style:ft,onClick:t},n.a.createElement(u.a,{icon:g.a,style:Et}),n.a.createElement("a",null,"G\xe5 tillbaka")),n.a.createElement(ct,null)),n.a.createElement(K.a,{path:"/"},n.a.createElement(le,null))))})),yt=a(65),kt=a.n(yt),bt=a(107),vt=a.n(bt),xt=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.createElement("div",{style:jt},r.createElement(kt.a,{style:Ct}),r.createElement(kt.a,{style:St}),r.createElement(kt.a,{style:Ot}),r.createElement("h2",{style:Pt},"F\xf6r dig som \xe4r sommarsugen"),r.createElement(kt.a,{style:St}),r.createElement(kt.a,{style:Ct}),r.createElement(vt.a,{style:Ot}))}}]),a}(r.Component),jt={height:"8rem",backgroundColor:"#d0d0d0",display:"flex",alignItems:"center",justifyContent:"center",paddingLeft:"1rem",paddingRight:"1rem"},Ct={color:"green",fontSize:"large"},St={color:"red",fontSize:"large"},Ot={color:"yellow",fontSize:"large"},Pt={display:"inline-block",textAlign:"center",paddingLeft:"1rem",paddingRight:"1rem"},wt=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={hideCart:!0,cartItems:new Array},e.displayCart=function(){e.setState({hideCart:!e.state.hideCart}),console.log(e.state.hideCart)},e.addToTheCart=function(t){var a=e.state.cartItems,r=!1;a.forEach((function(e){e.id===t.name&&(e.value++,r=!0)})),r||(e.state.cartItems.push({id:t.name,value:1}),alert("Product successfully added to your cart!")),e.setState({cartItems:a})},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.createElement("div",{style:Lt},r.createElement(ee,{handleCart:this.displayCart}),this.state.hideCart?null:r.createElement("div",{style:Dt},r.createElement(Oe.a,{variant:"h4",component:"h3"},"Kundvagn"),r.createElement(nt,{pagination:!0}),r.createElement(K.a,{render:function(t){var a=t.history;return r.createElement(y.a,{variant:"contained",color:"secondary",size:"large",onClick:function(){e.setState({hideCart:!0}),a.push("/checkout")}},"TILL KASSAN")}}),r.createElement(y.a,{variant:"contained",color:"default",size:"large",onClick:function(){e.setState({hideCart:!0})}},"ST\xc4NG")),r.createElement(ht,null),r.createElement(xt,null))}}]),a}(r.Component),Lt={display:"flex",flexDirection:"column",minHeight:"100vh"},Dt={width:"100%",maxWidth:"900px",maxHeight:"600px",padding:"1rem",position:"absolute",top:"4rem",right:"3rem",backgroundColor:"#e3e3e3",borderRadius:"0.5em",margin:"1rem",boxShadow:"5px 8px 8px 8px rgba(100, 100, 100, 0.15)",zIndex:100},Tt=a(12),It=a(225),Bt=a(213),At=a(221),Gt=a(216);function Mt(e){return n.a.createElement(Gt.a,Object.assign({elevation:6,variant:"filled"},e))}var Nt=a(108),Rt=a.n(Nt),Ft=a(109),qt=a.n(Ft),zt=Object(b.a)((function(e){return Object(v.a)({root:{},drawerHeader:Object(o.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"})})}));var Ut=Object(D.b)((function(){var e=a(143);I.categoryList=e;var t=zt(),r=Object(Tt.a)();return n.a.createElement("div",null,n.a.createElement(te.a,null,n.a.createElement(It.a,{anchor:"left",open:I.sidebarDrawer},n.a.createElement("div",{className:t.drawerHeader},n.a.createElement(U.a,{onClick:function(){I.sidebarDrawer=!1}},"ltr"===r.direction?n.a.createElement(Rt.a,null):n.a.createElement(qt.a,null))),n.a.createElement(Bt.a,null),n.a.createElement(oe,null)),n.a.createElement(At.a,{open:I.snackbarOpen,autoHideDuration:3e3,anchorOrigin:{horizontal:"center",vertical:"top"},onClose:function(){I.snackbarOpen=!1}},n.a.createElement(Mt,{onClose:function(){I.snackbarOpen=!1},severity:"success"},I.snackbarText)),n.a.createElement(wt,null)))}));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Ut,null)),document.getElementById("root"))},94:function(e){e.exports=JSON.parse('[{"category":624,"id":"7071189226294","image":"/img/7071189226294.jpg","name":"Kolgrill Sevilla 41cm","salePrice":249.9,"description":"Perfekt klotgrill f\xf6r dig som har begr\xe4nsad yta. F\xe4rg: Svart\\nStorlek: 41x41x72cm\\nGrillyta: 39 cm\\nVikt: 4,5kg\\nTyp av grillgaller: f\xf6rkromat","measure":"st"},{"category":624,"id":"7072806000075","image":"/img/7072806000075.png","name":"Gasogrill Perfomance 3.1","salePrice":2999.9,"description":"Kvalitetsgasolgrill f\xf6r bra resultat 3+1 br\xe4nnare Stor termometer V\xe4rmehylla Lock i dubbelt st\xe5l v\xe4r extra v\xe4rmeisolering","measure":"st"},{"category":624,"id":"4000810129669","image":"/img/4000810129669.jpg","name":"Gasolgrill Triton PTS 4.1 Landmann","salePrice":3999.9,"description":"Genomt\xe4nkt gasolgrill av god kvalit\xe9. Grillarna i serien Triton ger mycket utrustning f\xf6r pengarna i samma prisklass.\\nGrillen har galler av kraftigt gjutj\xe4rn som ger j\xe4mn v\xe4rme med hj\xe4lp av Landmanns nya v\xe4rmesystem PTS f\xf6r optimerad och j\xe4mn grillv\xe4rme. Grillen \xe4r utrustad med sidobr\xe4nnare f\xf6r tillagning av r\xe4tter i stekpanna och kastrull.","measure":"st"},{"category":624,"id":"7072806000136","image":"/img/7072806000136.png","name":"Gasolgrill Spirit ll E-310","salePrice":5499.9,"description":"Gasolgrill Spirit II E-310 Weber med sk\xe5p och gjutj\xe4rnsgaller.En f\xf6rnuftig modell med gjutj\xe4rnsgaller och en utm\xe4rkt f\xf6rsta grill f\xf6r nyb\xf6rjare eftersom den kan grilla med b\xe5de direkt och indirekt v\xe4rme.","measure":"st"},{"category":624,"id":"7310380767152","image":"/img/7310380767152.jpg","name":"Grill B\xe4rbar Lettuce green 37cm","salePrice":249.9,"description":"Denna b\xe4rbara grill \xe4r l\xe4tt och smidig att ta med p\xe5 utflykten, i b\xe5ten eller p\xe5 picnic.\\nMed grillgaller i f\xf6rkromat st\xe5l.\\n","measure":"st"},{"category":2296,"id":"4000810105687","image":"/img/4000810105687.jpg","name":"Regulatorset SE 29mBar","salePrice":199.9,"description":"Godk\xe4nd och s\xe4ker koppling med f\xf6rmonterad slang och nippel. 30mbar f\xf6r Sverige och Island.\\nTill flaskor PC5/PC10/P6/P11.\\n\\nModellbeteckning: 1056G","measure":"st"},{"category":2296,"id":"4000810155460","image":"/img/4000810155460.png","name":"Marinad- & s\xe5skanna Landmann","salePrice":199.9,"description":"Praktisk marinad-och s\xe5skanna tillverkad av rostfritt st\xe5l med en marinadborste av silikon. Med lock f\xf6r att undvika att insekter och liknande kommer ner i s\xe5sen eller marinaden.","measure":"st"},{"category":2296,"id":"7310380472162","image":"/img/7310380472162.jpg","name":"Grillspett Bambu 100-p","salePrice":12.9,"description":"Enkla prisv\xe4rda bambuspett.\\n\\nStorlek: 28cm\\nMaterial: Bambuspett\\nF\xf6rpackningstorlek: 100 -pack","measure":"st"},{"category":2296,"id":"4000810132140","image":"/img/4000810132140.jpg","name":"Grillt\xe5ng Quality Landmann","salePrice":89.9,"description":"Det b\xe4sta allround-redskapet vid grillning som t.ex. hj\xe4lper dig att v\xe4nda p\xe5 det som grillas eller f\xf6r att lyfta av det fr\xe5n grillen. Greppv\xe4nligt och bekv\xe4mt, gummerat handtag.\\n\\nModellbeteckning: 13212\\nF\xe4rg: Silver/ svart","measure":"st"},{"category":2296,"id":"4000810132126","image":"/img/4000810132126.jpg","name":"Grillgallerborste Quality Landmann","salePrice":99.9,"description":"Grillgallerborste f\xf6r att reng\xf6ra gallret p\xe5 grillen d\xe5 god hygien \xe4r lika viktig vid vid grillen som i k\xf6ket. Greppv\xe4nligt och bekv\xe4mt, gummerat handtag.\\n\\nModellbeteckning: 13214\\nF\xe4rg: Silver/ svart\\nStorlek: L44 B6 H 5cm","measure":"st"},{"category":2296,"id":"7310380472179","image":"/img/7310380472179.jpg","name":"Grillgallerborste","salePrice":21.9,"description":" Enkel och prisv\xe4rd grillgallerborste, med 3 olika reng\xf6rnings m\xf6jligheter.","measure":"st"},{"category":2296,"id":"4000810158072","image":"/img/4000810158072.jpg","name":"Grillhandskar Silikon Lyx Landmann","salePrice":199.9,"description":"Mycket bekv\xe4ma grillhandskar tillverkade i bomull+ polyester samt silikon f\xf6r optimalt grepp och skydd.","measure":"st"},{"category":2232,"id":"7310680022517","image":"/img/7310680022517.jpg","name":"T\xe4ndstickor 8-p Solstickan","salePrice":17.5,"description":"Klassiska 8-pack Solstickan t\xe4ndstickor, alltid bra att ha hemma.","measure":"st"},{"category":2232,"id":"7350013550034","image":"/img/7350013550034.jpg","name":"Bj\xf6rkved","salePrice":59.9,"description":"Bj\xf6rkved i n\xe4tp\xe5se 10kg ...","measure":"st x 10kg"},{"category":2232,"id":"5703087111007","image":"/img/5703087111007.jpg","name":"T\xe4ndp\xe5sar Bras-& grillt\xe4ndare 100-p Burner","salePrice":79.9,"description":"Burner bras- & grillt\xe4ndare 100 har de flesta egenskaper en uppt\xe4ndningsprodukt beh\xf6ver. Alla t\xe4ndp\xe5sarna brinner lika bra, ingen avdunstning vid \xf6ppnande av burken, enkel att hantera, luktfri, kladdar inte och \xe4r l\xe4tt att ta med sig. Perfekt f\xf6r exempelvis j\xe4gare och fiskare.Fungerar lika bra till att t\xe4nda upp \xf6ppna spisen som grillen med.","measure":"st"},{"category":2232,"id":"7310380472322","image":"/img/7310380472322.jpg","name":"Grillkol 2,5kg","salePrice":39.9,"description":"Grillkol 2,5kg, Vikt: 2,5kg, Fsc-m\xe4rkt.","measure":"st"},{"category":2232,"id":"5701161713437","image":"/img/5701161713437.jpg","name":"Gast\xe4ndare Easy Mid 1-p","salePrice":15.99,"description":"Praktisk gast\xe4ndare med justerbar l\xe5ga.\\n\\nObs! Produkten s\xe4ljs i blandade f\xe4rger. F\xe4rg kan ej v\xe4ljas vid k\xf6p.F\xe4rg: Svart, guld eller silver.","measure":"st"},{"category":5224,"id":"7313130052485","image":"/img/7313130052485.jpg","name":"N\xe4t till drivhusram Svart","salePrice":149.99,"description":"Formsytt n\xe4t\xf6verdrag som passar till Ram till drivhus. Med tv\xe5 dragkedjor p\xe5 ena l\xe5ngsidan som g\xf6r det enkelt att komma \xe5t odlingen.\\nSkyddar mot objudna g\xe4ster men sl\xe4pper igenom fukt.","measure":"st"},{"category":5224,"id":"7317410006304","image":"/img/7317410006304.jpg","name":"Gr\xe4sg\xf6dsel ca 8 kg Algomin","salePrice":249.99,"description":"R\xe4cker till 340 kvm. F\xf6r hela tr\xe4dg\xe5rden.\\nGr\xf6nare gr\xe4s, mindre mossa och ogr\xe4s. G\xf6dslar och kalkar samtidigt.\\n\\nAlgomin\xae Gr\xe4sg\xf6dsel har, ut\xf6ver algkalk, ett extra tillskott av l\xe5ngsamtverkande kv\xe4ve och kalium. Det ger extra kraft inte bara \xe5t gr\xe4smattan utan \xe5t allt som \xe4r gr\xf6nt i din tr\xe4dg\xe5rd. .","measure":"st"},{"category":5224,"id":"7310380662570","image":"/img/7310380662570.jpg","name":"Planteringsl\xe5da 120x80cm","salePrice":149.99,"description":"I en planteringsl\xe5da kan du p\xe5 liten yta s\xe5 dina favoritkryddor och \xf6rter.\\n\\nF\xe4rg: Natur\\nStorlek: 120x80cm\\nMaterial: Tr\xe4 .","measure":"st"},{"category":5224,"id":"7310380662464","image":"/img/7310380662464.jpg","name":"Spade Spetsig Prima Fiskars","salePrice":149.99,"description":"I en planteringsl\xe5da kan du p\xe5 liten yta s\xe5 dina favoritkryddor och \xf6rter.\\n\\nF\xe4rg: Natur\\nStorlek: 120x80cm\\nMaterial: Tr\xe4 .","measure":"st"},{"category":5224,"id":"7313060005803","image":"/img/7313060005803.jpg","name":"Allroundg\xf6dsel V\xe4xa 7,5kg","salePrice":149.99,"description":"I en planteringsl\xe5da kan du p\xe5 liten yta s\xe5 dina favoritkryddor och \xf6rter.\\n\\nF\xe4rg: Natur\\nStorlek: 120x80cm\\nMaterial: Tr\xe4 .","measure":"st"},{"category":5224,"id":"7313130052492","image":"/img/7313130052492.jpg","name":"\xd6verdrag till odlingstunnel","salePrice":99.99,"description":"Formsytt \xf6verdrag i PE-plast som passar till Ram till odlingstunnel 120x80 cm, h\xf6jd 60 cm. Odlingstunneln skapar ett mikroklimat som g\xf6r att man kan starta odlingss\xe4songen tidigare och f\xe5 snabbare sk\xf6rd.","measure":"st"},{"category":5224,"id":"7310380662495","image":"/img/7310380662495.jpg","name":"Kultivator","salePrice":69.99,"description":"Anv\xe4nds f\xf6r att bek\xe4mpa ogr\xe4s s\xe5som kvickrot genom att riva s\xf6nder r\xf6tterna. Bearbetar jorden djupt. Material: Tr\xe4 och rostfritt st\xe5l .","measure":"st"}]')}},[[129,1,2]]]);
//# sourceMappingURL=main.f741422c.chunk.js.map