// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App :addons="addons"/>',
  created() {
    this.fetchData();	
  },
  data: {
    addons: []
  },
  methods: {
    fetchData() {
    axios.get('http://storage.exoplatform.org/public/Addons/list.json', {crossdomain: true}).then(response => {
        this.addons = response.data;
        });
    }
  }
})
