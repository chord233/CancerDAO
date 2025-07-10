import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
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
} from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/language-context";
import { Link } from "react-router-dom"; // 导入 useNavigate
// Logo will be loaded dynamically

export default function Homepage() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const { t } = useLanguage();
  // const navigate = useNavigate(); // 初始化 useNavigate

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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto text-[#5B3F8A]">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* 第一个按钮 (主要按钮)*/}
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
              {/* 第二个按钮 (次要按钮)*/}
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("problem.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("problem.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="problem-card">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {t("problem.global.title")}
                </h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>{t("problem.global.description")}</strong>
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• {t("problem.global.point1")}</li>
                  <li>• {t("problem.global.point2")}</li>
                </ul>
              </div>
            </div>

            <div className="problem-card">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-red-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {t("problem.knowledge.title")}
                </h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>{t("problem.knowledge.description")}</strong>
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• {t("problem.knowledge.point1")}</li>
                  <li>• {t("problem.knowledge.point2")}</li>
                  <li>• {t("problem.knowledge.point3")}</li>
                </ul>
              </div>
            </div>

            <div className="problem-card">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 text-red-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {t("problem.innovation.title")}
                </h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>{t("problem.innovation.description")}</strong>
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• {t("problem.innovation.point1")}</li>
                  <li>• {t("problem.innovation.point2")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Product Preview - Simplified */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("product.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("product.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <Brain className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    {t("product.feature1.title")}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {t("product.feature1.description")}
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <Smartphone className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    {t("product.feature2.title")}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {t("product.feature2.description")}
                </p>
              </div>

              <div className="pt-4">
                <Button className="btn-primary">
                  {t("product.learn.more")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="w-80 h-96 mx-auto bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-700 h-20 flex items-center justify-center">
                    <div className="text-white font-bold text-lg">
                      CancerDAO PILL
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">
                        {t("product.ai.analysis")}
                      </h4>
                      <div className="w-full bg-purple-200 h-2 rounded-full">
                        <div className="bg-purple-600 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">
                        {t("product.timeline")}
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <div className="text-sm text-gray-600">
                            {t("product.timeline.item1")}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <div className="text-sm text-gray-600">
                            {t("product.timeline.item2")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t("subscribe.title")}
            </h3>
            <p className="text-gray-600 mb-6">{t("subscribe.subtitle")}</p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder={t("subscribe.placeholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button
                type="submit"
                disabled={subscribeMutation.isPending}
                className="btn-primary"
              >
                {subscribeMutation.isPending
                  ? t("subscribe.subscribing")
                  : t("subscribe.button")}
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>



      {/* Community - Simplified */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("community.power.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("community.power.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t("community.global.title")}
                </h3>
                <p className="text-3xl font-bold text-purple-600 mb-2">
                  {t("community.global.count")}
                </p>
                <p className="text-gray-600">{t("community.global.label")}</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t("community.data.title")}
                </h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">
                  {t("community.data.count")}
                </p>
                <p className="text-gray-600">{t("community.data.label")}</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t("community.ai.title")}
                </h3>
                <p className="text-3xl font-bold text-green-600 mb-2">
                  {t("community.ai.count")}
                </p>
                <p className="text-gray-600">{t("community.ai.label")}</p>
              </CardContent>
            </Card>
          </div>

          <div
            id="join-community"
            className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-center text-white"
          >
            <h3 className="text-2xl font-bold mb-4">
              {t("community.join.title")}
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              {t("community.join.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3"
                onClick={() =>
                  window.open("http://discord.gg/zKwyqxjeun", "_blank")
                }
              >
                {t("community.join.discord")}
              </Button>
              <Button
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3"
                onClick={() =>
                  window.open("https://twitter.com/CancerDAOxyz", "_blank")
                }
              >
                {t("community.join.twitter")}
              </Button>
            </div>
          </div>
        </div>
      </section>



      {/* Team Preview - Simplified */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("team.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("team.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Prof. Michael Yang, PhD",
                role: t("team.member.michael.role"), 
              },
              {
                name: "Prof. YoSean Wang, PhD",
                role: t("team.member.yosean.role"),
              },
              {
                name: "Zhiwei Bao, PhD",
                role: t("team.member.zhiwei.role"), 
              },
              {
                name: "Aspire Cao",
                role: t("team.member.aspire.role"),
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(" ")[1][0]}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 font-semibold mb-2">
                    {member.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/about">
              <Button className="btn-primary">
                {t("team.learn.more")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
