<template>
  <div id="mainChosePlayer">
    <Banner msg="Lots of text to see what happens if it outgrows the box lalalalalalalalala more things go here and even longer" />
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'

export default {
  name: 'ChosePlayer',
  components: {
    Banner
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  #mainChosePlayer {
    /* background-color: purple; */
    background-size: cover;
    background-image: url("../assets/woodsbackground.jpg");
    height: 1000px;
  }
</style>
