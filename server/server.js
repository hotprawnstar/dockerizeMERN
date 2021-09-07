
// server.js
const express = require('express');
const app = express();
const PORT = 8080;




// will redirect all the non-api routes to react frontend
app.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../client','build','index.html'));
});

// Our DB Configuration
require('./src/database');



app.get('/', (req, res) => {
    res.send("Hello World ~!!! ");
});

app.listen(PORT, function () {
    console.log(`Server Listening on ${PORT}`);
});

const bodyParser = require('body-parser');

// Routes
const postRouter = require('./src/routes/post.router');

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use('/posts', postRouter);
