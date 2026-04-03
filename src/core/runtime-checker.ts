import type { Checker } from "./contracts.js";

export type RuntimeChecker = {
    readonly name: string;
    readonly force: boolean;
    readonly source: string;
    readonly args: string[];
    readonly location: string;
    readonly refers: Record<string, RuntimeChecker[]>;
    exec: Checker;
};
