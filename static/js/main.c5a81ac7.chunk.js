(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{167:function(e,t,n){},172:function(e,t,n){},465:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n(1),c=n.n(a),i=n(22),r=n.n(i),o=n(33),j=n(4);var l=function(){return Object(s.jsx)("span",{children:"About this page: I built if because I loce movies"})},u=n(8),m=n.n(u),d=n(25),b=n(56),v=n(57),p=n(59),h=n(58),O=n(142),x=n.n(O);n(167);var f=function(e){var t=e.id,n=e.year,a=e.title,c=e.summary,i=e.poster,r=e.genres;return Object(s.jsx)(o.b,{to:{pathname:"/movie/".concat(t),state:{year:n,title:a,summary:c,poster:i,genres:r}},children:Object(s.jsxs)("div",{class:"movie",children:[Object(s.jsx)("img",{src:i,alt:a,title:a}),"    ",Object(s.jsxs)("div",{className:"movie_data",children:[Object(s.jsx)("h3",{className:"movie_title",children:a}),Object(s.jsx)("h5",{className:"movie_year",children:n}),Object(s.jsx)("ul",{className:"movie_genres",children:r.map((function(e,t){return Object(s.jsxs)("li",{className:"genres_genre",children:[t,e]},t)}))}),Object(s.jsxs)("p",{className:"movie_summary",children:[c.slice(0,140),"..."]})]})]})})},y=(n(172),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(m.a.mark((function t(){var n,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(s.jsx)("section",{className:"container",children:t?Object(s.jsx)("div",{className:"loader",children:Object(s.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(s.jsx)("div",{className:"movies",children:n.map((function(e){return Object(s.jsx)(f,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(c.a.Component)),g=(n(173),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(s.jsx)("span",{children:e.state.title}):null}}]),n}(c.a.Component));var _=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(o.b,{to:"/",children:"Home"}),"          ",Object(s.jsx)(o.b,{to:"/about",children:"About"})]})};var N=function(){return Object(s.jsxs)(o.a,{children:[Object(s.jsx)(_,{}),"         ",Object(s.jsx)(j.a,{path:"/",exact:!0,component:y}),"         ",Object(s.jsx)(j.a,{path:"/about",component:l}),"    ",Object(s.jsx)(j.a,{path:"/movie/:id",component:g})]})};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(N,{})}),document.getElementById("root"))}},[[465,1,2]]]);
//# sourceMappingURL=main.c5a81ac7.chunk.js.map