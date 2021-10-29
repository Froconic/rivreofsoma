export const ArtPrevNext = () => import('../..\\components\\ArtPrevNext.vue' /* webpackChunkName: "components/art-prev-next" */).then(c => wrapFunctional(c.default || c))
export const Author = () => import('../..\\components\\Author.vue' /* webpackChunkName: "components/author" */).then(c => wrapFunctional(c.default || c))
export const Category = () => import('../..\\components\\Category.vue' /* webpackChunkName: "components/category" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Hero = () => import('../..\\components\\Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c))
export const HomeFooter = () => import('../..\\components\\HomeFooter.vue' /* webpackChunkName: "components/home-footer" */).then(c => wrapFunctional(c.default || c))
export const Navbar = () => import('../..\\components\\Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const PrevNext = () => import('../..\\components\\PrevNext.vue' /* webpackChunkName: "components/prev-next" */).then(c => wrapFunctional(c.default || c))
export const Related = () => import('../..\\components\\Related.vue' /* webpackChunkName: "components/related" */).then(c => wrapFunctional(c.default || c))
export const Search = () => import('../..\\components\\Search.vue' /* webpackChunkName: "components/search" */).then(c => wrapFunctional(c.default || c))
export const Social = () => import('../..\\components\\Social.vue' /* webpackChunkName: "components/social" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../..\\components\\Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
