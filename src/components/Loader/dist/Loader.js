"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
var react_spinners_1 = require("react-spinners");
var Loader = function () {
    return (React.createElement(framer_motion_1.motion.div, { style: {
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '10px',
            marginTop: '10px'
        } },
        React.createElement(react_spinners_1.BeatLoader, { size: "10px", color: "gray" })));
};
exports["default"] = Loader;
