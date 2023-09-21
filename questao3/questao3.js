function calcularNotasPonderadas() {
    var name = document.getElementById("nomeAluno").value;
    var primeiraNota = parseFloat(document.getElementById("primeiraNota").value);
    var segundaNota = parseFloat(document.getElementById("segundaNota").value);

    var notaPonderada1 = primeiraNota * 0.6;
    var notaPonderada2 = segundaNota * 0.4;
    var notaTotal = notaPonderada1 + notaPonderada2

    document.getElementById("notaPonderada1").textContent = notaPonderada1.toFixed(2);
    document.getElementById("notaPonderada2").textContent = notaPonderada2.toFixed(2);
    document.getElementById("notaTotal").textContent = notaTotal;

  if(notaPonderada1 != null &&
     notaPonderada2 != null &&
     name != "" &&
     !isNaN(notaTotal)
    ) {
    alert(`Nome: ${name}\nNota Total: ${notaTotal}`);
  }
}
