import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import VueCodemirror from 'vue-codemirror';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);
Vue.use(VueCodemirror);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
