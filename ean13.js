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

  if (codigo.length !== 13) {
    document.getElementById("resultado").innerHTML = "Código inválido";
    return;
  }

  if (isNaN(codigo)) {
    document.getElementById("resultado").innerHTML = "Código inválido";
    return;
  }

  let doze = codigo.substring(0, 12);
  let digitoCalculado = calcularEAN13(doze);
  let digitoLido = parseInt(codigo[12]);

  if (digitoCalculado === digitoLido) {
    document.getElementById("resultado").innerHTML =
      "✅ Código válido!" +
      "<br>Dígito verificador: " + digitoCalculado;
  } else {
    document.getElementById("resultado").innerHTML =
      "❌ Código inválido!" +
      "<br>Dígito verificador correto: " + digitoCalculado;
  }
}

document.getElementById("campo").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    calcular();
  }
});
