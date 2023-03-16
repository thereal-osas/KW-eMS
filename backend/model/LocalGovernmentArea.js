const mongoose = require('mongoose');
const {SchemaTypes: {ObjectId}, Schema, model} = mongoose;
const localGovernmentAreaSchema = new Schema({
    lgaName: {
        type: String, index: true, unique: true
    }, wards: [{ //One-to-Many relationship
        type: ObjectId, ref: 'Ward', unique: true
    }], state: {
        type: String
    }
});

//checked
//retrieve all Local Government Area names in a particular state.
localGovernmentAreaSchema.statics.retrieveLgaIdentifiers = async function (state) {
    let lga = await this.find({state})
        .select('lgaName')
        .lean();
    if (lga.length === 0)
        throw new Error(`${state} state results have not being uploaded yet.`);
    return lga;
};

//retrieve all the wards name of a particular lga by the lgaName and state.
localGovernmentAreaSchema.statics.retrieveWardIdentifiers = async function (state, lgaName) {
    const wards = await this
        .findOne({state, lgaName})
        .populate({path: "wards", select: "wardName"})
        .select("wards")
        .lean();
    if (!wards)
        throw new Error("Local Government does not exist.");
    if (wards.wards === null)
        throw new Error("No wards were found in this local government.");
    return wards;
};

module.exports = model('LocalGovernmentArea', localGovernmentAreaSchema);