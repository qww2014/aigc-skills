# AIGC Skill 清单与相似项对照

更新时间：2026-10-18

## 口径

- dsh-comfy 规范来源：`skills/index.json`
- dsh-comfy 原始索引：29 个 legacy Skill，已升级为 `index.json` version 4
- 当前默认入口：13 个入口；其中 12 个是合并入口，`jianying-editor` 作为独立执行后端保留
- 其余 28 个原始入口保留在 `legacy_skills` 兼容区
- 本表纳入：dsh-comfy 29 项，以及本机已安装且直接参与 AIGC 的相关 Skill
- 不纳入：文档、GitHub、Hindsight、邮件管理等通用 Skill
- 源目录是规范唯一来源；`dsh-comfy-skill-router` 和 `minimax-h3-prompting` 是 Codex 入口层

## 一、按生产阶段分组

### 1. 工作流与路由

| Skill | 作用 | 定位 |
|---|---|---|
| `dsh-comfyui-workflows` | 分析、提取、运行和维护 ComfyUI 工作流 | ComfyUI 工作流专用 |
| `hell-grind-aigc-skill` | 管理 AIGC 项目、资产、镜头、生成记录和连续性 | 模型无关的项目总管 |
| `aigc-production-ops/core-production-techniques` | 角色/声音/场景资产、空间地图、预演、关系式尺度、摄影结果和真实物理 | 跨模型制作控制层 |
| `dsh-comfy-skill-router` | 在 29 个 dsh-comfy Skill 中路由 | Codex 入口，不产出内容 |
| `oac-pack-router` | 面对模糊创作需求时选择域包/技能 | 需求分流，不产出内容 |
| `zealman-remote-comfyui` | 远程 ZEALMAN/ComfyUI 调度、上传、执行、取回 | 远程执行层 |

### 2. 故事开发与结构

| Skill | 作用 | 交付物 |
|---|---|---|
| `oac-story-development` | 从想法到定位、logline、人物、节拍、treatment | 故事蓝图 |
| `oac-story-structure` | 幕结构、节拍、高潮、结尾 | 结构诊断/方案 |
| `oac-shortfilm-five-stages` | 极短片五阶段结构与多镜锁定 | 短片结构 |
| `novel-outline` | 小说转 AI 短剧大纲、人物、爽点、分集、资产 | `outline.json` |
| `oac-shortdrama-workflow` | 小说/故事/剧本到短剧剧本、分镜、资产、核验 | 全流程域包 |

### 3. 剧本与台词

| Skill | 作用 | 交付物 |
|---|---|---|
| `oac-screenwriting` | 通用剧本、场景、动作描述、对白与潜台词 | 剧本文本/诊断 |
| `novel-script` | 把短剧大纲落成结构化场次、节拍、台词 | `script.json` |
| `oac-shortdrama-workflow` | 将剧本生产接入后续分镜和资产 | 流程编排 |

### 4. 视觉、角色与资产

| Skill | 作用 | 是否实际出图 |
|---|---|---|
| `oac-visual-prompting` | 通用可控视觉提示词，四层结构/五槽模板 | 否 |
| `oac-visual-tone` | 色彩、光线、风格和基调统一 | 否 |
| `colossal-cinematic` | 巨物、神明、怪兽、天象的史诗视觉 | 否 |
| `oac-character-design` | 角色内核、shape language、服装道具、设定图提示词 | 否 |
| `novel-characters` | 小说/短故事拆角色卡、形象和音色提示词 | 否 |
| `character-refs` | 正面全身锚点、派生视图、角色参考图资产包 | 是 |
| `novel-art` | 场景和叙事道具设定集、光照变体、一致性提示词 | 否 |
| `imagegen` | Codex 通用图像生成/编辑 | 是 |
| `hatch-pet` | 动画宠物、spritesheet、QA 与包装 | 是，专项资产 |

### 5. 分镜、镜头与动作

