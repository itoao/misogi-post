<template>
  <div>
    <!-- <h1>あなたの禊</h1> -->
    <!-- v-model付与 -->
    <v-text-field
      v-model="writtenText"
      append-icon="mdi-check-bold"
      label="禊を開始する"
      outlined
      placeholder="ここに入力してください"
      @click="onClickCreatePost"
    />
    <h2>禊たち</h2>
    <v-card
      v-for="(item, index) in $store.state.items"
      :key="index"
      elevation="9"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title>{{ item.comment }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@nuxtjs/composition-api'
import { GraphQLResult } from '@aws-amplify/api-graphql/lib'
import { API, graphqlOperation } from 'aws-amplify'
import { createPost } from '~/store/post/index'

// form.comment -> あなたの投稿 -> みんなの投稿
// items -> みんなの投稿一覧

import { useAccessor } from '~/lib/useAccessor'

export default defineComponent({
  setup () {
    const accessor = useAccessor()
    const postsStore = accessor.post

    const writtenText = ref("")
    const onClickCreatePost = async() => {
      await postsStore.createPost({
        input: {
          id: 316237, // 書いたアカウントのID
          content: writtenText.value // 書かれた内容
        },
     })

    }

    return {
      writtenText,
      onClickCreatePost,
    }
  },

  // methods: {
  //   // 送信して保存された内容がリアルタイムに画面に反映されるようにする
  //   subscribe (): void {
  //     API.graphql(
  //       graphqlOperation(onCreatePost)
  //     ).subscribe({
  //       error: (error: GraphQLResult) => console.warn(error),
  //       // エラーハンドリングをし、TypeErrorの解消図る *consoleがlintにはじかれる
  //       next: (e: HTMLInputElement) => {
  //         // コメントが送信されて追加された際、送信内容を一覧に追加
  //         const post = e.value.data.onCreatePost // データを読み込み
  //         let itemState = this.$store.state.items

  //         if (this.$store.state.items.some((item: string) => item.comment as string === post.comment)) { return }// すでに表示されているデータは無視
  //         // もしitems配列に、itemのcommentとpostのcomment（？）が重複して存在していたら終了
  //         itemState = [...itemState, post] // 新しいデータを追加
  //         // gettersでstateを変更したほうが良いかも
  //       }
  //     }) as Promise<GraphQLResult<object>>
  //   }
  // }
})
</script>

<style>
</style>
