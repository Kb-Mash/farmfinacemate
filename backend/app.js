const express = require('express');
const app = express();
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs');

require('dotenv').config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

readdirSync('./routes').map((r) => app.use('/api/v1', require('./routes/' + r)));

const server = () => {
    db();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

server();
