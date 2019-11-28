const path = require("path");
const express = require("express");
const cors = require('cors');
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;

require('dotenv').config({ path: '.env' });
app.use(express.static(publicPath));
app.use(cors());


/**
 * API
 */


app.get('/api/data', function(req, res, next) {

  const MongoClient = require('mongodb').MongoClient;
  const uri = "mongodb+srv://malibu_user:dwMUVnl6uYZD4YJ2@malibu1-dlhj5.mongodb.net/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("malibudb").collection("hackathon");
    // perform actions on the collection object
    client.close();
  });
});
app.get('/api/newsfeed', function(req, res, next) {
  let data = [{
    date: new Date(),
    title: "test",
    description: "adasdasdasdasdasdasdasdasd"
  }, 
  {
    date: new Date(),
    title: "test",
    description: "adasdasdasdasdasdasdasdasd"
  },];
  res.status(200).send(data);
});
app.post('/api/newsfeed', function(req, res, next) {
  let data = req.body;
  // query a database and save data
  res.status(200).send(data);
});

/**
* STATIC FILES
*/
app.use('/', express.static('app'));

// Default every route except the above to serve the index.html
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/app/index.html'));
});

app.listen(port, () => {
  console.log("Server is up!");
});

