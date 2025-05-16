
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="token-effect w-9 h-9 bg-gradient-to-r from-token-purple to-token-blue rounded-lg flex items-center justify-center">
              <span className="font-bold text-white">TT</span>
            </div>
            <span className="font-bold text-xl hidden sm:block">Token Tapestry</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
            How It Works
          </Link>
          <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link to="/docs" className="text-sm font-medium hover:text-primary transition-colors">
            Docs
          </Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <Link to="/login">Log in</Link>
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-token-purple to-token-blue hover:opacity-90" asChild>
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
