"use client";
/**
 * FooterCta.tsx
 * ─────────────────────────────────────────────────────────
 * ページ最下部の最終 CTA。
 * LINE 予約・相談を主 CTA、HotPepper をサブ導線として配置。
 * ─────────────────────────────────────────────────────────
 */
import { siteInfo } from "@/data/site";
import { trackLineClick, trackEvent } from "@/lib/analytics";

function LineIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.145 2 11.243c0 3.362 1.878 6.32 4.737 8.077.207.122.336.345.306.588l-.31 2.35c-.044.335.302.59.602.432l2.617-1.37c.173-.09.374-.112.562-.059.595.162 1.22.249 1.861.249 5.523 0 10-4.145 10-9.267S17.523 2 12 2zm-3.75 11.875H6.875a.625.625 0 0 1-.625-.625V8.125a.625.625 0 0 1 1.25 0v4.5h1.75a.625.625 0 0 1 0 1.25zm2.5 0a.625.625 0 0 1-1.25 0V8.125a.625.625 0 0 1 1.25 0v5.75zm4.75 0a.625.625 0 0 1-.538-.308l-2.462-4.002v3.685a.625.625 0 0 1-1.25 0V8.125a.625.625 0 0 1 1.163-.317l2.462 4.002V8.125a.625.625 0 0 1 1.25 0v5.125a.625.625 0 0 1-.625.625zm3.125 0h-1.875a.625.625 0 0 1-.625-.625V8.125a.625.625 0 0 1 .625-.625h1.875a.625.625 0 0 1 0 1.25H17.25v1.5h1.25a.625.625 0 0 1 0 1.25H17.25v1.5h1.375a.625.625 0 0 1 0 1.25z"/>
    </svg>
  );
}

export default function FooterCta() {
  return (
    <footer className="bg-[#2E241D] text-white">
      {/* CTA エリア */}
      <div className="container-content py-16 md:py-20 text-center">
        <p className="text-xs tracking-widest text-white/50 uppercase mb-4 font-sans">
          Contact / Reservation
        </p>
        <h2 className="text-2xl md:text-3xl font-heading font-medium mb-3 leading-snug">
          まずは気軽に、LINE でどうぞ。
        </h2>
        <p className="text-sm text-white/60 mb-8 max-w-sm mx-auto leading-relaxed">
          メニューが決まっていなくても構いません。<br />
          悩みや希望をそのまま送ってください。
        </p>

        {/* 主 CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <a
            href={siteInfo.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-line text-base"
            onClick={() => trackLineClick("footer")}
            aria-label="LINE で予約する（新しいタブ）"
          >
            <LineIcon />
            LINE で予約する
          </a>
          <a
            href={siteInfo.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-white/30 text-white/80
                       rounded-full px-7 py-4 text-sm transition-all duration-200
                       hover:border-white hover:text-white"
            onClick={() => trackLineClick("footer")}
            aria-label="LINE で相談する（新しいタブ）"
          >
            <LineIcon />
            まずは相談する
          </a>
        </div>

        {/* サブ導線 */}
        <p className="text-xs text-white/40">
          ネット予約は{" "}
          <a
            href={siteInfo.hotpepperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-white/70 transition-colors"
            onClick={() => trackEvent("click_hotpepper_sub")}
          >
            HotPepper からも受け付けています
          </a>
        </p>
      </div>

      {/* コピーライト */}
      <div className="border-t border-white/10 text-center py-5">
        <p className="text-xs text-white/30 font-sans">
          &copy; {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
