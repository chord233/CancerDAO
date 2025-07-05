import { Link } from "wouter";
import { MessageCircle, Send, FileText } from "lucide-react";

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
              与公众共建一个无癌世界。通过AI、区块链和社区力量，革新癌症的预防与治疗。
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
                href="https://discord.gg/cancerdao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://t.me/cancerdao"
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
            <h3 className="text-white font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                    关于我们
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/solution">
                  <span className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                    解决方案
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/for-individuals">
                  <span className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                    面向个人
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/community">
                  <span className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                    社区
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">资源</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources">
                  <span className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                    白皮书
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact@cancerdao.org"
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                >
                  联系我们
                </a>
              </li>
              <li>
                <Link href="/privacy">
                  <span className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                    隐私政策
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <span className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                    服务条款
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 CancerDAO. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Everyone deserves a life without cancer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
