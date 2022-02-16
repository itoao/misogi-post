<template>
  <div>
    <v-navigation-drawer
      app
      clipped-left
      :mini-variant.sync="mini"
      permanent
    >
      <v-list-item class="px-2">
        <!--  ボタン部分をコンポーネントに切り出し、propsとemitで連携させる  -->
        <toggle-button
          :mini-prop="mini"
          @change-button="mini = $event"
        />
      </v-list-item>

      <v-divider />

      <!--  リスト部分をコンポーネントに切り出し、slotで値を子に渡す -->
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
      <!-- list-item(アイコン) のクリック時にもドロワーが開く。閉じはしない -->
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from '@vue/composition-api'
import ListItem from '../components/ListItem.vue'
import ToggleButton from '../components/ToggleButton.vue'

export default defineComponent({
  components: {
    ListItem,
    ToggleButton
  },

  setup () {
    const mini = ref(true) // 閉じた状態
    const menus = reactive([
      {
        icon: 'mdi-web',
        title: 'Index',
        url: '/'
      },
      {
        icon: 'mdi-text-box-search',
        title: 'Search',
        url: '/search'
      },
      {
        icon: 'mdi-information-variant',
        title: 'About',
        url: '/about'
      }
    ])

    return {
      menus,
      mini
    }
  }
})
</script>

<style>

</style>
