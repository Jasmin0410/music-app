(this.webpackJsonpmusic=this.webpackJsonpmusic||[]).push([[0],{26:function(e,t,a){e.exports=a(40)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(23),l=a.n(r),s=(a(31),a(3)),o=a(4),i=a(6),u=a(5),m=a(7),h=a(11),p=(a(32),a(33),a(34),a(16)),d=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header-title"},c.a.createElement(p.a,null),"\xa0",c.a.createElement(h.b,{to:"/"},c.a.createElement("span",null,"Music"))),c.a.createElement("div",{className:"header-link"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(h.b,{to:"/chart"},"\u6392\u884c\u699c")))))}}]),t}(n.Component),f=a(12),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={searchValue:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"home-page"},c.a.createElement("h1",null,"\u627e\u5c0b\uff0c\u5c6c\u65bc\u4f60\u7684\u97f3\u6a02"),c.a.createElement("div",{className:"searchbox"},c.a.createElement("input",{placeholder:"Search......",value:this.state.searchValue,onChange:function(t){console.log(t.target.value),e.setState({searchValue:t.target.value})}}),c.a.createElement((function(t){return c.a.createElement("a",{href:"/search/:".concat(e.state.searchValue)},c.a.createElement("div",{className:"search-button"},c.a.createElement(p.b,null),"\u641c\u5c0b"))}),null)))}}]),t}(n.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.chartInfo;return c.a.createElement(h.b,{to:{pathname:"/chart/".concat(e[0]),state:{chartName:e[1]}}},c.a.createElement("div",{className:"chart"},c.a.createElement("img",{src:e[4][0].url,alt:e[1]}),c.a.createElement("p",null,e[1])))}}]),t}(n.Component),v=function(){return c.a.createElement("div",{className:"content",style:{justifyContent:"center"}},c.a.createElement("div",{className:"loadingio-spinner-pulse-jlyhv13a9go"},c.a.createElement("div",{className:"ldio-ot126dh6ch"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null))))},j="client_credentials",k="6964f6893e7c9fbd046edf20dc4e5214",g="f127362feb3b449695a285b17b75107b";function y(){return fetch("https://cors-anywhere.herokuapp.com/https://account.kkbox.com/oauth2/token",{method:"POST",headers:{Accept:"*/*","Content-Type":"application/x-www-form-urlencoded"},body:"grant_type=".concat(j,"&client_id=").concat(k,"&client_secret=").concat(g)}).then((function(e){return e.json()})).then((function(e){return new Promise((function(t,a){t(e)}))}))}var O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={charts:"",token:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;y().then((function(e){return e.access_token})).then((function(t){fetch("https://api.kkbox.com/v1.1/charts?territory=TW",{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).then((function(t){e.setState({charts:t.data})}))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.charts.slice(0,18);if(""===e||void 0===e)return c.a.createElement(v,null);var t=e.map((function(e){return c.a.createElement(E,{key:Object.values(e)[0],chartInfo:Object.values(e)})}));return c.a.createElement("div",{className:"content"},c.a.createElement("h2",null,"\u6392\u884c\u699c"),c.a.createElement("div",{className:"content-part"},t))}}]),t}(n.Component),N=a(15),w=a(20),A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={songs:"",player:"",playing:""},a.clickSong=a.clickSong.bind(Object(N.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.chartId;y().then((function(e){return e.access_token})).then((function(a){fetch("https://api.kkbox.com/v1.1/charts/".concat(t,"?territory=TW"),{headers:{Authorization:"Bearer ".concat(a)}}).then((function(e){return e.json()})).then((function(t){e.setState({songs:t.tracks.data}),e.clickSong(t.tracks.data[0].name,t.tracks.data[0].id)}))})).catch((function(e){console.log(e)}))}},{key:"clickSong",value:function(e,t){var a=this;fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=".concat("AIzaSyCE46y4W6mkuuE9UPrVLjT84BPAUj38CYU","&q=").concat(e)).then((function(e){return e.json()})).then((function(e){a.setState({player:e.items[0].id.videoId,playing:"".concat(t)})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;if(""===this.state.songs)return c.a.createElement(v,null);var t=this.state.songs.slice(0,20),a=this.props.location.state.chartName,n=t.map((function(t){var a=t.album.artist,n=e.state.playing===t.id;return c.a.createElement("div",{className:"song-item ".concat(n?"playing":""),key:t.id,onClick:function(){return e.clickSong(t.name,t.id)}},c.a.createElement("div",{className:"song-spec"},c.a.createElement("div",{className:"song-name"},t.name),c.a.createElement("div",{className:"song-actor"},a.name)),c.a.createElement("div",{className:"song-status"},n?c.a.createElement(w.a,null):c.a.createElement(w.b,null)))}));return c.a.createElement("div",{className:"content"},c.a.createElement("h2",null,a),c.a.createElement("div",{style:{width:"100%"}},c.a.createElement("iframe",{title:this.state.player,className:"songplayer",src:"https://www.youtube.com/embed/"+this.state.player+"?autoplay=1&enablejsapi=1",frameBorder:"0",allow:"autoplay"}),c.a.createElement("div",{className:"songlist"},n)))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={searchValue:a.props.match.params.searchValue,searchResultAlbums:[],searchResultArtists:[],nodata:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;y().then((function(e){return e.access_token})).then((function(t){fetch("https://api.kkbox.com/v1.1/search?q=".concat(e.state.searchValue,"&territory=TW&limit=50"),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).then((function(t){0!==t.albums.data.length||0!==t.artists.data.length?e.setState({searchResultAlbums:t.albums.data,searchResultArtists:t.artists.data,nodata:!1}):e.setState({nodata:!0})}))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.props.match.params.searchValue,t=this.state,a=t.searchResultAlbums,n=t.searchResultArtists;if(t.nodata)return c.a.createElement("div",{className:"content"},c.a.createElement("p",null,"no data"));if(0===a.length||0===n.length)return c.a.createElement(v,null);var r=a.map((function(e){return c.a.createElement("a",{className:"result-item",href:e.url,target:"_blank",key:e.id,rel:"noopener noreferrer"},c.a.createElement("img",{src:e.images[0].url,alt:""}),c.a.createElement("div",null,c.a.createElement("p",null,e.name),c.a.createElement("br",null),c.a.createElement("p",null,e.artist.name)))})),l=n.map((function(e){return c.a.createElement("a",{className:"result-item",href:e.url,target:"_blank",key:e.id,rel:"noopener noreferrer"},c.a.createElement("img",{src:e.images[0].url,alt:""}),c.a.createElement("p",null,e.name))}));return c.a.createElement("div",{className:"content search-result"},c.a.createElement("div",{className:"content-title"},"\u95dc\u65bc",e),c.a.createElement("div",{className:"result"},c.a.createElement("h2",null,"Artist"),l),c.a.createElement("div",{className:"result"},c.a.createElement("h2",null,"Albums"),r))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(h.a,{basename:"/music-app"},c.a.createElement(f.c,null,c.a.createElement(f.a,{exact:!0,path:"/",component:b}),c.a.createElement(f.a,{path:"/chart/:chartId",component:A}),c.a.createElement(f.a,{path:"/chart",component:O}),c.a.createElement(f.a,{path:"/search/:searchValue",component:C})))}}]),t}(n.Component),_=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("p",null,"\u4f7f\u7528",c.a.createElement("a",{href:"https://developer.kkbox.com",target:"_blank",rel:"noopener noreferrer"},"KKBOX Open API")),c.a.createElement("p",null,"\u4f5c\u8005 : ",c.a.createElement("a",{href:"https://github.com/Jasmin0410",target:"_blank",rel:"noopener noreferrer"},"Jasmin")))}}]),t}(n.Component),V=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(h.a,null,c.a.createElement(d,null),c.a.createElement(S,null)),c.a.createElement(_,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.34760614.chunk.js.map