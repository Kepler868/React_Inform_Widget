"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var Header_1 = require("../Header/Header");
var MessagesList_1 = require("../Messages/MessagesList");
var layout_module_scss_1 = require("./layout.module.scss");
var bs_1 = require("react-icons/bs");
var useLocalStorage_1 = require("../../hooks/useLocalStorage");
var InfService_1 = require("../../services/InfService");
var react_uuid_1 = require("react-uuid");
var Loader_1 = require("../Loader/Loader");
var Layout = function (_a) {
    var toggle = _a.toggle, avatar = _a.avatar, title = _a.title, fetchInit = _a.fetchInit, fetchReadyEvent = _a.fetchReadyEvent, setInitialized = _a.setInitialized, messages = _a.messages, setMessages = _a.setMessages, loaderActive = _a.loaderActive, setLoaderActive = _a.setLoaderActive;
    var _b = react_1.useState(''), messageInput = _b[0], setMessageInput = _b[1];
    var _c = useLocalStorage_1.useLocalStorage('cuid', ''), cuid = _c[0], setCuid = _c[1];
    var _d = react_1.useState('key'), messageKey = _d[0], setMessageKey = _d[1];
    var messagesListRef = react_1.useRef(null);
    var handleKeyPress = function (e) {
        if (e.key === 'Enter' && messageInput.trim()) {
            handleClick();
        }
    };
    var handleClick = function () { return __awaiter(void 0, void 0, Promise, function () {
        var response, data_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(cuid && messageInput.trim() != '')) return [3 /*break*/, 6];
                    setLoaderActive(true);
                    setMessages(function (prev) { return __spreadArrays(prev, [
                        {
                            text: messageInput.trim(),
                            typeMessage: 'user',
                            id: react_uuid_1["default"](),
                            shouldAnimate: true
                        },
                    ]); });
                    setMessageKey(react_uuid_1["default"]());
                    setMessageInput('');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, InfService_1["default"].request({
                            cuid: cuid,
                            text: messageInput.trim()
                        })];
                case 2:
                    response = _a.sent();
                    data_1 = response.data;
                    setMessages(function (prev) { return __spreadArrays(prev, [
                        {
                            text: data_1.result.text.value,
                            typeMessage: 'bot',
                            id: react_uuid_1["default"](),
                            shouldAnimate: true
                        },
                    ]); });
                    setMessageKey(react_uuid_1["default"]());
                    localStorage.getItem('cuid') === data_1.result.cuid
                        ? undefined
                        : setCuid(data_1.result.cuid);
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 5];
                case 4:
                    setLoaderActive(false);
                    return [7 /*endfinally*/];
                case 5: return [3 /*break*/, 7];
                case 6:
                    setMessageInput('');
                    _a.label = 7;
                case 7: return [2 /*return*/];
            }
        });
    }); };
    var handleChange = function (e) {
        setMessageInput(e.target.value);
    };
    var handleBlur = function () {
        messageInput.trim() === '' && setMessageInput('');
    };
    var handleDeleteChat = function () { return __awaiter(void 0, void 0, Promise, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    localStorage.clear();
                    return [4 /*yield*/, setMessages([])];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, setInitialized(false)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, fetchInit()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, fetchReadyEvent(cuid)];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        if (messagesListRef.current) {
            messagesListRef.current.scrollTop = messagesListRef.current.scrollHeight;
        }
    }, [messages]);
    var setShouldAnimate = function (messageId) {
        if (localStorage.getItem('cuid')) {
            setMessages(messages.map(function (message) {
                if (message.id === messageId) {
                    return __assign(__assign({}, message), { shouldAnimate: false });
                }
                return message;
            }));
        }
    };
    return (react_1["default"].createElement(framer_motion_1.AnimatePresence, null,
        react_1["default"].createElement(framer_motion_1.motion.div, { className: layout_module_scss_1["default"].layout, layout: true, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.5 } },
            react_1["default"].createElement(Header_1["default"], { avatar: avatar, title: title, toggle: toggle }),
            react_1["default"].createElement("div", { key: messageKey, ref: messagesListRef, className: layout_module_scss_1["default"].layout_messagesList },
                react_1["default"].createElement(framer_motion_1.AnimatePresence, null,
                    react_1["default"].createElement(MessagesList_1["default"], { messagesData: messages, setShouldAnimate: setShouldAnimate }),
                    loaderActive && react_1["default"].createElement(Loader_1["default"], null))),
            react_1["default"].createElement("div", { onKeyDown: handleKeyPress, className: layout_module_scss_1["default"].layout_sendMessage },
                react_1["default"].createElement("textarea", { placeholder: "\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u043F\u0438\u0441\u0430\u0442\u044C...", value: messageInput, onChange: handleChange, onBlur: handleBlur }),
                react_1["default"].createElement(bs_1.BsFillSendFill, { onClick: handleClick, className: messageInput.trim() !== '' ? layout_module_scss_1["default"].icon__visible : layout_module_scss_1["default"].icon, color: "#1890ff", size: "26px" })),
            messages.length > 1 && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { height: 0 }, animate: { height: 'auto' }, exit: { height: 0 }, className: layout_module_scss_1["default"].deleting },
                react_1["default"].createElement("button", { onClick: handleDeleteChat, className: layout_module_scss_1["default"].deleting_button }, "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0438\u0441\u0442\u043E\u0440\u0438\u044E"))))));
};
exports["default"] = Layout;
