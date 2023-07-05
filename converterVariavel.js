// conversão implicita 
const numero = 456;
const numeroString = '456';

console.log(numero === numeroString)
console.log(numero == numeroString)
console.log(numero + numeroString)

// Number() = transforma string em numero
// String() = transforma numero em string

console.log(numero + Number(numeroString))
  
// conversão explicita 