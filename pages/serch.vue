<template>
  <div>
    <v-app>
      <v-content>
        <v-container>
          <v-layout wrap>
            <v-flex >
              <Side></Side>
              <Header></Header>
                <v-card>
                    <v-container fluid>
                    <v-row
                        align="center"
                    >
                        <v-col cols="12">
                        <v-autocomplete
                            v-model="values"
                            :items="items"
                            outlined
                            dense
                            chips
                            small-chips
                            label="Outlined"
                            multiple
                        ></v-autocomplete>
                        </v-col>
                        <v-col cols="12">
                        <v-autocomplete
                            v-model="values"
                            :items="items"
                            dense
                            chips
                            small-chips
                            label="Solo"
                            multiple
                            solo
                        ></v-autocomplete>
                        </v-col>
                        <v-col cols="12">
                        <v-autocomplete
                            v-model="value"
                            :items="items"
                            dense
                            filled
                            label="Filled"
                        ></v-autocomplete>
                        </v-col>
                    </v-row>
                    </v-container>
                </v-card>
                <!-- 検索窓 -->
                <!-- 検索結果 -->
              <Footer></Footer>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

// <script lang="ts">
// import { defineComponent, ref, reactive } from '@vue/composition-api'
// export default defineComponent({
//     setup() {
        
//     }
// })
// </script>

<style>

</style>