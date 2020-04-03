// Aula 17 : Próximos Passos.
// Video de conversa pessoal com o Guanabara (SO QUE NAO)!

//Aula 17 : Programação Orientada a Objetos!

/*
  let array = [2, 13, 6]
  [2  13  6]                     => Isso é  um array!
  0    1   2
*/

/* \\
let amigo = {nome: "Carlos", sexo: "M", peso: 73.5, engordar(param) {}}     => Isso é Objeto
                      nome                 sexo           peso            engordar()

let obj_1 = [1, 4, 5, 6]

console.log(typeof obj_1) // Array é um Objeto. (DE CERTA FORMA)  */

let obj_2 ={
  nome: "Carlos",
  idade: 19,
  sexo: "Masculino",
  peso: 73.5,
  ganho_peso(massa_extra = 0) {
      this.peso += massa_extra
  }
}
obj_2.ganho_peso(-3.5)
console.log(`${obj_2.nome} tem ${obj_2.idade} anos, do sexo ${obj_2.sexo} e pesa ${obj_2.peso} `)
console.log("Curso finalizado com sucesso!")