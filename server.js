const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api', (req, res) => {
    res.json({ message: 'Witaj w aplikacji DevOps!' });
});

app.listen(port, () => {
    console.log(`Serwer działa na porcie ${port}`);
});