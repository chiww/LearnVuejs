<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User age: {{ userAge }} </p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>

    import { eventBus } from '../main';
    export default {
        props: ['userAge'],
        methods: {
            editAge() {
                this.userAge = 99;
                // 自定义事件
                //this.$emit('ageWasEdit', this.userAge)

                // 使用事件总线事件
                // eventBus.$emit('ageWasEdit', this.userAge)

                // 更丰富的事件总线
                eventBus.changeAge(this.userAge)
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
