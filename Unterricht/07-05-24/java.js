let buttonadd = document.getElementById('buttonadd');
let buttonminus = document.getElementById('buttonminus');
let buttonmal = document.getElementById('buttonmal');
let buttongeteilt = document.getElementById('buttongeteilt');
let ausgabe = document.getElementById('ausgabefeld');

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
    ausgabe.textContent = parseFloat(zahl1) / parseFloat(zahl2);
};