"use client";
/**
 * StaffSection.tsx
 * ─────────────────────────────────────────────────────────
 * スタッフ紹介カード。
 * スタッフ情報は以下の staff 配列を直接編集して差し替えてください。
 * ─────────────────────────────────────────────────────────
 */
import { useState } from "react";
import SectionTitle from "./SectionTitle";

type StaffMember = {
  id: string;
  name: string;
  /** 役職・肩書き（省略可） */
  role?: string;
  /** 一言メッセージ */
  message: string;
  /** 得意なスタイル */
  specialties: string[];
  /** プロフィール写真パス（/public/images/ 以下） */
  image: string;
  imageAlt: string;
  /** 読み仮名（省略可） */
  nameReading?: string;
  /** Instagram URL */
  instagram: string;
};

// ── スタッフデータ（差し替えポイント） ──────────────────
const staff: StaffMember[] = [
  {
    id: "staff-kenya",
    name: "松林 賢也",
    nameReading: "マツバヤシ ケンヤ",
    role: "スタイリスト",
    message:
      "骨格や髪質に合わせた自然なスタイルを提案します。シェービングや眉デザインもお任せください。",
    specialties: ["メンズカット", "シェービング", "眉デザイン", "パーマ"],
    image: "/images/staff-kenya.jpg",
    imageAlt: "松林 賢也 スタイリスト",
    instagram: "https://www.instagram.com/pupa_kenya/",
  },
  {
    id: "staff-yuki",
    name: "清水 雄生",
    nameReading: "シミズ ユウキ",
    role: "スタイリスト",
    message:
      "「また来たい」と思っていただける空間と仕上がりを大切にしています。お気軽にご相談ください。",
    specialties: ["メンズカット", "カラー", "眉デザイン", "スカルプケア"],
    image: "/images/staff-yuki.jpg",
    imageAlt: "清水 雄生 スタイリスト",
    instagram: "https://www.instagram.com/pupa_yuki/",
  },
];

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

/** 画像読み込み失敗時のフォールバック表示 */
function StaffImageFallback({ name }: { name: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-bg-muted">
      <span className="text-4xl text-border select-none" aria-hidden="true">
        {name.charAt(0) || "S"}
      </span>
    </div>
  );
}

export default function StaffSection() {
  return (
    <section className="section-padding bg-section-alt" aria-label="スタッフ紹介">
      <div className="container-content">
        <SectionTitle label="Staff" title="スタッフ紹介" />

        <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
          {staff.map((member, i) => (
            <StaffCard key={member.id} member={member} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StaffCard({ member, delay }: { member: StaffMember; delay: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article
      className="reveal flex-1 bg-bg rounded-card shadow-card overflow-hidden
                 hover:shadow-card-hover transition-shadow duration-300"
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* 写真 */}
      <div className="aspect-[3/4] overflow-hidden">
        {!imgError ? (
          <img
            src={member.image}
            alt={member.imageAlt}
            loading="lazy"
            decoding="async"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <StaffImageFallback name={member.name} />
        )}
      </div>

      {/* テキスト */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-1">
          <div>
            <h3 className="text-lg font-heading font-medium text-text leading-snug">{member.name}</h3>
            {member.nameReading && (
              <p className="text-[11px] text-text-sub tracking-wider mt-0.5">{member.nameReading}</p>
            )}
          </div>
          {member.role && (
            <span className="text-xs text-text-sub mt-1">{member.role}</span>
          )}
        </div>

        <p className="text-sm text-text-sub leading-relaxed mb-4">{member.message}</p>

        {/* 得意スタイル */}
        <div className="mb-4">
          <p className="text-xs tracking-wider text-accent mb-2">得意なスタイル</p>
          <ul className="flex flex-wrap gap-1.5" aria-label="得意なスタイル">
            {member.specialties.map((s) => (
              <li
                key={s}
                className="text-[11px] border border-border text-text-sub rounded-full px-2.5 py-0.5"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Instagram リンク */}
        {member.instagram && (
          <a
            href={member.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-text-sub
                       hover:text-accent transition-colors"
            aria-label={`${member.name} の Instagram を見る（新しいタブ）`}
          >
            <InstagramIcon />
            Instagram
          </a>
        )}
      </div>
    </article>
  );
}
