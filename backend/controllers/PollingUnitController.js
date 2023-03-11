const PollingUnit = require("../model/PollingUnit");
const pollingUnitMatcher = require("../util/RegexMatcher");

module.exports.retrieveResultsInPollingUnit = async function (request, response) {
    const {electionType, pollingUnitCode} = request.query;
    try {
        pollingUnitMatcher.pollingUnitMatcher(pollingUnitCode);
        pollingUnitMatcher.electionTypeMatcher(electionType);
        const results = await PollingUnit.retrieveAllResults(pollingUnitCode, electionType);
        response.status(200).json(results);
    } catch (e) {
        response.status(404).json(e.message);
    }
}
