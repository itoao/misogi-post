<template>
  <amplify-authenticator>
    <div>
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
    </div>
  </amplify-authenticator>
</template>
