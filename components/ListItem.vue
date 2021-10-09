<template>
  <div>
    <slot name="title" />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    menu: {
      type: String,
      default: 'abc'
    }
  },

  setup () {

  }
})
</script>
