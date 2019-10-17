// This page will load when the user finds an unkown path 

<template>
  <div id="mainWelcome">
    <!-- <div class="container">
      <div class="row">
        <div class="col-md-3">
        </div>
        <div class="col-md-6"> -->
          <Card
          title="How did you get to this page?"
          subtitle="You should not be here, danger lurks in the unknown."
          nextPage="/"
          btnName="Start Over"
          />
        <!-- </div>
        <div class="col-md-3">
        </div>
      </div>
    </div> -->
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
