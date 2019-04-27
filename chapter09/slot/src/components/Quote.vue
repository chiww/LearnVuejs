<template>
    <div>
        <div>
            <slot name="title"></slot>
            <!-- 可以直接默认插槽的内容，如果没有从父组件传递值的话，就会使用默认的值 -->
            <span style="color: blue;"><slot name="subTilte">This is SubTitle</slot></span>
        </div>
        <div>
            <slot name="content"></slot>
        </div>
        
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }
    /* 仅在子组件中生效 */
    h2 {
        color: red
    }
</style>
