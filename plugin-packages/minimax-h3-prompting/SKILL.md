---
name: minimax-h3-prompting
description: 为 MiniMax H3/即梦 H3 编写、改写和校验 I2VA 多图对齐视频提示词。保持 H3 的精确切点、Picture 绑定、台词块和声景字段，不混入其他模型协议。
---

# MiniMax H3

规范来源：`skills/novel-storyboard/references/h3-prompt.md`

短剧分镜另读 `skills/novel-storyboard/references/shot-writing.md`；动作戏另读 `skills/fight-prompt-director/SKILL.md`；参考图另读 `skills/character-refs/SKILL.md`。

核心不变量：默认英文；I2VA 对齐指令 + `integrated_multimodal_description` + `overall_soundscape` + `non_diegetic_music`；每个 `[Shot k]` 独立一行；切点由真实分镜秒数推导；台词逐字进 `<d>[Chinese] ...</d>`；视频正文禁角色名；`<Picture k>` 锚定构图；H3 使用首尾衔接的精确时间码。
