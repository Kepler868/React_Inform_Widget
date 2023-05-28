"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var useLocalStorage_1 = require("../../hooks/useLocalStorage");
var InfService_1 = require("../../services/InfService");
var Layout_1 = require("../Layout/Layout");
var Toggle_1 = require("../Toggle/Toggle");
var widget_module_scss_1 = require("./widget.module.scss");
var Widget = function () {
    var _a = react_1.useState(false), containerActive = _a[0], setContainerActive = _a[1];
    var _b = useLocalStorage_1.useLocalStorage('messages', []), messages = _b[0], setMessages = _b[1];
    var _c = useLocalStorage_1.useLocalStorage('cuid', ''), cuid = _c[0], setCuid = _c[1];
    var _d = useLocalStorage_1.useLocalStorage('initialized', false), initialized = _d[0], setInitialized = _d[1];
    var _e = react_1.useState(false), loaderActive = _e[0], setLoaderActive = _e[1];
    var toggle = function () {
        setContainerActive(!containerActive);
    };
    var fetchInit = function () { return __awaiter(void 0, void 0, Promise, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(!cuid || !localStorage.getItem('cuid'))) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, InfService_1["default"].init()];
                case 2:
                    response = _a.sent();
                    data = response.data;
                    localStorage.getItem('cuid') === data.result.cuid
                        ? undefined
                        : setCuid(data.result.cuid);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var fetchReadyEvent = function (cuid) { return __awaiter(void 0, void 0, void 0, function () {
        var response, data_1, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(cuid && !initialized)) return [3 /*break*/, 5];
                    setLoaderActive(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, InfService_1["default"].eventReady(cuid)];
                case 2:
                    response = _a.sent();
                    data_1 = response.data;
                    setInitialized(true);
                    setMessages(function (prev) { return __spreadArrays(prev, [
                        {
                            text: data_1.result.text.value,
                            typeMessage: 'bot',
                            id: data_1.result.id,
                            shouldAnimate: false
                        },
                    ]); });
                    localStorage.getItem('cuid') === data_1.result.cuid
                        ? undefined
                        : setCuid(data_1.result.cuid);
                    return [3 /*break*/, 5];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 5];
                case 4:
                    setLoaderActive(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        fetchInit();
    }, []);
    react_1.useEffect(function () {
        fetchReadyEvent(cuid);
    }, [cuid]);
    return (React.createElement("div", { className: widget_module_scss_1["default"].widget },
        containerActive && (React.createElement(Layout_1["default"], { toggle: toggle, avatar: '', title: 'Инф', fetchInit: fetchInit, messages: messages, setMessages: setMessages, fetchReadyEvent: fetchReadyEvent, setInitialized: setInitialized, loaderActive: loaderActive, setLoaderActive: setLoaderActive })),
        React.createElement(Toggle_1["default"], { toggle: toggle, containerActive: containerActive })));
};
exports["default"] = Widget;
