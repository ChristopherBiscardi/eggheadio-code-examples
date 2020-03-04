const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  accessKeyId: process.env.SERVERLESS_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.SERVERLESS_AWS_SECRET_ACCESS_KEY
});

const table = "testing";

const docClient = new AWS.DynamoDB.DocumentClient();

// writeParams
// const params = {
//   RequestItems: {
//     [table]: [
//       //   {
//       //     DeleteRequest: {
//       //       Key: { pk: "user#1", sk: "todo#1" }
//       //     }
//       //   },
//       {
//         PutRequest: {
//           Item: {
//             pk: "user#1",
//             sk: "todo#1",
//             data: {
//               text: "do it once",
//               done: false
//             }
//           }
//         }
//       },
//       {
//         PutRequest: {
//           Item: {
//             pk: "user#1",
//             sk: "todo#2",
//             data: {
//               text: "do it twice",
//               done: false
//             }
//           }
//         }
//       },
//       {
//         PutRequest: {
//           Item: {
//             pk: "user#1",
//             sk: "todo#3",
//             data: {
//               text: "do it three times",
//               done: false
//             }
//           }
//         }
//       }
//     ]
//   }
// };

var params = {
  RequestItems: {
    [table]: {
      Keys: [
        {
          pk: "user#1",
          sk: "todo#1"
        },
        { pk: "user#1", sk: "todo#2" },
        { pk: "user#1", sk: "todo#3" }
      ]
    }
  }
};

async function runQuery() {
  try {
    // const results = await docClient.batchWrite(params).promise();
    const results = await docClient.batchGet(params).promise();
    console.log(JSON.stringify(results, null, 2));
  } catch (e) {
    console.warn(e);
  }
}

runQuery();
