"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
var BotMessage_1 = require("./BotMessage");
var UserMessage_1 = require("./UserMessage");
var MessagesList = function (_a) {
    var messagesData = _a.messagesData, setShouldAnimate = _a.setShouldAnimate;
    return (React.createElement("div", null, messagesData.map(function (message) {
        if (message.typeMessage === 'bot') {
            return (React.createElement(framer_motion_1.motion.div, { layout: true, key: message.id, initial: message.shouldAnimate ? { opacity: 0 } : { opacity: 1 }, animate: message.shouldAnimate ? { opacity: 1 } : { opacity: 1 }, transition: { duration: 0.3 }, onAnimationComplete: function () { return setShouldAnimate(message.id); } },
                React.createElement(BotMessage_1["default"], { messageData: message })));
        }
        else {
            return (React.createElement(framer_motion_1.motion.div, { layout: true, key: message.id, initial: message.shouldAnimate ? { opacity: 0 } : { opacity: 1 }, animate: message.shouldAnimate ? { opacity: 1 } : { opacity: 1 }, transition: { duration: 0.3 }, onAnimationComplete: function () { return setShouldAnimate(message.id); } },
                React.createElement(UserMessage_1["default"], { messageData: message })));
        }
    })));
};
exports["default"] = MessagesList;
