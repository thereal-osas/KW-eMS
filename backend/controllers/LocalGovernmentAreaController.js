const Lga = require("../model/LocalGovernmentArea");
const lengthMatcher = require("../util/RegexMatcher");
const verifyState = require("../util/StatesMatcher");

module.exports.getLgaIdentifiers = async (request, response) => {
    let {state} = request.params;
    try {
        verifyState.verifyState(state)
        let identifiers = await Lga.retrieveLgaIdentifiers(state);//array
        response.status(200).json(identifiers);
    } catch (e) {
        response.status(404).json(e.message);
    }
}

module.exports.retrieveWardIdentifiers = async (request, response) => {
    const {lgaCode, state} = request.params;
    try {
        verifyState.verifyState(state);
        lengthMatcher.lengthMatcher(lgaCode);
        let identifiers = await Lga.retrieveWardIdentifiers(state, lgaCode);
        response.status(200).json(identifiers);
    } catch (e) {
        response.status(404).json(e.message);
    }
}