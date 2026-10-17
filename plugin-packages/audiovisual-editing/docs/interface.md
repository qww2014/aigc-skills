# Audiovisual Editing 接口说明

- 包 ID：`audiovisual-editing`
- Canvas 入口：`SKILL.md`
- 源规范：`skills/audiovisual-editing/SKILL.md`
- 完整索引：`skills/index.json`
- 包格式：由 `build-packages.sh` 生成同名 `.yingce-plugin` ZIP

所有仓库内引用均使用相对路径；本包不携带 `.env`、API key、token、私钥或本机私有配置。

## Manifest

```json
{
  "apiVersion": "yingce.plugin/v2",
  "id": "audiovisual-editing",
  "name": "Audiovisual Editing",
  "version": "1.0.0",
  "author": "qww2014",
  "description": "统一处理声画关系、剪辑节奏、连续性、平行剪辑和转场。",
  "enabled": true,
  "installable": true,
  "tags": [
    "aigc",
    "canvas",
    "视听"
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
        "id": "audiovisual-editing",
        "label": "Audiovisual Editing",
        "category": "视听",
        "entry": "SKILL.md",
        "source": "skills/audiovisual-editing/SKILL.md",
        "protocolBoundaries": []
      }
    ]
  },
  "documentation": "README.md and docs/interface.md for audiovisual-editing"
}
```
