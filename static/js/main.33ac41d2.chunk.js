(this["webpackJsonpmaterial-ui-starter-v3"]=this["webpackJsonpmaterial-ui-starter-v3"]||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a(9),r=a.n(n),l=a(140),s=a(141),d=a(139),o=a(25),h=a(13),c=a(80),u=a(143),m=Object(c.a)({palette:{type:"dark"},overrides:{MuiButton:{root:{marginTop:20,"&:not(:last-child)":{marginRight:15},"&:hover $startIcon":{transform:"rotate(360deg)"}},startIcon:{transition:"all .3s"}},MuiCssBaseline:{"@global":{"::-webkit-scrollbar":{width:"10px","&-track":{background:"#f1f1f1"},"&-thumb":{background:"#888"},"&-thumb:hover":{background:"#555"}}}}},props:{MuiContainer:{component:u.a,p:3},MuiTypography:{display:"block"},MuiPaper:{component:u.a,p:2,variant:"outlined"}}}),j=a(137),b=a(131),g=a(138),f=a(79),p=a.n(f),O=a(77),x=a.n(O),v=a(78),N=a.n(v),W=a(76),w=a.n(W),k=a(133),E=a(134),B=a(135),y=a(136),S=a(18),A=a(59),Y=Object(A.b)({name:"student",initialState:{students:[{id:1,firstName:"Himadri",lastName:"Bhattathiri",email:"Chandramani_Talwar73@hotmail.com",phone:"+91620-320-4125",age:"49",height:"5ft",weight:"55kg",healthissue:"over Weight",dietplan:" Weight loss diet",address:"474 Banerjee Fords"},{id:2,firstName:"Subhasini",lastName:"Bhattacharya",email:"Chetan17@yahoo.co.in",phone:"+91953-928-4930",age:"49",height:"5ft",weight:"55kg",healthissue:"over Weight",dietplan:" Weight loss diet",address:"52520 Bhisham Brooks"},{id:3,firstName:"Daevika",lastName:"Ganaka",email:"Bharat89@gmail.com",phone:"+91-917-1416065",age:"49",height:"5ft",weight:"55kg",healthissue:"over Weight",dietplan:" Weight loss diet",address:"78079 Patel Park"},{id:4,firstName:"Tanya",lastName:"Trivedi",email:"Birjesh_Sinha3@hotmail.com",phone:"+91-644-6939697",age:"49",height:"5ft",weight:"55kg",healthissue:"over Weight",dietplan:" Weight loss diet",address:"57761 Shreyashi Junctions"},{id:5,firstName:"Vimala",lastName:"Mehrotra",email:"Anamika.Ahluwalia1@hotmail.com",phone:"+91-704-4124157",age:"49",height:"5ft",weight:"55kg",healthissue:"over Weight",dietplan:" Weight loss diet",address:"860 Gautama Turnpike"},{id:6,firstName:"Chapala",lastName:"Tagore",email:"Rohan17@gmail.com",phone:"+91947-960-7538",age:"49",height:"5ft",weight:"55kg",healthissue:"over Weight",dietplan:" Weight loss diet",address:"300 Chandrabhaga Knoll"},{id:7,firstName:"Rajendra",lastName:"Ahuja",email:"Vasudeva_Tagore25@yahoo.co.in",phone:"+91-918-7520232",age:"49",height:"5ft",weight:"55kg",healthissue:"over Weight",dietplan:" Weight loss diet",address:"4560 Dubashi Branch"},{id:8,firstName:"Himadri",lastName:"Devar",email:"Amritambu_Talwar@hotmail.com",phone:"+919330236755",age:"49",height:"5ft",weight:"55kg",healthissue:"over Weight",dietplan:" Weight loss diet",address:"1003 Girindra Rapids"},{id:9,firstName:"Chandrakala",lastName:"Gowda",email:"Rajan51@gmail.com",phone:"+91-732-9504322",age:"49",height:"5ft",weight:"55kg",healthissue:"over Weight",dietplan:" Weight loss diet",address:"967 Dhawan Burgs"},{id:10,firstName:"Birjesh",lastName:"Embranthiri",email:"Bela.Sinha@yahoo.co.in",phone:"+91-834-5715321",age:"49",height:"5ft",weight:"55kg",healthissue:"over Weight",dietplan:" Weight loss diet",address:"77860 Acharya Summit"},{id:11,firstName:"Ghanaanand",lastName:"Tandon",email:"Deeksha.Varma12@hotmail.com",phone:"+91-709-3361753",age:"49",height:"5ft",weight:"55kg",healthissue:"over Weight",dietplan:" Weight loss diet",address:"542 Ghanashyam Centers"},{id:12,firstName:"Baalagopaal",lastName:"Verma",email:"Chandranath.Panicker@hotmail.com",phone:"+919432924857",age:"49",height:"5ft",weight:"55kg",healthissue:"over Weight",dietplan:" Weight loss diet",address:"12208 Dwivedi Station"}],student:{firstName:"",lastName:"",email:"",address:"",phone:"",age:"",height:"",weight:"",healthissue:"",dietplan:""}},reducers:{getStudent:function(e,t){e.student=e.students.find((function(e){return e.id==t.payload}))},clearStudent:function(e){e.student={firstName:"",lastName:"",email:"",address:"",phone:"",age:"",height:"",weight:"",healthissue:"",dietplan:""}},addStudent:function(e,t){e.students=[t.payload].concat(Object(S.a)(e.students))},updateStudent:function(e,t){e.students=e.students.map((function(e){return e.id==t.payload.id?t.payload:e}))},deleteStudent:function(e,t){e.students=e.students.filter((function(e){return e.id!=t.payload}))}}}),D=Y.actions,C=D.getStudent,P=D.clearStudent,H=D.addStudent,T=D.updateStudent,I=D.deleteStudent,F=Y.reducer,G=a(21),M=a(2),V=function(e){var t=e.student,a=t.id,i=t.firstName,n=t.lastName,r=t.email,l=t.phone,s=t.address,d=(t.age,t.height,t.weight,t.healthissue,t.dietplan,Object(G.b)());return Object(M.jsx)(b.a,{sm:4,item:!0,children:Object(M.jsxs)(k.a,{children:[Object(M.jsxs)(u.a,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[Object(M.jsxs)(E.a,{variant:"subtitle2",gutterBottom:!0,children:[i," ",n]}),Object(M.jsx)(B.a,{component:o.b,to:"/students/".concat(a),children:Object(M.jsx)(w.a,{})})]}),Object(M.jsx)(E.a,{variant:"caption",children:l}),Object(M.jsx)(E.a,{variant:"caption",children:r}),Object(M.jsx)(E.a,{variant:"caption",children:s}),Object(M.jsx)(y.a,{component:o.b,to:"/students/".concat(a,"/edit"),variant:"outlined",startIcon:Object(M.jsx)(x.a,{}),children:"edit"}),Object(M.jsx)(y.a,{startIcon:Object(M.jsx)(N.a,{}),onClick:function(){d(I(a))},children:"delete"})]})})},R=Object(j.a)((function(e){return{fab:{position:"fixed",right:"5%",bottom:"5%"}}})),L=function(){var e=R(),t=Object(G.c)((function(e){return e.student.students}));return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(b.a,{spacing:2,container:!0,children:t.map((function(e){return Object(M.jsx)(V,{student:e},e.id)}))}),Object(M.jsx)(g.a,{component:o.b,to:"/students/create",color:"primary",className:e.fab,children:Object(M.jsx)(p.a,{})})]})},_=function(){var e=Object(h.g)(),t=Object(G.b)(),a=Object(G.c)((function(e){return e.student.student}));return Object(i.useEffect)((function(){return t(C(e.id)),function(){t(P())}}),[]),Object(M.jsxs)(k.a,{children:[Object(M.jsxs)(E.a,{variant:"h2",gutterBottom:!0,children:["Name: ",a.firstName," ",a.lastName]}),Object(M.jsxs)(E.a,{variant:"h5",gutterBottom:!0,children:["Phone: ",a.phone]}),Object(M.jsxs)(E.a,{variant:"h5",gutterBottom:!0,children:["Email: ",a.email]}),Object(M.jsxs)(E.a,{variant:"h5",gutterBottom:!0,children:["Address: ",a.address]}),Object(M.jsxs)(E.a,{variant:"h5",gutterBottom:!0,children:["Age: ",a.age]}),Object(M.jsxs)(E.a,{variant:"h5",gutterBottom:!0,children:["Height: ",a.height]}),Object(M.jsxs)(E.a,{variant:"h5",gutterBottom:!0,children:["Weight: ",a.weight]}),Object(M.jsxs)(E.a,{variant:"h5",gutterBottom:!0,children:["Health Discription: ",a.healthissue]}),Object(M.jsxs)(E.a,{variant:"h5",gutterBottom:!0,children:["Diet Plan: ",a.dietplan]})]})},J=a(12),K=a(11),U=a(142),$=a(144),q=function(){var e=Object(G.b)(),t=Object(h.f)(),a=Object(K.b)({defaultValues:{id:Object($.a)(),firstName:"",lastName:"",email:"",address:"",phone:"",age:"",height:"",weight:"",healthissue:"",dietplan:""}}),i=a.handleSubmit,n=a.control,r=a.reset,l=a.register;return Object(M.jsx)("div",{children:Object(M.jsx)(k.a,{children:Object(M.jsxs)("form",{onSubmit:i((function(a){e(H(a)),r({firstName:"",lastName:"",email:"",address:"",phone:"",age:"",height:"",weight:"",healthissue:"",dietplan:""}),t.push("/")})),children:[Object(M.jsx)(U.a,Object(J.a)({inputProps:{type:"hidden"},margin:"normal"},l("id"))),Object(M.jsx)(K.a,{control:n,name:"firstName",render:function(e){var t=e.field;return Object(M.jsx)(U.a,Object(J.a)({id:"first-name",label:"First Name",variant:"outlined",placeholder:"Enter Your First Name",fullWidth:!0,margin:"normal"},t))}}),Object(M.jsx)(K.a,{control:n,name:"lastName",render:function(e){var t=e.field;return Object(M.jsx)(U.a,Object(J.a)({id:"last-name",label:"Last Name",variant:"outlined",placeholder:"Enter Your Last Name",fullWidth:!0,margin:"normal"},t))}}),Object(M.jsx)(K.a,{control:n,name:"email",render:function(e){var t=e.field;return Object(M.jsx)(U.a,Object(J.a)({id:"email",label:"E-mail",variant:"outlined",placeholder:"Enter Your E-mail Address",fullWidth:!0,margin:"normal"},t))}}),Object(M.jsx)(K.a,{control:n,name:"address",render:function(e){var t=e.field;return Object(M.jsx)(U.a,Object(J.a)({id:"address",label:"Address",variant:"outlined",placeholder:"Enter Your Address",fullWidth:!0,margin:"normal"},t))}}),Object(M.jsx)(K.a,{control:n,name:"phone",render:function(e){var t=e.field;return Object(M.jsx)(U.a,Object(J.a)({id:"phone-number",label:"Phone Number",variant:"outlined",placeholder:"Enter Your Phone Number",fullWidth:!0,margin:"normal"},t))}}),Object(M.jsx)(K.a,{control:n,name:"age",render:function(e){var t=e.field;return Object(M.jsx)(U.a,Object(J.a)({id:"age",label:"Age",variant:"outlined",placeholder:"Enter Your age",fullWidth:!0,margin:"normal"},t))}}),Object(M.jsx)(K.a,{control:n,name:"height",render:function(e){var t=e.field;return Object(M.jsx)(U.a,Object(J.a)({id:"height",label:"Height",variant:"outlined",placeholder:"Enter Your height",fullWidth:!0,margin:"normal"},t))}}),Object(M.jsx)(K.a,{control:n,name:"weight",render:function(e){var t=e.field;return Object(M.jsx)(U.a,Object(J.a)({id:"height",label:"Weight",variant:"outlined",placeholder:"Enter Your weight",fullWidth:!0,margin:"normal"},t))}}),Object(M.jsx)(K.a,{control:n,name:"healthissue",render:function(e){var t=e.field;return Object(M.jsx)(U.a,Object(J.a)({id:"healthissue",label:"Health Issue",variant:"outlined",placeholder:"Health Description",fullWidth:!0,margin:"normal"},t))}}),Object(M.jsx)(K.a,{control:n,name:"dietplan",render:function(e){var t=e.field;return Object(M.jsx)(U.a,Object(J.a)({id:"dietplan",label:"Diet Plan",variant:"outlined",placeholder:"Diet plan opt",fullWidth:!0,margin:"normal"},t))}}),Object(M.jsx)(y.a,{type:"submit",children:"Add new Customer"})]})})})},z=function(){var e=Object(K.b)({defaultValues:{firstName:"",lastName:"",email:"",address:"",phone:"",age:"",height:"",weight:"",healthissue:"",dietplan:""}}),t=e.handleSubmit,a=e.control,n=e.reset,r=Object(h.g)(),l=Object(h.f)(),s=Object(G.b)(),d=Object(G.c)((function(e){return e.student.student}));Object(i.useEffect)((function(){return s(C(r.id)),function(){s(P())}}),[]),Object(i.useEffect)((function(){n(d)}),[d]);return Object(M.jsx)("div",{children:Object(M.jsx)(k.a,{children:Object(M.jsxs)("form",{onSubmit:t((function(e){s(T(e)),l.push("/")})),children:[Object(M.jsx)(K.a,{control:a,name:"firstName",render:function(e){var t=e.field;return Object(M.jsx)(U.a,Object(J.a)({id:"first-name",label:"First Name",variant:"outlined",placeholder:"Enter Your First Name",fullWidth:!0,margin:"normal"},t))}}),Object(M.jsx)(K.a,{control:a,name:"lastName",render:function(e){var t=e.field;return Object(M.jsx)(U.a,Object(J.a)({id:"last-name",label:"Last Name",variant:"outlined",placeholder:"Enter Your Last Name",fullWidth:!0,margin:"normal"},t))}}),Object(M.jsx)(K.a,{control:a,name:"email",render:function(e){var t=e.field;return Object(M.jsx)(U.a,Object(J.a)({id:"email",label:"E-mail",variant:"outlined",placeholder:"Enter Your E-mail Address",fullWidth:!0,margin:"normal"},t))}}),Object(M.jsx)(K.a,{control:a,name:"address",render:function(e){var t=e.field;return Object(M.jsx)(U.a,Object(J.a)({id:"address",label:"Address",variant:"outlined",placeholder:"Enter Your Address",fullWidth:!0,margin:"normal"},t))}}),Object(M.jsx)(K.a,{control:a,name:"phone",render:function(e){var t=e.field;return Object(M.jsx)(U.a,Object(J.a)({id:"phone-number",label:"Phone Number",variant:"outlined",placeholder:"Enter Your Phone Number",fullWidth:!0,margin:"normal"},t))}}),Object(M.jsx)(K.a,{control:a,name:"age",render:function(e){var t=e.field;return Object(M.jsx)(U.a,Object(J.a)({id:"age",label:"Age",variant:"outlined",placeholder:"Enter Your age",fullWidth:!0,margin:"normal"},t))}}),Object(M.jsx)(K.a,{control:a,name:"height",render:function(e){var t=e.field;return Object(M.jsx)(U.a,Object(J.a)({id:"height",label:"Height",variant:"outlined",placeholder:"Enter Your height",fullWidth:!0,margin:"normal"},t))}}),Object(M.jsx)(K.a,{control:a,name:"weight",render:function(e){var t=e.field;return Object(M.jsx)(U.a,Object(J.a)({id:"height",label:"Weight",variant:"outlined",placeholder:"Enter Your weight",fullWidth:!0,margin:"normal"},t))}}),Object(M.jsx)(K.a,{control:a,name:"healthissue",render:function(e){var t=e.field;return Object(M.jsx)(U.a,Object(J.a)({id:"healthissue",label:"Health Issue",variant:"outlined",placeholder:"Health Description",fullWidth:!0,margin:"normal"},t))}}),Object(M.jsx)(K.a,{control:a,name:"dietplan",render:function(e){var t=e.field;return Object(M.jsx)(U.a,Object(J.a)({id:"dietplan",label:"Diet Plan",variant:"outlined",placeholder:"Diet plan opt",fullWidth:!0,margin:"normal"},t))}}),Object(M.jsx)(y.a,{type:"submit",children:"Update Customer"})]})})})};var Q=function(){return Object(M.jsx)(o.a,{children:Object(M.jsxs)(d.a,{theme:m,children:[Object(M.jsx)(l.a,{}),Object(M.jsx)(s.a,{children:Object(M.jsxs)(h.c,{children:[Object(M.jsx)(h.a,{exact:!0,path:"/",component:L}),Object(M.jsx)(h.a,{exact:!0,path:"/students/create",component:q}),Object(M.jsx)(h.a,{exact:!0,path:"/students/:id",component:_}),Object(M.jsx)(h.a,{exact:!0,path:"/students/:id/edit",component:z})]})})]})})},X=Object(A.a)({reducer:{student:F}});r.a.render(Object(M.jsx)(G.a,{store:X,children:Object(M.jsx)(Q,{})}),document.getElementById("root"))}},[[102,1,2]]]);
//# sourceMappingURL=main.33ac41d2.chunk.js.map