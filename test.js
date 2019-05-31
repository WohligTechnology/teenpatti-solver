const csvFilePath = "./test/input.csv";
const csv = require("csvtojson");
const _ = require("lodash");
const teenPattiScore = require("./index");
const fs = require("fs");
const { Parser } = require("json2csv");

function generateCSV(data) {
  if (_.isEmpty(data)) {
    console.log("No Data Found");
  } else {
    const fields = _.keys(data[0]);
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(data);
    fs.writeFile("./test/output.csv", csv, err => {
      if (err) console.log(err);
      console.log("Successfully Written to File.");
    });
  }
}

csv()
  .fromFile(csvFilePath)
  .then(jsonObj => {
    console.log(jsonObj);
    generateCSV(jsonObj);
  });
