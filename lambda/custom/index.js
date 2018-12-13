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
const Alexa = require('ask-sdk');

/////////1. Static strings///////////////////////////////////Modify the hard coded data below to make this skill your own!///
//Skill data
var skillName = 'Berry Bash';
var skillQuizName = 'Berry Buzz';
var skillDictionaryName = 'Berry Book';
var categoryPlural = 'berries';
var categorySingular = 'berry';

var mainImage = 'https://s3.amazonaws.com/ask-samples-resources/berryImages/background-berries-berry-blackberries-87818%2B(1).jpeg';
var mainImgBlurBG = 'https://s3.amazonaws.com/ask-samples-resources/berryImages/main_blur2.png';

var topicData = {
    "raspberries": {
        "imgURL": "https://s3.amazonaws.com/ask-samples-resources/berryImages/raspberry-fruits-fresh-red-52536.jpeg",
        "info": "The Raspberry or Red Raspberry is the plant that produces a tart, sweet, red composite fruit in the late summer and early autumn. In proper botanical language, it is not a berry at all, but instead an aggregate fruit of numerous drupelets around the central core."
    },
    "blackberries": {
        "imgURL": "https://s3.amazonaws.com/ask-samples-resources/berryImages/pexels-photo-892808.jpeg",
        "info": "The blackberry is an edible fruit produced by many species in the Rubus genus in the Rosaceae family, hybrids among these species within the Rubus subgenus, and hybrids between the Rubus and Idaeobatus subgenera."
    },
    "strawberries": {
        "imgURL": "https://s3.amazonaws.com/ask-samples-resources/berryImages/pexels-photo-583840.jpeg",
        "info": "Strawberries are short-lived herbaceous perennials, producing for 2 to 3 years. Plant in an open, sunny position in raised beds; a good airflow will reduce fungal diseases. Strawberries prefer a well-drained soil, rich in humus. Dig in lots of organic matter, compost, animal manure or blood and bone, about a month before planting."
    },
    "blueberries": {
        "imgURL": "https://s3.amazonaws.com/ask-samples-resources/berryImages/summer-blueberries-stephanie-herington.jpg",
        "info": "Blueberry is one of the highest antioxidant capacities among all fruits, vegetables, spices and seasonings. Antioxidants are necessary to optimizing fitness by helping to combat the free radicals that can damage cellular structures as well as DNA. Blueberries are small blue to black colored fruits with a green flesh. They should be rich and bright in color with a natural bloom."
    },
    "elderberries": {
        "imgURL": "https://s3.amazonaws.com/ask-samples-resources/berryImages/elder-black-elderberry-sambucus-nigra-holder-51962.jpeg",
        "info": "Elderberry also known as Sambucus is from the family of Adoxaceae, which is a genus of flowering plant. Formerly placed in the honeysuckle family, the fruits when ripe are blackish purple in color and globose in shape. With seeds just about 3mm long, they are globular in shape and about 4 mm diameter, calyx persistent at the apex."
    },
    "gooseberries": {
        "imgURL": "https://s3.amazonaws.com/ask-samples-resources/berryImages/currant-immature-bush-berry-54332.jpeg",
        "info": "Indian gooseberry fruits are of small size and light green in color. They have 6 vertical grooves on them. The taste of the fruit can be described as strong, harsh, and rough. This fruit is round shaped with vertical stripes and has a hard seed inside."
    },
    "cranberries": {
        "imgURL": "https://s3.amazonaws.com/ask-samples-resources/berryImages/pexels-photo-306800.jpeg",
        "info": "Cranberries are low, creeping shrubs or vines up to 2 metres long and 5 to 20 centimetres in height; they have slender, wiry stems that are not thickly woody and have small evergreen leaves. The flowers are dark pink, with very distinct reflexed petals, leaving the style and stamens fully exposed and pointing forward. They are pollinated by bees. The fruit is a berry that is larger than the leaves of the plant; it is initially light green, turning red when ripe. It is edible, but with an acidic taste that usually overwhelms its sweetness."
    },
    "huckleberries": {
        "imgURL": "https://s3.amazonaws.com/ask-samples-resources/berryImages/pexels-photo-139749.jpeg",
        "info": "Huckleberry otherwise called hurtleberry is the native fruit of North America. The fruit appear in various dark colors such as red, blue and black and each berry measures 5-10mm in diameter. The fruit is completely edible and possesses a unique sweet taste. These berries are used as a major flavoring agent in juice, tea, soup, pudding, pie, pancakes and jam. It is also used for treating pain and healing heart disease and infections."
    },
    "cherries": {
        "imgURL": "https://s3.amazonaws.com/ask-samples-resources/berryImages/pexels-photo-175727.jpeg",
        "info": "Cherries are found in the wild and have been domesticated for centuries. There is a myriad of cherry types, resulting from new varieties and hybrids developed for hardiness and flavor. This fruit is found in Asia, Europe, and North America, with Iran, Turkey, United States, Germany, and Italy leading in the production of cherries."
    },
    "gojiberries": {
        "imgURL": "https://s3.amazonaws.com/ask-samples-resources/berryImages/goji-3162716_640.jpg",
        "info": "Goji, goji berry, or wolfberry is the fruit of either the Lycium barbarum or Lycium chinense, two closely related species of boxthorn in the nightshade family, Solanaceae. The family also includes the potato, tomato, eggplant, belladonna, chili pepper, and tobacco. The two species are native to Asia."
    }
}
// Info sourced from fruitsinfo.com
// Royalty free images sourced from pexels/pixabay. See bottom of codes for links

