function fat(n){
    let f = 1

    for(let i = n; i > 1; i--){
        f *= i
    }
    return f
}

console.log(fat(5))