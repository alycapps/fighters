<template>
  <div id="mainBanner">
    <span>
      <h1>{{ msg }}</h1>
      <slot></slot>
      <button type="button" class="btn btn-warning">
        <router-link :to="{ path: nextPage}">{{btnName}}</router-link>
      </button>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  // data: function() {
  //       return {
  //           nextPage: ''
  //       }
  //   },
  props: {
    msg: String,
    nextPage: String,
    btnName: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mainBanner {
  width: 70%;
  background-color: rgb(102, 51, 0);
  color: white;
  position: absolute;
  top: 50%;
  left: 15%
}
</style>
