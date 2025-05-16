
import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TokenCard from "@/components/ui/token-card";

const tokenData = [
  {
    id: "token-1",
    name: "Premium Sneakers",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    purchaseDate: "May 12, 2025",
    status: "minted" as const,
    productSku: "SNK-123-BLK"
  },
  {
    id: "token-2",
    name: "Designer Watch",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    purchaseDate: "May 8, 2025",
    status: "minted" as const,
    productSku: "WCH-456-SLV"
  },
  {
    id: "token-3",
    name: "Limited Hoodie",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    purchaseDate: "May 14, 2025",
    status: "pending" as const,
    productSku: "HDY-789-BLU"
  },
  {
    id: "token-4",
    name: "Collectible Figurine",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    purchaseDate: "May 5, 2025",
    status: "staked" as const,
    productSku: "FIG-101-LTD"
  }
];

const CustomerDashboard = () => {
  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="flex flex-col space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Your Token Gallery</h1>
            <p className="text-muted-foreground mt-2">
              View and manage your digital tokens associated with physical products
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/4">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="all">All Tokens</TabsTrigger>
                  <TabsTrigger value="minted">Minted</TabsTrigger>
                  <TabsTrigger value="pending">Pending</TabsTrigger>
                  <TabsTrigger value="staked">Staked</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tokenData.map((token) => (
                      <TokenCard key={token.id} {...token} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="minted" className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tokenData
                      .filter(token => token.status === "minted")
                      .map((token) => (
                        <TokenCard key={token.id} {...token} />
                      ))
                    }
                  </div>
                </TabsContent>
                
                <TabsContent value="pending" className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tokenData
                      .filter(token => token.status === "pending")
                      .map((token) => (
                        <TokenCard key={token.id} {...token} />
                      ))
                    }
                  </div>
                </TabsContent>
                
                <TabsContent value="staked" className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tokenData
                      .filter(token => token.status === "staked")
                      .map((token) => (
                        <TokenCard key={token.id} {...token} />
                      ))
                    }
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="lg:w-1/4 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>Your wallet and account details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Wallet Address</p>
                    <div className="p-2 rounded-md bg-muted text-xs font-mono truncate">
                      8zH1M9Bm4MeJcENHZvgTz9...k2J7
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm">user@example.com</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Tokens Owned</p>
                    <p className="text-2xl font-bold">{tokenData.length}</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      { action: "Token minted", item: "Limited Hoodie", time: "2 days ago" },
                      { action: "Token viewed", item: "Premium Sneakers", time: "3 days ago" },
                      { action: "Account created", item: "", time: "1 week ago" }
                    ].map((activity, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <div className="space-y-0.5">
                          <p className="text-sm font-medium">{activity.action}</p>
                          {activity.item && (
                            <p className="text-xs text-muted-foreground">{activity.item}</p>
                          )}
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CustomerDashboard;
