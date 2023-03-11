const PollingUnit = require("../model/PollingUnit");
module.exports.retrieveResultsInPollingUnit = async function (request, response) {
    const {electionType, pollingUnitCode} = request.query;
    try {
        const results = await PollingUnit.retrieveAllResults(pollingUnitCode, electionType);
        response.status(200).json(results);
    } catch (e) {
        response.status(404).json(e.message);
    }
}
