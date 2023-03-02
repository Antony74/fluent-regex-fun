"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.or = exports.nonCapturing = exports.group = void 0;
const RegexComponent_1 = require("./RegexComponent");
const Or_1 = require("./Or");
const Regex_1 = require("./Regex");
const RegexLiteral_1 = require("./RegexLiteral");
const group = (regex, groupName) => groupWithState({ nonCapturing: false }, regex, groupName);
exports.group = group;
const groupWithState = (state, regex, groupName) => {
    const groupNameValidator = /^[a-zA-Z][a-zA-Z0-9]*$/; // Yo Dawg, I heard you like regexes in your regex framework, so I put a regex in the regex framework so you can validate the regex your regex framework creates
    if (groupName) {
        if (!groupNameValidator.test(groupName))
            throw `Invalid group name '${groupName}'.\nA group name can contain letters and numbers but must start with a letter.`;
    }
    const regexStringCallback = (baseComponent) => {
        const regexString = regex.toRegexString();
        const quantifier = baseComponent.getRegexQuantifier();
        if (state.nonCapturing)
            return `(?:${regexString})${quantifier}`;
        if (groupName)
            return `(?<${groupName}>${regexString})${quantifier}`;
        return `(${regexString})${quantifier}`;
    };
    const component = Object.assign(Object.assign({}, (0, RegexComponent_1.regexComponent)({ regexStringCallback })), { exclude: (negatedComponent) => {
            return groupWithState(state, (0, Regex_1.sequence)((0, RegexLiteral_1.regexLiteral)('(?!', { escapeSpecialCharacters: false }), negatedComponent, (0, RegexLiteral_1.regexLiteral)(')', { escapeSpecialCharacters: false }), regex));
        } });
    const aggregatedComponent = Object.assign(Object.assign({}, component), { onceOrMore: () => {
            return Object.assign({ exclude: component.exclude }, component.onceOrMore());
        } });
    return aggregatedComponent;
};
const nonCapturing = (regex) => {
    return groupWithState({ nonCapturing: true }, regex);
};
exports.nonCapturing = nonCapturing;
const or = (...components) => {
    return (0, Or_1.or)(...components);
};
exports.or = or;
//# sourceMappingURL=Group.js.map