<template>
  <div>
    <v-app-bar
      app
      color="blue-grey lighten-1"
      dark
    >
      <!-- <v-app-bar-nav-icon @clic.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-toolbar-title>misogi</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn text>
          For Enterprise
        </v-btn>
        <v-menu offset-y>
          <template
            #activator="{on}"
          >
            <v-btn
              text
              v-on="on"
            >
              Support
            </v-btn>
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
  setup () {
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
