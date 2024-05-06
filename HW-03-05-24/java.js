button1.onclick = () => {
    if (header.style.color == "red" ) {
        header.style.color = "";
    } else {
        header.style.color ="red";
    }
}

button2.onclick = () => {
    if (header.style.backgroundColor == "green" ) {
        header.style.backgroundColor = "";
    } else {
        header.style.backgroundColor = "green"
    }
}

button3.onclick = function () {
    if (bild.style.display == "none") {
        bild.style.display = "block"
    } else {
        bild.style.display = "none";
    }
}
button4.onclick = function () {
    bild.style.transform = "scale(0.9)";
}
button5.onclick = function () {
    bild.style.transform = "scale(1.1)";
}