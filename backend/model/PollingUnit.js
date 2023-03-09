const mongoose = require('mongoose').Mongoose;
const pollingUnitSchema = new mongoose.Schema({
    pollingUnitId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    pollingUnitCode: {
        type: Number
    },
    results: [{ //One-to-Many relationship
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Results'
    }]
});

pollingUnitSchema.statics.retrieveAllResults = async function (pollingUnitCode) {
// return all the results in the polling unit
}

module.exports = mongoose.model('PollingUnit', pollingUnitSchema)