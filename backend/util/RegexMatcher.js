const pollingUnitRegex = /^\d{2}-\d{2}-\d{2}-\d{3}$/;

module.exports.pollingUnitMatcher = (pollingUnitCode) => {
    if (pollingUnitCode === undefined)
        throw new Error("Unsupported format");
    let matches = pollingUnitRegex.test(pollingUnitCode);
    if (!matches)
        throw new Error(`${pollingUnitCode} is not a supported format.`);
};
