---
name: aigc-skill-router
description: 统一路由 dsh-comfy 的 AIGC 技能。用户需求明确时选择对应子模式；需求模糊时再做类型、步骤和目标模型分流。
---

# AIGC Skill Router

这是 dsh-comfy 的合并入口。原始 Skill 目录保留为兼容源，本入口负责选择模式，不复制原有脚本和质量门。

## 路由

- 模糊需求、询问“用哪个 Skill”：读取 `oac-pack-router/SKILL.md`
- ComfyUI 工作流、工作流提取/运行：读取 `dsh-comfyui-workflows/SKILL.md`
- 项目资产、镜头、生成记录、连续性：读取 `hell-grind-aigc-skill/SKILL.md`
- 本地/远程 ComfyUI 执行：分别读取 `dsh-comfyui-workflows/SKILL.md` 或 `zealman-remote-comfyui` Skill
- 已明确指定 H3、Seedance、Wan：直接进入对应模型协议入口，不先问路由问题

完整源索引：`skills/index.json`
