<template>
  <div id="mainWelcome">
    <Banner 
    msg="How did you get to this page? You should not be here, danger lurks in the unknown."
    nextPage="/welcome"
    btnName="Start Over"
    >
     
    </Banner>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'Missing',
  components: {
    Banner,
    Card
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
#mainWelcome {
  /* background-color: purple; */
  background-size: cover;
  background-image: url("../assets/woodsbackground.jpg");
  height: 1000px;
}
</style>
