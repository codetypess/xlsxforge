-- AUTO GENERATED, DO NOT MODIFY!

---file: test/res/typedef.xlsx
---杀怪任务
---@class TaskArgKillMonster
---@field kind "kill_monster" 参数类型
---@field id integer 怪物ID
---@field count integer 怪物数量
---@field team? MonsterTeam 队伍

---file: test/res/typedef.xlsx
---怪物队伍
---@class MonsterTeam
---@field leader integer 队长
---@field soldiers? integer[] 成员

---file: test/res/typedef.xlsx
---捡金币
---@class TaskArgCollectCoin
---@field kind "collect_coin" 参数类型
---@field id integer 金币ID
---@field count integer 金币数量
---@field duration integer 限时

---file: test/res/typedef.xlsx
---任务参数
---@alias TaskArgs TaskArgKillMonster|TaskArgCollectCoin

