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

const baseUrl = '/api/kws';
const stateUrl = "state/:state";
const lgaUrl = "lga/:lgaCode";
const wardUrl = "ward/:wardCode";
const resultsUrl = "polling-unit/:electionType";
app.get(`${baseUrl}/${stateUrl}/lga/retrieve-identifiers`, lgaControllers.getLgaIdentifiers);
app.get(`${baseUrl}/${stateUrl}/${lgaUrl}/retrieve-ward-identifiers`, lgaControllers.retrieveWardIdentifiers);
app.get(`${baseUrl}/${stateUrl}/${lgaUrl}/${wardUrl}/retrieve-pollingUnit-identifiers`, wardControllers.retrieveWardsIdentifiers);
app.get(`${baseUrl}/${stateUrl}/${lgaUrl}/${wardUrl}/${resultsUrl}/results`, pollingControllers.retrieveResultsInPollingUnit);