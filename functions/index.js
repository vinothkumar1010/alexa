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
      "sessionAttributes": {},
      "response": {
        "outputSpeech": {
          "type": "SSML",
          "ssml": "<speak>This is a sample</speak>"
        },
        "directives": [
          {
            "type": "Alexa.Presentation.APL.RenderDocument",
            "token": "[SkillProvidedToken]",
            "document": {
        "type": "APL",
        "version": "1.1",
        "settings": {},
        "theme": "dark",
        "import": [
            {
                "name": "alexa-layouts",
                "version": "1.0.0"
            }
        ],
        "resources": [
            {
                "description": "Stock color for the light theme",
                "colors": {
                    "colorTextPrimary": "#151920"
                }
            },
            {
                "description": "Stock color for the dark theme",
                "when": "${viewport.theme == 'dark'}",
                "colors": {
                    "colorTextPrimary": "#f0f1ef"
                }
            },
            {
                "description": "Standard font sizes",
                "dimensions": {
                    "textSizeBody": 48,
                    "textSizePrimary": 27,
                    "textSizeSecondary": 23,
                    "textSizeSecondaryHint": 25
                }
            },
            {
                "description": "Common spacing values",
                "dimensions": {
                    "spacingThin": 6,
                    "spacingSmall": 12,
                    "spacingMedium": 24,
                    "spacingLarge": 48,
                    "spacingExtraLarge": 72
                }
            },
            {
                "description": "Common margins and padding",
                "dimensions": {
                    "marginTop": 40,
                    "marginLeft": 60,
                    "marginRight": 60,
                    "marginBottom": 40
                }
            }
        ],
        "styles": {
            "textStyleBase": {
                "description": "Base font description; set color",
                "values": [
                    {
                        "color": "@colorTextPrimary"
                    }
                ]
            },
            "textStyleBase0": {
                "description": "Thin version of basic font",
                "extend": "textStyleBase",
                "values": {
                    "fontWeight": "100"
                }
            },
            "textStyleBase1": {
                "description": "Light version of basic font",
                "extend": "textStyleBase",
                "values": {
                    "fontWeight": "300"
                }
            },
            "mixinBody": {
                "values": {
                    "fontSize": "@textSizeBody"
                }
            },
            "mixinPrimary": {
                "values": {
                    "fontSize": "@textSizePrimary"
                }
            },
            "mixinSecondary": {
                "values": {
                    "fontSize": "@textSizeSecondary"
                }
            },
            "textStylePrimary": {
                "extend": [
                    "textStyleBase1",
                    "mixinPrimary"
                ]
            },
            "textStyleSecondary": {
                "extend": [
                    "textStyleBase0",
                    "mixinSecondary"
                ]
            },
            "textStyleBody": {
                "extend": [
                    "textStyleBase1",
                    "mixinBody"
                ]
            },
            "textStyleSecondaryHint": {
                "values": {
                    "fontFamily": "Bookerly",
                    "fontStyle": "italic",
                    "fontSize": "@textSizeSecondaryHint",
                    "color": "@colorTextPrimary"
                }
            }
        },
        "onMount": [],
        "graphics": {},
        "commands": {},
        "layouts": {},
        "mainTemplate": {
            "parameters": [
                "payload"
            ],
            "items": [
                {
                    "when": "${viewport.shape == 'round'}",
                    "type": "Container",
                    "direction": "column",
                    "width": "100vw",
                    "height": "100vh",
                    "items": [
                        {
                            "type": "Image",
                            "source": "${payload.bodyTemplate2Data.image.sources[0].url}",
                            "scale": "best-fill",
                            "width": "100vw",
                            "height": "100vh",
                            "position": "absolute",
                            "overlayColor": "rgba(0, 0, 0, 0.6)"
                        },
                        {
                            "type": "ScrollView",
                            "width": "100vw",
                            "height": "100vh",
                            "item": [
                                {
                                    "type": "Container",
                                    "direction": "column",
                                    "alignItems": "center",
                                    "paddingLeft": "70dp",
                                    "paddingRight": "70dp",
                                    "items": [
                                        {
                                            "type": "AlexaHeader",
                                            "headerAttributionImage": "${payload.bodyTemplate2Data.logoUrl}",
                                            "headerTitle": "${payload.bodyTemplate2Data.title}"
                                        },
                                        {
                                            "type": "Text",
                                            "text": "<b>${payload.bodyTemplate2Data.textContent.title.text}</b>",
                                            "style": "textStyleBody",
                                            "width": "70vw",
                                            "textAlign": "center"
                                        },
                                        {
                                            "type": "Text",
                                            "text": "${payload.bodyTemplate2Data.textContent.subtitle.text}",
                                            "style": "textStylePrimary",
                                            "width": "70vw",
                                            "textAlign": "center"
                                        },
                                        {
                                            "type": "Text",
                                            "text": "${payload.bodyTemplate2Data.textContent.primaryText.text}",
                                            "paddingTop": 20,
                                            "style": "textStylePrimary",
                                            "width": "70vw",
                                            "textAlign": "center"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "width": "100vw",
                    "height": "100vh",
                    "items": [
                        {
                            "type": "Image",
                            "source": "${payload.bodyTemplate2Data.backgroundImage.sources[0].url}",
                            "scale": "best-fill",
                            "width": "100vw",
                            "height": "100vh",
                            "position": "absolute"
                        },
                        {
                            "type": "AlexaHeader",
                            "headerTitle": "${payload.bodyTemplate2Data.title}",
                            "headerAttributionImage": "${payload.bodyTemplate2Data.logoUrl}"
                        },
                        {
                            "type": "Container",
                            "direction": "row",
                            "paddingLeft": "60dp",
                            "paddingRight": "72dp",
                            "grow": 1,
                            "shrink": 1,
                            "height": "100vh",
                            "items": [
                                {
                                    "type": "ScrollView",
                                    "height": "100%",
                                    "grow": 1,
                                    "shrink": 1,
                                    "item": [
                                        {
                                            "type": "Container",
                                            "items": [
                                                {
                                                    "type": "Text",
                                                    "text": "<b>Food pairings</b> | <b>Wine pairings</b>",
                                                    "style": "textStylePrimary",
                                                    "color": "#4dd2ff"
                                                },
                                                {
                                                    "type": "Text",
                                                    "text": "<b>${payload.bodyTemplate2Data.textContent.title.text}</b>",
                                                    "style": "textStyleBody"
                                                },
                                                {
                                                    "type": "Text",
                                                    "text": "${payload.bodyTemplate2Data.textContent.subtitle.text}",
                                                    "style": "textStylePrimary"
                                                },
                                                {
                                                    "type": "Text",
                                                    "text": "${payload.bodyTemplate2Data.textContent.primaryText.text}",
                                                    "spacing": "@spacingSmall",
                                                    "paddingTop": "40dp",
                                                    "paddingRight": "70dp",
                                                    "style": "textStylePrimary"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "Image",
                                    "source": "${payload.bodyTemplate2Data.image.sources[0].url}",
                                    "width": 340,
                                    "height": 384,
                                    "scale": "best-fit",
                                    "align": "center"
                                }
                            ]
                        },
                        {
                            "type": "AlexaFooter",
                            "footerHint": "${payload.bodyTemplate2Data.hintText}"
                        }
                    ]
                }
            ]
        }
    },
            "datasources": {
        "bodyTemplate2Data": {
            "type": "object",
            "objectId": "bt2Sample",
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://d2o906d8ln7ui1.cloudfront.net/images/BT2_Background.png",
                        "size": "small",
                        "widthPixels": 0,
                        "heightPixels": 0
                    },
                    {
                        "url": "https://d2o906d8ln7ui1.cloudfront.net/images/BT2_Background.png",
                        "size": "large",
                        "widthPixels": 0,
                        "heightPixels": 0
                    }
                ]
            },
            "title": "Parmigiano Reggiano",
            "image": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://d2o906d8ln7ui1.cloudfront.net/images/details_01.png",
                        "size": "small",
                        "widthPixels": 0,
                        "heightPixels": 0
                    },
                    {
                        "url": "https://d2o906d8ln7ui1.cloudfront.net/images/details_01.png",
                        "size": "large",
                        "widthPixels": 0,
                        "heightPixels": 0
                    }
                ]
            },
            "textContent": {
                "title": {
                    "type": "PlainText",
                    "text": "Parmigiano Reggiano"
                },
                "subtitle": {
                    "type": "PlainText",
                    "text": "Country of origin: Italy"
                },
                "primaryText": {
                    "type": "PlainText",
                    "text": "Parmesan cheese is made from unpasteurized milk. It has a hard, gritty texture, and is fruity and nutty in taste."
                }
            },
            "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/cheeseskillicon.png",
            "hintText": "Try, \"Alexa, give me a fact about cheese\""
        }
    }
          }
        ]
      }
    }));
});
/* [END `/say/hello` ] - must be added before `exports.api = ...` */