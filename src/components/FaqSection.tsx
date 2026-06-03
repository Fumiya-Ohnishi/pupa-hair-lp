"use client";
/**
 * FaqSection.tsx
 * ─────────────────────────────────────────────────────────
 * よくある質問（アコーディオン形式）。
 * FAQ データは /src/data/faq.ts で管理。
 * ─────────────────────────────────────────────────────────
 */
import { useState } from "react";
import { faqItems } from "@/data/faq";
import SectionTitle from "./SectionTitle";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="section-padding bg-section-alt" aria-label="よくある質問">
      <div className="container-content">
        <SectionTitle
          label="FAQ"
          title="よくある質問"
        />

        <dl className="max-w-2xl mx-auto flex flex-col gap-3">
          {faqItems.map((item, i) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="reveal bg-bg rounded-card shadow-card overflow-hidden"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                {/* 質問（ボタン） */}
                <dt>
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-4 px-5 py-4
                               text-left text-sm font-medium text-text
                               hover:text-accent transition-colors duration-200"
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <span className="flex gap-3">
                      <span className="text-accent shrink-0">Q.</span>
                      {item.question}
                    </span>
                    {/* 展開アイコン */}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className={`shrink-0 text-text-sub transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    >
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </dt>

                {/* 回答 */}
                <dd
                  id={`faq-answer-${item.id}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-5 pb-5 text-sm text-text-sub leading-relaxed border-t border-border pt-3">
                    {item.answer}
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
