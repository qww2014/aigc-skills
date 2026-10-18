# MV 项目结构与编号

项目根目录由调用方提供；以下路径均相对于项目根目录，不使用固定机器路径。

```text
projects/
├── index.json
└── MV-001_title/
    ├── metadata.json
    ├── script/mv_script.md
    ├── characters/character_bible.md
    ├── characters/ref_index.json
    ├── scenes/scene_bible.md
    ├── scenes/ref_index.json
    ├── props/prop_bible.md
    ├── props/ref_index.json
    ├── assets/
    ├── segments/SEG01/storyboard_config.json
    ├── video_index.json
    └── seedance_project_tasks.json
```

## 编号

- 项目：`MV-XXX`，与短剧 `DM-XXX` 独立计数。
- 段落：`SEG01`、`SEG02`……
- 视频：`MV-XXX-SEG01`。
- 段数：`ceil(song_duration_seconds / 15)`；最后一段可在元数据中记录实际剩余时长，但默认生产段按 15 秒规划。

## metadata.json 最小字段

```json
{
  "project_id": "MV-001",
  "project_type": "mv",
  "project_name": "作品名称",
  "song_title": "歌曲名",
  "song_duration_seconds": 240,
  "total_segments": 16,
  "segment_duration_seconds": 15,
  "mv_type": "narrative",
  "visual_style": {
    "mode": "single",
    "style_a": {"name": "style", "prompt_suffix": ""}
  },
  "status": "scripted"
}
```

索引状态使用 `draft`、`scripted`、`assets_ready`、`storyboard_ready`、`tasks_ready`、`submitted`、`delivered` 等可核验状态；不要用一个“完成”覆盖多个阶段。
