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
  CheckCircle,
  Mail,
  Lock,
  Cpu
} from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
// Logo will be loaded dynamically

export default function Homepage() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const subscribeMutation = useMutation({
    mutationFn: (email: string) => apiRequest("POST", "/api/subscribe", { email }),
    onSuccess: () => {
      toast({
        title: "订阅成功",
        description: "感谢您的关注！我们会及时通知您最新进展。",
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: "订阅失败",
        description: error.response?.data?.error || "请稍后重试",
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
      <section className="hero-section relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent floating-animation">
                CancerDAO
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              与公众共建，
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                革新癌症防治
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              通过AI、区块链和社区力量，赋予每个人管理健康、共享价值、共创未来的能力
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="btn-primary text-lg px-8 py-4">
                了解我们的解决方案
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                className="btn-secondary text-lg px-8 py-4"
                onClick={() => document.getElementById('join-community')?.scrollIntoView({ behavior: 'smooth' })}
              >
                加入我们的社区
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
              我们面临的挑战
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              癌症正成为人类健康的重大威胁，而现有的预防和治疗体系存在诸多局限
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="problem-card">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">全球性挑战</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>癌症发病率上升</strong>，尤其在年轻群体中
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 大约有 20% 的人将罹患癌症，其中约 10% 会因此离世</li>
                  <li>• 早发性癌症（50岁以下）的发病率在 1990 年至 2019 年间增加了 79.1%</li>
                </ul>
              </div>
            </div>

            <div className="problem-card">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-red-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">知识和支持不足</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>公众在癌症预防和治疗方面知识和支持不足</strong>
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 健康管理及相关数据的知识和工具有限</li>
                  <li>• 难以获得创新的癌症预防和治疗方法</li>
                  <li>• 公众和患者通常被视为"顾客"，限制了积极参与创新</li>
                </ul>
              </div>
            </div>

            <div className="problem-card">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 text-red-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">创新缓慢且成本高昂</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>机构和企业创新缓慢且成本高昂</strong>
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 数据碎片化、孤立，缺乏标准化和共享</li>
                  <li>• 限制了 AI 驱动创新的发展</li>
                  <li>• 获取公众和患者的成本高昂</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              我们的解决方案
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              通过三大核心支柱，构建一个全面的癌症防治生态系统
            </p>
          </div>

          {/* Core Flow Diagram */}
          <div className="mb-16 bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-200">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">核心价值循环</h3>
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mb-3 pulse-glow">
                  <Brain className="h-12 w-12 text-white" />
                </div>
                <p className="text-center font-semibold text-gray-900">AI 平台</p>
                <p className="text-sm text-gray-600 text-center max-w-32">智能分析与预测</p>
              </div>

              <ArrowRight className="h-8 w-8 text-purple-500 transform lg:rotate-0 rotate-90" />

              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-3 pulse-glow">
                  <Shield className="h-12 w-12 text-white" />
                </div>
                <p className="text-center font-semibold text-gray-900">区块链 Medical ID</p>
                <p className="text-sm text-gray-600 text-center max-w-32">数据安全与主权</p>
              </div>

              <ArrowRight className="h-8 w-8 text-purple-500 transform lg:rotate-0 rotate-90" />

              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mb-3 pulse-glow">
                  <Database className="h-12 w-12 text-white" />
                </div>
                <p className="text-center font-semibold text-gray-900">去中心化数据库</p>
                <p className="text-sm text-gray-600 text-center max-w-32">共享与协作</p>
              </div>

              <ArrowRight className="h-8 w-8 text-purple-500 transform lg:rotate-0 rotate-90" />

              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mb-3 pulse-glow">
                  <Cpu className="h-12 w-12 text-white" />
                </div>
                <p className="text-center font-semibold text-gray-900">AI 驱动疗法</p>
                <p className="text-sm text-gray-600 text-center max-w-32">精准治疗方案</p>
              </div>
            </div>
          </div>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="solution-card">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">AI 赋能</h3>
              </div>
              <p className="text-gray-600 text-center mb-6">
                介绍 AI 在健康领域的应用，如个性化分析、风险预测和疗法优化等，强调其如何提升效率和精准度。
              </p>
              <div className="text-center">
                <Button variant="outline" className="hover:bg-purple-100">
                  了解更多 AI 赋能
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="solution-card">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">区块链保障</h3>
              </div>
              <p className="text-gray-600 text-center mb-6">
                阐述区块链技术如何确保用户数据安全、隐私和数据主权，以及如何建立透明、可信的数据共享机制。
              </p>
              <div className="text-center">
                <Button variant="outline" className="hover:bg-blue-100">
                  了解更多区块链保障
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="solution-card">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">社区驱动</h3>
              </div>
              <p className="text-gray-600 text-center mb-6">
                说明社区在生态系统中的核心作用，如何通过集体力量、数据贡献和协作促进创新，为所有参与者创造价值。
              </p>
              <div className="text-center">
                <Button variant="outline" className="hover:bg-green-100">
                  了解更多社区驱动
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              核心产品预览 - CancerDAO PILL
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              您的个人健康管理助手，让健康数据为您所用
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="relative">
                <div className="w-80 h-96 mx-auto bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-700 h-20 flex items-center justify-center">
                      <div className="text-white font-bold text-lg">CancerDAO PILL</div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">AI 病历解读</h4>
                        <div className="w-full bg-purple-200 h-2 rounded-full">
                          <div className="bg-purple-600 h-2 rounded-full w-3/4"></div>
                        </div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">健康时间轴</h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <div className="text-sm text-gray-600">体检报告 - 2024/12</div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <div className="text-sm text-gray-600">血液检查 - 2024/11</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 lg:pl-12">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center mb-4">
                    <Brain className="h-8 w-8 text-purple-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">AI 驱动的病历智能解读</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    上传您的医学影像和文本报告，CancerDAO PILL 利用先进的 AI 技术，为您快速提取关键信息，解读复杂的医学术语，并提供个性化的风险洞察和健康建议，助您更透彻地理解自身健康状况。
                  </p>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <Smartphone className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">您的专属健康时间轴</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    CancerDAO PILL 为您构建一个全面的个人健康时间轴，整合您的每一次检查、每一次用药和日常健康数据。您可以清晰追踪健康历程，管理个人数据，并随时回顾，为健康决策提供可靠依据。
                  </p>
                </div>

                <div className="pt-4">
                  <Button className="btn-primary">
                    了解更多
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Subscription */}
          <div className="mt-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">订阅更新</h3>
            <p className="text-gray-600 mb-6">第一时间获取 CancerDAO PILL 的最新进展和发布信息</p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="输入您的邮箱地址"
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
                {subscribeMutation.isPending ? "订阅中..." : "订阅"}
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Data Sovereignty */}
      <section className="py-20 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              数据主权与信任：您的数据，您做主
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              通过区块链技术和加密算法，确保您的健康数据安全、隐私且为您所有
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-purple-200">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Shield className="h-12 w-12 text-purple-600 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Data NFT：赋予您数据所有权</h3>
                    <Badge className="mt-2 bg-purple-100 text-purple-800">区块链技术</Badge>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  介绍 Data NFT 的概念，解释它如何将您的健康数据转化为数字资产，并记录在区块链上，确保其唯一性、所有权和可追溯性。强调数据提供者如何通过 Data NFT 控制数据访问和受益。
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    数据唯一性与所有权确认
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    区块链记录，永久可追溯
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    您控制数据访问权限
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white/80 backdrop-blur-sm border-purple-200">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Lock className="h-12 w-12 text-blue-600 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">全同态加密 (FHE)：加密计算，隐私无忧</h3>
                    <Badge className="mt-2 bg-blue-100 text-blue-800">隐私保护</Badge>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  介绍 FHE 的概念及其重要性——允许在不解密数据的情况下进行计算。强调这如何彻底保护用户的生物及医疗数据隐私，即使在数据被用于AI分析或研究时也无法被泄露。
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    数据始终保持加密状态
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    支持加密状态下的AI计算
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    医疗数据零泄露风险
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Power */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              You're not ALONE
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              加入我们的全球社区，与志同道合的人一起为无癌世界而努力
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">全球社区</h3>
                <p className="text-3xl font-bold text-purple-600 mb-2">10,000+</p>
                <p className="text-gray-600">活跃成员</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">数据贡献</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">50,000+</p>
                <p className="text-gray-600">健康记录</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">AI 模型</h3>
                <p className="text-3xl font-bold text-green-600 mb-2">95%</p>
                <p className="text-gray-600">准确率</p>
              </CardContent>
            </Card>
          </div>

          <div id="join-community" className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">准备好加入我们了吗？</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              与全球的研究者、患者、医疗专业人士一起，为创造一个无癌世界贡献力量
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3">
                加入 Discord 社区
              </Button>
              <Button 
              
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white"
              onClick={() => window.open('https://twitter.com/cancerdao', '_blank')}
            >
              
              关注我们的 Twitter
            </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              我们的合作伙伴
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              欢迎各类组织加入，共同推动创新
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200 flex items-center justify-center h-24">
                <div className="text-gray-400 font-semibold">合作伙伴 {i}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              我们的团队
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              由来自顶尖机构的专家组成的跨学科团队
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Dr. Alice Chen", role: "创始人 & CEO", expertise: "AI & 生物信息学" },
              { name: "Dr. Bob Wang", role: "首席技术官", expertise: "区块链 & 加密" },
              { name: "Dr. Carol Li", role: "首席医疗官", expertise: "肿瘤学" },
              { name: "Dr. David Zhang", role: "首席科学家", expertise: "机器学习" }
            ].map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ')[1][0]}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="btn-primary">
              了解完整团队
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}