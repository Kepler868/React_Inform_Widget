"use strict";
exports.__esModule = true;
exports.useLocalStorage = void 0;
var react_1 = require("react");
function useLocalStorage(key, initialValue) {
    var _a = react_1.useState(function () {
        var storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue;
    }), value = _a[0], setValue = _a[1];
    react_1.useEffect(function () {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);
    return [value, setValue];
}
exports.useLocalStorage = useLocalStorage;