| Skill | 作用 | 适用范围 |
|---|---|---|
| `oac-shot-grammar` | 屏幕方向、运动镜头、多人对话机位 | 通用镜头语法 |
| `shot-size-recipes` | 远/全/中/近/特的景别组合配方 | 只管景别顺序 |
| `cinematic-camera-variables` | 光圈、焦距、物距、对焦、摄影机运动 | 电影运镜变量 |
| `novel-storyboard` | 段→分镜→分镜图，节拍认领与质量门 | AI 短剧分镜 |
| `oac-narrative-storyboard` | 导演意图书、九列表、Clip 表、逐 Clip 提示词 | 叙事短片 |
| `action-storyboard-director` | 动作戏 Shot 时间轴和整段视频提示词 | 动作分镜总导演 |
| `fight-prompt-director` | 打斗、追逐、对抗的动作因果与模型提示词 | 动作提示词 |
| `oac-image-to-film` | 图片到电影短片的结构、分镜、多模态视频流程 | 图生视频规划 |
| `music-video-production` | 歌词/音乐结构驱动的 MV 项目、15 秒段落、9 宫格、资产导入和 Seedance 任务 | MV 专用编排层 |

### 6. 模型协议与视频生成

| Skill | 作用 | 协议边界 |
|---|---|---|
| `minimax-h3-prompting` | MiniMax H3/即梦 H3 I2VA、多图对齐、精确切点 | 只写 H3 |
| `oac-seedance-prompting` | Seedance 八块公式、摄影机词库、参考图语法 | dsh-comfy 版 |
| `seedance-prompting` | Seedance 2.0/2.5 版本、参考/编辑/延长提示词 | Codex 通用版 |
| `wan3-prompting` | Wan 3.0 文生、首尾帧、全模态、编辑、延长 | 只写 Wan 3.0 |

### 7. 声音、剪辑与成片

| Skill | 作用 | 定位 |
|---|---|---|
| `oac-audiovisual-theory` | 视听契约、声画对位、同步/合成、聆听模式 | 理论判断层 |
| `oac-editing-rhythm` | 连续性、平行剪辑、转场、对话戏节奏 | 剪辑方法层 |
| `jianying-editor` | JianYing 工程、字幕、配音、动效、导出 | 剪映执行层 |
| `openchatcut` | OpenChatCut 时间线、字幕、媒体、生成、导出 | OpenChatCut 执行层 |

## 二、相似 Skill 对照

### A. `oac-story-development` vs `oac-story-structure` vs `novel-outline`

| Skill | 主要回答的问题 | 不应替代 |
|---|---|---|
| `oac-story-development` | 这个故事值不值得做，核心冲突和人物弧光是什么 | 不直接写完整剧本 |
| `oac-story-structure` | 故事怎样搭幕、排节拍、做高潮和结尾 | 不负责小说到短剧的全套字段 |
| `novel-outline` | 如何把小说压缩成可生产的短剧大纲和资产清单 | 不负责逐场对白剧本 |

结论：三者不是完全重复。推荐顺序是 `oac-story-development` → `oac-story-structure` → `novel-outline`。只有用户已经有成熟小说并要直接拆短剧时，可从 `novel-outline` 开始。

### B. `oac-screenwriting` vs `novel-script`

| Skill | 差异 |
|---|---|
| `oac-screenwriting` | 通用编剧能力，重场景、动作可视性、对白和潜台词 |
| `novel-script` | AI 短剧工业化格式，重 `script.json`、节拍时长、质量门和上游对账 |

结论：不是二选一的同类替代。前者负责“写得像剧本”，后者负责“写成可被分镜脚本消费的结构化剧本”。

### C. `oac-shortdrama-workflow` vs `hell-grind-aigc-skill`

| Skill | 差异 |
|---|---|
| `oac-shortdrama-workflow` | 面向小说/短剧的内容生产流程，包含剧本、分镜、资产和视频核验 |
| `hell-grind-aigc-skill` | 跨题材、跨模型的项目管理、资产追踪、生成记录和连续性 |

结论：前者是“短剧领域流程”，后者是“通用 AIGC 项目治理”。一起用时，前者负责创作管线，后者负责项目状态与资产账本。

### D. `oac-visual-prompting` vs `oac-visual-tone` vs `cinematic-camera-variables`

| Skill | 管什么 |
|---|---|
| `oac-visual-prompting` | 提示词信息结构与可控性 |
| `oac-visual-tone` | 色彩、光线、材质、风格一致性 |
| `cinematic-camera-variables` | 镜头光学参数、景深和摄影机空间运动 |

结论：三者是正交层，不建议合并成一个大 Skill。调用顺序通常是：视觉提示词结构 → 视觉基调 → 摄影机变量。

### E. `oac-character-design` vs `novel-characters` vs `character-refs`

| Skill | 适用 |
|---|---|
| `oac-character-design` | 从人设内核设计可辨识的角色 |
| `novel-characters` | 从小说/故事抽取结构化角色卡和形象/音色提示词 |
| `character-refs` | 真正生成角色参考图，并维护锚点、派生图和过期状态 |

