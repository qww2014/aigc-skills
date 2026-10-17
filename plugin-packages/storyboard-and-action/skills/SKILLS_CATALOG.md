# dsh-comfy 技能目录记录

扫描日期：2026-10-16  
规范索引：[index.json](./index.json)（version 2）  
技能入口：每个子目录下的 `SKILL.md`

本目录当前有 29 个规范入口。完整规则仍以各技能的 `SKILL.md`、`references/`、`cards/` 和 `scripts/` 为准；本文件只做路由速查和跨技能边界记录。

## 技能分组

### 工作流、项目管理

- `dsh-comfyui-workflows`：区分 ComfyUI 图工作流与 API 工作流，分析连通分量，提取/运行/维护工作流技能包。
- `hell-grind-aigc-skill`：模型无关的 AIGC 项目管理、提示词、资产/镜头/版本/连续性、审计与失败诊断；提示词不等于生成授权。

### 视觉、提示词、摄影

- `colossal-cinematic`：巨物、神明、怪兽、天象的史诗电影感提示词。
- `oac-visual-prompting`：四层结构与五槽模板，让生图/生视频提示词更稳定、可复现。
- `oac-visual-tone`：从色彩、光线、摄影机运动统一视觉基调，抑制画面脏杂和风格漂移。
- `cinematic-camera-variables`：光圈 T 值、焦距、物距、对焦、真实摄影机运动五变量；明确区分真实 Dolly 与数字 Zoom。
- `shot-size-recipes`：15 套 2–6 镜景别组合，只管景别顺序和镜头数量，不负责焦距、机位、运镜或动作因果。
- `oac-character-design`：角色内核、shape language、服装道具与设定图提示词。

### 角色、场景与道具资产

- `character-refs`：本目录唯一真正出图的技能。正面全身锚点是唯一根，派生视图只参考锚点；支持 Qwen/Codex/OpenAI/custom；产出 `asset.json`、PNG 和 HTML 报告；有确认门、过期标记、代码质检与人工看图环节。
- `novel-characters`：从小说/短故事拆角色表、人物画像、形象提示词、音色提示词和设定图版面；只产提示词，不出图。
- `novel-art`：场景与叙事道具美术设定集；强调场景锚点、光照变体、空景、道具状态/尺度/白底无手；10 道质量门。

### 动作、镜头、视频

- `fight-prompt-director`：把图片、文字、首尾帧或分镜编排成动作视频提示词；默认 15 秒、Seedance、16:9、中文、标准版；输出高强度/中间型/慢节奏三套方案，极速版只改变速度。
- `action-storyboard-director`：电影级动作分镜；核心链为“意图→动作→交互→结果→反馈→下一动作”；复杂动作先拆 Shot，每个 Shot 只有一个主要动作、结果和摄影任务。
- `oac-seedance-prompting`：Seedance 八块公式、摄影机词库与参考图语法。
- `oac-shot-grammar`：将剧本转成可拍分镜，处理屏幕方向、运动镜头和多人对话关系。
- `oac-image-to-film`：从一张或多张图片规划结构、分镜与多模态图生视频流程。
- `oac-narrative-storyboard`：叙事短片导演流程：导演意图书、九列分镜、4–15 秒 Clip 表、逐 Clip 提示词，覆盖创意到剪辑。
- `novel-storyboard`：AI 短剧分镜；段不超过 15 秒、段内切镜 2–5 秒、每个节拍恰好被一个镜头认领；可导出 H3/Seedance 提示词，18 道质量门。
- `oac-shortfilm-five-stages`：短片五阶段、微短剧形态、主体/氛围双锁、模板分支和 IP 安全。
- `oac-shortdrama-workflow`：小说/故事/剧本→剧本→草分镜→资产锁定→制作分镜→分镜板→视频→核验交付；严格区分状态、授权、真实任务和可核验结果。

### 小说短剧生产链

- `novel-outline`：小说→短剧大纲五件套（改编说明、人物表、爽点表、分集梗概、资产清单）；14 道质量门；总集数×单集时长和题材为必问参数。
- `novel-script`：分集剧本（场次、节拍、逐句台词、时长折算）；10 道质量门；剧本管戏，分镜管拍。
- `novel-characters`、`novel-art`、`novel-storyboard`：分别负责谁、哪里、怎么拍。

### 故事、剧本、视听与剪辑

- `oac-story-development`：想法→定位声明→logline→人物→节拍→treatment；以完整/自洽/可追随三门槛和吸引力/在乎/情绪/意义四轴评估；到 treatment 为止，剧本交给 screenwriting。
- `oac-story-structure`：三幕、节拍、转折、高潮与结尾；默认三幕、单一视角、第三幕后段高潮。
- `oac-screenwriting`：剧本文本、场景冲突、潜台词、人物声音和可视化动作；根是只写看得见、听得见的内容。
- `oac-audiovisual-theory`：视听契约、声画对位/同步合成、因果/语义/减量聆听。
- `oac-editing-rhythm`：连续性、台词呼吸切、平行剪辑与转场；默认匹配剪辑，最多两条平行线。

### 剪映与技能路由

- `jianying-editor`：JyWrapper 剪映自动化，支持 Mac/Windows、v5.9+、素材、字幕/TTS、录屏/智能变焦、Web 动效和导出；业务脚本必须放用户项目根目录或其子目录，不得写进 Skill 安装目录；macOS 需手动导出 MP4。
- `oac-pack-router`：用户请求模糊或不知道选哪个技能时，最多三问，推荐 1 个主域包+最多 2 个备选；只做路由，不代选、不产创作内容。

## 跨技能接力

```text
故事开发/结构 → 小说大纲 → 角色/场景/道具资产 → 剧本 → 分镜 → 视频提示词 → 声音/剪辑 → 生成后核验
oac-story-development / oac-story-structure
  → novel-outline
  → novel-characters + novel-art（需要真正出图时转 character-refs）
  → novel-script / oac-screenwriting
  → novel-storyboard / oac-shot-grammar / action-storyboard-director
  → oac-visual-prompting / oac-seedance-prompting / fight-prompt-director / cinematic-camera-variables
  → oac-audiovisual-theory / oac-editing-rhythm / jianying-editor
```

## 统一执行边界

1. 先区分任务类型、媒介、操作、丰富度、提供商和权限，再读取最小必要参考文件。
2. 把事实、推断、待确认分开；不凭书名脑补，不擅自改写已确认的原文事实、对白、人物关系、道具状态和结局。
3. 复杂动作先分镜再写 Prompt；动作必须有因果、接触/受力、方向、位置和连续状态，特效不能替代动作。
4. 跨镜头锁定角色身份、服装、伤势、道具、位置、朝向、速度、场景损伤和声音状态。
5. 模型无关核心与平台适配分离；平台未知写 `unspecified`；提示词创作不自动授权付费生成、上传、发布或部署。
6. 质量门优先于“看起来完成”：`novel-outline` 14 门、`novel-script` 10 门、`novel-storyboard` 18 门、`novel-art` 10 门；失败逐条修复并重跑 `validate`/`selftest`。
7. 草稿、已验收资产、制作分镜、已提交任务、已核验媒体必须分层；只有结果真实可读并核验后才能称为完成。
8. 参考素材各司其职；角色组以正面全身锚点为根；正式短剧分镜只能引用已验收的角色、场景和关键道具资产。

后续使用本目录时，优先以本文件做路由，再回到对应 `SKILL.md` 和其按需引用的 `references/`、`cards/`、`scripts/` 获取完整规则。若目录内容变更，以最新 `index.json` 和文件内容为准，并更新本记录。
