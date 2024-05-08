eingabefeld.addEventListener("input", function jein() {
    const jahr = this.value;
    if (isNaN(parseInt(jahr))) {
        ausgabe.textContent = "";
    } else {
        if ((jahr % 4 === 0 && jahr % 100 !== 0) || jahr % 400 === 0) {
            ausgabe.textContent = "JA";
            ausgabe.style.color = "green";
        } else {
            ausgabe.textContent = "NEIN";
            ausgabe.style.color = "red";
        }
    }
});
