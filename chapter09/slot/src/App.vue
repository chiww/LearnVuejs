<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponents = 'appQuote'">Quote</button>
        <button @click="selectedComponents = 'appAuthor'">Author</button>
        <button @click="selectedComponents = 'appNew'">New</button>

<!--        动态加载-->
        <keep-alive>
          <componsents :is="selectedComponents"></componsents>
        </keep-alive>
<!--        静态加载插槽-->
<!--        <app-quote>-->
<!--          <h2 slot="title">{{ quoteTitle }}</h2>-->
<!--&lt;!&ndash;          <h1 slot="subTitle">some</h1>&ndash;&gt;-->
<!--          <p slot="content">A wonderful Quote</p>-->
<!--        </app-quote>-->
      </div>
    </div>
  </div>
</template>

<script>
import Quote from './components/Quote.vue';
import Author from './components/Author';
import New from './components/New';

export default {
  data: function() {
    return {
      quoteTitle: 'The Quote!!',
      selectedComponents: 'appQuote'
    }
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
};
</script>

<style scoped>

/* 父组件中的定义是不会生效的 */
h2 {
        color: green
    }
</style>
