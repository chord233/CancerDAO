/**
 * CancerDAO 项目落地页组件
 * 基于原有homepage结构更新为新的landing page设计
 * 保留核心功能模块，优化视觉呈现和用户体验
 */

// ============== 依赖导入 ==============
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
// Lucide React 图标库
import {
  Brain,
  Shield,
  Users,
  AlertTriangle,
  TrendingUp,
  Database,
  Smartphone,
  ArrowRight,
  Mail,
  Linkedin,
} from "lucide-react";


// ============== 工具库导入 ==============
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/language-context";
import { Link, useNavigate } from "react-router-dom";

// ============== 静态资源导入 ==============
import backgroundImage from "@assets/1500x500_1752159520914.jfif";
import medicalTimelineImage from "@assets/fcff4af08eed8cfcd771ee7f8838a565_1752466134324.png";
import cancerDaoLogo from "@assets/透明底_1752468326586.png";

// ============== 主组件 ==============
export default function LandingPage() {
  // ============== 状态管理 ==============
  const [email, setEmail] = useState("");
  const [activeCard, setActiveCard] = useState<number | null>(null);
  
  // ============== 工具钩子 ==============
  const { toast } = useToast();
  const { t } = useLanguage();
  const navigate = useNavigate();

  // ============== 数据变更 ==============
  const subscribeMutation = useMutation({
    mutationFn: (email: string) => 
      apiRequest("POST", "/api/subscribe", { email }),
    onSuccess: () => {
      toast({
        title: t("toast.subscribe.success.title"),
        description: t("toast.subscribe.success.description"),
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: t("toast.subscribe.error.title"),
        description: error.response?.data?.error || t("toast.subscribe.error.description"),
        variant: "destructive",
      });
    },
  });

  // ============== 事件处理 ==============
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      subscribeMutation.mutate(email.trim());
    }
  };

  // ============== 页面渲染 ==============
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      {/* ========== Hero 首屏区域 ========== */}
      <section className="relative w-full min-h-[573px] bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt="Hero Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-8 h-full flex items-center py-20">
          <div className="flex-1 max-w-[600px]">
            <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Revolutionize Cancer Prevention and Care with the Public
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              AI-powered personalized health companion for cancer prevention and
              early detection
            </p>
            <Button 
              className="h-auto px-8 py-4 text-lg bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 rounded-full"
              onClick={() => navigate('/signup')}
            >
              Join Our Community
            </Button>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <div className="relative">
              <img
                src="/api/placeholder/346/346"
                alt="Hero Illustration"
                className="w-[346px] h-[346px] rounded-full"
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* ========== 问题展示区域 ========== */}
      <section id="about" className="w-full py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              The Challenges We Face
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Cancer is becoming a major threat to human health and existing
              prevention and treatment systems have many limitations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 0,
                icon: AlertTriangle,
                title: "Rising Global Cancer Incidence",
                description: "Cancer rates are increasing worldwide, particularly among younger populations, creating an urgent need for innovative solutions.",
                points: [
                  "Global cancer burden expected to rise by 47% by 2040",
                  "Early-onset cancers increasing by up to 80% in some countries"
                ],
                image: "/api/placeholder/369/256"
              },
              {
                id: 1,
                icon: Users,
                title: "Knowledge and Support Gap",
                description: "The public lacks accessible knowledge and support systems for effective cancer prevention and treatment navigation.",
                points: [
                  "Only 5-10% of cancers are hereditary",
                  "Over 40% of cancer cases are preventable"
                ],
                image: "/api/placeholder/369/256"
              },
              {
                id: 2,
                icon: TrendingUp,
                title: "Innovation Barriers",
                description: "Institutions and enterprises face slow, costly innovation cycles in cancer research and treatment development.",
                points: [
                  "Average drug development cost exceeds $2.6B",
                  "90% of clinical drug development fails"
                ],
                image: "/api/placeholder/332/247"
              }
            ].map((card) => (
              <div key={card.id} className="relative">
                <div 
                  className={`problem-card cursor-pointer transition-all duration-300 ${
                    activeCard === card.id ? 'relative z-10 shadow-2xl transform scale-105' : 'relative z-10'
                  }`}
                  onClick={() => setActiveCard(activeCard === card.id ? null : card.id)}
                >
                  {activeCard === card.id ? (
                    <>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <card.icon className="h-8 w-8 mr-3 text-orange-500" />
                          <h3 className="text-xl font-semibold text-black">{card.title}</h3>
                        </div>
                        <div className="text-2xl font-bold rotate-180 text-purple-400">
                          ▼
                        </div>
                      </div>
                      <img src={card.image} alt={card.title} className="w-full h-64 object-cover rounded-lg mb-4" />
                      <div className="space-y-3 animate-in slide-in-from-top-2 duration-300 mt-4 pt-4 border-t border-gray-200">
                        <p className="text-black">{card.description}</p>
                        <ul className="text-sm text-black space-y-1">
                          {card.points.map((point, index) => (
                            <li key={index}>• {point}</li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <card.icon className="h-8 w-8 mr-3 text-orange-500" />
                          <h3 className="text-xl font-semibold text-black">{card.title}</h3>
                        </div>
                        <div className="text-2xl font-bold text-purple-400">
                          ▼
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 产品预览区域 ========== */}
      <section id="products" className="w-full py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Core Product Preview - CancerDAO PILL
            </h2>
            <p className="text-xl text-gray-600">
              Explore CancerDAO PILL: Your Personalized Anti-Cancer Companion
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  AI-Driven Smart Medical Record Interpretation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Upload your medical images and text reports. CancerDAO PILL
                  utilizes advanced AI technology to quickly extract key
                  information, interpret complex medical terms, and provide
                  personalized risk insights and health advice, helping you gain
                  a more thorough understanding of your health status.
                </p>
              </div>

              <div className="flex justify-center">
                <img
                  src="/api/placeholder/216/411"
                  alt="Medical Analysis Interface"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Your Exclusive Health Timeline
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  CancerDAO PILL builds a comprehensive personal health timeline
                  for you, integrating every examination, medication, and daily
                  health data. You can clearly track your health journey, manage
                  personal data, and review it at any time, providing a reliable
                  basis for health decisions.
                </p>
              </div>

              <div className="flex justify-center">
                <img
                  src={medicalTimelineImage}
                  alt="Health Timeline Interface"
                  className="rounded-2xl shadow-lg h-[411px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 全球影响力数据区域 ========== */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Global Impact
            </h2>
            <p className="text-xl text-gray-600">
              Join us in building a cancer-free world with data demonstrating
              our collective strength
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "1M+", label: "Users Worldwide" },
              { number: "50K+", label: "Health Records Analyzed" },
              { number: "95%", label: "Accuracy Rate" },
              { number: "24/7", label: "AI Support" }
            ].map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 团队介绍区域 ========== */}
      <section id="team" className="w-full py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">
              An interdisciplinary team of experts from top institutions
            </p>
          </div>

          <div className="relative">
            <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Dr. Sarah Chen",
                  role: "Chief Medical Officer",
                  image: "/api/placeholder/88/88",
                },
                {
                  name: "Prof. Michael Zhang",
                  role: "AI Research Lead",
                  image: "/api/placeholder/88/88",
                },
                {
                  name: "Dr. Lisa Wang",
                  role: "Clinical Director",
                  image: "/api/placeholder/88/88",
                },
                {
                  name: "Dr. James Liu",
                  role: "Data Scientist",
                  image: "/api/placeholder/88/88",
                },
                {
                  name: "Dr. Anna Kim",
                  role: "Product Manager",
                  image: "/api/placeholder/88/88",
                },
                {
                  name: "Dr. David Park",
                  role: "Engineering Lead",
                  image: "/api/placeholder/88/88",
                }
              ].map((member, index) => (
                <Card key={index} className="w-full sm:w-[300px] p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="flex flex-col items-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg mb-4"
                    />
                    <div className="text-center">
                      <div className="font-semibold text-gray-800 text-lg">
                        {member.name}
                      </div>
                      <div className="text-sm text-gray-600">{member.role}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== 社区展示区域 ========== */}
      <section id="community" className="w-full py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Join Our Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of the movement to revolutionize cancer care
            </p>
          </div>

          <div className="rounded-2xl p-8 text-center bg-gradient-to-br from-purple-100 to-pink-100">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Connect With Us
            </h3>
            <p className="mb-6 max-w-2xl mx-auto text-gray-600">
              Join thousands of members in our global community working together to fight cancer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="font-semibold px-8 py-3"
                variant="outline"
                onClick={() => window.open("http://discord.gg/zKwyqxjeun", "_blank")}
              >
                Discord
              </Button>
              <Button
                className="font-semibold px-8 py-3"
                variant="outline"
                onClick={() => window.open("https://twitter.com/CancerDAOxyz", "_blank")}
              >
                Twitter/X
              </Button>
              <Button
                className="font-semibold px-8 py-3"
                variant="outline"
                onClick={() => window.open("https://web.telegram.org/a/#-1002393239074_1", "_blank")}
              >
                Telegram
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 订阅区域 ========== */}
      <section id="contact" className="w-full py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="rounded-2xl bg-white p-8 shadow-lg max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-600">
                Subscribe to our newsletter for the latest updates and news
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500"
                disabled={subscribeMutation.isPending}
              >
                {subscribeMutation.isPending ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* ========== 网站页脚 ========== */}
      <footer className="w-full bg-gray-900 text-white py-16">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={cancerDaoLogo}
                  alt="CancerDAO Logo"
                  className="w-[42px] h-[39px]"
                />
                <div className="text-xl font-bold">CancerDAO</div>
              </div>
              <p className="text-gray-400">
                Revolutionizing cancer prevention and care through AI-powered
                personalized health solutions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/products" className="hover:text-white transition-colors">
                    CancerDAO PILL
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-white transition-colors">
                    AI Analysis
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-white transition-colors">
                    Health Timeline
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="hover:text-white transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/help" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 mb-4 md:mb-0">
                © {new Date().getFullYear()} CancerDAO. All rights reserved.
              </div>

              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </Button>
                
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}