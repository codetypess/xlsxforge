import assert from "node:assert/strict";
import * as xlsx from "../index.js";

const makeObjectType = (name: string, literal: string) => {
    return {
        kind: "object",
        name,
        comment: "",
        fields: [
            {
                name: "type",
                comment: "",
                rawType: `#${literal}`,
                type: `#${literal}`,
                literal,
            },
            {
                name: "value",
                comment: "",
                rawType: "int",
                type: "int",
            },
        ],
    } satisfies xlsx.TypedefObject;
};

export const runTypedefRegressionTests = async () => {
    const sharedWorkbook = {
        path: "test/regression/shared-typedef.xlsx",
        sheet: "shared",
        types: [makeObjectType("RegressionSharedArg", "shared")],
    } satisfies xlsx.TypedefWorkbook;

    const consumerWorkbook = {
        path: "test/regression/consumer-typedef.xlsx",
        sheet: "consumer",
        types: [
            {
                kind: "union",
                name: "RegressionCrossWorkbookArgs",
                comment: "",
                discriminator: "type",
                members: ["RegressionSharedArg"],
            },
        ],
    } satisfies xlsx.TypedefWorkbook;

    xlsx.registerTypedefWorkbook(sharedWorkbook);
    xlsx.registerTypedefWorkbook(consumerWorkbook);
    xlsx.registerTypedefConvertors(consumerWorkbook);
    xlsx.registerTypedefConvertors(sharedWorkbook);

    assert.deepEqual(
        xlsx.convertValue(`{"type":"shared","value":7}`, "RegressionCrossWorkbookArgs"),
        {
            type: "shared",
            value: 7,
        }
    );

    const sameFileA = {
        path: "test/regression/same-file-typedef.xlsx",
        sheet: "typedef_a",
        types: [makeObjectType("RegressionDuplicateInSameFile", "same-file")],
    } satisfies xlsx.TypedefWorkbook;
    const sameFileB = {
        path: "test/regression/same-file-typedef.xlsx",
        sheet: "typedef_b",
        types: [makeObjectType("RegressionDuplicateInSameFile", "same-file")],
    } satisfies xlsx.TypedefWorkbook;

    xlsx.registerTypedefWorkbook(sameFileA);
    assert.throws(
        () => xlsx.registerTypedefWorkbook(sameFileB),
        /RegressionDuplicateInSameFile[\s\S]*same-file-typedef\.xlsx#typedef_a[\s\S]*same-file-typedef\.xlsx#typedef_b/
    );

    const crossFileA = {
        path: "test/regression/a-typedef.xlsx",
        sheet: "typedef",
        types: [makeObjectType("RegressionDuplicateAcrossFiles", "cross-file")],
    } satisfies xlsx.TypedefWorkbook;
    const crossFileB = {
        path: "test/regression/b-typedef.xlsx",
        sheet: "typedef",
        types: [makeObjectType("RegressionDuplicateAcrossFiles", "cross-file")],
    } satisfies xlsx.TypedefWorkbook;

    xlsx.registerTypedefWorkbook(crossFileA);
    assert.throws(
        () => xlsx.registerTypedefWorkbook(crossFileB),
        /RegressionDuplicateAcrossFiles[\s\S]*a-typedef\.xlsx#typedef[\s\S]*b-typedef\.xlsx#typedef/
    );
};
