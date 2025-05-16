
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

// Mock data for sample tokens
const sampleTokens = [
  {
    id: "1",
    name: "Limited Edition Sneakers",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    purchaseDate: "May 12, 2025",
    status: "minted",
    productSku: "SNK-LE-001",
    attributes: {
      edition: "Limited",
      color: "Blue/White",
      size: "US 10",
      material: "Recycled Canvas"
    }
  },
  {
    id: "2",
    name: "Collector's Watch",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    purchaseDate: "Apr 28, 2025",
    status: "minted",
    productSku: "WTC-CL-002",
    attributes: {
      edition: "Collector's",
      material: "Stainless Steel",
      mechanism: "Automatic",
      waterResistant: "100m"
    }
  },
  {
    id: "3",
    name: "Artisan Coffee Subscription",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    purchaseDate: "May 5, 2025",
    status: "pending",
    productSku: "COF-SUB-003",
    attributes: {
      type: "Subscription",
      origin: "Ethiopia",
      roast: "Medium",
      frequency: "Monthly"
    }
  }
];

type TokenStatus = "minted" | "pending" | "staked";

interface Token {
  id: string;
  name: string;
  image: string;
  purchaseDate: string;
  status: TokenStatus;
  productSku: string;
  attributes: Record<string, string>;
}

const TokenizationExplorer = () => {
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleTokenClick = (token: Token) => {
    setSelectedToken(token);
    setIsDialogOpen(true);
  };

  const handleTransfer = () => {
    toast.success(`Transfer initiated for ${selectedToken?.name}`, {
      description: "Check your wallet for confirmation.",
    });
    setIsDialogOpen(false);
  };

  const statusColors: Record<TokenStatus, string> = {
    minted: "bg-green-100 text-green-800 hover:bg-green-200",
    pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
    staked: "bg-blue-100 text-blue-800 hover:bg-blue-200"
  };
  
  const statusText: Record<TokenStatus, string> = {
    minted: "Minted",
    pending: "Pending",
    staked: "Staked"
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Explore Token Examples
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              See how physical products get transformed into digital tokens
            </p>
          </div>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sampleTokens.map((token) => (
            <Card 
              key={token.id} 
              className="token-card overflow-hidden animate-fade-in hover:shadow-lg transition-all cursor-pointer"
              onClick={() => handleTokenClick(token)}
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={token.image} 
                  alt={token.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute top-2 right-2">
                  <Badge 
                    variant="outline" 
                    className={`${statusColors[token.status as TokenStatus]} border-0`}
                  >
                    {statusText[token.status as TokenStatus]}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-4 space-y-4">
                <div className="space-y-1">
                  <h3 className="font-medium text-lg">{token.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    Purchased {token.purchaseDate} • SKU: {token.productSku}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedToken && (
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>{selectedToken.name}</DialogTitle>
                <DialogDescription>
                  Token ID: {selectedToken.id} • Status: {statusText[selectedToken.status as TokenStatus]}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4">
                <div className="rounded-md overflow-hidden">
                  <img 
                    src={selectedToken.image} 
                    alt={selectedToken.name}
                    className="w-full object-cover" 
                  />
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Token Attributes</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(selectedToken.attributes).map(([key, value]) => (
                      <div key={key} className="flex text-sm">
                        <span className="font-medium mr-1">{key}:</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Product Details</h4>
                  <div className="text-sm">
                    <div className="flex">
                      <span className="font-medium mr-1">SKU:</span>
                      <span className="text-muted-foreground">{selectedToken.productSku}</span>
                    </div>
                    <div className="flex">
                      <span className="font-medium mr-1">Purchase Date:</span>
                      <span className="text-muted-foreground">{selectedToken.purchaseDate}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <DialogFooter className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <Button variant="outline" className="sm:w-auto">View on Blockchain</Button>
                <Button className="bg-token-purple hover:bg-token-purple/90 sm:w-auto" onClick={handleTransfer}>
                  Transfer Token
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default TokenizationExplorer;
