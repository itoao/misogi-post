export { default as AppFooter } from '../../src/components/AppFooter.vue'
export { default as AppHeader } from '../../src/components/AppHeader.vue'
export { default as Home } from '../../src/components/Home.vue'
export { default as ListItem } from '../../src/components/ListItem.vue'
export { default as Modal } from '../../src/components/Modal.vue'
export { default as Side } from '../../src/components/Side.vue'
export { default as ToggleButton } from '../../src/components/ToggleButton.vue'

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
