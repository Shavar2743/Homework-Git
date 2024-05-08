eingabefeld.addEventListener("input", function jein() {
    const jahr = this.value;
    if (schaltjahr(jahr)) {
        ausgabe.textContent = "JA";
        ausgabe.style.color = "green";
    } else {
        ausgabe.textContent = "NEIN";
        ausgabe.style.color = "red";
    }
});

function schaltjahr(jahr) {
    if ((jahr % 4 === 0 && jahr % 100 !== 0) || jahr % 400 === 0) {
        return true;
    } else {
        return false;
    }
}