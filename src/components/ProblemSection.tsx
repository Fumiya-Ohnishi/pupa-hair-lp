/**
 * ProblemSection.tsx
 * ─────────────────────────────────────────────────────────
 * 「こんなお悩みはありませんか？」セクション。
 * 見込み客の悩みを列挙して共感を生む。
 * ─────────────────────────────────────────────────────────
 */
import SectionTitle from "./SectionTitle";

const problems = [
  {
    icon: "💭",
    text: "自分に似合う髪型がよくわからない",
  },
  {
    icon: "⏰",
    text: "朝のスタイリングをもっとラクにしたい",
  },
  {
    icon: "✨",
    text: "清潔感を上げて、好印象にしたい",
  },
  {
    icon: "🌀",
    text: "パーマに挑戦したいけど、失敗が怖い",
  },
  {
    icon: "✂️",
    text: "眉やヒゲまで、まとめて整えたい",
  },
  {
    icon: "🌿",
    text: "落ち着いた空間で、ゆっくり施術を受けたい",
  },
  {
    icon: "🏪",
    text: "理容室は古い感じがするし、女性向け美容室も少し入りづらい",
  },
  {
    icon: "📱",
    text: "電話よりLINEのほうが気軽に問い合わせできる",
  },
];

export default function ProblemSection() {
  return (
    <section className="section-padding bg-section-alt" aria-label="お悩み">
      <div className="container-content">
        <SectionTitle
          label="For Men"
          title={"こんなお悩み、\nありませんか？"}
          subtitle="pupa hair は、メンズに特化したグルーミングサロンです。髪のこと、身だしなみのこと、LINEで気軽にご相談ください。"
        />

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {problems.map((item, i) => (
            <li
              key={i}
              className="reveal flex items-start gap-3 bg-bg rounded-card p-4 shadow-card"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <span className="text-xl shrink-0 mt-0.5" aria-hidden="true">
                {item.icon}
              </span>
              <p className="text-sm text-text leading-relaxed">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
