const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  
 return res.send('Hello World!!~')
})

app.listen(port, () => {
  var x = 1;
  var y = 2;
  var z = x + y;
  console.log(z);
    console.log(`Example app listening at http://localhost:${port}`)
  })