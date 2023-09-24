const mogoose = require('mongoose')

const { DB_CON_STRING } = process.env

module.exports = () => {
    // mogoose.connect("mongodb://localhost/ecommerce")
    mogoose.connect("mongodb+srv://chanuth1234:1yjFeKrcfqvMt1mW@cluster0.o5kob.mongodb.net/ecommerce")
        .then(() => console.log('DB Connection Successfull'))
        .catch(err => console.log(err.message))
}