
import React from "react";
import { Button } from "@/components/ui/button";

const TokenizationDemo = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-accent/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              See Tokenization in Action
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Watch how physical products transform into digital tokens on the blockchain
            </p>
          </div>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="relative aspect-video overflow-hidden rounded-xl border token-effect animate-fade-in">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-background/80 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                  </svg>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1638913662252-70efce1e60a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
                alt="Product Tokenization Demo"
                className="object-cover w-full h-full"
              />
            </div>
            
            <div className="flex justify-center">
              <Button className="bg-gradient-to-r from-token-purple to-token-blue hover:opacity-90" size="lg">
                Watch Full Demo
              </Button>
            </div>
          </div>
          
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">From Physical to Digital</h3>
              <p className="text-muted-foreground">
                Our tokenization engine creates a unique digital twin of each product on the Solana blockchain.
                This establishes verifiable ownership and opens new possibilities.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-primary/10 text-primary shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-medium">Automatic & Seamless</h4>
                  <p className="text-sm text-muted-foreground">
                    Tokens are created automatically when customers make a purchase, with no extra steps required.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-primary/10 text-primary shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-medium">Email-Based Access</h4>
                  <p className="text-sm text-muted-foreground">
                    Customers access their tokens with just their email - no crypto knowledge needed.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-primary/10 text-primary shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-medium">Beautiful Gallery Experience</h4>
                  <p className="text-sm text-muted-foreground">
                    Customers view their tokens in a stunning visual gallery that showcases their digital collection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenizationDemo;
