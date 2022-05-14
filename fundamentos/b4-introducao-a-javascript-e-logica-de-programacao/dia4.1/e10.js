const custoProduto = 10;
const valorVenda = 20;

if (custoProduto >= 0 && valorVenda >= 0) {
  const valorCustoTotal = custoProduto * 1.2;
  const lucro = valorVenda - valorCustoTotal;
  const lucroTotal = lucro * 1000;
  console.log(lucroTotal);
} else {
  console.log("Erro: insira um valor positivo");
}