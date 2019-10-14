// This page allows users to chose their figter for the duration of the game
// Fighter type will give them advantages/disadvantages during the game

<template>
  <div id="mainChosePlayer">
    <Banner
    msg="What sort of creature are you?"
    >
      <br />
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <Card
            title="fighters[0].name"
            subtitle="Arise from the fire"
            description="---"
            imgURL="phoenix.jpg"
            nextPage="/battle"
            btnName="Continue"
            />
          </div>
          <div class="col-md-4">
            <Card
            title="Mermaid"
            subtitle="Arise from the water"
            description="---"
            imgURL="mermaid.jpg"
            nextPage="/battle"
            btnName="Continue"
            />
          </div>
          <div class="col-md-4">
            <Card
            title="Unicorn"
            subtitle="Arise from the woods"
            description="---"
            imgURL="unicorn.jpg"
            nextPage="/battle"
            btnName="Continue"
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
import fighters from "../data/fighters.json";

export default {
  name: 'ChosePlayer',
  components: {
    Banner,
    Card
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
