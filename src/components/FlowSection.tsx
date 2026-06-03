"use client";
/**
 * FlowSection.tsx
 * ─────────────────────────────────────────────────────────
 * ご来店までの流れ（4ステップ）。
 * ─────────────────────────────────────────────────────────
 */
import { siteInfo } from "@/data/site";
import { trackLineClick } from "@/lib/analytics";
import SectionTitle from "./SectionTitle";

const steps = [
  {
    step: "01",
    title: "LINE 友だち追加",
    body: "まずは pupa hair の LINE 公式アカウントを友だち追加してください。",
    cta: true,
  },
  {
    step: "02",
    title: "メニューや悩みを送信",
    body: "「カットしたい」「パーマを考えている」「眉も整えてほしい」など、今の希望や悩みを気軽に送ってください。",
    cta: false,
  },
  {
    step: "03",
    title: "日時を調整",
    body: "ご希望の日時をお伝えください。空き状況を確認してお返しします。",
    cta: false,
  },
  {
    step: "04",
    title: "ご来店",
    body: "当日は余裕を持ってお越しください。お車の方は駐車場をご利用いただけます。",
    cta: false,
  },
];

function LineIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.145 2 11.243c0 3.362 1.878 6.32 4.737 8.077.207.122.336.345.306.588l-.31 2.35c-.044.335.302.59.602.432l2.617-1.37c.173-.09.374-.112.562-.059.595.162 1.22.249 1.861.249 5.523 0 10-4.145 10-9.267S17.523 2 12 2zm-3.75 11.875H6.875a.625.625 0 0 1-.625-.625V8.125a.625.625 0 0 1 1.25 0v4.5h1.75a.625.625 0 0 1 0 1.25zm2.5 0a.625.625 0 0 1-1.25 0V8.125a.625.625 0 0 1 1.25 0v5.75zm4.75 0a.625.625 0 0 1-.538-.308l-2.462-4.002v3.685a.625.625 0 0 1-1.25 0V8.125a.625.625 0 0 1 1.163-.317l2.462 4.002V8.125a.625.625 0 0 1 1.25 0v5.125a.625.625 0 0 1-.625.625zm3.125 0h-1.875a.625.625 0 0 1-.625-.625V8.125a.625.625 0 0 1 .625-.625h1.875a.625.625 0 0 1 0 1.25H17.25v1.5h1.25a.625.625 0 0 1 0 1.25H17.25v1.5h1.375a.625.625 0 0 1 0 1.25z"/>
    </svg>
  );
}

export default function FlowSection() {
  return (
    <section id="flow" className="section-padding" aria-label="ご来店までの流れ">
      <div className="container-content">
        <SectionTitle
          label="How to"
          title="ご来店までの流れ"
          subtitle="電話いらず。LINEだけで完結します。"
        />

        {/* ステップリスト */}
        <ol className="relative max-w-xl mx-auto">
          {steps.map((item, i) => (
            <li
              key={item.step}
              className="reveal relative flex gap-5 pb-8 last:pb-0"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* 縦線 */}
              {i < steps.length - 1 && (
                <div className="absolute left-5 top-10 bottom-0 w-px bg-border" aria-hidden="true" />
              )}

              {/* ステップ番号 */}
              <div className="shrink-0 w-10 h-10 rounded-full bg-accent/10 border border-accent/30
                              flex items-center justify-center z-10">
                <span className="text-xs font-sans font-bold text-accent">{item.step}</span>
              </div>

              {/* コンテンツ */}
              <div className="pt-1.5 flex-1">
                <h3 className="text-sm font-medium text-text mb-1 font-sans">{item.title}</h3>
                <p className="text-sm text-text-sub leading-relaxed">{item.body}</p>

                {item.cta && (
                  <a
                    href={siteInfo.lineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-line-sm mt-3 inline-flex"
                    onClick={() => trackLineClick("fv")}
                    aria-label="LINE 友だちを追加する（新しいタブ）"
                  >
                    <LineIcon />
                    友だち追加はこちら
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
