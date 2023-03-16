const pollingUnitRegex = /^\d{2}\/\d{2}\/\d{2}\/\d{3}$/;

module.exports.pollingUnitMatcher = (pollingUnitCode) => {
    if (pollingUnitCode === undefined)
        throw new Error("Unsupported format");
    let matches = pollingUnitRegex.test(pollingUnitCode);
    if (!matches)
        throw new Error(`${pollingUnitCode} is not a supported format.`);
};

module.exports.lengthMatcher = (input, desiredLength = 2) => {
    if (input === undefined)
        throw new Error("Unsupported format");
    if (input.length !== desiredLength)
        throw new Error(`${input} is not a valid input`);
}