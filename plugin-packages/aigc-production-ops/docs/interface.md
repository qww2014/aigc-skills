# AIGC Production Ops 接口说明

- 包 ID：`aigc-production-ops`
- Canvas 入口：`SKILL.md`
- 源规范：`skills/aigc-production-ops/SKILL.md`
- 完整索引：`skills/index.json`
- 包格式：由 `build-packages.sh` 生成同名 `.yingce-plugin` ZIP

所有仓库内引用均使用相对路径；本包不携带 `.env`、API key、token、私钥或本机私有配置。

## Manifest

```json
{
  "apiVersion": "yingce.plugin/v2",
  "id": "aigc-production-ops",
  "name": "AIGC Production Ops",
  "version": "1.0.0",
  "author": "qww2014",
  "description": "管理 AIGC 项目、ComfyUI 工作流、资产连续性与本地或远程执行。",
  "enabled": true,
  "installable": true,
  "tags": [
    "aigc",
    "canvas",
    "工作流"
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
        "id": "aigc-production-ops",
        "label": "AIGC Production Ops",
        "category": "工作流",
        "entry": "SKILL.md",
        "source": "skills/aigc-production-ops/SKILL.md",
        "protocolBoundaries": []
      }
    ]
  },
  "documentation": "README.md and docs/interface.md for aigc-production-ops"
}
```
