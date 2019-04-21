<template>
    
    <li class="list-group-item" @click="selected" style="cursor: pointer">Server #{{ server.id }} -- {{ server.status }}</li>

</template>

<script>
import { eventBus } from './main';
export default {
    props: ['server'],
    methods: {
        selected() {
            eventBus.$emit('wasSelected', this.server)
        }
    }
}
</script>
