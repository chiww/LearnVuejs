<template>
    <div class="container">
        <app-new-quote @quoteAdd="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes"></app-quote-grid>
    </div>
</template>

<script>
    import QuoteGrid from './componsents/QuoteGrid.vue'
    import NewQuote from './componsents/NewQuote.vue'

    export default {
        data: function () {
            return {
                quotes: ['Just a Quote to see something!'],
                maxQuotes: 10
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote
        },
        methods: {
            newQuote(quote) {
                this.quotes.push(quote)
            }
        }
    }
</script>

<style>
</style>
