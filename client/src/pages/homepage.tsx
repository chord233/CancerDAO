/**
 * CancerDAO 项目主页组件
 * 包含企业介绍、产品展示、团队信息等核心模块
 * 采用响应式设计，支持多语言国际化
 */

// ============== 依赖导入 ==============
import { useState } from "react";
import { Button } from "@/components/ui/button"; // 自定义按钮组件
import { Input } from "@/components/ui/input"; // 表单输入组件
import { Card, CardContent } from "@/components/ui/card"; // 卡片布局组件
import { Badge } from "@/components/ui/badge"; // 标签组件
// Lucide React 图标库
import {
  Brain,         // 大脑图标 - 代表AI功能
  Shield,        // 盾牌图标 - 代表安全
  Users,         // 用户图标 - 代表社区
  AlertTriangle, // 警告图标 - 用于问题提示
  TrendingUp,    // 上升趋势图标 - 用于增长数据
  Database,      // 数据库图标 - 代表数据存储
  Coins,         // 货币图标 - 代表经济系统
  Smartphone,    // 手机图标 - 代表移动端
  ArrowRight,    // 右箭头 - 用于导航
  Mail,          // 邮件图标
  Linkedin,      // LinkedIn图标
  Twitter as TwitterIcon, // Twitter图标(重命名避免冲突)
} from "lucide-react";

// ============== 自定义组件 ==============
/**
 * 自定义Twitter(X)图标组件 
 * 使用SVG实现新版X图标
 */
const TwitterXIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// ============== 工具库导入 ==============
import { useMutation } from "@tanstack/react-query"; // 数据变更管理
import { apiRequest } from "@/lib/queryClient"; // API请求封装
import { useToast } from "@/hooks/use-toast"; // 通知提示组件
import { useLanguage } from "@/contexts/language-context"; // 多语言上下文
import { Link, useNavigate } from "react-router-dom"; // 路由导航

// ============== 静态资源导入 ==============
import backgroundImage from "@assets/1500x500_1752159520914.jfif"; // 背景图片
import medicalTimelineImage from "@assets/fcff4af08eed8cfcd771ee7f8838a565_1752466134324.png"; // 医疗时间线图片
import cancerDaoLogo from "@assets/透明底_1752468326586.png"; // 透明LOGO

