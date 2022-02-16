import {
  getAccessorType,
  getterTree,
  mutationTree,
  actionTree
} from 'typed-vuex'

// Import all your submodules
import * as post from '~/store/post'

// Keep your existing vanilla Vuex code for state, getters, mutations, actions, plugins, etc.
export const state = () => ({})

export const getters = getterTree(state, {})

export const mutations = mutationTree(state, {})

export const actions = actionTree({
  state,
  getters,
  mutations
}, {})

// This compiles to nothing and only serves to return the correct type of the accessor
export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    // The key (submodule) needs to match the Nuxt namespace (e.g. ~/store/submodule.ts)
    post
  }
})
