const newRouter = require('./news');
const siteRouter = require('./site');


function route(app){


    app.use('/news', newRouter);
    // noi nay se khoi tao cac tuyen duong
    app.use('/', siteRouter);
      
    
}
module.exports = route;