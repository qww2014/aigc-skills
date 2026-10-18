# Wan 3 Prompting 接口说明

- 包 ID：`wan3-prompting`
- Canvas 入口：`SKILL.md`
- 源规范：`skills/wan3-prompting/SKILL.md`
- 完整索引：`skills/index.json`
- 包格式：由 `build-packages.sh` 生成同名 `.yingce-plugin` ZIP

所有仓库内引用均使用相对路径；本包不携带 `.env`、API key、token、私钥或本机私有配置。

## Manifest

```json
{
  "apiVersion": "yingce.plugin/v2",
  "id": "wan3-prompting",
  "name": "Wan 3 Prompting",
  "version": "1.1.0",
  "author": "qww2014",
  "description": "为 Wan 3.0 编写文本生成、首尾帧、参考、编辑与延长提示词。",
  "enabled": true,
  "installable": true,
  "tags": [
    "aigc",
    "canvas",
    "模型协议"
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
        "id": "wan3-prompting",
        "label": "Wan 3 Prompting",
        "category": "模型协议",
        "entry": "SKILL.md",
        "source": "skills/wan3-prompting/SKILL.md",
        "protocolBoundaries": [
          "model-protocol-is-independent"
        ]
      }
    ]
  },
  "documentation": "README.md and docs/interface.md for wan3-prompting"
}
```
