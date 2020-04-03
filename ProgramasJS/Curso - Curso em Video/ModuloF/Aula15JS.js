// Hoje será o ultimo dia de JS no Curso em Vídeo - 24/03/2020 - SE Deus  permitir!

// Variavéis Simples e Compostas:

/*
Variavéis Simples:
  só consegue armazenar um valor por vez.

Variavéis Compostas:
  devem ser capazes de armazenar vários valores em uma mesma estrutura.
/
*
vaga n1 }
vaga n2 }  => vaga n = [1,2,3] 
vaga n3 }
*/

var n = ["Carro_verde", "Carro_verm", "Carro_azul"]

console.log(`${n[2]}`)

let num = [1,2 ,3 ,4]

//console.log(num[0])

num.push(5)

console.log(`${num}`) // Mostra todos os caracteres do Vetor

console.log(`No vetor há ${num.length} caracteres.`)

for (let vector=0; vector <= num.length; vector++) {
    console.log(`${vector}`)
} // Forma Tradicional de fazer arrays com for!

console.log(num) // Mostra todo o vetor direitinho

for (let vector in num) {
  console.log(num[vector])
} // Nova Forma de fazer arrays com for!

console.log(num.indexOf(4)) // aqui é para dizer onde está o caractere do vetor 