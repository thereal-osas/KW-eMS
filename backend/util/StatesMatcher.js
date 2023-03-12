const statesMatcher = ["Abia", "Adamawa", "Akwa", "Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "CrossRiver", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara", "Abuja"];

module.exports.verifyState = (input) => {
    let lowerCasedInput = input.toLowerCase();
    if (lowerCasedInput === undefined) throw new Error("Unsupported format");
    let matches = false;
    for (let element of statesMatcher) {
        if (element.toLowerCase() === lowerCasedInput) {
            matches = true;
            break;
        }
    }
    if (matches === false) throw new Error(`${input} is not a valid state.`);
    if (lowerCasedInput !== "kwara") throw new Error(`${input} results have not being uploaded yet.`);
}