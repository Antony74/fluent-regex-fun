"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.or = void 0;
const RegexComponent_1 = require("./RegexComponent");
const RegexLiteral_1 = require("./RegexLiteral");
const or = (...components) => orWithState({ groupName: '' }, ...components);
exports.or = or;
const orWithState = (state, ...components) => {
    const regexComponents = components.map((r) => {
        if (typeof r === 'string')
            return (0, RegexLiteral_1.regexLiteral)(r);
        return r;
    });
    const regexStringCallback = (baseComponent) => {
        const name = state.groupName ? `?<${state.groupName}>` : '';
        return `(${name}${regexComponents
            .map((r) => r.toRegexString())
            .join('|')})${baseComponent.getRegexQuantifier()}`;
    };
    const component = Object.assign(Object.assign({}, (0, RegexComponent_1.regexComponent)({ regexStringCallback })), { withGroupName: (groupName) => {
            return orWithState({ groupName }, ...components);
        } });
    return component;
};
