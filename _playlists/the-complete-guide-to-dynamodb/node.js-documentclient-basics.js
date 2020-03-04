const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  accessKeyId: process.env.SERVERLESS_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.SERVERLESS_AWS_SECRET_ACCESS_KEY
});

const table = "testing";

const docClient = new AWS.DynamoDB.DocumentClient();

async function runQuery() {
  const params = {
    TableName: table,
    Key: {
      pk: "user#2",
      sk: "todo#4"
    }
  };

  const results = await docClient.get(params).promise();
  console.log("results", results);
}

runQuery();
