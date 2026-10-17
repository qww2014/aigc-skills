---
name: "oac-narrative-storyboard"
description: "以森海荧光导演分镜方法论产出叙事短片：导演意图书、九列分镜表、4~15s Clip 表与逐 Clip 提示词，直至成片。当用户要做剧情/影视向 AI 短片，需要按森海风格（哥特怪诞卡通+暗黑童话+高审美电影感，可覆盖）做分镜、镜头设计与运镜提示词时调用；不处理电商带货、产品展示、纯图片风格化及单镜头快速生图。"
metadata:
  version: "1.0.0"
  author: "森海荧光"
  owner: "3079066076849383"
  skillId: "14811816970508"
  tag: drama
  sortWeight: 111
  source: 3
  createdAt: 1782140206971
  updatedAt: 1782442934851
  initialLikeCount: 469
  initialAddedCount: 2372
  authorAvatarUrl: "https://p6-faceu-img-sign.byteimg.com/tos-cn-i-tb4s082cfz/5203b2ba0dbd428082221880b75811cc~tplv-resize:200:200.image?lk3s=4eecb9e8&x-expires=1788245864&x-signature=oxy0DoFkJ2pS%2B7LzOydZkIj5slU%3D"
  extraInfo: ""
  showcaseMedia: [{"type":"video","showcase_uri":"v02870g10004d8ui3hfog65id570j0d0","showcase_url":"https://v26-artist.vlabvod.com/a33e5ccb399be7e536fb5d10106d502a/6a7824f7/video/tos/cn/tos-cn-v-148450/oAD4siEQhAJiaipIgXggyHfUVDBsAANEJQc1a9/"}]
oacSource: "叙事短片导演分镜"
oacRepo: "https://github.com/ddcat-ai/open-ai-canvas/tree/main/backend/builtin"
oacFullText: "references/full.md"
---

# 叙事短片导演分镜（入口）

> 本 skill 正文较长（22828 字符），完整原文在 `references/full.md`。
> 目录已在会话中给出；**动手前先读 `references/full.md`**，本节只是路由与导航。

## 何时调用

以森海荧光导演分镜方法论产出叙事短片：导演意图书、九列分镜表、4~15s Clip 表与逐 Clip 提示词，直至成片。当用户要做剧情/影视向 AI 短片，需要按森海风格（哥特怪诞卡通+暗黑童话+高审美电影感，可覆盖）做分镜、镜头设计与运镜提示词时调用；不处理电商带货、产品展示、纯图片风格化及单镜头快速生图。

## 正文目录

- # 角色定位
- ## 工具使用规范
- ## 执行流程
- ### Phase 1：创意发散
- ### Phase 2：内容大纲
- ### Phase 3：剧本创作
- ### Phase 4：素材挖掘（video-sop 刚需，森海前段无此环节，必须保留）
- ### Phase 5：分镜设计（森海前段 ↔ video-sop 后段衔接核心）
- ### Phase 6：需求确认
- ### Phase 7：参考素材生成（video-sop，注入森海 VISUAL DNA）
- ### Phase 8：逐 Clip 提示词 + 分镜生视频（森海提示词模板按 Clip 重组，并入 video-sop）
- ### Phase 9：视频剪辑
- ## Prompt 设计规范
- ## 追问原则
- ## 全局约束

## 本包资源

```
SKILL.md
references/full.md
```
