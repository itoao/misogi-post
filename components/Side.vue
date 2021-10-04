<template>
    <div>
        <v-navigation-drawer app v-model="drawer" expand-on-hover>
                  <v-list-item>
                    <v-list-item-title class="title">
                    </v-list-item-title>
                    <v-btn icon>
                      <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>
                  </v-list-item>
                  <v-divider />
                  <v-list nav>
                    <v-list-item v-for="menu in menus" :key="menu.title" :to="menu.url">
                      <v-list-item-icon>
                        <v-icon>{{ menu.icon }}</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>{{ menu.title }}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-navigation-drawer>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from '@vue/composition-api'

export default defineComponent({
    setup () {
        const drawer = ref(null)
        const menus = reactive([
            { title: 'Index', icon: 'mdi-web', url: '/' },
            { title: 'Home', icon: 'mdi-home', url: '/home' },
            { title: 'Serch', icon: 'mdi-text-box-search', url: 'serch' },
            { title: 'About', icon: 'mdi-information-variant', url: '/about' },
        ])
        return {
            drawer,
            menus
        }
    }
})
</script>

<style>

</style>