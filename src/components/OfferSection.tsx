"use client";
/**
 * OfferSection.tsx
 * ─────────────────────────────────────────────────────────
 * 初回オファーメニュー一覧。
 * メニューデータは /src/data/offers.ts で管理。
 * ─────────────────────────────────────────────────────────
 */
import { offers } from "@/data/offers";
import { siteInfo } from "@/data/site";
import { trackEvent } from "@/lib/analytics";
import SectionTitle from "./SectionTitle";

function LineIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.145 2 11.243c0 3.362 1.878 6.32 4.737 8.077.207.122.336.345.306.588l-.31 2.35c-.044.335.302.59.602.432l2.617-1.37c.173-.09.374-.112.562-.059.595.162 1.22.249 1.861.249 5.523 0 10-4.145 10-9.267S17.523 2 12 2zm-3.75 11.875H6.875a.625.625 0 0 1-.625-.625V8.125a.625.625 0 0 1 1.25 0v4.5h1.75a.625.625 0 0 1 0 1.25zm2.5 0a.625.625 0 0 1-1.25 0V8.125a.625.625 0 0 1 1.25 0v5.75zm4.75 0a.625.625 0 0 1-.538-.308l-2.462-4.002v3.685a.625.625 0 0 1-1.25 0V8.125a.625.625 0 0 1 1.163-.317l2.462 4.002V8.125a.625.625 0 0 1 1.25 0v5.125a.625.625 0 0 1-.625.625zm3.125 0h-1.875a.625.625 0 0 1-.625-.625V8.125a.625.625 0 0 1 .625-.625h1.875a.625.625 0 0 1 0 1.25H17.25v1.5h1.25a.625.625 0 0 1 0 1.25H17.25v1.5h1.375a.625.625 0 0 1 0 1.25z"/>
    </svg>
  );
}

export default function OfferSection() {
  return (
    <section id="offer" className="section-padding bg-section-alt" aria-label="初回オファーメニュー">
      <div className="container-content">
        <SectionTitle
          label="First Visit"
          title="初めての方におすすめ"
          subtitle="メニューが決まっていなくても大丈夫。LINEで気軽にご相談ください。"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {offers.map((offer, i) => (
            <article
              key={offer.id}
              className={`reveal flex flex-col bg-bg rounded-card shadow-card overflow-hidden
                          hover:shadow-card-hover transition-shadow duration-300
                          ${offer.featured ? "ring-1 ring-accent/40" : ""}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* おすすめバッジ */}
              {offer.featured && (
                <div className="bg-accent text-white text-[11px] tracking-wider text-center py-1.5 font-sans">
                  初来店におすすめ
                </div>
              )}

              {/* 画像 */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* コンテンツ */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <h3 className="text-base font-heading font-medium text-text leading-snug">
                  {offer.name}
                </h3>

                {/* 価格 */}
                <p className="text-lg font-sans font-bold text-accent leading-none">
                  {offer.price}
                </p>

                {/* 内容 */}
                <ul className="flex flex-wrap gap-1.5" aria-label="含まれる施術">
                  {offer.includes.map((item) => (
                    <li
                      key={item}
                      className="text-[11px] border border-border text-text-sub rounded-full px-2.5 py-0.5"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                {/* ベネフィット */}
                <p className="text-xs text-text-sub leading-relaxed flex-1">
                  {offer.benefit}
                </p>

                {/* CTA */}
                <a
                  href={siteInfo.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-line-sm w-full mt-auto"
                  onClick={() => trackEvent(offer.analyticsEvent as "click_line_offer")}
                  aria-label={`${offer.name} を LINE で予約する（新しいタブ）`}
                >
                  <LineIcon />
                  {offer.ctaLabel}
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* サブ導線 */}
        <p className="text-center mt-8 text-sm text-text-sub">
          その他のメニューは{" "}
          <a
            href={siteInfo.hotpepperCouponUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-accent transition-colors"
            onClick={() => trackEvent("click_hotpepper_sub")}
          >
            HotPepper でも確認できます
          </a>
        </p>
      </div>
    </section>
  );
}
