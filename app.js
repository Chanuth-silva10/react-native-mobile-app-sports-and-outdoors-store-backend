const express = require('express')
const app = express();
var bodyParser = require('body-parser');
const dotenv = require('dotenv');
var path = require('path');
var cors = require('cors')

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())

dotenv.config();

const multer  = require('multer')

const { register, login, updateUser, deleteUser, userById, resetPassword } = require("./controllers/auth/auth");
const { addProduct, updateProduct, deleteProduct, getAllProducts } = require("./controllers/products/products")


app.get('/', (req, res) => {
  res.send('Hello World!')
});


app.post('/register', register);
app.post("/login", login)

app.post("/update-user", updateUser)
app.get("/user", userById)
app.get("/delete-user", deleteUser)
app.post("/reset-password", resetPassword)

app.post("/product", [isAdmin], addProduct)
app.get("/products", getAllProducts)
app.post("/update-product", [isAdmin], updateProduct)
app.get("/delete-product", [isAdmin], deleteProduct)

app.listen((process.env.PORT || 8081), () => {
  console.log(`Example app listening on port ${process.env.PORT}!`)
});