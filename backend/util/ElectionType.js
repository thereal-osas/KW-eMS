const electionType = ["Presidential", "Governorship", "House of reps"];

const validInput = (input) => {
    if (input === undefined) throw new Error("Unsupported format");
    let matches = false;
    for (let element of electionType) {
        if (element === input) {
            matches = true;
            break;
        }
    }
    if (matches === false) throw new Error(`${input} is not a valid election type.`);
};
module.exports.validateElectionType = validInput;