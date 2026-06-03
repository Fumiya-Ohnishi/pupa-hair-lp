"use client";
/**
 * GallerySection.tsx
 * ─────────────────────────────────────────────────────────
 * スタイル・施術・空間イメージのギャラリー。
 * カテゴリフィルタ付き。
 * ※ フィルタ切り替え時に reveal クラスを使わず、
 *   CSS アニメーションで直接フェードインさせる。
 * ─────────────────────────────────────────────────────────
 */
import { useState } from "react";
import { galleryItems, galleryCategoryLabels, type GalleryCategory } from "@/data/gallery";
import SectionTitle from "./SectionTitle";

const categories: ("all" | GalleryCategory)[] = [
  "all",
  "style",
  "shaving",
  "interior",
  "exterior",
];

const categoryAllLabel = "すべて";

export default function GallerySection() {
  const [active, setActive] = useState<"all" | GalleryCategory>("all");

  const filtered =
    active === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  return (
    <section id="gallery" className="section-padding" aria-label="ギャラリー">
      <div className="container-content">
        <SectionTitle
          label="Gallery"
          title="スタイル・施術・空間イメージ"
        />

        {/* カテゴリフィルタ */}
        <div className="flex flex-wrap justify-center gap-2 mb-8" role="group" aria-label="カテゴリフィルタ">
          {categories.map((cat) => {
            const label = cat === "all" ? categoryAllLabel : galleryCategoryLabels[cat];
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-sm rounded-full px-5 py-2 border transition-all duration-200
                  ${isActive
                    ? "bg-accent text-white border-accent"
                    : "border-border text-text-sub hover:border-accent hover:text-accent"
                  }`}
                aria-pressed={isActive}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* グリッド — フィルタ切り替え後も確実に表示されるよう reveal を使わず CSS アニメーションで制御 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {filtered.map((item, i) => (
            <div
              key={`${active}-${item.id}`}
              className="aspect-square overflow-hidden rounded-card shadow-card
                         hover:shadow-card-hover transition-shadow duration-300
                         animate-fade-in"
              style={{
                animationDelay: `${i * 0.05}s`,
                animationFillMode: "both",
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
