# Quickly Build A Multi Modal Quiz & Dictionary Alexa Skill
[![Voice User Interface](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/1-locked._TTH_.png)](./1-voice-user-interface.md)[![Lambda Function](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/2-locked._TTH_.png)](./2-lambda-function.md)[![Connect VUI to Code](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/3-locked._TTH_.png)](./3-connect-vui-to-code.md)[![Testing](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/4-locked._TTH_.png)](./4-testing.md)[![Customization](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/5-on._TTH_.png)](./5-customization.md)[![Publication](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/6-off._TTH_.png)](./6-publication.md)

## Customize the Skill to be Yours

At this point, you should have a working copy of our Berry Bash skill. In order to make it your own, you will need to customize it with data and responses that you create.  Here are the things you will need to change:

1.  **New data.** You can create a new dataset for your skill that *isn't* related to berries. In fact, if you have the relevant information and pictures, you can change it however you like!

    1.  **Open a copy of index.js.** If you haven't already downloaded the code for this project, [you can find a copy of index.js here on GitHub](../lambda/custom/index.js).  You can use a simple, lightweight code editor like [Atom](http://atom.io), [Sublime Text](http://sublimetext.com), or [VSCode](http://code.visualstudio.com), but you also have the option to edit the code directly in your Lambda function.

    2.  **Search for the comment "1. Static strings"**  Below this is the data used for our skill. You can see that there are different variables for different parts of the skill. Focus on the big table of data in the '**topicData** array, pick a cateogry (food, sports, cities, whatever) and swap your own resources in. Feel free to add more entries, or take some away if you like. **Because of the quiz length (which you can also change if you want), you'll need at least 5 values in the array, each with a name, image URL and description.**
    
    <img src="https://s3.eu-west-2.amazonaws.com/jgsound/cookbookimages/topicData.PNG"/>
    
    3.  **Add the new values to your interaction model**  You'll notice that we have a custom slot type consisting of our berry names. If you take these out in the code as mentioned above and place in your own data names, you should also replace these in the custom slot to ensuer Alexa understands what the user is after. Alternatively, you can use a built-in slot type. **And don't forget to rebuild!**
    
    4.  **Experiment with render template types**  The code at the moment uses a few types of body templates and list templates, but you can see that we have quite the selection available over [here](https://developer.amazon.com/docs/custom-skills/display-interface-reference.html). If you search for the functions 'bodyTemplateMaker' and 'listTemplateMaker', you can see where these functions are called in the code and make adjustments as needed. These functions are custom make to help render these templates.

    5.  **Consider using built-in slot values.** As mentioned above, we recommend considering data from the built-in slot values provided by Amazon.  You still need to build your entire dataset, but using values from the built-in slots will make your work in the next few steps easier.  We have provided a few examples below, but you can see the [entire list of built-in slot values here](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/slot-type-reference#list-types).

        | Slot Name | Description | Sample Values | Supported Languages |
        | --------- | ----------- | ------------- | ------------------- |
        | [AMAZON.Actor](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/slot-type-reference#actor) | Names of actors and actresses | Alan Rickman, Amy Adams, Daniel Radcliffe, Emma Watson | US |
        | [AMAZON.Airline](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/slot-type-reference#airline) | Name of a variety of airlines | Alaska Airlines, British Airways, Dolphin Air, Maestro | US |
        | [AMAZON.Animal](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/slot-type-reference#animal) | Names of many different animals | blister beetle, common frog, moray eel, opossum, spider monkey | US |
        | [AMAZON.Comic](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/slot-type-reference#comic) | Titles of comic books | Justice League, Runaways, The Amazing Spiderman, Watchmen, X-Men | US |
        | [AMAZON.EUROPE_CITY](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/slot-type-reference#europe_city) | European and world cities | Kempten, Lourdes, Paris, London, Barcelona | US, UK, DE |
        | [AMAZON.Sport](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/slot-type-reference#sport) | Names of sports | basketball, college football, football, gymnastics, team handball | US |
        | [AMAZON.VideoGame](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/slot-type-reference#videogame) | Titles of video games | Doom Two, Lemmings, The Sims, Worms | US |

    4.  **When you have replaced the data in index.js, copy the contents of your file to your Lambda function.**  This should be as simple as copying the text, and pasting it into the code box for your Lambda.

2.  **New language.** If you are creating this skill for another language other than English, you will need to make sure Alexa's responses are also in that language.

    *  For example, if you are creating your skill in German, every single response that Alexa makes has to be in German.  You can't use English responses or your skill will fail certification.

<a href="./6-publication.md"><img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/buttons/button_next_publication._TTH_.png" /></a>

<img height="1" width="1" src="https://www.facebook.com/tr?id=1847448698846169&ev=PageView&noscript=1"/>
