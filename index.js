const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.json());
app.post('/notifications', (req, res) => {
    try {
        console.log(req.headers)
        console.log(req.body)
        return res.status(200).json({ success: true, message: 'Notification received successfully' });
    } catch (error) {
        console.log(error)
        return res.status(200).json({ success: false, message: 'Notification received error' });
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Server on port: ${port}`);
});
