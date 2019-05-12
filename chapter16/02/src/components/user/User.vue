<template>
    <div>
    <h1>The User Page</h1>
        <button class="btn btn-danger" @click="navToHome"> Go to Home by javascript </button>
    </div>
</template>


<script>
    export default {
        methods: {
            navToHome() {
                this.$router.push({'path': '/'})
            }
        }
    }

</script>