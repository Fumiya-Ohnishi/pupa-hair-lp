/**
 * SectionTitle.tsx
 * ─────────────────────────────────────────────────────────
 * 各セクション共通の見出しコンポーネント。
 * ─────────────────────────────────────────────────────────
 */

type Props = {
  /** 英字サブラベル（小さく表示） */
  label?: string;
  /** メイン見出し */
  title: string;
  /** サブタイトル（省略可） */
  subtitle?: string;
  /** 中央寄せ（デフォルト: true） */
  center?: boolean;
};

export default function SectionTitle({
  label,
  title,
  subtitle,
  center = true,
}: Props) {
  return (
    <div className={`reveal mb-10 md:mb-14 ${center ? "text-center" : ""}`}>
      {label && (
        <p className="text-xs tracking-widest text-accent uppercase mb-2 font-sans">
          {label}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl font-heading font-medium text-text leading-snug">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm md:text-base text-text-sub leading-relaxed max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
