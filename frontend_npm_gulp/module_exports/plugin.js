function imc(peso, altura) {
  let imc = peso / (altura * altura);

  return imc;
}

function quadrado(numero) {
  return numero * numero;
}

module.exports.imc = imc;
module.exports.quadrado = quadrado;