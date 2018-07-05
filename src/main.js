import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueChatScroll from 'vue-chat-scroll'

Vue.use(VueChatScroll)
Vue.use(require('vue-moment'));
Vue.config.productionTip = false

Vue.filter('truncate', function(value) {
  let length = 20;

  if(value.length <= length) {
      return value;
  }
  else {
      return value.substring(0, length) + '...';            
  }
});

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
