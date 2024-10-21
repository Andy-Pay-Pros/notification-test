const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.json());
app.post('/notifications', (req, res) => {
    try {
        // console.log(req.headers)
        console.log(req.body)
        return res.sendStatus(200);
    } catch (error) {
        console.log(error)
        return res.status(400);
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Server on port: ${port}`);
});
