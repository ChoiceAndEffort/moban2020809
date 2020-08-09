import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import moduleFour from './views/moduleFour/router'
import moduleThree from './views/moduleThree/router'
import moduleTwo from './views/moduleTwo/router'
import moduleOne from './views/moduleOne/router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'module-one',
      component: Home,
      children: [
        ...moduleFour,
        ...moduleThree,
        ...moduleTwo,
        ...moduleOne

      ]
    }
  ]
})
