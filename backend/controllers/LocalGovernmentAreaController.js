const Lga = require("../model/LocalGovernmentArea");

//GET requests
module.exports.getLgaIdentifiers = async (request, response) => {
    try {
        let identifiers = await Lga.retrieveLgaIdentifiers();//array
        response.status(200).json(identifiers);
    } catch (e) {
        const message = e.message;
        response.status(404).json(message);
    }
}

module.exports.retrieveWardIdentifiers = async (request, response) => {
    const {lgaCode} = request.query;
    try {
        let identifiers = await Lga.retrieveWardIdentifiers(lgaCode);
        response.status(200).json(identifiers);
    } catch (e) {
        const message = e.message;
        response.status(404).json(message);
    }
}