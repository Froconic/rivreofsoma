exports.ids = [12];
exports.modules = {

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Art.vue?vue&type=template&id=c73e463e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"art"},[_vm._ssrNode("<section class=\"bg-primary-2 has-divider text-dark\"><div class=\"container pb-6\"><div class=\"row justify-content-center text-center\"><div class=\"col-xl-8 col-lg-9 col-md-10\"><h2 class=\"display-3 mb-5\">Art </h2> <p class=\"lead\">Action <br> Reaction <br> Translation</p></div></div></div></section> "),_vm._ssrNode("<section class=\"bg-black text-dark pt-5\">","</section>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row justify-content-center mb-4\">","</div>",[_vm._ssrNode("<div class=\"col col-md-auto\">","</div>",[_c('Search')],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",_vm._l((_vm.artworks),function(artwork){return _vm._ssrNode("<div class=\"col-sm-6 col-lg-4 mb-4\">","</div>",[_c('NuxtLink',{attrs:{"to":{name:'art-slug',params: { slug: artwork.slug }}}},[_c('img',{staticClass:"rounded mb-3",attrs:{"src":artwork.img,"alt":artwork.alt}}),_vm._v(" "),_c('h4',{staticClass:"mb-1"},[_vm._v(" "+_vm._s(artwork.title)+" ")])])],1)}),0)],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Art.vue?vue&type=template&id=c73e463e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Art.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Artvue_type_script_lang_js_ = ({
  async asyncData({
    $content,
    params
  }) {
    const artworks = await $content('artworks').only(['title', 'description', 'category', 'img', 'cover', 'slug', 'createdAt']).sortBy('createdAt', 'asc').fetch();
    return {
      artworks
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
// CONCATENATED MODULE: ./pages/Art.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Artvue_type_script_lang_js_ = (Artvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/Art.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Artvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "33e1ea20"
  
)

/* harmony default export */ var Art = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Search: __webpack_require__(18).default})


/***/ })

};;
//# sourceMappingURL=Art.js.map