const express = require("express");

const app = express();

const testRoutes = require('./routes/test.route')

app.use('/api', testRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})