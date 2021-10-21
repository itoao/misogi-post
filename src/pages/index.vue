<template>
  <div>
    <v-app>
      <v-main>
        <v-container>
          <v-layout wrap>
            <v-flex>
              <side />
              <header-content />
              <home />
              <footer-content />
            </v-flex>
          </v-layout>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Side from '../components/Side.vue'
import Home from '../components/Home.vue'
import HeaderContent from '../components/Header.vue'
import FooterContent from '../components/Footer.vue'

export default defineComponent({
  components: {
    FooterContent,
    HeaderContent,
    Home,
    Side
  }
})
</script>
