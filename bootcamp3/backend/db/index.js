const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://AshikMohan:Ashik12345@cluster0.vw6y7bq.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('Mongo DB connection established sucessfully')

})
.catch(()=>{
    console.log(err => console.log('error connecting',err.message))
})