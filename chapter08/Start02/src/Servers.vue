<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <server 
      v-for="server in Servers" 
      :server="server"
      ></server>
    </ul>
  </div>
</template>

<script>
import Server from "./Server.vue";
export default {
  data: function() {
    return {
      Servers: [
        { id: 1, status: "Nornal" },
        { id: 2, status: "S2" },
        { id: 3, status: "S3" },
        { id: 4, status: "S4" }
      ]
    };
  },
  components: {
    server: Server
  }
};
</script>


<style scoped>
</style>
