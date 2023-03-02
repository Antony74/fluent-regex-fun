"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexComponent = void 0;
const regexComponent = (props) => regexComponentWithState(Object.assign(Object.assign({}, props), { regexQuantifier: '' }));
exports.regexComponent = regexComponent;
const regexComponentWithState = (state) => {
    const assertSingleQuantifier = () => {
        if (state.regexQuantifier)
            throw `Only a single quantifier can be used.\nYou already defined a quantifier for this component (${state.regexQuantifier})`;
    };
    const component = {
        getRegexQuantifier() {
            return state.regexQuantifier;
        },
        optional: () => {
            assertSingleQuantifier();
            const regexQuantifier = '?';
            return regexComponentWithState(Object.assign(Object.assign({}, state), { regexQuantifier }));
        },
        onceOrMore: () => {
            assertSingleQuantifier();
            const regexQuantifier = '+';
            return regexComponentWithState(Object.assign(Object.assign({}, state), { regexQuantifier }));
        },
        zeroOrMore: () => {
            assertSingleQuantifier();
            const regexQuantifier = '*';
            return regexComponentWithState(Object.assign(Object.assign({}, state), { regexQuantifier }));
        },
        exactAmount: (amount) => {
            assertSingleQuantifier();
            const regexQuantifier = '{' + amount + '}';
            return regexComponentWithState(Object.assign(Object.assign({}, state), { regexQuantifier }));
        },
        atLeastAmount: (amount) => {
            assertSingleQuantifier();
            const regexQuantifier = `{${amount},}`;
            return regexComponentWithState(Object.assign(Object.assign({}, state), { regexQuantifier }));
        },
        rangeAmount: (min, max) => {
            assertSingleQuantifier();
            const regexQuantifier = `{${min},${max}}`;
            return regexComponentWithState(Object.assign(Object.assign({}, state), { regexQuantifier }));
        },
        upToAmount: (amount) => {
            return component.rangeAmount(1, amount);
        },
        needsWrapping: (regexString) => {
            if (regexString.length === 1)
                return false;
            // This will catch strings that are wrapped in squared brackets
            // it will catch [xxxx] and fail on this [xxx][xxx]
            // but it will also fail on this: [xxx[x]xxx] // TODO: fix this!
            if (regexString.startsWith('[') &&
                regexString.endsWith(']') &&
                regexString.indexOf(']') === regexString.length - 1)
                return false;
            // Comment above, applies here as well! // TODO: fix this!
            if (regexString.startsWith('(') &&
                regexString.endsWith(')') &&
                regexString.indexOf(')') === regexString.length - 1)
                return false;
            if (regexString.startsWith('\\') && regexString.length === 2)
                return false;
            if (!state.regexQuantifier)
                return false;
            return true;
        },
        toRegex: (...flags) => {
            return new RegExp(state.regexStringCallback(component), flags.join(''));
        },
        toRegexString: () => {
            return state.regexStringCallback(component);
        },
    };
    return component;
};
//# sourceMappingURL=RegexComponent.js.map