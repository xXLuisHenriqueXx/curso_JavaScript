function contador(){
    var ini = document.getElementById('cIni').value
    var fim = document.getElementById('cFim').value
    var passo = document.getElementById('cPass').value
    var res = document.getElementById('res')

    if(ini.length == 0 || fim.length == 0 || passo.length == 0){
        alert('[ERRO] Por favor, preencha os campos apresentados!!')
    } else {
        var passoNum = Number(passo)
        var i = Number(ini)

        res.style.textAlign = 'center'
        res.innerHTML = '<p>Contando:</p>'
        while(i <= Number(fim)){
            res.innerHTML += i + ' 👉 '
            i = i + passoNum
        }
        res.innerHTML += '🏁'
    }
}