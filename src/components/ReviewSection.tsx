/**
 * ReviewSection.tsx
 * ─────────────────────────────────────────────────────────
 * お客様の声セクション。
 * 口コミデータは /src/data/reviews.ts で管理。
 * ─────────────────────────────────────────────────────────
 */
import { reviews } from "@/data/reviews";
import SectionTitle from "./SectionTitle";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`評価 ${rating} / 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={n <= rating ? "#7A8B68" : "none"}
          stroke="#7A8B68"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewSection() {
  return (
    <section className="section-padding" aria-label="お客様の声">
      <div className="container-content">
        <SectionTitle
          label="Reviews"
          title="お客様の声"
          subtitle="実際にご来店いただいた方の感想です。"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reviews.map((review, i) => (
            <article
              key={review.id}
              className="reveal bg-bg-muted rounded-card p-6 shadow-card
                         hover:shadow-card-hover transition-shadow duration-300"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* ヘッダー */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm font-medium text-text">{review.displayName}</p>
                  <p className="text-xs text-text-sub mt-0.5">{review.menu}</p>
                </div>
                <StarRating rating={review.rating} />
              </div>

              {/* 悩み → 解決 */}
              <div className="flex flex-col gap-1.5 mb-4 text-xs">
                <div className="flex items-start gap-2">
                  <span className="shrink-0 text-text-sub/60 mt-0.5">悩み</span>
                  <span className="text-text-sub">{review.before}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="shrink-0 text-accent mt-0.5">解決</span>
                  <span className="text-text font-medium">{review.after}</span>
                </div>
              </div>

              {/* コメント */}
              <blockquote className="text-sm text-text-sub leading-relaxed border-l-2 border-border pl-4">
                {review.comment}
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
