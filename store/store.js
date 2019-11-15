import Vue from 'vue'
import Vuex from 'vuex'
import mrhard from './modules/mrhard.js'; //自定义组件数据

Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		
	},
	modules: {
		mrhard //自定义组件数据
	}
})

export default store