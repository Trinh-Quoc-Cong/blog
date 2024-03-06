class NewsController {
    // [get /new]
    index(req,res) {
        res.render('news');
    }
    // slug
    show(req,res){
        res.send('detail page sử dụng slug');
    }
}

module.exports = new NewsController;
//exports cái gì thì require nhận đc cái đó