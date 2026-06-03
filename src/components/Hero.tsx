"use client";
/**
 * Hero.tsx
 * ─────────────────────────────────────────────────────────
 * FV セクション。
 * - 背景画像にごくわずかなズームアニメーション
 * - テキストはフェードアップ
 * - LINE CTA ×2、安心バッジ
 * ─────────────────────────────────────────────────────────
 */
import { trackLineClick } from "@/lib/analytics";
import { siteInfo } from "@/data/site";

function LineIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.145 2 11.243c0 3.362 1.878 6.32 4.737 8.077.207.122.336.345.306.588l-.31 2.35c-.044.335.302.59.602.432l2.617-1.37c.173-.09.374-.112.562-.059.595.162 1.22.249 1.861.249 5.523 0 10-4.145 10-9.267S17.523 2 12 2zm-3.75 11.875H6.875a.625.625 0 0 1-.625-.625V8.125a.625.625 0 0 1 1.25 0v4.5h1.75a.625.625 0 0 1 0 1.25zm2.5 0a.625.625 0 0 1-1.25 0V8.125a.625.625 0 0 1 1.25 0v5.75zm4.75 0a.625.625 0 0 1-.538-.308l-2.462-4.002v3.685a.625.625 0 0 1-1.25 0V8.125a.625.625 0 0 1 1.163-.317l2.462 4.002V8.125a.625.625 0 0 1 1.25 0v5.125a.625.625 0 0 1-.625.625zm3.125 0h-1.875a.625.625 0 0 1-.625-.625V8.125a.625.625 0 0 1 .625-.625h1.875a.625.625 0 0 1 0 1.25H17.25v1.5h1.25a.625.625 0 0 1 0 1.25H17.25v1.5h1.375a.625.625 0 0 1 0 1.25z"/>
    </svg>
  );
}

// 安心バッジ一覧
const badges = [
  "メンズ特化",
  "駐車場あり",
  "松山IC近く",
  "完全予約制",
];

export default function Hero() {
  return (
    <section
      className="relative min-h-[90svh] md:min-h-[88vh] flex items-end overflow-hidden"
      aria-label="ファーストビュー"
    >
      {/* ── 背景画像（ズームアニメーション） ─────────────── */}
      <div className="absolute inset-0 -z-10">
        {/*
          ⚠️ 画像差し替えポイント
          /public/images/hero.jpg に店内またはメンズ施術写真を配置してください。
          next/image を使う場合は下記の img タグを Image コンポーネントに置き換えてください。
        */}
        <img
          src="/images/hero.jpg"
          alt="pupa hair 店内の落ち着いた空間"
          className="w-full h-full object-cover animate-zoom-slow"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        {/* オーバーレイ（テキスト可読性確保） */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a120b]/75 via-[#1a120b]/30 to-transparent" />
      </div>

      {/* ── テキストエリア ────────────────────────────────── */}
      <div className="container-content w-full pb-16 md:pb-24">
        <div className="max-w-lg">
          {/* ラベル */}
          <p
            className="text-xs tracking-[0.25em] text-white/70 uppercase mb-4
                       opacity-0 animate-fade-up [animation-delay:0.1s] [animation-fill-mode:forwards]"
          >
            Matsuyama / Men&apos;s Grooming Salon
          </p>

          {/* メインコピー */}
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-white leading-tight mb-4
                       opacity-0 animate-fade-up [animation-delay:0.25s] [animation-fill-mode:forwards]"
          >
            やりすぎない。<br />
            でも、ちゃんとかっこいい。
          </h1>

          {/* サブコピー */}
          <p
            className="text-sm md:text-base text-white/80 leading-relaxed mb-8
                       opacity-0 animate-fade-up [animation-delay:0.45s] [animation-fill-mode:forwards]"
          >
            バリ島モチーフの落ち着いた空間で、カット・シェービング・眉デザインまで整える、
            松山のメンズグルーミングサロン。
          </p>

          {/* CTA ボタン群 */}
          <div
            className="flex flex-col sm:flex-row gap-3 mb-8
                       opacity-0 animate-fade-up [animation-delay:0.6s] [animation-fill-mode:forwards]"
          >
            <a
              href={siteInfo.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-line text-base"
              onClick={() => trackLineClick("fv")}
              aria-label="LINEで予約する（新しいタブで開きます）"
            >
              <LineIcon />
              LINEで予約する
            </a>
            <a
              href={siteInfo.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white
                         rounded-full px-7 py-4 text-sm transition-all duration-200
                         hover:border-white hover:bg-white/10"
              onClick={() => trackLineClick("fv")}
              aria-label="LINEで空き状況を確認（新しいタブで開きます）"
            >
              <LineIcon />
              空き状況を確認
            </a>
          </div>

          {/* 安心バッジ */}
          <ul
            className="flex flex-wrap gap-2
                       opacity-0 animate-fade-up [animation-delay:0.75s] [animation-fill-mode:forwards]"
            aria-label="サービスの特徴"
          >
            {badges.map((badge) => (
              <li
                key={badge}
                className="text-xs text-white/80 border border-white/25 rounded-full px-3 py-1 backdrop-blur-sm"
              >
                {badge}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
