var AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: "AKIAIC455GG5XATLLHLA",
  secretAccessKey: "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",
  region: "us-east-2",
  endpoint: "https://dynamodb.us-east-2.amazonaws.com"
});

var docClient = new AWS.DynamoDB.DocumentClient();

// var employee= [
//     {empid: 1 , fname: "Dia", sname:"Aadhi", email:"diaaadhi@gmail.com", dob: "12/10/1990" , gender: "f" },
//     {empid: 2 , fname: "Shreya", sname:"Rajasekar", email:"shreyaraja@gmail.com", dob: "09/09/1998" , gender: "f" },
//     {empid: 3 , fname: "Carl", sname:"Francesco", email:"carlFrances19@yahoo.com", dob: "01/04/1987" , gender: "m" },
//     {empid: 4 , fname: "Michael", sname:"Morrow", email:"michaelmm@gmail.com", dob: "13/07/1994" , gender: "m" },
// ]
// employee.forEach(item => {
//     var params= {
//         TableName: "Createemployee" ,
//         Item: item,
//         }
//     docClient.put(params, function(err, data) {
//     if (err) {
//         console.error("Unable to add employee", item.name, ". Error JSON:", JSON.stringify(err, null, 2));
//     } else {
//         console.log("PutItem succeeded:" , item.name);
//     }
//     });
// })



// var dynamodb = new AWS.DynamoDB();

// var params = {
//   TableName : "Createemployee",
//     KeySchema: [       
//       { AttributeName: "empid", KeyType: "HASH"}  //Partition key
//     ],
//     AttributeDefinitions: [       
//       { AttributeName: "empid", AttributeType: "N" }
//     ],
//     ProvisionedThroughput: {       
//       ReadCapacityUnits: 10, 
//       WriteCapacityUnits: 10
//     }
// };

// dynamodb.createTable(params, function(err, data) {
//     if (err) {
//       console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
//     } else {
//         console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
//     }
// });