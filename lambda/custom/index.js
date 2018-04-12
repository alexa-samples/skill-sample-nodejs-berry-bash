/*
    * Copyright 2018 Amazon.com, Inc. and its affiliates. All Rights Reserved.

    * Licensed under the Amazon Software License (the "License").
    * You may not use this file except in compliance with the License.
    * A copy of the License is located at

    * http://aws.amazon.com/asl/

    * or in the "license" file accompanying this file. This file is distributed
    * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
    * express or implied. See the License for the specific language governing
    * permissions and limitations under the License.
    */


'use strict';

const Alexa = require('alexa-sdk');

/////////1. Static strings///////////////////////////////////Modify the hard coded data below to make this skill your own!///
//Skill data
var skillName = 'Berry Bash';
var skillQuizName = 'Berry Buzz';
var skillDictionaryName = 'Berry Book';
var categoryPlural = 'berries';
var categorySingular = 'berry';

var mainImage = 'https://s3.eu-west-2.amazonaws.com/jgsound/berryImages/background-berries-berry-blackberries-87818%2B(1).jpeg';
var mainImgBlurBG = 'https://s3.eu-west-2.amazonaws.com/jgsound/berryImages/main_blur2.png';

var topicData = {
    "raspberries": {
        "imgURL": "https://s3.eu-west-2.amazonaws.com/jgsound/berryImages/raspberry-fruits-fresh-red-52536.jpeg",
        "info": "The Raspberry or Red Raspberry is the plant that produces a tart, sweet, red composite fruit in the late summer and early autumn. In proper botanical language, it is not a berry at all, but instead an aggregate fruit of numerous drupelets around the central core."
    },
    "blackberries": {
        "imgURL": "https://s3.eu-west-2.amazonaws.com/jgsound/berryImages/pexels-photo-892808.jpeg",
        "info": "The blackberry is an edible fruit produced by many species in the Rubus genus in the Rosaceae family, hybrids among these species within the Rubus subgenus, and hybrids between the Rubus and Idaeobatus subgenera."
    },
    "strawberries": {
        "imgURL": "https://s3.eu-west-2.amazonaws.com/jgsound/berryImages/pexels-photo-583840.jpeg",
        "info": "Strawberries are short-lived herbaceous perennials, producing for 2 to 3 years. Plant in an open, sunny position in raised beds; a good airflow will reduce fungal diseases. Strawberries prefer a well-drained soil, rich in humus. Dig in lots of organic matter, compost, animal manure or blood and bone, about a month before planting."
    },
    "blueberries": {
        "imgURL": "https://s3.eu-west-2.amazonaws.com/jgsound/berryImages/summer-blueberries-stephanie-herington.jpg",
        "info": "Blueberry is one of the highest antioxidant capacities among all fruits, vegetables, spices and seasonings. Antioxidants are necessary to optimizing fitness by helping to combat the free radicals that can damage cellular structures as well as DNA. Blueberries are small blue to black colored fruits with a green flesh. They should be rich and bright in color with a natural bloom."
    },
    "elderberries": {
        "imgURL": "https://s3.eu-west-2.amazonaws.com/jgsound/berryImages/elder-black-elderberry-sambucus-nigra-holder-51962.jpeg",
        "info": "Elderberry also known as Sambucus is from the family of Adoxaceae, which is a genus of flowering plant. Formerly placed in the honeysuckle family, the fruits when ripe are blackish purple in color and globose in shape. With seeds just about 3mm long, they are globular in shape and about 4 mm diameter, calyx persistent at the apex."
    },
    "gooseberries": {
        "imgURL": "https://s3.eu-west-2.amazonaws.com/jgsound/berryImages/currant-immature-bush-berry-54332.jpeg",
        "info": "Indian gooseberry fruits are of small size and light green in color. They have 6 vertical grooves on them. The taste of the fruit can be described as strong, harsh, and rough. This fruit is round shaped with vertical stripes and has a hard seed inside."
    },
    "cranberries": {
        "imgURL": "https://s3.eu-west-2.amazonaws.com/jgsound/berryImages/pexels-photo-306800.jpeg",
        "info": "Cranberries are low, creeping shrubs or vines up to 2 metres long and 5 to 20 centimetres in height; they have slender, wiry stems that are not thickly woody and have small evergreen leaves. The flowers are dark pink, with very distinct reflexed petals, leaving the style and stamens fully exposed and pointing forward. They are pollinated by bees. The fruit is a berry that is larger than the leaves of the plant; it is initially light green, turning red when ripe. It is edible, but with an acidic taste that usually overwhelms its sweetness."
    },
    "huckleberries": {
        "imgURL": "https://s3.eu-west-2.amazonaws.com/jgsound/berryImages/pexels-photo-139749.jpeg",
        "info": "Huckleberry otherwise called hurtleberry is the native fruit of North America. The fruit appear in various dark colors such as red, blue and black and each berry measures 5-10mm in diameter. The fruit is completely edible and possesses a unique sweet taste. These berries are used as a major flavoring agent in juice, tea, soup, pudding, pie, pancakes and jam. It is also used for treating pain and healing heart disease and infections."
    },
    "cherries": {
        "imgURL": "https://s3.eu-west-2.amazonaws.com/jgsound/berryImages/pexels-photo-175727.jpeg",
        "info": "Cherries are found in the wild and have been domesticated for centuries. There is a myriad of cherry types, resulting from new varieties and hybrids developed for hardiness and flavor. This fruit is found in Asia, Europe, and North America, with Iran, Turkey, United States, Germany, and Italy leading in the production of cherries."
    },
    "gojiberries": {
        "imgURL": "https://s3.eu-west-2.amazonaws.com/jgsound/berryImages/goji-3162716_640.jpg",
        "info": "Goji, goji berry, or wolfberry is the fruit of either the Lycium barbarum or Lycium chinense, two closely related species of boxthorn in the nightshade family, Solanaceae. The family also includes the potato, tomato, eggplant, belladonna, chili pepper, and tobacco. The two species are native to Asia."
    }
}
////////////////////////////////////////////////////////////Modify the values above to make this skill your own!
// Info sourced from fruitsinfo.com
// Royalty free images sourced from pexels/pixabay. See bottom of codes for links

