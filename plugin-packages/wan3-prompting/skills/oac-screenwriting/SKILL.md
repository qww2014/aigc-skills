---
name: "oac-screenwriting"
description: "通用编剧/剧本skill（跨项目通用，与任何具体项目解耦）。负责把故事蓝图写成剧本文本：场景写作（晚进早出/每场冲突）+ 对白（潜台词/人物声音/功能）+ 动作描述（可视化写作），以及对现成剧本与对白的诊断修复。根=剧本只写看得见听得见的，功力在潜台词。三轴：动作可视性/对白潜台词/场景经济。按形态适配（动画偏对白+关键动作，剧集出完整对白剧本）。\n触发词：剧本、编剧、写剧本、改剧本、对白、台词、对话、潜台词、subtext、on-the-nose、场景、scene、动作描述、action line、剧本格式、screenplay、文学剧本、台词诊断、对白太直白、台词不像人话、场景拖沓、人物声音、配音稿。\n当用户说「把这个故事写成剧本」「这段对白怎么改」「台词太假/太直白」「这场戏拖」「人物说话都一个味」「写一场戏」时也应触发。"
metadata:
  version: "1.0.0"
  author: "慕影-中意"
  owner: "74388668110"
  skillId: "14811816982796"
  tag: drama
  sortWeight: 2
  source: 3
  createdAt: 1782142396639
  updatedAt: 1782443973302
  initialLikeCount: 76
  initialAddedCount: 647
  authorAvatarUrl: "https://p6-faceu-img-sign.byteimg.com/tos-cn-i-0000c2356/o0pfuBKLIBGmp6AJ4g7iX7uAgEBoQAiEzXBAqP~tplv-resize:200:200.image?lk3s=4eecb9e8&x-expires=1788245864&x-signature=nKcLyPNcc3r1XZ9exrXFH3vD%2BWU%3D"
  extraInfo: ""
  showcaseMedia: [{"type":"image","showcase_uri":"tos-cn-i-tb4s082cfz/efa1ddb9ad7d42cf8991ae4df51c1e9a","showcase_url":"https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/efa1ddb9ad7d42cf8991ae4df51c1e9a~tplv-tb4s082cfz-resize:0:0.image?lk3s=28a09430&x-expires=1817189864&x-signature=XoSyEJKgykVq0KbTZojUIybL%2B9Y%3D"}]
oacSource: "剧本撰写"
oacRepo: "https://github.com/ddcat-ai/open-ai-canvas/tree/main/backend/builtin"
oacFullText: "references/full.md"
---

# 剧本撰写（入口）

> 本 skill 正文较长（9018 字符），完整原文在 `references/full.md`。
> 目录已在会话中给出；**动手前先读 `references/full.md`**，本节只是路由与导航。

## 何时调用

通用编剧/剧本skill（跨项目通用，与任何具体项目解耦）。负责把故事蓝图写成剧本文本：场景写作（晚进早出/每场冲突）+ 对白（潜台词/人物声音/功能）+ 动作描述（可视化写作），以及对现成剧本与对白的诊断修复。根=剧本只写看得见听得见的，功力在潜台词。三轴：动作可视性/对白潜台词/场景经济。按形态适配（动画偏对白+关键动作，剧集出完整对白剧本）。\n触发词：剧本、编剧、写剧本、改剧本、对白、台词、对话、潜台词、subtext、on-the-nose、场景、scene、动作描述、action line、剧本格式、screenplay、文学剧本、台词诊断、对白太直白、台词不像人话、场景拖沓、人物声音、配音稿。\n当用户说「把这个故事写成剧本」「这段对白怎么改」「台词太假/太直白」「这场戏拖」「人物说话都一个味」「写一场戏」时也应触发。

## 正文目录

- ## 〇、宪章
- ### 0.1 定位与测量
- ### 0.2 根：只写看得见、听得见的
- ### 0.3 视觉优先（取舍依据）
- ### 0.4 依赖铁律
- ### 0.5 输出纪律
- ## 一、三轴（速查，详见 references）
- ## 二、工序（六步）
- ### 第0步 输入
- ### 第1步 场景划分
- ### 第2步 场景写作
- ### 第3步 对白打磨
- ### 第4步 视觉优先过一遍
- ### 第5步 自审
- ### 第6步 输出
- ## 三、诊断模式（用户拿现成剧本/对白来）
- ## 四、接口
- ## 五、反模式（永远不做）
- ## 六、references 索引
- ## references/01-dialogue
- ## 对白 — 潜台词、人物声音、功能
- ### 一、潜台词：对白的命脉
- ### 二、人物声音差异化
- ### 三、对白的功能（不只传信息）
- ### 四、信息怎么不靠对白给
- ### 五、对白诊断（拿现成对白来）
- ## references/02-action-lines
- ## 动作描述 — 可视化写作
- ### 一、只写镜头里能看见的
- ### 二、内在外化：怎么把看不见的写成看得见的
- ### 三、动作描述讲对白讲不了的
- ### 四、写得有节奏、可读
- ### 五、和分镜的边界
- ## references/03-scene-craft
- ## 场景写作 — 经济与冲突
- ### 一、晚进早出（enter late, leave early）
- ### 二、每场必有冲突
- ### 三、场景的价值转变
- ### 四、场景的功能
- ### 五、场景诊断
- …（其余标题见 references/full.md）

## 本包资源

```
SKILL.md
references/full.md
```
