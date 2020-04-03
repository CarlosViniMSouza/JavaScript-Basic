//Aula voltada para Controle de dados com JavaScript

/*Dica: converter 'var variavel' em um Inteiro ou Float:  
  Number.parseInt(variavel)
  Number.parseFloat(variavel)
  Number(variavel) ~ Comando para o  JS decidir se sera inteiro ou  float
*/

/*Dica: para converter de numero para String:
  String(variavel)
  variavel.toString()
*/

/*Formatando Strings:
var js = 'JavaScript'
  'Estou aprendendo agora a linguagem' + js  //Concatenar string com string
  'Estou aprendendo agora a linguagem ${js}'  //Usa template string, concatena tbm
  - - > O template só funcionara se vc trocar as ' ' ou " " por ` ` p/ mostrar a frase 
*/

/*Dicas para controle de strings no decorrer do programa:
  (variavel).length - - > quantos caracteres ha na string selecionada
  (variavel).toUpperCase() - - > coloca tudo em  MAIUSCULO
  (variavel).toLowerCase()  - - > coloca tudo em  minusculo
*/

/*Formatando Numeros:
(num.1) ~ numero digitado  //  (num.2) ~ numero manipulador
  (num.1).toFixed(num.2) ~ seria o %.2f da linguagem C/Python
  (num.1).toFixed(num.2).replace('.' , ',') ~ faz o mesmo do de cima, e ainda troca o . por ,

Comando Especial - coloca um numero em formato de "Numero no dinheiro de um certo pais"
  (num.1).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) ~ Real
  (num.1).toLocaleString('pt-BR', {style: 'currency', currency: 'USD'}) ~ Dólar
  (num.1).toLocaleString('pt-BR', {style: 'currency', currency: 'EUR}) ~ Euro
*/