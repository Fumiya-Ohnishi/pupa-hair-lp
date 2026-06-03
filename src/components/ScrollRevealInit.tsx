"use client";
/**
 * ScrollRevealInit.tsx
 * ─────────────────────────────────────────────────────────
 * .reveal クラスの要素をスクロールで一度だけフェードイン。
 * IntersectionObserver を使用。prefers-reduced-motion 対応済み。
 * ─────────────────────────────────────────────────────────
 */
import { useEffect } from "react";

export default function ScrollRevealInit() {
  useEffect(() => {
    // アニメーション無効設定の場合はスキップ
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // 1回だけ発火
          }
        });
      },
      { threshold: 0.12 }
    );

    // すべての .reveal 要素を監視
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
