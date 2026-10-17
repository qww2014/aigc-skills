#!/bin/sh
set -eu

root_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
node "$root_dir/generate-packages.mjs"

for package_dir in "$root_dir"/*/; do
  package_id=$(basename "$package_dir")
  case "$package_id" in
    .*) continue ;;
    */) continue ;;
  esac
  output_file="$root_dir/$package_id.yingce-plugin"
  temporary_file="$root_dir/.$package_id.yingce-plugin.tmp"
  rm -f "$temporary_file"
  (
    cd "$package_dir"
    find manifest.json README.md SKILL.md docs skills -type f \
      ! -name '.DS_Store' \
      ! -name 'config.local.json' \
      ! -name '*.env' \
      | LC_ALL=C sort | zip -X -q "$temporary_file" -@
  )
  mv "$temporary_file" "$output_file"
done

echo "built Canvas plugin packages in $root_dir"
