# pupa hair LP 公開前チェックリスト

## 1. コンテンツ差し替え

- [ ] `src/data/site.ts` → `lineUrl` を実際の LINE 友だち追加 URL に変更
- [ ] `src/data/site.ts` → `instagram` を実際の Instagram アカウント URL に変更
- [ ] `src/data/site.ts` → `googleMapEmbedUrl` を実際の Google マップ埋め込み URL に変更
- [ ] `src/data/site.ts` → `siteUrl` を実際のドメインに変更
- [ ] `src/data/site.ts` → 営業時間・定休日・住所・アクセスが最新か確認
- [ ] `src/data/offers.ts` → 各メニューの価格・内容が最新か確認
- [ ] `src/data/reviews.ts` → ダミーの口コミを実際の口コミに差し替え（表現・文言を確認）
- [ ] `src/components/StaffSection.tsx` → スタッフ名・プロフィール・メッセージを実際の情報に差し替え

## 2. 画像差し替え

- [ ] `/public/images/hero.jpg` → ヒーロービジュアル（店内 or 施術写真）を配置
- [ ] `/public/images/interior.jpg` → 店内写真を配置
- [ ] `/public/images/shaving.jpg` → シェービング施術写真を配置
- [ ] `/public/images/style-01.jpg` → メンズスタイル写真を配置
- [ ] `/public/images/style-02.jpg` → メンズスタイル写真を配置
- [ ] `/public/images/exterior.jpg` → 外観写真を配置
- [ ] `/public/images/menu-card-01.jpg` → メニューカード写真を配置
- [ ] `/public/images/menu-card-02.jpg` → メニューカード写真を配置
- [ ] `/public/images/ogp.jpg` → OGP 用画像（1200×630px 推奨）を配置
- [ ] `/public/images/staff-01.jpg` → スタッフ写真を配置
- [ ] **画像の著作権・転載可否を必ず確認**（ホットペッパー掲載素材を使う場合は掲載許可を取ること）

## 3. CTA・リンク確認

- [ ] LINE 友だち追加リンクが正しく動作するか確認
- [ ] HotPepper リンク（店舗トップ・クーポン）が正しく開くか確認
- [ ] すべての CTA ボタンが `siteInfo.lineUrl` を参照しているか確認

## 4. SEO / OGP

- [ ] `src/data/site.ts` の `seoMeta` の title・description・siteUrl が正しいか確認
- [ ] `/public/images/ogp.jpg` を配置して OGP 画像が表示されるか確認
  - 確認ツール: https://developers.facebook.com/tools/debug/ / Card Validator
- [ ] `next.config.ts` の `remotePatterns` から本番不要のドメインを削除

## 5. 表示・パフォーマンス

- [ ] スマートフォン（375px〜）での表示崩れがないか確認
- [ ] PC（1280px〜）での表示が正しいか確認
- [ ] フローティングボタン（スマホ）がスクロール後に表示されるか確認
- [ ] ギャラリーカテゴリフィルタが動作するか確認
- [ ] FAQ アコーディオンが正しく開閉するか確認
- [ ] `next build` が警告・エラーなく完了するか確認
- [ ] LCP（最大コンテンツ描画）が 2.5 秒以内か確認（PageSpeed Insights）

## 6. アニメーション

- [ ] Hero テキストがフェードアップするか確認
- [ ] 各セクションがスクロールでフェードインするか確認（1回のみ）
- [ ] `prefers-reduced-motion` を有効にした環境でアニメーションが止まるか確認

## 7. アクセシビリティ

- [ ] キーボード操作（Tab キー）でナビゲーション・ボタンにフォーカスできるか確認
- [ ] 全画像に適切な `alt` テキストが設定されているか確認
- [ ] コントラスト比が WCAG AA 基準（4.5:1）を満たしているか確認
- [ ] 見出し階層（h1 → h2 → h3）が正しいか確認

## 8. アナリティクス

- [ ] GA4 または GTM の測定 ID を `src/app/layout.tsx` に設定
- [ ] LINE CTA クリックイベントが正しく計測されるか確認
  - `click_line_fv`（Hero）
  - `click_line_offer`（Offer セクション）
  - `click_line_footer`（Footer CTA）
  - `click_line_floating`（フローティングボタン）
  - `click_hotpepper_sub`（HotPepper サブ導線）

## 9. 本番デプロイ前

- [ ] `next.config.ts` の `images.remotePatterns` を本番用に整理
- [ ] 環境変数（`.env.local` など）が正しく設定されているか確認
- [ ] `next build && next start` で本番ビルドが正常起動するか確認
- [ ] カスタムドメインの DNS 設定が完了しているか確認
- [ ] HTTPS が有効か確認

---

> このファイルはプロジェクトルートに残しておき、公開後も運用メモとして活用してください。
