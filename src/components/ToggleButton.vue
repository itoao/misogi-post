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

<<<<<<< HEAD
<script>
=======
<script lang="ts">
>>>>>>> 00d3aed14e2d9d57607d199729d867007f449684
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    miniProp: {
      type: Boolean,
      default: true
    }
  },

  setup (props, context) {
    const toggleButton = () => {
      context.emit('change-button', !props.miniProp)
    }

    return {
      toggleButton
    }
  }
})
</script>
