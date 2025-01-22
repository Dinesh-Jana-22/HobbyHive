const express = require("express");
const mongoose = require("mongoose")
require("dotenv").config()

const app = express();
app.use(express.json());

const testRoutes = require('./routes/test.route')
const authRoutes = require('./routes/auth.route')

mongoose.connect(process.env.DATABASE_URI).then(() => {
    console.log("Connected to the database");
}).catch((err) => {
    console.log("Error to connect to the database", err);
})



app.use('/api', testRoutes);
app.use('/api', authRoutes)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})