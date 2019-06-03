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
            title="Phoenix"
            subtitle="Arise from the fire"
            description="---"
            :imgURL=phoenixPic
            nextPage="/battle"
            btnName="Continue"
            />
          </div>
          <div class="col-md-4">
            <Card
            title="Mermaid"
            subtitle="Arise from the water"
            description="---"
            :imgURL=mermaidPic
            nextPage="/battle"
            btnName="Continue"
            />
          </div>
          <div class="col-md-4">
            <Card
            title="Unicorn"
            subtitle="Arise from the woods"
            description="---"
            :imgURL="unicornPic"
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

export default {
  name: 'ChosePlayer',
  components: {
    Banner,
    Card
  },
  // data: function() {
  //     return {
  //       mermaidPic: url("@/assets/mermaid.jpg"),
  //       phoenixPic: require("@/assets/phoenix.jpg"),
  //       unicornPic: require("@/assets/unicorn.jpg"),
  //       pTitle: "Phoenix new title"
  //     }
  //   }
  data () {
    mermaidPic: url("@/assets/mermaid.jpg");
    phoenixPic: require("@/assets/phoenix.jpg");
    unicornPic: require("@/assets/unicorn.jpg");
    pTitle: "Phoenix new title"
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
