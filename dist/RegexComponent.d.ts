import { RegexFlags } from './RegexFlags';
export type RegexStringCallback = (baseComponent: RegexComponent) => string;
export interface RegexComponentProps {
    regexStringCallback: RegexStringCallback;
}
export interface RegexComponentState {
    regexQuantifier: string;
    regexStringCallback: RegexStringCallback;
}
export interface RegexComponent {
    getRegexQuantifier(): string;
    optional: () => RegexComponent;
    onceOrMore: () => RegexComponent;
    zeroOrMore: () => RegexComponent;
    exactAmount: (amount: number) => RegexComponent;
    atLeastAmount: (amount: number) => RegexComponent;
    rangeAmount: (min: number, max: number) => RegexComponent;
    upToAmount: (amount: number) => RegexComponent;
    needsWrapping: (regexString: string) => boolean;
    toRegex: (...flags: RegexFlags[]) => RegExp;
    toRegexString: () => string;
}
export declare const regexComponent: (props: RegexComponentProps) => RegexComponent;
