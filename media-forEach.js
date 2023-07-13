
//forEach pode receber de 1 a 3 argumentos; o elemento, o índice e o array atual

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function(nota){
    somaDasNotas += nota;
})

const media = somaDasNotas / notas.length
console.log(`a media das notas é ${media}`)


const nomes = ["Evaldo", "Mari", "Camis"];

function imprimeNome(nome) {
    console.log(nome);
  }

nomes.forEach(imprimeNome);