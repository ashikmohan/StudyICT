const express=require('express');
const morgan=require('morgan')
const app=new express();
app.use(morgan('dev'));
app.get('/',(req,res)=>{
    res.send('I am learning Get request');

})
app.listen(3000,()=>{
    console.log('Server running on port 3000');
})