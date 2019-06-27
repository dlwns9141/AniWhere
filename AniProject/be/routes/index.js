var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:1234@cluster0-uukem.azure.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  
  client.connect(err => {
    let collection = client.db("aniwhere").collection("placeInfo");
    console.log(err)
    //console.log('result', collection.find({}).toArray());
    client.close();
  });
});

module.exports = router;
