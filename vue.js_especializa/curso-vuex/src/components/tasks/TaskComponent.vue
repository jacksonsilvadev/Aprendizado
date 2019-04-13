<template>
    <div>
        <h1 v-text="title"></h1>
    <task-add-component></task-add-component>
        <ul>
            <li v-for="(task,index) in getTasksSorted" :key="index" :class="{'completed': task.completed}">

                <a href="#" @click.prevent="completedTask(task)">Toggle</a>
                {{ task.name }}
            </li>
        </ul>
    </div>
</template>

<script>
import TaskAddComponent from './TaskAddComponent'

export default {
    data() {
        return {
            title: 'Task page'
        }
    },
    methods: {
        completedTask(task) {
            this.$store.commit('COMPLETED_TASK',task)
        }
    },
    computed: {
        getTasks () {
            return this.$store.state.tasks
        },
        getTasksSorted () {
            return this.$store.getters.sortedTasks
        },
        getTaskCompleted () {
            return this.$store.getters.taskCompleted
        },
        getTaskNotCompleted (){
            return this.$store.getters.tasksNotCompleted
        }
    },
    components: {
        TaskAddComponent
    }
}
</script>

<style scoped>
    .completed {
        border: 2px solid greenyellow
    }
</style>