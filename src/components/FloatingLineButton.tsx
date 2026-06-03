"use client";
/**
 * FloatingLineButton.tsx
 * ─────────────────────────────────────────────────────────
 * スマホ画面下部に固定表示する LINE CTA。
 * ヒーローセクションが見えている間は非表示（スクロール後に表示）。
 * ─────────────────────────────────────────────────────────
 */
import { useState, useEffect } from "react";
import { siteInfo } from "@/data/site";
import { trackLineClick } from "@/lib/analytics";

function LineIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.145 2 11.243c0 3.362 1.878 6.32 4.737 8.077.207.122.336.345.306.588l-.31 2.35c-.044.335.302.59.602.432l2.617-1.37c.173-.09.374-.112.562-.059.595.162 1.22.249 1.861.249 5.523 0 10-4.145 10-9.267S17.523 2 12 2zm-3.75 11.875H6.875a.625.625 0 0 1-.625-.625V8.125a.625.625 0 0 1 1.25 0v4.5h1.75a.625.625 0 0 1 0 1.25zm2.5 0a.625.625 0 0 1-1.25 0V8.125a.625.625 0 0 1 1.25 0v5.75zm4.75 0a.625.625 0 0 1-.538-.308l-2.462-4.002v3.685a.625.625 0 0 1-1.25 0V8.125a.625.625 0 0 1 1.163-.317l2.462 4.002V8.125a.625.625 0 0 1 1.25 0v5.125a.625.625 0 0 1-.625.625zm3.125 0h-1.875a.625.625 0 0 1-.625-.625V8.125a.625.625 0 0 1 .625-.625h1.875a.625.625 0 0 1 0 1.25H17.25v1.5h1.25a.625.625 0 0 1 0 1.25H17.25v1.5h1.375a.625.625 0 0 1 0 1.25z"/>
    </svg>
  );
}

export default function FloatingLineButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // 200px スクロールしたら表示
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 left-0 right-0 z-50 flex justify-center px-5
                  transition-all duration-300
                  md:hidden                  /* PC では非表示 */
                  ${visible
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
      aria-hidden={!visible}
    >
      <a
        href={siteInfo.lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-line shadow-lg w-full max-w-xs justify-center"
        tabIndex={visible ? 0 : -1}
        onClick={() => trackLineClick("floating")}
        aria-label="LINE で予約・相談する（新しいタブ）"
      >
        <LineIcon />
        <span>LINE で予約・相談</span>
        <span className="text-xs font-normal opacity-80 ml-1">相談OK</span>
      </a>
    </div>
  );
}
