# JianYing Editor 接口说明

- 包 ID：`jianying-editor`
- Canvas 入口：`SKILL.md`
- 源规范：`skills/jianying-editor/SKILL.md`
- 完整索引：`skills/index.json`
- 包格式：由 `build-packages.sh` 生成同名 `.yingce-plugin` ZIP

所有仓库内引用均使用相对路径；本包不携带 `.env`、API key、token、私钥或本机私有配置。

## Manifest

```json
{
  "apiVersion": "yingce.plugin/v2",
  "id": "jianying-editor",
  "name": "JianYing Editor",
  "version": "1.1.0",
  "author": "qww2014",
  "description": "剪映 AI 自动化剪辑与草稿管理 Skill。",
  "enabled": true,
  "installable": true,
  "tags": [
    "aigc",
    "canvas",
    "剪辑后端"
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
        "id": "jianying-editor",
        "label": "JianYing Editor",
        "category": "剪辑后端",
        "entry": "SKILL.md",
        "source": "skills/jianying-editor/SKILL.md",
        "protocolBoundaries": []
      }
    ]
  },
  "documentation": "README.md and docs/interface.md for jianying-editor"
}
```
