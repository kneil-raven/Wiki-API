const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const Article = require('./models/article');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));

// connect MongoDB
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

/*=======
  TODO
=======*/
// home
app.get('/', (req, res) => {
    res.render('home')
})

// display all articles
app.get('/articles', async(req, res) => {
    const articles = await Article.find({});
    res.render('articles/index', {articles})
})

// form to create new article
app.get('/articles/new', (req, res) => {
    res.render('articles/new')
})

// create new article
app.post('/articles', async(req, res) => {
    const article = new Article(req.body)
    await article.save();
    res.redirect(`/articles`);
})


app.listen(3000, function() {
  console.log("Server started on port 3000");
});