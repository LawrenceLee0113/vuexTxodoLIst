import { createStore } from 'vuex'

export default createStore({
  state: {
    to_do: [
      {
        check: false,
        text: '買牛奶'

      },
      {
        check: true,
        text: '買麵包'
      },
      {
        check: false,
        text: '買橘子'
      },

    ]
  },
  getters: {
  },
  mutations: {
    add_to_do(state, text) {
      state.to_do.push({
        check: false,
        text: text
      })
    },
    remove_to_do(state, index) {
      state.to_do.splice(index, 1)
    },
    saveItem(state, index ) {
      state.to_do[index].editing = false;
    },
    editItem(state, index) {
      state.to_do[index].editing = true;
    }
  },
  actions: {
  },
  modules: {
  }
})
