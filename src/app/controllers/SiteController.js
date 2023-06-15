class SiteController {

    // [GET / news]
   index(req, res){
        // khoi tao view news
        res.render('home');

   }
  

}


// exports du lieu
module.exports = new SiteController;