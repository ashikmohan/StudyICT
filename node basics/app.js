// const func1=require('./displayval');
// func1.greeting('Ashik');
// var color=require('colors');
// console.log('hello' .green);

// Asynchornous
// const fs=require('fs');
// fs.readdir('./displayval',(err,res)=>{
//     if (err) {
//         console.log('File not Found!')
//     }
//     else{
//         console.log('File found')
//     }
// });

// Events
// const EventEmitter =require("events");
// const events= new EventEmitter();

// events.on("rains",()=>{
//     console.log("It is raining .Take Umberlla");
// })

// events.on("danger",()=>{
//     console.log("Escape ! Situvation is Dangerous")
// })
// events.emit('danger');

// https  core module

const EventEmitter =require("events");
const http=require('http');
const events= new EventEmitter();
events.on("restricted",()=>{
    console.log("Restricted area!!");
})
events.emit('danger');

var server=http.createServer((req,res)=>{
    // res.write("Server running");
    // res.end();
    if (req.url=='/') {
        res.write('welcome to home page')
        res.end()
    }else if(req.url='/login'){
        res.write('welcome to Login page')
        res.end()
    }
    else{
        res.write('Oops! Page not found')
        res.end()
    }
})
server.listen(3000);