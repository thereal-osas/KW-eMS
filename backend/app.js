const express = require('express');
const mongoose = require('mongoose').Mongoose;
const cookieParser = require('cookie-parser');
require("dotenv").config();
const app = express();

//middleware
app.use(express.json()); // parses the json content type...
app.use(cookieParser());

//database connection
const PORT = process.env.PORT || 3000;
const DBURI = process.env.DBURI;
mongoose.connect(DBURI, {useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true}, () => {
    app.listen(PORT, () => {
        console.log(` Connected to MongoDb...server is running on PORT: ${PORT}`)
    })
});