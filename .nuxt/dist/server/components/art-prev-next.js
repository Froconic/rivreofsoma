exports.ids = [1];
exports.modules = {

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ArtPrevNext.vue?vue&type=template&id=12abb408&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-6 text-center\">","</div>",[(_vm.prev)?_c('NuxtLink',{staticClass:"font-bold text-primary hover:underline",attrs:{"to":{name: 'art-slug', params: { slug: _vm.prev.slug }}}},[_vm._v("\n    Previous: "+_vm._s(_vm.prev.title)+"\n  ")]):_c('span',[_vm._v("End of the line")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-6 text-center\">","</div>",[(_vm.next)?_c('NuxtLink',{staticClass:"font-bold text-primary justify-content-between hover:underline",attrs:{"to":{name: 'art-slug', params: { slug: _vm.next.slug }}}},[_vm._v("Next: "+_vm._s(_vm.next.title)+"\n  ")]):_c('span',[_vm._v("End of the line")])],1)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ArtPrevNext.vue?vue&type=template&id=12abb408&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ArtPrevNext.vue?vue&type=script&lang=js&
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
/* harmony default export */ var ArtPrevNextvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./components/ArtPrevNext.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ArtPrevNextvue_type_script_lang_js_ = (ArtPrevNextvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ArtPrevNext.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ArtPrevNextvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1de558be"
  
)

/* harmony default export */ var ArtPrevNext = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=art-prev-next.js.map