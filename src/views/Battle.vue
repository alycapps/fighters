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
              :imgURL="player.image"
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
              :imgURL="opponent.image"
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
      fighters: fighters,
      opponent: "",
      player: ""
    }
  },
  created: function() {
        this.opponent= this.fighters[7];
        this.player = this.fighters[0];
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
      console.log(this.fighters, 'fighters in playerTitle')
      console.log(this.player, "player")
      if (this.player.type === 'water') return this.player.name + ' 💧'
      else if (this.player.type === 'earth') return this.player.name + ' 🌱'
      else if (this.player.type === 'fire') return this.player.name + ' 🔥'
    },
    opponentTitle: function () {
      console.log(fighters, 'fighters in opponentTitle')
      if (this.opponent.type === 'water') return this.opponent.name + ' 💧'
      else if (this.opponent.type === 'earth') return this.opponent.name + ' 🌱'
      else if (this.opponent.type === 'fire') return this.opponent.name + ' 🔥'
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
