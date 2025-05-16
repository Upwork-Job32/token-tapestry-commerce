
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckSquareIcon, FileTextIcon, LifeBuoyIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Docs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <Layout>
      <div className="container py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold">Documentation</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to integrate and use Token Tapestry successfully
            </p>
            <div className="max-w-lg mx-auto pt-4">
              <Input
                type="search"
                placeholder="Search documentation..."
                className="bg-background"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <Tabs defaultValue="getting-started" className="space-y-8">
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
                <TabsTrigger value="api">API Reference</TabsTrigger>
                <TabsTrigger value="guides">Guides</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="getting-started" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-background rounded-xl border p-6 space-y-4 hover:border-primary transition-colors">
                  <div className="w-12 h-12 rounded-full bg-token-purple/20 flex items-center justify-center">
                    <FileTextIcon className="w-6 h-6 text-token-purple" />
                  </div>
                  <h3 className="text-xl font-bold">Quick Start Guide</h3>
                  <p className="text-muted-foreground">
                    Everything you need to get up and running with Token Tapestry in minutes.
                  </p>
                  <Button variant="link" className="p-0">Read Guide</Button>
                </div>
                
                <div className="bg-background rounded-xl border p-6 space-y-4 hover:border-primary transition-colors">
                  <div className="w-12 h-12 rounded-full bg-token-blue/20 flex items-center justify-center">
                    <CheckSquareIcon className="w-6 h-6 text-token-blue" />
                  </div>
                  <h3 className="text-xl font-bold">Installation</h3>
                  <p className="text-muted-foreground">
                    Step-by-step guide to installing and setting up Token Tapestry on your Shopify store.
                  </p>
                  <Button variant="link" className="p-0">Read Guide</Button>
                </div>
                
                <div className="bg-background rounded-xl border p-6 space-y-4 hover:border-primary transition-colors">
                  <div className="w-12 h-12 rounded-full bg-token-purple/20 flex items-center justify-center">
                    <LifeBuoyIcon className="w-6 h-6 text-token-purple" />
                  </div>
                  <h3 className="text-xl font-bold">Troubleshooting</h3>
                  <p className="text-muted-foreground">
                    Common issues and how to resolve them quickly.
                  </p>
                  <Button variant="link" className="p-0">Read Guide</Button>
                </div>
              </div>
              
              <div className="space-y-8">
                <h2 className="text-2xl font-bold">Core Concepts</h2>
                
                <div className="space-y-6">
                  <div className="bg-background rounded-xl border p-6 space-y-4">
                    <h3 className="text-xl font-bold">Token Lifecycle</h3>
                    <p className="text-muted-foreground">
                      Understanding the complete lifecycle of a token - from creation to transfer or redemption.
                    </p>
                    <div className="pt-2">
                      <Button variant="outline">Learn More</Button>
                    </div>
                  </div>
                  
                  <div className="bg-background rounded-xl border p-6 space-y-4">
                    <h3 className="text-xl font-bold">Token Metadata</h3>
                    <p className="text-muted-foreground">
                      How token metadata works and how to customize it for your products.
                    </p>
                    <div className="pt-2">
                      <Button variant="outline">Learn More</Button>
                    </div>
                  </div>
                  
                  <div className="bg-background rounded-xl border p-6 space-y-4">
                    <h3 className="text-xl font-bold">Customer Experience</h3>
                    <p className="text-muted-foreground">
                      Design the ideal customer journey with Token Tapestry's customer dashboard.
                    </p>
                    <div className="pt-2">
                      <Button variant="outline">Learn More</Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="api" className="space-y-8">
              <div className="bg-background border rounded-xl overflow-hidden">
                <div className="border-b p-4">
                  <h2 className="font-bold text-xl">API Reference</h2>
                </div>
                <div className="p-6 space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-token-purple">Authentication</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between py-2 px-4 bg-accent/30 rounded-md">
                        <code>POST /api/auth/token</code>
                        <Badge className="bg-green-100 text-green-800 border-0">GET</Badge>
                      </div>
                      <div className="flex items-center justify-between py-2 px-4 bg-accent/30 rounded-md">
                        <code>POST /api/auth/refresh</code>
                        <Badge className="bg-green-100 text-green-800 border-0">POST</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-token-purple">Tokens</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between py-2 px-4 bg-accent/30 rounded-md">
                        <code>GET /api/tokens</code>
                        <Badge className="bg-blue-100 text-blue-800 border-0">GET</Badge>
                      </div>
                      <div className="flex items-center justify-between py-2 px-4 bg-accent/30 rounded-md">
                        <code>POST /api/tokens/mint</code>
                        <Badge className="bg-green-100 text-green-800 border-0">POST</Badge>
                      </div>
                      <div className="flex items-center justify-between py-2 px-4 bg-accent/30 rounded-md">
                        <code>GET /api/tokens/{"{tokenId}"}</code>
                        <Badge className="bg-blue-100 text-blue-800 border-0">GET</Badge>
                      </div>
                      <div className="flex items-center justify-between py-2 px-4 bg-accent/30 rounded-md">
                        <code>POST /api/tokens/{"{tokenId}"}/transfer</code>
                        <Badge className="bg-green-100 text-green-800 border-0">POST</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-token-purple">Wallets</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between py-2 px-4 bg-accent/30 rounded-md">
                        <code>POST /api/wallets/create</code>
                        <Badge className="bg-green-100 text-green-800 border-0">POST</Badge>
                      </div>
                      <div className="flex items-center justify-between py-2 px-4 bg-accent/30 rounded-md">
                        <code>GET /api/wallets/{"{walletId}"}</code>
                        <Badge className="bg-blue-100 text-blue-800 border-0">GET</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-accent/30 rounded-xl p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">API Keys</h3>
                  <p>
                    To use the Token Tapestry API, you'll need to generate API keys in your merchant dashboard.
                    Learn more about authentication and API key management in our guide.
                  </p>
                  <Button>View API Authentication Guide</Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="guides" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background rounded-xl border p-6 space-y-4">
                  <h3 className="text-xl font-bold">Custom Token Images</h3>
                  <p className="text-muted-foreground">
                    Learn how to customize token images and add special attributes to your tokens.
                  </p>
                  <Button variant="outline">Read Guide</Button>
                </div>
                
                <div className="bg-background rounded-xl border p-6 space-y-4">
                  <h3 className="text-xl font-bold">Token Transfer Rules</h3>
                  <p className="text-muted-foreground">
                    Set up rules for when and how tokens can be transferred between customers.
                  </p>
                  <Button variant="outline">Read Guide</Button>
                </div>
                
                <div className="bg-background rounded-xl border p-6 space-y-4">
                  <h3 className="text-xl font-bold">Customer Dashboard Customization</h3>
                  <p className="text-muted-foreground">
                    Learn how to customize the customer dashboard to match your brand.
                  </p>
                  <Button variant="outline">Read Guide</Button>
                </div>
                
                <div className="bg-background rounded-xl border p-6 space-y-4">
                  <h3 className="text-xl font-bold">Advanced Analytics</h3>
                  <p className="text-muted-foreground">
                    Get insights from your token data with advanced analytics and reporting.
                  </p>
                  <Button variant="outline">Read Guide</Button>
                </div>
              </div>
              
              <div className="bg-accent/30 rounded-xl p-6">
                <div className="space-y-4 text-center">
                  <h3 className="text-xl font-bold">Need a Custom Integration?</h3>
                  <p className="text-muted-foreground">
                    Our team can help you build custom integrations for your specific business needs.
                  </p>
                  <Button>Contact Us</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Docs;
