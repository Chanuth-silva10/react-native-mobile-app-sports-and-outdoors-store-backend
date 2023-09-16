const express = require('express')
const app = express();
var bodyParser = require('body-parser');
const dotenv = require('dotenv');
var path = require('path');
var cors = require('cors')


app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())

dotenv.config();

const { register, login } = require("./controllers/auth/auth");


app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.post('/register', register);
app.post("/login", login);

app.listen((process.env.PORT || 8081), () => {
    console.log(`Example app listening on port ${process.env.PORT}!`)
});