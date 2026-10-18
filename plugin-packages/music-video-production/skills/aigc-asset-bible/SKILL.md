---
name: aigc-asset-bible
description: 统一规划角色、场景、道具和角色参考图资产；支持角色设计、小说角色拆解、场景设定和真实出图四种子模式。
---

# AIGC Asset Bible

## 子模式

- `character-design`：读取 `oac-character-design/SKILL.md`
- `character-extraction`：读取 `novel-characters/SKILL.md`
- `scene-art`：读取 `novel-art/SKILL.md`
- `character-reference-generation`：读取 `character-refs/SKILL.md`

前三个子模式默认只产出结构化提示词和设定文件；`character-reference-generation` 才实际出图，并负责锚点、派生视图、确认和过期标记。不要把角色图生成误当成普通提示词改写。
