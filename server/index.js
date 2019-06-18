const express = require('express');
const path = require('path');
const bodyParser = require ('body-parser');
const morgan = require ('morgan');


const app = express();
const port = 3000;

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json());

app.listen(port, (err) => {
  if (err){
    console.log(err);
    return
  }
  console.log('Listening on port ' + port)
});
