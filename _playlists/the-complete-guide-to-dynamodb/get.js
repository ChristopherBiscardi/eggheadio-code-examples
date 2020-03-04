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
    pk: "user#2",
    sk: "todo#4"
  },
  ReturnConsumedCapacity: "TOTAL"
};

const queries = [
  params,
  { ...params, AttributesToGet: ["data"] },
  {
    ...params,
    ProjectionExpression: "#data.done",
    ExpressionAttributeNames: { "#data": "data" }
  }
];

async function runQuery(query, i) {
  const results = await docClient.get(query).promise();
  console.log("## results ", i);
  console.log(JSON.stringify(results, null, 2));
  console.log(" ");
}

queries.map((query, i) => runQuery(query, i));
