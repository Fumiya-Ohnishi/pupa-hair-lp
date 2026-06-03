/**
 * AccessSection.tsx
 * ─────────────────────────────────────────────────────────
 * 店舗情報・地図・HotPepper サブ導線。
 * 店舗情報は /src/data/site.ts で管理。
 * ─────────────────────────────────────────────────────────
 */
import { siteInfo } from "@/data/site";
import SectionTitle from "./SectionTitle";

type InfoRow = {
  label: string;
  value: string;
};

const infoRows: InfoRow[] = [
  { label: "店名",     value: siteInfo.name },
  { label: "住所",     value: siteInfo.address },
  { label: "営業時間", value: siteInfo.businessHours },
  { label: "定休日",   value: siteInfo.holiday },
  { label: "駐車場",   value: siteInfo.parking },
  { label: "アクセス", value: siteInfo.access },
];

export default function AccessSection() {
  return (
    <section id="access" className="section-padding" aria-label="アクセス・店舗情報">
      <div className="container-content">
        <SectionTitle
          label="Access"
          title="アクセス・店舗情報"
        />

        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* 店舗情報テーブル */}
          <div>
            <dl className="divide-y divide-border">
              {infoRows.map((row) => (
                <div key={row.label} className="flex gap-4 py-3.5 text-sm">
                  <dt className="w-20 shrink-0 text-text-sub font-sans">{row.label}</dt>
                  <dd className="text-text leading-relaxed">{row.value}</dd>
                </div>
              ))}
            </dl>

            {/* HotPepper サブ導線 */}
            <div className="mt-6 pt-5 border-t border-border">
              <p className="text-xs text-text-sub mb-3">
                HotPepper でメニューや価格を確認することもできます。
              </p>
              <a
                href={siteInfo.hotpepperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs"
                aria-label="HotPepper で店舗情報を見る（新しいタブ）"
              >
                HotPepper で見る
              </a>
            </div>
          </div>

          {/* Google マップ埋め込み */}
          <div className="rounded-card overflow-hidden shadow-card aspect-[4/3]">
            {/*
              ⚠️ Google マップ埋め込みポイント
              src/data/site.ts の googleMapEmbedUrl を実際の埋め込み URL に差し替えてください。
              Google Maps → 「共有」→「地図を埋め込む」→ src="" の値をコピー
            */}
            <iframe
              src={siteInfo.googleMapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${siteInfo.name} の地図`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
