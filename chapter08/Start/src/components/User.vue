<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change Name!</button>
        <h3>My Name: {{ name }}</h3>
        <h3>My age: {{ age }}</h3>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                :name='name'
                @nameWasReset="name = $event"
                :resetNameFn='resetNameFn'
                :userAge="age"
                ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                :userAge='age'
                @ageWasEdit='age = $event'
                ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
            return {
                name: 'william.chi',
                age: 30
            }
        },
        methods: {
          changeName() {
              return this.name='Max';
          },
          // 定义的回调函数
          resetNameFn() {
              this.name = 'RestMyName'
          }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
