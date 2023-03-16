const PollingUnit = require("../model/PollingUnit");
const pollingUnitMatcher = require("../util/RegexMatcher");
const validateElectionType = require("../util/ElectionType");
const {lengthMatcher} = require("../util/RegexMatcher");
const stateMatcher = require("../util/StatesMatcher");

module.exports.retrieveResultsInPollingUnit = async function (request, response) {
    const {state, lgaCode, wardCode, electionType} = request.query;
    const {pollingUnitCode} = request.body;
    try {
        lengthMatcher.lengthMatcher(wardCode);
        stateMatcher.verifyState(state);
        lengthMatcher.lengthMatcher(wardCode);
        pollingUnitMatcher.pollingUnitMatcher(pollingUnitCode);
        validateElectionType.validateElectionType(electionType);
        const results = await PollingUnit.retrieveAllResults(pollingUnitCode, lgaCode, wardCode, state, electionType);
        response.status(200).json(results);
    } catch (e) {
        response.status(404).json(e.message);
    }
}
