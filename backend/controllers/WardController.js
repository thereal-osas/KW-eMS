const Ward = require("../model/Ward");
const lengthMatcher = require("../util/RegexMatcher");

module.exports.retrieveWardsIdentifiers = async (request, response) => {
    const {wardCode} = request.query;
    try {
        lengthMatcher.lengthMatcher(wardCode);
        let wards = await Ward.retrieveAllPollingUnitsIdentifiers(wardCode);
        response.status(200).json(wards);
    } catch (e) {
        response.status(404).json(e.message);
    }
}

