import React, { Suspense } from "react";
import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import StickyBar from "@/components/landing/StickyBar";
import AnimatedBackground from "@/components/landing/AnimatedBackground";

// Lazy Loaded Components for maximum load speed (TTI/FCP Optimization)
const TestimonialCarousel = React.lazy(() => import("@/components/landing/TestimonialCarousel"));
const ScreenshotGallery = React.lazy(() => import("@/components/landing/ScreenshotGallery"));
const ProblemAgitation = React.lazy(() => import("@/components/landing/ProblemAgitation"));
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
      <AnimatedBackground />
      <StickyBar />
      <Hero />
      <SocialProof />
      
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-16 h-16 border-4 border-brand-accent border-t-transparent rounded-full animate-spin"></div></div>}>
        <TestimonialCarousel />
        <ScrollCTA text="QUERO MINHAS PRIMEIRAS VENDAS AUTOMÁTICAS" subtext="Acesso imediato — comece hoje mesmo" />
        <FeaturedTestimonial />
        <StudentResults />
        <ScreenshotGallery />
        <ProblemAgitation />
        <Comparison />
        <WhatIsSVA />
        <Benefits />
        <ScrollCTA text="QUERO MONTAR MEU SISTEMA DE VENDAS" subtext="Do zero aos R$10k + vendas diárias no automático" />
        <InternationalSales />
        <Deliverables />
        <Bonus />
        <TargetAudience />
        <Author />
        <Offer />
        <Guarantee />
        <FAQ />
        <ScrollCTA text="ÚLTIMA CHANCE — COMECE HOJE NO AUTOMÁTICO" subtext="Essa condição não volta depois que fechar essa turma" />
        <Footer />
        <WhatsAppFloat />
      </Suspense>
    </main>
  );
};

export default Index;
