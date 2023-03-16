const Ward = require("../model/Ward");
const stateMatcher = require("../util/StatesMatcher");
module.exports.retrievePollingUnitsIdentifiers = async (request, response) => {
    const {state} = request.params;
    const {lgaName, wardName} = request.body;
    try {
        stateMatcher.verifyState(state);
        let wards = await Ward.retrieveAllPollingUnitsIdentifiers(state.toUpperCase(), lgaName.toUpperCase(), wardName.toUpperCase());
        response.status(200).json(wards);
    } catch (e) {
        response.status(404).json(e.message);
    }
}

