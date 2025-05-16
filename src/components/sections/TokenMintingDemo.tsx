
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { CheckIcon } from "lucide-react";

const TokenMintingDemo = () => {
  const [mintingStage, setMintingStage] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const mintStages = [
    { name: "Purchase Verification", duration: 1200 },
    { name: "Creating Token Metadata", duration: 1500 },
    { name: "Generating Digital Asset", duration: 1800 },
    { name: "Minting on Blockchain", duration: 2000 },
    { name: "Assigning to Customer Wallet", duration: 1000 }
  ];

  const runMintingSimulation = () => {
    setMintingStage(0);
    setIsComplete(false);
    
    let currentStage = 0;
    let timer: NodeJS.Timeout;

    const advanceStage = () => {
      if (currentStage < mintStages.length - 1) {
        currentStage++;
        setMintingStage(currentStage);
        timer = setTimeout(advanceStage, mintStages[currentStage].duration);
      } else {
        setIsComplete(true);
        toast.success("Token successfully minted!", {
          description: "The token is now available in the customer's wallet."
        });
      }
    };

    timer = setTimeout(advanceStage, mintStages[0].duration);

    return () => clearTimeout(timer);
  };

  const progressPercent = isComplete ? 100 : 
    mintingStage === 0 ? 10 : 
    Math.round((mintingStage / (mintStages.length - 1)) * 100);

  return (
    <section className="py-16 md:py-24 bg-accent/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Token Minting Demo
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              See how tokens are minted on the blockchain in real-time
            </p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="token-effect">
            <CardContent className="p-6 sm:p-8">
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">Solana NFT Token</h3>
                    <p className="text-muted-foreground">Product: Limited Edition T-Shirt</p>
                  </div>
                  
                  <Badge 
                    variant="outline" 
                    className={isComplete ? "bg-green-100 text-green-800 border-0" : "bg-yellow-100 text-yellow-800 border-0"}
                  >
                    {isComplete ? "Minted" : "In Progress"}
                  </Badge>
                </div>
                
                <div className="space-y-5">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Minting Progress</span>
                      <span>{progressPercent}%</span>
                    </div>
                    <Progress value={progressPercent} className="h-2" />
                  </div>
                  
                  <div className="space-y-3">
                    {mintStages.map((stage, index) => (
                      <div 
                        key={stage.name}
                        className={`flex items-center justify-between p-3 rounded-md border ${
                          mintingStage > index || isComplete
                            ? "bg-green-50 border-green-100"
                            : mintingStage === index
                            ? "bg-yellow-50 border-yellow-100"
                            : "bg-background"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            mintingStage > index || isComplete
                              ? "bg-green-100 text-green-600"
                              : mintingStage === index
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-muted text-muted-foreground"
                          }`}>
                            {mintingStage > index || isComplete ? (
                              <CheckIcon className="w-4 h-4" />
                            ) : (
                              <span className="text-xs">{index + 1}</span>
                            )}
                          </div>
                          <span>{stage.name}</span>
                        </div>
                        
                        <span className="text-xs text-muted-foreground">
                          {mintingStage > index || isComplete
                            ? "Complete"
                            : mintingStage === index
                            ? "In Progress"
                            : "Pending"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <Button 
                    size="lg"
                    onClick={runMintingSimulation}
                    disabled={mintingStage !== 0 && !isComplete}
                    className="bg-gradient-to-r from-token-purple to-token-blue hover:opacity-90"
                  >
                    {isComplete ? "Mint Another Token" : mintingStage === 0 ? "Start Minting Process" : "Minting in Progress..."}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TokenMintingDemo;
