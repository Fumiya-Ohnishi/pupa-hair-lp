import type { Metadata } from "next";
import "./globals.css";
import { seoMeta, siteInfo } from "@/data/site";

export const metadata: Metadata = {
  title: seoMeta.title,
  description: seoMeta.description,
  metadataBase: new URL(seoMeta.siteUrl),
  openGraph: {
    title: seoMeta.title,
    description: seoMeta.description,
    url: seoMeta.siteUrl,
    siteName: siteInfo.name,
    images: [
      {
        url: seoMeta.ogImage,
        width: 1200,
        height: 630,
        alt: siteInfo.name,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seoMeta.title,
    description: seoMeta.description,
    images: [seoMeta.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {/*
          GA4 / GTM を使う場合はここにスクリプトタグを追加。
          例（GA4）:
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}</Script>
        */}
      </head>
      <body>{children}</body>
    </html>
  );
}
