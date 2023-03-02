"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anyCharacterExceptNewline = exports.anyNonWordCharacter = exports.anyWordCharacter = exports.anyNonWhitespace = exports.anyWhitespace = exports.anyLetter = exports.anyNonDigit = exports.anyDigit = exports.regexLiteral = void 0;
const RegexComponent_1 = require("./RegexComponent");
const defaultConfig = {
    escapeSpecialCharacters: true,
};
const regexLiteral = (regexString, { escapeSpecialCharacters } = defaultConfig) => {
    const regexEscapeCharacters = /\.|\^|\$|\*|\+|\?|\(|\)|\[|\{|\}|\\|\|/g;
    if (escapeSpecialCharacters)
        regexString = regexString.replace(regexEscapeCharacters, '\\$&');
    const regexStringCallback = (baseComponent) => {
        const q = baseComponent.getRegexQuantifier();
        if (!baseComponent.needsWrapping(regexString))
            return `${regexString}${q}`;
        return `(${regexString})${q}`;
    };
    const component = Object.assign({}, (0, RegexComponent_1.regexComponent)({ regexStringCallback }));
    return component;
};
exports.regexLiteral = regexLiteral;
const anyDigit = () => {
    return (0, exports.regexLiteral)('\\d', { escapeSpecialCharacters: false });
};
exports.anyDigit = anyDigit;
const anyNonDigit = () => {
    return (0, exports.regexLiteral)('\\D', { escapeSpecialCharacters: false });
};
exports.anyNonDigit = anyNonDigit;
const anyLetter = () => {
    return (0, exports.regexLiteral)('[a-zA-Z]', { escapeSpecialCharacters: false });
};
exports.anyLetter = anyLetter;
const anyWhitespace = () => {
    return (0, exports.regexLiteral)('\\s', { escapeSpecialCharacters: false });
};
exports.anyWhitespace = anyWhitespace;
const anyNonWhitespace = () => {
    return (0, exports.regexLiteral)('\\S', { escapeSpecialCharacters: false });
};
exports.anyNonWhitespace = anyNonWhitespace;
const anyWordCharacter = () => {
    return (0, exports.regexLiteral)('\\w', { escapeSpecialCharacters: false });
};
exports.anyWordCharacter = anyWordCharacter;
const anyNonWordCharacter = () => {
    return (0, exports.regexLiteral)('\\W', { escapeSpecialCharacters: false });
};
exports.anyNonWordCharacter = anyNonWordCharacter;
const anyCharacterExceptNewline = () => {
    return (0, exports.regexLiteral)('.', { escapeSpecialCharacters: false });
};
exports.anyCharacterExceptNewline = anyCharacterExceptNewline;
