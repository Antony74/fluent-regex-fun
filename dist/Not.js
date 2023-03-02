"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.not = void 0;
const RegexComponent_1 = require("./RegexComponent");
const not = (regex) => {
    const regexStringCallback = (baseComponent) => {
        return `[^${regex.toRegexString()}]${baseComponent.getRegexQuantifier()}`;
    };
    const component = Object.assign({}, (0, RegexComponent_1.regexComponent)({ regexStringCallback }));
    return component;
};
exports.not = not;
//# sourceMappingURL=Not.js.map