//generic strings, images, etc. You can change some of the data below, but to make this skill your own, focus on the data above
var adjectives = ['craziest', 'hippest', 'tastiest', 'sweetest', 'greatest', 'cheekiest', 'spiciest', 'greatest', 'smartest', 'best'];

var positiveSpeechconArray = ['bang', 'boing', 'kaboom', 'mazel tov', 'oh snap', 'well done'];
var negativeSpeechconArray = ['wah wah', 'uh oh', 'tosh', 'quack', 'oof', 'oh dear'];

var correctResponses = ['That is correct.', 'You got it!', 'Nice one.', 'There you go.', 'Awesome', 'Congratulations.'];
var wrongResponses = ['Oh no.', 'That is wrong.', 'Incorrect.', 'Unlucky.', 'Maybe next time.', 'Nearly.'];

var secondPlaceImage = 'https://s3.amazonaws.com/ask-samples-resources/berryImages/medal-2163349_640.png';
var firstPlaceImage = 'https://s3.amazonaws.com/ask-samples-resources/berryImages/medal-2163347_640.png';

const GAMELENGTH = 5;
var testingOnSim = false; //flip to experience voice only skill on display device/simulator

/////////2. Entry point and intent handlers//////////////////////////////////////////////////////////////////////////
const skillBuilder = Alexa.SkillBuilders.standard();

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === `LaunchRequest`;
    },
    handle(handlerInput) {

        newSessionHandler(handlerInput);

        var speechOutput = 'Welcome to ' + skillName + ', the ' + adjectives[getRandomVal(0, adjectives.length - 1)] + ' stop for knowledge about ' + categoryPlural + ' around. ';
        var reprompt = "What would you like to do?";

        return showSkillIntro(speechOutput, reprompt, handlerInput);
    },
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

        //User has outright quit the skill
        return endSkill(handlerInput);
    },
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`Error handled: ${error.message}`);

        return handleUnknown(handlerInput);
    },
};

const PreviousIntentHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' &&
            request.intent.name === 'AMAZON.PreviousIntent';
    },
    handle(handlerInput) {
        var speechOutput;
        var reprompt;
        const attributes = handlerInput.attributesManager.getSessionAttributes();

        //If we are showing a fruit, go back to the main list
        if (attributes.selectedValueIndex) {
            return showMainList(handlerInput);
        } else if (attributes.skillState == 'gamePlaying') {
            speechOutput = 'You are currently in the middle of a game. Would you like to carry on playing?';
            reprompt = 'Would you like to carry on playing?';

            saveLastThingSaid(handlerInput, speechOutput);

            const response = handlerInput.responseBuilder;

            return response
                .speak(speechOutput)
                .reprompt(reprompt)
                .getResponse();
        } else {
            return showSkillIntro(speechOutput, reprompt, handlerInput);
        }
    },
};

