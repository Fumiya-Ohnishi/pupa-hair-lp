/**
 * offers.ts
 * ─────────────────────────────────────────────────────────
 * 初回オファーメニューデータ。
 * 価格・内容変更はここで完結します。
 * ─────────────────────────────────────────────────────────
 */

export type Offer = {
  id: string;
  /** メニュー名 */
  name: string;
  /** 価格表示文字列（税込） */
  price: string;
  /** 内容（含まれるメニュー一覧） */
  includes: string[];
  /** お客様へのベネフィット */
  benefit: string;
  /** CTAボタンラベル */
  ctaLabel: string;
  /** アナリティクスイベント名 */
  analyticsEvent: string;
  /** 画像パス（/public/images/ 以下） */
  image: string;
  /** alt テキスト */
  imageAlt: string;
  /** おすすめバッジを表示するか */
  featured?: boolean;
};

export const offers: Offer[] = [
  {
    id: "full-course-cut",
    name: "フルコースカット",
    price: "¥4,620（税込）",
    includes: ["カット", "眉デザイン", "もみあげデザイン", "シェービング", "スタイリングブロー"],
    benefit:
      "一度でまるごと整う。「清潔感を上げたい」という方に最初の一歩としておすすめのコースです。",
    ctaLabel: "LINEで予約する",
    analyticsEvent: "click_line_offer",
    image: "/images/shaving.jpg",
    imageAlt: "フルコースカット施術イメージ",
    featured: true,
  },
  {
    id: "mens-polish",
    name: "男磨きコース",
    price: "詳細はLINEで確認",
    includes: ["カット", "スカルプケア", "眉デザイン", "もみあげデザイン"],
    benefit:
      "頭皮からしっかりケア。清潔感と爽快感を同時に手に入れたい方へ。",
    ctaLabel: "LINEで相談する",
    analyticsEvent: "click_line_offer",
    image: "/images/style-01.jpg",
    imageAlt: "男磨きコース施術イメージ",
  },
  {
    id: "mens-color",
    name: "メンズカラー",
    price: "詳細はLINEで確認",
    includes: ["カット", "カラー", "眉デザイン", "もみあげデザイン", "トリートメント"],
    benefit:
      "白髪カバーから印象チェンジまで。自然な仕上がりで翌日からすぐ使えるスタイルに。",
    ctaLabel: "LINEで相談する",
    analyticsEvent: "click_line_offer",
    image: "/images/style-02.jpg",
    imageAlt: "メンズカラー施術イメージ",
  },
  {
    id: "mens-perm",
    name: "メンズパーマ",
    price: "詳細はLINEで確認",
    includes: ["カット", "パーマ", "眉デザイン", "もみあげデザイン", "トリートメント"],
    benefit:
      "朝のセットがぐっとラクになる。パーマ初心者でもまず相談から始められます。",
    ctaLabel: "LINEで相談する",
    analyticsEvent: "click_line_offer",
    image: "/images/menu-card-01.jpg",
    imageAlt: "メンズパーマ施術イメージ",
  },
];
