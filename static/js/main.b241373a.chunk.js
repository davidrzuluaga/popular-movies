(this.webpackJsonppeliculas=this.webpackJsonppeliculas||[]).push([[0],{29:function(e,t,a){e.exports=a(57)},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(26),l=a.n(r),o=a(7),i=a(12),s=a(3),m=a(10),u=a.n(m),p=Object(o.g)((function(e){var t=e.movie;function a(){return window.innerWidth<=1170?100:230}return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"text"},c.a.createElement("p",null,t.overview?"".concat(t.overview.substring(0,a())).concat(t.overview.length>a()?"...":""):""),c.a.createElement("div",{className:"options"},c.a.createElement("button",{onClick:function(){return e.history.push("/movie/".concat(t.id))}},"Ver m\xe1s"),c.a.createElement("div",{className:"like"},function(t){return e.favorites.filter((function(e){return e.id===t.id})).length}(t)?c.a.createElement("i",{className:"material-icons",onClick:function(){return e.deleteFavorite(t)}},"favorite"):c.a.createElement("i",{className:"material-icons",onClick:function(){return e.createFavorite(t)}},"favorite_border")))),c.a.createElement("div",{className:"image",style:{background:"url(https://image.tmdb.org/t/p/original/".concat(t.poster_path,")")}}),c.a.createElement("p",{className:"movietitle",onClick:function(){return e.history.push("/movie/".concat(t.id))}},t.title))})),v=function(e){var t=e.loading,a=e.title,r=Object(n.useState)([]),l=Object(s.a)(r,2),o=l[0],m=l[1];function u(e){m([].concat(Object(i.a)(o),[e]))}function v(e){m(o.filter((function(t){return t.id!==e.id})))}return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("favorites"))||[];m(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("favorites",JSON.stringify(o))}),[o]),c.a.createElement("div",{className:"welcome"},c.a.createElement("div",{className:"banner"},c.a.createElement("img",{src:"https://peliculas-favoritas.s3.amazonaws.com/popcorn.png"}),c.a.createElement("h2",null,a)),c.a.createElement("div",{className:"main"},t?c.a.createElement("p",null,"Cargando"):c.a.createElement("div",{className:"list"},(e.showFavorites?o:e.movies).map((function(e){return c.a.createElement(p,{movie:e,key:e.id,favorites:o,createFavorite:u,deleteFavorite:v})})))))},E=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(!0),m=Object(s.a)(o,2),p=m[0],E=m[1],f=Object(n.useState)(1),d=Object(s.a)(f,2),b=d[0],g=d[1];function h(){u()({method:"GET",url:"https://api.themoviedb.org/3/movie/popular?api_key=ee41860b27e6bb1be4f182a4519564aa&language=en-US&page=".concat(b)}).then((function(e){E(!1),l([].concat(Object(i.a)(r),Object(i.a)(e.data.results)))})).catch((function(e){E(!1)}))}return Object(n.useEffect)((function(){h()}),[]),Object(n.useEffect)((function(){h()}),[b]),c.a.createElement(c.a.Fragment,null,c.a.createElement(v,{movies:r,loading:p,title:"Top Movies"}),c.a.createElement("button",{onClick:function(){return g(b+1)},style:{width:"100%",backgroundColor:"gray",margin:"0 0 10px 0",height:"80px",fontSize:"50px"}},"Get More"))},f=function(e){var t=e.params,a=Object(n.useState)(!0),r=Object(s.a)(a,2),l=r[0],o=r[1],i=Object(n.useState)([]),m=Object(s.a)(i,2),p=m[0],v=m[1],E=Object(n.useState)(200),f=Object(s.a)(E,2),d=f[0],b=f[1];return Object(n.useEffect)((function(){u()({method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(t.id,"/reviews?api_key=ee41860b27e6bb1be4f182a4519564aa&language=en-US&page=1")}).then((function(e){o(!1),v(e.data.results)})).catch((function(e){o(!1)}))}),[]),c.a.createElement("div",{className:"critics"},l?c.a.createElement("p",null,"Cargando"):c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"Movie Critics"),p.map((function(e){return c.a.createElement("div",{className:"critic"},c.a.createElement("p",null,c.a.createElement("strong",null,e.author,":"),"$",e.content.substring(0,d),e.content.length>d?c.a.createElement("p",{className:"showmore",onClick:function(){return b(6e4)}},"... Show All Texts"):null))}))))},d=function(e){var t=e.match.params,a=Object(n.useState)(!0),r=Object(s.a)(a,2),l=r[0],o=r[1],i=Object(n.useState)({}),m=Object(s.a)(i,2),p=m[0],v=m[1];return Object(n.useEffect)((function(){u()({method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(t.id,"?api_key=ee41860b27e6bb1be4f182a4519564aa&language=en-US")}).then((function(e){o(!1),v(e.data)})).catch((function(e){o(!1)}))}),[]),c.a.createElement("div",{className:"MovieDetail"},l?c.a.createElement("p",null,"Cargando"):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"detail"},c.a.createElement("div",{className:"poster",style:{background:"url(https://image.tmdb.org/t/p/original/".concat(p.poster_path,")")}}),c.a.createElement("div",{className:"movieBackground",style:{background:"url(https://image.tmdb.org/t/p/original/".concat(p.backdrop_path,")")}})),c.a.createElement("div",{className:"banner"},c.a.createElement("img",{src:"https://peliculas-favoritas.s3.amazonaws.com/popcorn.png"}),c.a.createElement("h2",null,p.title),c.a.createElement("p",null),c.a.createElement("p",{className:"tagline"},p.tagline)),c.a.createElement("div",{className:"summary"},c.a.createElement("div",{className:"content"},c.a.createElement("h3",null,"Overview"),c.a.createElement("p",{className:"overview"},p.overview),c.a.createElement("div",{className:"fact"},c.a.createElement("h4",null,"Country(ies): ")," ",p.production_countries&&p.production_countries.map((function(e){return c.a.createElement("p",null,e.name," - ")}))),c.a.createElement("div",{className:"fact"},c.a.createElement("h4",null,"Spoken language(s): ")," ",p.spoken_languages&&p.spoken_languages.map((function(e){return c.a.createElement("p",null,e.name," - ")}))),c.a.createElement("div",{className:"fact"},c.a.createElement("h4",null,"Release Date: ")," ",c.a.createElement("p",null,p.release_date," ")),c.a.createElement("div",{className:"fact"},c.a.createElement("h4",null,"Website: "),c.a.createElement("a",{target:"_blank",href:p.homepage},c.a.createElement("p",null,p.homepage," "))),c.a.createElement("div",{className:"fact"},c.a.createElement("h4",null,"Genres: "),p.genres&&p.genres.map((function(e){return c.a.createElement("p",null,e.name," - ")}))),c.a.createElement("div",{className:"fact"},c.a.createElement("h4",null,"Company(ies): "),p.production_companies&&p.production_companies.map((function(e){return c.a.createElement("p",null,e.name," - ")})))),c.a.createElement(f,{params:t}))))},b=Object(o.g)((function(e){return c.a.createElement("div",{className:"navbar"},c.a.createElement("h1",null,"Welcome to the Popular Movies List"),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{onClick:function(){return e.history.push("/")}},"Top Movies"),c.a.createElement("button",{onClick:function(){return e.history.push("/favorites")}},"My favorites")))})),g=function(e){return c.a.createElement(v,{showFavorites:!0,title:"My Favorites Movies"})},h=function(){return c.a.createElement("div",{className:"notfound"},c.a.createElement("p",null,"Not Found"),c.a.createElement(o.a,{to:"/"}))};a(56);var N=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(b,null),c.a.createElement(o.d,null,c.a.createElement(o.b,{exact:!0,path:"/",component:E}),c.a.createElement(o.b,{path:"/movie/:id",component:d}),c.a.createElement(o.b,{path:"/favorites",component:g}),c.a.createElement(o.b,{component:h})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=a(9);l.a.render(c.a.createElement(O.a,null,c.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.b241373a.chunk.js.map