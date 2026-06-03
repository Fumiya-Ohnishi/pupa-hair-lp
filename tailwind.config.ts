import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── ブランドカラー ──────────────────────────────
        bg: {
          DEFAULT: "#F7F3EE",   // ページ背景
          muted: "#F0EBE3",     // セクション交互背景
        },
        text: {
          DEFAULT: "#2E241D",   // メインテキスト
          sub: "#6E6258",       // サブテキスト
        },
        accent: {
          DEFAULT: "#7A8B68",   // オリーブグリーン（アクセント）
          dark: "#5F6E50",      // ホバー用
        },
        border: "#DDD8D1",      // ボーダー
        line: {
          DEFAULT: "#06C755",   // LINE グリーン
          dark: "#05A847",      // hover
        },
      },
      fontFamily: {
        sans: [
          "\"Hiragino Sans\"",
          "\"Hiragino Kaku Gothic ProN\"",
          "\"Noto Sans JP\"",
          "sans-serif",
        ],
        // 見出し用：少し品のある書体
        heading: [
          "\"Hiragino Mincho ProN\"",
          "\"Yu Mincho\"",
          "\"Noto Serif JP\"",
          "serif",
        ],
      },
      spacing: {
        section: "5rem",       // セクション上下余白
        "section-sm": "3rem",
      },
      maxWidth: {
        content: "1080px",
      },
      boxShadow: {
        card: "0 2px 12px rgba(46, 36, 29, 0.06)",
        "card-hover": "0 4px 20px rgba(46, 36, 29, 0.10)",
      },
      borderRadius: {
        card: "10px",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "zoom-slow": {
          "0%":   { transform: "scale(1.00)" },
          "100%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        "fade-up":   "fade-up 0.8s ease forwards",
        "fade-in":   "fade-in 0.6s ease forwards",
        "zoom-slow": "zoom-slow 8s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
