<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
    >
      <v-list-item class="px-2">
        <v-list-item-title />

        <!--  ボタン部分をコンポーネントに切り出し  -->
        <toggle-button
          :mini-prop="mini"
          @change-button="mini = $event"
        />
      </v-list-item>

      <v-divider />

      <!--  リスト部分をコンポーネントに切り出し  -->
      <list-item>
        <template #title>
          <v-list dense>
            <v-list-item
              v-for="menu in menus"
              :key="menu.title"
              :to="menu.url"
            >
              <v-list-item-icon>
                <v-icon>{{ menu.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ menu.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </template>
      </list-item>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from '@vue/composition-api'
import ListItem from '~/components/ListItem.vue'
import ToggleButton from '~/components/ToggleButton.vue'

export default defineComponent({
  components: {
    ListItem,
    ToggleButton
  },

  setup () {
    const drawer = ref(true)
    const mini = ref(true)
    // const changeButton = () => {
    //   mini.value = !mini.value
    // }
    const menus = reactive([
      {
        icon: 'mdi-web',
        title: 'Index',
        url: '/'
      },
      {
        icon: 'mdi-home',
        title: 'Home',
        url: '/home'
      },
      {
        icon: 'mdi-text-box-search',
        title: 'Serch',
        url: '/serch'
      },
      {
        icon: 'mdi-information-variant',
        title: 'About',
        url: '/about'
      }
    ])

    return {
      // changeButton,
      drawer,
      menus,
      mini
    }
  }
})
</script>

<style>

</style>
