<template>
  <div>
    <Home></Home>
    <Side></Side>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import Home from '@/components/Home'
import Side from '@/components/Side'

export default defineComponent({
  components : {
    Home,
    Side
  }
})
</script>
