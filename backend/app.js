const express = require('express');
const mongoose = require('mongoose');
mongoose.set('debug', true);
const lgaControllers = require("./controllers/LocalGovernmentAreaController");
const wardControllers = require("./controllers/WardController");
const pollingControllers = require("./controllers/PollingUnitController");
const app = express();
const loadCsv = require("./util/LoadCsv");
//middleware
app.use(express.json()); // parses json content type...


//database connection
const PORT = process.env.PORT;
const DBURI = process.env.DBURI;
mongoose.set('strictQuery', true);
mongoose.connect(DBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true
})
    .then(instance => {
        app.listen(PORT, async () => {
            console.log(` Connected to MongoDb...server is running on PORT: ${PORT}`);
            // loadCsv.csvLoader.runDefault();
        })
    }).catch(error => {
    console.log(error);
});

const baseUrl = '/api/kws';
const stateUrl = "state/:state";
app.get(`${baseUrl}/${stateUrl}/retrieve-lga-identifiers`, lgaControllers.getLgaIdentifiers); //returns the lga names as objects in an array.
app.get(`${baseUrl}/${stateUrl}/retrieve-ward-identifiers`, lgaControllers.retrieveWardIdentifiers);
app.get(`${baseUrl}/${stateUrl}/retrieve-polling-unit-identifiers`, wardControllers.retrievePollingUnitsIdentifiers);
app.get(`${baseUrl}/${stateUrl}/results`, pollingControllers.retrieveResultsInPollingUnit);

console.log(app._router.stack);