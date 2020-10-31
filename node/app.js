const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

require('./routes')(app);

app.set('view engine','ejs');

app.listen(5000, ()=>{
    console.log('server is running')
})

