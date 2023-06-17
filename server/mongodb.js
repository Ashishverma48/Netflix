const {MongoClient} = require('mongodb')

// Connection 
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url)
// Database
const databaseName = 'instagram'

async function dbConnect(){
    const  result = await client.connect()
    const  db = result.db(databaseName)
    return db
}

module.exports=dbConnect