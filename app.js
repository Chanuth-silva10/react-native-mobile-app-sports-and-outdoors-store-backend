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
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename: function (req, file, cb) {
    let uploadFile = file.originalname.split('.')
    let name = `${uploadFile[0]}-${Date.now()}.${uploadFile[uploadFile.length-1]}`
    cb(null, name)
  }
})
const upload = multer({ storage: storage })

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

app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {  

  try{
    let files = req.files;
    if(!files.length){
      return res.status(400).json({ err:'Please upload an image', msg:'Please upload an image' })
    }
    let file = req.files[0]
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        return res.json({"image" : file.filename}) 
    }
  }
  catch(error){
    return res.send(error.message)
  }
})

app.listen((process.env.PORT || 8081), () => {
  console.log(`Example app listening on port ${process.env.PORT}!`)
});