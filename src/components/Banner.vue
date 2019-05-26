<template>
  <div id="mainBanner">
    <span>
      <h1>{{ msg }}</h1>
      <router-link :to="{ path: nextPage}">Home</router-link>
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
    nextPage: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mainBanner {
  width: 40%;
  background-color: rgb(102, 51, 0);
  color: white;
  position: absolute;
  top: 50%;
  left: 30%
}
</style>
