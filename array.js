const notas = [3 ,5 , 7.5, 8, 9]

const media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / notas.length

console.log (media)


// adicionar elementos

notas.push(5,6) // na ultima posição
notas.unshift(90) // na primeir posição
console.log(notas)

// deletar elementos  - 

notas.pop() //apaga o ultimo elemento
notas.shift()  //apaga o primeiro elemento
console.log(notas)