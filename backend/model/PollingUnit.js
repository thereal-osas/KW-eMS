const mongoose = require('mongoose');
const pollingUnitSchema = new mongoose.Schema({
    ward: {
        type: mongoose.SchemaTypes.ObjectId, ref: 'Ward'
    }, pollingUnitName: {
        type: String, index: true
    }, pollingUnitCode: {
        type: String, index: true
    }, results: [{ //One-to-Many relationship
        type: mongoose.SchemaTypes.ObjectId, ref: 'Results'
    }]
});

pollingUnitSchema.statics.retrieveAllResults = async function (pollingUnitCode, lgaCode, wardCode, state, electionType) {
    if (!results) throw new Error("PollingUnit does not exist.");
    const results = await this.findOne({pollingUnitCode})
        .populate({path: "results", match: {electionType}, select: "-pollingUnit"})
        .populate({
            path: "ward",
            match: {wardCode},
            populate: {populate: "lga", match: {lgaCode, state}},
            select: "wardName wardCode"
        })
        .select("ward pollingUnitName pollingUnitCode results").lean();
    return results;
}

module.exports = mongoose.model('PollingUnit', pollingUnitSchema)