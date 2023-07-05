const texto1 = "ola, mundo!";
const texto2 = 'ola, mundo!';
const senha1 = "senhaSuperSegura456!";
const stringDeNumeros = "487593";

const citacao = 'meu nome é ';
const meuNome = "leonardo";
console.log(citacao)

// concatenação (+)

console.log(citacao + meuNome)

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// comparar string 

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); 

//  transformando todos os caracteres em letras minúsculas.

const cidade2 = "belo horizonte";
const input2 = "Belo Horizonte";

// o toLowerCase() que converte todos os caracteres da string informada

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); 

//A propriedade length pode ser utilizada para sabermos quantos caracteres uma string contém

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres
