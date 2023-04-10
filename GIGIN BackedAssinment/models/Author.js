let mongoose=require('mongoose')
mongoose.pluralize(null)

let authorSchema=new mongoose.Schema({
    AuthorID:{type:String},
    Name:{type:String},
    PhoneNumber:{type:Number},
    BirthDate:{type:Date},
    DeathDate:{type:Date}
})

let Author=mongoose.model("Author",authorSchema)
module.exports=Author