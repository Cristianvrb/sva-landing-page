import React, { Suspense } from "react";
import Hero from "@/components/landing/Hero";
import StudentVideo from "@/components/landing/StudentVideo";
import SocialProof from "@/components/landing/SocialProof";
import StickyBar from "@/components/landing/StickyBar";
import AnimatedBackground from "@/components/landing/AnimatedBackground";
import MetaPixelEvents from "@/components/tracking/MetaPixelEvents";
import { LazySection } from "@/components/LazySection";

// Lazy Loaded Components for maximum load speed (TTI/FCP Optimization)
const TestimonialCarousel = React.lazy(() => import("@/components/landing/TestimonialCarousel"));
const ProblemAgitation = React.lazy(() => import("@/components/landing/ProblemAgitation"));
const CourseContent = React.lazy(() => import("@/components/landing/CourseContent"));
const Comparison = React.lazy(() => import("@/components/landing/Comparison"));
const WhatIsSVA = React.lazy(() => import("@/components/landing/WhatIsSVA"));
const Benefits = React.lazy(() => import("@/components/landing/Benefits"));
const InternationalSales = React.lazy(() => import("@/components/landing/InternationalSales"));
const Deliverables = React.lazy(() => import("@/components/landing/Deliverables"));
const Bonus = React.lazy(() => import("@/components/landing/Bonus"));
const TargetAudience = React.lazy(() => import("@/components/landing/TargetAudience"));
const Author = React.lazy(() => import("@/components/landing/Author"));
const Offer = React.lazy(() => import("@/components/landing/Offer"));
const Guarantee = React.lazy(() => import("@/components/landing/Guarantee"));
const FAQ = React.lazy(() => import("@/components/landing/FAQ"));
const Footer = React.lazy(() => import("@/components/landing/Footer"));
const WhatsAppFloat = React.lazy(() => import("@/components/landing/WhatsAppFloat"));
const ScrollCTA = React.lazy(() => import("@/components/landing/ScrollCTA"));
const FeaturedTestimonial = React.lazy(() => import("@/components/landing/FeaturedTestimonial"));
const StudentResults = React.lazy(() => import("@/components/landing/StudentResults"));

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative z-0">
      <MetaPixelEvents />
      <AnimatedBackground />
      <StickyBar />
      <Hero />
      <StudentVideo />
      <SocialProof />
      
        <LazySection minHeight="400px">
          <TestimonialCarousel />
          <ScrollCTA text="QUERO MINHAS PRIMEIRAS VENDAS AUTOMÁTICAS" subtext="Acesso imediato — comece hoje mesmo" />
        </LazySection>
        <LazySection>
          <FeaturedTestimonial />
          <StudentResults />
        </LazySection>
        <LazySection>
          <ProblemAgitation />
          <Comparison />
        </LazySection>
        <LazySection>
          <WhatIsSVA />
          <Benefits />
          <CourseContent />
          <ScrollCTA text="QUERO MONTAR MEU SISTEMA DE VENDAS" subtext="Do zero aos R$10k + vendas diárias no automático" />
        </LazySection>
        <LazySection>
          <InternationalSales />
          <Deliverables />
          <Bonus />
        </LazySection>
        <LazySection id="oferta-container">
          <TargetAudience />
          <Author />
          <Offer />
          <Guarantee />
        </LazySection>
        <LazySection>
          <FAQ />
          <ScrollCTA text="COMECE AGORA A VENDER NO AUTOMÁTICO" subtext="Preço promocional por tempo limitado — garanta antes que aumente" />
          <Footer />
        </LazySection>
        <React.Suspense fallback={null}>
          <WhatsAppFloat />
        </React.Suspense>
    </main>
  );
};

export default Index;
