import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = {
    state: {
        tasks: [
            {name: 'Lavar Carro', completed: false},
            {name: 'Lavar Casa', completed: true},
            {name: 'Lavar Banheiro', completed: false},
            {name: 'Lavar Roupa', completed: true},
        ],

    },
    mutations: {
        ADD_TASK(state, task) {
            state.tasks.push(task)
        },
        COMPLETED_TASK(state, task) {
            task.completed = !task.completed
        }
    },
    actions: {
        addTask (context,task) {
            // ... ajax
            
            context.commit('ADD_TASK',task)
        }
    },
    getters: {
        sortedTasks (state) {
            let sorted = state.tasks

            return sorted.sort((a, b) => {
                if(a.name.toLowerCase() < b.name.toLowerCase()) return -1
                if(a.name.toLowerCase() >  b.name.toLowerCase()) return 1

                return 0
            })
        },
        tasksNotCompleted(state) {
            let sorted = state.tasks

            let tasksNotCompleted = sorted.filter( (task) => {
                return !task.completed
            })

            return tasksNotCompleted

             
        },
        taskCompleted(state) {
            let sorted = state.tasks

            let tasksCompleted = sorted.filter( (task) => {
                return task.completed
            })

            return tasksCompleted
        }
    }
}

export default store