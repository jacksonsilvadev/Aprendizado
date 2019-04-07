<template>
    <div class="comp">
        <table>
            <tr>
                <th>Nome</th>
                <th>Completa?</th>
            </tr>
            <tr v-for="(task,index) in tasks" :key="index">
                <td>{{ task.name }}</td>
                <td>{{ task.completed ? 'Sim' : 'Não' }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tasks: [
                {name: 'Lavar Louça', completed: true},
                {name: 'Lavar Carro', completed: false},
                {name: 'Lavar Banheiro', completed: true},
                {name: 'Lavar Copos', completed: false}
            ]
        }
    }
}
</script>

<style scoped>
    .comp {
        border: 1px solid red
    }
</style>