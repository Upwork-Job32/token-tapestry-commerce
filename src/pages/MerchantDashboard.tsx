
import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const MerchantDashboard = () => {
  // Mock data for the dashboard
  const stats = [
    { name: "Total Tokens", value: "1,234", change: "+12%" },
    { name: "Active Customers", value: "856", change: "+5%" },
    { name: "Token Transfers", value: "423", change: "+23%" },
    { name: "Staked Tokens", value: "189", change: "+8%" },
  ];
  
  const recentTokens = [
    { id: "#TK-2458", product: "Premium Sneakers", customer: "john@example.com", date: "May 16, 2025", status: "Minted" },
    { id: "#TK-2457", product: "Designer Watch", customer: "sarah@example.com", date: "May 16, 2025", status: "Pending" },
    { id: "#TK-2456", product: "Limited Hoodie", customer: "mike@example.com", date: "May 15, 2025", status: "Minted" },
    { id: "#TK-2455", product: "Collectible Figurine", customer: "emma@example.com", date: "May 15, 2025", status: "Minted" },
    { id: "#TK-2454", product: "Premium Sneakers", customer: "alex@example.com", date: "May 14, 2025", status: "Minted" },
  ];

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Merchant Dashboard</h1>
              <p className="text-muted-foreground mt-1">
                Monitor and manage your tokenized products
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="outline">Settings</Button>
              <Button className="bg-gradient-to-r from-token-purple to-token-blue hover:opacity-90">
                Create Token Rule
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-1.5">
                    <p className="text-muted-foreground text-sm">{stat.name}</p>
                    <div className="flex items-end justify-between">
                      <p className="text-3xl font-bold">{stat.value}</p>
                      <p className={`text-xs font-medium ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                        {stat.change}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div>
            <Tabs defaultValue="overview">
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="tokens">Tokens</TabsTrigger>
                <TabsTrigger value="customers">Customers</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Recent Tokens</CardTitle>
                        <CardDescription>
                          Recently created tokens for your products
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-3 px-2 text-muted-foreground text-sm font-medium">ID</th>
                                <th className="text-left py-3 px-2 text-muted-foreground text-sm font-medium">Product</th>
                                <th className="text-left py-3 px-2 text-muted-foreground text-sm font-medium">Customer</th>
                                <th className="text-left py-3 px-2 text-muted-foreground text-sm font-medium">Date</th>
                                <th className="text-left py-3 px-2 text-muted-foreground text-sm font-medium">Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {recentTokens.map((token, index) => (
                                <tr key={index} className="border-b hover:bg-muted/50">
                                  <td className="py-3 px-2 text-sm">{token.id}</td>
                                  <td className="py-3 px-2 text-sm">{token.product}</td>
                                  <td className="py-3 px-2 text-sm">{token.customer}</td>
                                  <td className="py-3 px-2 text-sm">{token.date}</td>
                                  <td className="py-3 px-2 text-sm">
                                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                      token.status === "Minted" 
                                        ? "bg-green-100 text-green-800" 
                                        : "bg-yellow-100 text-yellow-800"
                                    }`}>
                                      {token.status}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div>
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle>Tokenization Rules</CardTitle>
                        <CardDescription>
                          Current active rules for product tokenization
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            { name: "Premium Products", trigger: "On Purchase", products: 12 },
                            { name: "Limited Edition", trigger: "On Fulfillment", products: 5 },
                            { name: "Collectibles", trigger: "On Purchase", products: 8 }
                          ].map((rule, i) => (
                            <div key={i} className="p-3 rounded-lg border bg-background flex justify-between items-center">
                              <div>
                                <h4 className="font-medium text-sm">{rule.name}</h4>
                                <p className="text-xs text-muted-foreground">Trigger: {rule.trigger}</p>
                              </div>
                              <div className="text-xs bg-muted px-2 py-1 rounded">
                                {rule.products} products
                              </div>
                            </div>
                          ))}
                          
                          <Button variant="outline" size="sm" className="w-full">
                            Edit Rules
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Tokenization Activity</CardTitle>
                    <CardDescription>
                      Overview of token minting and customer engagement
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="h-80 flex items-center justify-center">
                    <div className="text-center text-muted-foreground space-y-2">
                      <div className="token-effect w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                        </svg>
                      </div>
                      <p className="text-sm">Analytics chart will display here</p>
                      <p className="text-xs">Track token minting, transfers, and customer engagement</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="tokens">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center py-8">
                      <h3 className="text-lg font-medium">Token Management</h3>
                      <p className="text-muted-foreground mt-1">
                        This section will contain detailed token management features
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="customers">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center py-8">
                      <h3 className="text-lg font-medium">Customer Management</h3>
                      <p className="text-muted-foreground mt-1">
                        This section will contain customer details and token ownership
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="analytics">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center py-8">
                      <h3 className="text-lg font-medium">Analytics Dashboard</h3>
                      <p className="text-muted-foreground mt-1">
                        This section will contain detailed analytics and reporting
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MerchantDashboard;
