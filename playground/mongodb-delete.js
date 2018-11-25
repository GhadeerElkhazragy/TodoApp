const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Users').deleteMany({name:'Andrew'}).then((result)=>{
    console.log(result);
  });

  db.collection('Users').findOneAndDelete({_id:new ObjectID("5bfa79b01da46be996ec6b67")}).then((result)=>{
    console.log(result);
  });

  client.close();
});
