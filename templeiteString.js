const nome = "robson";
const idade = 2023 - 1989;
const cidadeDeNascimento = "sjc";


const apresentacao = `meu nome é ${nome}, minha idade é ${idade} 
e nasci na cidade de ${cidadeDeNascimento}`;

console.log(apresentacao)


const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`

console.log(pedido)