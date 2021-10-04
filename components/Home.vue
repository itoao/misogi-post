<template>
  <div>
      <!-- <h1>あなたの禊</h1> -->
      <v-text-field
        v-model="$store.state.form.content"
        label="禊を開始する"
        placeholder="ここに入力してください"
        outlined
        append-icon="mdi-check-bold"
        @keydown="onEnter"
        @click:append="createPost"
      ></v-text-field>
      <h2>禊たち</h2>
      <v-card
        v-for="(item, index) in $store.state.items" :key="index"
        outlined
        elevation="9">
        <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title>{{ $store.state.form.content }}</v-list-item-title>
        </v-list-item-content>
        </v-list-item>
      </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, useStore } from '@nuxtjs/composition-api'
// import Observable from 'zen-observable'
// import { GraphQLResult } from '@aws-amplify/api-graphql'
import { API, graphqlOperation } from "aws-amplify"
import { onCreatePost } from "~/src/graphql/subscriptions"
// v-for="item in items" :key=item.content

// form.content -> あなたの投稿 -> みんなの投稿
// items -> みんなの投稿一覧

export default defineComponent({
    setup () {
      const store = useStore();
      const createPost = () => {
        store.dispatch('createPostAction')
      }

      const onEnter = (e: KeyboardEvent) => {
        if(e.keyCode !== 13) return
          createPost()
      }
      return {
        createPost,
        onEnter,
      }
    },
    created () {
      this.$store.dispatch('getPostListAction')
      this.subscribe()
    },
    methods: {
      // 送信して保存された内容がリアルタイムに画面に反映されるようにする
      subscribe(): void {
        API.graphql(
          graphqlOperation(onCreatePost)
        ).subscribe({
          next: (e: HTMLInputElement) => {
            // コメントが送信されて追加された際、送信内容を一覧に追加
            const post = e.value.data.onCreatePost // データを読み込み
            if(this.$store.state.items.some((item: string) => item.content === post.content)) return // すでに表示されているデータは無視
            // もしitems配列に、itemのcontentとpostのcontent（？）が重複して存在していたら終了
            this.$store.state.items = [...this.$store.state.items, post] // 新しいデータを追加
          }
        })
      },
    }
})

</script>

<style>

</style>
