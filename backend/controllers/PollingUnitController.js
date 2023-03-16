const PollingUnit = require("../model/PollingUnit");
const validateElectionType = require("../util/ElectionType");

module.exports.retrieveResultsInPollingUnit = async function (request, response) {
    const {pollingUnitCode, wardName, electionType} = request.body;
    try {
        validateElectionType.validateElectionType(electionType);
        const results = await PollingUnit.retrievePollingUnitResults(pollingUnitCode, wardName, electionType);
        response.status(200).json(results);
    } catch (e) {
        response.status(404).json(e.message);
    }
}
