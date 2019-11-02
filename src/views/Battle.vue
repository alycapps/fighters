// This page is where the fights actually occur

<template>
  <div id="mainBattle">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <Card
            title="You"
            subtitle="Lets do this"
            description="Health & Strength"
            :imgURL="fighters[0].image"
            nextPage="/player"
            actionBtn="Attack"
            actionBtn2="Defend"
          />           
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
          <Card
            title="Opponent"
            subtitle="Grrr"
            description="Health & Strength"
            :imgURL="fighters[5].image"
            nextPage="/player"

          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Card from '@/components/Card.vue'
  import fighters from "../data/fighters.json";

  export default {
    name: 'Battle',
    components: {
      Card
    },
    data: function() {
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
