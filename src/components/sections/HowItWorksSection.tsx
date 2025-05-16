
import React from "react";

const steps = [
  {
    number: "01",
    title: "Install the App",
    description: "Add Token Tapestry to your Shopify store with a single click. No coding required.",
    delay: "0s",
  },
  {
    number: "02",
    title: "Configure Token Rules",
    description: "Set up which products get tokenized and when tokens should be minted (checkout vs. fulfillment).",
    delay: "0.1s",
  },
  {
    number: "03",
    title: "Customer Purchase",
    description: "When a customer buys your product, they're notified about the digital token they'll receive.",
    delay: "0.2s",
  },
  {
    number: "04",
    title: "Automatic Wallet Creation",
    description: "For customers without a wallet, we create one automatically linked to their email.",
    delay: "0.3s",
  },
  {
    number: "05",
    title: "Token Minting",
    description: "The system mints a unique Solana token tied to the physical product purchased.",
    delay: "0.4s",
  },
  {
    number: "06",
    title: "Customer Access",
    description: "Customers receive an email with access to their token gallery dashboard.",
    delay: "0.5s",
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How Token Tapestry Works
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              A simple process that connects your physical products to the blockchain
            </p>
          </div>
        </div>
        
        <div className="mt-12 md:mt-16 grid gap-8 md:gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-border"></div>
            <div className="space-y-8 relative">
              {steps.slice(0, 3).map((step, index) => (
                <div 
                  key={index} 
                  className="relative pl-8 animate-fade-in"
                  style={{ animationDelay: step.delay }}
                >
                  <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {step.number.split("")[1]}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-border"></div>
            <div className="space-y-8 relative">
              {steps.slice(3).map((step, index) => (
                <div 
                  key={index} 
                  className="relative pl-8 animate-fade-in"
                  style={{ animationDelay: step.delay }}
                >
                  <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {step.number.split("")[1]}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
