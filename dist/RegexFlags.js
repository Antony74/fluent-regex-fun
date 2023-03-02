"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegexFlags = void 0;
// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
var RegexFlags;
(function (RegexFlags) {
    RegexFlags["GLOBAL"] = "g"; /** Find all matches rather than stopping after the first */
    RegexFlags["IGNORE_CASE"] = "i"; /** Ignore case. If 'u' flag is also enabled, use unicode case folding */
    RegexFlags["MULTILINE"] = "m"; /** Treat beginning and end characters (^ and $) as working over multiple lines */
    RegexFlags["UNICODE"] = "u"; /** Treat pattern as a sequence of unicode code points */
    RegexFlags["STICKY"] = "y"; /** matches only from the index indicated by the 'lastIndex' property of this regular expression in the target string */
})(RegexFlags = exports.RegexFlags || (exports.RegexFlags = {}));
