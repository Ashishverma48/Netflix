const dbConnect = require("./mongodb");
const express = require("express");
const cors = require('cors')
const app = express();
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json())
app.use(cors())


app.get("/data", async (req, res) => {
  const database = await dbConnect();
  const collection = await database.collection("users");
  const data = await collection.find().toArray();
  res.send(data);
});

app.post('/register',async(req,res)=>{
    userDetails={
        FullName : req.body.FullName,
        UserName : req.body.UserName,
        Password : req.body.Password,
        Email : req.body.Email,
        MobileNo:req.body.MobileNo

    }
    const database = await dbConnect()
    const collection  = await database.collection('users')
    const  data  = await collection.insertOne(userDetails)
    console.log(data);
    res.send(data)
})


app.listen(4000);
