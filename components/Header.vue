<template>
  <div>
    <v-app-bar color="primary" dark app>
        <!-- <v-app-bar-nav-icon @clic.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
        <v-toolbar-title>掲示板</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
        <v-btn text>For Enterprise</v-btn>
        <v-menu offset-y>
            <template v-slot:activator="{on}">
            <v-btn v-on="on" text>Support</v-btn>
            </template>
            <v-list>
            <v-list-item>
                <v-list-item-content>
                <v-list-item-title>Consulting and support</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                <v-list-item-title>Discord community</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            </v-list>
        </v-menu>
        </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
import { defineComponent, reactive } from '@vue/composition-api'

export default defineComponent({
    setup() {
        const supports = reactive([
            'Consulting and suppourt',
            'Discord community',
            'Report a bug',
            'Github issue board',
            'Stack overview'
        ])
        return {
            supports
        }
    }
})
</script>

<style>

</style>