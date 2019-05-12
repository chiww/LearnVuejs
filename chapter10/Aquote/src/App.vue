<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :quoteMax="maxQuotes"></app-header>
        <app-new-quote @quoteAdd="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @deleteQuote="deleteQuote"></app-quote-grid>
        <div>
            <div class="row">
                <div class="alert alert-info"> to delete !</div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './componsents/QuoteGrid.vue'
    import NewQuote from './componsents/NewQuote.vue'
    import Header from './componsents/Header.vue'

    export default {
        data: function () {
            return {
                quotes: ['Just a Quote to see something!'],
                maxQuotes: 10
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote,
            appHeader: Header
        },
        methods: {
            newQuote(quote) {
                this.quotes.push(quote)
            },
            deleteQuote(index) {
                this.quotes.splice(index)
            }
        }
    }
</script>

<style>
</style>
