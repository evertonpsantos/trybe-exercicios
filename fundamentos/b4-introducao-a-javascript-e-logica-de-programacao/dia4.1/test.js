const notaDesafioPratico = 2;

if (notaDesafioPratico >= 80 && notaDesafioPratico <= 100) {
   console.log("Parabéns, você foi aprovado!!")
} else if (notaDesafioPratico < 80 && notaDesafioPratico >= 60) {
   console.log("Você esta na nossa lista de espera.")
} else if (notaDesafioPratico < 60 && notaDesafioPratico >= 0) {
   console.log("Você foi reprovado.")
} else {
   console.log("Valor inválido.")
}