exports.ids = [14,3];
exports.modules = {

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Blog.vue?vue&type=template&id=5044ef31&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blog"},[_vm._ssrNode("<section data-speed=\"0.5\" data-overlay class=\"has-divider text-light bg-primary\"><div class=\"container\"><div class=\"row justify-content-center text-center\"><div class=\"col-xl-5 col-lg-6 col-md-8\"><h1 class=\"display-4 text-light\">Blog</h1> <p class=\"lead mb-0\">Thoughts on <br>Magic | Mystery | Mysticism</p></div></div></div></section> "),_vm._ssrNode("<section class=\"bg-black blog-posts\">","</section>",[_vm._ssrNode("<div class=\"container\">","</div>",[_c('Search'),_vm._ssrNode(" "),_c('Category',{attrs:{"category":_vm.category}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row mb-4\">","</div>",_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"col-md-6 col-lg-4\">","</div>",[_c('NuxtLink',{staticClass:"card card-body justify-content-between",attrs:{"to":{name: 'blog-slug', params: { slug: article.slug }}}},[_c('div',{staticClass:"text-small d-flex"},[_c('div',{staticClass:"mr-2"},[_c('NuxtLink',{attrs:{"to":"/"}},[_vm._v(_vm._s(article.category))]),_vm._v(" "),_c('span',{staticClass:"text-muted"},[_vm._v(_vm._s(_vm.formatDate(article.createdAt)))]),_vm._v(" "),_c('span',{staticClass:"badge badge-primary-alt text-primary"},[_c('img',{attrs:{"src":__webpack_require__(46),"alt":""}})])],1)]),_vm._v(" "),_c('img',{attrs:{"src":article.cover,"alt":""}}),_vm._v(" "),_c('div',[_c('h4',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',{staticClass:"flex-grow"},[_vm._v(" "+_vm._s(article.description))]),_vm._v(" "),_c('div',{staticClass:"d-flex align-items-center mt-3"},[_c('span',{staticClass:"text-small text-muted"},[_vm._v("by ")]),_vm._v(" "),_c('span',{staticClass:"text-small ml-1"},[_vm._v(" "+_vm._s(article.author))])])])])],1)}),0)],2)]),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Blog.vue?vue&type=template&id=5044ef31&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Blog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Blogvue_type_script_lang_js_ = ({
  async asyncData({
    $content,
    params
  }) {
    const articles = await $content('articles').only(['title', 'description', 'category', 'img', 'cover', 'slug', 'author', 'createdAt']).sortBy('createdAt', 'asc').fetch();
    return {
      articles
    };
  },

  methods: {
    formatDate(date) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      return new Date(date).toLocaleDateString('en', options);
    }

  }
});
// CONCATENATED MODULE: ./pages/Blog.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Blogvue_type_script_lang_js_ = (Blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/Blog.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6d516f35"
  
)

/* harmony default export */ var Blog = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Search: __webpack_require__(18).default,Category: __webpack_require__(50).default,Footer: __webpack_require__(9).default})


/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNi41IDVDMTQuODkwNSA1IDEzLjAwODIgNi44MjQ2MyAxMiA4QzEwLjk5MTggNi44MjQ2MyA5LjEwOTUgNSA3LjUgNUM0LjY1MSA1IDMgNy4yMjIxOCAzIDEwLjA1MDRDMyAxMy4xODM1IDYgMTYuNSAxMiAyMEMxOCAxNi41IDIxIDEzLjI1IDIxIDEwLjI1QzIxIDcuNDIxNzcgMTkuMzQ5IDUgMTYuNSA1WiIgZmlsbD0iIzIxMjUyOSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Category.vue?vue&type=template&id=b41ce93a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row justify-content-center mb-4"},[_vm._ssrNode("<div class=\"nav mb-3 \">","</div>",[_vm._ssrNode("<ul class=\"list-unstyled\">","</ul>",_vm._l((_vm.articles),function(article){return _vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('NuxtLink',{staticClass:"nav-link",attrs:{"to":'/blog/category/${article.category}'}},[_vm._v("\n      "+_vm._s(article.category)+"\n      ")])],1)}),0),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('NuxtLink',{staticClass:"nav-link",attrs:{"to":'/blog/category/${article.category}'}},[_vm._v("\n      Test\n      ")])],1)],2),_vm._ssrNode(" <div class=\"col col-md-auto \"></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Category.vue?vue&type=template&id=b41ce93a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Category.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Categoryvue_type_script_lang_js_ = ({
  props: {
    category: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/Category.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Categoryvue_type_script_lang_js_ = (Categoryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Category.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Categoryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0254ee59"
  
)

/* harmony default export */ var Category = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=Blog.js.map