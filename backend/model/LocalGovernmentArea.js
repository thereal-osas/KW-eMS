const mongoose = require('mongoose').Mongoose;
const localGovernmentAreaSchema = new mongoose.Schema({
    localGovernmentId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    lgaCode: {
        type: Number
    },
    wards: [{ //One-to-Many relationship
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Wards'
    }]
});
localGovernmentAreaSchema.statics.retrieveAllWardsIdentifiers = async function (lgaCode) {
    //use the lgaCode to retrieve all wards identifiers
}

localGovernmentAreaSchema.statics.retrieveAllWards = async function (lgaCode) {
    //use the lgaCode to retrieve all wards
}
module.exports = mongoose.model('LocalGovernment', localGovernmentAreaSchema);