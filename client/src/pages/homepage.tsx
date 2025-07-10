import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Twitter as TwitterIcon,
} from "lucide-react";

// Custom X (Twitter) Icon
const TwitterXIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-4 h-4"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/language-context";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "@assets/1500x500_1752159520914.jfif";

export default function Homepage() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const { t } = useLanguage();
  const navigate = useNavigate();

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
        description:
          error.response?.data?.error || t("toast.subscribe.error.description"),
        variant: "destructive",
      });
    },
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      subscribeMutation.mutate(email.trim());
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden py-20 lg:py-32 bg-gradient-to-b from-[#B58AFF] via-[#c9a4ff] to-white">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-50 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            filter: 'brightness(1.05) contrast(0.95)',
          }}
        />
        {/* Gradient Overlay for smooth transition */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#c9a4ff]/15 to-white/60" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-yellow-bright to-orange-red bg-clip-text text-transparent floating-animation">
                CancerDAO
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-yellow-bright to-orange-red bg-clip-text text-transparent">
                {t("hero.title")}
              </span>
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                className="btn-secondary text-lg px-8 py-4
                 border-2 border-orange-red text-orange-red bg-transparent 
                 hover:bg-orange-red hover:text-white rounded-full  
                 font-semibold transform transition-all duration-300 ease-in-out
                 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-red focus:ring-offset-2"
                onClick={() =>
                  window.location.href = "/solution"
                }
              >
                {t("hero.cta1")}
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button
                className="btn-secondary text-lg px-8 py-4
                 border-2 border-purple-medium text-purple-medium bg-transparent
                 font-semibold rounded-full transform transition-all duration-300 ease-in-out
                 hover:scale-105 hover:bg-purple-medium hover:text-white 
                 focus:outline-none focus:ring-2 focus:ring-purple-medium focus:ring-offset-2"
                onClick={() =>
                  document
                    .getElementById("join-community")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t("hero.cta2")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white relative">
        {/* Subtle continuation of background image at top */}
        <div 
          className="absolute top-0 left-0 right-0 h-40 opacity-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
          }}
        />
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                {t("problem.title")}
              </h2>
              <p className="text-xl text-black max-w-3xl mx-auto">
                {t("problem.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="problem-card">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="h-8 w-8 mr-3" style={{ color: '#fc593d' }} />
                  <h3 className="text-xl font-semibold text-black">
                    {t("problem.global.title")}
                  </h3>
                </div>
                <div className="space-y-3">
                  <p className="text-black">
                    <strong>{t("problem.global.description")}</strong>
                  </p>
                  <ul className="text-sm text-black space-y-1">
                    <li>• {t("problem.global.point1")}</li>
                    <li>• {t("problem.global.point2")}</li>
                  </ul>
                </div>
              </div>

              <div className="problem-card">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 mr-3" style={{ color: '#fc593d' }} />
                  <h3 className="text-xl font-semibold text-black">
                    {t("problem.knowledge.title")}
                  </h3>
                </div>
                <div className="space-y-3">
                  <p className="text-black">
                    <strong>{t("problem.knowledge.description")}</strong>
                  </p>
                  <ul className="text-sm text-black space-y-1">
                    <li>• {t("problem.knowledge.point1")}</li>
                    <li>• {t("problem.knowledge.point2")}</li>
                    <li>• {t("problem.knowledge.point3")}</li>
                  </ul>
                </div>
              </div>

              <div className="problem-card">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-8 w-8 mr-3" style={{ color: '#fc593d' }} />
                  <h3 className="text-xl font-semibold text-black">
                    {t("problem.innovation.title")}
                  </h3>
                </div>
                <div className="space-y-3">
                  <p className="text-black">
                    <strong>{t("problem.innovation.description")}</strong>
                  </p>
                  <ul className="text-sm text-black space-y-1">
                    <li>• {t("problem.innovation.point1")}</li>
                    <li>• {t("problem.innovation.point2")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview - Simplified */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              {t("product.title")}
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              {t("product.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* 第一个手机 - AI智能分析 */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-80 h-96 mx-auto rounded-3xl p-2 shadow-2xl" style={{ background: 'linear-gradient(135deg, #c9a4ff 0%, #e7d1ff 100%)' }}>
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    <div className="h-20 flex items-center justify-center" style={{ background: 'linear-gradient(90deg, #c9a4ff 0%, #e7d1ff 100%)' }}>
                      <div className="text-black font-bold text-lg">
                        CancerDAO PILL
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="p-4 rounded-lg" style={{ backgroundColor: '#e7d1ff' }}>
                        <div className="flex items-center justify-center mb-3">
                          <Brain className="h-6 w-6" style={{ color: '#c9a4ff' }} />
                        </div>
                        <h4 className="font-semibold text-black mb-2 text-center">
                          {t("product.ai.analysis")}
                        </h4>
                        <div className="w-full h-16 rounded" style={{ backgroundColor: '#c9a4ff' }}></div>
                        <p className="text-xs text-black mt-2 text-center">
                          AI 实时分析中...
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-gray-100">
                        <div className="space-y-2">
                          <div className="h-2 rounded" style={{ backgroundColor: '#e7d1ff', width: '80%' }}></div>
                          <div className="h-2 rounded" style={{ backgroundColor: '#e7d1ff', width: '60%' }}></div>
                          <div className="h-2 rounded" style={{ backgroundColor: '#e7d1ff', width: '90%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center mb-4">
                  <Brain className="h-8 w-8 mr-3" style={{ color: '#c9a4ff' }} />
                  <h3 className="text-2xl font-bold text-black">
                    {t("product.feature1.title")}
                  </h3>
                </div>
                <p className="text-black leading-relaxed max-w-md mx-auto">
                  {t("product.feature1.description")}
                </p>
              </div>
            </div>

            {/* 第二个手机 - 健康时间线 */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-80 h-96 mx-auto rounded-3xl p-2 shadow-2xl" style={{ background: 'linear-gradient(135deg, #c9a4ff 0%, #e7d1ff 100%)' }}>
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    <div className="h-20 flex items-center justify-center" style={{ background: 'linear-gradient(90deg, #c9a4ff 0%, #e7d1ff 100%)' }}>
                      <div className="text-black font-bold text-lg">
                        CancerDAO PILL
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="p-4 rounded-lg" style={{ backgroundColor: '#e7d1ff' }}>
                        <div className="flex items-center justify-center mb-3">
                          <Smartphone className="h-6 w-6" style={{ color: '#c9a4ff' }} />
                        </div>
                        <h4 className="font-semibold text-black mb-2 text-center">
                          {t("product.timeline")}
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#c9a4ff' }}></div>
                            <div className="text-xs text-black text-left">2024年3月 体检报告</div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#fad000' }}></div>
                            <div className="text-xs text-black text-left">2024年6月 基因检测</div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                            <div className="text-xs text-gray-500 text-left">2024年9月 预约检查</div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 rounded-lg" style={{ backgroundColor: '#e7d1ff' }}>
                        <h4 className="font-semibold text-black mb-2">
                          {t("product.blockchain.security")}
                        </h4>
                        <div className="flex items-center justify-center">
                          <Shield className="h-8 w-8" style={{ color: '#c9a4ff' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center mb-4">
                  <Smartphone className="h-8 w-8 mr-3" style={{ color: '#c9a4ff' }} />
                  <h3 className="text-2xl font-bold text-black">
                    {t("product.feature2.title")}
                  </h3>
                </div>
                <p className="text-black leading-relaxed max-w-md mx-auto">
                  {t("product.feature2.description")}
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Button className="btn-primary">
              {t("product.learn.more")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Community Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              {t("community.title")}
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              {t("community.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-8">
              <CardContent className="p-0">
                <div className="mb-4">
                  <Database className="h-8 w-8 mx-auto" style={{ color: '#c9a4ff' }} />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {t("community.data.title")}
                </h3>
                <p className="text-3xl font-bold mb-2" style={{ color: '#c9a4ff' }}>
                  {t("community.data.count")}
                </p>
                <p className="text-black">{t("community.data.label")}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="p-0">
                <div className="mb-4">
                  <Users className="h-8 w-8 mx-auto" style={{ color: '#c9a4ff' }} />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {t("community.members.title")}
                </h3>
                <p className="text-3xl font-bold mb-2" style={{ color: '#c9a4ff' }}>
                  {t("community.members.count")}
                </p>
                <p className="text-black">{t("community.members.label")}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="p-0">
                <div className="mb-4">
                  <Brain className="h-8 w-8 mx-auto" style={{ color: '#c9a4ff' }} />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {t("community.ai.title")}
                </h3>
                <p className="text-3xl font-bold mb-2" style={{ color: '#c9a4ff' }}>
                  {t("community.ai.count")}
                </p>
                <p className="text-black">{t("community.ai.label")}</p>
              </CardContent>
            </Card>
          </div>

          <div
            id="join-community"
            className="rounded-2xl p-8 text-center"
            style={{ background: 'linear-gradient(135deg, #c9a4ff 0%, #e7d1ff 100%)' }}
          >
            <h3 className="text-2xl font-bold mb-4 text-black">
              {t("community.join.title")}
            </h3>
            <p className="mb-6 max-w-2xl mx-auto text-black">
              {t("community.join.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="font-semibold px-8 py-3 text-black"
                style={{ backgroundColor: '#fad000' }}
                onClick={() =>
                  window.open("http://discord.gg/zKwyqxjeun", "_blank")
                }
              >
                {t("community.join.discord")}
              </Button>
              <Button
                className="font-semibold px-8 py-3 text-black"
                style={{ backgroundColor: '#fad000' }}
                onClick={() =>
                  window.open("https://twitter.com/CancerDAOxyz", "_blank")
                }
              >
                {t("community.join.twitter")}
              </Button>
              <Button
                className="font-semibold px-8 py-3 text-black"
                style={{ backgroundColor: '#fad000' }}
                onClick={() =>
                  window.open("https://web.telegram.org/a/#-1002393239074_1", "_blank")
                }
              >
                {t("community.join.telegram")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview - Simplified */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              {t("team.title")}
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              {t("team.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Prof. Michael Yang, PhD",
                titleKey: "about.team.title.michael",
                roleKey: "about.team.role.michael",
              },
              {
                name: "Prof. YoSean Wang, PhD",
                titleKey: "about.team.title.yosean",
                roleKey: "about.team.role.yosean",
              },
              {
                name: "Zhiwei Bao, PhD",
                titleKey: "about.team.title.zhiwei",
                roleKey: "about.team.role.zhiwei",
              },
              {
                name: "Aspire Cao",
                titleKey: "about.team.title.aspire",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-black" style={{ background: 'linear-gradient(135deg, #c9a4ff 0%, #e7d1ff 100%)' }}>
                      {member.name.split(' ')[0][0]}{member.name.split(' ')[1] ? member.name.split(' ')[1][0] : ''}
                    </div>
                    <h3 className="text-lg font-bold text-black mb-1">
                      {member.name}
                    </h3>
                    <Badge className="mb-2 text-black" style={{ backgroundColor: '#e7d1ff' }}>
                      {t(member.titleKey)}
                    </Badge>
                    {member.roleKey && (
                      <div className="text-sm font-semibold text-black mb-3">
                        {t(member.roleKey).split('\n').map((line, i) => (
                          <p key={i} className="mb-1">{line}</p>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex justify-center gap-2 pt-4 border-t" style={{ borderColor: '#e7d1ff' }}>
                    <Button variant="outline" size="sm" className="p-2">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="p-2">
                      <TwitterXIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              className="btn-primary"
              onClick={() => {
                navigate('/about');
                // 确保页面滚动到顶部
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 50);
              }}
            >
              {t("team.learn.more")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Partners & Ecosystem Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #e7d1ff 0%, #c9a4ff 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              我们的合作伙伴
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              欢迎各类组织加入，共同推动创新
            </p>
          </div>

          {/* Partner Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
            {[
              { name: "VitaDAO", logo: "V", website: "https://vitadao.com" },
              { name: "Longevity Science Foundation", logo: "LSF", website: "#" },
              { name: "Crypto Research Institute", logo: "CRI", website: "#" },
              { name: "BioTech Alliance", logo: "BTA", website: "#" },
              { name: "Health Innovation Hub", logo: "HIH", website: "#" },
              { name: "Future Medicine Labs", logo: "FML", website: "#" },
              { name: "Digital Health Collective", logo: "DHC", website: "#" },
              { name: "Cancer Research Network", logo: "CRN", website: "#" }
            ].map((partner, index) => (
              <div 
                key={index} 
                className="group cursor-pointer"
                onClick={() => partner.website !== "#" && window.open(partner.website, "_blank")}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 hover:bg-white transition-all duration-300 hover:shadow-lg flex flex-col items-center justify-center h-32">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-black mb-2 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: '#c9a4ff' }}
                  >
                    {partner.logo}
                  </div>
                  <div className="text-sm font-medium text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {partner.name}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-black mb-4">
                成为我们的合作伙伴
              </h3>
              <p className="text-black mb-6">
                我们正在寻找志同道合的机构和组织，共同构建去中心化的癌症预防与治疗生态系统
              </p>
              <Button 
                className="font-semibold px-8 py-3 text-black"
                style={{ backgroundColor: '#fad000' }}
                onClick={() => navigate('/for-partners')}
              >
                了解合作机会
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}