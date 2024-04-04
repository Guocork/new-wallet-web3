<script setup>
 const items = [
    {
      name: 'African Elephant',
      species: 'Loxodonta africana dasdsds ',
      diet: 'Herbivore',
      habitat: 'Savanna, Forests',
      hhh:'5555 ccc'
    },
  ]

</script>

<template>
    <div class="container1">
      <v-avatar :image="require('@/assets/avatar.png')" size="80"></v-avatar>
    </div>
    <div class="container2">
      <p>Guo cork</p>
    </div>
  <div><v-data-table-virtual :items="items"></v-data-table-virtual></div>
</template>

<style scoped>
.container1 {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 20px;
}

.container2 {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 50px;
}

p {
  font-size: 40px;
  font-weight: bold;
}
</style>
