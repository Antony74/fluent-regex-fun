import { RegexComponent } from './RegexComponent';
export declare const or: (...components: (RegexComponent | string)[]) => {
    withGroupName: (groupName: string) => any;
    getRegexQuantifier(): string;
    optional: () => RegexComponent;
    onceOrMore: () => RegexComponent;
    zeroOrMore: () => RegexComponent;
    exactAmount: (amount: number) => RegexComponent;
    atLeastAmount: (amount: number) => RegexComponent;
    rangeAmount: (min: number, max: number) => RegexComponent;
    upToAmount: (amount: number) => RegexComponent;
    needsWrapping: (regexString: string) => boolean;
    toRegex: (...flags: import("./RegexFlags").RegexFlags[]) => RegExp;
    toRegexString: () => string;
};
