"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.not = exports.group = exports.optional = exports.or = exports.regexSequence = exports.regexLiteral = exports.Regex = void 0;
const RegexLiteral_1 = require("./RegexLiteral");
Object.defineProperty(exports, "regexLiteral", { enumerable: true, get: function () { return RegexLiteral_1.regexLiteral; } });
const RegexSequence_1 = require("./RegexSequence");
Object.defineProperty(exports, "regexSequence", { enumerable: true, get: function () { return RegexSequence_1.regexSequence; } });
const Group_1 = require("./Group");
Object.defineProperty(exports, "group", { enumerable: true, get: function () { return Group_1.group; } });
const Optional_1 = require("./Optional");
Object.defineProperty(exports, "optional", { enumerable: true, get: function () { return Optional_1.optional; } });
const Or_1 = require("./Or");
Object.defineProperty(exports, "or", { enumerable: true, get: function () { return Or_1.or; } });
const Regex = __importStar(require("./Regex"));
exports.Regex = Regex;
const Not_1 = require("./Not");
Object.defineProperty(exports, "not", { enumerable: true, get: function () { return Not_1.not; } });
