import { reactive, Ref, toRefs } from '@nuxtjs/composition-api'
import { API } from 'aws-amplify'
import { State, Actions, IActions, IMutations } from '../store/post/type'
import { listPosts } from '../graphql/queries'
import { createPost } from '../graphql/mutations'

// stateにitemsをおきたい
declare type Refs<Data> = {
    [K in keyof Data]: Data[K] extends Ref<infer V> ? Ref<V> : Ref<Data[K]>;
// Dataジェネリクス（State） 'のキーのどれか：Stateのキーが、Ref<infer V>
// infer 部分的な型抽出
};

export const state = (): Refs<State> => {
  return toRefs(reactive<State>({
    form: {
      comment: ''
    },
    items: [],
    logoutBtn: false,
    username: ''
  }))
}

// Refs<State>は、declare以降のジェネリクスを参照している ＊Dataエイリアス -> State

// export const getters = {
//   getComment: (state: State) => state.form.comment
// }
export const mutations = {
  async createPost (state: State): Promise<void> {
    const comment = state.form.comment

    if (!comment) { return }

    const post = {
      comment
    }

    await API.graphql({
      query: createPost,
      variables: {
        input: post
      } // 送信データ
    })

    state.form.comment = ''
  },
  async getPostList (state: State): Promise<void> {
    const postList = await API.graphql({
      query: listPosts
    });

    ((postList: any) => {
      state.items = postList.data.listPosts.items
    })(postList)
    // 関数内に閉じ込め、any型にすることでdataの型推論を停止。あくまで応急処置
  }
}

export const actions: Actions<IActions, IMutations> = {
  createPostAction (ctx) {
    ctx.commit('createPost')
  },
  getPostListAction (ctx) {
    ctx.commit('getPostList')
  }
}
