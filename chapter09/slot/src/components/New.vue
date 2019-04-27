<template>
  <div>
    <div>
      <h3>This is New</h3>
      <button @click="counter++"> Increase! </button>
      <p>{{ counter }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        counter: 0
      };
    },
    deactivated() {
      console.log("deactived!")
    },
    activated() {
      console.log("actived!")
    }
  }
</script>

<style scoped>
</style>
