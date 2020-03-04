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
    pk: "user#1",
    sk: "todo#1"
  },
  //   UpdateExpression: `SET #text = :textone`,
  //   UpdateExpression: `SET #data = :obj`,
  UpdateExpression: `SET #data.done = :done, #text = :text`,
  ExpressionAttributeNames: {
    "#data": "data",
    "#text": "text"
  },
  ExpressionAttributeValues: {
    // ":textone": " get ice cream"
    // ":obj": {
    //   done: true
    // }
    ":text": "doooo sometthinngggg",
    ":done": false
  }
  //   ReturnValues: "ALL_OLD",
  //   ReturnConsumedCapacity: "INDEXES", // INDEXES
  //   ConditionExpression: `attribute_exists(#text)`,
};

async function runQuery() {
  try {
    const results = await docClient.update(params).promise();
    console.log(JSON.stringify(results, null, 2));
  } catch (e) {
    console.warn(e);
  }
}

runQuery();
