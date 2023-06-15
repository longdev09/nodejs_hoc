
// thu vien import

const path = require("path");

const express = require('express');
const morgan = require('morgan');

const {engine} = require('express-handlebars');
const { request } = require("http");

const app = express()

const port = 3000

const route = require('./routes');


// cau hinh file tinh
app.use(express.static(path.join(__dirname, 'public')));


// khoi tao route
route(app);


// http logger
// dung de tu dong tai lai trang
app.use(morgan('combined'))


// template engine
  
// ho tro viet html
app.engine('hbs', engine({
    extname:'hbs'
}));

app.set('view engine', 'hbs');


// doc action -> routes -> ht 
// khoi tao duong dan den file view
app.set('views', path.join(__dirname, 'resources\\views'));



// home 
// app.get('/', (req, res) => {
//   res.render('home')
// })


// // app.get('/news', (req, res) => {
// //   res.render('news')
// // })


// di nghia router nhu ben .net
// nay la arow function
// app.get('/', function(req, res){
    //res.send('Hello World!')
// })



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)

})