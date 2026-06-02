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

      "hero.eyebrow": "Obsidian × Windows デスクトップ",
      "hero.title": '見たいメモを、<br />デスクトップに<span class="nowrap"><span class="hl">ペタッと</span>。</span>',
      "hero.sub":
        "Obsidian vault の Markdown（.mdファイル）を、Windows デスクトップに<strong>付箋</strong>として貼り付け。TODO・進行中タスク・今見ておきたいメモを、いつも目に入る場所へ。",
      "hero.download": "Windows 版をダウンロード",
      "hero.github": "GitHub で見る",
      "hero.meta": "Windows 10 / 11（x64）・無料・テレメトリ 0",

      "trust.privacy": "テレメトリ・解析 0",
      "trust.free": "完全無料",
      "trust.obsidian": "Obsidian と連携",
      "trust.local": "データは端末内だけ",

      "features.title": "付箋なのに、ちゃんと Markdown。",
      "features.sub": "編集の主は Obsidian。Petatto.md は「眺める・チェックする」ための常駐ビューです。",
      "feat.flag.t": "frontmatter フラグだけ",
      "feat.flag.d": "<code>petatto-md: true</code> を md に書くだけで付箋化。アプリ状態は md を汚しません。",
      "feat.palette.t": "2 パレット × 4 色",
      "feat.palette.d": "ミルキー / ビビッドの 2 テーマ、各 4 色を巡回。気分やカテゴリで色分け。",
      "feat.check.t": "チェックボックス操作",
      "feat.check.d": "<code>- [ ]</code> をクリックで切替。付箋の上でそのまま TODO を消化できます。",
      "feat.sync.t": "リアルタイム同期",
      "feat.sync.d": "Obsidian 側で保存すると即反映。常に最新のメモがデスクトップに。",
      "feat.tray.t": "システムトレイ常駐",
      "feat.tray.d": "タスクバーを占有せず、トレイから一括表示・整列・最前面化。",
      "feat.privacy.t": "プライバシー最優先",
      "feat.privacy.d": "テレメトリ・使用状況・解析を一切送信しません。すべて端末内で完結。",

      "shots.title": "どんな見た目？",
      "shots.sub": "付箋・メインウィンドウ・トレイ。実際の画面です。",
      "shots.vivid": "ビビッドパレット（4 色循環）",
      "shots.button": "ヘッダの操作（フォントサイズ・色・付箋化解除）",
      "shots.buttonImg": "assets/screenshots/button_ja.png",
      "shots.edit": "本文ダブルクリックで編集モード／タイトルのダブルクリックでリネーム",
      "shots.main": "メインウィンドウ（vault 設定・外観・メンテナンス）",
      "shots.tray": "トレイメニューから一元操作",

      "how.title": "3 ステップで付箋化",
      "how.sub": "Obsidian を持っていれば、すぐに始められます。",
      "how.s1.t": "vault を選ぶ",
      "how.s1.d": "起動して「vault フォルダを選ぶ」から Obsidian vault のルートを指定します。",
      "how.s2.t": "付箋にする md を選ぶ",
      "how.s2.d": "トレイの「新規付箋化…」で md を選ぶか、frontmatter に <code>petatto-md: true</code> を書きます。",
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
      "dl.sub": "Windows 10 / 11（x64）向けの MSI インストーラ。無料です。",
      "dl.button": "最新版をダウンロード（GitHub Releases）",
      "dl.req.t": "動作環境",
      "dl.req.os": "Windows 10 / 11（x64）",
      "dl.req.webview": "Microsoft Edge WebView2 ランタイム（未導入時はインストーラが自動取得）",
      "dl.req.obsidian": "Obsidian（付箋化対象の md 作成に推奨）",
      "dl.warn.t": "⚠️ SmartScreen 警告について",
      "dl.warn.d":
        'コード署名をしていないため、初回起動時に「Windows によって PC が保護されました」が表示されます。「<strong>詳細情報</strong>」→「<strong>実行</strong>」で続行できます（自己責任の前提）。',

      "faq.title": "よくある質問",
      "faq.q1": "Obsidian は必須ですか？",
      "faq.a1": "必須ではありませんが、付箋化対象の md を作成・編集するのに想定しています。frontmatter に <code>petatto-md: true</code> を持つ md であれば、どのエディタで作っても構いません。",
      "faq.qlang": "アプリの表示も英語に対応していますか？",
      "faq.alang": '現在、アプリ本体の UI は日本語のみで、英語 UI は今後対応予定です。（本サイトは日英対応ですが、アプリ内の表示は日本語になります。）優先度の参考にするので、ご希望の方は <a href="https://github.com/Just2enough/petatto-md-releases/issues/1" target="_blank" rel="noopener">GitHub Issue「UI翻訳」</a>への 👍 で教えてください。',
      "faq.q2": "付箋の色や位置は Obsidian の md に書き込まれますか？",
      "faq.a2": "いいえ。色・位置・サイズはアプリ側の SQLite に保存され、md には <code>petatto-md: true</code> フラグ以外を書きません。Obsidian 側を汚しません。",
      "faq.q3": "データはどこかに送信されますか？",
      "faq.a3": "送信しません。テレメトリ・使用状況・解析は一切収集しません。更新確認（手動ボタン）時だけ「新しいバージョンがあるか」を問い合わせますが、利用状況は含みません。",
      "faq.q4": "付箋を消すとファイルも消えますか？",
      "faq.a4": "消えません。付箋ヘッダの「×」は frontmatter の <code>petatto-md: true</code> を削除するだけで、md ファイル自体は残ります。",
      "faq.q5": "Mac / Linux 版はありますか？",
      "faq.a5": "現在は Windows 10 / 11（x64）のみ対応しています。",
      "faq.q6": "ライセンス・料金は？",
      "faq.a6": "個人・組織内のいずれの利用でも無料です。再配布・改変・リバースエンジニアリングは禁止されています（独自 EULA）。",

      "footer.tag": "Obsidian の md をデスクトップに付箋として貼る",
      "footer.issues": "バグ報告",
      "footer.support": "開発を応援 ☕",
      "footer.license": "個人・組織内利用は無料 / 独自 EULA",
    },

    en: {
      "meta.description":
        "Stick Markdown (.md files) from your Obsidian vault onto your Windows desktop. Free, zero telemetry.",
      "nav.features": "Features",
      "nav.screenshots": "Screens",
      "nav.how": "How it works",
      "nav.download": "Download",
      "nav.faq": "FAQ",

      "hero.eyebrow": "Obsidian × Windows desktop",
      "hero.title": 'Stick the notes<br />you care about,<br />on your desktop,<br /><span class="hl word-petatto">petatto.</span>',
      "hero.sub":
        'Pin Markdown (.md files) from your Obsidian vault onto your Windows desktop as <strong>sticky notes</strong>. Keep TODOs, work-in-progress, and must-see notes always in view. <span class="soon">🌐 English app UI coming soon!</span>',
      "hero.download": "Download for Windows",
      "hero.github": "View on GitHub",
      "hero.meta": "Windows 10 / 11 (x64) · Free · Zero telemetry",

      "trust.privacy": "Zero telemetry",
      "trust.free": "Completely free",
      "trust.obsidian": "Works with Obsidian",
      "trust.local": "Stays on your machine",

      "features.title": "A sticky note that speaks real Markdown.",
      "features.sub": "Obsidian stays your editor. Petatto.md is the resident view to glance at and check off.",
      "feat.flag.t": "Just a frontmatter flag",
      "feat.flag.d": "Add <code>petatto-md: true</code> to a note and it becomes a sticky. App state never pollutes your md.",
      "feat.palette.t": "2 palettes × 4 colors",
      "feat.palette.d": "Cycle through Milky / Vivid themes, 4 colors each. Color-code by mood or category.",
      "feat.check.t": "Clickable checkboxes",
      "feat.check.d": "Toggle <code>- [ ]</code> with a click. Knock out TODOs right on the note.",
      "feat.sync.t": "Real-time sync",
      "feat.sync.d": "Save in Obsidian and it reflects instantly. Always the latest note on your desktop.",
      "feat.tray.t": "Lives in the tray",
      "feat.tray.d": "No taskbar clutter — show all, arrange, or bring to front from the system tray.",
      "feat.privacy.t": "Privacy first",
      "feat.privacy.d": "No telemetry, usage, or analytics are ever sent. Everything stays on your machine.",

      "shots.title": "What does it look like?",
      "shots.sub": "Sticky notes, main window, and tray — actual screenshots.",
      "shots.vivid": "Vivid palette (4-color cycle)",
      "shots.button": "Header controls (font size, color, un-stick)",
      "shots.buttonImg": "assets/screenshots/button_en.png",
      "shots.edit": "Double-click the body to edit · the title to rename",
      "shots.main": "Main window (vault, appearance, maintenance)",
      "shots.tray": "Manage everything from the tray menu",

      "how.title": "Sticky in 3 steps",
      "how.sub": "If you have Obsidian, you can start right away.",
      "how.s1.t": "Pick your vault",
      "how.s1.d": 'Launch and choose your Obsidian vault root from "Select vault folder".',
      "how.s2.t": "Choose an md to stick",
      "how.s2.d": 'Use "New sticky…" in the tray, or add <code>petatto-md: true</code> to the frontmatter.',
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
      "dl.sub": "MSI installer for Windows 10 / 11 (x64). Free.",
      "dl.button": "Download latest (GitHub Releases)",
      "dl.req.t": "Requirements",
      "dl.req.os": "Windows 10 / 11 (x64)",
      "dl.req.webview": "Microsoft Edge WebView2 runtime (installer fetches it if missing)",
      "dl.req.obsidian": "Obsidian (recommended for authoring the md to stick)",
      "dl.warn.t": "⚠️ About the SmartScreen warning",
      "dl.warn.d":
        'Because the app is not code-signed, the first launch shows "Windows protected your PC". Click "<strong>More info</strong>" → "<strong>Run anyway</strong>" to continue (at your own risk).',

      "faq.title": "Frequently asked questions",
      "faq.q1": "Is Obsidian required?",
      "faq.a1": "Not required, but it's the intended way to author and edit the md you stick. Any md with <code>petatto-md: true</code> in its frontmatter works, regardless of which editor created it.",
      "faq.qlang": "Is the app's interface available in English?",
      "faq.alang": 'The app interface is currently Japanese only; an English UI is planned. (This site is bilingual, but the app itself shows Japanese for now.) If you\'d like it prioritized, a 👍 on the <a href="https://github.com/Just2enough/petatto-md-releases/issues/1" target="_blank" rel="noopener">"UI translation" GitHub issue</a> helps us gauge demand.',
      "faq.q2": "Are colors and positions written into my Obsidian md?",
      "faq.a2": "No. Color, position, and size are stored in the app's SQLite. Nothing but the <code>petatto-md: true</code> flag is written to your md. Your Obsidian stays clean.",
      "faq.q3": "Is any data sent anywhere?",
      "faq.a3": "No. No telemetry, usage, or analytics are collected. Only when you press the manual update-check button does it ask whether a newer version exists — no usage data included.",
      "faq.q4": "If I close a sticky, is the file deleted?",
      "faq.a4": "No. The header × button only removes the <code>petatto-md: true</code> frontmatter; the md file itself stays.",
      "faq.q5": "Is there a Mac / Linux version?",
      "faq.a5": "Currently Windows 10 / 11 (x64) only.",
      "faq.q6": "License and price?",
      "faq.a6": "Free for both personal and in-organization use. Redistribution, modification, and reverse engineering are prohibited (custom EULA).",

      "footer.tag": "Stick Obsidian md onto your desktop as sticky notes",
      "footer.issues": "Report a bug",
      "footer.support": "Support the project ☕",
      "footer.license": "Free for personal & in-org use / custom EULA",
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

    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    document.querySelectorAll(".lang-toggle button").forEach((btn) => {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });
  }

  document.querySelectorAll(".lang-toggle button").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang")));
  });

  applyLang(detectLang());
})();
