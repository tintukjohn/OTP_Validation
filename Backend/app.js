const express = require('express');
const app = new express();
const logger = require('morgan')
const cors = require('cors')

const bodyParser = require('body-parser');
const PORT = 3000;

require('./Middlewares/mongoDB')
app.use(express.json()) 
app.use(express.urlencoded({extended:true}))
app.use(logger('dev')) 
app.use(cors())
app.use(bodyParser.json());


const api = require('./routes/api')
app.use('/api',api)




app.listen(PORT, ()=>{
    console.log(`Server is running in ${PORT}`);
})