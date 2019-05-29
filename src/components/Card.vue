<template>
  <div id="mainCard">
 
 <!-- <div class="container">
  <div class="row">
    <div class="col-md-5"> -->

    <div class="card" >

       <img v-if="source" class="card-img-top" v-bind:src="source" >
      <div class="card-body">
        <h5 class="card-title">{{title}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{subtitle}}</h6>
        <p class="card-text">{{description}}</p>
        <!-- <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a> -->
        <button type="button" class="btn btn-warning">
          Select
        </button>
      </div>
    </div>

    <!-- </div>
    </div>
  </div> -->

  </div>
</template>

<script>
export default {
  name: 'Card',
  // data: function() {
  //       return {
  //           nextPage: ''
  //       }
  //   },
  props: {
    title: String,
    subtitle: String,
    description: String,
    source: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mainCard {
  color: grey;
}
</style>
