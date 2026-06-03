/**
 * analytics.ts
 * ─────────────────────────────────────────────────────────
 * GA4 / GTM イベント送信ユーティリティ。
 *
 * 使い方:
 *   import { trackEvent } from "@/lib/analytics";
 *   trackEvent("click_line_fv");
 *
 * GA4 を直接使う場合は gtag を利用。
 * GTM 経由の場合は dataLayer.push を利用。
 * どちらも対応できるよう両方の実装を含んでいます。
 * ─────────────────────────────────────────────────────────
 */

// ── イベント名の型定義（typo 防止） ──────────────────────
export type AnalyticsEvent =
  | "click_line_fv"          // Hero セクションの LINE CTA
  | "click_line_offer"       // Offer セクションの LINE CTA
  | "click_line_footer"      // Footer CTA の LINE ボタン
  | "click_line_floating"    // フローティングボタン
  | "click_hotpepper_sub";   // HotPepper サブ導線

// ── gtag 型定義（GA4 SDK が読み込まれていない環境でも壊れないよう宣言） ──
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * イベントを送信する。
 * GA4 gtag.js と GTM dataLayer の両方に対応。
 *
 * @param eventName - イベント名
 * @param params    - 追加パラメータ（省略可）
 */
export function trackEvent(
  eventName: AnalyticsEvent,
  params?: Record<string, unknown>
): void {
  // ── GA4 gtag ─────────────────────────────────────────
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params ?? {});
  }

  // ── GTM dataLayer ─────────────────────────────────────
  if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...params,
    });
  }

  // ── 開発環境: コンソールログ ──────────────────────────
  if (process.env.NODE_ENV === "development") {
    console.log("[Analytics]", eventName, params);
  }
}

/**
 * LINE CTA クリックイベントのラッパー。
 * 呼び出し元（セクション名）を渡すだけで適切なイベント名に変換します。
 */
export function trackLineClick(
  section: "fv" | "offer" | "footer" | "floating"
): void {
  const eventMap: Record<typeof section, AnalyticsEvent> = {
    fv:       "click_line_fv",
    offer:    "click_line_offer",
    footer:   "click_line_footer",
    floating: "click_line_floating",
  };
  trackEvent(eventMap[section]);
}
