function apresentar(nome){
    return `mmeu nome é ${nome}`
}

const apresentarArrow = nome => `meu nome é ${nome}`

const soma = (num1, num2) => num1 + num2

//com mais de uma linha de codigo

const somaNumerosPequenos = (num1,num2) => {
    if (num1 > 10 || num2 > 10){
        return "spmente numeros de 1 a 9"
    }else {
        return num1 + num2
    }
}

console.log(somaNumerosPequenos(11,4))