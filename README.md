# pupa hair MEN'S DESIGN FACTORY — LP

## セットアップ

```bash
npm install
npm run dev
```

## 最初にやること

1. `src/data/site.ts` を開いて `LINE_URL_HERE` を実際の LINE 友だち追加 URL に変更
2. `public/images/` に画像を配置（ファイル名は `hero.jpg`, `interior.jpg` など）
3. `CHECKLIST.md` の項目を順番に確認

## ディレクトリ構成

```
/
├── public/images/       # 差し替え対象の画像
├── src/
│   ├── app/             # Next.js App Router
│   ├── components/      # 各セクションコンポーネント
│   ├── data/            # コンテンツデータ（ここだけ編集すればOK）
│   └── lib/analytics.ts # GA4/GTM イベント送信
└── CHECKLIST.md         # 公開前チェックリスト
```

## コンテンツ変更の手引き

| 変更したい内容 | 編集ファイル |
|---|---|
| LINE URL / 店舗情報 / 営業時間 | `src/data/site.ts` |
| メニュー・価格 | `src/data/offers.ts` |
| FAQ | `src/data/faq.ts` |
| 口コミ | `src/data/reviews.ts` |
| ギャラリー画像 | `src/data/gallery.ts` |
| スタッフ情報 | `src/components/StaffSection.tsx` 内の `staff` 配列 |
| アナリティクス設定 | `src/app/layout.tsx` + `src/lib/analytics.ts` |
