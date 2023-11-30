const express = require("express");
const applyMiddleware = require("./middlewares/applyMiddleware");
const connectDB = require("./db/connectDB");
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;
const authenticationRoutes = require("./routes/authentication/index")
const usersRoutes = require("./routes/users");
const User = require("./models/User");
const Test = require("./models/Test");
const Banner = require("./models/Banner");
const Appointment = require("./models/Appointment");
const ObjectId = require('mongoose').Types.ObjectId;
applyMiddleware(app)

// MAIN FUNCTIONALITY HERE
app.use(authenticationRoutes);
app.use(usersRoutes);

//---------------------- User Profile ----------------------//
//---------------------- User Profile ----------------------//
//---------------------- User Profile ----------------------//
//---------------------- User Profile ----------------------//
app.post('/user', async (req, res) => {
    const user = req.body
    const query = { email: user.email }
    const existingUser = await User.findOne(query)
    if (existingUser) {
        return res.send(console.log("User Exist"))
    }
    const result = await User.insertOne(user)
    res.send(result);
})
app.get('/user', async (req, res) => {
    const result = await User.find().toArray()
    res.send(result);
})
app.get('/user/:email', async (req, res) => {
    try {
        const email = req.params.email;
        // console.log(email);
        const query = {
            email: email,
        };
        const result = await User?.findOne(query)
        // .toArray();
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
app.patch('/user/:email', async (req, res) => {
    try {
        const id = req.params.id
        const query = {
            _id: new ObjectId(id)
        }
        const result = await User.updateOne(query)
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

//---------------------- Admin ----------------------//
//---------------------- Admin ----------------------//
//---------------------- Admin ----------------------//
//---------------------- Admin ----------------------//
// ---- Banner Create ----
app.post('/banners', async (req, res) => {
    const banner = req.body
    const result = await Banner.insertOne(banner)
    res.send(result)
})

// ---- Banner List ----
app.get('/banners', async (req, res) => {
    const result = await Banner.find()
    res.send(result)
})
// ---- Single Banner Using Id ----
app.get('/banners/:id', async (req, res) => {
    try {
        const id = req.params.id
        // const query = {
        //     _id: new ObjectId(id)
        // }
        const result = await Banner.findById(id)

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
        const result = await Banner.updateOne(query)

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
    // const query = {
    //     _id: new ObjectId(id)
    // }
    const result = Banner.findOneAndDelete({_id: new ObjectId(id)})
    res.send(result)
})

// ---- Health Recommendations ----
app.get('/health-recommendations', async (req, res) => {
    const result = healthRecommendationsCollection.find()
    res.send(result)
})


//---------------------- Tests ----------------------//
//---------------------- Tests ----------------------//
//---------------------- Tests ----------------------//
//---------------------- Tests ----------------------//

// ---- Posting A test ----
app.post('/tests', async (req, res) => {
    try{
        const test = req.body
        console.log(test);
        const result = await Test.insertOne(test)
        res.send(result)
    }
    catch(err){
        console.log(err);
    }
})

// ---- Test List ----
app.get('/tests', async (req, res) => {
    const result = await Test.find()
    res.send(result)
})

// ---- Test By Id ----
app.get('/tests/:id', async (req, res) => {
    try {
        const id = req.params.id
        // const query = {
        //     _id: new ObjectId(id)
        // }
        const result = await Test.findById(id)
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
    try {
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
        const result = await Test.updateOne(
            filter,
            updatedItem,
            options
        );
        res.send(result);
    } catch (error) {
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
        const result = Test.deleteOne(query)
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

//------------------ Appointment Section ------------------//
//------------------ Appointment Section ------------------//
//------------------ Appointment Section ------------------//
//------------------ Appointment Section ------------------//

// ---- All Appointment ----
app.get('/appointment', async (req, res) => {
    const result = await Appointment.find()
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
        const result = await Appointment.find(query)
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
// app.get('/appointment/:id', async (req, res) => {
//     try {
//         const id = req.params.id
//         // const query = {
//         //     _id: new ObjectId(id)
//         // }
//         const result = await Appointment.findById(id)
//         if (!result) {
//             res.status(404).send('Item Not Found')
//             return;
//         }
//         res.send(result);
//     }
//     catch (err) {
//         console.log(err);
//         // res.status(500).send('Internal Server Error');
//     }
// })

// ---- Single Appointment Edit Using In ----
app.patch('/appointment/:id', async (req, res) => {
    try {
        const id = req.params.id
        const query = {
            _id: new ObjectId(id)
        }
        const result = await Appointment.updateOne(query)
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
// ---- Single Appointment Delete Using In ----
app.delete('/appointment/:id', async (req, res) => {
    try {
        const id = req.params.id
        const query = {
            _id: new ObjectId(id)
        }
        const result = Appointment.deleteOne(query)
        res.send(result)
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































// DB SETUP
app.get("/health", (req, res) => {
    res.send("LifeMark Server is running...");
});
app.all("*", (req, res, next) => {
    const error = new Error(`the requested url is invalid : [${req.url}]`)
    error.status = 404
    next(error)
})
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = app;