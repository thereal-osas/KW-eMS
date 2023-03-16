const {Schema, SchemaTypes: {ObjectId}, model} = require('mongoose');

const resultSchema = new Schema({
    electionType: {
        enum: ["Presidential", "Governorship", "House of reps"],
        type: String,
        required: true
    },
    pollingUnit: {  //One-to-One relationship
        type: ObjectId,
        ref: 'PollingUnit',
        required: true
    },
    transcriptionCount: {
        type: Number,
        required: true
    },
    resultSheetStamped: {
        type: Boolean,
        required: true
    },
    resultSheetCorrected: {
        type: Boolean,
        required: true
    },
    resultSheetInvalid: {
        type: Boolean,
        required: true
    },
    resultSheetUnclear: {
        type: Boolean,
        required: true
    },
    resultSheetUnsigned: {
        type: String,
        required: true
    }, resultsFound: {
        type: Boolean
    },
    resultLink: {
        type: String,
        required: true
    },
    A: {
        type: Number,
        default: null
    },
    AA: {
        type: Number,
        default: null
    },
    AAC: {
        type: Number,
        default: null
    },
    ADC: {
        type: Number,
        default: null
    },
    ADP: {
        type: Number,
        default: null
    },
    APC: {
        type: Number,
        required: true
    },
    APGA: {
        type: Number,
        default: null
    },
    APM: {
        type: Number,
        default: null
    },
    APP: {
        type: Number,
        default: null
    },
    BP: {
        type: Number,
        default: null
    },
    LP: {
        type: Number,
        required: true
    },
    NNPP: {
        type: Number,
        required: true
    },
    PDP: {
        type: Number,
        required: true
    },
    PRP: {
        type: Number,
        default: null
    },
    SDP: {
        type: Number,
        default: null
    },
    YPP: {
        type: Number,
        default: null
    },
    ZLXP: {
        type: Number,
        default: null
    },
    accreditedVoters: {
        type: Number,
        required: true
    }
});

module.exports = model("Results", resultSchema);