结论：`novel-characters` 是“拆角色”，`oac-character-design` 是“设计角色”，`character-refs` 是“把角色变成可挂载的图像资产”。不应互相替代。

### F. `novel-art` vs `character-refs`

| Skill | 资产对象 |
|---|---|
| `novel-art` | 场景、空景、叙事道具、光照变体 |
| `character-refs` | 人物锚点、侧面、背面、头像和细节图 |

结论：资产类型不同，互补，不重复。

### G. `oac-shot-grammar` vs `novel-storyboard` vs `oac-narrative-storyboard`

| Skill | 层级 |
|---|---|
| `oac-shot-grammar` | 镜头语法基础：方向、机位、对话关系、运动 |
| `novel-storyboard` | 结构化短剧分镜：节拍认领、分镜图、H3/Seedance 导出和质量门 |
| `oac-narrative-storyboard` | 导演风格化叙事短片：意图书、九列表、Clip 表 |

结论：`oac-shot-grammar` 是底层语法，后两者是不同生产模板。用户要 AI 短剧投产优先 `novel-storyboard`；要森海荧光式叙事短片才用 `oac-narrative-storyboard`。

### H. `shot-size-recipes` vs `cinematic-camera-variables`

| Skill | 差异 |
|---|---|
| `shot-size-recipes` | 决定“几个镜头、远中近特怎么排” |
| `cinematic-camera-variables` | 决定“镜头如何运动、焦距/景深如何变化” |

结论：一个管镜头序列，一个管摄影参数，互补。

### I. `action-storyboard-director` vs `fight-prompt-director`

| Skill | 差异 |
|---|---|
| `action-storyboard-director` | 从动作概念生成完整 Shot 时间轴、镜头职责和整段方案 |
| `fight-prompt-director` | 将已有角色/场景/首尾帧/分镜编排成可执行动作提示词 |

结论：前者偏“设计动作戏”，后者偏“落地动作提示词”。复杂动作戏可先导演设计，再用动作导演落地。

### J. `novel-storyboard` vs `minimax-h3-prompting`

| Skill | 差异 |
|---|---|
| `novel-storyboard` | 完整分镜生产管线，H3 只是其中一个输出协议 |
| `minimax-h3-prompting` | 专门处理 H3 提示词、改写、校验和协议隔离 |

结论：用户要“出短剧分镜”用 `novel-storyboard`；用户已有镜头、只要 H3 提示词，用 `minimax-h3-prompting`。

### K. `oac-seedance-prompting` vs `seedance-prompting`

| Skill | 差异 |
|---|---|
| `oac-seedance-prompting` | dsh-comfy 内部的八块公式和摄影机词库 |
| `seedance-prompting` | Codex 通用 Skill，覆盖 Seedance 2.0/2.5 的 reference、locked、资产绑定和版本差异 |

结论：两者有明显重叠，但来源和粒度不同。涉及 Seedance 版本、请求体、资产编号时优先 `seedance-prompting`；涉及 dsh-comfy 的导演式镜头提示词时读取 `oac-seedance-prompting`。不要两套规则互相覆盖。

### L. `minimax-h3-prompting` vs `seedance-prompting` vs `wan3-prompting`

三者不能合并。它们都属于“视频提示词”，但协议不同：

- H3：I2VA、多图钉时间点、精确连续时间码、`<d>` 台词块
- Seedance：按版本区分 reference/locked，多镜头组织和资产语义绑定
- Wan 3.0：首尾帧、全模态、编辑/延长和 `Image N`/`Video N`/`Audio N` 资产索引

路由原则：先锁定模型，再读取对应 Skill；不要用通用视频提示词替代模型协议。

### M. `oac-audiovisual-theory` vs `oac-editing-rhythm` vs `jianying-editor` vs `openchatcut`

| Skill | 层级 |
|---|---|
| `oac-audiovisual-theory` | 为什么声画关系有效 |
| `oac-editing-rhythm` | 如何安排节奏、连续性、平行剪辑和转场 |
| `jianying-editor` | 如何在剪映工程中执行 |
| `openchatcut` | 如何在 OpenChatCut 时间线中执行 |

结论：前两个是方法论，后两个是工具执行器；JianYing 与 OpenChatCut 是互斥执行后端。

### N. `music-video-production` vs `oac-shortdrama-workflow` vs `novel-storyboard`

