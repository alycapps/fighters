// This page is where the fights actually occur

<template>
  <div id="mainBattle">
    <div class="container">
      <div class="row">
        <!-- Players Card -->
        <div class="col-md-4">
            <Card
              :title="playerTitle"
              subtitle="Grr"
              description="Health"
              :imgURL="fighters[0].image"
              nextPage="/player"
              actionBtn="Attack"
              actionBtn2="Defend"
            />
        </div>
        <!-- Stats Card -->
        <div class="col-md-4">
          <Card
            title="Fight Stats"
            subtitle="things"
            description="---"

          />
        </div>
        <!-- Opponent Card -->
        <div class="col-md-4">
            <Card
              :title="opponentTitle"
              subtitle="Grr"
              description="Health & Strength"
              :imgURL="fighters[7].image"
              nextPage="/player"
            />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import fighters from '../data/fighters.json'

export default {
  name: 'Battle',
  components: {
    Card
  },
  data: function () {
    return {
      fighters: fighters
      // opponent: this.fighters[7],
      // player: this.fighters[0]
    }
  },
  methods: {
    // clicked: function(param) {
    //   this.lastClicked = param;
    //   this.groceryList[param].complete = !this.groceryList[param].complete;
    // }
    // titleWithIcon: function () {
    //   console.log(fighters, "fighter");
    //   if (this.fighters[0].type == 'water') return this.fighters[0].name + ' 💧';
    //   else if (this.fighters[0].type == 'earth') return this.fighters[0].name + ' 🌱';
    //   else if (this.fighters[0].type == 'fire') return this.fighters[0].name + ' 🔥';
    // }
  },
  computed: {
    playerTitle: function () {
      console.log(fighters, 'fighter')
      if (this.fighters[0].type === 'water') return this.fighters[0].name + ' 💧'
      else if (this.fighters[0].type === 'earth') return this.fighters[0].name + ' 🌱'
      else if (this.fighters[0].type === 'fire') return this.fighters[0].name + ' 🔥'
    },
    opponentTitle: function () {
      console.log(fighters, 'fighter')
      if (this.fighters[7].type === 'water') return this.fighters[7].name + ' 💧'
      else if (this.fighters[7].type === 'earth') return this.fighters[7].name + ' 🌱'
      else if (this.fighters[7].type === 'fire') return this.fighters[7].name + ' 🔥'
    }
  }
}

</script>

<style >
#mainBattle {
  background-size: cover;
  background-image: url("../assets/woodsbackground.jpg");
  height: 1000px;
}
</style>
