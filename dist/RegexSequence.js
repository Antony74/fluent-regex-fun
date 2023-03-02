"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexSequence = void 0;
const RegexComponent_1 = require("./RegexComponent");
const RegexLiteral_1 = require("./RegexLiteral");
const regexSequence = (...components) => regexSequenceWithState({ beginning: false, end: false }, ...components);
exports.regexSequence = regexSequence;
const regexSequenceWithState = (state, ...components) => {
    const regexComponents = components.map((r) => {
        if (typeof r === 'string')
            return (0, RegexLiteral_1.regexLiteral)(r);
        return r;
    });
    const regexStringCallback = (baseComponent = component) => {
        const startsWith = state.beginning ? '^' : '';
        const endsWith = state.end ? '$' : '';
        const finalRegex = regexComponents
            .map((r) => {
            return r.toRegexString();
        })
            .join('');
        if (!baseComponent.getRegexQuantifier())
            return `${startsWith}${finalRegex}${endsWith}`;
        return `${startsWith}(${finalRegex})${baseComponent.getRegexQuantifier()}${endsWith}`;
    };
    const component = Object.assign(Object.assign({}, (0, RegexComponent_1.regexComponent)({ regexStringCallback })), { startsWith: () => {
            return regexSequenceWithState(Object.assign(Object.assign({}, state), { beginning: true }), ...components);
        }, endsWith: () => {
            return regexSequenceWithState(Object.assign(Object.assign({}, state), { end: true }), ...components);
        } });
    return component;
};
//# sourceMappingURL=RegexSequence.js.map