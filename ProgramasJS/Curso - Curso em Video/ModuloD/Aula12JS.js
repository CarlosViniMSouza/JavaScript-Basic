// Aula 12 JS: Condições dentro de condições

var n1 = 8
var n2 = 7.5
var n3 = 8
var n4 = 8.5
var nf = 10
var mp = (n1+n2+n3+n4)/4
var mf = (mp+nf)/2

console.log(`Sua média foi de: ${mp}\n`)
if (mp >= 8) {
  console.log("Aprovado de Primeira!\n")
} else {
  console.log("Terá que fazer a PF\n")
  if (mf >= 6) {
      console.log(`Sua média final foi de: ${mf}\n`)
      console.log("Passou no sufoco!\n")
  } else {
      console.log("Reprovado!\n")
  }
}

var now = new Date()
var hour = now.getHours()

console.log(`Agora são ${hour}\n`)
if (hour >= 6 && hour < 12) {
  console.log("Agora estamos no turno da manhã!\n")
} else {
  if (hour >= 12 && hour < 18)
  {
    console.log("Agora estamos no turno da tarde!\n")
  } else {
    if (hour >= 18 && hour < 00) {
    console.log("Agora estamos no turno da noite!\n")
    } else {
      console.log("Agora estamos no turno da madrugada...O melhor de todos os turnos!\n")
    }
  }
}

/*
switch (condição) {
  case v1:
    break
  case v2:
    break
  case v3:
    break
  default:
    break
}*/

// Vamos tester o switch case

var day = new Date()
var dayweek = day.getDay()
console.log(dayweek)

dayweek = 1

switch (dayweek) {
  case 0: 
    console.log("Domigo")
    break
  case 1: 
    console.log("Segunda-feira")
    break
  case 2:
    console.log("Terça-feira")
    break
  case 3: 
    console.log("Quarta-feira")
    break
  case 4: 
    console.log("Quinta-feira")
    break
  case 5: 
    console.log("Sexta-feira")
    break
  case 6: 
    console.log("Sábado")
    break
  default:
    console.log("ERRO!")
    break
}