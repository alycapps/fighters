<template>
  <div id="mainChosePlayer">
    <Banner 
    msg="What sort of creature are you?"
    nextPage="/battle"
    btnName="Continue"
    >
      <br />
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <Card
            title="Phoenix"
            subtitle="Arise from the fire"
            description="---"
            source="@/assets/phoenix.jpg"
            />
          </div>
          <div class="col-md-4">
            <Card
            title="Mermaid"
            subtitle="Arise from the water"
            description="---"
            source="@/assets/mermaid.jpg"
            />
          </div>
          <div class="col-md-4">
            <Card
            title="Unicorn"
            subtitle="Arise from the woods"
            description="---"
            source="@/assets/unicorn.jpg"
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
