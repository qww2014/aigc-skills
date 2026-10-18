import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const repoRoot = dirname(root);
const sourceRoot = join(repoRoot, "skills");
const config = JSON.parse(await readFile(join(root, "package-config.json"), "utf8"));

const yaml = (value) => JSON.stringify(value);

function rewriteSkillReferences(text, sourceSkill) {
  return text
    .replace(/`skills\/index\.json`/g, "`skills/index.json`")
    .replace(/`([a-z0-9-]+)\/SKILL\.md`/g, "`skills/$1/SKILL.md`")
    .replace(/`([a-z0-9-]+)\/references\//g, "`skills/$1/references/")
    .replace(/`([a-z0-9-]+)\/scripts\//g, "`skills/$1/scripts/")
    .replace(/`references\//g, `\`skills/${sourceSkill}/references/`)
    .replace(/`scripts\//g, `\`skills/${sourceSkill}/scripts/`)
    .replace(/`assets\//g, `\`skills/${sourceSkill}/assets/`)
    .replace(/\]\(references\//g, `](skills/${sourceSkill}/references/`)
    .replace(/\]\(scripts\//g, `](skills/${sourceSkill}/scripts/`)
    .replace(/\]\(assets\//g, `](skills/${sourceSkill}/assets/`);
}

for (const spec of config.packages) {
  const packageRoot = join(root, spec.id);
  await rm(packageRoot, { recursive: true, force: true });
  await mkdir(join(packageRoot, "docs"), { recursive: true });
  await cp(sourceRoot, join(packageRoot, "skills"), { recursive: true });
  await rm(join(packageRoot, "skills", ".DS_Store"), { force: true });

  const sourceSkill = await readFile(join(sourceRoot, spec.source, "SKILL.md"), "utf8");
  const entrySkill = rewriteSkillReferences(sourceSkill, spec.source);
  await writeFile(join(packageRoot, "SKILL.md"), entrySkill);

  const manifest = {
    apiVersion: "yingce.plugin/v2",
    id: spec.id,
    name: spec.name,
    version: config.version,
    author: config.author,
    description: spec.description,
    enabled: true,
    installable: true,
    tags: ["aigc", "canvas", spec.category],
    permissions: ["skill.read", "skill.invoke"],
    configuration: {
      fields: []
    },
    contributes: {
      skills: [
        {
          id: spec.id,
          label: spec.name,
          category: spec.category,
          entry: "SKILL.md",
          source: `skills/${spec.source}/SKILL.md`,
          protocolBoundaries:
            spec.id === "minimax-h3-prompting" || spec.id === "seedance-prompting" || spec.id === "wan3-prompting"
              ? ["model-protocol-is-independent"]
              : []
        }
      ]
    },
    documentation: `README.md and docs/interface.md for ${spec.id}`
  };
  const dependencyText = spec.externalDependencies?.length
    ? `\n## 外部 Skill 依赖\n\n本包内的本仓库源规范已完整复制。以下能力由 Canvas 或宿主环境中的独立 Skill 提供：\n\n${spec.externalDependencies.map((item) => `- \`${item}\``).join("\n")}\n`
    : "";
  const readme = `# ${spec.name}\n\n${spec.description}\n\n本目录遵循 Canvas \`plugin-packages\` 风格：根目录的 \`SKILL.md\` 是安装入口，\`manifest.json\` 描述包元数据，\`skills/\` 保存可追溯的完整源规范。${dependencyText}\n## 模型协议边界\n\nMiniMax H3、Seedance 和 Wan 3.0 是三套独立协议；本包不会把它们混写。安装后如需其他协议，请安装对应的独立包。\n`;
  await writeFile(join(packageRoot, "README.md"), readme);

  const interfaceDoc = `# ${spec.name} 接口说明\n\n- 包 ID：\`${spec.id}\`\n- Canvas 入口：\`SKILL.md\`\n- 源规范：\`skills/${spec.source}/SKILL.md\`\n- 完整索引：\`skills/index.json\`\n- 包格式：由 \`build-packages.sh\` 生成同名 \`.yingce-plugin\` ZIP\n\n所有仓库内引用均使用相对路径；本包不携带 \`.env\`、API key、token、私钥或本机私有配置。\n\n## Manifest\n\n\`\`\`json\n${JSON.stringify(manifest, null, 2)}\n\`\`\`\n`;
  await writeFile(join(packageRoot, "docs", "interface.md"), interfaceDoc);
  manifest.documentation = `${readme}\n\n---\n\n${interfaceDoc}`;
  await writeFile(join(packageRoot, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
}

console.log(`generated ${config.packages.length} Canvas-style AIGC packages`);
