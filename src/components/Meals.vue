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
              <div class="card mb-4">
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
  </section>
</template>

<script>
const axios = require('axios');

export default {
  name: 'categories',
  data() {
    return {
      'categories': [],
      'showCategories': true,
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
                this.showCategories = true;
            })
            .catch(error => {
              alert("error");
            });
    }
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