const express= require('express');
var app=express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var AWS = require('aws-sdk');

AWS.config.update({
	accessKeyId: " ",
	secretAccessKey: " ",
	region: " ",
	endpoint: " "
});

var docClient = new AWS.DynamoDB.DocumentClient();

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
	next();
});

app.post('/', function(req,res) {
	var params= {
		TableName: "Createemployee" ,
			Item: {
				empid: parseInt(req.body.empid),
				fname: req.body.fname,
				sname: req.body.sname,
				email: req.body.email,
				dob: req.body.dob,
				gender: req.body.gender
			 }
		};
docClient.put(params, function(err, data) {
	if (err) {
		console.error("Unable to Create..Check Please ", JSON.stringify(err, undefined, 2));
			} else {
			res.json({status: "Created successfully"})
		}
	});     
}); 

app.get('/:empid',function(req,res){
	var params= {
		TableName: "Createemployee",
	Key: {
		"empid": parseInt(req.params.empid),
	} 
};
docClient.get(params, (error, data) => {
	if (error) {
		console.error("Unable to read item. Error JSON:", JSON.stringify(error, null, 2));
	} else {
		res.json(data["Item"]);
		}
	});
});

app.put('/:empid', function(req,res) {
	var params= {
		TableName: "Createemployee" ,
		Key: {
			empid: parseInt(req.params.empid)
		},
		UpdateExpression: "set fname = :fname, sname = :sname, email = :email, dob = :dob, gender = :gender",
			ExpressionAttributeValues:{
				":fname": req.body.fname,
				":sname": req.body.sname,
				":email": req.body.email,
				":dob": req.body.dob,
				":gender": req.body.gender
			},
			ReturnValues: "UPDATED_NEW"
		};
docClient.update(params, (error, data) => {
	if (error) {
		console.error('error',error);
	} else {
		res.json({message: "Details updated successfully"}); 
	}
	});
}); 

app.delete('/:empid',(req,res) => {
	var params = {
		TableName:  "Createemployee",
			Key: {
				"empid": parseInt(req.params.empid),
			},
	};
docClient.delete(params, (error, data) => {
	if (error) {
		console.error("Unable to delete item. Error JSON:",JSON.stringify(err, null, 2));
			} else {
		 			res.json({message: "Employee id Deleted successfully"});
			}
		});
})

app.listen(3001); 
