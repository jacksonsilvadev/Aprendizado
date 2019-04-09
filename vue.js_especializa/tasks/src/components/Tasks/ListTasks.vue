<template>
    <div>
        <h1 class="text-center">{{ title }}</h1>

       <div class="row">
            <form class="form">
            <input type="text" class="form-control" v-model="filter" placeholder="Encontrar?">
        </form>

        <form class="form form-inline ml-5" @submit.prevent="onSubmit">
            <input type="text" v-model="task.name" placeholder="Name" class="form-control">
            <button class="btn btn-primary">Enviar</button>
        </form>
       </div>

        <table class="table table-dark">
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th width="190">Ações</th>
            </thead>
            <tbody>
                <tr v-for="(task,index) in filteredItems" :key="index">
                   <td>{{ task.id }}</td> 
                   <td> {{ task.name }} </td> 
                   <td>
                       <a href="#" @click.prevent="editData(task.id)" class="btn btn-info">Editar</a>
                       <a href="#" @click.prevent="deleteData(task.id)" class="btn btn-danger">Deletar</a>
                    </td> 
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data () {
        return {
            title: 'Lista de Tarefas',
            tasks: [],
            task: {
                id:'',
                name: ''
            },
            updating: false,
            updateIndex: '',
            filter: ''
        }
    },
    methods: {
        onSubmit(){
            if (this.updating){
                this.update()
               return
            }
             

           return this.saveData()
        },
        saveData(){

            
            this.task.id = this.tasks.length + 1
            
            this.tasks.push(this.task)
            this.clearForm()
        },
        editData(id){
            this.clearForm()
            this.updatedIndex = this.findIndexItem(id)
           this.task = this.tasks[this.updatedIndex]
            
           this.updating = true
        },
        update(){

            this.tasks[this.updateIndex] = this.task

           this.clearForm()
            this.updating = false
            this.updateIndex = false

        },
        clearForm() {
             this.task = {
                id:'',
                name: ''
            }
        },
        deleteData (id) {
            this.tasks.splice(this.findIndexItem(id), 1)
        },
        findIndexItem (id) {
            for(let index = 0; index < this.tasks.length -1; index++){
                if(this.tasks[index].id == id)
                return index
            }
        }
    },
    computed: {
        filteredItems (){
            if( this. filter === '')
                return this.tasks
        let vm = this
       
       /*return this.tasks.filter(task => {
            return task.name.indexOf(vm.filter) > -1
        }) */

        
        return this.tasks.filter(task => {
            return task.name.toLowerCase().indexOf(vm.filter.toLowerCase()) > -1
        })
           
          /* return this.tasks.filter(task => {
            return this.task['name'].includes(vm.filter)
        })*/
        
        }    
        },
}
</script>

<style scoped>
    form {
        margin: 20px 0;
    }
</style>
