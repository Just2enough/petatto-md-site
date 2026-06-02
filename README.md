# Petatto.md — 紹介サイト / Landing site

[Petatto.md](https://github.com/Just2enough/petatto-md-releases) の製品紹介サイト（GitHub Pages）。
素の HTML / CSS / JS による 1 ページ構成・日英バイリンガル（トグル切替）。

The landing site for **Petatto.md**, a Windows app that sticks Markdown notes
from your Obsidian vault onto your desktop. Plain HTML/CSS/JS, single page,
bilingual (JA/EN toggle).

## 公開 URL / Live

https://just2enough.github.io/petatto-md-site/

## 構成 / Structure

```
index.html              # 本体（1 ページ LP）
assets/
  style.css             # ブランドカラーは本体アプリと一致（ミルキー/ビビッド + primary teal）
  main.js               # 言語トグル（data-i18n 辞書 / localStorage 永続化）
  screenshots/          # 実アプリのスクリーンショット
.nojekyll               # GitHub Pages の Jekyll 処理を無効化（素の静的配信）
```

## ローカル確認 / Local preview

```bash
python -m http.server 8765
# → http://127.0.0.1:8765/
```

ビルド工程なし。`assets/` を編集してそのまま push すれば反映される。

## ライセンス / License

サイトのコンテンツ・スクリーンショットは © 2026 Just2enough.
Petatto.md 本体のライセンスは配布リポジトリの LICENSE を参照。
