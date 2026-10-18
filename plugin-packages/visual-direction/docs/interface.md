# Visual Direction 接口说明

- 包 ID：`visual-direction`
- Canvas 入口：`SKILL.md`
- 源规范：`skills/visual-direction/SKILL.md`
- 完整索引：`skills/index.json`
- 包格式：由 `build-packages.sh` 生成同名 `.yingce-plugin` ZIP

所有仓库内引用均使用相对路径；本包不携带 `.env`、API key、token、私钥或本机私有配置。

## Manifest

```json
{
  "apiVersion": "yingce.plugin/v2",
  "id": "visual-direction",
  "name": "Visual Direction",
  "version": "1.2.0",
  "author": "qww2014",
  "description": "统一处理可控视觉提示词、视觉基调、摄影机变量和巨物史诗视觉。",
  "enabled": true,
  "installable": true,
  "tags": [
    "aigc",
    "canvas",
    "视觉"
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
        "id": "visual-direction",
        "label": "Visual Direction",
        "category": "视觉",
        "entry": "SKILL.md",
        "source": "skills/visual-direction/SKILL.md",
        "protocolBoundaries": []
      }
    ]
  },
  "documentation": "README.md and docs/interface.md for visual-direction"
}
```
