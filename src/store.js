import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages:[]
  },
  mutations: {
    updateMessage(state, payload) {
      state.messages = payload
    }
  },
  actions: {
    refreshMessage(context) {
      return new Promise((resolve) => {
        fetch('https://raw.githubusercontent.com/karthikJagadeesh/fake-chat-api/master/db.json')
          .then(response => {
            console.log(response.json())
            context.commit('updateMessage', response.json());
            resolve();
          })
      })
    }
  }
})
