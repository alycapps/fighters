<template>
  <div id="mainWelcome">
    <Banner 
    msg="Welcome to Aloe a place for good and evil. A magical world where the mythical lives. Why are you visiting?"
    nextPage="/player"
    btnName="Begin Journey"
    >
      <br />
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <Card
            title="Honor"
            subtitle="I want to protect the world"
            description="Win the game by defeating the forces of evil."
            />
          </div>
          <div class="col-md-6">
            <Card
            title="Power"
            subtitle="I want to rule the world"
            description="Win the game by defeating anybody who gets in your way."
            />
          </div>
        </div>
      </div>
      <br />
    </Banner>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'Welcome',
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
