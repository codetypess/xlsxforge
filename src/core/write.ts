import { assert } from "./errors.js";
import { writers } from "./registry.js";
import type { TArray, TObject } from "./schema.js";
import type { Workbook } from "./workbook.js";

export const write = (workbook: Workbook, processor: string, data: object) => {
    const writer = workbook.context.writer;
    assert(!!writers[writer], `Writer not found: ${writer}`);
    writers[writer](workbook, processor, data as TObject | TArray);
};
