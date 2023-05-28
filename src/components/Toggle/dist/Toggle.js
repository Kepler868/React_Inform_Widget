"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
var fa_1 = require("react-icons/fa");
var toggle_module_scss_1 = require("./toggle.module.scss");
var classNames_1 = require("classNames");
var Toggle = function (_a) {
    var toggle = _a.toggle, containerActive = _a.containerActive;
    return (React.createElement(framer_motion_1.motion.button, { onClick: toggle, className: classNames_1["default"](toggle_module_scss_1["default"].toggle), whileHover: { scale: 1.2 } }, containerActive ? (React.createElement("p", { className: toggle_module_scss_1["default"].toggle_close }, "+")) : (React.createElement(fa_1.FaRegComment, { className: toggle_module_scss_1["default"].toggle_open, size: "25px", color: "white" }))));
};
exports["default"] = Toggle;
