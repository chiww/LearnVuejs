<template>
  <div class="row">
    <div class="col-xs-12">
      <h1>Server Status</h1>
      <h4 v-if='server'>Selectd Server {{ server.id }} status: {{ server.status }}</h4>
      <!-- <h4 v-else>not selected!</h4> -->
    </div>
  </div>
</template>

<script>
import { eventBus } from './main';
export default {
  data: function() {
    return {
      server: null
    }
  },
  created() {
    eventBus.$on('wasSelected', (server) => {
      this.server = server
    })
  }
}
</script>

<style>

</style>
