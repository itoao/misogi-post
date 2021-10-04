<template>
  <div>
    <v-app>
      <v-content>
        <v-container>
          <v-layout wrap>
            <v-flex >
              <Side></Side>
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from '@vue/composition-api'
import Home from '@/components/Home.vue'
import Side from '@/components/Side.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
  components: {
    Home,
    Side,
    Header,
    Footer,
  },
  // props: {
  //   drawer
  // }
  setup() {
    const drawer = ref(null)
    const supports = reactive([
        'Consulting and suppourt',
        'Discord community',
        'Report a bug',
        'Github issue board',
        'Stack overview'
    ])
    return {
      drawer,
      supports
    }
  }
})
</script>
