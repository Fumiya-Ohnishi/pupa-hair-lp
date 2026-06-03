"use client";
/**
 * LineBenefitSection.tsx
 * ─────────────────────────────────────────────────────────
 * LINE 予約が便利な理由を訴求。
 * ─────────────────────────────────────────────────────────
 */
import { siteInfo } from "@/data/site";
import { trackLineClick } from "@/lib/analytics";
import SectionTitle from "./SectionTitle";

const benefits = [
  {
    icon: "🕐",
    title: "24時間、好きなタイミングで",
    body: "深夜でも休日でも、思い立ったときにメッセージを送るだけ。電話をかける必要はありません。",
  },
  {
    icon: "💬",
    title: "メニューが決まっていなくてもOK",
    body: "「なんとなく清潔感を上げたい」でも大丈夫。今の悩みをそのまま送ってください。",
  },
  {
    icon: "📅",
    title: "空き状況の確認がしやすい",
    body: "希望の日時を伝えるだけで、空き状況をすぐに確認してお返しします。",
  },
  {
    icon: "🙋",
    title: "初めてでも気軽に連絡できる",
    body: "「初めてなんですが…」というメッセージ、大歓迎です。まず相談だけでも構いません。",
  },
];

function LineIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.145 2 11.243c0 3.362 1.878 6.32 4.737 8.077.207.122.336.345.306.588l-.31 2.35c-.044.335.302.59.602.432l2.617-1.37c.173-.09.374-.112.562-.059.595.162 1.22.249 1.861.249 5.523 0 10-4.145 10-9.267S17.523 2 12 2zm-3.75 11.875H6.875a.625.625 0 0 1-.625-.625V8.125a.625.625 0 0 1 1.25 0v4.5h1.75a.625.625 0 0 1 0 1.25zm2.5 0a.625.625 0 0 1-1.25 0V8.125a.625.625 0 0 1 1.25 0v5.75zm4.75 0a.625.625 0 0 1-.538-.308l-2.462-4.002v3.685a.625.625 0 0 1-1.25 0V8.125a.625.625 0 0 1 1.163-.317l2.462 4.002V8.125a.625.625 0 0 1 1.25 0v5.125a.625.625 0 0 1-.625.625zm3.125 0h-1.875a.625.625 0 0 1-.625-.625V8.125a.625.625 0 0 1 .625-.625h1.875a.625.625 0 0 1 0 1.25H17.25v1.5h1.25a.625.625 0 0 1 0 1.25H17.25v1.5h1.375a.625.625 0 0 1 0 1.25z"/>
    </svg>
  );
}

export default function LineBenefitSection() {
  return (
    <section className="section-padding bg-section-alt" aria-label="LINE予約のメリット">
      <div className="container-content">
        <SectionTitle
          label="LINE Reservation"
          title="LINE 予約が便利な理由"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="reveal flex items-start gap-4 bg-bg rounded-card p-5 shadow-card"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="text-2xl shrink-0 mt-0.5" aria-hidden="true">{item.icon}</span>
              <div>
                <h3 className="text-sm font-medium text-text mb-1 font-sans">{item.title}</h3>
                <p className="text-sm text-text-sub leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal text-center">
          <a
            href={siteInfo.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-line"
            onClick={() => trackLineClick("fv")}
            aria-label="LINE 友だち追加（新しいタブ）"
          >
            <LineIcon />
            LINE 友だちに追加する
          </a>
          <p className="text-xs text-text-sub mt-3">
            まずは気軽にメッセージしてみてください
          </p>
        </div>
      </div>
    </section>
  );
}
