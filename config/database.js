const mogoose = require('mongoose')

const connectDatabase = () => {
    mogoose.connect(process.env.DB_CON_STRING, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
    })
    .then((data) => console.log(`mongodb is connected with server: ${data.connection.host}`))
    .catch(err => console.log(err.message))
}
module.exports = connectDatabase;