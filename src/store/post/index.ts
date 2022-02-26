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
  content: [] as PostListType,
  id: [] as PostListType,
  title: String
})

export const mutations = mutationTree(state, {
  setIndex (state, content) {
    state.content = content
  },
  setIsLoading (state, isLoading: boolean) {
    state.isLoading = isLoading
  },
  createPostInput(state) {
    title: state.title
    content: state.content
  }
})

export const actions = actionTree(
  {
    state,
    mutations
  },
  {
    async createPost ({ commit }, payload: CreatePostInput) : Promise<void> {
      commit('setIsLoading', true)
      try {
        // const {
        //   data: {
        //     createPost: ret
        //   } = {},
        //   errors
        // } = await gql<CreatePostMutation, CreatePostMutationVariables>(
        //   createPost, {
        //     input: payload
        //   }
        // )
        // if(!ret || errors){
        //   throw new Error
        // }
        const res = await gql<CreatePostMutation, CreatePostMutationVariables>(createPost, {
          input: payload
        })

      } catch (error) {
        console.error('createPost error', error)
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
