import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e96ff70c = () => interopDefault(import('../src/pages/about.vue' /* webpackChunkName: "pages/about" */))
const _60bae20b = () => interopDefault(import('../src/pages/search.vue' /* webpackChunkName: "pages/search" */))
const _a1e4949c = () => interopDefault(import('../src/pages/serch.vue' /* webpackChunkName: "pages/serch" */))
const _aa004182 = () => interopDefault(import('../src/pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _e96ff70c,
    name: "about"
  }, {
    path: "/search",
    component: _60bae20b,
    name: "search"
  }, {
    path: "/serch",
    component: _a1e4949c,
    name: "serch"
  }, {
    path: "/",
    component: _aa004182,
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
