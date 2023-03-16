const Lga = require("../model/LocalGovernmentArea");
const verifyState = require("../util/StatesMatcher");

module.exports.getLgaIdentifiers = async (request, response) => {
    let {state} = request.params;
    try {
        verifyState.verifyState(state)
        let identifiers = await Lga.retrieveLgaIdentifiers(state.toUpperCase());//array
        response.status(200).json(identifiers);
    } catch (e) {
        response.status(404).json(e.message);
    }
}

module.exports.retrieveWardIdentifiers = async (request, response) => {
    const {state} = request.params;
    const {lgaName} = request.body;
    try {
        verifyState.verifyState(state);
        let identifiers = await Lga.retrieveWardIdentifiers(state.toUpperCase(), lgaName.toUpperCase());
        response.status(200).json(identifiers);
    } catch (e) {
        response.status(404).json(e.message);
    }
}