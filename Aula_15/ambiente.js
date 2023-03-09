let num = [5, 8, 2, 3]
num[3] = 6
num.push(9)

num.sort()

for(let i = 0; i < num.length; i++){
    console.log(num[i])
}

let pos = num.indexOf(8)

if(pos == -1){
    console.log('Valor não encontrado')
} else {
    console.log(`O valor se encontra na posição ${pos}`)
}

//console.log(num.length)
//console.log(num)