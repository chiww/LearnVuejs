<template>

    <div>
<!--        该方法丢失了样式-->
    <ul class="nav nav-pills">
        <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/user">User</router-link></li>
    </ul>

<!--    使用router-link属性来修改样式属性, 指定作用的标签，及其对应active的样式-->
    <div>
        <ul class="nav nav-pills">
            <router-link class="nav-link" to="/" tag="li" active-class="active" exact=""><a>Home</a></router-link>
            <router-link class="nav-link" to="/user" tag="li" active-class="active"><a>User</a></router-link>
        </ul>
    </div>
    </div>
</template>