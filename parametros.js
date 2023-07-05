// parametros de função


function soma(numero1, numero2){
    return numero1+numero2;

}

console.log(soma(4, 5))
console.log(soma(3, 90))
console.log(soma(4, 775))

// ordem parametros

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade(40, "juliana"))

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5)))