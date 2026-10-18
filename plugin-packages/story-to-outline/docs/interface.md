# Story to Outline 接口说明

- 包 ID：`story-to-outline`
- Canvas 入口：`SKILL.md`
- 源规范：`skills/story-to-outline/SKILL.md`
- 完整索引：`skills/index.json`
- 包格式：由 `build-packages.sh` 生成同名 `.yingce-plugin` ZIP

所有仓库内引用均使用相对路径；本包不携带 `.env`、API key、token、私钥或本机私有配置。

## Manifest

```json
{
  "apiVersion": "yingce.plugin/v2",
  "id": "story-to-outline",
  "name": "Story to Outline",
  "version": "1.1.0",
  "author": "qww2014",
  "description": "将故事想法、小说或短片需求发展成结构化故事蓝图与短剧大纲。",
  "enabled": true,
  "installable": true,
  "tags": [
    "aigc",
    "canvas",
    "故事"
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
        "id": "story-to-outline",
        "label": "Story to Outline",
        "category": "故事",
        "entry": "SKILL.md",
        "source": "skills/story-to-outline/SKILL.md",
        "protocolBoundaries": []
      }
    ]
  },
  "documentation": "README.md and docs/interface.md for story-to-outline"
}
```
