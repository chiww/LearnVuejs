<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ name }}</p>
        <p>User age: {{ userAge }} </p>
        <button @click="resetName">Reset name</button>

        <!------执行回调函数 --->
        <button @click="resetNameFn()">Reset name</button>
    </div>
</template>

<script>

    import { eventBus } from '../main';
    export default {
        // 普通传值
        // props: ['name']

        // 指定传递的类型
        // props: {
        //     'name': String
        // }

        // 更多验证
        props: {
            name: {
                type: String,
                default: 'anne'
            },

            // 引用父组件的回调函数
            resetNameFn: Function,
            userAge: Number
        },
        methods: {
            resetName() {
                this.name = 'MyNameIsReset!';
                this.$emit('nameWasReset', this.name);   //定义一个事件;
            }
        },
        created() {
            // $on 监听ageWasEdit事件，事件发生时，执行回调函数，用() => {}表示回调的函数
            // 执行回调函数，回调函数传入参数是age，这个值是是事件发生时返回的值
            eventBus.$on('ageWasEdit', (age) => {
                this.userAge = age
            })
        }

        
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
