class SiteController {
    // / home
    index(req, res) {
        res.render('home');
    }
    // get /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;
//exports cái gì thì require nhận đc cái đó