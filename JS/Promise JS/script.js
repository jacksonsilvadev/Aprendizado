

// Uma função
function fazer() {
// Executa uma promessa que é executada até receber o valor real que a requisição/dados esta lhe enviando
    let promise = new Promise((resolve,reject)=>{
        console.log('Teste')
        setTimeout(()=>{
            resolve('Ok');
        }, 3000)

    });
    return promise;
}
// Assim que recer a promise ele executa um então (then) que faz com que você receba o valor real a requisição
fazer().then((resposta)=>{
    console.log(resposta)
})