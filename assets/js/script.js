function abrirCaixa() {
  let caixa = document.getElementById("caixaTexto");
  caixa.style.display = caixa.style.display === "block" ? "none" : "block";
}

function enviar() {
  let texto = document.getElementById("mensagem").value;
  let numero = "5582991156122";

  let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(texto);
  window.open(url, "_blank");
}