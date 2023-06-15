const router=require('express').Router();
const studentData=require('../model/student')


// router.get('/',async(req,res)=>{
//     try {
//         res.send('It Student time')
//     } catch (error) {
//         console.error(error)
//     }
// })


// CRUD

// Creation
router.post('/',async(req,res)=>{
    try {
        console.log(req.body)
        let item =req.body
        const saveddata=await studentData(item);
        saveddata.save();


        res.send('success')
    } catch (error) {
        console.log(error)
    }
})

// Reading
router.get('/',async(req,res)=>{
    try {
        let data =await studentData.find({})
        res.send(data)
    } catch (error) {
        console.log(error)
        res.send('error')
    }
})


// Update


// Delete








module.exports=router