function QuizFunction(handlerInput) {
    newSessionHandler(handlerInput);
    var speechOutput;
    var reprompt;

    resetAttributes(handlerInput);

    const attributes = handlerInput.attributesManager.getSessionAttributes();

    const response = handlerInput.responseBuilder;

    if (attributes.skillState != 'gamePlaying') {
        if (supportsDisplay(handlerInput) && !testingOnSim) {
            speechOutput = '<say-as interpret-as="interjection">dun dun dun.</say-as> Check out the big brains over here. Are you ready to begin?';
            reprompt = "Are you ready to begin?";

            attributes.quizArray = attributes.mainArray;
            attributes.skillState = 'quizMainMenu';

            handlerInput.attributesManager.setSessionAttributes(attributes);

            return bodyTemplateMaker('BodyTemplate7', handlerInput, mainImage, 'Time to play ' + skillQuizName + '!', null, null, null, speechOutput, reprompt, null, mainImgBlurBG, false);
        } else {
            speechOutput = 'Unfortunately, ' + skillQuizName + ' is not supported on this device, but you can still learn about the wonder of berries which in my opinion is far more fun. What would you like to do?';
            reprompt = 'What would you like to do?';

            saveLastThingSaid(handlerInput, speechOutput)

            return response.speak(speechOutput).reprompt(reprompt).getResponse();
        }
    } else if (supportsDisplay(handlerInput) && !testingOnSim) {
        speechOutput = 'You are already in the middle of a game. Please answer the question: ' + attributes.storedQuestion;


        response.withShouldEndSession(null);

        saveLastThingSaid(handlerInput, speechOutput);

        return response.speak(speechOutput).getResponse();
    }
}

const QuizIntentHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' &&
            request.intent.name === 'QuizIntent';
    },
    handle(handlerInput) {
        return QuizFunction(handlerInput);
    },
};

const MoreInfoIntentHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' &&
            request.intent.name === 'MoreInfoIntent';
    },
    handle(handlerInput) {
        const attributes = handlerInput.attributesManager.getSessionAttributes();

        if (attributes.selectedValueIndex) {
            var objectArray = attributes.mainArray;
            var selectedVal = attributes.selectedValueIndex;
            var speechOutput = objectArray[selectedVal].info;

            const response = handlerInput.responseBuilder;

            response.withShouldEndSession(null);

            saveLastThingSaid(handlerInput, speechOutput);

            return response.speak(speechOutput).getResponse();
        } else {
            return handleUnknown(handlerInput);
        }
    },
};

const RepeatIntentHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' &&
            request.intent.name === 'AMAZON.RepeatIntent';
    },
    handle(handlerInput) {

        const attributes = handlerInput.attributesManager.getSessionAttributes();

        var speechOutput = attributes.lastOutputResponse;

        const response = handlerInput.responseBuilder;

        response.withShouldEndSession(null);

        saveLastThingSaid(handlerInput, speechOutput);

        return response.speak(speechOutput).getResponse();
    },
};

const StopIntentHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' &&
            request.intent.name === 'AMAZON.StopIntent';
    },
    handle(handlerInput) {


        return endSkill(handlerInput);
    },
};

const CancelIntentHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' &&
            request.intent.name === 'AMAZON.CancelIntent';
    },
    handle(handlerInput) {
        //Provide instructions based on skill state
        newSessionHandler(handlerInput);

        const attributes = handlerInput.attributesManager.getSessionAttributes();

        var speechOutput;
        var reprompt;

        if (attributes.skillState == 'gamePlaying') {
            speechOutput = 'In ' + skillQuizName + ', you simply need to select the option that most resembles the ' + categorySingular + ' being asked for in the question; either say 1 - 4, or touch the screen!';

            const response = handlerInput.responseBuilder;

            response.withShouldEndSession(null);

            saveLastThingSaid(handlerInput, speechOutput)

            return response.speak(speechOutput).getResponse();
        } else {
            reprompt = 'Which ' + categorySingular + ' would you like to hear about?'
            return showSkillIntro(speechOutput, reprompt, handlerInput);
        }
    },
};

const InformationIntentHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' &&
            request.intent.name === 'InformationIntent';
    },
    handle(handlerInput) {
        var speechOutput;
        var reprompt;

        newSessionHandler(handlerInput);

        const attributes = handlerInput.attributesManager.getSessionAttributes();
        if (attributes.skillState == 'gamePlaying') {
            speechOutput = 'You are currently in the middle of a game. Would you like to carry on playing?';
            reprompt = 'Would you like to keep on playing?';
            saveLastThingSaid(handlerInput, speechOutput)

            const response = handlerInput.responseBuilder;

            return response
                .speak(speechOutput)
                .reprompt(reprompt)
                .getResponse();
        } else {

            return showMainList(handlerInput);
        }
    },
};

const NextIntentHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' &&
            request.intent.name === 'AMAZON.NextIntent';
    },
    handle(handlerInput) {
        //Provide instructions based on skill state
        newSessionHandler(handlerInput);

        return handleUnknown(handlerInput);
    },
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' &&
            request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        //Provide instructions based on skill state
        newSessionHandler(handlerInput);

        const attributes = handlerInput.attributesManager.getSessionAttributes();
        const response = handlerInput.responseBuilder;

        var speechOutput;
        var reprompt;

        if (attributes.skillState == 'gamePlaying') {
            speechOutput = 'In ' + skillQuizName + ', you simply need to select the option that most resembles the ' + categorySingular + ' being asked for in the question; either say 1 - 4, or touch the screen!';

            response.withShouldEndSession(null);

            saveLastThingSaid(handlerInput, speechOutput)
            response.speak(speechOutput).getResponse();
        } else {
            reprompt = 'Which ' + categorySingular + ' would you like to hear about?'
            return showSkillIntro(speechOutput, reprompt, handlerInput);
        }
    },
};

const ElementSelectedHandler = {
    canHandle(handlerInput) {

        const request = handlerInput.requestEnvelope.request;
        return (request.type === 'IntentRequest' &&
            request.intent.name === 'ElementSelected')
            || request.type === 'Display.ElementSelected';
    },
    handle(handlerInput) {
        newSessionHandler(handlerInput);

        var speechOutput;

        const attributes = handlerInput.attributesManager.getSessionAttributes();
        const response = handlerInput.responseBuilder;

        if (attributes.skillState == 'gamePlaying') {
            var optionsArray = attributes.onScreenOptions;
            var correctQIndex = attributes.correctIndex;
            var quizOptions = attributes.QuizOptionArray;
            var currentQNo = attributes.questionNumber;

            if (handlerInput.requestEnvelope.request.token) {
                //User touched the screen
                if (currentQNo < quizOptions.length - 1) {
                    return handleAnswer(handlerInput, optionsArray[correctQIndex].token, handlerInput.requestEnvelope.request.token, quizOptions, false);
                } else {
                    return handleAnswer(handlerInput, optionsArray[correctQIndex].token, handlerInput.requestEnvelope.request.token, quizOptions, true);
                }
            } else if (handlerInput.requestEnvelope.request.intent.slots.numberValue.value) {
                //User said their choice
                var userChoiceNumber = parseInt(handlerInput.requestEnvelope.request.intent.slots.numberValue.value);

                if (currentQNo < quizOptions.length - 1) {
                    //If still less than the amount of questions left
                    if (userChoiceNumber > 0 && userChoiceNumber < optionsArray.length + 1) {
                        //If their answer is between the amount of options.
                        return handleAnswer(handlerInput, correctQIndex + 1, userChoiceNumber, quizOptions, false);
                    } else {
                        speechOutput = 'Please select a number between 1 and ' + optionsArray.length;

                        response.withShouldEndSession(null);

                        saveLastThingSaid(handlerInput, speechOutput);

                        return response.speak(speechOutput).getResponse();
                    }
                } else {
                    //Game has ended
                    return handleAnswer(handlerInput, correctQIndex + 1, userChoiceNumber, quizOptions, true);
                }
            } else {
                return handleUnknown(handlerInput);
            }
        } else //User is not playing game
        {

            var objectArray = attributes.mainArray;

            //Screen touched
            if (handlerInput.requestEnvelope.request.token) {

                if (handlerInput.requestEnvelope.request.token == "dictionary_token") {
                    //Open dictionary
                    return showMainList(handlerInput);
                } else if (handlerInput.requestEnvelope.request.token == 'quiz_token') {
                    //Start the game
                    return QuizFunction(handlerInput);
                } else if (handlerInput.requestEnvelope.request.token == "read_info_token") {
                    //read out information
                    var selectedIndex = attributes.selectedValueIndex;
                    speechOutput = objectArray[selectedIndex].info;

                    response.withShouldEndSession(null);

                    saveLastThingSaid(handlerInput, speechOutput);

                    return response.speak(speechOutput).getResponse();
                }

                if (handlerInput.requestEnvelope.request.token == "dictionary_token") {
                    //'Go back' action link selectex
                    resetAttributes(handlerInput);
                    return showMainList(handlerInput);
                } else {
                    //Something else selected, most likely from our main list (only list available outside of game)
                    var valueToken = handlerInput.requestEnvelope.request.token;
                    var result = matchChecker(objectArray, valueToken);
                    return showSpecificItemInfo(handlerInput, result, objectArray);
                }
            } else if (handlerInput.requestEnvelope.request.intent.slots.categoryValue.value) {
                //If the user chooses their selection via voice
                resetAttributes(handlerInput);

                var userFruit = handlerInput.requestEnvelope.request.intent.slots.categoryValue.value;
                var iresult = matchChecker(objectArray, userFruit);

                if (iresult) {
                    return showSpecificItemInfo(handlerInput, iresult, objectArray);
                } else {
                    return handleUnknown(handlerInput);
                }
            } else if (handlerInput.requestEnvelope.request.intent.slots.numberValue.value) {
                //If the user chooses their selection via voice
                resetAttributes(handlerInput);

                var userChoiceNumber1 = parseInt(handlerInput.requestEnvelope.request.intent.slots.numberValue.value);

                if (userChoiceNumber1 > 0 && userChoiceNumber1 < objectArray.length + 1) {
                    //If within the range of options offered
                    return showSpecificItemInfo(handlerInput, userChoiceNumber1 - 1, objectArray);
                } else {
                    speechOutput = 'Please say a number between 1 and ' + objectArray.length;

                    response.withShouldEndSession(null);

                    saveLastThingSaid(handlerInput, speechOutput);

                    return response.speak(speechOutput).getResponse();
                }
            } else {
                //If this intent is hit without the needed data 
                return handleUnknown(handlerInput);
            }
        }
    },
};

const NoIntentHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' &&
            request.intent.name === 'AMAZON.NoIntent';
    },
    handle(handlerInput) {
        newSessionHandler(handlerInput);

        var speechOutput;
        var reprompt;

        const attributes = handlerInput.attributesManager.getSessionAttributes();

        //User wants to stop playing game
        if (attributes.skillState == 'gamePlaying') {
            return showSkillIntro(speechOutput, reprompt, handlerInput);
        } else {
            return endSkill(handlerInput);
        }
    },
};

const YesIntentHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' &&
            request.intent.name === 'AMAZON.YesIntent';
    },
    handle(handlerInput) {
        newSessionHandler(handlerInput);

        var speechOutput;

        const attributes = handlerInput.attributesManager.getSessionAttributes();

        if (attributes.skillState == 'quizMainMenu') {
            var questionNo = 0;

            speechOutput = '<say-as interpret-as="interjection">Good luck.</say-as> ';

            //Set up new game of quiz
            var objectArray = attributes.quizArray;

            objectArray = shuffle(objectArray);

            var randomObjectArray = [];

            for (let i = 0; i < GAMELENGTH; i++) {
                randomObjectArray[i] = objectArray[i];
            }

            attributes.QuizOptionArray = shuffle(randomObjectArray);
            attributes.skillState = 'gamePlaying';
            handlerInput.attributesManager.setSessionAttributes(attributes);

            return generateNewQuestion(handlerInput, speechOutput, questionNo);
        } else if (attributes.skillState == 'gamePlaying') {
            speechOutput = 'You are currently in the middle of a game. Would you like to carry on playing?';

            const response = handlerInput.responseBuilder;

            saveLastThingSaid(handlerInput, speechOutput)

            return response
                .speak(speechOutput)
                .reprompt(speechOutput)
                .getResponse();
        } else {
            return handleUnknown(handlerInput);
        }
    },
};

exports.handler = skillBuilder
    .addRequestHandlers(
        LaunchRequestHandler,
        InformationIntentHandler,
        YesIntentHandler,
        NoIntentHandler,
        ElementSelectedHandler,
        HelpIntentHandler,
        CancelIntentHandler,
        StopIntentHandler,
        RepeatIntentHandler,
        MoreInfoIntentHandler,
        QuizIntentHandler,
        NextIntentHandler,
        PreviousIntentHandler,
        SessionEndedRequestHandler
    )
    .addErrorHandlers(ErrorHandler)
    .lambda();

////////3. Helper functions//////////////////////////////////////////////////////////////////////////
//Generic functions///////////////////////////////////////////////////////////////////
function matchChecker(pArray, pCompare1) {
    for (let i = 0; i < pArray.length; i++) {
        //Find out which value 
        if (pCompare1.toLowerCase() == pArray[i].name.toLowerCase() || pCompare1.toLowerCase() == pArray[i].token.toLowerCase()) {
            //Returns index of match for later use
            return i;
        }
    }
}

function generateRandResponse(pArray, pSpeechCon) {
    var r = getRandomVal(0, pArray.length);

    if (pSpeechCon) {
        return '<say-as interpret-as="interjection">' + pArray[r] + '</say-as>. ';
    } else {
        return pArray[r];
    }
}

