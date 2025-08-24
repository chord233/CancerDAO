// 导入React及相关UI组件
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

/**
 * 导航菜单项配置数组
 * 定义网站主导航的各个项目及其链接
 */
const navigationItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Products", href: "#" },
  { label: "Community", href: "#" },
  { label: "Contact", href: "#" },
];

/**
 * 挑战卡片数据数组
 * 展示CancerDAO致力于解决的主要挑战
 * 每个卡片包含标题和占位图片
 */
const challengeCards = [
  {
    title: "Rising Global Cancer Incidence, especially among younger populations",
    image: "/api/placeholder/369/256", // 占位图片URL，实际应用中应替换为真实图片
  },
  {
    title: "Public Lacks Knowledge and Support in Cancer Prevention and Treatment",
    image: "/api/placeholder/369/256",
  },
  {
    title: "Institutions and Enterprises Face Slow and Costly Innovation",
    image: "/api/placeholder/332/247",
  },
];

/**
 * 影响力统计数据数组
 * 展示CancerDAO的全球影响力和成就
 */
const impactStats = [
  { number: "1M+", label: "Users Worldwide" },
  { number: "50K+", label: "Health Records Analyzed" },
  { number: "95%", label: "Accuracy Rate" },
  { number: "24/7", label: "AI Support" },
];

/**
 * 团队成员数据数组
 * 展示核心团队成员信息，包括姓名、职位和头像
 */
const teamMembers = [
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
  },
];

/**
 * 合作伙伴标志数组
 * 展示与CancerDAO合作的机构或企业
 */
const partnerLogos = [
  { name: "Partner 1", image: "/api/placeholder/120/60" },
  { name: "Partner 2", image: "/api/placeholder/120/60" },
  { name: "Partner 3", image: "/api/placeholder/120/60" },
  { name: "Partner 4", image: "/api/placeholder/120/60" },
];

/**
 * 主组件 - CancerDAO网站首页
 * 包含完整的页面布局和各个功能区块
 */
export default function Element() {
  return (
    // 主容器，设置背景色和最小高度
    <div className="bg-[#f9f9f9] min-h-screen w-full">
      {/* 网站头部/导航栏 */}
      <header className="w-full h-[77px] bg-white border-b">
        {/* 限制最大宽度并居中 */}
        <div className="max-w-[1440px] mx-auto px-8 h-full flex items-center justify-between">
          {/* 网站Logo和名称 */}
          <div className="flex items-center gap-3">
            <img
              src="/api/placeholder/42/39"
              alt="CancerDAO Logo"
              className="w-[42px] h-[39px]"
            />
            <div className="text-xl font-bold text-gray-800">CancerDAO</div>
          </div>

          {/* 主导航菜单 - 在移动端隐藏 */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* 用户操作按钮组 */}
          <div className="flex items-center gap-4">
            <Button variant="outline" className="h-auto">
              Sign In
            </Button>
            <Button className="h-auto bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* 英雄区域/首屏展示 */}
      <section className="relative w-full h-[573px] bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden">
        {/* 背景图片 */}
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1440/573"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* 内容区域 */}
        <div className="relative max-w-[1440px] mx-auto px-8 h-full flex items-center">
          {/* 左侧文字内容 */}
          <div className="flex-1 max-w-[600px]">
            <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Revolutionize Cancer Prevention and Care with the Public
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              AI-powered personalized health companion for cancer prevention and
              early detection
            </p>
            <Button className="h-auto px-8 py-4 text-lg bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 rounded-full">
              Join Our Community
            </Button>
          </div>

          {/* 右侧图片展示 */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative">
              <img
                src="/api/placeholder/346/346"
                alt="Hero Illustration"
                className="w-[346px] h-[346px] rounded-full"
              />
              {/* 装饰性元素 */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 挑战展示区域 */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          {/* 区域标题和描述 */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              The Challenges We Face
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Cancer is becoming a major threat to human health and existing
              prevention and treatment systems have many limitations
            </p>
          </div>

          {/* 挑战卡片网格布局 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challengeCards.map((card, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-0">
                  <img
                    src={card.image}
                    alt={`Challenge ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <p className="text-lg text-gray-700 font-medium">
                      {card.title}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 产品预览区域 */}
      <section className="w-full py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-[1440px] mx-auto px-8">
          {/* 区域标题和描述 */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Core Product Preview - CancerDAO PILL
            </h2>
            <p className="text-xl text-gray-600">
              Explore CancerDAO PILL: Your Personalized Anti-Cancer Companion
            </p>
          </div>

          {/* 产品特性网格布局 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* 左侧特性：AI医疗记录解读 */}
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

            {/* 右侧特性：健康时间线 */}
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
                  src="/api/placeholder/216/411"
                  alt="Health Timeline Interface"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 全球影响力数据区域 */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          {/* 区域标题和描述 */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Global Impact
            </h2>
            <p className="text-xl text-gray-600">
              Join us in building a cancer-free world with data demonstrating
              our collective strength
            </p>
          </div>

          {/* 统计数据网格布局 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 团队介绍区域 */}
      <section className="w-full py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-[1440px] mx-auto px-8">
          {/* 区域标题和描述 */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">
              An interdisciplinary team of experts from top institutions
            </p>
          </div>

          {/* 团队成员展示 */}
          <div className="relative">
            <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className="relative mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-[88px] h-[88px] rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-800">
                      {member.name}
                    </div>
                    <div className="text-sm text-gray-600">{member.role}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* 装饰性圆圈背景 */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[652px] h-[652px] border border-purple-200 rounded-full opacity-30"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[410px] h-[410px] border border-purple-300 rounded-full opacity-40"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[246px] h-[246px] border border-purple-400 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 网站页脚 */}
      <footer className="w-full bg-gray-900 text-white py-16">
        <div className="max-w-[1440px] mx-auto px-8">
          {/* 页脚链接网格 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* 公司简介 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/api/placeholder/42/39"
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

            {/* 产品链接 */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    CancerDAO PILL
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    AI Analysis
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Health Timeline
                  </a>
                </li>
              </ul>
            </div>

            {/* 公司链接 */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* 支持链接 */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* 版权和合作伙伴信息 */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 mb-4 md:mb-0">
                © 2024 CancerDAO. All rights reserved.
              </div>

              <div className="flex items-center gap-6">
                <span className="text-gray-400">Our Partners:</span>
                <div className="flex items-center gap-4">
                  {partnerLogos.map((partner, index) => (
                    <img
                      key={index}
                      src={partner.image}
                      alt={partner.name}
                      className="h-8 opacity-60 hover:opacity-100 transition-opacity"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}