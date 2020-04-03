// Aula 11 JS: Condição

/*
Condição Simples:     if (condição) { (True)

                                    }

Condição Comum:     if (condição) { (True)
                                    } else { (False)

                                    }
*/

//console.log("Primeira Linha de Código JS executada no curso")

var veloc = 50.1

console.log('A velocidade do motorista foi de: ' +  veloc+ 'Km/h')
if (veloc > 50) {
  console.log("Você ultrapassou a velocidade permitida. MULTA de R$2000,00")
} else {
  console.log("Tudo certo! Dirija com segurança.")
}