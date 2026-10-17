# AIGC Skills

面向 AIGC 故事、短剧、分镜、图生视频和剪辑生产的 Skill 库。

## 目录

规范入口位于 `skills/index.json`，当前默认使用合并模式：

1. `aigc-skill-router`
2. `aigc-production-ops`
3. `story-to-outline`
4. `screenplay-production`
5. `aigc-asset-bible`
6. `visual-direction`
7. `storyboard-and-action`
8. `minimax-h3-prompting`
9. `seedance-prompting`
10. `wan3-prompting`
11. `audiovisual-editing`
12. `jianying-editor`

原始 Skill 保留在同一目录下，作为 `legacy_skills` 兼容源。合并入口会按任务需要读取对应的原始 `SKILL.md`、脚本和 references。

## 模型协议边界

MiniMax H3、Seedance 和 Wan 3.0 是三套独立协议，不能互相混用。H3 的核心规范位于：

```text
skills/novel-storyboard/references/h3-prompt.md
```

## 安装到 Canvas

Canvas 支持上传 Markdown 或 ZIP 技能包。本仓库已按 Canvas 官方 `plugin-packages` 风格提供可直接上传的 `.yingce-plugin` 包：

```text
plugin-packages/
├── <package-id>/
│   ├── SKILL.md
│   ├── manifest.json
│   ├── README.md
│   ├── docs/interface.md
│   └── skills/
└── <package-id>.yingce-plugin
```

每个 ZIP 的根目录直接包含 `SKILL.md`，可在 Canvas 中单独安装。构建命令：

```bash
cd plugin-packages
./build-packages.sh
```

本仓库用于长期维护和版本同步；Canvas 端建议按需安装 `plugin-packages/` 下的 12 个合并主入口。`skills/` 是完整规范源，`plugin-packages/` 是分发层，二者不要手工分叉维护。

## 安全边界

- 不提交 `.env`、API key、token、私钥或本机私有配置。
- `character-refs/config.local.json` 已从公开仓库排除。
- 原始目录不删除，方便回溯、兼容旧调用和维护 references。
- 仓库内引用统一使用相对路径；`<...>` 形式的路径是使用者本机需要替换的环境变量。
