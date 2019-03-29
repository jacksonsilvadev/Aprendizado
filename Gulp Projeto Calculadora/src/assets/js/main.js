function calculo () {
    let n1 = parseInt(document.getElementById('n1').value)
    let n2 = parseInt(document.getElementById('n2').value)

    document.getElementById('n1').value = '' 
    document.getElementById('n2').value = '' 

    document.getElementById('resultado').innerText = `O resultado é ${n1+n2}`;
}