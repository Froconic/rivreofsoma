(window.webpackJsonp=window.webpackJsonp||[]).push([[20,8,10],{301:function(t,e,r){"use strict";r.r(e);var n={props:{social:{type:Object,required:!0}}},l=r(41),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"has-divider"},[r("div",{staticClass:"container pt-3"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-xl-7 col-lg-8 col-md-10"},[r("hr"),t._v(" "),r("div",{staticClass:"d-flex align-items-center"},[r("span",{staticClass:"text-small mr-1"},[t._v("Share this article:")]),t._v(" "),r("div",{staticClass:"d-flex mx-2"},[r("NuxtLink",{staticClass:"btn btn-round btn-primary mx-1",attrs:{to:"/"}},[r("img",{staticClass:"icon icon-sm",attrs:{src:t.social.facebook,alt:"social.facebookAlt"}})]),t._v(" "),r("NuxtLink",{staticClass:"btn btn-round btn-primary mx-1",attrs:{to:"/"}},[r("img",{staticClass:"icon icon-sm",attrs:{src:t.social.instagram,alt:"social.instagramAlt"}})]),t._v(" "),r("NuxtLink",{staticClass:"btn btn-round btn-primary mx-1",attrs:{to:"/"}},[r("img",{staticClass:"icon icon-sm",attrs:{src:t.social.youtube,alt:"social.youtubeAlt"}})])],1)])])])])])])}),[],!1,null,null,null);e.default=component.exports},319:function(t,e,r){var content=r(341);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("083745fe",content,!0,{sourceMap:!1})},322:function(t,e,r){"use strict";r.r(e);var n={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},l=r(41),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-6 text-center"},[t.prev?r("NuxtLink",{staticClass:"font-bold text-primary hover:underline",attrs:{to:{name:"blog-slug",params:{slug:t.prev.slug}}}},[t._v("Previous: "+t._s(t.prev.title)+"\n  ")]):r("span",[t._v("End of the line")])],1),t._v(" "),r("div",{staticClass:"col-6 text-center"},[t.next?r("NuxtLink",{staticClass:"font-bold text-primary hover:underline",attrs:{to:{name:"blog-slug",params:{slug:t.next.slug}}}},[t._v("Next: "+t._s(t.next.title)+"\n  ")]):r("span",[t._v("End of the line")])],1)])])}),[],!1,null,null,null);e.default=component.exports},340:function(t,e,r){"use strict";r(319)},341:function(t,e,r){var n=r(56),l=r(342),c=r(343),o=n(!1),d=l(c);o.push([t.i,".icon.icon-link{background-image:url("+d+");display:inline-block;width:2rem;height:2rem;background-size:2rem 2rem;background-color:none;color:red;fill:red;border-radius:25px;margin:0 10px}",""]),t.exports=o},342:function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},343:function(t,e,r){t.exports=r.p+"img/thunder-circle.6aa1653.svg"},370:function(t,e,r){"use strict";r.r(e);var n=r(28),l=r(22),c=(r(54),{asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,l,article,c,o,d,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,l=t.params,e.next=3,r("articles",l.slug).fetch();case 3:return article=e.sent,e.next=6,r("articles").only(["title","slug"]).sortBy(["createdAt","asc"]).surround(l.slug).fetch();case 6:return c=e.sent,o=Object(n.a)(c,2),d=o[0],v=o[1],e.abrupt("return",{article:article,prev:d,next:v});case 11:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),o=(r(340),r(41)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("section",{staticClass:"bg-black text-light overlay min-vh-100 d-flex flex-column justify-content-end jarallax mb-5",attrs:{"data-jarallax":"","data-speed":"0.5"}},[r("img",{staticClass:"jarallax-img opacity-60",attrs:{src:t.article.img,alt:t.article.alt}}),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-lg-10 col-xl-8"},[r("div",{staticClass:"d-flex justify-content-between align-items-center mb-3"},[r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},t._l(t.article.toc,(function(link){return r("li",{key:link.id,staticClass:"breadcrumb-item"},[r("NuxtLink",{attrs:{to:"#${link.id}"}},[t._v(t._s(link.text))])],1)})),0)]),t._v(" "),r("span",{staticClass:"badge badge-primary"},[r("img",{staticClass:"icon bg-primary",attrs:{src:t.article.icon,alt:"heart interface icon"}}),t._v("21")])]),t._v(" "),r("h1",[t._v(t._s(t.article.title))]),t._v(" "),r("div",{staticClass:"d-flex align-items-center mb-3"},[r("NuxtLink",{attrs:{to:"/blog/author/${author.name}"}},[r("img",{staticClass:"avatar mr-2",attrs:{src:t.article.avatar,alt:t.article.avatarAlt}})]),t._v(" "),r("div",[r("div",[t._v("by "),r("NuxtLink",{attrs:{to:"/about"}},[t._v(t._s(t.article.author.name))])],1),t._v(" "),r("div",{staticClass:"text-small text-muted"},[t._v(t._s(t.formatDate(t.article.updatedAt)))])])],1),t._v(" "),r("p",{staticClass:"lead"},[t._v(t._s(t.article.description))])])])])]),t._v(" "),r("section",{staticClass:"py-0 px-5",attrs:{"data-reading-position":""}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-xl-7 col-lg-8 col-md-10"},[r("nuxt-content",{attrs:{document:t.article}}),t._v(" "),r("Social",{attrs:{social:t.article.social}}),t._v(" "),r("PrevNext",{attrs:{prev:t.prev,next:t.next}})],1)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Social:r(301).default,PrevNext:r(322).default})}}]);