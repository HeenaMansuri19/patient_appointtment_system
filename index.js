const express = require('express');
require('dotenv').config()
const app = express();
require('./dbConfig')
const mainRouter = require('./routers/mainRouter')
app.use(express.json())
app.use('/', mainRouter)


const server=app.listen(process.env.PORT,function (req, res){
    console.log(`Server is running at ${process.env.PORT}`);
})


module.exports = server