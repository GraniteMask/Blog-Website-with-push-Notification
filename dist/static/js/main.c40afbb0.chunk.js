(this.webpackJsonpmarioplan=this.webpackJsonpmarioplan||[]).push([[0],{213:function(e,t,a){e.exports=a(408)},218:function(e,t,a){},408:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(0),c=a.n(r),i=a(90),l=a.n(i),s=(a(218),a(24)),o=a(25),u=a(27),m=a(26),d=a(8),p=a(5),h=a(7),E=Object(h.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){return c.a.createElement("ul",{className:"right"},c.a.createElement("li",null,c.a.createElement(d.c,{to:"/create"},"New Project")),c.a.createElement("li",null,c.a.createElement("a",{onClick:e.signOut},"Log Out")),c.a.createElement("li",null,c.a.createElement(d.c,{to:"/",className:"btn btn-floating pink lighten-1"},e.profile.initials)))})),f=function(){return c.a.createElement("ul",{className:"right"},c.a.createElement("li",null,c.a.createElement(d.c,{to:"/signup"},"Signup")),c.a.createElement("li",null,c.a.createElement(d.c,{to:"/signin"},"Login")))},b=Object(h.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile,n=t.uid?c.a.createElement(E,{profile:a}):c.a.createElement(f,null);return c.a.createElement("nav",{className:"nav-wrapper grey darken-3"},c.a.createElement("div",{className:"container"},c.a.createElement(d.b,{to:"/",className:"brand-logo"},"MarioPlan"),n))})),g=a(51),v=a.n(g),j=function(e){var t=e.notifications;return c.a.createElement("div",{className:"section"},c.a.createElement("div",{className:"card z-depth-0"},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title"},"Notifications"),c.a.createElement("ul",{className:"notifications"},t&&t.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("span",{className:"pink-text"},e.user),c.a.createElement("span",null," ",e.content),c.a.createElement("div",{className:"grey-text note-date"},v()(e.time.toDate()).fromNow()))}))))))},N=function(e){var t=e.project;return c.a.createElement("div",{className:"card z-depth-0 project-summary"},c.a.createElement("div",{className:"card-content grey-text text-darken-3"},c.a.createElement("span",{className:"card-title"},t.title),c.a.createElement("p",null,"Posted By ",t.authorFirstName," ",t.authorLastName),c.a.createElement("p",{className:"grey-text"},v()(t.createdAt.toDate().toString()).calendar())))},O=function(e){var t=e.projects;return c.a.createElement("div",{className:"project-list section"},t&&t.map((function(e){return c.a.createElement(d.b,{to:"/project/"+e.id,key:e.id},c.a.createElement(N,{project:e}))})))},y=a(19),C=a(17),S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?c.a.createElement("div",{className:"dashboard container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 m6"},c.a.createElement(O,{projects:t})),c.a.createElement("div",{className:"col s12 m5 offset-m1"},c.a.createElement(j,{notifications:n})))):c.a.createElement(p.a,{to:"/signin"})}}]),a}(r.Component),w=Object(C.d)(Object(h.b)((function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}})),Object(y.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(S),R=Object(C.d)(Object(h.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}})),Object(y.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project;return e.auth.uid?t?c.a.createElement("div",{className:"container section project-details"},c.a.createElement("div",{className:"card z-depth-0"},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title"},t.title),c.a.createElement("p",null,t.content)),c.a.createElement("div",{className:"card-action gret lighten-4 grey-text"},c.a.createElement("div",null,"Posted by ",t.authorFirstName," ",t.authorLastName),c.a.createElement("div",null,v()(t.createdAt.toDate().toString()).calendar())))):c.a.createElement("div",{className:"container center"},c.a.createElement("p",null,"Loading Project...")):c.a.createElement(p.a,{to:"/signin"})})),F=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(n.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?c.a.createElement(p.a,{to:"/"}):c.a.createElement("div",{className:"conatiner"},c.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},c.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Log In"),c.a.createElement("div",{className:"red-text center"},t?c.a.createElement("p",null,t):null))))}}]),a}(r.Component),I=Object(h.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))(F),k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:"",firstname:"",lastname:""},e.handleChange=function(t){e.setState(Object(n.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?c.a.createElement(p.a,{to:"/"}):c.a.createElement("div",{className:"container"},c.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},c.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"firstname"},"First Name"),c.a.createElement("input",{type:"text",id:"firstname",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"lastname"},"Last Name"),c.a.createElement("input",{type:"text",id:"lastname",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign up"),c.a.createElement("div",{className:"red-text center"},a?c.a.createElement("p",null,a):null))))}}]),a}(r.Component),x=Object(h.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),l=c();i.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return l.collection("users").doc(t.user.uid).set({firstname:e.firstname,lastname:e.lastname,initials:e.firstname[0]+e.lastname[0]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(k),P=a(28),L=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={title:"",content:""},e.handleChange=function(t){e.setState(Object(n.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createProject(e.state),e.props.history.push("/")},e}return Object(o.a)(a,[{key:"render",value:function(){return this.props.auth.uid?c.a.createElement("div",{className:"container"},c.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},c.a.createElement("h5",{className:"grey-text text-darken-3"},"Create new project"),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"title"},"Title"),c.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"content"},"Project Content"),c.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create")))):c.a.createElement(p.a,{to:"/signin"})}}]),a}(r.Component),A=Object(h.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,i=a().firebase.auth.uid;r.collection("projects").add(Object(P.a)(Object(P.a)({},e),{},{authorFirstName:c.firstname,authorLastName:c.lastname,authorId:i,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))}}}))(L),U=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(d.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(b,null),c.a.createElement(p.d,null,c.a.createElement(p.b,{exact:!0,path:"/",component:w}),c.a.createElement(p.b,{path:"/project/:id",component:R}),c.a.createElement(p.b,{path:"/signin",component:I}),c.a.createElement(p.b,{path:"/signup",component:x}),c.a.createElement(p.b,{path:"/create",component:A}))))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _={authError:null},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(P.a)(Object(P.a)({},e),{},{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),{authError:null};case"SIGNOUT_SUCCESS":return console.log("logout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(P.a)(Object(P.a)({},e),{},{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(P.a)(Object(P.a)({},e),{},{authError:t.err.message});default:return e}},T={projects:[{id:"1",title:"help me find peach",content:"blah"},{id:"2",title:"help me find",content:"blah blah"}]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":case"CREATE_PROJECT_ERROR":default:return e}},B=a(52),D=Object(C.c)({auth:G,project:z,firestore:B.firestoreReducer,firebase:y.firebaseReducer}),J=a(211),W=a(64),H=a.n(W),K=(a(403),a(406),a(409),{});H.a.initializeApp({apiKey:"AIzaSyBGOMLlNzu6THICXNa7kHehpbkQxSWcXys",authDomain:"net-ninja-maioplan.firebaseapp.com",databaseURL:"https://net-ninja-maioplan.firebaseio.com",projectId:"net-ninja-maioplan",storageBucket:"net-ninja-maioplan.appspot.com",messagingSenderId:"197577457127",appId:"1:197577457127:web:ad1cec5f33c64281751142",measurementId:"G-E6KZG7HBK3"}),H.a.analytics(),H.a.firestore().settings({timestampsInSnapshots:!0});var M,X=H.a,Q=Object(C.e)(D,Object(C.d)(Object(C.a)(J.a.withExtraArgument({getFirebase:y.getFirebase,getFirestore:B.getFirestore})),Object(B.reduxFirestore)(X,K))),Z=(M={firebase:X,config:K},Object(n.a)(M,"config",{userProfile:"users",useFirestoreForProfile:!0,enableRedirectHandling:!1,resetBeforeLogin:!1}),Object(n.a)(M,"dispatch",Q.dispatch),Object(n.a)(M,"createFirestoreInstance",B.createFirestoreInstance),Object(n.a)(M,"userProfile","users"),Object(n.a)(M,"presence","presence"),Object(n.a)(M,"sessions","sessions"),M);function $(e){var t=e.children,a=Object(h.c)((function(e){return e.firebase.auth}));return Object(y.isLoaded)(a)?t:c.a.createElement("div",null,"Loading Screen...")}l.a.render(c.a.createElement(h.a,{store:Q},c.a.createElement(y.ReactReduxFirebaseProvider,Z,c.a.createElement($,null,c.a.createElement(U,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[213,1,2]]]);
//# sourceMappingURL=main.c40afbb0.chunk.js.map