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
    let matches = false;
    for (let type of ElectionType) {
        if (type === electionType) {
            matches = true;
            break;
        }
    }
    if (matches === false)
        throw new Error(`${electionType} is not a valid election type.`);

    const results = this.findOne({pollingUnitCode})
        .populate({path: "results", match: {electionType}, select: "-pollingUnit"})
        .select("results").lean();
    if (!results)
        throw new Error("PollingUnit does not exist.");
    return results;
}

const ElectionType = ["Presidential", "Governorship", "House of reps"];


module.exports = mongoose.model('PollingUnit', pollingUnitSchema)