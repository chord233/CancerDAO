import { Link } from "react-router-dom";
import { MessageCircle, Send, FileText } from "lucide-react";
import { LanguageSwitcher } from "./language-switcher";
import { useLanguage } from "../contexts/language-context";

// Custom Twitter X Icon Component
const TwitterXIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                CancerDAO
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6 max-w-md">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/CancerDAOxyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                <TwitterXIcon className="h-5 w-5" />
              </a>
              <a
                href="http://discord.gg/zKwyqxjeun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://web.telegram.org/a/#-1002393239074_1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Send className="h-5 w-5" />
              </a>
              <a
                href="https://medium.com/@cancerdao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                <FileText className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about">
                  <span className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                    {t("nav.about")}
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/solution">
                  <span className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                    {t("nav.solution")}
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/for-individuals">
                  <span className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                    {t("nav.individuals")}
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/community">
                  <span className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                    {t("nav.community")}
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources and Language Switcher */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("footer.resources")}</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link to="/resources">
                  <span className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                    {t("footer.whitepaper")}
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact@cancerdao.org"
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                >
                  {t("footer.contactUs")}
                </a>
              </li>
              <li>
                <Link to="/privacy">
                  <span className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                    {t("footer.privacy")}
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/terms">
                  <span className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                    {t("footer.terms")}
                  </span>
                </Link>
              </li>
            </ul>
            
            {/* Language Switcher */}
            <div className="mt-4">
              <h4 className="text-gray-300 font-medium mb-2 text-sm">{t("footer.language")}</h4>
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t("footer.copyright")}
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              {t("footer.tagline")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
