---
name: music-video-production
description: 处理歌词或 MV 剧本驱动的音乐视频制作：项目初始化、素材导入、角色/场景/道具资产账本、音乐同步分段、9 宫格故事板、Seedance 任务清单和剪辑交付。用户说制作 MV、根据歌词做音乐视频、读取素材文件夹做 MV 时使用；不替代通用短剧剧本或模型协议 Skill。
---

# Music Video Production

这是 AIGC 影视库中的 **MV 专用编排层**。它把歌曲结构和歌词作为时间轴，组织剧本、资产、分镜和视频任务；不复制通用短剧或模型协议的规则。

## 何时使用

- 根据歌词、歌曲结构或已有 MV 剧本制作音乐视频。
- 从指定文件夹导入角色、场景、道具参考图和剧本素材。
- 需要 `music_sync`、`lyrics_at_grid`、9 宫格分镜或 `seedance_project_tasks.json`。
- 需要把多个 15 秒 MV 段落组织成可提交和可剪辑的项目。

## 不做什么

- 不把 MV 当成有对白的短剧；歌词和节奏是主驱动。
- 不自行发明 Seedance、MiniMax H3 或 Wan 3.0 的协议语法。
- 不在没有真实生成结果时宣称角色图、分镜图或视频已完成。
- 不自动上传、付费生成或提交外部任务；提交前需要用户明确授权和真实工具能力。

## 主流程

1. **初始化项目**：建立项目索引、MV 元数据、脚本、角色/场景/道具资产目录、`segments/SEGxx/`、视频索引。
2. **读取或创作 MV 剧本**：从歌词分析前奏、主歌、副歌、间奏和尾声；每段聚焦一个音乐表达，保留情绪曲线、卡点、转场和色彩隐喻。
3. **导入与锁定资产**：扫描用户素材，确认角色/场景/道具映射；已有参考图标记为 `imported`，不重复生成。
4. **资产完整性检查**：分镜引用的每个角色、场景和道具必须为 `ready` 或明确 `pending`；缺失资产先补全、延后生成或降级为文字描述。
5. **生成分段故事板**：按 `ceil(song_duration_seconds / 15)` 生成段落；每段固定 15 秒、16:9、9 格，每格约 1.67 秒，并记录歌词/音乐/视觉风格/转场。
6. **生成视频任务**：媒体参考图确认存在后，按段生成 Seedance 任务 JSON；参考图只承担声明的职责，任务中禁止展示多宫格参考图或文字水印。
7. **交付与剪辑**：任务成功且结果可访问后，交给 `audiovisual-editing` 或 `jianying-editor` 完成配乐、字幕、节奏和导出。

## 资产与交付边界

- 资产设计：`aigc-asset-bible`，真实角色参考图再转 `character-refs`。
- 通用分镜基础：`storyboard-and-action`；MV 专用字段和 9 宫格以本 Skill 的 references 为准。
- Seedance 语法：读取 `seedance-prompting`，本 Skill 只规定 MV 任务的输入映射和项目字段。
- H3/Wan：分别读取各自独立协议 Skill，不与 MV 或 Seedance 规则混写。
- 剪辑执行：`audiovisual-editing` → `jianying-editor` 或用户指定的其他后端。

## 必读参考

- 项目目录、编号和元数据：[`skills/music-video-production/references/project-schema.md`](skills/music-video-production/references/project-schema.md)
- 素材导入与资产完整性：[`skills/music-video-production/references/asset-import-and-qa.md`](skills/music-video-production/references/asset-import-and-qa.md)
- 15 秒段落与 9 宫格配置：[`skills/music-video-production/references/storyboard-schema.md`](skills/music-video-production/references/storyboard-schema.md)
- Seedance 任务清单与引用规则：[`skills/music-video-production/references/seedance-tasks.md`](skills/music-video-production/references/seedance-tasks.md)

## 质量门

- `project_type` 必须为 `mv`，编号使用 `MV-XXX` 与 `MV-XXX-SEGxx`。
- 每段必须包含音乐时间范围、歌词映射、情绪/视觉模式和 9 个连续格。
- `subtitle` 默认必须为 `false`；歌词同步写入音乐字段，不伪装成对白。
- 所有 `referenceFiles` 必须是项目内相对路径；缺失资产不得静默伪造为已就绪。
- 任务提交前检查资产状态、模型版本、时长、画幅、费用和授权；失败、取消或超时不自动换模型重试。
