const mogoose = require('mongoose')

module.exports = () => {
    mogoose.connect("mongodb+srv://chanuth1234:1yjFeKrcfqvMt1mW@cluster0.o5kob.mongodb.net/ecommerce")
        .then(() => console.log('DB Connection Successfull'))
        .catch(err => console.log(err.message))
}