---
name: "oac-story-development"
description: "通用故事开发skill（跨项目通用，与任何具体项目解耦）。负责故事维度的工作：从零开发（想法→定位声明→logline→人物配置→节拍表→treatment）与诊断修复（现成故事的结构/人物/情节问题定位与修法）。内核是好故事评价体系（三门槛：完整/自洽/可追随；四轴：吸引力/在乎/情绪/意义）+ 生成七步工序 + 结构锚点库（三幕/Save the Cat/英雄之旅/起承转合/微短剧节拍等）。适用一切叙事形态：动画长片、真人电影、剧集、短片、微短剧、游戏叙事、广告叙事。做到treatment/节拍表为止，剧本文本（对白/场景/动作描述）由 screenwriter 接手。 触发词：故事、写故事、编故事、故事开发、logline、故事大纲、treatment、节拍表、beat sheet、故事创意、选题、故事诊断、人物小传、角色弧光、主角、反派、故事结构、三幕、改稿、烂尾、结局。 当用户说「帮我想一个故事」「这个故事哪里不对」「出一版大纲/节拍表」「主角立不住」「结尾很怪」「故事没意思」「帮我看看这个故事结构」时也应触发。"
metadata:
  version: "1.0.0"
  author: "慕影-中意"
  owner: "74388668110"
  skillId: "14811816983052"
  tag: drama
  sortWeight: 3
  source: 3
  createdAt: 1782142627038
  updatedAt: 1782443956007
  initialLikeCount: 89
  initialAddedCount: 674
  authorAvatarUrl: "https://p6-faceu-img-sign.byteimg.com/tos-cn-i-0000c2356/o0pfuBKLIBGmp6AJ4g7iX7uAgEBoQAiEzXBAqP~tplv-resize:200:200.image?lk3s=4eecb9e8&x-expires=1788245864&x-signature=nKcLyPNcc3r1XZ9exrXFH3vD%2BWU%3D"
  extraInfo: ""
  showcaseMedia: [{"type":"image","showcase_uri":"tos-cn-i-tb4s082cfz/e9afd45772304502ba83b28d1622ff0e","showcase_url":"https://p11-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/e9afd45772304502ba83b28d1622ff0e~tplv-tb4s082cfz-resize:0:0.image?lk3s=28a09430&x-expires=1817189864&x-signature=ohrRQoDWQSGu86JWh04f2Sle098%3D"}]
oacSource: "故事开发"
oacRepo: "https://github.com/ddcat-ai/open-ai-canvas/tree/main/backend/builtin"
oacFullText: "references/full.md"
---

# 故事开发（入口）

> 本 skill 正文较长（16649 字符），完整原文在 `references/full.md`。
> 目录已在会话中给出；**动手前先读 `references/full.md`**，本节只是路由与导航。

## 何时调用

通用故事开发skill（跨项目通用，与任何具体项目解耦）。负责故事维度的工作：从零开发（想法→定位声明→logline→人物配置→节拍表→treatment）与诊断修复（现成故事的结构/人物/情节问题定位与修法）。内核是好故事评价体系（三门槛：完整/自洽/可追随；四轴：吸引力/在乎/情绪/意义）+ 生成七步工序 + 结构锚点库（三幕/Save the Cat/英雄之旅/起承转合/微短剧节拍等）。适用一切叙事形态：动画长片、真人电影、剧集、短片、微短剧、游戏叙事、广告叙事。做到treatment/节拍表为止，剧本文本（对白/场景/动作描述）由 screenwriter 接手。 触发词：故事、写故事、编故事、故事开发、logline、故事大纲、treatment、节拍表、beat sheet、故事创意、选题、故事诊断、人物小传、角色弧光、主角、反派、故事结构、三幕、改稿、烂尾、结局。 当用户说「帮我想一个故事」「这个故事哪里不对」「出一版大纲/节拍表」「主角立不住」「结尾很怪」「故事没意思」「帮我看看这个故事结构」时也应触发。

## 正文目录

- ## 〇、宪章
- ### 0.1 测量原则（一切判断的地基）
- ### 0.2 依赖铁律
- ### 0.3 元规则（系统自我修正）
- ### 0.4 输出纪律
- ## 一、评价体系（速查版，详解见 references/01-coordinate-system.md）
- ### 1.1 三门槛——坏一条，全盘不合格
- ### 1.2 四轴——好故事同时做到四件事
- ## 二、生成工序（七步）
- ### 第0步 定位声明
- ### 第1步 核心三件
- ### 第2步 Logline
- ### 第3步 人物配置
- ### 第4步 节拍表
- ### 第5步 Treatment（到此为止，剧本交 screenwriter）
- ### 第6步 自审（循环4-6步，直到通过）
- ## 三、诊断模式（用户拿现成故事来）
- ## 四、自审规则（评审纪律）
- ## 五、输出接口（字段进套件数据schema）
- ## 六、反模式（永远不做）
- ## 七、references 索引
- ## references/01-coordinate-system
- ## 坐标系详解 — 三门槛 + 四轴
- ### 一、测量原则
- ### 二、三门槛详解
- ### 2.1 完整
- ### 2.2 自洽
- ### 2.3 可追随
- ### 三、四轴详解
- ### 3.1 吸引力——想一直看下去
- ### 3.2 在乎——在乎故事里的人
- ### 3.3 情绪——真的笑、哭、爽、怕
- ### 3.4 意义——看完带走东西
- ### 四、轴间依赖与衔接故障
- ### 五、九形态验证记录（跨形态测试存档）
- ## references/02-character-mechanisms
- ## 人物机制详表 — 为什么想看他 / 为什么心疼他
- ### 一、魅力五机制（为什么想看他）
- ### 二、在乎六机制（为什么心疼他）
- ### 三、人物两清单（输出模板，接口给角色设计skill）
- …（其余标题见 references/full.md）

## 本包资源

```
SKILL.md
references/full.md
```
