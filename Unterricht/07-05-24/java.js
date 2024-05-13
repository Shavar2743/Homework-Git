buttonadd.onclick = function() {
    let zahl1 = parseFloat(document.getElementById('eingabefeld1').value);
    let zahl2 = parseFloat(document.getElementById('eingabefeld2').value);
    ausgabe.textContent = parseFloat(zahl1) + parseFloat(zahl2);
};

buttonminus.onclick = function() {
    let zahl1 = parseFloat(document.getElementById('eingabefeld1').value);
    let zahl2 = parseFloat(document.getElementById('eingabefeld2').value);
    ausgabe.textContent = parseFloat(zahl1) - parseFloat(zahl2);
};

buttonmal.onclick = function() {
    let zahl1 = parseFloat(document.getElementById('eingabefeld1').value);
    let zahl2 = parseFloat(document.getElementById('eingabefeld2').value);
    ausgabe.textContent = parseFloat(zahl1) * parseFloat(zahl2);
};

buttongeteilt.onclick = function() {
    let zahl1 = parseFloat(document.getElementById('eingabefeld1').value);
    let zahl2 = parseFloat(document.getElementById('eingabefeld2').value);
    if (zahl2 != 0) {
        ausgabe.textContent = parseFloat(zahl1) / parseFloat(zahl2);
    } else {
        ausgabe.textContent = "Fehler"
    }
};

resetButton.onclick = function() {
    document.getElementById('eingabefeld1').value = "";
    document.getElementById('eingabefeld2').value = ""
ausgabe.innerHTML = " ";
};