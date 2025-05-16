
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface TokenCardProps {
  id: string;
  name: string;
  image: string;
  purchaseDate: string;
  status: "minted" | "pending" | "staked";
  productSku: string;
}

const TokenCard = ({ id, name, image, purchaseDate, status, productSku }: TokenCardProps) => {
  const statusColors = {
    minted: "bg-green-100 text-green-800 hover:bg-green-200",
    pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
    staked: "bg-blue-100 text-blue-800 hover:bg-blue-200"
  };
  
  const statusText = {
    minted: "Minted",
    pending: "Pending",
    staked: "Staked"
  };

  return (
    <Card className="token-card overflow-hidden">
      <div className="aspect-square relative overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute top-2 right-2">
          <Badge 
            variant="outline" 
            className={`${statusColors[status]} border-0`}
          >
            {statusText[status]}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4 space-y-4">
        <div className="space-y-1">
          <h3 className="font-medium text-lg">{name}</h3>
          <p className="text-xs text-muted-foreground">
            Purchased {purchaseDate} • SKU: {productSku}
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button size="sm" className="w-full bg-token-purple hover:bg-token-purple/90">
            View Details
          </Button>
          <Button size="sm" variant="outline" className="w-full">
            Transfer
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TokenCard;
