
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { CheckIcon } from "lucide-react";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: number;
  yearlyPrice?: number;
  description: string;
  features: PlanFeature[];
  buttonText: string;
  highlighted?: boolean;
  badge?: string;
}

const Pricing = () => {
  const [annual, setAnnual] = useState(false);
  
  const plans: PricingPlan[] = [
    {
      name: "Starter",
      price: 29,
      yearlyPrice: 290,
      description: "Perfect for small stores just getting started with tokenization",
      features: [
        { text: "Up to 100 tokens per month", included: true },
        { text: "Basic customer dashboard", included: true },
        { text: "Email support", included: true },
        { text: "Standard token metadata", included: true },
        { text: "Basic analytics", included: true },
        { text: "Custom branding", included: false },
        { text: "Priority support", included: false },
        { text: "API access", included: false },
      ],
      buttonText: "Start Free Trial"
    },
    {
      name: "Professional",
      price: 99,
      yearlyPrice: 990,
      description: "The perfect package for growing businesses",
      features: [
        { text: "Up to 1,000 tokens per month", included: true },
        { text: "Advanced customer dashboard", included: true },
        { text: "Priority email support", included: true },
        { text: "Extended token metadata", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Custom branding", included: true },
        { text: "API access", included: true },
        { text: "Dedicated account manager", included: false },
      ],
      buttonText: "Start Free Trial",
      highlighted: true,
      badge: "Most Popular"
    },
    {
      name: "Enterprise",
      price: 299,
      yearlyPrice: 2990,
      description: "For large businesses with custom requirements",
      features: [
        { text: "Unlimited tokens", included: true },
        { text: "Fully customizable dashboard", included: true },
        { text: "24/7 priority support", included: true },
        { text: "Custom token metadata", included: true },
        { text: "Enterprise analytics", included: true },
        { text: "White-label solution", included: true },
        { text: "Full API access", included: true },
        { text: "Dedicated account manager", included: true },
      ],
      buttonText: "Contact Sales"
    }
  ];

  return (
    <Layout>
      <div className="container py-16 px-4">
        <div className="space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to tokenize your products and engage with your customers
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-4">
            <span className={annual ? "text-muted-foreground" : ""}>Monthly</span>
            <Switch
              id="annual-billing"
              checked={annual}
              onCheckedChange={setAnnual}
            />
            <div className="flex items-center gap-2">
              <span className={!annual ? "text-muted-foreground" : ""}>Annual</span>
              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Save 20%</Badge>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.name}
                className={`rounded-xl border bg-background overflow-hidden transition-all duration-200 ${
                  plan.highlighted 
                    ? "shadow-lg ring-2 ring-token-purple scale-105 md:-translate-y-1" 
                    : "shadow hover:shadow-md"
                }`}
              >
                <div className="p-6 space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-2xl">{plan.name}</h3>
                      {plan.badge && (
                        <Badge className="bg-gradient-to-r from-token-purple to-token-blue text-white">
                          {plan.badge}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">
                        ${annual ? plan.yearlyPrice! / 12 : plan.price}
                      </span>
                      <span className="text-muted-foreground ml-2">/month</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {annual && "Billed annually at $" + plan.yearlyPrice}
                    </p>
                    <p className="text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>
                  
                  <Button 
                    className={`w-full ${
                      plan.highlighted 
                        ? "bg-gradient-to-r from-token-purple to-token-blue hover:opacity-90" 
                        : ""
                    }`}
                    variant={plan.highlighted ? "default" : "outline"}
                    asChild
                  >
                    <Link to={plan.name.toLowerCase() === "enterprise" ? "/contact" : "/signup"}>
                      {plan.buttonText}
                    </Link>
                  </Button>
                </div>
                
                <div className="border-t">
                  <div className="p-6 space-y-4">
                    <h4 className="font-medium">What's included:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className={`mr-2 mt-1 ${feature.included ? 'text-primary' : 'text-muted-foreground'}`}>
                            {feature.included ? (
                              <CheckIcon className="h-4 w-4" />
                            ) : (
                              <div className="h-4 w-4 rounded-full border border-muted-foreground"></div>
                            )}
                          </div>
                          <span className={feature.included ? "" : "text-muted-foreground"}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto space-y-8 pt-12">
            <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Is there a free trial?</h3>
                <p className="text-muted-foreground">
                  Yes, all plans come with a 14-day free trial. No credit card required to get started.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Can I change plans later?</h3>
                <p className="text-muted-foreground">
                  Absolutely. You can upgrade or downgrade your plan at any time through your account dashboard.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-medium">What payment methods are accepted?</h3>
                <p className="text-muted-foreground">
                  We accept all major credit cards, PayPal, and crypto payments (BTC, ETH, SOL).
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Are there any additional fees?</h3>
                <p className="text-muted-foreground">
                  There are no hidden fees. Your subscription covers all features listed in your plan.
                  Solana network fees are included in your subscription.
                </p>
              </div>
            </div>
            
            <div className="text-center pt-6">
              <p className="text-muted-foreground">
                Have more questions?{" "}
                <Button variant="link" asChild className="p-0">
                  <Link to="/contact">Contact our team</Link>
                </Button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
