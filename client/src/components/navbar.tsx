import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImage from "@assets/透明底_1751544807451.png";

const navigation = [
  { name: "关于我们", href: "/about" },
  { name: "解决方案", href: "/solution" },
  { name: "面向个人", href: "/for-individuals" },
  { name: "面向伙伴", href: "/for-partners" },
  { name: "社区", href: "/community" },
  { name: "资源中心", href: "/resources" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <img 
                src={logoImage} 
                alt="CancerDAO" 
                className="h-10 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <span className={cn(
                  "nav-item",
                  location === item.href && "active"
                )}>
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              className="btn-primary"
              onClick={() => document.getElementById('join-community')?.scrollIntoView({ behavior: 'smooth' })}
            >
              加入社区
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 rounded-lg mt-2 shadow-lg">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span 
                    className={cn(
                      "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                      location === item.href 
                        ? "text-purple-700 bg-purple-100" 
                        : "text-gray-700 hover:text-purple-700 hover:bg-purple-50"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
              <div className="pt-4">
                <Button 
                  className="btn-primary w-full"
                  onClick={() => {
                    document.getElementById('join-community')?.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                  }}
                >
                  加入社区
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}