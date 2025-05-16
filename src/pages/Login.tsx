
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Logged in successfully",
        description: "Welcome back to Token Tapestry!",
      });
      navigate("/merchant-dashboard");
    }, 1500);
  };

  return (
    <Layout>
      <div className="container max-w-md py-16 px-4">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-muted-foreground">
              Log in to your Token Tapestry account
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="text-right">
                <Button variant="link" className="p-0 h-auto text-xs" onClick={() => navigate("/forgot-password")}>
                  Forgot your password?
                </Button>
              </div>
            </div>

            <Button type="submit" className="w-full bg-gradient-to-r from-token-purple to-token-blue" disabled={loading}>
              {loading ? "Logging in..." : "Log in"}
            </Button>
          </form>

          <div className="text-center text-sm">
            <p>
              Don't have an account?{" "}
              <Button variant="link" className="p-0" onClick={() => navigate("/signup")}>
                Sign up
              </Button>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
