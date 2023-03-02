"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.letter = exports.digit = exports.or = exports.optional = exports.nonCapturingGroup = exports.group = exports.sequence = exports.unescapedLiteral = exports.literal = void 0;
const RegexLiteral_1 = require("./RegexLiteral");
const RegexSequence_1 = require("./RegexSequence");
const Group_1 = require("./Group");
const Optional_1 = require("./Optional");
const Or_1 = require("./Or");
/**
 * These are some comfortable shorthands for nicer coding :)
 */
const literal = (regexString) => {
    return (0, RegexLiteral_1.regexLiteral)(regexString, { escapeSpecialCharacters: true });
};
exports.literal = literal;
const unescapedLiteral = (regexString) => {
    return (0, RegexLiteral_1.regexLiteral)(regexString, { escapeSpecialCharacters: false });
};
exports.unescapedLiteral = unescapedLiteral;
const sequence = (...components) => {
    return (0, RegexSequence_1.regexSequence)(...components);
};
exports.sequence = sequence;
const group = (regex, groupName) => {
    return (0, Group_1.group)(regex, groupName);
};
exports.group = group;
const nonCapturingGroup = (regex) => {
    return (0, Group_1.nonCapturing)(regex);
};
exports.nonCapturingGroup = nonCapturingGroup;
const optional = (regex) => {
    return (0, Optional_1.optional)(regex);
};
exports.optional = optional;
const or = (...components) => {
    return (0, Or_1.or)(...components);
};
exports.or = or;
// More specific stuff (might be controversial)
const digit = () => {
    return (0, RegexLiteral_1.anyDigit)();
};
exports.digit = digit;
const letter = () => {
    return (0, RegexLiteral_1.anyLetter)();
};
exports.letter = letter;
//# sourceMappingURL=Regex.js.map