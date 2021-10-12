<template>
  <div>
    <v-app>
      <v-main>
        <v-container>
          <v-layout wrap>
            <v-flex>
              <side />
              <header-content />
              <v-card>
                <v-container fluid>
                  <v-row
                    align="center"
                  >
                    <v-col cols="12">
                      <v-autocomplete
                        v-model="values"
                        chips
                        dense
                        :items="items"
                        label="Outlined"
                        multiple
                        outlined
                        small-chips
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-autocomplete
                        v-model="values"
                        chips
                        dense
                        :items="items"
                        label="Solo"
                        multiple
                        small-chips
                        solo
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-autocomplete
                        v-model="value"
                        dense
                        filled
                        :items="items"
                        label="Filled"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
              <!-- 検索窓 -->
              <!-- 検索結果 -->
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
import Side from '@/components/Side.vue'
import HeaderContent from '@/components/Header.vue'
import FooterContent from '@/components/Footer.vue'
export default defineComponent({
  components: {
    FooterContent,
    HeaderContent,
    Side
  },

  setup () {

  }
})
</script>
