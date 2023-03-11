const Ward = require("../model/Ward");

module.exports.retrieveWardsIdentifiers = async (request, response) => {
    const {wardCode} = request.query;
    try {
        let wards = await Ward.retrieveAllPollingUnitsIdentifiers(wardCode);
        response.status(200).json(wards);
    } catch (e) {
        response.status(404).json(e.message);
    }
}

