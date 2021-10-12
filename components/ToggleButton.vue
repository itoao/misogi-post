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
    // const state = computed(() => props.miniProp)
    // computedでラップ props.miniPropを算出プロパティにする -> 値が動的になり、依存関係に基づいてキャッシュされる
    const toggleButton = () => {
      // console.log('state', state.value)
      context.emit('change-button', !props.miniProp)
      // propsを直接変更するのを避ける -> data, computedを使用する
    }

    // const toggleButtonComputed = computed(() => {
    //   context.emit('change-button', props.miniProp = !props.miniProp)
    // })

    // const toggleButtonComputed = computed(() => {
    //   return props.miniProp = !props.miniProp
    // })
    // watch(toggleButton, () => {
    //   console.log('watch')
    //   context.emit('change-button', !state.value)
    // })

    // watch(state, () => {
    //   return props.miniProp
    // })
    // [watch] 無限にtrue, falseが切り替わる

    return {
      toggleButton
      // toggleButtonComputed
    }
  }
})
</script>
