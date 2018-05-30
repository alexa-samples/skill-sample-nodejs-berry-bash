# Quickly Build A Multi Modal Quiz & Dictionary Alexa Skill
[![Voice User Interface](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/1-on._TTH_.png)](./1-voice-user-interface.md)[![Lambda Function](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/2-off._TTH_.png)](./2-lambda-function.md)[![Connect VUI to Code](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/3-off._TTH_.png)](./3-connect-vui-to-code.md)[![Testing](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/4-off._TTH_.png)](./4-testing.md)[![Customization](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/5-off._TTH_.png)](./5-customization.md)[![Publication](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/6-off._TTH_.png)](./6-publication.md)

## Setting up Your Voice User Interface

There are two parts to an Alexa skill.  The first part is the [Voice User Interface (VUI)](https://developer.amazon.com/alexa-skills-kit/vui). This is where we define how we will handle a user's voice input, and which code should be executed when specific commands are uttered.  The second part is the actual code logic for our skill, and we will handle that in [the next step](///////////////////////) of this step-by-step guide.

1.  **Go to the [Amazon Developer Portal](http://developer.amazon.com).  In the top-right corner of the screen, click the "Sign In" button.** </br>(If you don't already have an account, you will be able to create a new one for free.)

    <a href="http://developer.amazon.com" target="_new"><img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/1-1-developer-portal._TTH_.png" /></a>

2.  **Once you have signed in, click the Alexa button at the top of the screen.**

    <a href="https://developer.amazon.com/edw/home.html#/" target="_new"><img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/1-2-alexa-button._TTH_.png" /></a>

3.  **On the Alexa page, select 'Create Skill'.**

    <a href="https://developer.amazon.com/edw/home.html#/skills/list" target="_new"><img src="https://s3.eu-west-2.amazonaws.com/jgsound/cookbookimages/create_skill.PNG" /></a>

4.  **Fill out a skill name (leave locale to US)**  

    <img src="https://s3.eu-west-2.amazonaws.com/jgsound/cookbookimages/skill_name.PNG" />
   
5.  **For skill type, select Custom Skill**

    <img src="https://s3.eu-west-2.amazonaws.com/jgsound/cookbookimages/custom_skill.PNG" />

6.  **Set an invocation name for our skill**

This is the name that your users will need to say to start your skill.  We have provided some common issues developers encounter in the list below, but you should also review the entire [Invocation Name Requirements](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/choosing-the-invocation-name-for-an-alexa-skill).

        | Invocation Name Requirements | Examples of incorrect invocation names |
        | ---------------------------- | -------------------------------------- |
        | The skill invocation name must not infringe upon the intellectual property rights of an entity or person. | korean air; septa check |
        | Invocation names should be more than one word (unless it is a brand or intellectual property), and must not be a name or place | horoscope; trivia; guide; new york |
        | Two word invocation names are not allowed when one of the words is a definite article, indefinite article, or a preposition | any poet; the bookie; the fool |
        | The invocation name must not contain any of the Alexa skill launch phrases and connecting words.  Launch phrase examples include "launch," "ask," "tell," "load," and "begin."  Connecting word examples include "to," "from," "by," "if," "and," "whether." | trivia game for star wars; better with bacon |
        | The invocation name must not contain the wake words "Alexa," "Amazon," "Echo," or the words "skill" or "app." | hackster initial skill; word skills |
        | The invocation name must be written in each language you choose to support.  For example, the German version of your skill must have an invocation name written in German, while the English (US) version must have an invocation name written in English. | kitchen stories (German skill) |
        
When you have one, select invocation name on the left menu, and input your invocation name in the provided box.

<img src="https://s3.eu-west-2.amazonaws.com/jgsound/cookbookimages/invoca.PNG" />

7.  **Enable the Render Template directive for your skill**

    <img src="https://s3.eu-west-2.amazonaws.com/jgsound/cookbookimages/displayin.png" />

You should see a bunch of built-in intent types added to your interaction model. This is normal!

8.  **Copy the interaction model from this template into your skill**.

Select **JSON Editor** to the left and you should be presented with an input box.

<img src="https://s3.eu-west-2.amazonaws.com/jgsound/cookbookimages/jsonE.PNG" />

In the textfield provided, replace the existing code with the code provided in the [Interaction Model](../models), then click "Save Model" & "Build Model".  

9. Add some more sample utterances for your newly generated intents if you like (selectable on the left).  These are the things a user would say to make a specific intent happen. 

<img src="https://s3.eu-west-2.amazonaws.com/jgsound/cookbookimages/utterances.PNG" />

Don't forget to select **Save Model** if you add any new ones.

10. Double check you've got everything by clicking on the **Save Model** button, and then click on the **Build Model** button.

<img src="https://s3.eu-west-2.amazonaws.com/jgsound/cookbookimages/build_save.PNG" />
   
Ready to move on? Lets look at how we get our Alexa Skill to respond!
<br/><br/>
[![Next: Lambda Function](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/buttons/button_next_lambda_function._TTH_.png)](./2-lambda-function.md)

<img height="1" width="1" src="https://www.facebook.com/tr?id=1847448698846169&ev=PageView&noscript=1"/>
