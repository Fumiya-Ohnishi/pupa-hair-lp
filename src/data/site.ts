/**
 * site.ts
 * ─────────────────────────────────────────────────────────
 * 店舗情報・CTA URL・SNS リンクなど、サイト全体で参照する定数。
 * 変更はここ 1 か所で完結します。
 * ─────────────────────────────────────────────────────────
 */

export const siteInfo = {
  /** 店舗正式名称 */
  name: "pupa hair MEN'S DESIGN FACTORY",
  /** 表示用略称（ロゴ周辺など） */
  shortName: "pupa hair",
  /** 所在地 */
  address: "愛媛県松山市土居町738-11",
  /** 電話番号（表示用。不要な場合は空文字） */
  tel: "",
  /** 営業時間 */
  businessHours: "9:30〜19:30（日祝 9:00〜19:00）",
  /** 定休日 */
  holiday: "毎週月曜・第1月火曜・第3日月火曜",
  /** 駐車場情報 */
  parking: "駐車場あり",
  /** アクセス補足 */
  access: "松山IC より車で約5分",

  // ── CTA リンク ──────────────────────────────────────────
  /**
   * ⚠️ 公開前に必ず差し替えてください。
   * LINE 公式アカウントの友だち追加 URL を設定します。
   * 例: "https://lin.ee/XXXXXXXX"
   */
  lineUrl: "LINE_URL_HERE",

  /** HotPepper 店舗トップ */
  hotpepperUrl: "https://beauty.hotpepper.jp/slnH000237638/",
  /** HotPepper クーポンページ */
  hotpepperCouponUrl: "https://beauty.hotpepper.jp/slnH000237638/coupon/",

  // ── SNS ─────────────────────────────────────────────────
  instagram: "https://www.instagram.com/", // ← 実アカウントURLに差し替え
  // twitter: "",  // 必要に応じて追加

  // ── Google マップ埋め込み ────────────────────────────────
  /**
   * Google マップ埋め込み用 src URL。
   * Google Maps → 共有 → 地図を埋め込む → src="" の値をコピーして設定。
   */
  googleMapEmbedUrl:
    "https://maps.google.com/maps?q=%E6%84%9B%E5%AA%9B%E7%9C%8C%E6%9D%BE%E5%B1%B1%E5%B8%82%E5%9C%9F%E5%B1%85%E7%94%BA738-11&t=&z=16&ie=UTF8&iwloc=&output=embed",
} as const;

// ── SEO メタ情報 ─────────────────────────────────────────
export const seoMeta = {
  title:
    "松山のメンズ美容室なら pupa hair MEN'S DESIGN FACTORY｜LINE予約受付中",
  description:
    "松山市土居町のメンズ特化サロン。バリ島モチーフの落ち着いた空間で、カット・パーマ・シェービング・眉ケアまで対応。LINEから予約・相談受付中。",
  ogImage: "/images/ogp.jpg",
  siteUrl: "https://YOUR_DOMAIN_HERE", // ← 実際のドメインに差し替え
} as const;
