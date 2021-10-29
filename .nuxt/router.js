import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c5c5a074 = () => interopDefault(import('..\\pages\\About.vue' /* webpackChunkName: "pages/About" */))
const _08b3bfdc = () => interopDefault(import('..\\pages\\Art.vue' /* webpackChunkName: "pages/Art" */))
const _6b868d78 = () => interopDefault(import('..\\pages\\ArtSingle.vue' /* webpackChunkName: "pages/ArtSingle" */))
const _32ba50f9 = () => interopDefault(import('..\\pages\\Blog.vue' /* webpackChunkName: "pages/Blog" */))
const _3d6740a1 = () => interopDefault(import('..\\pages\\BlogSingle.vue' /* webpackChunkName: "pages/BlogSingle" */))
const _65e5aace = () => interopDefault(import('..\\pages\\Contact.vue' /* webpackChunkName: "pages/Contact" */))
const _5c4516c8 = () => interopDefault(import('..\\pages\\Support.vue' /* webpackChunkName: "pages/Support" */))
const _8d4e4514 = () => interopDefault(import('..\\pages\\blog\\author\\_author.vue' /* webpackChunkName: "pages/blog/author/_author" */))
const _1029b9d4 = () => interopDefault(import('..\\pages\\blog\\category\\_category.vue' /* webpackChunkName: "pages/blog/category/_category" */))
const _4b825084 = () => interopDefault(import('..\\pages\\art\\_slug.vue' /* webpackChunkName: "pages/art/_slug" */))
const _67cd5f7e = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _4562eaab = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _c5c5a074,
    name: "About"
  }, {
    path: "/Art",
    component: _08b3bfdc,
    name: "Art"
  }, {
    path: "/ArtSingle",
    component: _6b868d78,
    name: "ArtSingle"
  }, {
    path: "/Blog",
    component: _32ba50f9,
    name: "Blog"
  }, {
    path: "/BlogSingle",
    component: _3d6740a1,
    name: "BlogSingle"
  }, {
    path: "/Contact",
    component: _65e5aace,
    name: "Contact"
  }, {
    path: "/Support",
    component: _5c4516c8,
    name: "Support"
  }, {
    path: "/blog/author/:author?",
    component: _8d4e4514,
    name: "blog-author-author"
  }, {
    path: "/blog/category/:category?",
    component: _1029b9d4,
    name: "blog-category-category"
  }, {
    path: "/art/:slug?",
    component: _4b825084,
    name: "art-slug"
  }, {
    path: "/blog/:slug?",
    component: _67cd5f7e,
    name: "blog-slug"
  }, {
    path: "/",
    component: _4562eaab,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
