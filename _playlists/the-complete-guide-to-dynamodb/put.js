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
  Item: {
    pk: "user#6",
    sk: "todo#6",
    text: "test doesnt exist"
    // data: { replaced: true }
  },
  ReturnValues: "ALL_OLD",
  ReturnConsumedCapacity: "INDEXES", // INDEXES
  ConditionExpression: `attribute_exists(#text)`,
  ExpressionAttributeNames: {
    "#text": "text"
  }
};

async function runQuery() {
  try {
    const results = await docClient.put(params).promise();
    console.log(JSON.stringify(results, null, 2));
  } catch (e) {
    console.warn(e);
  }
}

runQuery();
