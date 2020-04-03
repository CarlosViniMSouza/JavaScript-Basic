// Aula 16 : Funções

/*
São açoes executadas assim que são 
chamadas ou em decorrencia de algum evento

Uma função pode receber parâmetros e
retornar um resultado.

Modelo:  function ação() {

                }

Novo Modelo:   function ação(param.) {
                            return res ---> açao
                          } 
                        ação(5) --> chamada
*/

function par_imp(numero) {
  if (numero % 2 == 0) {
      return  'par'
  } else{
    return 'impar'
  }
}
console.log(par_imp(19))

function Som(v1=0, v2=0) {
  return (v1 + v2 + 3)
}
console.log(Som(4, 7))

function fatoriando(num) {
  let fact = 1
    for (let fac=num; fac > 1; fac--) {
        fact *= fac
    }
    return fact
}
console.log(fatoriando(6)) // Assim fzemos o fatorial de 1 numero!