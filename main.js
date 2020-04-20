const fs = require("fs");
const path = require("path");
const csv = require("csvtojson");
const folderName = "jsonFolder";
const fileName = "customer-data.json";
const jsonFilePath = path.join(__dirname, folderName, fileName);
const csvFilePath = path.join(__dirname, "customer-data.csv");
const convertCsvToJson = async () => {
  const jsonArray = await csv().fromFile(csvFilePath);
  fs.existsSync(folderName) ? true : fs.mkdirSync(folderName);
  fs.writeFileSync(jsonFilePath, JSON.stringify(jsonArray, null, 2));
};
convertCsvToJson();
