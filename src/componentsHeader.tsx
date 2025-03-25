import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Login from "@/components/Login";
import Signup from "@/components/Signup";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLoginClose = () => setShowLogin(false);
  const handleSignupClose = () => setShowSignup(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-xl font-bold tracking-tight">ResumeScreen<span className="text-blue-500">AI</span></span>
        </a>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium hover:text-primary/80 transition-colors">Features</a>
          <a href="#how-itworks" className="text-sm font-medium hover:text-primary/80 transition-colors">How It Works</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary/80 transition-colors">Testimonials</a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary/80 transition-colors">Pricing</a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" className="rounded-full" onClick={() => setShowLogin(true)}>Sign In</Button>
          <Button className="rounded-full" onClick={() => setShowSignup(true)}>Get Started</Button>
        </div>
      </div>
      {showLogin && <Login onClose={handleLoginClose} />}
      {showSignup && <Signup onClose={handleSignupClose} />}
    </header>
  );
}
