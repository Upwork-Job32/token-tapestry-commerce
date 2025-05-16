
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="token-effect rounded-3xl bg-background border shadow-lg overflow-hidden">
          <div className="px-6 py-12 md:p-12 lg:p-16 relative">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute left-0 top-0 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-token-purple/20 blur-3xl"></div>
              <div className="absolute right-0 bottom-0 translate-y-1/2 h-[500px] w-[500px] rounded-full bg-token-blue/20 blur-3xl"></div>
            </div>
            
            <div className="relative flex flex-col lg:flex-row gap-8 items-center justify-between">
              <div className="space-y-6 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  Ready to Transform Your Products into Digital Assets?
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                  Join innovative brands that are leveraging blockchain technology to enhance customer engagement and create new revenue streams.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-token-purple to-token-blue hover:opacity-90" asChild>
                  <Link to="/signup">Get Started Free</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Schedule a Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
