const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();

const port = process.env.PORT || 5000;

//middlewares
app.use(cors());
app.use(express.json());


// MongoDB connection
const uri = "mongodb+srv://lifemark_db:JjnwVSIIoXVbwNa9@cluster0.m25rjlj.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        const userCollection = client.db("LifeMark").collection("users")


        //---------------------- User Profile ----------------------//
        app.post('/user', async(req, res) => {
            const user = req.body()
            const result = await userCollection.insertOne(user)
            res.send(result);
        })

        app.get('/user', async(req, res) => {
            const result = await userCollection.find().toArray()
            res.send(result);
        })

        app.get('/user/:id', async(req, res) => {
            try{
                const id = req.params.id
                const query = {
                    _id : new ObjectId(id), 
                }
                const result = await userCollection.findOne(query)
                console.log(result);
                if(!result){
                    res.status(404).send('Item Not Found')
                    return;
                }
                res.send(result);
            }catch{
                console.error("Error:");
                res.status(500).send('Internal Server Error')
            }
        })










        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.get("/", (req, res) => {
    res.send("Crud is running...");
});

app.listen(port, () => {
    console.log(`Simple Crud is Running on port ${port}`);
});

