
import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TokenizationDemo from "@/components/sections/TokenizationDemo";
import TokenizationExplorer from "@/components/sections/TokenizationExplorer";
import TokenMintingDemo from "@/components/sections/TokenMintingDemo";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TokenizationExplorer />
      <TokenMintingDemo />
      <TokenizationDemo />
      <CTASection />
    </Layout>
  );
};

export default Index;
