
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 翻译字典
const translations = {
  zh: {
    // 导航栏
    'nav.about': '关于我们',
    'nav.solution': '解决方案',
    'nav.individuals': '面向个人',
    'nav.partners': '面向伙伴',
    'nav.community': '社区',
    'nav.resources': '资源中心',
    'nav.join': '加入社区',
    
    // 首页
    'hero.title': '与公众共建，革新癌症防治',
    'hero.subtitle': '通过AI、区块链和社区力量，赋予每个人管理健康、共享价值、共创未来的能力',
    'hero.cta1': '了解我们的解决方案',
    'hero.cta2': '加入我们的社区',
    
    // 问题部分
    'problem.title': '我们面临的挑战',
    'problem.subtitle': '癌症正成为人类健康的重大威胁，而现有的预防和治疗体系存在诸多局限',
    'problem.global': '全球性挑战',
    'problem.knowledge': '知识和支持不足',
    'problem.innovation': '创新缓慢且成本高昂',
    
    // 解决方案部分
    'solution.title': '我们的解决方案',
    'solution.subtitle': '通过三大核心支柱，构建一个全面的癌症防治生态系统',
    'solution.ai': 'AI 赋能',
    'solution.blockchain': '区块链保障',
    'solution.community': '社区驱动',
    
    // 其他
    'subscribe.title': '订阅更新',
    'subscribe.subtitle': '第一时间获取 CancerDAO PILL 的最新进展和发布信息',
    'subscribe.placeholder': '输入您的邮箱地址',
    'subscribe.button': '订阅',
    'subscribe.subscribing': '订阅中...',
    'data.sovereignty': '数据主权与信任：您的数据，您做主',
    'community.power': 'You\'re not ALONE',
    'partners.title': '我们的合作伙伴',
    'team.title': '我们的团队',
  },
  en: {
    // 导航栏
    'nav.about': 'About Us',
    'nav.solution': 'Solution',
    'nav.individuals': 'For Individuals',
    'nav.partners': 'For Partners',
    'nav.community': 'Community',
    'nav.resources': 'Resources',
    'nav.join': 'Join Community',
    
    // 首页
    'hero.title': 'Building with the Public, Revolutionizing Cancer Prevention',
    'hero.subtitle': 'Empowering everyone to manage health, share value, and create the future through AI, blockchain, and community power',
    'hero.cta1': 'Learn Our Solutions',
    'hero.cta2': 'Join Our Community',
    
    // 问题部分
    'problem.title': 'Challenges We Face',
    'problem.subtitle': 'Cancer is becoming a major threat to human health, while existing prevention and treatment systems have many limitations',
    'problem.global': 'Global Challenge',
    'problem.knowledge': 'Insufficient Knowledge and Support',
    'problem.innovation': 'Slow and Costly Innovation',
    
    // 解决方案部分
    'solution.title': 'Our Solution',
    'solution.subtitle': 'Building a comprehensive cancer prevention ecosystem through three core pillars',
    'solution.ai': 'AI Empowerment',
    'solution.blockchain': 'Blockchain Security',
    'solution.community': 'Community Driven',
    
    // 其他
    'subscribe.title': 'Subscribe for Updates',
    'subscribe.subtitle': 'Get the latest progress and release information of CancerDAO PILL first',
    'subscribe.placeholder': 'Enter your email address',
    'subscribe.button': 'Subscribe',
    'subscribe.subscribing': 'Subscribing...',
    'data.sovereignty': 'Data Sovereignty & Trust: Your Data, Your Control',
    'community.power': 'You\'re not ALONE',
    'partners.title': 'Our Partners',
    'team.title': 'Our Team',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'zh' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
