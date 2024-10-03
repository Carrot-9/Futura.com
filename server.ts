const express = require('express');
const cors = require('cors');

const PORT = 9000;

const app = express();

app.use(cors());

app.listen(
    PORT, 
    () => console.log(`Running At Port: http://localhost:${PORT}`)
)