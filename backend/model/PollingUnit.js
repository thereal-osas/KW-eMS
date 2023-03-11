const mongoose = require('mongoose');
const pollingUnitSchema = new mongoose.Schema({
    ward: {
        type: mongoose.SchemaTypes.ObjectId, ref: 'Ward'
    }, pollingUnitName: {
        type: String,
        index: true
    }, pollingUnitCode: {
        type: Number,
        index: true
    }, results: [{ //One-to-Many relationship
        type: mongoose.SchemaTypes.ObjectId, ref: 'Results'
    }]
});

pollingUnitSchema.statics.retrieveAllResults = async function (pollingUnitCode, electionType) {
    const results = this.findOne({pollingUnitCode})
        .populate({path: "results", match: {electionType}, select: "-pollingUnit"})
        .select("results").lean();
    if (!results)
        throw new Error("PollingUnit does not exist.");
    return results;
}

module.exports = mongoose.model('PollingUnit', pollingUnitSchema)