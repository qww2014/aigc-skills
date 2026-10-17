# Screenplay Production 接口说明

- 包 ID：`screenplay-production`
- Canvas 入口：`SKILL.md`
- 源规范：`skills/screenplay-production/SKILL.md`
- 完整索引：`skills/index.json`
- 包格式：由 `build-packages.sh` 生成同名 `.yingce-plugin` ZIP

所有仓库内引用均使用相对路径；本包不携带 `.env`、API key、token、私钥或本机私有配置。

## Manifest

```json
{
  "apiVersion": "yingce.plugin/v2",
  "id": "screenplay-production",
  "name": "Screenplay Production",
  "version": "1.0.0",
  "author": "qww2014",
  "description": "统一处理通用剧本写作与可被 AI 短剧分镜消费的结构化剧本。",
  "enabled": true,
  "installable": true,
  "tags": [
    "aigc",
    "canvas",
    "剧本"
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
        "id": "screenplay-production",
        "label": "Screenplay Production",
        "category": "剧本",
        "entry": "SKILL.md",
        "source": "skills/screenplay-production/SKILL.md",
        "protocolBoundaries": []
      }
    ]
  },
  "documentation": "README.md and docs/interface.md for screenplay-production"
}
```
