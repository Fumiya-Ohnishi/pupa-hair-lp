/**
 * gallery.ts
 * ─────────────────────────────────────────────────────────
 * ギャラリー画像データ。
 * 画像を追加・差し替える際はこのファイルを編集してください。
 * ─────────────────────────────────────────────────────────
 */

export type GalleryCategory = "style" | "shaving" | "interior" | "exterior";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
};

export const galleryItems: GalleryItem[] = [
  // ── スタイル ──────────────────────────────────────────
  {
    id: "style-01",
    src: "/images/style-01.jpg",
    alt: "メンズスタイル施術例 01",
    category: "style",
  },
  {
    id: "style-02",
    src: "/images/style-02.jpg",
    alt: "メンズスタイル施術例 02",
    category: "style",
  },
  {
    id: "style-03",
    src: "/images/menu-card-01.jpg",
    alt: "メンズスタイル施術例 03",
    category: "style",
  },
  {
    id: "style-04",
    src: "/images/menu-card-02.jpg",
    alt: "メンズスタイル施術例 04",
    category: "style",
  },
  // ── シェービング ─────────────────────────────────────
  {
    id: "shaving-01",
    src: "/images/shaving.jpg",
    alt: "シェービング・眉デザイン施術の様子",
    category: "shaving",
  },
  // ── 店内 ──────────────────────────────────────────────
  {
    id: "interior-01",
    src: "/images/interior.jpg",
    alt: "バリ島モチーフの落ち着いた店内空間",
    category: "interior",
  },
  // ── 外観 ──────────────────────────────────────────────
  {
    id: "exterior-01",
    src: "/images/exterior.jpg",
    alt: "pupa hair 外観",
    category: "exterior",
  },
];

export const galleryCategoryLabels: Record<GalleryCategory, string> = {
  style: "スタイル",
  shaving: "シェービング",
  interior: "店内",
  exterior: "外観",
};