function getRandomVal(pMin, pMax) {
    return Math.floor((Math.random() * pMax) + pMin);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
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

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
//Alexa specific helper functions///////////////////////////////////////////////////////////////////
function showSpecificItemInfo(pHandlerInput, pIndex, pArray) {
    //User has selected a single fruit to get more info
    const attributes = pHandlerInput.attributesManager.getSessionAttributes();
    const response = pHandlerInput.responseBuilder;

    attributes.selectedValueIndex = pIndex;

    if (supportsDisplay(pHandlerInput) && !testingOnSim) {
        return bodyTemplateMaker('BodyTemplate3', pHandlerInput, pArray[pIndex].imageURL, capitalizeFirstLetter(pArray[pIndex].name), '<action value="read_info_token"><b>Read</b></action> | <action value="dictionary_token"><b>Back</b></action><br/>', pArray[pIndex].info, null, 'Here is some information about ' + pArray[pIndex].name + '.', null, 'test me on ' + categoryPlural, mainImgBlurBG, false);
    } else {
        var reprompt = 'Which ' + categorySingular + ' would you like to hear about now?';
        var speechOutput = pArray[pIndex].info + ' ' + reprompt;

        saveLastThingSaid(pHandlerInput, speechOutput);

        return response.speak(speechOutput).reprompt(reprompt).getResponse();
    }
}

function handleAnswer(pHandlerInput, pCorrectAnswer, pUserAnswer, pArray, pGameFinished) {
    var speechOutput;

    const attributes = pHandlerInput.attributesManager.getSessionAttributes();

    if (pCorrectAnswer == pUserAnswer) {
        //User answer is correct
        speechOutput = generateRandResponse(positiveSpeechconArray, true) + ' ' + generateRandResponse(correctResponses, false) + ' ';

        if (attributes.correctAnswersNo) {
            attributes.correctAnswersNo++;
        } else {
            attributes.correctAnswersNo = 1;
        }
    } else {
        //They are wrong
        speechOutput = generateRandResponse(negativeSpeechconArray, true) + ' ' + generateRandResponse(wrongResponses, false) + ' ';
    }

    if (!pGameFinished) {
        //Ask a new Q
        attributes.questionNumber++;
        return generateNewQuestion(pHandlerInput, speechOutput, attributes.questionNumber);
    } else {
        //Game over
        var answerSP = 'answers';
        var cardTitle = 'Game Over!';
        var gameoverImage;

        if (attributes.correctAnswersNo && attributes.correctAnswersNo == 1) {
            answerSP = 'answer'; //handle plural/singular
        }

        var correctAnswersVal = attributes.correctAnswersNo || 0;

        speechOutput += ' Out of ' + pArray.length + ', you got ' + correctAnswersVal + ' ' + answerSP + ' correct. ';
        var speechOutput2 = 'Ask to play again; otherwise, I can teach you about some of the berries you have just seen if you would prefer. Just let me know.';
        speechOutput += speechOutput2;

        attributes.skillState = null;

        if (attributes.correctAnswersNo && attributes.correctAnswersNo > 4) {
            //Provide image based on score
            gameoverImage = firstPlaceImage;
        } else {
            gameoverImage = secondPlaceImage;
        }

        resetAttributes(pHandlerInput);

        if (supportsDisplay(pHandlerInput) && !testingOnSim) {

            var text = '<b><font size="7">' + correctAnswersVal + ' / ' + pArray.length + ' correct.</font></b>';
            return bodyTemplateMaker('BodyTemplate2', pHandlerInput, gameoverImage, cardTitle, text, '<br/>' + speechOutput2, null, speechOutput, null, "tell me about berries", mainImgBlurBG, false);

        } else {
            const response = pHandlerInput.responseBuilder;

            response.withShouldEndSession(null);

            saveLastThingSaid(pHandlerInput, speechOutput);

            return response.speak(speechOutput).getResponse();
        }
    }
}

function handleUnknown(pHandlerInput) {
    //For when Alexa doesn't understand the user
    var speechOutput = 'I am sorry. I did not quite get that one. Could you try again?';
    var reprompt = 'Could you try again?';

    const response = pHandlerInput.responseBuilder;

    saveLastThingSaid(pHandlerInput, speechOutput);

    return response.speak(speechOutput).reprompt(reprompt).getResponse();
}

function endSkill(pHandlerInput) {
    var speechOutput = "Thanks for checking out " + skillName + ". Learn more about " + categoryPlural + " another time. Goodbye!"

    const response = pHandlerInput.responseBuilder;

    response.withShouldEndSession(true);

    return response
        .speak(speechOutput)
        .getResponse();
}

function generateNewQuestion(pHandlerInput, pSpeechOutput, pQuestionNo) {
    const attributes = pHandlerInput.attributesManager.getSessionAttributes();

    var objectArray = attributes.quizArray;
    var quizOptions = attributes.QuizOptionArray;
    var questionAskType = ['Which of these looks like ', 'Please select the image that represents ', 'Do you know which of these look like '];

    var question;
    question = 'Question ' + (pQuestionNo + 1) + ': ' + questionAskType[getRandomVal(0, 3)] + quizOptions[pQuestionNo].name + '?';
    attributes.storedQuestion = question;

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
            attributes.correctIndex = i; //Find the correct answer index and save for later
            break;
        }
    }

    attributes.onScreenOptions = optionsArray;
    attributes.questionNumber = pQuestionNo;

    pHandlerInput.attributesManager.setSessionAttributes(attributes);

    return listTemplateMaker('ListTemplate2', pHandlerInput, optionsArray, question, pSpeechOutput, true, mainImgBlurBG, true);
}

