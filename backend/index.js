const express = require("express");
const mongoose = require("mongoose")
require("dotenv").config()

const app = express();

mongoose.connect(process.env.DATABASE_URI).then(() => {
    console.log("Connected to the database");
}).catch((err) => {
    console.log("Error to connect to the database", err);
})

const testRoutes = require('./routes/test.route')

app.use('/api', testRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})