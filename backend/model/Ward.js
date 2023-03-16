const {Schema, SchemaTypes: {ObjectId}, model} = require('mongoose');
const wardSchema = new Schema({
    lga: {
        type: ObjectId,
        ref: 'LocalGovernmentArea',
    },
    wardName: {
        type: String,
        index: true,
        unique: true
    },
    pollingUnits: [{ //One-to-Many relationship
        type: ObjectId,
        ref: 'PollingUnit',
        unique: true
    }]
});

//checked
//retrieve all PollingUnits Identifiers(name and code) of a particular Ward by the lgaName,wardName,state.
wardSchema.statics.retrieveAllPollingUnitsIdentifiers = async function (state, lgaName, wardName) {
    //use the wardName to return all pollingUnits identifiers.
    let pollingUnit = await this.find({wardName})
        .populate({path: "lga", select: "lgaName state"})
        .populate({path: "pollingUnits", select: "pollingUnitName pollingUnitCode"})
        .select("pollingUnits")
        .lean();
    let found = false;
    let poll;
    pollingUnit.forEach(unit => {
        poll = unit;
        if (unit.lga === null || unit.pollingUnits === null) {
            return;
        }
        if (unit.lga.lgaName !== lgaName || unit.lga.state !== state)
            return;
        found = true;
    });
    if (!found)
        throw new Error('No polling units were found...');
    return poll;
}

module.exports = model('Ward', wardSchema);