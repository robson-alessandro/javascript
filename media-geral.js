const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculamedia(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acumulador, notas )=> {
        return acumulador + notas;
    },0)

    const media = somaDasNotas/notasDaSala.length;

    return media;

}

console.log(`a media da sala salaJS é ${calculamedia(salaJS)}`);
console.log(`a media da sala salaJava é ${calculamedia(salaJava)}`);
console.log(`a media da sala salaPython é ${calculamedia(salaPython)}`);