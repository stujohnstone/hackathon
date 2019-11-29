const path = require("path");
const express = require("express");
const cors = require('cors');
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;
const MongoClient = require('mongodb').MongoClient;
var MongoClienturi = "mongodb+srv://malibu_user:dwMUVnl6uYZD4YJ2@malibu1-dlhj5.mongodb.net/test?retryWrites=true&w=majority";
var MongoClientdatabase = "malibudb";
var env = process.env.NODE_ENV || 'dev';
var db;

app.use(express.static(publicPath));
app.use(cors());

/**
 * API
 */
//Post Newsfeed
app.post('/api/messages', (req, res) => {
  db.collection('messages').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.status(200).send(req.body);
  })
});

//Get Newsfeed
app.get('/api/messages', (req, res) => {
  db.collection('messages').find().toArray((err, result) => {
    if (err) return console.log('**ERROR' + err)
    res.status(200).send(result);
  })
})

//Get Mock Newsfeed
/*
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
*/

/**
* STATIC FILES
*/
app.use('/resources', express.static('resources'))
//app.use('/', express.static('app'));

// Default every route except the above to serve the index.html
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/app/index.html'));
});


// Start Connection
if (env == 'dev') MongoClienturi = 'mongodb://localhost'
console.log(`Starting on ${env} attempting connection to "${MongoClienturi}"`);
MongoClient.connect(MongoClienturi, (err, client) => {
  if (err) return console.log('*ERROR: ' + err);
  db = client.db(MongoClientdatabase);
  app.listen(port, () => {
    console.log(`Server is running on ${port} 😊😊`);
  });
})


