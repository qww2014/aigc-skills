# Canvas Plugin Packages

本目录按 `ddcat-ai/open-ai-canvas/plugin-packages` 的组织方式维护 AIGC Skill 分发包：

```text
plugin-packages/
├── <package-id>/
│   ├── SKILL.md
│   ├── manifest.json
│   ├── README.md
│   ├── docs/interface.md
│   └── skills/                 # 可追溯的本仓库源规范
├── <package-id>.yingce-plugin  # 可上传到 Canvas 的 ZIP
├── package-config.json
├── generate-packages.mjs
└── build-packages.sh
```

## 构建

在仓库根目录执行：

```bash
cd plugin-packages
./build-packages.sh
```

脚本会从 `skills/` 重新生成每个包，并生成同名 `.yingce-plugin` 文件。每个 ZIP 的根目录直接包含 `SKILL.md`，可作为 Canvas Skill 安装入口。

## 维护规则

- `skills/` 是完整规范源；`plugin-packages/` 是 Canvas 分发层。
- 当前默认分发 13 个合并入口；`skills/index.json` 同步记录这些入口与 28 个 legacy 兼容源。
- H3、Seedance、Wan 3.0 始终保持三个独立入口。
- 只提交相对路径，不提交 `.env`、密钥、token、私钥或 `config.local.json`。
- 修改合并入口或 legacy references 后，重新运行 `./build-packages.sh`。
