(window.webpackJsonp=window.webpackJsonp||[]).push([[22,4],{300:function(t,e,r){"use strict";r.r(e);var c={props:{category:{type:Object,required:!0}}},n=r(41),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row justify-content-center mb-4"},[r("div",{staticClass:"nav mb-3 "},[r("ul",{staticClass:"list-unstyled"},t._l(t.articles,(function(article){return r("li",{key:article.category,staticClass:"nav-item"},[r("NuxtLink",{staticClass:"nav-link",attrs:{to:"/blog/category/${article.category}"}},[t._v("\n      "+t._s(article.category)+"\n      ")])],1)})),0),t._v(" "),r("li",{staticClass:"nav-item"},[r("NuxtLink",{staticClass:"nav-link",attrs:{to:"/blog/category/${article.category}"}},[t._v("\n      Test\n      ")])],1)]),t._v(" "),r("div",{staticClass:"col col-md-auto "})])}),[],!1,null,null,null);e.default=component.exports},368:function(t,e,r){"use strict";r.r(e);var c=r(22),n=(r(54),{asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,c=t.params,e.next=3,r("articles",c.slug).where("article.category").sortBy("createdAt","asc").fetch();case 3:return n=e.sent,e.abrupt("return",{articles:n});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),l=r(41),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("section",{staticClass:"bg-black"},[r("div",{staticClass:"container"},[r("Search"),t._v(" "),r("Category")],1),t._v(" "),r("div",{staticClass:"row"},t._l(t.articles,(function(article){return r("div",{key:article.category,staticClass:"col-md-6 col-lg-4"},[r("NuxtLink",{staticClass:"card card-body justify-content-between",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[r("div",{staticClass:"text-small d-flex"},[r("div",{staticClass:"mr-2"},[r("NuxtLink",{attrs:{to:"/"}},[t._v(t._s(article.category))]),t._v(" "),r("span",{staticClass:"text-muted"},[t._v(t._s(t.formatDate(article.createdAt)))])],1)]),t._v(" "),r("img",{attrs:{src:article.cover,alt:""}}),t._v(" "),r("div",[r("h4",[t._v(t._s(article.title))]),t._v(" "),r("p",{staticClass:"flex-grow"},[t._v(" "+t._s(article.description))]),t._v(" "),r("div",{staticClass:"d-flex align-items-center mt-3"},[r("span",{staticClass:"text-small text-muted"},[t._v("by ")]),t._v(" "),r("span",{staticClass:"text-small ml-1"},[t._v(" "+t._s(article.author))])])])])],1)})),0)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"has-divider text-light bg-primary",attrs:{"data-speed":"0.5","data-overlay":""}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-center text-center"},[r("div",{staticClass:"col-xl-5 col-lg-6 col-md-8"},[r("h1",{staticClass:"display-4 text-light"},[t._v("Blog")]),t._v(" "),r("p",{staticClass:"lead mb-0"},[t._v("Thoughts on "),r("br"),t._v("Magic | Mystery | Mysticism")])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Search:r(218).default,Category:r(300).default})}}]);