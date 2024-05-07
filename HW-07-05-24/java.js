function schaltjahr(jahr) {
    if ((jahr % 4 === 0 && jahr % 100 !== 0) || jahr % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

eingabefeld.addEventListener("input", function() {
    const jahr = parseInt(this.value);
    if (!isNaN(jahr)) {
        if (schaltjahr(jahr)) {
            ausgabe.textContent = `JA`;
        } else {
            ausgabe.textContent = `NEIN`;
        }
    }
});