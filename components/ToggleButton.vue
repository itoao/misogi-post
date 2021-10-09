<template>
  <div>
    <v-btn
      icon
      @click.stop="toggleButton"
    >
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    miniProp: {
      type: Boolean,
      default: true
    }
  },

  setup (context) {
    const toggleButton = () => {
      context.emit('change-button', props.miniProp = !props.miniProp)
    }

    return {
      toggleButton
    }
  }
})
</script>
