// Continuação da Aula07JS

/*
Operadores Relacionais:
  5 > 2 : true
  7 < 4 : false
  4 != 4 : false
  9 <= 7 : false 
*/

/*
Identidade dos caracteres/numeros:
  5  == 5 : true
  5 ==  '5' : true
  5 === '5': false ~ Nesse caso, temos: eles sao iguais em quant. e tipo?
  5 != '5' : false
  5 !== '5' : true 
  */

/*
Operadores Logicos:
  ! : negaçao ~ dependendo da condiçao sairá 'true' ou 'false'
  && : conjunçao ~ o resultado so sera 'true' se ambas as condicoes derem 'true'
  || : disjunçao ~ basta que uma das condicoes sejam verdadeiras para dar 'true'
*/

/* caso tenhamos os 3 tipos de operadoores na mesma  linha de codigo, resolveremos na seguinte ordem:
1 - oper. aritmeticos
2 - oper. relacionais
3 - oper. logicos
-- > ordem a ser seguida nos logicos: 1- !; 2- &&; 3- ||
*/

/*
Vejamos alguns exemplos nas linhas de codigos:
- idade >= 15 && idade <=17   /// a idade esta entre 15 e 17 anos?
- estado == "RJ" || estado = "SP"   /// o estado é SP ou RJ
- salario > 1500 && sexo != "M"     /// O salario é acima de 1500 e nao é homem?
*/

/*
Operadores Ternários:
  São apenas 2: '?' e o ':'
  exemplo:
  media >= 7.0 ? "aprovado" : "reprovado"
*/