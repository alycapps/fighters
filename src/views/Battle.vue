// This page is where the fights actually occur

<template>
  <div id="mainBattle">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <template
            v-if="fighters[0].type == 'fire'"
          >
            <Card
              :title="fighters[0].name + ' 🔥'"
              subtitle="Grr"
              description="Health"
              :imgURL="fighters[0].image"
              nextPage="/player"
              actionBtn="Attack"
              actionBtn2="Defend"
            />
          </template>
          <template
            v-else-if="fighters[0].type == 'water'"
          >
            <Card
              :title="fighters[0].name + ' 💧'"
              subtitle="Grr"
              description="Health"
              :imgURL="fighters[0].image"
              nextPage="/player"
              actionBtn="Attack"
              actionBtn2="Defend"
            />
          </template>
          <template
            v-else-if="fighters[0].type == 'earth'"
          >
            <Card
              :title="fighters[0].name + ' 🌱'"
              subtitle="Grr"
              description="Health"
              :imgURL="fighters[0].image"
              nextPage="/player"
              actionBtn="Attack"
              actionBtn2="Defend"
            />
          </template>
        </div>
        <div class="col-md-4">
          <Card
            title="Fight Stats"
            subtitle="things"
            description="---"
            source="mermaid.jpg"
            nextPage="/player"

          />
        </div>
        <div class="col-md-4">
          <template
            v-if="fighters[7].type == 'fire'"
          >
            <Card
              :title="fighters[7].name + ' 🔥'"
              subtitle="Grr"
              description="Health & Strength"
              :imgURL="fighters[7].image"
              nextPage="/player"
            />
          </template>
          <template
            v-else-if="fighters[7].type == 'water'"
          >
            <Card
              :title="fighters[7].name + ' 💧'"
              subtitle="Grr"
              description="Health & Strength"
              :imgURL="fighters[7].image"
              nextPage="/player"
            />
          </template>
          <template
            v-else-if="fighters[7].type == 'earth'"
          >
            <Card
              :title="fighters[7].name + ' 🌱'"
              subtitle="Grr"
              description="Health & Strength"
              :imgURL="fighters[7].image"
              nextPage="/player"
            />
          </template>
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
