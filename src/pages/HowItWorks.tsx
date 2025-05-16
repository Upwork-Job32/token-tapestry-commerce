
import React from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <Layout>
      <div className="container py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold">How Token Tapestry Works</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive guide to connecting digital ownership to physical products
            </p>
          </div>
          
          {/* Overview Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Overview</h2>
            <div className="bg-accent/30 rounded-xl p-6">
              <p className="text-lg">
                Token Tapestry creates digital twins of physical products on the Solana blockchain, 
                establishing verifiable ownership and enabling new possibilities for brands and customers.
              </p>
            </div>
          </div>
          
          {/* Step by Step Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Step-by-Step Process</h2>
            
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="bg-token-purple/20 text-token-purple w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-2xl font-bold">Install the App</h3>
                  <p>
                    Add Token Tapestry to your Shopify store with just a few clicks. The app 
                    integrates seamlessly with your existing store setup and doesn't require 
                    any technical knowledge.
                  </p>
                </div>
                <div className="token-effect rounded-xl overflow-hidden border shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" 
                    alt="Installing the App" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="token-effect rounded-xl overflow-hidden border shadow-lg md:order-1 order-2">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" 
                    alt="Configure Token Settings" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4 md:order-2 order-1">
                  <div className="bg-token-blue/20 text-token-blue w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-2xl font-bold">Configure Token Settings</h3>
                  <p>
                    Decide which products to tokenize, when tokens are minted (at purchase or 
                    fulfillment), and customize token attributes. All settings are easily 
                    adjustable through the merchant dashboard.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="bg-token-purple/20 text-token-purple w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-2xl font-bold">Automatic Tokenization</h3>
                  <p>
                    When a customer makes a purchase, the app automatically creates a digital 
                    token on the Solana blockchain. This happens behind the scenes with no 
                    additional steps required from you or your customers.
                  </p>
                </div>
                <div className="token-effect rounded-xl overflow-hidden border shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" 
                    alt="Automatic Tokenization" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="token-effect rounded-xl overflow-hidden border shadow-lg md:order-1 order-2">
                  <img 
                    src="https://images.unsplash.com/photo-1637159940661-b4463a363616?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" 
                    alt="Customer Dashboard" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4 md:order-2 order-1">
                  <div className="bg-token-blue/20 text-token-blue w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                    4
                  </div>
                  <h3 className="text-2xl font-bold">Customer Access</h3>
                  <p>
                    Customers receive an email with a link to access their tokens. They can 
                    view their digital collection through a beautiful, branded dashboard - 
                    no crypto wallet or technical knowledge required.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Technology Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Our Technology</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-background rounded-xl border p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-token-purple/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-token-purple">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Solana Blockchain</h3>
                <p className="text-muted-foreground">
                  We use Solana for its fast, low-cost transactions, making it ideal for 
                  product tokenization at scale.
                </p>
              </div>
              
              <div className="bg-background rounded-xl border p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-token-blue/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-token-blue">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Email-Based Access</h3>
                <p className="text-muted-foreground">
                  Our email-based wallet system ensures customers can access their tokens 
                  without any crypto knowledge.
                </p>
              </div>
              
              <div className="bg-background rounded-xl border p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-token-purple/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-token-purple">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Analytics Dashboard</h3>
                <p className="text-muted-foreground">
                  Track token activity, customer engagement, and gain valuable insights through 
                  our comprehensive analytics tools.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="token-effect rounded-3xl bg-background border shadow-lg overflow-hidden">
            <div className="px-6 py-12 md:p-12 lg:p-16 relative">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-0 top-0 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-token-purple/20 blur-3xl"></div>
                <div className="absolute right-0 bottom-0 translate-y-1/2 h-[500px] w-[500px] rounded-full bg-token-blue/20 blur-3xl"></div>
              </div>
              
              <div className="relative text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Join innovative brands that are leveraging blockchain technology to enhance 
                  customer engagement and create new revenue streams.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-token-purple to-token-blue hover:opacity-90" asChild>
                    <Link to="/signup">Get Started Free</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/demo">View Live Demo</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HowItWorks;
