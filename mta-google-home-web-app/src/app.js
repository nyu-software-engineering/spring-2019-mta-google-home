const express = require('express');
const app = express();
const path = require('path');

const port = 3000
const publicPath = path.resolve(__dirname, "public");

const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(publicPath));


app.listen(port, () => console.log(`App now listening on ${port}`))


app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.get('/', (req,res) => {
    res.render("index.hbs");

});



