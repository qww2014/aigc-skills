# AIGC Skill Router

AIGC 技能统一路由入口，按任务类型和目标模型选择合并后的生产 Skill。

本目录遵循 Canvas `plugin-packages` 风格：根目录的 `SKILL.md` 是安装入口，`manifest.json` 描述包元数据，`skills/` 保存可追溯的完整源规范。
## 外部 Skill 依赖

本包内的本仓库源规范已完整复制。以下能力由 Canvas 或宿主环境中的独立 Skill 提供：

- `zealman-remote-comfyui`

## 模型协议边界

MiniMax H3、Seedance 和 Wan 3.0 是三套独立协议；本包不会把它们混写。安装后如需其他协议，请安装对应的独立包。
