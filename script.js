/*

antes de tudo peça o nome do aluno

01. Solicite a primeira nota do bimestre.
02. O usuário fornece a nota do primeiro bimestre.
03. A nota do primeiro bimestre é armazenada.

04. Solicite a segundo nota do  bimestre.
05. O usuário fornece a nota do segundo bimestre.
06. A nota do segundo bimestre é armazenada.

07. Solicite a terceiro nota do bimestre.
08. O usuário fornece a nota do terceiro bimestre.
09. A nota do terceiro bimestre é armazenada.

10. Calcule a média e armazene o resultado.
11. Exiba o resultado com uma menssagem para o caso de aprovado e reprovado.
*/

// Capturando o nome do estudante/aluno
let student = prompt('Digite o nome do aluno!')

// Capturando as três notas do estudante!
let n1 = prompt('Digite a primeira nota do bimestre!')
let n2 = prompt('Digite a segunda nota do bimestre!')
let n3 = prompt('Digite a terceira nota do bimestre!')

// Calculando a média do estudante!
let average = (Number(n1) + Number(n2) + Number(n3)) / 3

// Verificando as condições bolenas para o estudante passar no bimestre!
let theApprovedStudent = average >= 60
let theFailedStudent = average <= 60

// Tratando o dado pegando para ser exibido!
average = average.toFixed(0).replace('.', ',')

// Uma menssagem parabenizando e Uma menssagem incentivando
let aCongratulatoryMessage = `Parabens ${student} sua média atingiu ${average} pontos e você passou no bimestre!`
let anEncouragingMessage = `Estude para a recuperação ${student} porque sua média foi ${average} pontos que é meno que 60 (mínimo)`

// Se o estudante for aprovado
if (theApprovedStudent) {
  alert(aCongratulatoryMessage)
}

// Se o estudante for reprovado
if (theFailedStudent) {
  alert(anEncouragingMessage)
}
