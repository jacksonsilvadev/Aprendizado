<template>
    <div>
        <h1 v-text="title"></h1>

        <ul>
            <li v-for="(item, index) in items" :key="index"> {{ item }} </li>
        </ul>
        {{ call() }}
    </div>
</template>

<script>
export default {
    props: ['items','call'],
    data () {
       return {
           title: 'Lista de tarefas'
       }
    }
}
</script>

<style scoped>
    
</style>