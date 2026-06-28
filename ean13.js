function calcularEAN13(codigo) {
  let soma = 0;

  for (let i = 0; i < 12; i++) {
    let digito = parseInt(codigo[i]);
    if (i % 2 === 0) {
      soma += digito * 1;
    } else {
      soma += digito * 3;
    }
  }

  let resto = soma % 10;
  if (resto === 0) {
    return 0;
  } else {
    return 10 - resto;
  }
}

function calcular() {
  let codigo = document.getElementById("campo").value;
  let digito = calcularEAN13(codigo);
  document.getElementById("resultado").innerHTML = 
    "Dígito verificador: " + digito + 
    "<br>Código completo: " + codigo + digito;
}