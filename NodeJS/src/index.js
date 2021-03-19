const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const { extname } = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,'public')));

//HTTP logger
 app.use(morgan('combined'));

//template
app.engine('hbs',hbs({
  extname:'.hbs'
}));
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'resource/views'))
app.get('/', (req, res) => {
    res.render('home');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
