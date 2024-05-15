const express = require('express');
const app = express();
const port = 3000

const einkaufsliste = ['Brot', 'Nutella', 'Milch']
const hobbys = ['Zocken', 'Programmieren', 'Bergsteigen']

app.get('/einkaufsliste', (req, res) => {
    res.json(einkaufsliste)
})

app.get('/hobbys', (req, res) => {
    res.json(hobbys)
})

app.listen(3000)