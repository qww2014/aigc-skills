# MiniMax H3 Prompting 接口说明

- 包 ID：`minimax-h3-prompting`
- Canvas 入口：`SKILL.md`
- 源规范：`skills/minimax-h3-prompting/SKILL.md`
- 完整索引：`skills/index.json`
- 包格式：由 `build-packages.sh` 生成同名 `.yingce-plugin` ZIP

所有仓库内引用均使用相对路径；本包不携带 `.env`、API key、token、私钥或本机私有配置。

## Manifest

```json
{
  "apiVersion": "yingce.plugin/v2",
  "id": "minimax-h3-prompting",
  "name": "MiniMax H3 Prompting",
  "version": "1.0.0",
  "author": "qww2014",
  "description": "为 MiniMax H3/即梦 H3 编写和校验 I2VA 多图对齐视频提示词。",
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
        "id": "minimax-h3-prompting",
        "label": "MiniMax H3 Prompting",
        "category": "模型协议",
        "entry": "SKILL.md",
        "source": "skills/minimax-h3-prompting/SKILL.md",
        "protocolBoundaries": [
          "model-protocol-is-independent"
        ]
      }
    ]
  },
  "documentation": "README.md and docs/interface.md for minimax-h3-prompting"
}
```
