# MV Seedance 任务清单

只有角色、场景、道具参考图和分镜参考图已核验后，才生成项目根目录的 `seedance_project_tasks.json`。

```json
{
  "project_id": "MV-001",
  "project_type": "mv",
  "total_tasks": 16,
  "tasks": [
    {
      "description": "MV-001 SEG01 MV分镜到视频",
      "prompt": "参考图声明 + 标准排除约束 + 歌词/氛围 + 9条逐镜描述",
      "modelConfig": {
        "model": "Seedance 2.5",
        "referenceMode": "reference",
        "aspectRatio": "16:9",
        "duration": "15s"
      },
      "referenceFiles": [
        "segments/SEG01/MV-001-SEG01_storyboard.png",
        "characters/主角_ref.png",
        "scenes/scene_01_ref.png"
      ],
      "realSubmit": false,
      "tags": ["MV-001", "SEG01"]
    }
  ]
}
```

## 构建规则

1. 头部声明 9 宫格分镜参考图和本段实际出场的角色/场景/道具参考图。
2. 明确“从镜头 1 开始”“不要展示多宫格参考图”“单一连续画面”“无文字/水印/分屏”等正向和排除约束。
3. 段落行包含 `video_id`、段落标题、歌词、氛围和资产引用。
4. 逐格写 `time_start-time_end`、画面动作、镜头、歌词、氛围、音效和角色状态。
5. 每个引用的资产都加入 `referenceFiles`，按项目内相对路径、出场顺序去重。
6. 仅在目标版本和任务类型已经确定后，读取 `seedance-prompting` 的模型协议规则；不要把 H3 `<Picture>`、`<d>` 语法写入 Seedance 任务。

## 提交边界

`realSubmit` 默认 `false`。生成 JSON 不等于提交任务；真实提交必须由宿主提供的 Seedance/Canvas 工具完成，并在提交前确认费用、模型、时长、画幅、素材授权和用户授权。
