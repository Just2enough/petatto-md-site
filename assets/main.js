/* ============================================================
   Petatto.md 紹介サイト — 言語トグル & UX
   - data-i18n="key"      … textContent / innerHTML を差し替え
   - data-i18n-src="key"  … img の src を差し替え（注釈付きスクショ用）
   - 選択言語は localStorage に永続化、初回は navigator.language で判定
   ============================================================ */

(function () {
  "use strict";

  const I18N = {
    ja: {
      "meta.description":
        "Obsidian vault の Markdown（.mdファイル）を Windows デスクトップに付箋として貼り付けるアプリ。テレメトリ0・無料。",
      "nav.features": "特徴",
      "nav.screenshots": "画面",
      "nav.how": "使い方",
      "nav.download": "ダウンロード",
      "nav.faq": "FAQ",
      "nav.roadmap": "これから",
      "nav.news": "お知らせ",

      "hero.eyebrow": "Obsidian × Windows デスクトップ",
      "hero.title": '見たいメモを、<br />デスクトップに<span class="nowrap"><span class="hl">ペタッと</span>。</span>',
      "hero.sub":
        "Obsidian vault の Markdown（.mdファイル）を、Windows デスクトップに<strong>付箋</strong>として貼り付け。TODO・進行中タスク・今見ておきたいメモを、いつも目に入る場所へ。",
      "hero.download": "Microsoft Store で入手",
      "hero.github": "GitHub で入手",
      "hero.meta": "Windows 10 / 11（x64）・無料・テレメトリ 0",

      "trust.privacy": "テレメトリ・解析 0",
      "trust.free": "完全無料",
      "trust.obsidian": "Obsidian と連携",
      "trust.local": "データは端末内だけ",

      "features.title": "付箋なのに、ちゃんと Markdown。",
      "features.sub": "編集の主は Obsidian。Petatto.md は「眺める・チェックする」ための常駐ビューです。",
      "feat.flag.t": "frontmatter フラグだけ",
      "feat.flag.d": "<code>petatto-md: true</code> を md に書くだけで付箋化。アプリ状態は md を汚しません。",
      "feat.newmd.t": "新しいメモもトレイから",
      "feat.newmd.d": "トレイの「新規md作成…」でファイル名を入れるだけ。vault に <code>petatto-md: true</code> 付きの md が作られ、そのまま付箋になります。",
      "feat.palette.t": "2 パレット × 4 色",
      "feat.palette.d": "ミルキー / ビビッドの 2 テーマ、各 4 色を巡回。気分やカテゴリで色分け。",
      "feat.check.t": "チェックボックス操作",
      "feat.check.d": "<code>- [ ]</code> をクリックで切替。付箋の上でそのまま TODO を消化できます。",
      "feat.sync.t": "リアルタイム同期",
      "feat.sync.d": "Obsidian 側で保存すると即反映。常に最新のメモがデスクトップに。",
      "feat.tray.t": "システムトレイ常駐",
      "feat.tray.d": "タスクバーを占有せず、トレイ左クリックで全付箋を最前面、右クリックから一括表示・整列。",
      "feat.privacy.t": "プライバシー最優先",
      "feat.privacy.d": "テレメトリ・使用状況・解析を一切送信しません。すべて端末内で完結。",
      "feat.lang.t": "日本語 / English 切替",
      "feat.lang.d": "設定画面でアプリの表示言語を日本語・英語から選べます。切替後、再起動で反映。",
      "feat.ignore.t": "フォルダ単位で監視除外",
      "feat.ignore.d": "<code>.petatto-ignore</code> を置いたフォルダは配下ごと対象外。テンプレート等を付箋にせず、vault の一部だけを外せます。",

      "shots.title": "どんな見た目？",
      "shots.sub": "付箋・メインウィンドウ・トレイ。実際の画面です。",
      "shots.vivid": "ビビッドパレット（4 色循環）",
      "shots.button": "ヘッダの操作（フォントサイズ5段階・色・付箋化解除）",
      "shots.buttonImg": "assets/screenshots/button_ja.png",
      "shots.edit": "本文ダブルクリックで編集モード／タイトルのダブルクリックでリネーム",
      "shots.main": "メインウィンドウ（vault・付箋・外観・言語・メンテナンス）",
      "shots.mainImg": "assets/screenshots/main.png",
      "shots.tray": "トレイ左クリックで全付箋を最前面／右クリックで一元操作",
      "shots.trayImg": "assets/screenshots/tasktray.png",

      "how.title": "3 ステップで付箋化",
      "how.sub": "Obsidian を持っていれば、すぐに始められます。",
      "how.s1.t": "vault を選ぶ",
      "how.s1.d": "起動して「vault フォルダを選ぶ」から Obsidian vault のルートを指定します。",
      "how.s2.t": "付箋にする md を選ぶ",
      "how.s2.d": "トレイの「新規付箋化…」で md を選ぶか「新規md作成…」で新しく作るか、frontmatter に <code>petatto-md: true</code> を書きます。",
      "how.s3.t": "デスクトップで眺める",
      "how.s3.d": "付箋が現れます。ドラッグで移動、四辺でリサイズ、チェックは付箋の上で。",

      "md.title": "対応している Markdown",
      "md.lead": "表示モードで描画される要素。非対応要素はプレーンテキストとして安全に表示されます（クラッシュしません）。",
      "md.h": "見出し（# 〜 ######）",
      "md.list": "リスト（- / * / 番号付き）",
      "md.check": "チェックボックス（クリックで切替）",
      "md.em": "強調（太字 / 斜体 / 取消線）",
      "md.link": "リンク・本文中の http/https URL",
      "md.plain": "プレーンテキスト",

      "dl.title": "ダウンロード",
      "dl.sub": "Windows 10 / 11（x64）向け。Microsoft Store 版と GitHub の MSI 版を無料で提供しています。",
      "dl.store": "Microsoft Store で入手",
      "dl.button": "最新版をダウンロード（GitHub Releases）",
      "dl.store.note": "Store 版は Microsoft が署名するため SmartScreen 警告が出ません。更新も Microsoft Store が自動配信します。",
      "dl.both": "Store 版と GitHub MSI 版の併用は非推奨です。どちらか一方をご利用ください。",
      "dl.inapp": "既存 GitHub ユーザはアプリ内の「最新版を確認」ボタンから今後も更新できます（再ダウンロード不要）。",
      "dl.req.t": "動作環境",
      "dl.req.os": "Windows 10 / 11（x64）",
      "dl.req.webview": "Microsoft Edge WebView2 ランタイム（未導入時はインストーラが自動取得）",
      "dl.req.obsidian": "Obsidian（付箋化対象の md 作成に推奨）",
      "dl.warn.t": "⚠️ SmartScreen 警告について（GitHub MSI 版）",
      "dl.warn.d":
        'GitHub release 版（MSI）ではコード署名をしていないため、初回起動時に「Windows によって PC が保護されました」が表示されます。「<strong>詳細情報</strong>」→「<strong>実行</strong>」で続行できます（自己責任の前提）。Microsoft Store 版ではこの警告は出ません。',

      "faq.title": "よくある質問",
      "faq.q1": "Obsidian は必須ですか？",
      "faq.a1": "必須ではありませんが、付箋化対象の md を作成・編集するのに想定しています。frontmatter に <code>petatto-md: true</code> を持つ md であれば、どのエディタで作っても構いません。v1.5.0 以降は、トレイの「新規md作成…」で Petatto.md からも新しい md を作成できます。",
      "faq.qlang": "アプリの表示も英語に対応していますか？",
      "faq.alang": 'はい。v1.2.0 以降、メインウィンドウの設定からアプリの表示言語を 日本語 / English で切り替えられます（切替後の再起動で反映されます）。本サイトも日英対応です。',
      "faq.q2": "付箋の色や位置は Obsidian の md に書き込まれますか？",
      "faq.a2": "いいえ。色・位置・サイズはアプリ側の SQLite に保存され、md には <code>petatto-md: true</code> フラグ以外を書きません。Obsidian 側を汚しません。",
      "faq.q3": "データはどこかに送信されますか？",
      "faq.a3": "送信しません。テレメトリ・使用状況・解析は一切収集しません。更新確認（手動ボタン）時だけ「新しいバージョンがあるか」を問い合わせますが、利用状況は含みません。",
      "faq.q4": "付箋を消すとファイルも消えますか？",
      "faq.a4": "消えません。付箋ヘッダの「×」は<strong>付箋化を解除するだけ</strong>で、md ファイル自体は残ります。解除したときに frontmatter の <code>petatto-md</code> を<strong>削除する</strong>か、<code>petatto-md: false</code> として<strong>書き残す</strong>かは設定で選べます（既定は削除）。書き残しておけば、Obsidian 側で <code>petatto-md: false</code> を検索して「前に付箋にしていたノート」を辿れます。",
      "faq.qignore": "特定のフォルダを付箋の対象から外せますか？",
      "faq.aignore": "はい。外したいフォルダに空ファイル <code>.petatto-ignore</code> を置くと、そのフォルダ配下（サブフォルダも含め何段でも）の md は <code>petatto-md: true</code> が付いていても付箋になりません。Templates フォルダなどを除外するのに使えます。ドット始まりのファイルは Obsidian からは作成できないため、エクスプローラなど OS 側で作成してください。",
      "faq.q5": "Mac / Linux 版はありますか？",
      "faq.a5": "現在は Windows 10 / 11（x64）のみ対応しています。",
      "faq.q6": "ライセンス・料金は？",
      "faq.a6": "個人・組織内のいずれの利用でも無料です。再配布・改変・リバースエンジニアリングは禁止されています（独自 EULA）。",
      "faq.more": "もっと詳しく: Tips・こまったとき ↗",

      "roadmap.title": "これからの予定",
      "roadmap.sub": '検討中の機能です。優先度は皆さんの要望（👍）を参考にいたします。GitHub アカウントで各項目に投票できます。または note.com の<a href="https://note.com/just2enough/n/n0e7c73253b99" target="_blank" rel="noopener">記事</a>にコメントを頂いても OK です。',
      "roadmap.aot.t": "常に最前面に固定",
      "roadmap.aot.d": "付箋ごとに「常に最前面」を保てるトグル。",
      "roadmap.appearance.t": "外観の自由度",
      "roadmap.appearance.d": "フォントの選択と、本文の文字色を自由に。",
      "roadmap.update.t": "起動時の更新チェック",
      "roadmap.update.d": "オプトインで、起動時に新しいバージョンの有無だけを確認（既定はオフ）。",
      "roadmap.vote": "👍 で投票",
      "roadmap.ng.title": "あえてやらないこと",
      "roadmap.ng.lead": "機能不足ではなく、Obsidian を壊さず「眺める・チェックする」に徹するための意図的な線引きです。",
      "roadmap.ng.1": "複数 vault の同時利用",
      "roadmap.ng.2": "PC 間の設定同期",
      "roadmap.ng.3": "画像・コードブロック・テーブルの描画",
      "roadmap.ng.4": "mac / Linux 版",
      "roadmap.ng.5": "テレメトリ収集",
      "roadmap.ng.more": "詳しくは「やらないこと」一覧へ ↗",
      "roadmap.ng.more.url": "https://github.com/Just2enough/petatto-md-releases/blob/main/non_goals.md",

      "news.title": "お知らせ・記事",
      "news.sub": "作者が書いた Petatto.md 関連の記事・更新情報。",
      "news.5.src": "note",
      "news.5.title": "思いついたら、その場でペタッと。Petatto.md v1.5.0：デスクトップから新しいノートを作れるようになりました",
      "news.5.url": "https://note.com/just2enough/n/n93228cc3b8e6",
      "news.4.src": "note",
      "news.4.title": "ユーザーさまの声で進化！Petatto.md v1.4.0 ： 「このフォルダは付箋にしたくない」「付箋の履歴を残したい」に対応",
      "news.4.url": "https://note.com/just2enough/n/nd056fd600893",
      "news.3.src": "note",
      "news.3.title": "Petatto.md が Microsoft Store に登場！",
      "news.3.url": "https://note.com/just2enough/n/nb2ec225f9cac",
      "news.1.src": "note",
      "news.1.title": "【無料】mdファイルを付箋としてデスクトップに貼れるアプリ作りました【Petatto.md】",
      "news.1.url": "https://note.com/just2enough/n/n0e7c73253b99",
      "news.2.src": "Zenn",
      "news.2.title": "Obsidianのvaultを壊さないための設計 — Petatto.md開発メモ（哲学編）",
      "news.2.url": "https://zenn.dev/just2enough/articles/e29956afd1e340",

      "footer.tag": "Obsidian の md をデスクトップに付箋として貼る",
      "footer.issues": "バグ報告",
      "footer.privacy": "プライバシー",
      "footer.support": "開発を応援 ☕",
      "footer.license": "個人・組織内利用は無料 / 独自 EULA",
      "footer.analytics": "本サイトは Cookie を使わないプライバシー配慮型アクセス解析（GoatCounter）のみを利用します。アプリ本体は従来どおりテレメトリ0です。",
    },

    en: {
      "meta.description":
        "Stick Markdown (.md files) from your Obsidian vault onto your Windows desktop. Free, zero telemetry.",
      "nav.features": "Features",
      "nav.screenshots": "Screens",
      "nav.how": "How it works",
      "nav.download": "Download",
      "nav.faq": "FAQ",
      "nav.roadmap": "What's next",
      "nav.news": "News",

      "hero.eyebrow": "Obsidian × Windows desktop",
      "hero.title": 'Stick the notes<br />you care about,<br />on your desktop,<br /><span class="hl word-petatto">petatto.</span>',
      "hero.sub":
        'Pin Markdown (.md files) from your Obsidian vault onto your Windows desktop as <strong>sticky notes</strong>. Keep TODOs, work-in-progress, and must-see notes always in view.',
      "hero.download": "Get it from the Microsoft Store",
      "hero.github": "Get from GitHub",
      "hero.meta": "Windows 10 / 11 (x64) · Free · Zero telemetry",

      "trust.privacy": "Zero telemetry",
      "trust.free": "Completely free",
      "trust.obsidian": "Works with Obsidian",
      "trust.local": "Stays on your machine",

      "features.title": "A sticky note that speaks real Markdown.",
      "features.sub": "Obsidian stays your editor. Petatto.md is the resident view to glance at and check off.",
      "feat.flag.t": "Just a frontmatter flag",
      "feat.flag.d": "Add <code>petatto-md: true</code> to a note and it becomes a sticky. App state never pollutes your md.",
      "feat.newmd.t": "New notes straight from the tray",
      "feat.newmd.d": 'Type a name in "New md file…" and a fresh md is created in your vault — flag included — and pinned right away.',
      "feat.palette.t": "2 palettes × 4 colors",
      "feat.palette.d": "Cycle through Milky / Vivid themes, 4 colors each. Color-code by mood or category.",
      "feat.check.t": "Clickable checkboxes",
      "feat.check.d": "Toggle <code>- [ ]</code> with a click. Knock out TODOs right on the note.",
      "feat.sync.t": "Real-time sync",
      "feat.sync.d": "Save in Obsidian and it reflects instantly. Always the latest note on your desktop.",
      "feat.tray.t": "Lives in the tray",
      "feat.tray.d": "No taskbar clutter — left-click brings all notes to front; right-click to show all or arrange.",
      "feat.privacy.t": "Privacy first",
      "feat.privacy.d": "No telemetry, usage, or analytics are ever sent. Everything stays on your machine.",
      "feat.lang.t": "Japanese / English UI",
      "feat.lang.d": "Choose the app's display language — Japanese or English — from settings. Applies after a restart.",
      "feat.ignore.t": "Exclude folders from watching",
      "feat.ignore.d": "Drop a <code>.petatto-ignore</code> file in a folder and everything under it is skipped — keep templates and other areas out of your sticky notes.",

      "shots.title": "What does it look like?",
      "shots.sub": "Sticky notes, main window, and tray — actual screenshots.",
      "shots.vivid": "Vivid palette (4-color cycle)",
      "shots.button": "Header controls (font size ×5, color, un-stick)",
      "shots.buttonImg": "assets/screenshots/button_en.png",
      "shots.edit": "Double-click the body to edit · the title to rename",
      "shots.main": "Main window (vault, sticky notes, appearance, language, maintenance)",
      "shots.mainImg": "assets/screenshots/main_en.png",
      "shots.tray": "Left-click the tray to bring all notes to front · right-click for full control",
      "shots.trayImg": "assets/screenshots/tasktray_en.png",

      "how.title": "Sticky in 3 steps",
      "how.sub": "If you have Obsidian, you can start right away.",
      "how.s1.t": "Pick your vault",
      "how.s1.d": 'Launch and choose your Obsidian vault root from "Select vault folder".',
      "how.s2.t": "Choose an md to stick",
      "how.s2.d": 'Use "New sticky…" or "New md file…" in the tray, or add <code>petatto-md: true</code> to the frontmatter.',
      "how.s3.t": "Glance on your desktop",
      "how.s3.d": "The sticky appears. Drag to move, drag edges to resize, check off right there.",

      "md.title": "Supported Markdown",
      "md.lead": "Elements rendered in view mode. Unsupported elements fall back to plain text safely (no crashes).",
      "md.h": "Headings (# to ######)",
      "md.list": "Lists (- / * / numbered)",
      "md.check": "Checkboxes (click to toggle)",
      "md.em": "Emphasis (bold / italic / strikethrough)",
      "md.link": "Links & inline http/https URLs",
      "md.plain": "Plain text",

      "dl.title": "Download",
      "dl.sub": "For Windows 10 / 11 (x64). Available free from the Microsoft Store and as a GitHub MSI.",
      "dl.store": "Get it from the Microsoft Store",
      "dl.button": "Download latest (GitHub Releases)",
      "dl.store.note": "The Store edition is signed by Microsoft, so no SmartScreen warning appears. Updates are delivered automatically by the Microsoft Store.",
      "dl.both": "Installing both the Store and GitHub MSI editions is not recommended — please use only one.",
      "dl.inapp": "Existing GitHub users can keep updating in-app via the “Check for updates” button — no re-download needed.",
      "dl.req.t": "Requirements",
      "dl.req.os": "Windows 10 / 11 (x64)",
      "dl.req.webview": "Microsoft Edge WebView2 runtime (installer fetches it if missing)",
      "dl.req.obsidian": "Obsidian (recommended for authoring the md to stick)",
      "dl.warn.t": "⚠️ About the SmartScreen warning (GitHub MSI edition)",
      "dl.warn.d":
        'Because the GitHub release (MSI) is not code-signed, the first launch shows "Windows protected your PC". Click "<strong>More info</strong>" → "<strong>Run anyway</strong>" to continue (at your own risk). The Microsoft Store edition does not show this warning.',

      "faq.title": "Frequently asked questions",
      "faq.q1": "Is Obsidian required?",
      "faq.a1": 'Not required, but it\'s the intended way to author and edit the md you stick. Any md with <code>petatto-md: true</code> in its frontmatter works, regardless of which editor created it. Since v1.5.0 you can also create a new md right from the tray ("New md file…").',
      "faq.qlang": "Is the app's interface available in English?",
      "faq.alang": 'Yes. Since v1.2.0, you can switch the app\'s display language between Japanese and English from the settings in the main window (the change applies after a restart). This site is bilingual too.',
      "faq.q2": "Are colors and positions written into my Obsidian md?",
      "faq.a2": "No. Color, position, and size are stored in the app's SQLite. Nothing but the <code>petatto-md: true</code> flag is written to your md. Your Obsidian stays clean.",
      "faq.q3": "Is any data sent anywhere?",
      "faq.a3": "No. No telemetry, usage, or analytics are collected. Only when you press the manual update-check button does it ask whether a newer version exists — no usage data included.",
      "faq.q4": "If I close a sticky, is the file deleted?",
      "faq.a4": "No. The header × button just <strong>unpins</strong> the note — the md file itself stays. You choose what happens to the frontmatter: <strong>delete</strong> the <code>petatto-md</code> key, or <strong>keep</strong> it as <code>petatto-md: false</code> (delete is the default). Keeping it lets you search Obsidian for <code>petatto-md: false</code> to find notes you used to have on your desktop.",
      "faq.qignore": "Can I keep certain folders out of the sticky notes?",
      "faq.aignore": "Yes. Drop an empty <code>.petatto-ignore</code> file into a folder, and every md under it (including nested subfolders, at any depth) is skipped even if it has <code>petatto-md: true</code> — handy for excluding a Templates folder. Since Obsidian can't create dot-files, create it with Explorer or another OS-level tool.",
      "faq.q5": "Is there a Mac / Linux version?",
      "faq.a5": "Currently Windows 10 / 11 (x64) only.",
      "faq.q6": "License and price?",
      "faq.a6": "Free for both personal and in-organization use. Redistribution, modification, and reverse engineering are prohibited (custom EULA).",
      "faq.more": "More: Tips &amp; Troubleshooting ↗",

      "roadmap.title": "What's next",
      "roadmap.sub": 'Features under consideration. Priorities are guided by your requests (👍) — vote on each item with a GitHub account, or just leave a comment on the note.com <a href="https://note.com/just2enough/n/n0e7c73253b99" target="_blank" rel="noopener">article</a>.',
      "roadmap.aot.t": "Always on top",
      "roadmap.aot.d": "A per-note toggle to keep a sticky always in front.",
      "roadmap.appearance.t": "Appearance options",
      "roadmap.appearance.d": "Pick fonts and set the body text color freely.",
      "roadmap.update.t": "Startup update check",
      "roadmap.update.d": "Opt-in: check for a newer version at startup (off by default).",
      "roadmap.vote": "👍 Vote",
      "roadmap.ng.title": "What it won't do",
      "roadmap.ng.lead": "Not missing features — deliberate boundaries that keep \"glance & check\" intact without disturbing Obsidian.",
      "roadmap.ng.1": "Multiple vaults at once",
      "roadmap.ng.2": "Syncing settings across PCs",
      "roadmap.ng.3": "Rendering images / code blocks / tables",
      "roadmap.ng.4": "mac / Linux versions",
      "roadmap.ng.5": "Telemetry collection",
      "roadmap.ng.more": "See the full non-goals list ↗",
      "roadmap.ng.more.url": "https://github.com/Just2enough/petatto-md-releases/blob/main/non_goals.en.md",

      "news.title": "News & Articles",
      "news.sub": "Articles and updates about Petatto.md from the author.",
      "news.5.src": "note",
      "news.5.title": "Jot it down the moment it hits — Petatto.md v1.5.0: create new notes right from your desktop",
      "news.5.url": "https://note.com/just2enough/n/n93228cc3b8e6?hl=en",
      "news.4.src": "note",
      "news.4.title": "Shaped by your feedback! Petatto.md v1.4.0 — answering “don’t pin this folder” and “keep a history of past sticky notes”",
      "news.4.url": "https://note.com/just2enough/n/nd056fd600893?hl=en",
      "news.3.src": "note",
      "news.3.title": "Petatto.md is now on the Microsoft Store!",
      "news.3.url": "https://note.com/just2enough/n/nb2ec225f9cac?hl=en",
      "news.1.src": "note",
      "news.1.title": "[Free] I made an app that lets you stick md files to your desktop as sticky notes [Petatto.md]",
      "news.1.url": "https://note.com/just2enough/n/n0e7c73253b99?hl=en",
      "news.2.src": "Zenn",
      "news.2.title": "Designing Petatto.md to Protect Your Obsidian Vault: A Philosophical Approach",
      "news.2.url": "https://zenn.dev/just2enough/articles/e29956afd1e340?locale=en",

      "footer.tag": "Stick Obsidian md onto your desktop as sticky notes",
      "footer.issues": "Report a bug",
      "footer.privacy": "Privacy",
      "footer.support": "Support the project ☕",
      "footer.license": "Free for personal & in-org use / custom EULA",
      "footer.analytics": "This site uses only privacy-friendly, cookieless analytics (GoatCounter). The app itself remains zero-telemetry as always.",
    },
  };

  const STORAGE_KEY = "petatto-lang";

  function detectLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "ja" || saved === "en") return saved;
    const nav = (navigator.language || "en").toLowerCase();
    return nav.startsWith("ja") ? "ja" : "en";
  }

  function applyLang(lang) {
    const dict = I18N[lang] || I18N.ja;

    // text / html
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = dict[key];
      if (val == null) return;
      if (el.tagName === "META") {
        el.setAttribute("content", val);
      } else {
        el.innerHTML = val;
      }
    });

    // image src swap (annotated screenshots)
    document.querySelectorAll("[data-i18n-src]").forEach((el) => {
      const key = el.getAttribute("data-i18n-src");
      const val = dict[key];
      if (val) el.setAttribute("src", val);
    });

    // link href swap (外部記事の言語別 URL: note/Zenn の日本語版・英語版)
    document.querySelectorAll("[data-i18n-href]").forEach((el) => {
      const key = el.getAttribute("data-i18n-href");
      const val = dict[key];
      if (val) el.setAttribute("href", val);
    });

    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    document.querySelectorAll(".lang-toggle button").forEach((btn) => {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });
  }

  document.querySelectorAll(".lang-toggle button").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang")));
  });

  // モバイル: ハンバーガーメニューの開閉
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  if (header && navToggle) {
    const setNav = (open) => {
      header.classList.toggle("nav-open", open);
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    };
    navToggle.addEventListener("click", (e) => {
      e.stopPropagation(); // document 側のクローズ処理に拾わせない
      setNav(!header.classList.contains("nav-open"));
    });
    // ナビリンクをタップしたら閉じる
    document.querySelectorAll("#primary-nav a").forEach((a) => {
      a.addEventListener("click", () => setNav(false));
    });
    // メニュー外タップ / Esc で閉じる
    document.addEventListener("click", (e) => {
      if (!header.classList.contains("nav-open")) return;
      if (e.target.closest(".nav")) return;
      setNav(false);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setNav(false);
    });
  }

  // ブランドロゴ: 確実にページ最上部へ戻す
  // （id="top" が sticky ヘッダー自身に付いており、scroll-padding-top との干渉で
  //   モバイルだと #top アンカーが最上部まで戻らないため、JS で補正する）
  const brand = document.querySelector(".brand");
  if (brand) {
    brand.addEventListener("click", (e) => {
      e.preventDefault();
      if (header) header.classList.remove("nav-open");
      if (navToggle) navToggle.setAttribute("aria-expanded", "false");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  applyLang(detectLang());
})();
