import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChartLine, Home, Filter, TrendingUp, FileText, Shield } from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Sales Pipeline", href: "/pipeline", icon: Filter },
  { name: "Revenue Forecast", href: "/forecast", icon: TrendingUp },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Backup & Recovery", href: "/backup", icon: Shield },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-white shadow-lg border-r border-slate-200 hidden lg:block">
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <ChartLine className="text-white" size={20} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800">RetailPro</h1>
            <p className="text-sm text-slate-500">Sales Dashboard</p>
          </div>
        </div>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.name}>
                <Link to={item.href}>
                  <a
                    className={cn(
                      "sidebar-nav-item",
                      isActive && "active"
                    )}
                  >
                    <item.icon size={20} />
                    <span>{item.name}</span>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
