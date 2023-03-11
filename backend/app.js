const express = require('express');
const mongoose = require('mongoose');
const lgaControllers = require("./controllers/LocalGovernmentAreaController");
const wardControllers = require("./controllers/WardController");
const pollingControllers = require("./controllers/PollingUnitController");
const app = express();

//middleware
app.use(express.json()); // parses the json content type...

//database connection
const PORT = process.env.PORT;
const DBURI = process.env.DBURI;
mongoose.set('strictQuery', true);
mongoose.connect(DBURI, {useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true})
    .then(instance => {
        // console.log(instance);
        app.listen(PORT, () => {
            console.log(` Connected to MongoDb...server is running on PORT: ${PORT}`);
        })
    }).catch(error => {
    console.log(error);
});


let baseUrl = "/Kwara";
app.get(`${baseUrl}/lga/retrieve-identifiers`, lgaControllers.getLgaIdentifiers);
app.get(`${baseUrl}/lga/retrieve-ward-identifiers`, lgaControllers.retrieveWardIdentifiers);
app.get(`${baseUrl}/ward/retrieve-pollingUnit-identifiers`, wardControllers.retrieveWardsIdentifiers);
app.get(`${baseUrl}/polling-unit/results`, pollingControllers.retrieveResultsInPollingUnit);