const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  accessKeyId: process.env.SERVERLESS_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.SERVERLESS_AWS_SECRET_ACCESS_KEY
});

const table = "testing";

const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: table,
  Key: {
    pk: "user#6",
    sk: "todo#6"
  },
  ConditionExpression: `pk = :userid`,
  ExpressionAttributeValues: {
    ":userid": "user#6"
  }
};

async function runQuery() {
  try {
    const results = await docClient.delete(params).promise();
    console.log(JSON.stringify(results, null, 2));
  } catch (e) {
    console.warn(e);
  }
}

runQuery();
