const pollingUnitRegex = /^\d{2}\/\d{2}\/\d{2}\/\d{3}$/;
const electionType = ["Presidential", "Governorship", "House of reps"];

module.exports.pollingUnitMatcher = (pollingUnitCode) => {
    if (pollingUnitCode === undefined)
        throw new Error("Unsupported format");
    let matches = pollingUnitRegex.test(pollingUnitCode);
    if (!matches)
        throw new Error(`${pollingUnitCode} is not a supported format.`);
};

module.exports.electionTypeMatcher = (input) => {
    if (input === undefined)
        throw new Error("Unsupported format");
    let matches = false;
    for (let element of electionType) {
        if (element === input) {
            matches = true;
            break;
        }
    }
    if (matches === false)
        throw new Error(`${input} is not a valid election type.`);
}

module.exports.lengthMatcher = (input, desiredLength = 2) => {
    if (input === undefined)
        throw new Error("Unsupported format");
    if (input.length !== desiredLength)
        throw new Error(`${input} is not a valid input`);
}