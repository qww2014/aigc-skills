# Storyboard and Action 接口说明

- 包 ID：`storyboard-and-action`
- Canvas 入口：`SKILL.md`
- 源规范：`skills/storyboard-and-action/SKILL.md`
- 完整索引：`skills/index.json`
- 包格式：由 `build-packages.sh` 生成同名 `.yingce-plugin` ZIP

所有仓库内引用均使用相对路径；本包不携带 `.env`、API key、token、私钥或本机私有配置。

## Manifest

```json
{
  "apiVersion": "yingce.plugin/v2",
  "id": "storyboard-and-action",
  "name": "Storyboard and Action",
  "version": "1.2.0",
  "author": "qww2014",
  "description": "统一处理镜头语法、景别配方、短剧分镜、叙事短片与动作分镜。",
  "enabled": true,
  "installable": true,
  "tags": [
    "aigc",
    "canvas",
    "视频"
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
        "id": "storyboard-and-action",
        "label": "Storyboard and Action",
        "category": "视频",
        "entry": "SKILL.md",
        "source": "skills/storyboard-and-action/SKILL.md",
        "protocolBoundaries": []
      }
    ]
  },
  "documentation": "README.md and docs/interface.md for storyboard-and-action"
}
```
