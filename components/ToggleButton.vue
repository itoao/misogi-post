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

<script lang="ts">
import { defineComponent, computed, watch } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    miniProp: {
      type: Boolean,
      default: true
    }
  },

  setup (props, context) {
    const state = computed(() => props.miniProp) // computedでラップ
    const toggleButton = () => {
      console.log('state', state.value)
      context.emit('change-button', !state.value)
      // propsを直接変更するのを避ける -> data, computedを使用する
    }

    // const toggleButtonComputed = computed(() => {
    //   context.emit('change-button', props.miniProp = !props.miniProp)
    // })

    // const toggleButtonComputed = computed(() => {
    //   return props.miniProp = !props.miniProp
    // })
    watch(toggleButton, () => {
      context.emit('change-button', !state.value)
    })

    return {
      toggleButton
      // toggleButtonComputed
    }
  }
})
</script>
