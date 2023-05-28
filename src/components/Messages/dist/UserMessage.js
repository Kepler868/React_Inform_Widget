"use strict";
exports.__esModule = true;
var react_1 = require("react");
var message_module_scss_1 = require("./message.module.scss");
var UserMessage = function (_a) {
    var messageData = _a.messageData;
    return (react_1["default"].createElement("div", { className: message_module_scss_1["default"].user },
        react_1["default"].createElement("div", { className: message_module_scss_1["default"].user_message }, messageData.text)));
};
exports["default"] = UserMessage;
