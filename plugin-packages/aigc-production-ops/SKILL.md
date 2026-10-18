---
name: aigc-production-ops
description: 管理 AIGC 项目、ComfyUI 工作流、资产连续性与本地/远程执行。按子模式读取原始 Skill，适合项目统筹和工作流落地。
---

# AIGC Production Ops

## 子模式

- `project-governance`：读取 `skills/hell-grind-aigc-skill/SKILL.md`
- `local-comfy-workflow`：读取 `skills/dsh-comfyui-workflows/SKILL.md`
- `remote-zealman-execution`：读取已安装 `zealman-remote-comfyui` Skill
- `core-production-techniques`：读取 `skills/aigc-production-ops/references/core-production-techniques.md`，并按需继续读取资产、空间、摄影、预演和物理运动专项参考

先确定是在做项目治理、工作流结构，还是执行调度，再读取对应源规范。不要把项目记录、工作流 JSON 和远程执行凭据混写；API key 继续遵守环境变量/既有网关配置规则。

## 核心制作技巧

当用户要求提升角色一致性、声音稳定性、场景纵深、空间关系、预演、比例、摄影机表达或动作真实性时，先读取 `skills/aigc-production-ops/references/core-production-techniques.md`。它是跨模型的制作控制层，不覆盖 H3、Seedance 或 Wan 3.0 的协议语法。
