(this.webpackJsonpmusic=this.webpackJsonpmusic||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(8),o=n.n(r),l=(n(14),n(1)),i=n(2),s=n(4),u=n(3),m=n(5),h=(n(15),n(16),n(6)),b=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header-title"},c.a.createElement(h.a,null),"\xa0",c.a.createElement("span",null,"Music")),c.a.createElement("div",{className:"header-searchbox"},c.a.createElement("div",{className:"searchbox"},c.a.createElement("input",{placeholder:"Search......",style:{flex:5}}),c.a.createElement("div",{className:"searchButton"},c.a.createElement(h.b,null))),c.a.createElement("div",{style:{color:"#b9b7b7"}},"About Me")))}}]),t}(a.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.chartInfo;return console.log(e),c.a.createElement("div",{className:"chart"},c.a.createElement("img",{src:e[4][0].url,alt:e[1]}),c.a.createElement("p",null,e[1]))}}]),t}(a.Component),d=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={charts:""},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.kkbox.com/v1.1/charts?territory=TW",{headers:{Authorization:"Bearer Jb6JeHDqKMz6gcm3b-b4KA=="}}).then((function(e){return e.json()})).then((function(t){e.setState({charts:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.charts.slice(0,18);if(console.log(e),""===e)return c.a.createElement("div",null,"Loading.....");var t=e.map((function(e){return c.a.createElement(f,{key:Object.values(e)[0],chartInfo:Object.values(e)})}));return c.a.createElement("div",{className:"content"},c.a.createElement("h2",null,"\u6392\u884c\u699c"),c.a.createElement("div",{className:"content-part"},t))}}]),t}(a.Component),p=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("footer",{className:"footer"},"Footer")}}]),t}(a.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(b,null),c.a.createElement(d,null),c.a.createElement(p,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.f8df7d22.chunk.js.map