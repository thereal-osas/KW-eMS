const parserAndLoader = require("../util/parseCsv");
const kwaraFile = "csv/KWARA_crosschecked.csv";

const runDefault = async () => {
    await parserAndLoader.parser(kwaraFile);
    console.log("Data successfully saved to database");
}

const arrayOfCsv = async (arrayCsvFiles) => {
    if (typeof arrayCsvFiles !== typeof []) {
        console.log("Unsupported data type.")
        return;
    }
    await parserAndLoader.parser(arrayCsvFiles);
    console.log("Data successfully saved to database");
}

module.exports.csvLoader = {runDefault, arrayOfCsv};