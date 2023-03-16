const mongoose = require('mongoose');
const wardSchema = new mongoose.Schema({
    lga: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'LocalGovernmentArea',
    },
    wardCode: {
        type: Number,
        index: true
    },
    wardName: {
        type: String,
        index: true
    },
    pollingUnits: [{ //One-to-Many relationship
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'PollingUnit'
    }]
});


//retrieve all PollingUnits Identifiers(name and code) of a particular Ward by its code.
wardSchema.statics.retrieveAllPollingUnitsIdentifiers = async function (state, lgaCode, wardCode) {
    //use the wardCode to return all pollingUnits identifiers.
    const pollingUnits = await this.findOne({wardCode})
        .populate({path: "pollingUnits", select: "pollingUnitName pollingUnitCode"})
        .populate({path: "lga", match: {lgaCode, state}})
        .select("pollingUnits").lean();
    if (!pollingUnits)
        throw new Error('Ward does not exist.');
    return pollingUnits;
}

// wardSchema.statics.retrieveAllPollingUnits = async function (wardCode) {
//     use the wardCode to return all pollingUnits.
// }

module.exports = mongoose.model('Ward', wardSchema);