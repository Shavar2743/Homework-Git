const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/submit", (req, res) => {
    let Datenspeicher = [""]
    Datenspeicher.push(req.body.name)
    Datenspeicher.push(req.body.mail)
    Datenspeicher.push(req.body.pw)

    const dataString = Datenspeicher.join(', ') + '\n';

    fs.appendFile(__dirname + '/benutzerdaten.txt', dataString, (err) => {
        if (err) {
            res.status(500).send('Fehler beim Speichern der Daten');
        } else {
            console.log('Daten wurden zur Datei hinzugefügt.');
            res.send('Daten wurden erfolgreich empfangen!');
        }
    });
});


app.listen(port, () => {
    console.log("Serverstart erfolgreich")
});