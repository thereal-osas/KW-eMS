const {Schema, SchemaTypes: {ObjectId}, model} = require('mongoose');
const pollingUnitSchema = new Schema({
    ward: {
        type: ObjectId,
        ref: 'Ward',
        required: true
    }, pollingUnitName: {
        type: String,
        index: true,
        required: true
    }, pollingUnitCode: {
        type: String,
        index: true,
        required: true,
        unique: true
    },
    registeredVoters: {
        type: Number
    },
    results: [{ //One-to-Many relationship //a polling Unit can have 3 types of results{Presidential,Governorship,House of reps}
        type: ObjectId, ref: 'Results'
    }]
});

//retrieves polling unit results of a particular polling unit by its code,wardName, and election type.
pollingUnitSchema.statics.retrievePollingUnitResults = async function (pollingUnitCode, wardName, electionType) {
    const results = await this.findOne({pollingUnitCode})//retrieve a polling unit using its code
        .populate({path: "ward", match: {wardName}, select: {wardName}})
        .populate({path: "results", match: {electionType}, select: "-electionType -pollingUnit"})
        .lean();
    if (!results)
        throw new Error("No results found for this polling unit.");
    if (results.ward === null || results.results === null)
        throw new Error(`${electionType} result was not found from this polling unit.`);
    return results;
}

module.exports = model('PollingUnit', pollingUnitSchema);