//generic strings, images, etc. You can change some of the data below, but to make this skill your own, focus on the data above
var adjectives = ['craziest', 'hippest', 'tastiest', 'sweetest', 'greatest', 'cheekiest', 'spiciest', 'greatest', 'smartest', 'best'];

var positiveSpeechconArray = ['bang', 'boing', 'kaboom', 'mazel tov', 'oh snap', 'well done'];
var negativeSpeechconArray = ['wah wah', 'uh oh', 'tosh', 'quack', 'oof', 'oh dear'];

var correctResponses = ['That is correct.', 'You got it!', 'Nice one.', 'There you go.', 'Awesome', 'Congratulations.'];
var wrongResponses = ['Oh no.', 'That is wrong.', 'Incorrect.', 'Unlucky.', 'Maybe next time.', 'Nearly.'];

var secondPlaceImage = 'https://s3.eu-west-2.amazonaws.com/jgsound/berryImages/medal-2163349_640.png';
var firstPlaceImage = 'https://s3.eu-west-2.amazonaws.com/jgsound/berryImages/medal-2163347_640.png';

const GAMELENGTH = 5;
var testingOnSim = false; //flip to experience voice only skill on display device/simulator

//Helper shorthands for multi modal compatability
const makePlainText = Alexa.utils.TextUtils.makePlainText;
const makeImage = Alexa.utils.ImageUtils.makeImage;
const makeRichText = Alexa.utils.TextUtils.makeRichText;

