let mongoose=require('mongoose')
mongoose.pluralize(null)

let bookSchema=new mongoose.Schema({
    BookID:{type:String},
    Title:{type:String},
    AuthorID:{type:String},
    Publisher:{type:String},
    PublishDate:{type:Date},
    Category:{type:String},
    Price:{type:Number},
    SoldCount:{type:Number}
})

let Book=mongoose.model("Book",bookSchema)
module.exports=Book