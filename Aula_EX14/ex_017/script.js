function calculoTab(){
    var num = document.getElementById('cNum').value
    var select = document.querySelector('#cSelec')

    if(num.length == 0){
        alert('[ERRO] Digite o número solicitado!!')
    } else {
        select.innerHTML = ''
        for(var i = 1; i <= 10; i++){
            Number(num)
            var s = i * num
            select.options[select.options.length] = new Option(i + ' * ' + num + ' = ' + s) // cria a nova option dentro do select
        }
    }
}