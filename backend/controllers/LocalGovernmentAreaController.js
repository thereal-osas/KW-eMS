const Lga = require("../model/LocalGovernmentArea");
const lengthMatcher = require("../util/RegexMatcher");

module.exports.getLgaIdentifiers = async (request, response) => {
    try {
        let identifiers = await Lga.retrieveLgaIdentifiers();//array
        response.status(200).json(identifiers);
    } catch (e) {
        response.status(404).json(e.message);
    }
}

module.exports.retrieveWardIdentifiers = async (request, response) => {
    const {lgaCode} = request.query;
    try {
        lengthMatcher.lengthMatcher(lgaCode);
        let identifiers = await Lga.retrieveWardIdentifiers(lgaCode);
        response.status(200).json(identifiers);
    } catch (e) {
        response.status(404).json(e.message);
    }
}