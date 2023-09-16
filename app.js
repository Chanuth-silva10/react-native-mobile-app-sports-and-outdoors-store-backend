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

app.get('/', (req, res) => {
    res.send('Hello World!')
  });