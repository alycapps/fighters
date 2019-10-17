<template>
  <div id="mainCard">
    <div class="card" >
      <img v-if=imgURL class="card-img-top" :src="require(`@/assets/${imgURL}`)">
      <div class="card-body">
        <h5 class="card-title">{{title}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{subtitle}}</h6>
        <p class="card-text">{{description}}</p>
        <button type="button" class="btn btn-warning">
          <router-link :to="{ path: nextPage}">{{btnName}}</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  // data: function() {
  //       return {
  //           source: ''
  //       }
  //   },
  props: {
    title: String,
    subtitle: String,
    description: String,
    imgURL: String,
    nextPage: String,
    btnName: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mainCard {
  color: grey;
}
</style>
