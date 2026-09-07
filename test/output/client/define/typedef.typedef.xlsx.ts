// AUTO GENERATED, DO NOT MODIFY!
// file: test/res/typedef.xlsx

/** 杀怪任务 */
export interface TaskArgKillMonster {
    /** 参数类型 */
    readonly kind: "kill_monster";
    /** 怪物ID */
    readonly id: number;
    /** 怪物数量 */
    readonly count: number;
    /** 队伍 */
    readonly team?: MonsterTeam;
}

/** 怪物队伍 */
export interface MonsterTeam {
    /** 队长 */
    readonly leader: number;
    /** 成员 */
    readonly soldiers?: number[];
}

/** 捡金币 */
export interface TaskArgCollectCoin {
    /** 参数类型 */
    readonly kind: "collect_coin";
    /** 金币ID */
    readonly id: number;
    /** 金币数量 */
    readonly count: number;
    /** 限时 */
    readonly duration: number;
}

/** 任务参数 */
export type TaskArgs = TaskArgKillMonster | TaskArgCollectCoin;

