# MV 分段故事板配置

每个 `segments/SEGxx/storyboard_config.json` 是一个完整 15 秒音乐段落，不能套用短剧的 `part_a` / `part_b`。

```json
{
  "video_id": "MV-001-SEG01",
  "project_type": "mv",
  "segment": 1,
  "total_segments": 16,
  "duration_seconds": 15,
  "fps": 24,
  "resolution": "1920x1080",
  "aspect_ratio": "16:9",
  "subtitle": false,
  "active_visual_mode": "style_a",
  "music_sync": {
    "time_range_in_song": "0:00-0:15",
    "lyrics": "对应歌词",
    "music_section": "verse",
    "tempo": "slow",
    "emotion_curve": "building"
  },
  "scene_refs": ["scene_01"],
  "prop_refs": [],
  "character_refs": ["主角"],
  "video_prompt": "English video prompt for this 15-second segment.",
  "storyboard_9grid": []
}
```

## 9 宫格

`storyboard_9grid` 固定 9 项，按 0.00–15.00 秒连续排列；每格约 1.67 秒，允许按歌曲节拍微调但不得重叠或留无解释空档。

每格至少包含：

```json
{
  "grid_number": 1,
  "time_start": 0.0,
  "time_end": 1.67,
  "scene_description": "可见的主体、动作、表情、空间和光影",
  "lyrics_at_grid": "本格歌词或空字符串",
  "camera": {
    "type": "medium",
    "movement": "track",
    "angle": "eye-level"
  },
  "characters": [],
  "visual_mode": "style_a",
  "transition": {"type": "cut", "description": ""},
  "atmosphere": "段落氛围",
  "sfx": "关键音效",
  "ai_image_prompt": "English storyboard image prompt."
}
```

MV 专属字段是 `music_sync`、`lyrics_at_grid`、`active_visual_mode`、`visual_mode` 和 `transition`；歌词是音乐同步数据，不是自动生成的对白。
