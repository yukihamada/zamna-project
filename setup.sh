#!/usr/bin/env bash
set -euo pipefail

# === 0. 必須環境チェック ===============================================
: "${OPENAI_API_KEY:?>>> まず  export OPENAI_API_KEY=xxxxxxxx  を実行してください <<<}"

# === 1. Homebrew & 依存ツール ===========================================
if ! command -v brew >/dev/null; then
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

brew install node@22 pnpm git
brew link --overwrite node@22

# === 2. Codex CLI =======================================================
npm i -g @openai/codex@latest

# === 3. プロジェクトディレクトリ =======================================
mkdir -p zamna-site && cd zamna-site
git init -q

# === 4. Codex へのプロンプト ============================================
PROMPT='Zamna Docs Site — QUICK SCAFFOLD
Create, in this repository, a minimal but stylish documentation site:

1. Stack: Next.js 14 (App Router) + TypeScript + Tailwind + shadcn/ui.
2. Pages:
   • /            — Hero (H1 "Zamna Hawaii 2025"), subtitle, CTA "Open Docs".
   • /docs        — Index listing every file in /docs/*.md or *.csv.
   • /docs/[slug] — Markdown renderer (next-mdx-remote) or CSV table (papaparse).
3. Styling: use color #ea384c as accent, font "Poppins", responsive.
4. Add sample docs/overview.md & docs/todo.csv so the viewer works out‑of‑the‑box.
5. Scripts: dev / build / start.  READMEに "pnpm dev" 起動手順を書く。
6. No complex extras—keep codebase small (< 100 files).

After generation, run "pnpm install && pnpm dev" and print 🎉 DONE.'

# === 5. コード生成（quiet / full‑auto） ================================
codex -q -m o3 --approval-mode full-auto "$PROMPT"

# === 6. 初回コミット & 完了メッセージ ==================================
git add -A
git commit -m "feat: scaffold Zamna Docs site" -q

echo -e "\n✅ すべて完了！\n  cd $(pwd) && pnpm install && pnpm dev\nで http://localhost:3000 を開いてください。🎉" 