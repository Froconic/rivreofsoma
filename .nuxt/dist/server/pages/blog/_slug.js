exports.ids = [19,7,9];
exports.modules = {

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_slug.vue?vue&type=template&id=6c825334&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',[_vm._ssrNode("<section data-jarallax data-speed=\"0.5\" class=\"bg-black text-light overlay min-vh-100 d-flex flex-column justify-content-end jarallax mb-5\">","</section>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.article.img))+(_vm._ssrAttr("alt",_vm.article.alt))+" class=\"jarallax-img opacity-60\"> "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row justify-content-center\">","</div>",[_vm._ssrNode("<div class=\"col-lg-10 col-xl-8\">","</div>",[_vm._ssrNode("<div class=\"d-flex justify-content-between align-items-center mb-3\">","</div>",[_vm._ssrNode("<nav aria-label=\"breadcrumb\">","</nav>",[_vm._ssrNode("<ol class=\"breadcrumb\">","</ol>",_vm._l((_vm.article.toc),function(link){return _vm._ssrNode("<li class=\"breadcrumb-item\">","</li>",[_c('NuxtLink',{attrs:{"to":'#${link.id}'}},[_vm._v(_vm._s(link.text))])],1)}),0)]),_vm._ssrNode(" <span class=\"badge badge-primary\"><img"+(_vm._ssrAttr("src",_vm.article.icon))+" alt=\"heart interface icon\" class=\"icon bg-primary\">21</span>")],2),_vm._ssrNode(" <h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_vm._ssrNode("<div class=\"d-flex align-items-center mb-3\">","</div>",[_c('NuxtLink',{attrs:{"to":'/blog/author/${author.name}'}},[_c('img',{staticClass:"avatar mr-2",attrs:{"src":_vm.article.avatar,"alt":_vm.article.avatarAlt}})]),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("by "),_c('NuxtLink',{attrs:{"to":'/about'}},[_vm._v(_vm._s(_vm.article.author.name))])],2),_vm._ssrNode(" <div class=\"text-small text-muted\">"+_vm._ssrEscape(_vm._s(_vm.formatDate(_vm.article.updatedAt)))+"</div>")],2)],2),_vm._ssrNode(" <p class=\"lead\">"+_vm._ssrEscape(_vm._s(_vm.article.description))+"</p>")],2)])])],2),_vm._ssrNode(" "),_vm._ssrNode("<section data-reading-position class=\"py-0 px-5\">","</section>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row justify-content-center\">","</div>",[_vm._ssrNode("<div class=\"col-xl-7 col-lg-8 col-md-10\">","</div>",[_c('nuxt-content',{attrs:{"document":_vm.article}}),_vm._ssrNode(" "),_c('Social',{attrs:{"social":_vm.article.social}}),_vm._ssrNode(" "),_c('PrevNext',{attrs:{"prev":_vm.prev,"next":_vm.next}})],2)])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog/_slug.vue?vue&type=template&id=6c825334&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_slug.vue?vue&type=script&lang=js&
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
//
//
//
/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  async asyncData({
    $content,
    params
  }) {
    const article = await $content('articles', params.slug).fetch();
    const [prev, next] = await $content('articles').only(['title', 'slug']).sortBy(['createdAt', 'asc']).surround(params.slug).fetch();
    return {
      article,
      prev,
      next
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
// CONCATENATED MODULE: ./pages/blog/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/blog/_slug.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(90)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "72a46f03"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Social: __webpack_require__(51).default,PrevNext: __webpack_require__(72).default})


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Social.vue?vue&type=template&id=cac48244&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section class=\"has-divider\">","</section>",[_vm._ssrNode("<div class=\"container pt-3\">","</div>",[_vm._ssrNode("<div class=\"row justify-content-center\">","</div>",[_vm._ssrNode("<div class=\"col-xl-7 col-lg-8 col-md-10\">","</div>",[_vm._ssrNode("<hr> "),_vm._ssrNode("<div class=\"d-flex align-items-center\">","</div>",[_vm._ssrNode("<span class=\"text-small mr-1\">Share this article:</span> "),_vm._ssrNode("<div class=\"d-flex mx-2\">","</div>",[_c('NuxtLink',{staticClass:"btn btn-round btn-primary mx-1",attrs:{"to":'/'}},[_c('img',{staticClass:"icon icon-sm",attrs:{"src":_vm.social.facebook,"alt":"social.facebookAlt"}})]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"btn btn-round btn-primary mx-1",attrs:{"to":'/'}},[_c('img',{staticClass:"icon icon-sm",attrs:{"src":_vm.social.instagram,"alt":"social.instagramAlt"}})]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"btn btn-round btn-primary mx-1",attrs:{"to":'/'}},[_c('img',{staticClass:"icon icon-sm",attrs:{"src":_vm.social.youtube,"alt":"social.youtubeAlt"}})])],2)],2)],2)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Social.vue?vue&type=template&id=cac48244&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Social.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Socialvue_type_script_lang_js_ = ({
  props: {
    social: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/Social.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Socialvue_type_script_lang_js_ = (Socialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Social.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Socialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a03fe3f0"
  
)

/* harmony default export */ var Social = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(91);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("083745fe", content, true, context)
};

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PrevNext.vue?vue&type=template&id=bf4220c2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid"},[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-6 text-center\">","</div>",[(_vm.prev)?_c('NuxtLink',{staticClass:"font-bold text-primary hover:underline",attrs:{"to":{name: 'blog-slug', params: { slug: _vm.prev.slug }}}},[_vm._v("Previous: "+_vm._s(_vm.prev.title)+"\n  ")]):_c('span',[_vm._v("End of the line")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-6 text-center\">","</div>",[(_vm.next)?_c('NuxtLink',{staticClass:"font-bold text-primary hover:underline",attrs:{"to":{name: 'blog-slug', params: { slug:_vm.next.slug }}}},[_vm._v("Next: "+_vm._s(_vm.next.title)+"\n  ")]):_c('span',[_vm._v("End of the line")])],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PrevNext.vue?vue&type=template&id=bf4220c2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PrevNext.vue?vue&type=script&lang=js&
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
/* harmony default export */ var PrevNextvue_type_script_lang_js_ = ({
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
});
// CONCATENATED MODULE: ./components/PrevNext.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PrevNextvue_type_script_lang_js_ = (PrevNextvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PrevNext.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PrevNextvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "b47a45be"
  
)

/* harmony default export */ var PrevNext = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(92);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(93);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".icon.icon-link{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");display:inline-block;width:2rem;height:2rem;background-size:2rem 2rem;background-color:none;color:red;fill:red;border-radius:25px;margin:0 10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/thunder-circle.6aa1653.svg";

/***/ })

};;
//# sourceMappingURL=_slug.js.map