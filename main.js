
const nome = prompt("Qual'è il tuo Nome ?", "Pippo");
const cognome = prompt("Qual'è il tuo cognome", "Baudo");
let color = prompt("Qual'è il tuo colore preferito'?", "rosso");

document.getElementById("password").innerHTML = `La tua password sarà: ${nome} ${cognome} ${color} !23`;

