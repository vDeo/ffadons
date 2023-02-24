import {createApp} from 'vue'
import { createStore } from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './style.css'
import store from './components/store'
import App from './App.vue'


const vueStore = createStore(store)
const app = createApp(App).use(vueStore).use(VueAxios, axios)
app.mount('#app')

// app.use(vueStore)
// app.use(VueAxios, axios)

