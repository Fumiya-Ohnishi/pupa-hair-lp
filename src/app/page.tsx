/**
 * page.tsx
 * LP のルートページ。セクションを順番に並べているだけです。
 * セクションの順序変更・追加・削除はここで行います。
 */
import Header            from "@/components/Header";
import Hero              from "@/components/Hero";
import ProblemSection    from "@/components/ProblemSection";
import ReasonSection     from "@/components/ReasonSection";
import OfferSection      from "@/components/OfferSection";
import GallerySection    from "@/components/GallerySection";
import StaffSection      from "@/components/StaffSection";
import ReviewSection     from "@/components/ReviewSection";
import LineBenefitSection from "@/components/LineBenefitSection";
import FlowSection       from "@/components/FlowSection";
import FaqSection        from "@/components/FaqSection";
import AccessSection     from "@/components/AccessSection";
import FooterCta         from "@/components/FooterCta";
import FloatingLineButton from "@/components/FloatingLineButton";
import ScrollRevealInit  from "@/components/ScrollRevealInit";

export default function Home() {
  return (
    <>
      {/* スクロールフェードイン初期化（クライアントコンポーネント） */}
      <ScrollRevealInit />

      <Header />

      <main>
        <Hero />
        <ProblemSection />
        <ReasonSection />
        <OfferSection />
        <GallerySection />
        <StaffSection />
        <ReviewSection />
        <LineBenefitSection />
        <FlowSection />
        <FaqSection />
        <AccessSection />
        <FooterCta />
      </main>

      <FloatingLineButton />
    </>
  );
}
