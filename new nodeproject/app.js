// basic thing for backend

// const express =require('express');
// const app =new express();

// const morgan=require('morgan');

// app.use(morgan('dev'));

// app.listen(5000);

const express =require('express');
const app =new express();
const morgan=require('morgan');
const api=require('./routes/sample');

require('dotenv').config()

app.use(morgan('dev'));
app.use('/api',api);

const port=process.env.port;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});