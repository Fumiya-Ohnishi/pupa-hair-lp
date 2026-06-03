/**
 * ReasonSection.tsx
 * ─────────────────────────────────────────────────────────
 * 「pupa が選ばれる理由」4カード。
 * ─────────────────────────────────────────────────────────
 */
import SectionTitle from "./SectionTitle";

type Reason = {
  number: string;
  title: string;
  body: string;
  /** /public/images/ 以下の画像パス（省略可） */
  image?: string;
  imageAlt?: string;
};

// ── データ（コンポーネントに直書きせず変更しやすい構造） ──
const reasons: Reason[] = [
  {
    number: "01",
    title: "バリ風の落ち着いた空間",
    body: "アジアンテイストを取り入れた店内は、木・石・植物の素材感が漂う静かな雰囲気。施術中、ゆったりとした時間を過ごしていただけます。",
    image: "/images/interior.jpg",
    imageAlt: "バリ島モチーフの落ち着いた店内",
  },
  {
    number: "02",
    title: "メンズ特化の技術",
    body: "男性の骨格・髪質・ライフスタイルを踏まえた提案が得意。シェービング、眉・もみあげデザインまで、トータルで整えます。",
    image: "/images/shaving.jpg",
    imageAlt: "シェービング施術の様子",
  },
  {
    number: "03",
    title: "再現しやすいスタイル提案",
    body: "「自宅でセットできない」はもったいない。朝の時短につながるスタイルを意識した提案を心がけています。",
    image: "/images/style-01.jpg",
    imageAlt: "メンズスタイル施術例",
  },
  {
    number: "04",
    title: "相談しやすい接客",
    body: "「何を頼めばいいかわからない」という方こそ歓迎です。LINEで事前相談いただければ、来店前に不安を解消できます。",
    image: "/images/style-02.jpg",
    imageAlt: "スタイル施術例",
  },
];

export default function ReasonSection() {
  return (
    <section className="section-padding" aria-label="選ばれる理由">
      <div className="container-content">
        <SectionTitle
          label="Why pupa"
          title="pupa が選ばれる理由"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <article
              key={reason.number}
              className="reveal bg-bg rounded-card shadow-card overflow-hidden
                         hover:shadow-card-hover transition-shadow duration-300"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* 画像 */}
              {reason.image && (
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={reason.image}
                    alt={reason.imageAlt ?? ""}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}

              {/* テキスト */}
              <div className="p-5">
                <p className="text-xs tracking-widest text-accent mb-2 font-sans">
                  {reason.number}
                </p>
                <h3 className="text-base font-heading font-medium text-text mb-2 leading-snug">
                  {reason.title}
                </h3>
                <p className="text-sm text-text-sub leading-relaxed">
                  {reason.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
