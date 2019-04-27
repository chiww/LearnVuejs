<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-quote>
          <h2 slot="title">{{ quoteTitle }}</h2>
          <p slot="content">A wonderful Quote</p>
        </app-quote>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from './components/Quote.vue';
export default {
  data: function() {
    return {
      quoteTitle: 'The Quote!!'
    }
  },
  components: {
    appQuote: Quote
  }
};
</script>

<style scoped>

/* 父组件中的定义是不会生效的 */
h2 {
        color: green
    }
</style>