function listTemplateMaker(pListTemplateType, pHandlerInput, pArray, pTitle, pOutputSpeech, pQuiz, pBackgroundIMG, pQuiz) {
    const response = pHandlerInput.responseBuilder;
    const backgroundImage = imageMaker("", pBackgroundIMG);
    var itemList = [];
    var title = pTitle;
    var listItemNames = [];
    
    if (pQuiz)
    {
        for (var i = 0; i < pArray.length; i++) {
            listItemNames[i] = "";
        }
    }
    else
    {
        for (var i = 0; i < pArray.length; i++) {
            listItemNames[i] = pArray[i].name;
        }
    }
    
    

    for (var i = 0; i < pArray.length; i++) {
        itemList.push({
            "token": pArray[i].token,
            "textContent": new Alexa.PlainTextContentHelper().withPrimaryText(capitalizeFirstLetter(listItemNames[i])).getTextContent(),
            "image": imageMaker("", pArray[i].imageURL)
        });
    }

    if (pOutputSpeech) {
        response.speak(pOutputSpeech);
    }

    response.addRenderTemplateDirective({
        type: pListTemplateType,
        backButton: 'hidden',
        backgroundImage,
        title,
        listItems: itemList,
    });

    return response.getResponse();
}

function bodyTemplateMaker(pBodyTemplateType, pHandlerInput, pImg, pTitle, pText1, pText2, pText3, pOutputSpeech, pReprompt, pHint, pBackgroundIMG, pEndSession) {
    const response = pHandlerInput.responseBuilder;
    const image = imageMaker("", pImg);
    const richText = richTextMaker(pText1, pText2, pText3);
    const backgroundImage = imageMaker("", pBackgroundIMG);
    const title = pTitle;

    response.addRenderTemplateDirective({
        type: pBodyTemplateType,
        backButton: 'visible',
        image,
        backgroundImage,
        title,
        textContent: richText,
    });

    if (pHint)
        response.addHintDirective(pHint);

    if (pOutputSpeech)
        response.speak(pOutputSpeech);

    if (pReprompt)
        response.reprompt(pReprompt)

    if (pEndSession)
        response.withShouldEndSession(pEndSession);

    return response.getResponse();
}

function showMainList(pHandlerInput) //For main list of values in the dictionary
{
    var speechOutput;
    const attributes = pHandlerInput.attributesManager.getSessionAttributes();
    const response = pHandlerInput.responseBuilder;

    resetAttributes(pHandlerInput);

    if (supportsDisplay(pHandlerInput) && !testingOnSim) {
        speechOutput = 'Select or ask for a ' + categorySingular + ' below for more information.';

        return listTemplateMaker('ListTemplate1', pHandlerInput, attributes.mainArray, speechOutput, speechOutput, null, mainImgBlurBG, false);
    } else {
        var objectArray = attributes.mainArray;

        speechOutput = "I have a range of " + categoryPlural + " I can tell you about including: ";

        for (let i = 0; i < objectArray.length; i++)
            speechOutput += objectArray[i].name + ', ';

        speechOutput += "which would you like to hear about?";

        saveLastThingSaid(pHandlerInput, speechOutput)

        return response.speak(speechOutput).reprompt(speechOutput).getResponse();
    }
}

