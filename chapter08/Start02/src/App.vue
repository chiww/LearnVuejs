<template>
  <div class="container">
      <!-- 注意这个不同的写法 -->
    <appHeader></appHeader>
    <hr>
    <div class="row">
        <!-- 注意这个ES6的写法 -->
      <servers></servers>
      <app-status></app-status>
    </div>
    <hr>
    <div class="row">
        <!-- 注意这个不同的写法 -->
      <app-footer></app-footer>        
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Status from "./Status.vue";
import Servers from "./Servers.vue";

export default {
  components: {
    appHeader: Header,    // 注意可以有两种不同的选择器写方法
    appFooter: Footer,
    Servers,              // 这是ES6的写法
    "app-status": Status
  }
};
</script>

<style>
</style>
