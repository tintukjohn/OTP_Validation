const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://tintukjohn:abcd1234@cluster0.wtjng1f.mongodb.net/OTPVerifier?retryWrites=true&w=majority',
{
   useNewUrlParser:true,
   useUnifiedTopology:true
})
.then(() =>{
    console.log('MongoDB connected successfully!!!')
}).catch((error) =>{
    console.log(error.message)
})