const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  accessKeyId: process.env.SERVERLESS_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.SERVERLESS_AWS_SECRET_ACCESS_KEY
});

const table = "testing";

const docClient = new AWS.DynamoDB.DocumentClient();

// writeParams
const params = {
  TransactItems: [
    {
      Delete: {
        TableName: table,
        Key: { pk: "user#1", sk: "todo#1" }
      }
    },
    {
      Put: {
        TableName: table,
        Item: {
          pk: "user#1",
          sk: "todo#4",
          data: {
            text: "may the fourth be with you",
            done: false
          }
        }
      }
    },
    {
      Update: {
        TableName: table,
        Key: {
          pk: "user#1",
          sk: "todo#2"
        },
        UpdateExpression: `SET #data.#text = :value`,
        ExpressionAttributeNames: {
          "#data": "data",
          "#text": "text"
        },
        ExpressionAttributeValues: {
          ":value": "do it twice for the second time"
        }
      }
    }
  ]
};

// var params = {
//   TransactItems: [
//     {
//       Get: {
//         TableName: table,
//         Key: {
//           pk: "user#1",
//           sk: "todo#1"
//         }
//       }
//     },
//     {
//       Get: {
//         TableName: table,
//         Key: {
//           pk: "user#1",
//           sk: "todo#2"
//         }
//       }
//     },
//     {
//       Get: {
//         TableName: table,
//         Key: {
//           pk: "user#1",
//           sk: "todo#3"
//         }
//       }
//     }
//   ]
// };

async function runQuery() {
  try {
    const results = await docClient.transactWrite(params).promise();
    // const results = await docClient.transactGet(params).promise();
    console.log(JSON.stringify(results, null, 2));
  } catch (e) {
    console.warn(e);
  }
}

runQuery();
