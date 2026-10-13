let nome1 = prompt("Nome do aluno:");
let nota1 = prompt("Nota 1 do aluno:");
let nota2 = prompt("Nota 2 do aluno:");
let nota3 = prompt("Nota 3 do aluno:");
let nota4 = prompt("Nota 4 do aluno:");

let media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;

alert("Média do aluno " + nome1 + ": " + media.toFixed(2));