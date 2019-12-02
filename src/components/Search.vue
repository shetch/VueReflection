<template>
  <section>
    <div class="container" v-show="showMeals">
      <div class="row">
        <div class="col-md-12">
          <h3 class="mb-4 text-info">Search Results for {{ id.charAt(0).toUpperCase() + id.slice(1) }}</h3>
          <p>Please select meal required from the list below.</p>
        </div>
        <div class="col-md-12">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-6 col-lg-2 text-center cards" v-for="meal in meals">
              <router-link class="" v-bind:to="'/meals/search/' + meal.idMeal"><div class="card mb-4">
                <div class="card-body">
                  <div class="frame"><img :src="meal.strMealThumb" alt="" class="img-fluid zoom mb-2"></div>
                  <h6 class="mt-1 mb-0">{{ meal.strMeal }}</h6>
                </div>
              </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-12 text-right">
          <button class="btn btn-success mt-5" @click="$router.go(-1)">Back</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  const axios = require('axios');

  export default {
    name: 'search',
    data() {
      return {
        'id': this.$route.params.id,
        'route': this.$route.path,
        'meals': [],
        'showMeals': true,
      }
    },
    created() {
      let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + this.id;
      axios.get(url)
        .then(response => {
          this.meals = response.data.meals;
          this.showMeals = true;
        })
        .catch(error => {
          alert("error");
        });
    }
  }
</script>

<style scoped>
  .card {
    transition:1s;
  }
  .card:hover {
    background:#444;
    color:white;
    cursor:pointer;
    transition:1s;
  }
  .cards:hover a {
    text-decoration:none;
  }
  .card:hover .zoom {
    transition:1.5s;
    transform: scale(1.2);
  }
  .frame {
    overflow: hidden;
  }
  .zoom {
    transition:2s;
  }
  .zoom:hover {
    transition:1.5s;
    transform: scale(1.5);

  }

</style>