/////////2. Entry point and intent handlers//////////////////////////////////////////////////////////////////////////
//Alexa entry point
exports.handler = function(event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

//Intent handlers
const handlers = {
    'LaunchRequest': function() {
        newSessionHandler.call(this);

        var speechOutput = 'Welcome to ' + skillName + ', the ' + adjectives[getRandomVal(0, adjectives.length - 1)] + ' stop for knowledge about ' + categoryPlural + ' around. ';
        showSkillIntro.call(this, speechOutput);
    },
    'InformationIntent': function() {
        newSessionHandler.call(this);

        resetAttributes.call(this);

        var speechOutput;

        if (this.attributes.skillState == 'gamePlaying') {
            speechOutput = 'You are currently in the middle of a game. Would you like to carry on playing?';
            this.response.speak(speechOutput).listen(speechOutput);
            this.attributes.lastOutputResponse = speechOutput;

            this.emit(':responseReady');
        } else {
            showMainList.call(this);
        }
    },
    'AMAZON.YesIntent': function() {
        newSessionHandler.call(this);
        
        var speechOutput;
        
        if (this.attributes.skillState == 'quizMainMenu') { //User has confirmed they want to play

            var questionNo = 0;

            speechOutput = '<say-as interpret-as="interjection">Good luck.</say-as> ';

            //Set up new game of quiz
            var objectArray = this.attributes.quizArray;

            objectArray = shuffle(objectArray);

            var randomObjectArray = [];

            for (let i = 0; i < GAMELENGTH; i++) {
                randomObjectArray[i] = objectArray[i];
            }

            this.attributes.QuizOptionArray = shuffle(randomObjectArray);
            this.attributes.skillState = 'gamePlaying';
            generateNewQuestion.call(this, speechOutput, questionNo);
        } else if (this.attributes.skillState == 'gamePlaying') {
            speechOutput = 'You are currently in the middle of a game. Would you like to carry on playing?';
            this.response.speak(speechOutput).listen(speechOutput);
            this.attributes.lastOutputResponse = speechOutput;

            this.emit(':responseReady');
        } else if (this.attributes.skillState == 'quitting') {//Confirmation for leaving skill
            endSkill.call(this);
        } else {
            handleUnknown.call(this);
        }
    },
    'AMAZON.NoIntent': function() {
        var speechOutput;
        var reprompt;

        //User wants to stop playing game
        if (this.attributes.skillState == 'gamePlaying') { 
            showSkillIntro.call(this, null);
        } else if (this.attributes.skillState == 'quitting') {
            //User decided to stay in skill after nearly quitting
            speechOutput = 'Good choice. Now, what would you like to do?';
            reprompt = 'What would you like to do?';
            this.response.speak(speechOutput).listen(reprompt);
            this.attributes.skillState = null;
            this.attributes.lastOutputResponse = speechOutput;

            this.emit(':responseReady');
        } else {
            confirmExit.call(this);
        }
    },
    'AMAZON.PreviousIntent': function() {
        var speechOutput;
        var reprompt;

        //If we are showing a fruit, go back to the main list
        if (this.attributes.selectedValueIndex) { 
            showMainList.call(this, null);
        } else if (this.attributes.skillState == 'gamePlaying') {
            speechOutput = 'You are currently in the middle of a game. Would you like to carry on playing?';
            reprompt = 'Would you like to carry on playing?';
            this.response.speak(speechOutput).listen(reprompt);
            this.attributes.lastOutputResponse = speechOutput;

            this.emit(':responseReady');
        } else {
            showSkillIntro.call(this, null);
        }
    },
    'QuizIntent': function() {
        newSessionHandler.call(this);
        var speechOutput;
        var reprompt;

        resetAttributes.call(this);

        //Initiation of game
        if (this.attributes.skillState != 'gamePlaying') { 
        
            if (supportsDisplay.call(this) && !testingOnSim) {
                speechOutput = '<say-as interpret-as="interjection">dun dun dun.</say-as> Check out the big brains over here. Are you ready to begin?';
                reprompt = "Are you ready to begin?";
                this.attributes.quizArray = this.attributes.mainArray;
                this.attributes.skillState = 'quizMainMenu';
                bodyTemplateMaker.call(this, 7, mainImage, 'Time to play ' + skillQuizName + '!', null, null, speechOutput, reprompt, null, mainImgBlurBG);
            } else {
                speechOutput = 'Unfortunately, ' + skillQuizName + ' is not supported on this device, but you can still learn about the wonder of berries which in my opinion is far more fun. What would you like to do?';
                reprompt = 'What would you like to do?';
                this.response.speak(speechOutput).listen(reprompt);
                this.attributes.lastOutputResponse = speechOutput;

                this.emit(':responseReady');
            }
        } else if (supportsDisplay.call(this) && !testingOnSim) {
            speechOutput = 'You are already in the middle of a game. Please answer the question: ' + this.attributes.storedQuestion;
            this.response.speak(speechOutput);
            this.response.shouldEndSession(null);
            this.attributes.lastOutputResponse = speechOutput;

            this.emit(':responseReady');
        }
    },
    'MoreInfoIntent': function() {
        if (this.attributes.selectedValueIndex) {
            var objectArray = this.attributes.mainArray;
            var selectedVal = this.attributes.selectedValueIndex;
            var speechOutput = objectArray[selectedVal].info;
            this.response.speak(speechOutput);
            this.response.shouldEndSession(null);
            this.attributes.lastOutputResponse = speechOutput;

            this.emit(':responseReady');
        } else {
            handleUnknown.call(this);
        }
    },
    'AMAZON.RepeatIntent': function() {
        var speechOutput = this.attributes.lastOutputResponse;
        this.response.speak(speechOutput);
        this.response.shouldEndSession(null);
        this.attributes.lastOutputResponse = speechOutput;

        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function() {
        //Confirmation for leaving skill
        if (this.attributes.skillState == 'quitting') {
            endSkill.call(this);
        } else {
            confirmExit.call(this);
        }
    },
    'AMAZON.CancelIntent': function() {
        confirmExit.call(this);
    },
    'AMAZON.HelpIntent': function() {
        //Provide instructions based on skill state
        newSessionHandler.call(this);

        var speechOutput;

        if (this.attributes.skillState == 'gamePlaying') {
            speechOutput = 'In ' + skillQuizName + ', you simply need to select the option that most resembles the ' + categorySingular + ' being asked for in the question; either say 1 - 4, or touch the screen!';
            this.response.speak(speechOutput);
            this.response.shouldEndSession(null);
            this.attributes.lastOutputResponse = speechOutput;

            this.emit(':responseReady');
        } else {
            showSkillIntro.call(this, null);
        }
    },
    'ElementSelected': function() { //To handle interaction events
        newSessionHandler.call(this);
        
        var speechOutput;
        
        if (this.attributes.skillState == 'gamePlaying') {
            var optionsArray = this.attributes.onScreenOptions;
            var correctQIndex = this.attributes.correctIndex;
            var quizOptions = this.attributes.QuizOptionArray;
            var currentQNo = this.attributes.questionNumber;

            if (this.event.request.token) {
                //User touched the screen
                if (currentQNo < quizOptions.length - 1) {
                    handleAnswer.call(this, optionsArray[correctQIndex].token, this.event.request.token, quizOptions, false);
                } else {
                    handleAnswer.call(this, optionsArray[correctQIndex].token, this.event.request.token, quizOptions, true);
                }
            } else if (parseInt(this.event.request.intent.slots.numberValue.value)) {
                //User said their choice
                var userChoiceNumber = parseInt(this.event.request.intent.slots.numberValue.value);

                if (currentQNo < quizOptions.length - 1) {
                    //If still less than the amount of questions left
                    if (userChoiceNumber > 0 && userChoiceNumber < optionsArray.length + 1) {
                        //If their answer is between the amount of options.
                        handleAnswer.call(this, correctQIndex + 1, userChoiceNumber, quizOptions, false);
                    } else {
                        speechOutput = 'Please select a number between 1 and ' + optionsArray.length;
                        this.response.speak(speechOutput);
                        this.response.shouldEndSession(null);
                        this.attributes.lastOutputResponse = speechOutput;

                        this.emit(':responseReady');
                    }
                } else {
                    //Game has ended
                    handleAnswer.call(this, correctQIndex + 1, userChoiceNumber, quizOptions, true);
                }
            } else
                handleUnknown.call(this);
        } else //User is not playing game
        {
            var objectArray = this.attributes.mainArray;

            //Screen touched
            if (this.event.request.token) {

                if (this.event.request.token == "dictionary_token") {
                    //Open dictionary
                    showMainList.call(this);
                } else if (this.event.request.token == 'quiz_token') {
                    //Start the game
                    this.emit('QuizIntent');
                } else if (this.event.request.token == "read_info_token") {
                    //read out information
                    var selectedIndex = this.attributes.selectedValueIndex;
                    speechOutput = objectArray[selectedIndex].info;
                    this.response.speak(speechOutput);
                    this.response.shouldEndSession(null);
                    this.attributes.lastOutputResponse = speechOutput;

                    this.emit(':responseReady');
                }

                if (this.event.request.token == "dictionary_token") {
                    //'Go back' action link selectex
                    resetAttributes.call(this);
                    showMainList.call(this);
                } else {
                    //Something else selected, most likely from our main list (only list available outside of game)
                    var valueToken = this.event.request.token;
                    var result = matchChecker(objectArray, valueToken);
                    showSpecificItemInfo.call(this, result, objectArray);
                }
            } else if (this.event.request.intent.slots.categoryValue.value) {
                //If the user chooses their selection via voice
                resetAttributes.call(this);

                var userFruit = this.event.request.intent.slots.categoryValue.value;
                var iresult = matchChecker(objectArray, userFruit);

                if (iresult) {
                    showSpecificItemInfo.call(this, iresult, objectArray);
                } else {
                    handleUnknown.call(this);
                }
            } else if (this.event.request.intent.slots.numberValue.value) {
                //If the user chooses their selection via voice
                resetAttributes.call(this);

                var userChoiceNumber1 = parseInt(this.event.request.intent.slots.numberValue.value);

                if (userChoiceNumber1 > 0 && userChoiceNumber1 < objectArray.length + 1) {
                    //If within the range of options offered
                    showSpecificItemInfo.call(this, userChoiceNumber1 - 1, objectArray);
                } else {
                    speechOutput = 'Please say a number between 1 and ' + objectArray.length;
                    this.response.speak(speechOutput);
                    this.response.shouldEndSession(null);
                    this.attributes.lastOutputResponse = speechOutput;

                    this.emit(':responseReady');
                }
            } else {
                //If this intent is hit without the needed data 
                handleUnknown.call(this);
            }
        }
    },
    'SessionEndedRequest': function() {
        //User has outright quit the skill
        endSkill.call(this);
    },
};

////////3. Helper functions//////////////////////////////////////////////////////////////////////////
//Generic functions///////////////////////////////////////////////////////////////////
function supportsDisplay() {
    var hasDisplay =
        this.event.context &&
        this.event.context.System &&
        this.event.context.System.device &&
        this.event.context.System.device.supportedInterfaces &&
        this.event.context.System.device.supportedInterfaces.Display

    return hasDisplay;
}

function handleUnknown() {
    //For when Alexa doesn't understand the user
    var speechOutput = 'I am sorry. I did not quite get that one. Could you try again?';
    var reprompt = 'Could you try again?';

    this.response.speak(speechOutput).listen(reprompt);
    this.attributes.lastOutputResponse = speechOutput;

    this.emit(':responseReady');
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomVal(pMin, pMax) {
    return Math.floor((Math.random() * pMax) + pMin);
}

function generateRandResponse(pArray, pSpeechCon) {
    var r = getRandomVal(0, pArray.length);

    if (pSpeechCon) {
        return '<say-as interpret-as="interjection">' + pArray[r] + '</say-as>. ';
    } else {
        return pArray[r];
    }
}

function bodyTemplateTypePicker(pNum) {
    var val;

    switch (pNum) {
        case 1:
            val = new Alexa.templateBuilders.BodyTemplate1Builder();
            break;
        case 2:
            val = new Alexa.templateBuilders.BodyTemplate2Builder();
            break;
        case 3:
            val = new Alexa.templateBuilders.BodyTemplate3Builder();
            break;
        case 6:
            val = new Alexa.templateBuilders.BodyTemplate6Builder();
            break;
        case 7:
            val = new Alexa.templateBuilders.BodyTemplate7Builder();
            break;
        default:
            val = null;
    }
    return val;
}

//Template makers
   //TODO: Change parameter names to match JSON spec
function bodyTemplateMaker(pBodyTemplateType, pImg, pTitle, pText1, pText2, pOutputSpeech, pReprompt, pHint, pBackgroundIMG) {
    var bodyTemplate = bodyTemplateTypePicker.call(this, pBodyTemplateType);
    var template = bodyTemplate.setTitle(pTitle)
        .build();

    if (pBodyTemplateType != 7) {
        //Text not supported in BodyTemplate7
        bodyTemplate.setTextContent(makeRichText(pText1) || null, makeRichText(pText2) || null) //Add text or null
    }

    if (pImg) {
        bodyTemplate.setImage(makeImage(pImg));
    }

    if (pBackgroundIMG) {
        bodyTemplate.setBackgroundImage(makeImage(pBackgroundIMG));
    }

    this.response.speak(pOutputSpeech)
        .renderTemplate(template)
        .shouldEndSession(null); //Keeps session open without pinging user..

    this.response.hint(pHint || null, "PlainText");
    this.attributes.lastOutputResponse = pOutputSpeech;

    if (pReprompt) {
        this.response.listen(pReprompt); // .. but we will ping them if we add a reprompt
    }

    this.emit(':responseReady');
}

function listTemplateTypePicker(pNum) {
    var val;

    switch (pNum) {
        case 1:
            val = new Alexa.templateBuilders.ListTemplate1Builder();
            break;
        case 2:
            val = new Alexa.templateBuilders.ListTemplate2Builder();
            break;
        default:
            val = null;
    }
    return val;
}
   //TODO: Change parameter names to match JSON spec
function listTemplateMaker(pArray, pType, pTitle, pOutputSpeech, pQuiz, pBackgroundIMG) {
    const listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();
    var listTemplateBuilder = listTemplateTypePicker(pType);

    if (!pQuiz) {
        for (let i = 0; i < pArray.length; i++) {
            listItemBuilder.addItem(makeImage(pArray[i].imageURL), pArray[i].token, makePlainText(capitalizeFirstLetter(pArray[i].name)));
        }
    } else {
        //Dont insert option name if playing the quiz ()
        for (let i = 0; i < pArray.length; i++) {
            listItemBuilder.addItem(makeImage(pArray[i].imageURL), pArray[i].token);
        }
    }

    var listItems = listItemBuilder.build();
    var listTemplate = listTemplateBuilder.setTitle(pTitle)
        .setListItems(listItems)
        .build();

    if (pBackgroundIMG) {
        listTemplateBuilder.setBackgroundImage(makeImage(pBackgroundIMG));
    }

    this.attributes.lastOutputResponse = pOutputSpeech;

    this.response.speak(pOutputSpeech)
        .renderTemplate(listTemplate)
        .shouldEndSession(null);
    this.emit(':responseReady');
}

//Skill specific funcions/////////////////////////////////////////////////////////
function matchChecker(pArray, pCompare1) {
    for (let i = 0; i < pArray.length; i++) {
        //Find out which value 
        if (pCompare1.toLowerCase() == pArray[i].name.toLowerCase() || pCompare1.toLowerCase() == pArray[i].token.toLowerCase()) {
            //Returns index of match for later use
            return i; 
        }
    }
}

function confirmExit() {
    var speechOutput = 'Are you sure you would like to quit ' + skillName + '?';
    var reprompt = speechOutput;
    this.attributes.skillState = 'quitting';
    this.response.speak(speechOutput).listen(reprompt);
    this.attributes.lastOutputResponse = speechOutput;

    this.emit(':responseReady');
}

function createArrayValue(pName, pImageURL, pInfo) //object creation
{
    var value = {
        name: pName,
        imageURL: pImageURL,
        info: pInfo,
        token: pName + 'Token',
    };

    return value;
}

function handleAnswer(pCorrectAnswer, pUserAnswer, pArray, pGameFinished) {
    var speechOutput;

    if (pCorrectAnswer == pUserAnswer) {
        //User answer is correct
        speechOutput = generateRandResponse(positiveSpeechconArray, true) + ' ' + generateRandResponse(correctResponses, false) + ' ';

        if (this.attributes.correctAnswersNo) {
            this.attributes.correctAnswersNo ++;
        } else  {
            this.attributes.correctAnswersNo = 1;
        }
    } else {
        //They are wrong
        speechOutput = generateRandResponse(negativeSpeechconArray, true) + ' ' + generateRandResponse(wrongResponses, false) + ' ';
    }

    if (!pGameFinished) {
        //Ask a new Q
        this.attributes.questionNumber ++;
        generateNewQuestion.call(this, speechOutput, this.attributes.questionNumber);
    } else {
        //Game over
        var answerSP = 'answers';
        var cardTitle = 'Game Over!';
        var gameoverImage;

        if (this.attributes.correctAnswersNo && this.attributes.correctAnswersNo == 1) {
            answerSP = 'answer'; //handle plural/singular
        }

        var correctAnswersVal = this.attributes.correctAnswersNo || 0;

        speechOutput += ' Out of ' + pArray.length + ', you got ' + correctAnswersVal + ' ' + answerSP + ' correct. ';
        var speechOutput2 = 'Ask to play again; otherwise, I can teach you about some of the berries you have just seen if you would prefer. Just let me know.';
        speechOutput += speechOutput2;

        this.attributes.skillState = null;

        if (this.attributes.correctAnswersNo && this.attributes.correctAnswersNo > 4) {
            //Provide image based on score
            gameoverImage = firstPlaceImage;
        } else {
            gameoverImage = secondPlaceImage;
        }

        resetAttributes.call(this);

        if (supportsDisplay.call(this) && !testingOnSim) {
            bodyTemplateMaker.call(this, 2, gameoverImage, cardTitle, '<b><font size="7">' + correctAnswersVal + ' / ' + pArray.length + ' correct.</font></b>', '<br/>' + speechOutput2, speechOutput, null, "tell me about berries", mainImgBlurBG);
        } else {
            this.response.speak(speechOutput);
            this.response.shouldEndSession(null);
            this.attributes.lastOutputResponse = speechOutput;

            this.emit(':responseReady');
        }
    }
}

function resetAttributes() {
    this.attributes.skillState = null;
    this.attributes.selectedValueIndex = null;
    this.attributes.questionNumber = null;
    this.attributes.correctIndex = null;
    this.attributes.onScreenOptions = null;
    this.attributes.quizArray = null;
    this.attributes.QuizOptionArray = null;
    this.attributes.correctAnswersNo = null;
    this.attributes.storedQuestion = null;
}

function generateNewQuestion(pSpeechOutput, pQuestionNo) {
    var objectArray = this.attributes.quizArray;
    var quizOptions = this.attributes.QuizOptionArray;
    var questionAskType = ['Which of these looks like ', 'Please select the image that represents ', 'Do you know which of these look like '];

    var question;
    question = 'Question ' + (pQuestionNo + 1) + ': ' + questionAskType[getRandomVal(0, 3)] + quizOptions[pQuestionNo].name + '?';
    this.attributes.storedQuestion = question;

    pSpeechOutput += question;
    var index;

    question = 'Question ' + (pQuestionNo + 1) + '/' + GAMELENGTH + ': ' + 'Which one looks like ' + quizOptions[pQuestionNo].name + '?';

    for (let i = 0; i < objectArray.length; i++) {
        //Find the correct index for the next question
        if (objectArray[i].name == quizOptions[pQuestionNo].name) {
            index = i;
            break;
        }
    }

    //Take it out of the main array
    objectArray.splice(index, 1); 
    objectArray = shuffle(objectArray);

    //Add correct answer to new array
    var optionsArray = [quizOptions[pQuestionNo]]; 

    for (let i = 1; i < 4; i++)
        optionsArray[i] = objectArray[i]; //Add other random options to confuse user

    optionsArray = shuffle(optionsArray);

    for (let i = 0; i < optionsArray.length; i++) {
        if (optionsArray[i].name == quizOptions[pQuestionNo].name) {
            this.attributes.correctIndex = i; //Find the correct answer index and save for later
            break;
        }
    }

    this.attributes.onScreenOptions = optionsArray;
    this.attributes.questionNumber = pQuestionNo;

    listTemplateMaker.call(this, optionsArray, 2, question, pSpeechOutput, true, mainImgBlurBG);
}

function showMainList() //For main list of values in the dictionary
{
    var speechOutput;

    resetAttributes.call(this);

    if (supportsDisplay.call(this) && !testingOnSim) {
        speechOutput = 'Select or ask for a ' + categorySingular + ' below for more information.';
        listTemplateMaker.call(this, this.attributes.mainArray, 1, speechOutput, speechOutput, null, mainImgBlurBG);
    } else {
        var objectArray = this.attributes.mainArray;

        speechOutput = "I have a range of " + categoryPlural + " I can tell you about including: ";

        for (let i = 0; i < objectArray.length; i++)
            speechOutput += objectArray[i].name + ', ';

        speechOutput += "which would you like to hear about?";

        this.response.speak(speechOutput).listen(speechOutput);

        this.attributes.lastOutputResponse = speechOutput;
        this.emit(':responseReady');
    }
}

function newSessionHandler() //Called every intent to handle modal/one shot utterances
{
    if (this.event.session.new) {
        var topicNames = [];

        for (let i = 0; i < Object.keys(topicData).length; i++)
            topicNames[i] = Object.keys(topicData)[i];

        var categoryArray = [];

        for (let i = 0; i < Object.keys(topicData).length; i++) {
            //We create a new set of the specified category values here
            categoryArray[i] = createArrayValue(topicNames[i], topicData[topicNames[i]].imgURL, topicData[topicNames[i]].info);
        }

        this.attributes['mainArray'] = shuffle(categoryArray); //And then randomise them each time the skill starts
    }
}

function showSpecificItemInfo(pIndex, pArray) {
    //User has selected a single fruit to get more info
    this.attributes.selectedValueIndex = pIndex;

    if (supportsDisplay.call(this) && !testingOnSim) {
        bodyTemplateMaker.call(this, 3, pArray[pIndex].imageURL, capitalizeFirstLetter(pArray[pIndex].name), '<action value="read_info_token"><b>Read</b></action> | <action value="dictionary_token"><b>Back</b></action><br/>', pArray[pIndex].info, 'Here is some information about ' + pArray[pIndex].name + '.', null, 'test me on ' + categoryPlural, mainImgBlurBG);
    } else {
        var reprompt = 'Which ' + categorySingular + ' would you like to hear about now?';
        var speechOutput = pArray[pIndex].info + ' ' + reprompt;

        this.response.speak(speechOutput).listen(reprompt);

        this.attributes.lastOutputResponse = speechOutput;

        this.emit(':responseReady');
    }
}

function endSkill() {
    var speechOutput = "Thanks for checking out " + skillName + ". Learn more about " + categoryPlural + " another time. Goodbye!"
    this.response.speak(speechOutput);
    this.emit(':responseReady');
}

function showSkillIntro(pSpeechOutput) {
    resetAttributes.call(this);

    var speechOutput = pSpeechOutput || '';
    var reprompt;
    var cardTitle = skillName;

    //Selectable text
    var actionText1 = '<action value="dictionary_token"><i>' + skillDictionaryName + '</i></action>'; 
    var actionText2 = '<action value="quiz_token"><i>' + skillQuizName + '</i></action>';

    speechOutput += 'Simply ask me to provide information about ' + categoryPlural + ' from the ' + skillDictionaryName + '.';

    if (supportsDisplay.call(this) && !testingOnSim) {
        speechOutput += ' However, if you are feeling lucky, ask for a quick game of ' + skillQuizName + '.';
        var text = '<u><font size="7">' + skillName + '</font></u><br/><br/>Simply ask me to provide information about ' + categoryPlural + ' from the ' + actionText1 + '. However, if you are feeling lucky, ask for a quick game of ' + actionText2 + '.';
        bodyTemplateMaker.call(this, 3, mainImage, cardTitle, null, text, speechOutput, null, null, mainImgBlurBG);
    } else {
        reprompt = 'What would you like to do?';
        speechOutput = speechOutput + ' ' + reprompt;

        this.response.speak(speechOutput).listen(reprompt);
        this.attributes.lastOutputResponse = speechOutput;

        this.emit(':responseReady');
    }
}

/*
Royalty free berry image URLS
https://www.pexels.com/photo/food-forest-blueberries-raspberries-87818/
https://pixabay.com/en/medal-gold-design-2163347/
https://pixabay.com/en/medal-silver-design-2163349/
https://www.pexels.com/photo/healthy-red-fruits-sweet-52536/
https://www.pexels.com/photo/blackberries-on-table-892808/
https://www.pexels.com/photo/berry-delicious-food-fruit-583840/
https://www.pexels.com/photo/close-up-photography-of-grey-round-fruits-139749/
https://www.pexels.com/photo/black-round-fruits-at-daytime-51962/
https://www.pexels.com/photo/yellow-round-small-fruit-54332/
https://www.pexels.com/photo/close-up-of-strawberries-306800/
https://www.pexels.com/photo/food-fruits-blueberries-huckleberries-7024/
https://www.pexels.com/photo/pile-of-cherry-fruit-175727/
https://pixabay.com/en/goji-berry-dried-fruits-vitamins-3162716/*/
