<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if='!server'>Please select a server </p>
    <p v-else>Server ID:{{ server.id }}  Status: {{ server.status}}</p>
    <button @click="reSet">Reset status</button>
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
  methods: {
    reSet() {
      this.server.status = 'Reset!!'
    }
  },
  created() {
    eventBus.$on('wasSelected', (server) => {
      this.server = server
    })
  }
}
</script>

<style scoped>

</style>
