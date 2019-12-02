// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import the vue instance
import Vue from 'vue'

//import the App component
import App from './App'
//import the vue router
import VueRouter from 'vue-router'
//tell vue to use the router
Vue.use(VueRouter)
/* eslint-disable no-new */
//Vue.component('search-component', require('./components/Search.vue').default);

//import the about component
import About from './components/About'
//import the about component
import Categories from './components/Categories'
//import the about component
import Recipes from './components/Recipes'
//import the meal component
import Meal from './components/Meal'
//import the search component
import Search from './components/Search'


const axios = require('axios');


//define your routes
const routes = [
	//route for the home route of the webpage
	{ path: '/', component: Categories },
	//route for the about route of the webpage
	{ path: '/about', component: About },
  //route for the search route of the webpage
  { path: '/search/:id', component: Search },
	//route for the categories route of the webpage
	{ path: '/meals', component: Categories },
	//route for the meals route of the webpage
	{ path: '/meals/:id', component: Recipes },
	//route for the meals route of the webpage
	{ path: '/meals/:id/:meal', component: Meal }
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})
//Instantiate the vue instance
new Vue({
	//define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  //pass in the router to the vue instance
  router
}).$mount('#app')//mount the router on the app
