const Ward = require("../model/Ward");
const lengthMatcher = require("../util/RegexMatcher");
const stateMatcher = require("../util/StatesMatcher");
module.exports.retrieveWardsIdentifiers = async (request, response) => {
    const {state, lgaCode, wardCode} = request.query;
    try {
        lengthMatcher.lengthMatcher(wardCode);
        lengthMatcher.lengthMatcher(lgaCode);
        stateMatcher.verifyState(state);
        let wards = await Ward.retrieveAllPollingUnitsIdentifiers(state, lgaCode, wardCode);
        response.status(200).json(wards);
    } catch (e) {
        response.status(404).json(e.message);
    }
}