| Skill | 差异 |
|---|---|
| `music-video-production` | 以歌词和音乐时间轴驱动 MV，负责 MV-XXX 项目、15 秒段落、9 宫格、音乐同步和任务清单 |
| `oac-shortdrama-workflow` | 以小说/故事/剧本驱动短剧生产，负责剧本、分镜、资产和状态交付 |
| `novel-storyboard` | 负责 AI 短剧分镜、节拍认领、镜头切点和 H3/Seedance 导出 |

结论：MV Skill 是独立的音乐驱动编排层，可复用资产、分镜、Seedance 和剪辑能力，但不替代短剧剧情/对白结构，也不改写任何模型协议。

## 三、建议的主技能与辅助技能

### 文本到视频短剧

```text
oac-story-development
→ oac-story-structure
→ novel-outline
→ novel-characters + novel-art
→ novel-script
→ novel-storyboard
→ minimax-h3-prompting / seedance-prompting / wan3-prompting
→ character-refs / imagegen
→ jianying-editor 或 openchatcut
```

### 歌词到 MV

```text
music-video-production
→ aigc-asset-bible / character-refs
→ storyboard-and-action（通用镜头基础）
→ seedance-prompting（目标模型确定后再读取）
→ audiovisual-editing
→ jianying-editor 或用户指定的剪辑后端
```

### ComfyUI 图像/视频工作流

```text
dsh-comfyui-workflows
→ dsh-comfy-skill-router
→ character-refs / novel-art
→ 对应模型提示词 Skill
→ 本地 ComfyUI 或 zealman-remote-comfyui
```

### 动作戏

```text
action-storyboard-director
→ fight-prompt-director
→ minimax-h3-prompting 或 seedance-prompting
```

## 四、建议合并/保留策略

### 不建议合并

- H3、Seedance、Wan：模型协议不同
- `character-refs` 与 `novel-art`：角色资产和场景资产不同
- `jianying-editor` 与 `openchatcut`：执行后端不同
- `oac-story-development` 与 `novel-outline`：故事开发和短剧工业化不同

### 可以作为同一域的上下游

- `oac-story-development` + `oac-story-structure` + `novel-outline`
- `novel-characters` + `character-refs`
- `novel-art` + `oac-visual-tone`
- `oac-shot-grammar` + `shot-size-recipes` + `cinematic-camera-variables`
- `action-storyboard-director` + `fight-prompt-director`
- `oac-audiovisual-theory` + `oac-editing-rhythm` + 一个剪辑执行器

### 需要防止的重复调用

- 用户已经明确说“写 H3 提示词”时，不先调用 `oac-pack-router`
- 用户只要角色提示词时，不自动调用 `character-refs` 出图
- 用户只要分镜结构时，不自动调用 `imagegen`
- 用户指定 Seedance 时，不混入 H3 的 `<d>`、`<Picture k>` 或精确切点语法

## 五、当前推荐的 8 个核心入口

如果只保留一套最常用的 AIGC 主干，建议保留：

1. `dsh-comfy-skill-router`
2. `hell-grind-aigc-skill`
3. `novel-outline`
4. `novel-script`
5. `novel-storyboard`
6. `character-refs`
7. `minimax-h3-prompting`
8. `seedance-prompting` 或 `wan3-prompting`（按目标模型二选一）

其余 Skill 作为专项插件按任务加载，不建议全部同时启用。

## 六、可合并精简方案

这里的“合并”指统一入口、共享参考文件和子模式路由；不建议直接删除源目录，因为源 Skill 里有脚本、质量门、示例和执行资源。

### 方案 A：故事开发与短剧前期合并

**建议新主 Skill：`story-to-outline`**

合并：

- `oac-story-development`
- `oac-story-structure`
- `oac-shortfilm-five-stages`
- `novel-outline`

保留为四个子模式：

1. 从零开发故事
2. 结构诊断与重构
3. 极短片五阶段
4. 小说转短剧大纲

不合并：`oac-shortdrama-workflow`。它是跨阶段流程域包，应作为上层编排器。

### 方案 B：剧本生产合并

**建议新主 Skill：`screenplay-production`**

合并：

- `oac-screenwriting`
- `novel-script`

内部区分：

- `freeform`：通用场景、动作、对白、潜台词
- `structured-short-drama`：`script.json`、节拍时长、质量门和上游对账

这样既保留写作能力，也保留机器可消费的结构化输出。

### 方案 C：角色与场景资产合并

**建议新主 Skill：`aigc-asset-bible`**

合并：

