const mongoose = require('mongoose').Mongoose;
const wardSchema = new mongoose.Schema({
    wardId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    wardCode: {
        type: Number
    },
    pollingUnits: [{ //One-to-Many relationship
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'PollingUnit'
    }]
});

wardSchema.statics.retrieveAllPollingUnitsIdentifiers = async function (wardCode) {
    //use the wardCode to return all pollingUnits identifiers.
}

wardSchema.statics.retrieveAllPollingUnits = async function (wardCode) {
    //use the wardCode to return all pollingUnits.
}

module.exports = mongoose.model('Ward', wardSchema);