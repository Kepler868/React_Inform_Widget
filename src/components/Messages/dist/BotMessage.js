"use strict";
exports.__esModule = true;
var bs_1 = require("react-icons/bs");
var message_module_scss_1 = require("./message.module.scss");
var BotMessage = function (_a) {
    var messageData = _a.messageData;
    var createMarkup = function (html) {
        return { __html: html };
    };
    var formattedData = createMarkup(messageData.text);
    return (React.createElement("div", { className: message_module_scss_1["default"].bot },
        React.createElement(bs_1.BsRobot, { className: message_module_scss_1["default"].bot_avatar, size: "20px", color: "#0c6dc9" }),
        React.createElement("div", { className: message_module_scss_1["default"].bot_message, dangerouslySetInnerHTML: formattedData })));
};
exports["default"] = BotMessage;
