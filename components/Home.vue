<template>
  <div>
    <!-- <h1>あなたの禊</h1> -->
    <v-text-field
      v-model="textFieldComputed"
      append-icon="mdi-check-bold"
      label="禊を開始する"
      outlined
      placeholder="ここに入力してください"
      @click:append:keydown.enter="createPostAction"
      @keydown="onEnter"
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
import { defineComponent, useStore, computed } from '@nuxtjs/composition-api'
// import Observable from 'zen-observable'
import { GraphQLResult } from '@aws-amplify/api-graphql/lib'
import { API, graphqlOperation } from 'aws-amplify'
import { onCreatePost } from '~/src/graphql/subscriptions'
// v-for="item in items" :key=item.comment

// form.comment -> あなたの投稿 -> みんなの投稿
// items -> みんなの投稿一覧

export default defineComponent({
  setup () {
    const store = useStore()
    const textFieldComputed = computed({
      // v-text-field、v-modelで直接stateを変更せず、算出プロパティの中で処理する
      get: () => store.dispatch('getPostListAction'), // 入力の取得
      set: () => store.dispatch('createPostAction') // 更新し空に
    })
    const createPost = () => {
      store.dispatch('createPostAction')
    }

    const onEnter = (e: KeyboardEvent) => {
      if (e.keyCode !== 13) { return }
      createPost()
    }

    return {
      createPost,
      onEnter,
      textFieldComputed
    }
  },

  created () {
    this.$store.dispatch('getPostListAction')
    this.subscribe()
  },

  methods: {
    // 送信して保存された内容がリアルタイムに画面に反映されるようにする
    subscribe (): void {
      API.graphql(
        graphqlOperation(onCreatePost)
      ).subscribe({
        error: (error: GraphQLResult) => console.warn(error),
        // エラーハンドリングをし、TypeErrorの解消図る *consoleがlintにはじかれる
        next: (e: HTMLInputElement) => {
          // コメントが送信されて追加された際、送信内容を一覧に追加
          const post = e.value.data.onCreatePost // データを読み込み

          if (this.$store.state.items.some((item: string) => item.comment as string === post.comment)) { return }// すでに表示されているデータは無視
          // もしitems配列に、itemのcommentとpostのcomment（？）が重複して存在していたら終了
          this.$store.state.items = [...this.$store.state.items, post] // 新しいデータを追加
        }
      }) as Promise<GraphQLResult<object>>
    }
  }
})
</script>

<style>

</style>
