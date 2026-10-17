---
name: storyboard-and-action
description: 统一处理镜头语法、景别配方、短剧分镜、叙事短片、动作分镜、打斗提示词和图片转电影流程。
---

# Storyboard and Action

## 子模式

- `shot-grammar`：读取 `oac-shot-grammar/SKILL.md`
- `shot-size`：读取 `shot-size-recipes/SKILL.md`
- `short-drama-storyboard`：读取 `novel-storyboard/SKILL.md`
- `narrative-shortfilm`：读取 `oac-narrative-storyboard/SKILL.md`
- `action-storyboard`：读取 `action-storyboard-director/SKILL.md`
- `fight-prompt`：读取 `fight-prompt-director/SKILL.md`
- `image-to-film`：读取 `oac-image-to-film/SKILL.md`

先判断用户要的是镜头基础语法、完整分镜、动作设计还是已有图片的成片规划，再只加载一个主模式。若目标模型已指定，另行加载 H3、Seedance 或 Wan 协议。
