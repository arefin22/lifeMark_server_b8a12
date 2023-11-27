const express = require("express");
const applyMiddleware = require("./middlewares/applyMiddleware");
const connectDB = require("./db/connectDB");
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;
const authenticationRoutes = require("./routes/authentication/index")
const usersRoutes = require("./routes/users")

applyMiddleware(app)

// MAIN FUNCTIONALITY HERE
app.use(authenticationRoutes);
app.use(usersRoutes);















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
const main = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`LifeMark Server is Running on port ${port}`);
    });
}
main();