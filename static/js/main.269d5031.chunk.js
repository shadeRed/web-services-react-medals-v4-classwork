(this["webpackJsonpgold-medals"]=this["webpackJsonpgold-medals"]||[]).push([[0],{36:function(e,n,t){},37:function(e,n,t){},38:function(e,n,t){},39:function(e,n,t){},46:function(e,n,t){},47:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),a=t(11),o=t.n(a),i=(t(36),t(20)),s=t(21),u=t(30),d=t(29),l=(t(37),t(65)),m=(t(38),t(39),t(28)),j=t.n(m),h=t(22),b=t.n(h),f=t(2),v=function(e){var n=e.color,t=e.count,c=e.increment,r=e.decrement;return Object(f.jsxs)("div",{className:"medal-count-outer",children:[Object(f.jsx)(b.a,{onClick:r}),Object(f.jsx)("div",{className:"medal-count-inner",style:{backgroundColor:n},children:Object(f.jsx)("p",{children:t})}),Object(f.jsx)(j.a,{onClick:c})]})},O=(t(46),function(e){var n=e.fn;return Object(f.jsx)("span",{className:"remove-container",children:Object(f.jsx)("button",{onClick:n,className:"remove-btn",children:"Remove"})})}),p=t(64),x=["#ffd900","#c5cad9","#d9a36a"],y=function(e){var n=e.name,t=e.count,c=e.increment,r=e.decrement,a=e.remove;return Object(f.jsxs)("div",{children:[Object(f.jsxs)("p",{className:"medal-header",children:[n,Object(f.jsx)(p.a,{badgeContent:t.reduce((function(e,n){return e+n}),0),color:"primary"}),Object(f.jsx)(O,{fn:a})]}),x.map((function(e,n){return Object(f.jsx)(v,{color:e,count:t[n],increment:function(){return c(n)},decrement:function(){return r(n)}},n)}))]})},C=(t(47),function(e){var n=e.fn;return Object(f.jsx)("span",{className:"add-container",children:Object(f.jsx)("button",{onClick:function(){var e=prompt("enter the name of the country");if(""===e)return alert("invalid country name");n(e)},className:"add-btn",children:"Add Country"})})}),k=["United States","China","Russia","Germany","Brazil","Japan"],g=function(e){Object(u.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(i.a)(this,t);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=n.call.apply(n,[this].concat(r))).state={countries:k.map((function(e){return{name:e,count:[0,0,0]}}))},e}return Object(s.a)(t,[{key:"addMedal",value:function(e,n){var t=this.state.countries;t[e].count[n]+=1,this.setState({countries:t})}},{key:"removeMedal",value:function(e,n){var t=this.state.countries;t[e].count[n]-=1,t[e].count[n]<0&&(t[e].count[n]=0),this.setState({countries:t})}},{key:"addCountry",value:function(e){var n=this.state.countries;n.push({name:e,count:[0,0,0]}),this.setState({countries:n})}},{key:"deleteCountry",value:function(e){var n=this.state.countries;n.splice(e,1),this.setState({countries:n})}},{key:"render",value:function(){var e=this;return Object(f.jsxs)(l.a,{className:"container",maxWidth:"sm",children:[Object(f.jsx)("h1",{children:"Medals"}),this.state.countries.map((function(n,t){return Object(f.jsx)(y,{name:n.name,count:n.count,increment:e.addMedal.bind(e,t),decrement:e.removeMedal.bind(e,t),remove:e.deleteCountry.bind(e,t)},t)})),Object(f.jsx)(C,{fn:this.addCountry.bind(this)})]})}}]),t}(c.Component),N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,66)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,o=n.getTTFB;t(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(g,{})}),document.getElementById("root")),N()}},[[49,1,2]]]);
//# sourceMappingURL=main.269d5031.chunk.js.map