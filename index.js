const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/notifications', (req, res) => {
    console.log(req.body)
    res.status(200).json({ success: true, message: 'Notification received successfully' });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Server on port: ${port}`);
});