// ============== 主组件 ==============
export default function Homepage() {
  // ============== 状态管理 ==============
  const [email, setEmail] = useState(""); // 订阅邮箱输入状态
  const [activeCard, setActiveCard] = useState<number | null>(null); // 当前激活的问题卡片ID
  
  // ============== 工具钩子 ==============
  const { toast } = useToast(); // 通知提示控制
  const { t } = useLanguage(); // 多语言翻译函数
  const navigate = useNavigate(); // 路由导航

  // ============== 数据变更 ==============
  /**
   * 邮箱订阅Mutation
   * 处理用户提交邮箱订阅的异步操作
   */
  const subscribeMutation = useMutation({
    mutationFn: (email: string) => 
      apiRequest("POST", "/api/subscribe", { email }), // 调用订阅API
    onSuccess: () => {
      // 订阅成功处理
      toast({
        title: t("toast.subscribe.success.title"),
        description: t("toast.subscribe.success.description"),
      });
      setEmail(""); // 清空输入框
    },
    onError: (error: any) => {
      // 订阅失败处理
      toast({
        title: t("toast.subscribe.error.title"),
        description: error.response?.data?.error || t("toast.subscribe.error.description"),
        variant: "destructive", // 错误样式
      });
    },
  });

  // ============== 事件处理 ==============
  /**
   * 处理订阅表单提交
   * @param e - 表单事件对象
   */
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      subscribeMutation.mutate(email.trim()); // 触发订阅Mutation
    }
  };

  // ============== 页面渲染 ==============
  return (
    <div className="min-h-screen">
      {/* ========== Hero 首屏区域 ========== */}
      <section className="hero-section relative overflow-hidden py-32 lg:py-40 bg-gradient-to-b from-[#B58AFF] via-[#c9a4ff] to-white">
        {/* 背景图片层 - 半透明叠加 */}
        <div 
          className="absolute inset-0 z-0 opacity-50 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            filter: 'brightness(1.05) contrast(0.95)', // 增强亮度和对比度
          }}
        />
        
        {/* 渐变遮罩层 - 实现平滑过渡 */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#c9a4ff]/15 to-white/60" />
        
        {/* 内容容器 */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Logo展示 - 带有浮动动画 */}
            <div className="mb-12 flex justify-center">
              <div className="floating-animation">
                <img 
                  src={cancerDaoLogo} 
                  alt="CancerDAO Logo" 
                  className="h-16 lg:h-20 w-auto"
                />
              </div>
            </div>
            
            {/* 主标题 - 渐变文字效果 */}
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-yellow-bright to-orange-red bg-clip-text text-transparent">
                {t("hero.title")}
              </span>
            </h1>
            
            {/* 行动按钮组 */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center transform translate-y-16">
              {/* 解决方案按钮 */}
              <Button
                className="btn-secondary text-xl px-12 py-6 border-2 border-orange-red text-orange-red bg-transparent hover:bg-orange-red hover:text-white rounded-full font-semibold transform transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-red focus:ring-offset-2"
                onClick={() => window.location.href = "/solution"}
              >
                {t("hero.cta1")}
                <ArrowRight className="ml-3 h-7 w-7" />
              </Button>
              
              {/* 加入社区按钮 */}
              <Button
                className="btn-secondary text-xl px-12 py-6 border-2 border-purple-medium text-purple-medium bg-transparent font-semibold rounded-full transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-purple-medium hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-medium focus:ring-offset-2"
                onClick={() => 
                  document.getElementById("join-community")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t("hero.cta2")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 问题展示区域 ========== */}
      <section className="py-20 bg-white relative">
        {/* 顶部背景延续效果 */}
        <div 
          className="absolute top-0 left-0 right-0 h-40 opacity-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
          }}
        />
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* 区块标题 */}
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                {t("problem.title")}
              </h2>
              <p className="text-xl text-black max-w-3xl mx-auto">
                {t("problem.subtitle")}
              </p>
            </div>

            {/* 问题卡片网格 - 响应式布局 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {[
                // 全球性问题卡片
                {
                  id: 0,
                  icon: AlertTriangle,
                  title: t("problem.global.title"),
                  description: t("problem.global.description"),
                  points: [t("problem.global.point1"), t("problem.global.point2")],
                  image: "/attached_assets/2_1752591217296.jpg"
                },
                // 知识共享问题卡片
                {
                  id: 1,
                  icon: Users,
                  title: t("problem.knowledge.title"),
                  description: t("problem.knowledge.description"),
                  points: [t("problem.knowledge.point1"), t("problem.knowledge.point2"), t("problem.knowledge.point3")],
                  image: "/attached_assets/3_1752591389815.jpg"
                },
                // 创新障碍问题卡片
                {
                  id: 2,
                  icon: TrendingUp,
                  title: t("problem.innovation.title"),
                  description: t("problem.innovation.description"),
                  points: [t("problem.innovation.point1"), t("problem.innovation.point2")],
                  image: "/attached_assets/4_1752591925448.jpg"
                }
              ].map((card) => (
                <div key={card.id} className="relative">
                  {/* 可交互的问题卡片 */}
                  <div 
                    className={`problem-card cursor-pointer transition-all duration-300 ${
                      activeCard === card.id ? 'relative z-10 shadow-2xl transform scale-105' : 'relative z-10'
                    }`}
                    onClick={() => setActiveCard(activeCard === card.id ? null : card.id)}
                  >
                    {/* 卡片内容渲染 */}
                    {activeCard === card.id ? (
                      // 展开状态下的卡片内容
                      <>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <card.icon className="h-8 w-8 mr-3" style={{ color: '#fc593d' }} />
                            <h3 className="text-xl font-semibold text-black">{card.title}</h3>
                          </div>
                          <div className="text-2xl font-bold rotate-180" style={{ color: '#c9a4ff' }}>
                            ▼
                          </div>
                        </div>
                        <img src={card.image} alt={card.title} className="w-full h-auto rounded-lg mb-4" />
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
                      // 折叠状态下的卡片内容
                      <>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <card.icon className="h-8 w-8 mr-3" style={{ color: '#fc593d' }} />
                            <h3 className="text-xl font-semibold text-black">{card.title}</h3>
                          </div>
                          <div className="text-2xl font-bold" style={{ color: '#c9a4ff' }}>
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
        </div>
      </section>

      {/* ========== 生态系统展示 ========== */}
      <section 
        className="py-20 rounded-3xl mx-4 my-20" 
        style={{ 
          background: 'linear-gradient(135deg, #e7d1ff 0%, #c9a4ff 100%)',
          border: '1px solid #e7d1ff'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              {t("ecosystem.title")}
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              {t("ecosystem.subtitle")}
            </p>
          </div>
          
          {/* 架构图展示 */}
          <div className="mb-16 flex justify-center">
            <div className="max-w-6xl w-full">
              <div className="relative rounded-2xl shadow-lg border border-purple-200">
                <img 
                  src="/attached_assets/image_1752475567563.png" 
                  alt="CancerDAO Architecture Diagram" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 产品预览区域 ========== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 产品区块标题 */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              {t("product.title")}
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              {t("product.subtitle")}
            </p>
          </div>

          {/* 产品特性网格布局 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* 产品演示视频区块 */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-64 h-[32rem] mx-auto rounded-2xl shadow-2xl overflow-hidden" 
                  style={{ background: 'linear-gradient(135deg, #c9a4ff 0%, #e7d1ff 100%)' }}>
                  <video
                    className="w-full h-full object-cover block"
                    controls autoPlay loop muted
                    preload="metadata"
                  >
                    <source src="/attached_assets/视频_1752331442308.mp4" type="video/mp4" />
                  </video>
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
                
                {/* 试用按钮 */}
                <div className="pt-4">
                  <Button 
                    className="bg-purple-medium hover:bg-purple-light text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                    onClick={() => console.log("Trial button clicked")}
                  >
                    {t("product.trial.button")}
                  </Button>
                </div>
              </div>
            </div>

            {/* 健康时间线区块 */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-64 h-[32rem] mx-auto rounded-2xl shadow-2xl overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #c9a4ff 0%, #e7d1ff 100%)' }}>
                  <video
                    className="w-full h-full object-cover block"
                    controls autoPlay loop muted
                    preload="metadata"
                  >
                    <source src="/attached_assets/事件线.mp4" type="video/mp4" />
                  </video>
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

                {/* 试用按钮 */}
                <div className="pt-4">
                  <Button
                    className="bg-purple-medium hover:bg-purple-light text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                    onClick={() => console.log("Trial button clicked")}
                  >
                    {t("product.trial.button")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* 了解更多按钮 */}
          <div className="text-center mt-16">
            <Button className="btn-primary">
              {t("product.learn.more")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* ========== 社区数据统计 ========== */}
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

          {/* 数据统计卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* 数据统计卡片 */}
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

            {/* 成员统计卡片 */}
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

            {/* AI模型卡片 */}
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

          {/* 加入社区区块 */}
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
                onClick={() => window.open("http://discord.gg/zKwyqxjeun", "_blank")}
              >
                {t("community.join.discord")}
              </Button>
              <Button
                className="font-semibold px-8 py-3 text-black"
                style={{ backgroundColor: '#fad000' }}
                onClick={() => window.open("https://twitter.com/CancerDAOxyz", "_blank")}
              >
                {t("community.join.twitter")}
              </Button>
              <Button
                className="font-semibold px-8 py-3 text-black"
                style={{ backgroundColor: '#fad000' }}
                onClick={() => window.open("https://web.telegram.org/a/#-1002393239074_1", "_blank")}
              >
                {t("community.join.telegram")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 团队展示 ========== */}
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

          {/* 团队成员网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              // 团队成员数据
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
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  {/* 成员头像 */}
                  <div className="text-center mb-6">
                    <div 
                      className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-black" 
                      style={{ background: 'linear-gradient(135deg, #c9a4ff 0%, #e7d1ff 100%)' }}
                    >
                      {/* 姓名首字母头像 */}
                      {member.name.split(' ')[0][0]}{member.name.split(' ')[1]?.[0]}
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

                  {/* 社交链接 */}
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

          {/* 了解更多按钮 */}
          <div className="text-center mt-12">
            <Button 
              className="btn-primary"
              onClick={() => {
                navigate('/about');
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
              }}
            >
              {t("team.learn.more")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* ========== 合作伙伴展示 ========== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              {t("partners.title")}
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              {t("partners.subtitle")}
            </p>
          </div>

          {/* 合作伙伴轮播图 */}
          <div className="relative overflow-hidden mb-12">
            <div className="flex animate-scroll whitespace-nowrap">
              {[
                { name: "City University of HongKong", logoImage: "/partner_logo/CityU_logo.svg", website: "https://www.cityu.edu.hk/" },
                { name: "DeSAI XYZ", logoImage: "/partner_logo/DeSAI Simplified Logo 1(1).svg", website: "https://x.com/DeSAI_xyz" },
                { name: "DeSAI Sino", logoImage: "/partner_logo/DESCI_SINO_logo.svg", website: "https://x.com/descisino" },
                { name: "AuraSci", logoImage: "/partner_logo/AuraSci_logo.png", website: "https://aurasci.xyz/" },
                { name: "DeSci Asia", logoImage: "/partner_logo/DeSciAsia_logo.svg", website: "https://desciasia.org/" },
                { name: "DeSci China", logoImage: "/partner_logo/DeSciChina_logo.png", website: "https://x.com/DeSciChina__X" },
              ].map((partner, index) => (
                  <div
                      key={index}
                      className="inline-block mx-4 group cursor-pointer"
                      onClick={() => partner.website !== "#" && window.open(partner.website, "_blank")}
                  >
                    <div
                        className="bg-[#e7d1ff] border border-gray-200 rounded-lg p-2 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center h-32 w-40 overflow-hidden"
                    >
                      <img
                          src={partner.logoImage}
                          alt={partner.name}
                          className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
              ))}
              {/* 重复滚动 */}
              {[
                { name: "City University of HongKong", logoImage: "/partner_logo/CityU_logo.svg", website: "https://www.cityu.edu.hk/" },
                { name: "DeSAI XYZ", logoImage: "/partner_logo/DeSAI Simplified Logo 1(1).svg", website: "https://x.com/DeSAI_xyz" },
                { name: "DeSAI Sino", logoImage: "/partner_logo/DESCI_SINO_logo.svg", website: "https://x.com/descisino" },
                { name: "AuraSci", logoImage: "/partner_logo/AuraSci_logo.png", website: "https://aurasci.xyz/" },
                { name: "DeSci Asia", logoImage: "/partner_logo/DeSciAsia_logo.svg", website: "https://desciasia.org/" },
                { name: "DeSci China", logoImage: "/partner_logo/DeSciChina_logo.png", website: "https://x.com/DeSciChina__X" },
              ].map((partner, index) => (
                  <div
                      key={`duplicate-${index}`}
                      className="inline-block mx-4 group cursor-pointer"
                      onClick={() => partner.website !== "#" && window.open(partner.website, "_blank")}
                  >
                    <div
                        className="bg-[#e7d1ff] border border-gray-200 rounded-lg p-2 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center h-32 w-40 overflow-hidden"
                    >
                      <img
                          src={partner.logoImage}
                          alt={partner.name}
                          className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* 合作行动号召 */}
          <div className="text-center">
            <div className="rounded-2xl p-8 max-w-2xl mx-auto border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-4">
                {t("partners.join_us")}
              </h3>
              <p className="text-black mb-6">
                {t("partners.we_found")}
              </p>
              <Button 
                className="font-semibold px-8 py-3 text-black"
                style={{ backgroundColor: '#fad000' }}
                onClick={() => navigate('/for-partners')}
              >
                {t("partners.collaboration")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}