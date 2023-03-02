"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optional = void 0;
const RegexComponent_1 = require("./RegexComponent");
const RegexLiteral_1 = require("./RegexLiteral");
const optional = (regex) => {
    const innerRegex = typeof regex === 'string' ? (0, RegexLiteral_1.regexLiteral)(regex) : regex;
    const regexStringCallback = () => {
        return `(${innerRegex.toRegexString()})?`;
    };
    const component = Object.assign({}, (0, RegexComponent_1.regexComponent)({ regexStringCallback }));
    return component;
};
exports.optional = optional;
