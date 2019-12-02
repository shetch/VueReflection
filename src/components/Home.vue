<template>
  <section>
    <div class="container" v-show="showCategories">
      <div class="row">
        <div class="col-md-12">
            <h3 class="mb-4 text-info">Recipe Finder</h3>
            <p>Please select category of meal required from the list below.</p>
        </div>
        <div class="col-md-12">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-6 col-lg-2 text-center" v-for="category in categories">
              <div class="card mb-4" @click="getRecipes(category.strCategory)">
                <div class="card-body">
                    <div class="frame"><img :src="category.strCategoryThumb" alt="" class="img-fluid zoom mb-2"></div>
                    <h6 class="mt-1 mb-0">{{ category.strCategory }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container" v-show="showMeals">
      <div class="row">
        <div class="col-md-12">
            <h3 class="mb-4 text-info">Recipe Finder</h3>
            <p>Please select meal required from the list below.</p>
        </div>
        <div class="col-md-12">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-6 col-lg-2 text-center" v-for="meal in meals">
              <div class="card mb-4" @click="getMeal(meal.idMeal)">
                <div class="card-body">
                    <div class="frame"><img :src="meal.strMealThumb" alt="" class="img-fluid zoom mb-2"></div>
                    <h6 class="mt-1 mb-0">{{ meal.strMeal }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 text-right">
            <button class="btn btn-success mt-5" @click="getCategories()">Back</button>
        </div>


      </div>
    </div>
    <div class="container" v-show="showRecipe">
      <div class="row">
        <div class="col-md-12" v-for="details in recipe">
          <div class="row">
              <div class="col-md-8">
                  <h3 class="mb-1 text-info">{{ details.strMeal }}</h3>
                  <h6 class="mt-1 mb-0" v-show="details.strArea != null">Area: {{ details.strArea }}</h6>
                  <h6 class="mt-1 mb-4" v-show="details.strTags != null">Tags: {{ details.strTags }}</h6>
              </div>
              <div class="col-md-4 text-right">
                  <a target="_blank" :href="details.strYoutube" class="btn btn-danger mt-3 mb-3"><i class="fab fa-youtube"></i> Watch Preparation</a>
              </div>
              <div class="col-md-2 col-lg-3"> 
                  <h6 class="mt-1 mb-2 text-info">Ingredients</h6>
                  <h6 v-show="details.strMeasure1 != null">{{ details.strMeasure1 }} {{ details.strIngredient1 }}</h6>
                  <h6 v-show="details.strMeasure2 != null">{{ details.strMeasure2 }} {{ details.strIngredient2 }}</h6>
                  <h6 v-show="details.strMeasure3 != null">{{ details.strMeasure3 }} {{ details.strIngredient3 }}</h6>
                  <h6 v-show="details.strMeasure4 != null">{{ details.strMeasure4 }} {{ details.strIngredient4 }}</h6>
                  <h6 v-show="details.strMeasure5 != null">{{ details.strMeasure5 }} {{ details.strIngredient5 }}</h6>
                  <h6 v-show="details.strMeasure6 != null">{{ details.strMeasure6 }} {{ details.strIngredient6 }}</h6>
                  <h6 v-show="details.strMeasure7 != null">{{ details.strMeasure7 }} {{ details.strIngredient7 }}</h6>
                  <h6 v-show="details.strMeasure8 != null">{{ details.strMeasure8 }} {{ details.strIngredient8 }}</h6>
                  <h6 v-show="details.strMeasure9 != null">{{ details.strMeasure1 }} {{ details.strIngredient9 }}</h6>
                  <h6 v-show="details.strMeasure10 != null">{{ details.strMeasure10 }} {{ details.strIngredient10 }}</h6>
                  <h6 v-show="details.strMeasure11 != null">{{ details.strMeasure11 }} {{ details.strIngredient11 }}</h6>
                  <h6 v-show="details.strMeasure12 != null">{{ details.strMeasure12 }} {{ details.strIngredient12 }}</h6>
                  <h6 v-show="details.strMeasure13 != null">{{ details.strMeasure13 }} {{ details.strIngredient13 }}</h6>
                  <h6 v-show="details.strMeasure14 != null">{{ details.strMeasure14 }} {{ details.strIngredient14 }}</h6>
                  <h6 v-show="details.strMeasure15 != null">{{ details.strMeasure15 }} {{ details.strIngredient15 }}</h6>
                  <h6 v-show="details.strMeasure16 != null">{{ details.strMeasure16 }} {{ details.strIngredient16 }}</h6>
                  <h6 v-show="details.strMeasure17 != null">{{ details.strMeasure17 }} {{ details.strIngredient17 }}</h6>
                  <h6 v-show="details.strMeasure18 != null">{{ details.strMeasure18 }} {{ details.strIngredient18 }}</h6>
                  <h6 v-show="details.strMeasure19 != null">{{ details.strMeasure19 }} {{ details.strIngredient19 }}</h6>
                  <h6 v-show="details.strMeasure20 != null">{{ details.strMeasure20 }} {{ details.strIngredient20 }}</h6>
              </div>
              <div class="col-md-2 col-lg-6">     
                  <h6 class="mt-1 mb-2 text-info">Instructions</h6>
                  <p>{{ details.strInstructions }}</p>    
              </div>
              <div class="col-md-2 col-lg-3">
                  <img :src="details.strMealThumb" :alt="details.strMeal" class="img-fluid">
              </div>

              <div class="col-12 text-right">
                  <button class="btn btn-success mt-5" @click="showRecipes(details.strCategory)">Back</button>
              </div>


          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
const axios = require('axios');

export default {
  name: 'home',
  data() {
    return {
      'categories': [],
      'meals': [],
      'recipe': [],
      'showCategories': true,
      'showMeals': false,
      'showRecipe': false,
    }
  },
  mounted() {
      this.getCategories();
  },
  methods: {
    getCategories() {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => {
                this.categories = response.data.categories;
                this.showMeals = false;
                this.showRecipe = false;
                this.showCategories = true;
            })
            .catch(error => {
              alert("error");
            });
    },
    getRecipes(e) {
      let url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + e;
      axios.get(url)
            .then(response => {
                this.meals = response.data.meals;
                this.showCategories = false;
                this.showRecipe = false;
                this.showMeals = true;
            })
            .catch(error => {
              alert("error");
            });
    },
    getMeal(e) {
      let url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + e;
      axios.get(url)
            .then(response => {
                this.recipe = response.data.meals;
                this.showCategories = false;
                this.showMeals = false;
                this.showRecipe = true;
            })
            .catch(error => {
              alert("error");
            });
    },
    showRecipes(e) {
      let url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + e;
      axios.get(url)
            .then(response => {
                this.meals = response.data.meals;
                this.showCategories = false;
                this.showRecipe = false;
                this.showMeals = true;
            })
            .catch(error => {
              alert("error");
            });
    },
    showCategories() {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => {
                this.categories = response.data.categories;
                this.showMeals = false;
                this.showRecipe = false;
                this.showCategories = true;
            })
            .catch(error => {
              alert("error");
            });
    },
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