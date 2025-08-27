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
import backgroundImage from "@assets/background.png"; // 背景图片
import cancerDaoLogo from "@assets/透明底_1752468326586.png"; // 透明LOGO

// ============== 主组件 ==============
export default function Homepage() {
  // ============== 状态管理 ==============
  const [email, setEmail] = useState(""); // 订阅邮箱输入状态
  // 问题卡片改为默认展开，取消交互
  
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
      <section className="hero-section relative overflow-hidden py-32 lg:py-40 bg-gradient-to-b from-[#F2F3FB] via-[#FFFFFF] to-[#EAE3FA]">
        {/* 背景图片层 - 半透明叠加 */}
        <div 
          className="absolute inset-0 z-0 opacity-30 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            filter: 'brightness(1.05) contrast(0.95)', // 增强亮度和对比度
          }}
        />
        
       
        
        {/* 内容容器 */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* 左侧：标题与按钮 */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-gray-900 mb-8">
                {t("hero.title")}
              </h1>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center lg:justify-start items-center">
                <Button
                  className="text-lg sm:text-xl px-10 sm:px-12 py-4 sm:py-6 border-2 border-orange-red text-orange-red bg-white/70 backdrop-blur rounded-full font-semibold transition-transform duration-300 hover:scale-105 hover:bg-orange-red hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-red focus:ring-offset-2"
                  onClick={() => window.location.href = "/solution"}
                >
                  {t("hero.cta1")}
                </Button>
                <Button
                  className="text-lg sm:text-xl px-10 sm:px-12 py-4 sm:py-6 border-2 border-purple-medium text-purple-medium bg-white/70 backdrop-blur rounded-full font-semibold transition-transform duration-300 hover:scale-105 hover:bg-purple-medium hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-medium focus:ring-offset-2"
                  onClick={() => document.getElementById("join-community")?.scrollIntoView({ behavior: "smooth" })}
                >
                  {t("hero.cta2")}
                </Button>
              </div>
            </div>

            {/* 右侧：Logo 与倒影 */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[460px] lg:h-[460px]">
                {/* 主 Logo */}
                <img
                  src="/homepage/biglogo.png"
                  alt="CancerDAO Logo"
                  className="absolute inset-0 w-full h-full object-contain drop-shadow-xl"
                  loading="eager"
                  decoding="async"
                />
                {/* CSS 倒影：同图垂直翻转 + 渐隐遮罩 */}
                <img
                  src="/homepage/biglogo.png"
                  alt="CancerDAO Logo Reflection"
                  className="absolute left-1/2 top-[96%] -translate-x-1/2 translate-y-2 scale-y-[-1] w-[90%] h-auto object-contain opacity-30 sm:opacity-35 lg:opacity-40 blur-[2px] lg:blur-[3px] saturate-125 brightness-105 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.45),transparent)] [mask-size:100%_100%] [mask-repeat:no-repeat]"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 装饰性图标 */}
        <img src="/icon/Group 2278.svg" alt="decor-2278" className="hidden sm:block absolute left-8 top-24 w-20 h-20" loading="lazy" decoding="async" />
        <img src="/icon/Group 2279.svg" alt="decor-2279" className="hidden sm:block absolute left-[10%] bottom-20 w-14 h-14" loading="lazy" decoding="async" />
        <img src="/icon/Group 2282.svg" alt="decor-2282" className="hidden sm:block absolute right-[24%] top-6 w-11 h-11" loading="lazy" decoding="async" />
        <img src="/icon/Group 2283.svg" alt="decor-2283" className="hidden sm:block absolute right-6 top-28 w-16 h-16" loading="lazy" decoding="async" />
        <img src="/icon/Group 2284.svg" alt="decor-2284" className="hidden sm:block absolute right-16 bottom-16 w-14 h-14" loading="lazy" decoding="async" />
        <img src="/icon/Group 2288.svg" alt="decor-2288" className="hidden sm:block absolute left-[44%] top-[58%] w-20 h-20" loading="lazy" decoding="async" />
      </section>

      {/* ========== 问题展示区域 ========== */}
      <section className="py-20 bg-[#EAE3FA] relative">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative items-stretch  ">
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
                  {/* 默认展开的静态问题卡片（无交互） */}
                  <div className="relative z-10 h-full flex flex-col bg-white/60 backdrop-blur border border-white/60 rounded-3xl shadow-xl p-6 md:p-8">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        <card.icon className="h-8 w-8 mr-3" style={{ color: '#fc593d' }} />
                        <h3 className="text-xl font-semibold text-black">{card.title}</h3>
                      </div>
                    </div>
                    <img src={card.image} alt={card.title} className="w-full rounded-xl mb-4 aspect-[16/9] object-cover" loading="lazy" decoding="async" />
                    <div className="space-y-3 mt-4 pt-4 border-t border-white/60">
                      <p className="text-black">{card.description}</p>
                      <ul className="text-sm text-black space-y-1">
                        {card.points.map((point, index) => (
                          <li key={index}>• {point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== 生态系统展示 ========== */}
      <section 
        className="py-20 rounded-3xl mx-4 my-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #e7d1ff 0%, #c9a4ff 100%)' }}
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
              <div className="relative rounded-3xl shadow-xl border border-white/60 bg-white/60 backdrop-blur">
                <img 
                  src="/attached_assets/image_1752475567563.png" 
                  alt="CancerDAO Architecture Diagram" 
                  className="w-full h-auto rounded-3xl"
                  loading="lazy" decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 产品预览区域 ========== */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* 背景点阵：Vector.png（只展示相关区域，随断点调整位置与尺寸） */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            backgroundImage: "url(/Vector.png)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: '1400px auto',
            backgroundPosition: 'center 50%',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 产品区块标题 */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              {t("product.title")}
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              {t("product.subtitle")}
            </p>
          </div>

          {/* Row 1：左图右文 */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16 mb-20">
            {/* 媒体：视频/图片（左） */}
            <div className="order-1 md:order-1 flex justify-center">
              <div
                className="w-64 h-[32rem] rounded-3xl shadow-2xl overflow-hidden border border-white/60 bg-white/60 backdrop-blur"
                style={{ background: 'linear-gradient(135deg, #c9a4ff 0%, #e7d1ff 100%)' }}
              >
                <video
                  className="w-full h-full object-cover block"
                  controls autoPlay loop muted
                  preload="metadata"
                >
                  <source src="/attached_assets/视频_1752331442308.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* 文案（右） */}
            <div className="order-2 md:order-2 text-left md:pl-6">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 mr-3" style={{ color: '#c9a4ff' }} />
                <h3 className="text-2xl font-bold text-black">{t("product.feature1.title")}</h3>
              </div>
              <p className="text-black/90 leading-relaxed max-w-xl mb-6">
                {t("product.feature1.description")}
              </p>
              <Button 
                className="text-black bg-gradient-to-r from-purple-medium to-purple-light hover:from-purple-dark hover:to-purple-medium px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                onClick={() => console.log('Trial button clicked')}
              >
                {t("product.trial.button")}
              </Button>
            </div>
          </div>

          {/* Row 2：右图左文（交错） */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
            {/* 文案（左） */}
            <div className="order-2 md:order-1 text-left md:pr-6">
              <div className="flex items-center mb-4">
                <Smartphone className="h-8 w-8 mr-3" style={{ color: '#c9a4ff' }} />
                <h3 className="text-2xl font-bold text-black">{t("product.feature2.title")}</h3>
              </div>
              <p className="text-black/90 leading-relaxed max-w-xl mb-6">
                {t("product.feature2.description")}
              </p>
              <Button 
                className="text-black bg-gradient-to-r from-purple-medium to-purple-light hover:from-purple-dark hover:to-purple-medium px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                onClick={() => console.log('Trial button clicked')}
              >
                {t("product.trial.button")}
              </Button>
            </div>

            {/* 媒体：视频/图片（右） */}
            <div className="order-1 md:order-2 flex justify-center">
              <div
                className="w-64 h-[32rem] rounded-3xl shadow-2xl overflow-hidden border border-white/60 bg-white/60 backdrop-blur"
                style={{ background: 'linear-gradient(135deg, #c9a4ff 0%, #e7d1ff 100%)' }}
              >
                <video
                  className="w-full h-full object-cover block"
                  controls autoPlay loop muted
                  preload="metadata"
                >
                  <source src="/attached_assets/事件线.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          {/* 了解更多按钮 */}
          
        </div>
      </section>

      {/* ========== 影响力数据统计======= */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* 新背景：地球淡化图层 */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80 pointer-events-none"
          style={{ backgroundImage: "url(/impact_background.png)" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-3">
              {t("community.title")}
            </h2>
            <p className="text-base sm:text-lg text-black/80 max-w-3xl mx-auto">
              {t("community.subtitle")}
            </p>
          </div>

          {/* 三列数据：列内居中对齐 */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 items-stretch md:justify-items-center max-w-[1100px] mx-auto">
          
            {/* 健康数据 */}
            <div className="w-full text-center">
              <div className="text-sm text-black/70 mb-1">{t("community.data.title")}</div>
              <div className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-fuchsia-500 to-violet-600 bg-clip-text text-transparent">
                {t("community.data.count")}
              </div>
              <div className="text-sm text-black/70 mt-1">{t("community.data.label")}</div>
            </div>

            {/* 社区成员 */}
            <div className="w-full text-center">
              <div className="text-sm text-black/70 mb-1">{t("community.members.title")}</div>
              <div className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-fuchsia-500 to-violet-600 bg-clip-text text-transparent">
                {t("community.members.count")}
              </div>
              <div className="text-sm text-black/70 mt-1">{t("community.members.label")}</div>
            </div>

            {/* AI 准确率 */}
            <div className="w-full text-center">
              <div className="text-sm text-black/70 mb-1">{t("community.ai.title")}</div>
              <div className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-fuchsia-500 to-violet-600 bg-clip-text text-transparent">
                {t("community.ai.count")}
              </div>
              <div className="text-sm text-black/70 mt-1">{t("community.ai.label")}</div>
            </div>
          </div>

          {/* 加入社区区块：英文大标题版式 + 统一按钮样式 */}
          <div
            id="join-community"
            className="rounded-3xl text-center border border-white/60 bg-white/70 backdrop-blur p-8 sm:p-10 lg:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.1)] ring-1 ring-black/5 mt-12 sm:mt-16 lg:mt-20"
            style={{ background: 'linear-gradient(135deg, #c9a4ff 0%, #e7d1ff 100%)' }}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-snug tracking-tight text-black max-w-5xl mx-auto mb-4">
              Stop facing it alone, join CancerDAO community to fight cancer together and embrace health!
            </h3>
            <p className="text-black/80 max-w-3xl mx-auto mb-8">
              Whether you are a patient, family member, medical professional, or someone who cares about health, our community welcomes you. Here, you will find understanding, support, and hope.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
              <Button
                className="btn-primary"
                onClick={() => window.open('https://discord.com/', '_blank', 'noopener,noreferrer')}
              >
                Join Discord
              </Button>
              <Button
                className="btn-primary"
                onClick={() => window.open('https://twitter.com/', '_blank', 'noopener,noreferrer')}
              >
                Follow Twitter
              </Button>
              <Button
                className="btn-primary"
                onClick={() => window.open('https://t.me/', '_blank', 'noopener,noreferrer')}
              >
                Join Telegram Group
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

          {/* 团队环形展示（桌面） / 网格（移动） */}
          <div className="grid sm:hidden grid-cols-3 gap-6 place-items-center">
            {['/homepage/people1.jpg','/homepage/people2.jpg','/homepage/people3.jpg','/homepage/people4.jpg','/homepage/people5.jpg','/homepage/people6.png'].map((src, i) => (
              <img key={i} src={src} alt={`member-${i+1}`} className="w-20 h-20 rounded-full object-cover border-2 border-white/70 shadow" loading="lazy" decoding="async" />
            ))}
          </div>

          <div className="hidden sm:block">
            {/* 背景延续 */}
            <div 
              className="relative mx-auto w-full max-w-5xl h-[560px] sm:h-[620px] lg:h-[700px]"
            >
              {/* 背景图层 */}
              <div 
                className="absolute inset-0 opacity-30 bg-cover bg-center bg-no-repeat pointer-events-none"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              />

              {/* 四个同心圆：纯描边 */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[620px] sm:size-[680px] lg:size-[760px] rounded-full border-[1.5px] border-amber-300" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[520px] sm:size-[580px] lg:size-[640px] rounded-full border-[1.5px] border-pink-300" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[400px] sm:size-[440px] lg:size-[480px] rounded-full border-[1.5px] border-rose-200" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[260px] sm:size-[300px] lg:size-[320px] rounded-full border-[1.5px] border-orange-200" />

              {/* 中心标志 */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center select-none">
                  <div className="leading-tight">
                    <img src="/homepage/people4.jpg" alt="center" className="w-16 h-16 rounded-full object-cover mx-auto mb-1 hidden" />
                    <img src="/homepage/biglogo.png" alt="CancerDAO" className="w-20 h-20 object-contain" />
                  </div>
              </div>

              {/* 头像与弹出卡片：绑定在轨道上（正向朝向用户） */}
              {[
                // orbit: 4最大 -> 1最小；angle度数按顺时针
                
                { id: 3, name: 'Carol', role: '临床顾问', avatar: '/homepage/people3.jpg', orbit: 3, angle: 330, links: { linkedin: '#', twitter: '#' } },
                { id: 4, name: 'David', role: 'AI 工程师', avatar: '/homepage/people4.jpg', orbit: 3, angle: 110, links: { linkedin: '#', twitter: '#' } },
                { id: 5, name: 'Eve', role: 'BD 合作', avatar: '/homepage/people5.jpg', orbit: 2, angle: 210, links: { linkedin: '#', twitter: '#' } },
                { id: 6, name: 'Frank', role: '产品经理', avatar: '/homepage/people6.png', orbit: 2, angle: 45, links: { linkedin: '#', twitter: '#' } },
                { id: 7, name: 'Grace', role: '设计', avatar: '/homepage/people1.jpg', orbit: 1, angle: 160, links: { linkedin: '#', twitter: '#' } },
                { id: 8, name: 'Heidi', role: '数据科学', avatar: '/homepage/people2.jpg', orbit: 1, angle: 350, links: { linkedin: '#', twitter: '#' } },
              ].map((m) => (
                <div key={m.id} className="group">
                  {/* 计算位置：根据不同轨道的半径设置 translate */}
                  <div
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `translate(-50%,-50%) rotate(${m.angle}deg)`,
                    }}
                  >
                    {/* 半径偏移容器（随断点变化），并做反向旋转让头像始终正向 */}
                    <div
                      className={
                        `relative transform 
                        ${m.orbit === 4 ? 'translate-x-[282px] sm:translate-x-[312px] lg:translate-x-[348px]' : ''}
                        ${m.orbit === 3 ? 'translate-x-[253px] sm:translate-x-[283px] lg:translate-x-[312px]' : ''}
                        ${m.orbit === 2 ? 'translate-x-[193px] sm:translate-x-[213px] lg:translate-x-[232px]' : ''}
                        ${m.orbit === 1 ? 'translate-x-[123px] sm:translate-x-[143px] lg:translate-x-[152px]' : ''}`
                      }
                    >
                      <div style={{ transform: `rotate(${-m.angle}deg)` }} className="relative">
                      {/* 头像 */}
                      <img
                        src={m.avatar}
                        alt={m.name}
                        className="w-14 h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-white/80 shadow-lg"
                        loading="lazy"
                        decoding="async"
                      />
                      
                      {/* 悬浮卡片 */}
                      <div className="absolute left-1/2 -translate-x-1/2 translate-y-3 hidden group-hover:block z-10">
                        <div className="min-w-[180px] max-w-[220px] rounded-2xl bg-white/90 backdrop-blur border border-black/5 p-3 shadow-xl text-left">
                          <div className="flex items-center gap-3 mb-2">
                            <img src={m.avatar} alt={m.name} className="w-10 h-10 rounded-full object-cover" />
                            <div>
                              <div className="font-semibold text-black">{m.name}</div>
                              <div className="text-xs text-black/60">{m.role}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 pt-1">
                            <a href={m.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-black/5 hover:bg-black/10 text-black">
                              <Linkedin className="w-4 h-4" />
                            </a>
                            <a href={m.links.twitter} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-black/5 hover:bg-black/10 text-black">
                              <TwitterXIcon className="w-4 h-4" />
                            </a>
                            <a href="#" className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-black/5 hover:bg-black/10 text-black">
                              <Mail className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            
            </div>
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
            
            <div className="rounded-3xl p-8 max-w-2xl mx-auto border border-white/60 bg-white/60 backdrop-blur">
              <h3 className="text-xl font-bold text-black mb-4">
                {t("partners.join_us")}
              </h3>
              <p className="text-black mb-6">
                {t("partners.we_found")}
              </p>
              <Button 
                className="font-semibold px-8 py-3 text-black rounded-full bg-[#fad000] hover:brightness-95 transition"
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