- `oac-character-design`
- `novel-characters`
- `novel-art`
- `character-refs`

内部区分：

- `character-design`：角色概念和视觉识别
- `character-extraction`：从小说/故事拆角色卡
- `scene-art`：场景与道具设定
- `character-reference-generation`：真正出角色参考图

注意：`character-refs` 是唯一实际出图的子模式，不能把它误简化成纯提示词生成。

### 方案 D：视觉提示词与摄影指导合并

**建议新主 Skill：`visual-direction`**

合并：

- `oac-visual-prompting`
- `oac-visual-tone`
- `cinematic-camera-variables`
- `colossal-cinematic`

内部区分：

- `prompt-structure`
- `tone-and-look`
- `camera-and-optics`
- `colossal-subjects`

这四项共享“画面导演”上下文，合并后可减少重复读取，但巨物模式仍应保留独立触发词。

### 方案 E：分镜与动作合并

**建议新主 Skill：`storyboard-and-action`**

合并：

- `oac-shot-grammar`
- `shot-size-recipes`
- `novel-storyboard`
- `oac-narrative-storyboard`
- `action-storyboard-director`
- `fight-prompt-director`
- `oac-image-to-film`

内部区分：

- `shot-grammar`
- `shot-size`
- `short-drama-storyboard`
- `narrative-shortfilm`
- `action-storyboard`
- `fight-prompt`
- `image-to-film`

这里是最大的一组，但不建议把所有规则写成一篇大文档；主 Skill 只做路由，原有 references 和脚本继续按模式加载。

### 方案 F：模型协议独立保留

**不合并：**

- `minimax-h3-prompting`
- `seedance-prompting`
- `oac-seedance-prompting`
- `wan3-prompting`

建议处理：

- `oac-seedance-prompting` 作为 `seedance-prompting` 的 dsh-comfy 兼容子模式
- `minimax-h3-prompting` 独立保留
- `wan3-prompting` 独立保留

最终保留三个模型协议入口：

```text
video-protocol-h3
video-protocol-seedance
video-protocol-wan3
```

原因：三者的时间码、资产引用、镜头结构和字段语法不同，强行合并会造成错误路由。

### 方案 G：视听与剪辑合并

**建议新主 Skill：`audiovisual-editing`**

合并：

- `oac-audiovisual-theory`
- `oac-editing-rhythm`

保留两个执行后端：

- `jianying-editor`
- `openchatcut`

方法论可以合并，软件执行器不能合并。

### 方案 H：工作流与项目治理

**建议新主 Skill：`aigc-production-ops`**

合并：

- `hell-grind-aigc-skill`
- `dsh-comfyui-workflows`
- `zealman-remote-comfyui`

内部区分：

- `project-governance`
- `local-comfy-workflow`
- `remote-zealman-execution`

`dsh-comfy-skill-router` 和 `oac-pack-router` 可以统一成一个 `aigc-skill-router`，但应保留“本地 29 项技能路由”和“模糊需求三问”两个模式。

## 七、精简后的建议入口

将原始 29 项加上外部相关 Skill，逻辑上可收敛为约 15 个入口：

1. `aigc-skill-router`
2. `aigc-production-ops`
3. `story-to-outline`
4. `screenplay-production`
5. `aigc-asset-bible`
6. `visual-direction`
7. `storyboard-and-action`
8. `video-protocol-h3`
9. `video-protocol-seedance`
10. `video-protocol-wan3`
11. `audiovisual-editing`
12. `jianying-editor`
13. `openchatcut`
14. `imagegen`
15. `hatch-pet`

其中：

- `jianying-editor` / `openchatcut` 是不同软件后端，不是重复入口。
- `imagegen` 是通用图像执行器，`aigc-asset-bible` 是资产规划与角色/场景资产流程。
- `hatch-pet` 是专项资产生产器，不建议并入普通角色资产。
- H3、Seedance、Wan 必须维持三个独立协议入口。

## 八、推荐的合并顺序

1. 先合并路由：`dsh-comfy-skill-router` + `oac-pack-router`
2. 再合并前期内容：故事开发/结构/大纲
3. 再合并剧本：通用剧本 + 结构化短剧剧本
4. 再合并资产：角色设计/角色拆解/场景设定/角色参考图
5. 再合并分镜：镜头语法/景别/短剧分镜/动作分镜
6. 最后合并方法论：视觉指导、视听剪辑、项目治理
7. 模型协议只做别名和子模式，不做规则大合并
