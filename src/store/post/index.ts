import { reactive, Ref, toRefs } from '@nuxtjs/composition-api'
import { API } from 'aws-amplify'
import { mutationTree, actionTree } from 'typed-vuex'
import { getPost, listPosts } from '../../graphql/queries'
import { createPost } from '../../graphql/mutations'
import { CreatePostInput, CreatePostMutation, CreatePostMutationVariables, GetPostQuery, GetPostQueryVariables, Post } from '~/API'
import { gql } from '~/lib/graphql'

export type RootState = ReturnType<typeof state>
export type PostListType = Post[]

export const state = () => ({
  isLoading: false,
  index: [] as PostListType
})

export const mutations = mutationTree(state, {
  setIndex (state, index) {
    state.index = index
  },
  setIsLoading (state, isLoading: boolean) {
    state.isLoading = isLoading
  },
})

export const actions = actionTree(
  {
    state,
    mutations
  },
  {
    async createPost ({ commit }, payload: CreatePostInput) : Promise<string | null | undefined> {
      commit('setIsLoading', true)
      try {
        const res = await gql<CreatePostMutation, CreatePostMutationVariables>(createPost, {
          input: payload
        })
        console.log(res)
      } catch (error) {
        console.error('createPost error', error)
        return ''
      } finally {
        commit('setIsLoading', false)
      }
    },
    async fetchPostList ({ commit }, id: string): Promise<void> {
      commit('setIsLoading', true)
      try {
        const res = await gql<GetPostQuery, GetPostQueryVariables>(getPost, {
          id
        })
        commit('setIndex', res.data?.getPost)
        console.log('ok')
      } catch (error) {
        console.error('fetchPostList error', error)
      } finally {
        commit('setIsLoading', false)
      }
    }
  }
)
