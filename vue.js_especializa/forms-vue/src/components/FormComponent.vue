<template>
    <div>
        <form @submit.prevent="saveData">
             <div :class="errors.has('name') ? 'is-danger' : 'is-success'">
                <input v-validate="'required|min:3|max:10'" name="name" type="text" v-model="userData.name" placeholder="Nome">
                <p v-if="errors.has('name')">{{ errors.first('name') }}</p>
            </div>
            <hr>
            <!-- <div :class="{'is-danger' : errors.has('email')}"> -->
            <div :class="errors.has('email') ? 'is-danger' : 'is-success'">
                <input type="email" v-validate="'required|email'" name="email" v-model="userData.email" placeholder="E-mail">
                <p v-if="errors.has('email')">{{ errors.first('email') }}</p>
            </div>
            <hr>
            <div :class="errors.has('age') ? 'is-danger' : 'is-success'">
                <input type="text" v-validate="'required|numeric|min_value: 18'" name="age" v-model.number="userData.age" placeholder="Idade">
                <p v-if="errors.has('age')">{{ errors.first('age') }}</p>
            </div>
            <hr>
             <div :class="errors.has('sex') ? 'is-danger' : 'is-success'">
                <input type="radio" v-validate="'required'" v-model="userData.sex" name="sex" value="M"> Masculino |
                <input type="radio"  v-validate="'required'" v-model="userData.sex" name="sex" value="F"> Feminino
                 <p v-if="errors.has('sex')">{{ errors.first('sex') }}</p>
            </div>
            <hr>
            <select v-model="userData.state">
                <option value="">Selectione o Estado</option>
                <option value="SP">São Paulo</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="MG">Minas Gerais</option>
            </select>
            <hr>
            <label for="agree">Concordo com os termos de uso</label>
            <input type="checkbox" v-model="terms" id="agree">
            <hr>
            <textarea cols="30" rows="10" v-model="description"></textarea>
            <hr>
            <button type="submit"> Enviar </button>
        </form>

        <div v-if="isSubmited">
            {{ userData }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userData:{
                name: '',
                email: '',
                age: '',
                sex: '',
                state: ''
                },
            terms: true,
            description: '',
            isSubmited: false
        }
    },
    methods: {
        saveData() {
        this.$validator.validateAll().then((result) => {
            if (result) {
                    this.isSubmited = true
                    return;
            }
        })
            
        }
    }
    
}
</script>

<style scoped>
   .is-danger input{
       border: 2px solid red
   } 
   .is-success input{
       border: 2px solid green
   }
</style>