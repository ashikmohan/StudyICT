const express=require('express');
const router=express.Router();
const app=new express()
router.use(express.json());
router.use(express.urlencoded({extended:true}))
const arr1=['apple','orange','mango']

router.get('/',(req,res)=>{
    // res.send('Hi this is get request');
    res.send(arr1);
  
})
router.post('/add',(req,res)=>{
    console.log(req.body);
    res.send('hai')
    // arr1.push('Watermelon');
    // res.send(arr1);
})

router.put('/update/:ind',(req,res)=>{
const index=req.params.ind;
console.log(index);
res.send('updated')
})
router.delete('/delete/:ind',(req,res)=>{
    const index=req.params.ind;
console.log(index);
res.send('deleted')

})


module.exports=router