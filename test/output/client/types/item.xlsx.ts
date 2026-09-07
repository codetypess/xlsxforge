// AUTO GENERATED DO NOT MODIFY!
// MERGED FROM build/client/types/item.xlsx.ts AND test/output/client/types/item.xlsx.ts

import {
    BagType,
    ItemType,
    QualityType,
} from "../define/index";

type ItemArgs = Record<string, number> | number[][];

export interface GeneratedItemFollowRow {
    /**
     * ### (type: int) (location: A1) (checker: x)
     */
    readonly id: number;
    /**
     * 物品类型 (type: string?) (location: B1) (checker: x)
     */
    readonly name?: string;
    /**
     *  (type: string?) (location: C1) (checker: !@follow(name))
     */
    readonly value?: string;
    /**
     *  (type: int[]?) (location: D1) (checker: x)
     */
    readonly arr1?: readonly number[];
    /**
     *  (type: int[]?) (location: E1) (checker: $.length == arr1.length)
     */
    readonly arr2?: readonly number[];
}

export interface GeneratedItemItemRow {
    /**
     * ### (type: int) (location: A1) (checker: x)
     */
    readonly id: number;
    /**
     * 注释 (type: string) (location: B1) (checker: x)
     */
    readonly comment: string;
    /**
     * 物品名称 (type: string) (location: C1) (checker: x)
     */
    readonly name: string;
    /**
     * 物品说明 (type: string) (location: D1) (checker: x)
     */
    readonly desc: string;
    /**
     * 物品类型 config.ITEM_TYPE (type: ItemType) (location: E1) (checker: x)
     */
    readonly item_type: ItemType;
    /**
     * 背包类型 config.BAG_TYPE (type: BagType) (location: F1) (checker: x)
     */
    readonly bag_id: BagType;
    /**
     * 可否堆叠 (type: int?) (location: G1) (checker: x)
     */
    readonly stack?: number;
    /**
     * 品质(颜色) (type: QualityType) (location: H1) (checker: x)
     */
    readonly quality: QualityType;
    /**
     * 参数 (type: table?) (location: I1) (checker: x)
     */
    readonly args?: ItemArgs; // override
    /**
     * 背包是否隐藏 (type: bool?) (location: J1) (checker: x)
     */
    readonly hide?: boolean;
}

export interface GeneratedItemMapRow {
    /**
     * 注释 (type: string) (location: B2) (checker: x)
     */
    readonly comment: string;
    /**
     *  (type: int) (location: C2) (checker: x)
     */
    readonly kind: number;
    /**
     *  (type: int) (location: D2) (checker: x)
     */
    readonly level: number;
    /**
     * 物品名称 (type: string) (location: E2) (checker: x)
     */
    readonly name: string;
}

export interface GeneratedItemMapArrRow {
    /**
     * ### (type: auto) (location: A2) (checker: x)
     */
    readonly id: number;
    /**
     * 注释 (type: string) (location: B2) (checker: x)
     */
    readonly comment: string;
    /**
     *  (type: int) (location: C2) (checker: x)
     */
    readonly kind: number;
    /**
     *  (type: int) (location: D2) (checker: x)
     */
    readonly level: number;
    /**
     * 物品名称 (type: string) (location: E2) (checker: x)
     */
    readonly name: string;
}

export interface GeneratedItemMapFieldRow {
    /**
     * ### (type: auto) (location: A2) (checker: x)
     */
    readonly id: number;
    /**
     * 注释 (type: string) (location: B2) (checker: x)
     */
    readonly comment: string;
    /**
     *  (type: int) (location: C2) (checker: x)
     */
    readonly kind: number;
    /**
     *  (type: int) (location: D2) (checker: x)
     */
    readonly level: number;
    /**
     * 物品名称 (type: string) (location: E2) (checker: x)
     */
    readonly name: string;
}

export interface GeneratedItemMapObjRow {
    /**
     * ### (type: auto) (location: A2) (checker: x)
     */
    readonly id: number;
    /**
     * 注释 (type: string) (location: B2) (checker: x)
     */
    readonly comment: string;
    /**
     *  (type: int) (location: C2) (checker: x)
     */
    readonly kind: number;
    /**
     *  (type: int) (location: D2) (checker: x)
     */
    readonly level: number;
    /**
     * 物品名称 (type: string) (location: E2) (checker: x)
     */
    readonly name: string;
}

export interface GeneratedItemTable {
    item: Record<number | string, GeneratedItemItemRow>;
    follow: Record<number | string, GeneratedItemFollowRow>;
    map: Record<number | string, Record<number | string, GeneratedItemMapRow>>;
}
