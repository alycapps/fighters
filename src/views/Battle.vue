<template>
  <div id="mainBattle">
    <div class="container">
        <div class="row">
          <div class="col-md-4">
            <Card
            title="You"
            subtitle="Lets do this"
            description="---"
            source="src/assets/phoenix.jpg"
            />
          </div>
          <div class="col-md-4">
            <Card
            title="Fight Stats"
            subtitle="things"
            description="---"
            source="@/assets/mermaid.jpg"
            />
          </div>
          <div class="col-md-4">
            <Card
            title="Opponent"
            subtitle="Grrr"
            description="---"
            source="@/assets/unicorn.jpg"
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
#mainBattle {
  /* background-color: purple; */
  background-size: cover;
  background-image: url("../assets/woodsbackground.jpg");
  height: 1000px;
}
</style>
