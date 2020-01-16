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
          <!-- add all fighers as options -->
          <div v-for="fighter in fighters" class="col-md-4" v-bind:key="fighter.id">
            <template
              v-if="fighter.starter"
            >
              <button v-on:click="selectPlayer">
                <Card
                  v-if="fighter.id"
                  :title="fighter.name"
                  :subtitle="fighter.subtitle"
                  :description="fighter.description"
                  :imgURL="fighter.image"
                  nextPage="/battle"
                  actionBtn2="Select"
                  btnName="Continue"
                />
              </button>
            </template>
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
import fighters from '../data/fighters.json'

export default {
  name: 'ChosePlayer',
  components: {
    Banner,
    Card
  },
  data: function () {
    return {
      fighters: fighters,
      opponent: ''
    }
  },
  created: function () {
    this.opponent = this.fighters[7],
    this.player = this.fighters[0]
  },
  methods: {
    selectPlayer: function (event) {
      console.log("hello");
    }
  },
  computed: {
    // // a computed getter
    // reversedMessage: function () {
    //   // `this` points to the vm instance
    //   return this.message.split('').reverse().join('')
    // }
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
