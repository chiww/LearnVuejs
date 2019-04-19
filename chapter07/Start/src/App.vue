<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <app-servers></app-servers>
      <app-detail></app-detail>
    </div>
    <hr>
    <div class="row">
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Detail from "./Detail.vue";
import Servers from "./Servers.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-servers": Servers,
    "app-detail": Detail
  }
};
</script>

<style>
</style>
