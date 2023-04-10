let express=require('express')
let mongoose=require('mongoose')
let app=express()
let port=8080

//Connecting to the database
mongoose.connect("mongodb://localhost/gigin-test", {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{console.log("Server is connected to Database")})
.catch(e=>console.error(e))

//Using Middleware
app.use(express.json())

//Importing Models
let Author=require("./models/Author")
let Book=require("./models/Book")

//API Check for server 
app.get("/", async(req,res)=>{
    res.send("Server is up at 8080")
    console.log("Hello from the Server");
})

//Writing APIs
//API to add book to the Catalog
app.post("/addbook", async(req,res)=>{
    try {
        let newBook= await Book.create(req.body)
        res.json({status:"Book is Added to the Catalog", data:newBook})
    } catch (error) {
        res.json({status:"Unable to add book to the Catalog", message:error.message})
    }
})

//API to add Author
app.post("/addauthor", async(req,res)=>{
    try {
        let {AuthorID,Name,PhoneNumber,BirthDate,DeathDate}=req.body
        let newAuthor= await Author.create(req.body)
        res.json({status:"Author is added to the collection", data:newAuthor})
    } catch (error) {
        res.json({status:"Unable to add Author", message:error.message})
    }
})

// API to Fetch all Authors
app.get("/authors", async(req,res)=>{
    try {
        let allAuthors=await Author.find()
        res.json({status:"List of all Authors are below", data:allAuthors})
    } catch (error) {
        res.json({status:"Unable to fetch Authors Data", message:error.message})
    }
})

// API to Fetch all Books
app.get("/books", async(req,res)=>{
    try {
        let allBooks=await Book.find()
        res.json({status:"List of all Books are below", data:allBooks})
    } catch (error) {
        res.json({status:"Unable to fetch Books", message:error.message})
    }
})

//API to fetch Categories in the Catalog
app.get("/books-categories", async(req,res)=>{
    try {
        let allBooks=await Book.find()
        let categories=[]
        for(let i=0;i<allBooks.length;i++){
            categories.push(allBooks[i].Category)
        }
        let answer=[...new Set(categories)] //removes duplicates
        res.json({ststus:"List of Categories of Books are below", data:answer})
    } catch (error) {
        res.json({status:"Unable to fetch Categories of Books", message:error.message})
    }
})

//API to fetch most number of books sold by category
app.get("/mostsoldbyCat", async(req,res)=>{
    try {
        let allBooks=await Book.find()
        let maxSold=[]
        for(let i=0;i<allBooks.length;i++){
            if(allBooks[i].Category=="Fiction"){
                maxSold.push(allBooks[i].SoldCount)         
            }           
        }
        let answer=[...new Set(maxSold)]
        let finalAnswer=Math.max(...answer)
        let maxSoldBook=await Book.find({SoldCount:finalAnswer})
        res.json({status:"Max sold book data is below",data:maxSoldBook})

    } catch (error) {
        res.json({status:"Uable to fetch max sold book by category", message:error.message})
    }
})


//Server Listening
app.listen(port,()=>{
    console.log("Server is up at port "+port);
})

