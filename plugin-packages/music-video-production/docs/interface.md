# Music Video Production 接口说明

- 包 ID：`music-video-production`
- Canvas 入口：`SKILL.md`
- 源规范：`skills/music-video-production/SKILL.md`
- 完整索引：`skills/index.json`
- 包格式：由 `build-packages.sh` 生成同名 `.yingce-plugin` ZIP

所有仓库内引用均使用相对路径；本包不携带 `.env`、API key、token、私钥或本机私有配置。

## Manifest

```json
{
  "apiVersion": "yingce.plugin/v2",
  "id": "music-video-production",
  "name": "Music Video Production",
  "version": "1.2.0",
  "author": "qww2014",
  "description": "处理歌词或 MV 剧本驱动的音乐视频制作、素材导入、9 宫格故事板和 Seedance 任务清单。",
  "enabled": true,
  "installable": true,
  "tags": [
    "aigc",
    "canvas",
    "视频/MV"
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
        "id": "music-video-production",
        "label": "Music Video Production",
        "category": "视频/MV",
        "entry": "SKILL.md",
        "source": "skills/music-video-production/SKILL.md",
        "protocolBoundaries": []
      }
    ]
  },
  "documentation": "README.md and docs/interface.md for music-video-production"
}
```
