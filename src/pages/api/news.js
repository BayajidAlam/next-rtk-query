
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://compass_user:cIimxLr84wQntlUN@myclaster-1.wxhqp81.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run(req,res) {
  try {
    await client.connect();
    const newsCollection = client.db("news_portal").collection("news")

    if(req.method === 'GET'){
      const news = await newsCollection.find({}).toArray()
      res.send({message: 'success', status: 200, data: news});
    }
  } finally {
  }
}
run().catch(console.dir);
