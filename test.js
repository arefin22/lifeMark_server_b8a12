const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

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
        const appointmentCollection = client.db('LifeMark').collection('appointments')
        const testResultCollection = client.db('LifeMark').collection('test-results')
        const bannerCollection = client.db('LifeMark').collection('banners')
        const healthRecommendationsCollection = client.db('LifeMark').collection('healthRecommendations')
        const testCollection = client.db('LifeMark').collection('tests')


        //---------------------- User Profile ----------------------//
        //---------------------- User Profile ----------------------//
        //---------------------- User Profile ----------------------//
        //---------------------- User Profile ----------------------//


        // ---- Create An User ----
        app.post('/user', async (req, res) => {
            const user = req.body
            const query = { email: user.email }
            const existingUser = await userCollection.findOne(query)
            if (existingUser) {
                return res.send(console.log("User Exist"))
            }
            const result = await userCollection.insertOne(user)
            res.send(result);
        })

        // ---- Get All The Users ----
        app.get('/user', async (req, res) => {
            const result = await userCollection.find().toArray()
            res.send(result);
        })

        // ---- Get One User By ID ----
        // app.get('/user/:id', async (req, res) => {
        //     try {
        //         const id = req.params.id
        //         console.log(id);
        //         const query = {
        //             _id: new ObjectId(id)
        //         }
        //         console.log(query);
        //         const result = await userCollection.findOne(query)
        //         console.log(result);
        //         if (!result) {
        //             res.status(404).send('Item Not Found')
        //             return;
        //         }
        //         res.send(result);
        //     } catch (err) {
        //         console.log(err);
        //         // res.status(500).send('Internal Server Error');
        //     }
        // })


        // ---- Get One User By EMAIL ----
        app.get('/user/:email', async (req, res) => {
            try {
                const email = req.params.email;
                // console.log(email);
                const query = {
                    email: email,
                };
                const result = await userCollection.find(query).toArray();
                // console.log(result);
                if (!result) {
                    res.status(404).send('Item not found');
                    return;
                }
                res.send(result)
            }
            catch (err) {
                console.log(err);
                // res.status(500).send('Internal Server Error');
            }
        })



        // ---- Update A User By ID ----
        app.put('/user/:id', async (req, res) => {
            try {
                const id = req.params.id
                const query = {
                    _id: new ObjectId(id)
                }
                const result = await userCollection.updateOne(query)
                if (!result) {
                    res.status(404).send('Item Not Found')
                    return;
                }
                res.send(result);
            }
            catch (err) {
                console.log(err);
                // res.status(500).send('Internal Server Error');
            }
        })

        //------------------ Appointment Section ------------------//
        //------------------ Appointment Section ------------------//
        //------------------ Appointment Section ------------------//
        //------------------ Appointment Section ------------------//

        // ---- All Appointment ----
        app.get('/appointment', async (req, res) => {
            const result = await appointmentCollection.find().toArray()
            res.send(result)
        })

        // ---- Appointments Of an User Query Mail ----
        app.get('/appointment/:email', async (req, res) => {
            try {
                const email = req.params.email;
                console.log(email);
                const query = {
                    email: email,
                };
                const result = await appointmentCollection.find(query).toArray();
                console.log(result);
                if (!result) {
                    res.status(404).send('Item not found');
                    return;
                }
                res.send(result)
            }
            catch (err) {
                console.log(err);
                // res.status(500).send('Internal Server Error');
            }
        })

        // ---- Single Appointment By Id ----
        app.get('/appointment/:id', async (req, res) => {
            try {
                const id = req.params.id
                const query = {
                    _id: new ObjectId(id)
                }
                const result = await appointmentCollection.findOne(query)
                if (!result) {
                    res.status(404).send('Item Not Found')
                    return;
                }
                res.send(result);
            }
            catch (err) {
                console.log(err);
                // res.status(500).send('Internal Server Error');
            }
        })

        // ---- Single Appointment Edit Using In ----
        app.put('/appointment/:id', async (req, res) => {
            try {
                const id = req.params.id
                const query = {
                    _id: new ObjectId(id)
                }
                const result = await appointmentCollection.updateOne(query)
                if (!result) {
                    res.status(404).send('Item Not Found')
                    return;
                }
                res.send(result);
            }
            catch (err) {
                console.log(err);
                // res.status(500).send('Internal Server Error');
            }
        })

        //---------------------- Test Results ----------------------//
        //---------------------- Test Results ----------------------//
        //---------------------- Test Results ----------------------//
        //---------------------- Test Results ----------------------//

        // ---- Posting A test Result ----        
        app.post('/test-result', async (req, res) => {
            const testResult = req.body
            const result = await testResultCollection.insertOne(testResult)
            res.send(result)
        })

        // ---- Test Result List ----
        app.get('/test-result', async (req, res) => {
            const result = await testResultCollection.find().toArray()
            res.send(result)
        })

        app.get('/test-result/:id', async (req, res) => {
            try {
                const email = req.params.email;
                const query = {
                    email: email,
                };
                const result = await testResultCollection.findOne(query)
                if (!result) {
                    res.status(404).send('Item Not Found')
                    return
                }
                res.send(result)
            }
            catch (err) {
                console.log(err);
                // res.status(500).send('Internal Server Error');
            }
        })



















        //---------------------- Admin ----------------------//
        //---------------------- Admin ----------------------//
        //---------------------- Admin ----------------------//
        //---------------------- Admin ----------------------//

        // ---- Banner Create ----
        app.post('/banners', async (req, res) => {
            const banner = req.body
            const result = await bannerCollection.insertOne(banner)
            res.send(result)
        })

        // ---- Banner List ----
        app.get('/banners', async (req, res) => {
            const result = await bannerCollection.find().toArray()
            res.send(result)
        })

        // ---- Single Banner Using Id ----
        app.get('/banners/:id', async (req, res) => {
            try {
                const id = req.params.id
                const query = {
                    _id: new ObjectId(id)
                }
                const result = await bannerCollection.findOne(query)

                if (!result) {
                    res.status(404).send('Item Not Found')
                    return;
                }
                res.send(result)
            }
            catch (err) {
                console.log(err);
                // res.status(500).send('Internal Server Error');
            }
        })

        // ---- Banner Status Update API ----
        app.put('/banner/:id', async (req, res) => {
            try {
                const id = req.params.id
                const query = {
                    _id: new ObjectId(id)
                }
                const result = await bannerCollection.updateOne(query)

                if (!result) {
                    res.status(404).send('Item Not Found')
                    return;
                }
                res.send(result)
            }
            catch (err) {
                console.log(err);
                // res.status(500).send('Internal Server Error');
            }
        })

        // ---- Delete A Banner ----
        app.delete('/banner/:id', async (req, res) => {
            const id = req.params.id
            const query = {
                _id: new ObjectId(id)
            }
            const result = bannerCollection.deleteOne(query)
            res.send(result)
        })

        // ---- Health Recommendations ----
        app.get('/health-recommendations', async (req, res) => {
            const result = healthRecommendationsCollection.find().toArray()
            res.send(result)
        })


        //---------------------- Tests ----------------------//
        //---------------------- Tests ----------------------//
        //---------------------- Tests ----------------------//
        //---------------------- Tests ----------------------//

        // ---- Posting A test ----
        app.post('/tests', async (req, res) => {
            const test = req.body
            const result = await testCollection.insertOne(test)
            res.send(result)
        })

        // ---- Test List ----
        app.get('/tests', async (req, res) => {
            const result = await testCollection.find().toArray()
            res.send(result)
        })

        // ---- Test By Id ----
        app.get('/tests/:id', async (req, res) => {
            try {
                const id = req.params.id
                const query = {
                    _id: new ObjectId(id)
                }
                const result = await testCollection.findOne(query)
                if (!result) {
                    res.status(404).send('Item Not Found')
                    return;
                }
                res.send(result)
            }
            catch (err) {
                console.log(err);
                // res.status(500).send('Internal Server Error');
            }
        })

        // ---- Update A Test ----
        app.patch('/tests/:id', async (req, res) => {
            try{
                const id = req.params.id;
                const data = req.body;
                const filter = { _id: new ObjectId(id) };
                const options = { upsert: true };
                const updatedItem = {
                    $set: {
                        // _id, testDate, testDetails, testImgUrl, testName, testPrice, testSlots
                        testDate: data.testDate,
                        testDetails: data.testDetails,
                        testImgUrl: data.testImgUrl,
                        testName: data.testName,
                        testPrice: data.testPrice,
                        testSlots: data.testSlots,
                    },
                };
                const result = await testCollection.updateOne(
                    filter,
                    updatedItem,
                    options
                );
                res.send(result);
            }catch(error){
                console.log(error);
            }
        })
        

        // ---- Delete A Test ----
        app.delete('/tests/:id', async (req, res) => {
            try {
                const id = req.params.id
                const query = {
                    _id: new ObjectId(id)
                }
                const result = testCollection.deleteOne(query)
                res.send(result)
            }
            catch (err) {
                console.log(err);
                // res.status(500).send('Internal Server Error');
            }
        })

        app.get('/tests', async (req, res) => {
            // const result = 
        })







        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");
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

