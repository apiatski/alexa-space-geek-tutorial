'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.echo-sdk-ams.app.d7650079-b5f7-44b0-9736-9253907afedd";
 //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Bonner Facts';

/**
 * Array containing space facts.
 */
var FACTS = [
    "Matthew Robert Bonner (born April 5, 1980) is an American retired professional basketball player. . ",
    "Bonner played college basketball for the University of Florida before being selected by the Chicago Bulls with the 45th overall pick in the 2003 NBA draft. ",
    "Born in Concord, New Hampshire, Bonner attended Concord High School, where he helped lead them to three state championships. Bonner was also the Valedictorian of his graduating class.",
    "Bonner graduated with a bachelor's degree, with high honors, in business administration and a 3.96 grade point average (GPA). ",
    "He won Academic All-American of the Year for the sport of basketball in both 2002 and 2003.",
    "Bonner and his wife Nadia have one daughter, Evangeline-Vesper Lynne Bonner (born June 21, 2009) and one son, August Bonner (born August 27, 2012).",
    "Bonner applied for Canadian citizenship in February 2009.",
    "He has a younger brother, Luke, who was also a professional basketball player. Luke served as Matt's best man at his wedding",
    "Bonner is a sandwich enthusiast. He has a blog titled The Sandwich Hunter: The Quest for the Hoagie Grail in which he documents his search for the world's best sandwich.",
    'During his tenure with the Toronto Raptors, he received the nickname the "Red Rocket" for his red hair and constant use of the public transit in Toronto, the Toronto Transit Commission, whose slogan is "Ride the Rocket."',
    "Kobe Bryant coined Bonner's other nickname, the 'Red Mamba', on Twitter while live-tweeting during a televised replay of his 81-point game against the Toronto Raptors.",
    "After his contract with New Balance expired, Bonner signed a basketball shoe deal with Adidas in January 2014",    
    "Bonner and his brother Luke run a nonprofit organization called the Rock On Foundation, in which they look to support community involvement in arts and athletics.",
    "In March 2016, Bonner was featured on the season premiere episode of FYI's Tiny House Nation, where he and his wife Nadia had a 276 sq. foot house custom built. ",
    "On June 15, 2014, Bonner won his second NBA championship after the Spurs defeated the Miami Heat 4–1 in the 2014 NBA Finals. On July 21, 2014, Bonner re-signed with the Spurs,",
    "After a social media campaign from his brother Luke, Bonner participated in the 2013 NBA Three-Point Shootout during All-Star Weekend. He recorded a score of 19 in the first round to knock out Ryan Anderson (18) and Stephen Curry (17) and advanced to the final where he lost 20-23 to Kyrie Irving. Later that year, Bonner and the Spurs reached the NBA Finals where they lost to the Miami Heat in seven games.",
    "In July 2010, Bonner again re-signed with the Spurs on a multi-year deal. He went on to lead the NBA in three-point field goal percentage for 2010–11 after he shot 45.7%.",
    "In July 2007, Bonner re-signed with the Spurs on a three-year deal. On December 11, 2007, in a loss to the Golden State Warriors, Bonner recorded career-highs of 25 points and 17 rebounds.",

];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a bonner fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};