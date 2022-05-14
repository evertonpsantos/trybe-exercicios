const salarioBruto = 3000;

if (salarioBruto <= 1556.94) {
  let aliquotaInss = (salarioBruto * 8) / 100;
  let salarioBrutoInss = salarioBruto - aliquotaInss;
  console.log(salarioBrutoInss);
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  let aliquotaInss = (salarioBruto * 9) / 100;
  const salarioBrutoInss = salarioBruto - aliquotaInss;
  if (salarioBrutoInss >= 1903.99 && salarioBrutoInss <= 2826.25) {
    let aliquotaImpostoDeRenda = (salarioBrutoInss * 7.5) / 100 - 142.8;
    let salarioFinal = salarioBrutoInss - aliquotaImpostoDeRenda;
    console.log(salarioFinal);
  } else if (salarioBrutoInss >= 2826.66 && salarioBrutoInss >= 3751.05) {
    let aliquotaImpostoDeRenda = (salarioBrutoInss * 15) / 100 - 354.8;
    let salarioFinal = salarioBrutoInss - aliquotaImpostoDeRenda;
    console.log(salarioFinal);
  } else if (salarioBrutoInss >= 3751.06 && salarioBrutoInss >= 4664.68) {
    let aliquotaImpostoDeRenda = (salarioBrutoInss * 22.5) / 100 - 636.13;
    let salarioFinal = salarioBrutoInss - aliquotaImpostoDeRenda;
    console.log(salarioFinal);
  } else if (salarioBrutoInss > 4664.68) {
    let aliquotaImpostoDeRenda = (salarioBrutoInss * 27.5) / 100 - 869.36;
    let salarioFinal = salarioBrutoInss - aliquotaImpostoDeRenda;
    console.log(salarioFinal);
  }
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  let aliquotaInss = (salarioBruto * 11) / 100;
  let salarioBrutoInss = salarioBruto - aliquotaInss;
  if (salarioBrutoInss >= 1903.99 && salarioBrutoInss <= 2826.25) {
    let aliquotaImpostoDeRenda = (salarioBrutoInss * 7.5) / 100 - 142.8;
    let salarioFinal = salarioBrutoInss - aliquotaImpostoDeRenda;
    console.log(salarioFinal);
  } else if (salarioBrutoInss >= 2826.66 && salarioBrutoInss >= 3751.05) {
    let aliquotaImpostoDeRenda = (salarioBrutoInss * 15) / 100 - 354.8;
    let salarioFinal = salarioBrutoInss - aliquotaImpostoDeRenda;
    console.log(salarioFinal);
  } else if (salarioBrutoInss >= 3751.06 && salarioBrutoInss >= 4664.68) {
    let aliquotaImpostoDeRenda = (salarioBrutoInss * 22.5) / 100 - 636.13;
    let salarioFinal = salarioBrutoInss - aliquotaImpostoDeRenda;
    console.log(salarioFinal);
  } else if (salarioBrutoInss > 4664.68) {
    let aliquotaImpostoDeRenda = (salarioBrutoInss * 27.5) / 100 - 869.36;
    let salarioFinal = salarioBrutoInss - aliquotaImpostoDeRenda;
    console.log(salarioFinal);
  }
} else if (salarioBruto > 5189.82) {
  let aliquotaInss = (salarioBruto * 11) / 100;
  let salarioBrutoInss = salarioBruto - aliquotaInss;
  if (salarioBrutoInss >= 1903.99 && salarioBrutoInss <= 2826.25) {
    let aliquotaImpostoDeRenda = (salarioBrutoInss * 7.5) / 100 - 142.8;
    let salarioFinal = salarioBrutoInss - aliquotaImpostoDeRenda;
    console.log(salarioFinal);
  } else if (salarioBrutoInss >= 2826.66 && salarioBrutoInss >= 3751.05) {
    let aliquotaImpostoDeRenda = (salarioBrutoInss * 15) / 100 - 354.8;
    let salarioFinal = salarioBrutoInss - aliquotaImpostoDeRenda;
    console.log(salarioFinal);
  } else if (salarioBrutoInss >= 3751.06 && salarioBrutoInss >= 4664.68) {
    let aliquotaImpostoDeRenda = (salarioBrutoInss * 22.5) / 100 - 636.13;
    let salarioFinal = salarioBrutoInss - aliquotaImpostoDeRenda;
    console.log(salarioFinal);
  } else if (salarioBrutoInss > 4664.68) {
    let aliquotaImpostoDeRenda = (salarioBrutoInss * 27.5) / 100 - 869.36;
    let salarioFinal = salarioBrutoInss - aliquotaImpostoDeRenda;
    console.log(salarioFinal);
  }
}
