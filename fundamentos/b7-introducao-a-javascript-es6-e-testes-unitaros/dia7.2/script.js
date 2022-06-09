function sum() {
  let value1 = document.getElementById('value1').value;
  let value2 = document.getElementById('value2').value;
  
  try {
    if (value1.length === 0 || value2.length === 0) {
      throw new Error(`Digite um número em cada campo!`);
    }
    const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerText = `Resultado: ${result}`;
  } catch (error) {
    document.getElementById('result').innerText = `Erro: ${error.message}`;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}
