(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{132:function(e,t,a){},134:function(e,t,a){},157:function(e,t,a){},159:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(13),c=a.n(s),i=(a(132),a(75)),o=a.n(i),d=a(102),u=a(6),h=a(104),l=(a(134),a(103)),m=a.n(l).a.create({baseURL:"https://randomuser.me/api/?results=25"}),p=a(18),f=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("https://randomuser.me/api/?results=25");case 2:return t=e.sent,r(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var s=[];return a.map((function(e){return s.push({id:e.login.uuid,phone:e.phone,name:e.name.first+" "+e.name.last,email:e.email,country:e.location.country,username:e.login.username})})),console.log(s),Object(p.jsx)("div",{style:{width:"1177px",margin:"auto"},children:Object(p.jsx)(h.a,{autoHeight:!0,sortModel:[{field:"name",sort:"asc"}],sortingOrder:["desc","asc"],rows:s,columns:[{field:"name",headerName:"Name",width:250,headerClassName:"table-head"},{field:"username",headerName:"Username",width:250,headerClassName:"table-head"},{field:"phone",headerName:"Phone",width:200,headerClassName:"table-head"},{field:"email",headerName:"Email",width:300,headerClassName:"table-head"},{field:"country",headerName:"Country",width:175,headerClassName:"table-head"}],pageSize:25})})};a(157);var b=function(){return Object(p.jsxs)("div",{className:"head-top",children:[Object(p.jsx)("h1",{className:"header-h1",children:"Employee Directory"}),Object(p.jsx)("h3",{className:"header-h2",children:"Click the menu on each column to sort, filter, or hide data to narrow your results."})]})};var j=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(b,{}),Object(p.jsx)(f,{})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,208)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};a(158);c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(j,{})}),document.getElementById("root")),y()}},[[159,1,2]]]);
//# sourceMappingURL=main.ee90ea99.chunk.js.map