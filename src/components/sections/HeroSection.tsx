
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-10 text-center">
          <div className="animate-fade-in space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Connecting <span className="gradient-text">Digital Ownership</span> to <span className="gradient-text">Physical Products</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
              A Shopify app that automatically tokenizes products at checkout using Solana blockchain technology.
              Turn every purchase into a unique digital asset.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" className="bg-gradient-to-r from-token-purple to-token-blue hover:opacity-90" asChild>
              <Link to="/signup">Get Started Free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/demo">View Live Demo</Link>
            </Button>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="mx-auto max-w-4xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-token-purple/30 to-token-blue/30 blur-3xl -z-10 rounded-3xl"></div>
              <div className="token-effect rounded-2xl overflow-hidden border shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
                  alt="Token Tapestry Dashboard"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
