const newsRouter = require('./news')
const siteRouter = require('./site')
function route(app){
    app.get('/', siteRouter);

    app.get('/contact', (req, res) => {
        res.render('contact');
    });
    app.use('/news', newsRouter)
    
    
}
module.exports = route;