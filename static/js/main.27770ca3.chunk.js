(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(12)},12:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(3),s=a(4),o=a(5),i=a(9),l=a(6),u=a(10),m=a(0),d=a.n(m),h=a(7),p=a.n(h),f=(a(20),a(8)),g=a.n(f);function v(e){var t=e.character;return d.a.createElement("div",{className:"CharacterCard",style:{backgroundImage:"url(".concat(t.image,")")}},d.a.createElement("div",{className:"CharacterCard__name-container text-truncate"},t.name))}var x=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),u=0;u<n;u++)o[u]=arguments[u];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={loading:!0,error:null,data:{info:{},results:[]},nextPage:1},a.fetchCharacters=Object(c.a)(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0,error:null}),e.prev=1,e.next=4,fetch("https://rickandmortyapi.com/api/character/?page=".concat(a.state.nextPage));case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,a.setState({loading:!1,data:{info:n.info,results:[].concat(a.state.data.results,n.results)},nextPage:a.state.nextPage+1}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),a.setState({loading:!1,error:e.t0});case 14:case"end":return e.stop()}},e,null,[[1,11]])})),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.fetchCharacters()}},{key:"render",value:function(){var e=this;return this.state.error?"Error!{this.state.error.message}":d.a.createElement("div",{className:"container"},d.a.createElement("div",{className:"App"},d.a.createElement("img",{className:"Logo",src:g.a,alt:"Rick y Morty"}),d.a.createElement("ul",{className:"row"},this.state.data.results.map(function(e){return d.a.createElement("li",{className:"col-6 col-md-3",key:e.id},d.a.createElement(v,{character:e}))})),this.state.loading&&d.a.createElement("p",{className:"text-center"},"Loading..."),!this.state.loading&&this.state.data.info.next&&d.a.createElement("button",{onClick:function(){return e.fetchCharacters()}},"Load More")))}}]),t}(d.a.Component),E=document.getElementById("root");p.a.render(d.a.createElement(x,null),E)},20:function(e,t,a){},8:function(e,t,a){e.exports=a.p+"static/media/logo.42d6efdb.png"}},[[11,1,2]]]);
//# sourceMappingURL=main.27770ca3.chunk.js.map