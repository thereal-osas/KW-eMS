const mongoose = require('mongoose');

const localGovernmentAreaSchema = new mongoose.Schema({
    lgaCode: {
        type: Number, index: true
    }, lgaName: {
        type: String, index: true
    }, wards: [{ //One-to-Many relationship
        type: mongoose.SchemaTypes.ObjectId, ref: 'Wards', required: true
    }]
});

//retrieve all Local Government Area Identifiers(name and code).
localGovernmentAreaSchema.statics.retrieveLgaIdentifiers = async function () {
    let lga = await this.find()
        .select('-wards')
        .lean();
    if (lga.length === 0)
        throw new Error("No local government exists in repository.");
    return lga;
};

//retrieve all the wards identifiers(name and code) of a particular lga by it's code.
localGovernmentAreaSchema.statics.retrieveWardIdentifiers = async function (lgaCode) {
    const wards = await this
        .findOne({lgaCode})
        .populate({path: "wards", select: "wardName wardCode"})
        .select("wards")
        .lean();
    if (!wards)
        throw new Error("Local Government does not exist.");
    return wards;
};

module.exports = mongoose.model('LocalGovernmentArea', localGovernmentAreaSchema);