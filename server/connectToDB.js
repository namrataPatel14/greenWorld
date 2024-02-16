const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const connectToDB = async () => {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    const database = (await client.connect()).db("GreenWorld");
    console.log("Connection to db is established");
    return database;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  connectToDB,
};
