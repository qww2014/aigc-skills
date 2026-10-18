# AIGC Asset Bible 接口说明

- 包 ID：`aigc-asset-bible`
- Canvas 入口：`SKILL.md`
- 源规范：`skills/aigc-asset-bible/SKILL.md`
- 完整索引：`skills/index.json`
- 包格式：由 `build-packages.sh` 生成同名 `.yingce-plugin` ZIP

所有仓库内引用均使用相对路径；本包不携带 `.env`、API key、token、私钥或本机私有配置。

## Manifest

```json
{
  "apiVersion": "yingce.plugin/v2",
  "id": "aigc-asset-bible",
  "name": "AIGC Asset Bible",
  "version": "1.2.0",
  "author": "qww2014",
  "description": "统一规划角色、场景、道具和角色参考图资产。",
  "enabled": true,
  "installable": true,
  "tags": [
    "aigc",
    "canvas",
    "资产"
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
        "id": "aigc-asset-bible",
        "label": "AIGC Asset Bible",
        "category": "资产",
        "entry": "SKILL.md",
        "source": "skills/aigc-asset-bible/SKILL.md",
        "protocolBoundaries": []
      }
    ]
  },
  "documentation": "README.md and docs/interface.md for aigc-asset-bible"
}
```
