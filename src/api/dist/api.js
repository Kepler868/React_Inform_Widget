"use strict";
exports.__esModule = true;
exports.$api = exports.$readyEuid = exports.$uuid = exports.API_URL = void 0;
var axios_1 = require("axios");
exports.API_URL = 'https://biz.nanosemantics.ru/api/2.1/json';
exports.$uuid = '772c9859-4dd3-4a0d-b87d-d76b9f43cfa4';
exports.$readyEuid = '00b2fcbe-f27f-437b-a0d5-91072d840ed3';
exports.$api = axios_1["default"].create({
    baseURL: exports.API_URL
});
