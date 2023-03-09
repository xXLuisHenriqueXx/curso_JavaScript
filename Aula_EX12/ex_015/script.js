function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anoDig = document.getElementById('anoNasc').value
    var sexo = document.querySelector('input[name="tSex"]:checked').value
    var res = document.getElementById('img')
    
    res.style.textAlign = 'center'
    if(sexo.length == 0){
        if(anoDig.length == 0 || anoDig > ano){
            window.alert('[ERRO] Verifique os dados digitados!')
        } else {
            var idade = ano - Number(anoDig)
            var genero = ''
            var img = document.createElement('img') // cria um img
            img.setAttribute('id', 'foto') // adiciona um id = foto para o img
            img.style.width = '250px' // redimensiona o img
    
            switch(sexo){
                case 'f':
                    genero = 'Mulher'
    
                    if(idade >= 0 && idade <= 12){
                        img.setAttribute('src', '/Aula_EX12/ex_015/imagens/crianca_f.png') // seta o src do img como a imagem escolhida
                    } else if(idade <= 17){
                        img.setAttribute('src', '/Aula_EX12/ex_015/imagens/jovem_f.png')
                    } else if(idade <= 65){
                        img.setAttribute('src', '/Aula_EX12/ex_015/imagens/adulto_f.png')
                    } else {
                        img.setAttribute('src', '/Aula_EX12/ex_015/imagens/idosa_f.png')
                    }
                    break
    
                case 'm':
                    genero = 'Homem'
    
                    if(idade <= 12){
                        img.setAttribute('src', '/Aula_EX12/ex_015/imagens/crianca_m.png')
                    } else if(idade <= 17){
                        img.setAttribute('src', '/Aula_EX12/ex_015/imagens/jovem_m.png')
                    } else if(idade <= 65){
                        img.setAttribute('src', '/Aula_EX12/ex_015/imagens/adulto_m.png')
                    } else {
                        img.setAttribute('src', '/Aula_EX12/ex_015/imagens/idoso_m.png')
                    }
                    break
            }
            res.innerHTML = `<strong>${genero}</strong> com <strong>${idade}</strong> anos de idade.`
            res.appendChild(img) // exibe a img
        }
    }
}