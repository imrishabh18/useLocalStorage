"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

const useLocalStorage = (defaultVal, key) => {
  const [value, setValue] = (0, _react.useState)(() => {
    const tempValue = window.localStorage.getItem(key);
    return tempValue !== null ? JSON.parse(tempValue) : defaultVal;
  });
  (0, _react.useEffect)(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue];
};

var _default = useLocalStorage;
exports.default = _default;