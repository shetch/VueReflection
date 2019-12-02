<template>
  <div id="app">
    <div class="preloader-area-wrap">
      <div class="spinner d-flex justify-content-center align-items-center h-100">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
          <div class="bounce4"></div>
      </div>
    </div>
    <header class="header">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link class="navbar-brand" v-bind:to="'/'">Recipes</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" v-bind:to="'/'">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" v-bind:to="'/about'">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" v-bind:to="'/meals'">Meals</router-link>
            </li>
          </ul>
          <div class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search meals" aria-label="Search" v-model="keywords" @keyup="validateSearch">
            <button @click="searchMeals" class="btn btn-info my-2 my-sm-0" type="role">Search</button>
          </div>
        </div>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      'keywords': '',
      'meals': [],
    }
  },
  methods: {
    validateSearch: function(e) {
      if (e.keyCode === 13) {
        this.searchMeals();
      }
    },
    searchMeals() {
      this.keywords.length == 0 ? '' : window.location.href = '/search/' + this.keywords;
    }
  }
}
</script>
<!-- styling for the component -->
<style>
header {
  margin-bottom:40px;
}
</style>
