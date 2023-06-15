const mongoose=require('mongoose')
const studentSchema=mongoose.Schema({
    Name:{
        type: String
    },
    age:{
        type:Number,
        required:true,
    },
    address:String,
    createdAt:{
        type:Date,
        default:new Date
    }
})

const studentModel= mongoose.model('student',studentSchema)
module.exports=studentModel