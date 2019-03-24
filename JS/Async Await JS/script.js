function requisitar() {

const url = 'https://alunos.b7web.com.br/api/ping'
const params = {
    method: 'POST',
    body: JSON.stringify({
        nome:'Bonieky',
        idade:99
    })
}

fetch(url, params)
.then((response)=>{
    response.json()
    console.log(response.json())
}).then((json)=>{
    console.log(json)
})

}
requisitar();

// Segunda Maneira

async function requisitar2() {
    const url = 'https://alunos.b7web.com.br/api/ping'
const params = {
    method: 'POST',
    body: JSON.stringify({
        nome:'Bonieky',
        idade:99
    })
}
    const r = await fetch(url,params);
    const json = await r.json();
    console.log(json)
    console.log("Alguma coisa")
}

requisitar2()