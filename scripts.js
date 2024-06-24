function generateNumber() {
  const valorMin = Math.ceil(document.getElementById("input-min").value);
  const valorMax = Math.floor(document.getElementById("input-max").value);

  if (valorMax > valorMin) {
    const numeroAleatorio = Math.floor(
      Math.random() * (valorMax - valorMin + 1) + valorMin
    );

    document.getElementById("numero-aleatorio").textContent = numeroAleatorio;
  } else {
    document.getElementById("numero-aleatorio").textContent =
      "O valor máximo tem que ser maior que o valor minímo";
  }
}
