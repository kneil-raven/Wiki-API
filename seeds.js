const mongoose = require('mongoose');
const Article = require('./models/article');


// connect to mongoDB
mongoose.connect('mongodb://127.0.0.1:27017/wikiDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log(`Connected to MongoDB`)
    })
    .catch((error) => {
        console.log(`Error Connecting to MongoDB!`, error)
    });


const seedArticles = [
    {
    
        "title" : "REST",
        "content" : "REST is short for REpresentational State Transfer. IIt's an architectural style for designing APIs."
    },
    
    
    {
        
        "title" : "API",
        "content" : "API stands for Application Programming Interface. It is a set of subroutine definitions, communication protocols, and tools for building software. In general terms, it is a set of clearly defined methods of communication among various components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer."
    },
    
    
    {
        
        "title" : "Bootstrap",
        "content" : "This is a framework developed by Twitter that contains pre-made front-end templates for web design"
    },
    
    
    {
        
        "title" : "DOM",
        "content" : "The Document Object Model is like an API for interacting with our HTML"
    },
    
    
    {
        
        "title" : "Jack Bauer",
        "content" : "Jack Bauer once stepped into quicksand. The quicksand couldn't escape and nearly drowned.",
        "__v" : 0
    }
]

Article.insertMany(seedArticles)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })