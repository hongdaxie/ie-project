(window["webpackJsonpie-project"]=window["webpackJsonpie-project"]||[]).push([[13],{890:function(e,t,a){"use strict";a.r(t);a(159);var n=a(74),l=(a(156),a(105)),r=(a(154),a(104)),c=(a(349),a(347)),u=(a(157),a(106)),s=(a(382),a(386)),m=a(110),i=a(31),E=a(32),o=a(35),b=a(33),p=a(36),h=(a(325),a(348)),v=a(1),f=a.n(v),y=(a(323),a(324)),g=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return f.a.createElement("div",null,f.a.createElement(y.a.Group,{onChange:a("answer1"),defaultValue:t.answer1},f.a.createElement(y.a,{value:1},"A1"),f.a.createElement("br",null),f.a.createElement("br",null),f.a.createElement(y.a,{value:2},"B1"),f.a.createElement("br",null),f.a.createElement("br",null),f.a.createElement(y.a,{value:3},"C1"),f.a.createElement("br",null),f.a.createElement("br",null),f.a.createElement(y.a,{value:4},"D1"),f.a.createElement("br",null),f.a.createElement("br",null)))}}]),t}(v.Component),d=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return f.a.createElement("div",null,f.a.createElement(y.a.Group,{onChange:a("answer2"),defaultValue:t.answer2},f.a.createElement(y.a,{value:1},"A2"),f.a.createElement("br",null),f.a.createElement("br",null),f.a.createElement(y.a,{value:2},"B2"),f.a.createElement("br",null),f.a.createElement("br",null),f.a.createElement(y.a,{value:3},"C2"),f.a.createElement("br",null),f.a.createElement("br",null),f.a.createElement(y.a,{value:4},"D2"),f.a.createElement("br",null),f.a.createElement("br",null)))}}]),t}(v.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return f.a.createElement("div",null,f.a.createElement(y.a.Group,{onChange:a("answer3"),defaultValue:t.answer3},f.a.createElement(y.a,{value:1},"A3"),f.a.createElement("br",null),f.a.createElement("br",null),f.a.createElement(y.a,{value:2},"B3"),f.a.createElement("br",null),f.a.createElement("br",null),f.a.createElement(y.a,{value:3},"C3"),f.a.createElement("br",null),f.a.createElement("br",null),f.a.createElement(y.a,{value:4},"D3"),f.a.createElement("br",null),f.a.createElement("br",null)))}}]),t}(v.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return f.a.createElement("div",null,f.a.createElement(y.a.Group,{onChange:a("answer4"),defaultValue:t.answer4},f.a.createElement(y.a,{value:1},"A4"),f.a.createElement("br",null),f.a.createElement("br",null),f.a.createElement(y.a,{value:2},"B4"),f.a.createElement("br",null),f.a.createElement("br",null),f.a.createElement(y.a,{value:3},"C4"),f.a.createElement("br",null),f.a.createElement("br",null),f.a.createElement(y.a,{value:4},"D4"),f.a.createElement("br",null),f.a.createElement("br",null)))}}]),t}(v.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return f.a.createElement("div",null,f.a.createElement(y.a.Group,{onChange:a("answer5"),defaultValue:t.answer5},f.a.createElement(y.a,{value:1},"A5"),f.a.createElement("br",null),f.a.createElement("br",null),f.a.createElement(y.a,{value:2},"B5"),f.a.createElement("br",null),f.a.createElement("br",null),f.a.createElement(y.a,{value:3},"C5"),f.a.createElement("br",null),f.a.createElement("br",null),f.a.createElement(y.a,{value:4},"D5"),f.a.createElement("br",null),f.a.createElement("br",null)))}}]),t}(v.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){this.props.values;return f.a.createElement("div",null,"Result")}}]),t}(v.Component);a.d(t,"default",function(){return k});var x=h.a.Title,k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(b.a)(t).call(this,e))).handleChange=function(e){return function(t){console.log(t.target.value),a.setState(Object(m.a)({},e,t.target.value))}},a.next=function(e){if(""===e)s.a.error("Please select one answer!");else{var t=a.state.current+1;a.setState({current:t})}},a.previous=function(){var e=a.state.current-1;a.setState({current:e})},a.state={current:1,answer1:"",answer2:"",answer3:"",answer4:"",answer5:""},a}return Object(p.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this;console.log(this.state.answer1);var t=this.state,a=t.current,m={answer1:t.answer1,answer2:t.answer2,answer3:t.answer3,answer4:t.answer4,answer5:t.answer5};switch(a){case 1:return f.a.createElement(n.a,null,f.a.createElement(l.a,{style:{margin:"20px"}},f.a.createElement(r.a,{span:22,offset:1},f.a.createElement("div",{style:{textAlign:"center"}},f.a.createElement(x,null,"Test your Knowledge")),f.a.createElement(c.a,{title:"Question"+" ".concat(a)},f.a.createElement(g,{handleChange:this.handleChange,values:m}),f.a.createElement("br",null),f.a.createElement("br",null),a<4&&f.a.createElement(u.a,{type:"primary",onClick:function(){return e.next(e.state.answer1)}},"Next"),4===a&&f.a.createElement(u.a,{type:"primary",onClick:function(){return s.a.success("Processing complete!")}},"Done")))));case 2:return f.a.createElement(n.a,null,f.a.createElement(l.a,{style:{margin:"20px"}},f.a.createElement(r.a,{span:20,offset:2},f.a.createElement("div",{style:{textAlign:"center"}},f.a.createElement(x,null,"Test your Knowledge")),f.a.createElement(c.a,{title:"Question"+" ".concat(a)},f.a.createElement(d,{handleChange:this.handleChange,values:m}),f.a.createElement("br",null),f.a.createElement("br",null),f.a.createElement(u.a,{type:"primary",onClick:function(){return e.previous()},style:{marginRight:"20px"}},"Previous"),f.a.createElement(u.a,{type:"primary",onClick:function(){return e.next(e.state.answer2)}},"Next")))));case 3:return f.a.createElement(n.a,null,f.a.createElement(l.a,{style:{margin:"20px"}},f.a.createElement(r.a,{span:20,offset:2},f.a.createElement("div",{style:{textAlign:"center"}},f.a.createElement(x,null,"Test your Knowledge")),f.a.createElement(c.a,{title:"Question"+" ".concat(a)},f.a.createElement(w,{handleChange:this.handleChange,values:m}),f.a.createElement("br",null),f.a.createElement("br",null),f.a.createElement(u.a,{type:"primary",onClick:function(){return e.previous()},style:{marginRight:"20px"}},"Previous"),f.a.createElement(u.a,{type:"primary",onClick:function(){return e.next(e.state.answer3)}},"Next")))));case 4:return f.a.createElement(n.a,null,f.a.createElement(l.a,{style:{margin:"20px"}},f.a.createElement(r.a,{span:20,offset:2},f.a.createElement("div",{style:{textAlign:"center"}},f.a.createElement(x,null,"Test your Knowledge")),f.a.createElement(c.a,{title:"Question"+" ".concat(a)},f.a.createElement(C,{handleChange:this.handleChange,values:m}),f.a.createElement("br",null),f.a.createElement("br",null),f.a.createElement(u.a,{type:"primary",onClick:function(){return e.previous()},style:{marginRight:"20px"}},"Previous"),f.a.createElement(u.a,{type:"primary",onClick:function(){return e.next(e.state.answer4)}},"Next")))));case 5:return f.a.createElement(n.a,null,f.a.createElement(l.a,{style:{margin:"20px"}},f.a.createElement(r.a,{span:22,offset:2},f.a.createElement("div",{style:{textAlign:"center"}},f.a.createElement(x,null,"Test your Knowledge")),f.a.createElement(c.a,{title:"Question"+" ".concat(a)},f.a.createElement(j,{handleChange:this.handleChange,values:m}),f.a.createElement("br",null),f.a.createElement("br",null),f.a.createElement(u.a,{type:"primary",onClick:function(){return e.previous()},style:{marginRight:"20px"}},"Previous"),f.a.createElement(u.a,{type:"primary",onClick:function(){return e.next(e.state.answer5)}},"Done")))));default:return f.a.createElement(n.a,null,f.a.createElement(l.a,{style:{margin:"20px"}},f.a.createElement(r.a,{span:20,offset:2},f.a.createElement("div",{style:{textAlign:"center"}},f.a.createElement(x,null,"Test your Knowledge")),f.a.createElement(c.a,{title:"Your result is:"},f.a.createElement(O,{values:m}),f.a.createElement("br",null),f.a.createElement("br",null)))))}}}]),t}(v.Component)}}]);
//# sourceMappingURL=13.774d4ab1.chunk.js.map