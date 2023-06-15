class NewsController {

    // [GET / news]
   index(req, res){
        // khoi tao view news
        res.render('news');

   }
     
   //[GET] /news/:slug
   showChiTiet(req, res){
      res.send('Nguyen Bach Long')

   }

}


// exports du lieu
module.exports = new NewsController;