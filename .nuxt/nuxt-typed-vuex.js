import { getAccessorFromStore } from 'typed-vuex'

import { createStore } from '/Users/ao_ito_/IdeaProjects/playground/misogi-post/.nuxt/store'

const storeAccessor = getAccessorFromStore(createStore())

export default async ({ store }, inject) => {
  inject('accessor', storeAccessor(store))
}