function imageMaker(pDesc, pSource) {
    const myImage = new Alexa.ImageHelper()
        .withDescription(pDesc)
        .addImageInstance(pSource)
        .getImage();

    return myImage;
}

function supportsDisplay(handlerInput) {
    var hasDisplay =
        handlerInput.requestEnvelope.context &&
        handlerInput.requestEnvelope.context.System &&
        handlerInput.requestEnvelope.context.System.device &&
        handlerInput.requestEnvelope.context.System.device.supportedInterfaces &&
        handlerInput.requestEnvelope.context.System.device.supportedInterfaces.Display
    return hasDisplay;
}

function resetAttributes(pHandlerInput) {
    const attributes = pHandlerInput.attributesManager.getSessionAttributes();
    attributes.skillState = null;
    attributes.selectedValueIndex = null;
    attributes.questionNumber = null;
    attributes.correctIndex = null;
    attributes.onScreenOptions = null;
    attributes.quizArray = null;
    attributes.QuizOptionArray = null;
    attributes.correctAnswersNo = null;
    attributes.storedQuestion = null;

    pHandlerInput.attributesManager.setSessionAttributes(attributes);
}

function saveLastThingSaid(pHandlerInput, pSpeechOutput) {
    const attributes = pHandlerInput.attributesManager.getSessionAttributes();
    attributes.lastOutputResponse = pSpeechOutput;
    pHandlerInput.attributesManager.setSessionAttributes(attributes);
}

function showSkillIntro(pSpeechOutput, pReprompt, pHandlerInput) {
    resetAttributes(pHandlerInput);

    var speechOutput = pSpeechOutput || '';
    var reprompt = pReprompt
    var cardTitle = skillName;

    speechOutput += 'Simply ask me to provide information about ' + categoryPlural + ' from the ' + skillDictionaryName + '.';

    if (supportsDisplay(pHandlerInput) && !testingOnSim) {

        //Selectable text
        var actionText1 = '<action value="dictionary_token"><i>' + skillDictionaryName + '</i></action>';
        var actionText2 = '<action value="quiz_token"><i>' + skillQuizName + '</i></action>';

        speechOutput += ' However, if you are feeling lucky, ask for a quick game of ' + skillQuizName + '.';
        saveLastThingSaid(pHandlerInput, speechOutput)

        var text = '<u><font size="7">' + skillName + '</font></u><br/><br/>Simply ask me to provide information about ' + categoryPlural + ' from the ' + actionText1 + '. However, if you are feeling lucky, ask for a quick game of ' + actionText2 + '.';
        return bodyTemplateMaker('BodyTemplate3', pHandlerInput, mainImage, cardTitle, text, null, null, speechOutput, reprompt, null, mainImgBlurBG, false);
    } else {
        const response = pHandlerInput.responseBuilder;

        saveLastThingSaid(pHandlerInput, speechOutput)

        return response
            .speak(speechOutput)
            .reprompt(reprompt)
            .getResponse();
    }
}

function newSessionHandler(pHandlerInput) //Called every intent to handle modal/one shot utterances
{
    if (pHandlerInput.requestEnvelope.session.new) {
        var topicNames = [];

        for (let i = 0; i < Object.keys(topicData).length; i++)
            topicNames[i] = Object.keys(topicData)[i];

        var categoryArray = [];

        for (let i = 0; i < Object.keys(topicData).length; i++) {
            //We create a new set of the specified category values here
            categoryArray[i] = createArrayValue(topicNames[i], topicData[topicNames[i]].imgURL, topicData[topicNames[i]].info);
        }

        const attributes = pHandlerInput.attributesManager.getSessionAttributes();

        attributes.mainArray = shuffle(categoryArray);
        pHandlerInput.attributesManager.setSessionAttributes(attributes);
    }
}

function richTextMaker(pPrimaryText, pSecondaryText, pTertiaryText) {
    const myTextContent = new Alexa.RichTextContentHelper();

    if (pPrimaryText)
        myTextContent.withPrimaryText(pPrimaryText);

    if (pSecondaryText)
        myTextContent.withSecondaryText(pSecondaryText);

    if (pTertiaryText)
        myTextContent.withTertiaryText(pTertiaryText);

    return myTextContent.getTextContent();
}

function plainTextMaker(pPrimaryText, pSecondaryText, pTertiaryText) {
    const myTextContent = new Alexa.PlainTextContentHelper()
        .withPrimaryText(pPrimaryText)
        .withSecondaryText(pSecondaryText)
        .withTertiaryText(pTertiaryText)
        .getTextContent();

    return myTextContent;
}