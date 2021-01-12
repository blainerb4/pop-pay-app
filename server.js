const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const app = express()
//const port = 5000

mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
//may need to take out newurl or unifiedtop
//connect to databse
app.set('view engine', 'ejs')

//app.use(express.urlencoded({ extended: false })) 
//--do not add
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

const PORT = process.env.PORT || 5000;


if (process.env.NODE_ENV === 'production') {
   app.use(express.static(path.join(__dirname, 'client/build')))

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}
//index.html
app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
    const articles = await Article.find().sort({
        createdAt: 'desc'
    })
    res.render('articles/index', {articles: articles})
})

app.use('/articles', articleRouter)

//app.listen(5000, error => {
//    if(error) throw error;
//    console.log('Server running on port' + 5000)
//})
//replace 5000 with port

//app.post ('/blog', (req, res) => {
//  const body = {
//       source: req.body.article.id
//   }
//})
app.listen(PORT);

app.listen(5000, () => {
   console.log('server started')
}) 

//app.listen(5000);



//('app')
//    res.render('index', {articles: articles})
/*

app.listen(5000, () => {
    console.log('server started')
})


if (process.env.NODE_ENV === 'production') {
    //express will serve up production assets for blog 
    app.use(express.static('client/build'));
    //epxress will serve up index.html if it doesnt recognize route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//upload to heroku for backe

//npm run devStart or npm run dev
//app.get('/', (req, res) => {


    const articles = [{
        title: 'test article',
        createdAt: new Date(),
        description: 'test description'
    },
    {
        title: 'test article 2',
        createdAt: new Date(),
        description: 'test description 2'
    }]

    //PUT - method for editing

    */