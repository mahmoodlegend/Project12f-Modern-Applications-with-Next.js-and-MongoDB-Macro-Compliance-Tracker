import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const client = new MongoClient("mongodb+srv://vercel-admin-user:tIhAqlqBcqbXToD0@cluster0.lss2kke.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//locally

// mongodb://root:pak1437986@ac-vtgwnvm-shard-00-00.lss2kke.mongodb.net:27017,ac-vtgwnvm-shard-00-01.lss2kke.mongodb.net:27017,ac-vtgwnvm-shard-00-02.lss2kke.mongodb.net:27017/test?replicaSet=atlas-1469ge-shard-0&ssl=true&authSource=admin  

async function database(req, res, next) {
  if (!client.connect) await client.connect();
  req.dbClient = client;
  req.db = client.db('MCT');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;