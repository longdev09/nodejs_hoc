
// thu vien import
const express = require('express')
const app = express()
const port = 3000


// di nghia router nhu ben .net
app.get('/', (req, res) => {
  res.send('Viet Nam hehe')
})

// nay la arow function
// app.get('/', function(req, res){
    //res.send('Hello World!')


// })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)

})