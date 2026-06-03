/**
 * StaffSection.tsx
 * ─────────────────────────────────────────────────────────
 * スタッフ紹介カード。
 * スタッフ情報は以下の staff 配列を直接編集して差し替えてください。
 * Instagram リンクも簡単に差し込めます。
 * ─────────────────────────────────────────────────────────
 */
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
  /** プロフィール写真パス */
  image: string;
  imageAlt: string;
  /** Instagram URL（未設定の場合は空文字） */
  instagram: string;
};

// ── スタッフデータ（差し替えポイント） ──────────────────
const staff: StaffMember[] = [
  {
    id: "staff-01",
    name: "スタッフ名",                        // ← 実名に差し替え
    role: "スタイリスト",
    message:
      "「整えるだけで、印象は変わる」。骨格や髪質に合わせた自然なスタイルを提案します。気軽にご相談ください。",
    specialties: ["メンズカット", "シェービング", "眉デザイン", "パーマ"],
    image: "/images/staff-01.jpg",            // ← スタッフ写真に差し替え
    imageAlt: "スタッフの写真",
    instagram: "https://www.instagram.com/", // ← 実アカウントURLに差し替え
  },
  // 複数スタッフがいる場合はここに追加してください
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

export default function StaffSection() {
  return (
    <section className="section-padding bg-section-alt" aria-label="スタッフ紹介">
      <div className="container-content">
        <SectionTitle
          label="Staff"
          title="スタッフ紹介"
        />

        <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
          {staff.map((member, i) => (
            <article
              key={member.id}
              className="reveal flex-1 bg-bg rounded-card shadow-card overflow-hidden
                         hover:shadow-card-hover transition-shadow duration-300"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* 写真 */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* テキスト */}
              <div className="p-5">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="text-lg font-heading font-medium text-text">
                    {member.name}
                  </h3>
                  {member.role && (
                    <span className="text-xs text-text-sub">{member.role}</span>
                  )}
                </div>

                <p className="text-sm text-text-sub leading-relaxed mb-4">
                  {member.message}
                </p>

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
          ))}
        </div>
      </div>
    </section>
  );
}
