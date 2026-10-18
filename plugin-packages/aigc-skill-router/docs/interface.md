# AIGC Skill Router 接口说明

- 包 ID：`aigc-skill-router`
- Canvas 入口：`SKILL.md`
- 源规范：`skills/aigc-skill-router/SKILL.md`
- 完整索引：`skills/index.json`
- 包格式：由 `build-packages.sh` 生成同名 `.yingce-plugin` ZIP

所有仓库内引用均使用相对路径；本包不携带 `.env`、API key、token、私钥或本机私有配置。

## Manifest

```json
{
  "apiVersion": "yingce.plugin/v2",
  "id": "aigc-skill-router",
  "name": "AIGC Skill Router",
  "version": "1.2.0",
  "author": "qww2014",
  "description": "AIGC 技能统一路由入口，按任务类型和目标模型选择合并后的生产 Skill。",
  "enabled": true,
  "installable": true,
  "tags": [
    "aigc",
    "canvas",
    "入口"
  ],
  "permissions": [
    "skill.read",
    "skill.invoke"
  ],
  "configuration": {
    "fields": []
  },
  "contributes": {
    "skills": [
      {
        "id": "aigc-skill-router",
        "label": "AIGC Skill Router",
        "category": "入口",
        "entry": "SKILL.md",
        "source": "skills/aigc-skill-router/SKILL.md",
        "protocolBoundaries": []
      }
    ]
  },
  "documentation": "README.md and docs/interface.md for aigc-skill-router"
}
```
