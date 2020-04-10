const MongoClient=require('mongodb').MongoClient;
const path=require('path')
const propertiesReader=require('properties-reader');

var properties = propertiesReader(path.join(__dirname,'../application.properties'));
var url = properties.get('db.url');
var dbName=properties.get('db.name')

const createCollection=(collectionName)=>{
MongoClient.connect(url, function(err,db) {
    if (err) throw err;
    var dbo = db.db(dbName);
    dbo.createCollection(collectionName, function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });
}
const insertData=(collection,object)=>{
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        
        dbo.collection(collection).insertOne(object, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
      });
}

const insertAllData=(collection,object)=>{
  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db(dbName);
      
      dbo.collection(collection).insertMany(object, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    });
}

const getAllVideos=(collection,res,pageNo,nrpp)=>{
  var videos=[];
  MongoClient.connect(url, async function(err, db) {    
    if (err) throw err;
    var dbo = db.db(dbName);
    
    dbo.collection(collection).find({},{fields:{_id:0}}).skip((pageNo-1)*nrpp).limit(Number(nrpp)).toArray(function(err, result) {

        err?console.log(err):result; 
        res.json(result)
        //res.render("App",{data:result});

  });
 
} ); 

 
}

module.exports={insertData,insertAllData,getAllVideos}

