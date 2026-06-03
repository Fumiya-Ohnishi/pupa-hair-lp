"use client";
/**
 * Header.tsx
 * ─────────────────────────────────────────────────────────
 * PC: 上部固定ナビゲーション
 * SP: 簡潔なロゴ + CTA のみ
 * ─────────────────────────────────────────────────────────
 */
import Link from "next/link";
import { siteInfo } from "@/data/site";
import { trackLineClick } from "@/lib/analytics";

// LINE アイコン（インライン SVG で依存ゼロ）
function LineIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.145 2 11.243c0 3.362 1.878 6.32 4.737 8.077.207.122.336.345.306.588l-.31 2.35c-.044.335.302.59.602.432l2.617-1.37c.173-.09.374-.112.562-.059.595.162 1.22.249 1.861.249 5.523 0 10-4.145 10-9.267S17.523 2 12 2zm-3.75 11.875H6.875a.625.625 0 0 1-.625-.625V8.125a.625.625 0 0 1 1.25 0v4.5h1.75a.625.625 0 0 1 0 1.25zm2.5 0a.625.625 0 0 1-1.25 0V8.125a.625.625 0 0 1 1.25 0v5.75zm4.75 0a.625.625 0 0 1-.538-.308l-2.462-4.002v3.685a.625.625 0 0 1-1.25 0V8.125a.625.625 0 0 1 1.163-.317l2.462 4.002V8.125a.625.625 0 0 1 1.25 0v5.125a.625.625 0 0 1-.625.625zm3.125 0h-1.875a.625.625 0 0 1-.625-.625V8.125a.625.625 0 0 1 .625-.625h1.875a.625.625 0 0 1 0 1.25H17.25v1.5h1.25a.625.625 0 0 1 0 1.25H17.25v1.5h1.375a.625.625 0 0 1 0 1.25z"/>
    </svg>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-border">
      <div className="container-content flex items-center justify-between h-14 md:h-16">
        {/* ── ロゴ / 店名 ───────────────────────────── */}
        <Link href="/" className="flex flex-col leading-none" aria-label={siteInfo.name}>
          <span className="text-xs tracking-widest text-accent uppercase font-sans">
            pupa hair
          </span>
          <span className="text-[10px] md:text-xs text-text-sub tracking-wider font-sans hidden sm:block">
            MEN&apos;S DESIGN FACTORY
          </span>
        </Link>

        {/* ── PC ナビ ───────────────────────────────── */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-text-sub" aria-label="ナビゲーション">
          <Link href="#offer"   className="hover:text-accent transition-colors">メニュー</Link>
          <Link href="#gallery" className="hover:text-accent transition-colors">ギャラリー</Link>
          <Link href="#flow"    className="hover:text-accent transition-colors">ご来店の流れ</Link>
          <Link href="#access"  className="hover:text-accent transition-colors">アクセス</Link>
        </nav>

        {/* ── CTA ───────────────────────────────────── */}
        <a
          href={siteInfo.lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-line-sm text-sm"
          onClick={() => trackLineClick("fv")}
          aria-label="LINE で予約する（新しいタブで開きます）"
        >
          <LineIcon />
          <span>LINE で予約</span>
        </a>
      </div>
    </header>
  );
}
