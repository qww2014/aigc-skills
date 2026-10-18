# MV 素材导入与资产完整性

## 导入

扫描用户指定文件夹后，先展示推测映射并取得确认，再复制或链接到项目目录：

| 类型 | 扩展名 | 目标 | 约定 |
|---|---|---|---|
| 角色参考图 | `.png` `.jpg` `.jpeg` `.webp` | `characters/` | `{角色名}_ref.png` |
| 场景参考图 | `.png` `.jpg` `.jpeg` `.webp` | `scenes/` | `{scene_id}_ref.png` |
| 道具参考图 | `.png` `.jpg` `.jpeg` `.webp` | `props/` | `{prop_id}_ref.png` |
| MV 剧本 | `.md` `.txt` | `script/` | 读取为 `mv_script.md` |
| 音频 | `.mp3` `.wav` | `assets/` | 只记录相对路径，除非用户要求分析 |
| 其他素材 | 任意 | `assets/` | 保留原名并登记 |

文件名只能用于提出候选映射，不能直接当作用户确认。素材引用写项目内相对路径。

## ref_index.json

```json
{
  "主角": {
    "source": "imported",
    "original_file": "hero_front.png",
    "ref_file": "characters/主角_ref.png",
    "status": "ready"
  },
  "scene_01": {
    "source": "pending",
    "ref_file": null,
    "status": "pending",
    "reason": "等待用户提供"
  }
}
```

允许的 `source`：`imported`、`generated`、`pending`。允许的 `status`：`ready`、`pending`、`rejected`。

## 完整性检查

在生成分镜图和 Seedance 任务前，逐项对账：

1. 解析角色、场景、道具 bible 与每段 storyboard 的引用。
2. 每个引用必须在对应 `ref_index.json` 中存在。
3. `ready` 必须有可访问的参考文件；`pending` 必须有原因和后续动作。
4. 缺失项由用户提供、通过真实图像生成能力补全，或明确降级为纯文字；不可静默跳过。
5. 任务若含 `pending` 资产，加入 `incomplete_refs` 标签，且不把缺失文件加入 `referenceFiles`。

导入素材优先于自动生成：已确认的角色/场景/道具参考图不得被自动生成覆盖。
