'use strict';

// [START import]
const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser')
var responseData = require('./sampleData.json');

const app = express();
// [END import]

// [START middleware]
const cors = require('cors')({origin: true});
app.use(cors);
// [END middleware]

app.use(bodyParser.json())
// Define the Firebase function that will act as Express application
// Note: This `api` must match with `/firebase.json` rewrites rule.
exports.api = functions.https.onRequest(app);

app.post('/say/hello', (req, res) => {
  // Return success response
  //return res.status(200).json({"message":"Hello there... Welcome to mock server."});
 
  res.setHeader('Content-Type', 'application/json');
  var dataToAlexa=responseData.welcomeAPI
  if('intent' in req.body.request )
  {
    if(req.body.request.intent.name=="firebase")
    dataToAlexa=responseData.firebase;
  }
  res.end(JSON.stringify(dataToAlexa));
});
/* [END `/say/hello` ] - must be added before `exports.api = ...` */