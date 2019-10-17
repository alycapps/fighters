// This page is where the fights actually occur

<template>
  <div id="mainBattle">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <Card
            title="You"
            subtitle="Lets do this"
            description="---"
            source="phoenix.jpg"
            nextPage="/player"
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
            description="---"
            source="unicorn.jpg"
            nextPage="/player"

          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'Battle',
  components: {
    Card
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
