// noinspection JSUnresolvedVariable

const csvToJson = require("csvtojson");
const LocalGovernmentArea = require('../model/LocalGovernmentArea');
const Ward = require("../model/Ward");
const PollingUnit = require("../model/PollingUnit");
const Results = require("../model/Results");

const convertToBoolean = (value) => {
    return value === "TRUE";
};

const mapResults = async (electionType = "Presidential", pollingUnit, transcriptionCount, resultSheetStamped, resultSheetCorrected, resultSheetInvalid, resultSheetUnclear, resultSheetUnsigned, resultsFound, resultLink, APC, LP, NNPP, PDP, accreditedVoters) => {
    const results = new Results({
        electionType,
        pollingUnit,
        transcriptionCount,
        resultSheetStamped,
        resultSheetCorrected,
        resultSheetInvalid,
        resultSheetUnclear,
        resultSheetUnsigned,
        resultsFound,
        resultLink,
        APC,
        LP,
        NNPP,
        PDP,
        accreditedVoters
    });
    let newResults = await results.save();
    return newResults._id;
};

//open the csv file to read data...
module.exports.parser = async (path) => {
    const array = await csvToJson()
        .fromFile(path);
    for (const row of array) {
        const lgaName = row.LGA;//checked
        const state = row.State; //checked
        const wardName = row.Ward;//checked
        const pollingUnitCode = row["PU-Code"];
        const pollingUnitName = row["PU-Name"];
        const accreditedVoters = row.Accredited_Voters;
        const registeredVoters = row.Registered_Voters;
        const resultsFound = convertToBoolean(row.Results_Found);
        const transcriptionCount = row.Transcription_Count;
        const resultSheetStamped = convertToBoolean(row.Result_Sheet_Stamped);
        const resultSheetCorrected = convertToBoolean(row.Result_Sheet_Corrected);
        const resultSheetInvalid = convertToBoolean(row.Result_Sheet_Invalid);
        const resultSheetUnclear = convertToBoolean(row.Result_Sheet_Unclear);
        const resultSheetUnsigned = row.Result_Sheet_Unsigned;
        const resultLink = row.Results_File;
        const APC = row.APC;
        const LP = row.LP;
        const PDP = row.PDP;
        const NNPP = row.NNPP;
        const lgaInstance = await LocalGovernmentArea.findOne({lgaName});
        if (!lgaInstance) { //if the lga does not exist yet.
            //create the new lga and the ward...
            //also the polling unit...
            let newLga = new LocalGovernmentArea({lgaName, state});
            newLga = await newLga.save(); //this contains the new lga id.
            let newWard = new Ward({lga: newLga._id, wardName});
            newWard = await newWard.save(); //this contains the new ward id.
            let newPollingUnit = new PollingUnit({
                ward: newWard._id, pollingUnitName, pollingUnitCode, registeredVoters
            });
            newPollingUnit = await newPollingUnit.save(); //this contains the new polling unit id.
            let resultId = await mapResults("Presidential", newPollingUnit._id, transcriptionCount, resultSheetStamped, resultSheetCorrected, resultSheetInvalid, resultSheetUnclear, resultSheetUnsigned, resultsFound, resultLink, APC, LP, NNPP, PDP, accreditedVoters); //this contains the new result id.
            await PollingUnit.updateOne({_id: newPollingUnit._id}, {$push: {results: resultId}});
            await Ward.updateOne({_id: newWard._id}, {$push: {pollingUnits: newPollingUnit._id}});
            await LocalGovernmentArea.updateOne({_id: newLga._id}, {$push: {wards: newWard._id}});
        } else { //it means there's a lga instance
            //check if the ward exists
            let wardInstance = await Ward.findOne({wardName});
            if (wardInstance) { //if the ward exists
                //if it exists simply save the polling unit to it
                let newPollingUnit = new PollingUnit({
                    ward: wardInstance._id, pollingUnitName, pollingUnitCode, registeredVoters
                });
                newPollingUnit = await newPollingUnit.save(); //this contains the polling unit id.
                let resultId = await mapResults("Presidential", newPollingUnit._id, transcriptionCount, resultSheetStamped, resultSheetCorrected, resultSheetInvalid, resultSheetUnclear, resultSheetUnsigned, resultsFound, resultLink, APC, LP, NNPP, PDP, accreditedVoters); //this contains the new result id.
                await PollingUnit.updateOne({_id: newPollingUnit._id}, {$push: {results: resultId}});
                await Ward.updateOne({_id: wardInstance._id}, {$push: {pollingUnits: newPollingUnit._id}});
            } else { //if the ward doesn't exist
//if the ward doesn't exist, simply save the ward to the lga
                // and also save the polling unit
                //create ward
                let newWard = new Ward({
                    lga: lgaInstance._id, wardName
                });
                newWard = await newWard.save(); // this contains the new ward Id
                let newPollingUnit = new PollingUnit({
                    ward: newWard._id, pollingUnitName, pollingUnitCode, registeredVoters
                });
                newPollingUnit = await newPollingUnit.save(); // this contains the new polling unit Id
                let resultId = await mapResults("Presidential", newPollingUnit._id, transcriptionCount, resultSheetStamped, resultSheetCorrected, resultSheetInvalid, resultSheetUnclear, resultSheetUnsigned, resultsFound, resultLink, APC, LP, NNPP, PDP, accreditedVoters); //this contains the new result id.
                await PollingUnit.updateOne({_id: newPollingUnit._id}, {$push: {results: resultId}});
                await Ward.updateOne({_id: newWard._id}, {$push: {pollingUnits: newPollingUnit._id}});
                await LocalGovernmentArea.updateOne({_id: lgaInstance._id}, {$push: {wards: newWard._id}});
            }
        }
    }
};
