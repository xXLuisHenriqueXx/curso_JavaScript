let num = document.getElementById('cNum')
let select = document.querySelector('select#cSelect')
let res = document.querySelector('div#res')
let dados = []

function isNum(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, d){
    if(d.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionarNumero(){
    res.innerHTML = ''
    if(isNum(num.value) && !inLista(num.value, dados)){
        dados.push(Number(num.value))
        let item = document.createElement('option') // cria o option
        item.text = `O valor ${num.value} foi adicionado!` // adiciona um texto pro option
        select.appendChild(item) // adiciona o option no select
    } else {
            alert('[ERRO] São permitidos somente números no intervalo entre 1 e 100 ou não existentes na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(dados.length == 0){
        alert('[ERRO] Adicione valores antes de finalizar!')
    } else {
        let tamDados = dados.length
        let maiorValor = Math.max.apply(null, dados)
        let menorValor = Math.min.apply(null, dados)
        let soma = 0

        for (const i in dados) {
            soma += dados[i]
        }

        let media = soma / tamDados

        res.innerHTML += `<p>No total, possuímos ${tamDados} valores.</p>`
        res.innerHTML += `<p>O maior valor é ${maiorValor}.</p>`
        res.innerHTML += `<p>O menor valor é ${menorValor}</p>`
        res.innerHTML += `<p>O somatório de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
}