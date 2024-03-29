const express = require('express')
const morgan = require('morgan')
const path = require('path')
const { engine } = require("express-handlebars");
const app = express()
const port = 3000


// các file tĩnh bắt đầu từ đường dẫn public 
// vd : localhost:3000/img/logo.jpeg
app.use(express.static(path.join(__dirname,'public')))

//middleware của post qua form 
app.use(express.urlencoded({
    extended: true

}
)) // form 
app.use(express.json()) // gửi từ javascript lên thì có cái này
// HTTP logger
// app.use(morgan('combined'))

// template engine
app.engine("hbs", engine({
    extname: '.hbs'
}
  
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});
app.get('/news', (req, res) => {
    res.render('news');
});
app.get('/search', (req, res) => {
    res.render('search');
});
app.post('/search', (req, res) => {
    console.log(req.body);
        res.send('');
});
// router 


//  127.0.0.1 - localhost

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})