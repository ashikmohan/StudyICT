const express=require('express');//requring expresstocreate a server
const app=express(); //instance of express
const PORT=5000 //portnumber

const morgan=require('morgan')
app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
require('./db')



const studentRouter =require('./routes/students')
app.use('/student',studentRouter)


// app.get('/',(req,res)=>{    //api
//     try {
//         res.send('welcome')
//     } catch (error) {
//         res.send('error')
//     }
// })

// const keralarouter= require('./routes/kerala')
// app.use('/kerala',keralarouter)







app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`)
}); //this is wher server starts listening
