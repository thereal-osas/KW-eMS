const mongoose = require('mongoose').Mongoose;

const resultSchema = new mongoose.Schema({
    electionType: {
        enum: ["Presidential", "Governorship", "House of reps"]
    },
    pollingUnit: {  //One-to-One relationship
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'PollingUnit'
    },
    A: {
        type: Number
    },
    AA: {
        type: Number
    },
    AAC: {
        type: Number
    },
    ADC: {
        type: Number
    },
    ADP: {
        type: Number
    },
    APC: {
        type: Number
    },
    APGA: {
        type: Number
    },
    APM: {
        type: Number
    },
    APP: {
        type: Number
    },
    BP: {
        type: Number
    },
    LP: {
        type: Number
    },
    NNPP: {
        type: Number
    },
    PDP: {
        type: Number
    },
    PRP: {
        type: Number
    },
    SDP: {
        type: Number
    },
    YPP: {
        type: Number
    },
    ZLXP: {
        type: Number
    },
    totalNumberOfVotes: {
        type: Number
    },
    // validVotes: {
    //     type: Number
    // },
    // invalidVotes: {
    //     type: Number
    // },
    // numberOfRegisteredVoters: {
    //     type: Number
    // }
});

module.exports = mongoose.model("Results", resultSchema);