const numeros = [100, 200, 300, 400, 500, 600];

for  (let indice = 0; indice < 6; indice++) {
    console.log(numeros[indice])
}

// calcular media com for 

const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

for (let indice = 0; indice < notas.length; indice++){
   somaDasNotas += notas[indice];
}

const media = somaDasNotas / notas.length
console.log(`a media das notas é ${media}`)

// calcular media com for of 
let somaDasNotas2 = 0
for (let nota of notas){
    somaDasNotas2 += nota
}

const media2 = somaDasNotas2 / notas.length

console.log(`a media é ${media2}`)