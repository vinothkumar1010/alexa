'use strict';

// [START import]
const functions = require('firebase-functions');
const express = require('express');
const app = express();
// [END import]

// [START middleware]
const cors = require('cors')({origin: true});
app.use(cors);
// [END middleware]


// Define the Firebase function that will act as Express application
// Note: This `api` must match with `/firebase.json` rewrites rule.
exports.api = functions.https.onRequest(app);

app.post('/say/hello', (req, res) => {
  // Return success response
  //return res.status(200).json({"message":"Hello there... Welcome to mock server."});
  res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      "version": "1.0",
      "session": {
            "new": true,
            "sessionId": "amzn1.echo-api.session.6fe47b0d-adc8-4bb1-938f-09952efada7f",
            "application": {
                "applicationId": "amzn1.ask.skill.0f137768-b5a7-4b24-9cca-f6a50b6e662d"
            },
            "user": {
                "userId": "amzn1.ask.account.AGUJWJ5ZZJZWYRR2L3P7JMY3SB7D2ZI572WZG7KCKUCCOYYHIV5HQUBLKVQVGBU3RDPVUMIGFWEQP4FKSFPY6MR4LDVBTN6TXCZOBY3J7SZQI2ZQ4D2SV3USH4MLOIPDWVFDHSY2YPXFPX66LTWI2UQLCU5IL4TQ44J6XKGJU7XZCADWK3ISHGFLLMANHDTLCOCYAEVJPXGG6ZI",
                "accessToken": "MzNlZjdiNmItZmMwMC00MjE3LTlkYmUtYTEwNjU3YWQ3ZGQ4LVlqNktIdWVpTjlBNGNNWWhQSGZzcjNWZE9STT0="
            }
        },
      "response": {
        "outputSpeech": {
          "type": "PlainText",
          "text": "Plain text string to speak",
          "playBehavior": "REPLACE_ENQUEUED"      
        },
        "card": {
          "type": "Standard",
          "title": "Title of the card",
          "text": "Text content for a standard card",
          "image": {
            "smallImageUrl": "https://url-to-small-card-image...",
            "largeImageUrl": "https://url-to-large-card-image..."
          }
        },
        "reprompt": {
          "outputSpeech": {
            "type": "PlainText",
            "text": "Plain text string to speak",
            "playBehavior": "REPLACE_ENQUEUED"             
          }
        },
       "directives": [
        {
          "type": "Display.RenderTemplate",
          "template": {
            "type": "BodyTemplate2",
            "token": "A2079",
            "backButton": "VISIBLE",
            "backgroundImage": {
              "contentDescription": "Textured grey background",
              "sources": [
                {
                  "url": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                }
              ],
              "title": "My Favorite Car",
              "image": {
                "contentDescription": "My favorite car",
                "sources": [
                  {
                    "url": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                  }
                ]
              },
              "textContent": {
                "primaryText": {
                  "text": "See my favorite car",
                  "type": "PlainText"
                },
                "secondaryText": {
                  "text": "Custom-painted",
                  "type": "PlainText"
                },
                "tertiaryText": {
                  "text": "By me!",
                  "type": "PlainText"
                }
              }
            }
          }
        }
      ],
        "shouldEndSession": true
      }
    }));
});
/* [END `/say/hello` ] - must be added before `exports.api = ...` */