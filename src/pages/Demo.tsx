
import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const Demo = () => {
  const [email, setEmail] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDialog(false);
    
    toast({
      title: "Demo access granted!",
      description: "Check your email for access details.",
    });
    
    setEmail("");
  };

  return (
    <Layout>
      <div className="container py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold">Live Demo</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how Token Tapestry transforms physical products into digital assets
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="aspect-video token-effect rounded-xl overflow-hidden border shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Token Tapestry Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">How it Works</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-token-purple/20 flex items-center justify-center text-token-purple shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium">Install the App</h3>
                    <p className="text-sm text-muted-foreground">
                      Add Token Tapestry to your Shopify store with just a few clicks.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-token-purple/20 flex items-center justify-center text-token-purple shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium">Configure Token Settings</h3>
                    <p className="text-sm text-muted-foreground">
                      Select which products to tokenize and customize the token attributes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-token-purple/20 flex items-center justify-center text-token-purple shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium">Automatic Tokenization</h3>
                    <p className="text-sm text-muted-foreground">
                      Tokens are created automatically when customers complete their purchase.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-token-purple/20 flex items-center justify-center text-token-purple shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium">Customer Dashboard</h3>
                    <p className="text-sm text-muted-foreground">
                      Customers access their tokens through a branded dashboard using just their email.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={() => setShowDialog(true)}
                className="bg-gradient-to-r from-token-purple to-token-blue hover:opacity-90"
              >
                Try Interactive Demo
              </Button>
            </div>
          </div>
          
          <div className="bg-accent/50 p-8 rounded-2xl">
            <div className="text-center space-y-4 max-w-xl mx-auto">
              <h2 className="text-2xl font-bold">Schedule a Personalized Demo</h2>
              <p className="text-muted-foreground">
                Want to see how Token Tapestry can work specifically for your brand? Book a call with our team.
              </p>
              <Button 
                onClick={() => window.location.href = "/contact"}
                variant="outline" 
                className="bg-background hover:bg-background/90"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Try the Interactive Demo</DialogTitle>
            <DialogDescription>
              Enter your email to access the full interactive demo of Token Tapestry.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div className="space-y-2">
              <Label htmlFor="demo-email">Email</Label>
              <Input
                id="demo-email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-token-purple to-token-blue">
              Get Demo Access
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Demo;
