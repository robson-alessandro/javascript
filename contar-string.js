
const frase = "uma sequência ordenada de caracteres"
var vezes = 0
const letra = "a"

for(let i = 0; i < frase.length; i++){
    (frase [i] == letra ? vezes++: null)
}

console.log(`a letra ${letra} aparece ${vezes} na frase`)