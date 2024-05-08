function randomfarbe() {
    let randomzahl = Math.floor(Math.random() * 167772);
    let hexfarbe = '#' + randomzahl
    return hexfarbe;
}

function farbwechsel() {
    testitest.style.backgroundColor = randomfarbe();
}