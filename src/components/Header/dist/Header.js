"use strict";
exports.__esModule = true;
var bs_1 = require("react-icons/bs");
var header_module_scss_1 = require("./header.module.scss");
var Header = function (_a) {
    var avatar = _a.avatar, title = _a.title, toggle = _a.toggle;
    return (React.createElement("div", { className: header_module_scss_1["default"].header },
        React.createElement("span", { className: header_module_scss_1["default"].header_img },
            React.createElement(bs_1.BsRobot, { size: "35px", color: "white" })),
        React.createElement("p", { className: header_module_scss_1["default"].header_text }, title),
        React.createElement("button", { onClick: toggle, className: header_module_scss_1["default"].header_button }, "+")));
};
exports["default"] = Header;
