import { CheckerParser } from "../core/contracts";
import { type TCell } from "../core/schema";

/** 与 follow 相反：目标有值则当前必须为空，目标为空则当前必须有值。 */
export const MutexCheckerParser: CheckerParser = (ctx, arg) => {
    return ({ cell, row }) => {
        const target = row[arg] as TCell;
        if (target.v !== null) {
            return cell.v === null;
        } else {
            return cell.v !== null;
        }
    };
};
