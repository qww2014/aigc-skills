---
name: visual-direction
description: 统一处理可控视觉提示词、视觉基调、摄影机变量和巨物史诗视觉；按子模式读取原始规范。
---

# Visual Direction

## 子模式

- `prompt-structure`：读取 `skills/oac-visual-prompting/SKILL.md`
- `tone-and-look`：读取 `skills/oac-visual-tone/SKILL.md`
- `camera-and-optics`：读取 `skills/cinematic-camera-variables/SKILL.md`
- `colossal-subjects`：读取 `skills/colossal-cinematic/SKILL.md`

调用顺序通常是提示词结构 → 视觉基调 → 摄影机变量；巨物模式只在主体确实是巨物、神明、怪兽或天象时启用。
