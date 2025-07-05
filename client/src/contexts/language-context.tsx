
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
    'problem.global.title': '全球性挑战',
    'problem.global.description': '癌症发病率上升，尤其在年轻群体中',
    'problem.global.point1': '大约有 20% 的人将罹患癌症，其中约 10% 会因此离世',
    'problem.global.point2': '早发性癌症（50岁以下）的发病率在 1990 年至 2019 年间增加了 79.1%',
    'problem.knowledge.title': '知识和支持不足',
    'problem.knowledge.description': '公众在癌症预防和治疗方面知识和支持不足',
    'problem.knowledge.point1': '健康管理及相关数据的知识和工具有限',
    'problem.knowledge.point2': '难以获得创新的癌症预防和治疗方法',
    'problem.knowledge.point3': '公众和患者通常被视为"顾客"，限制了积极参与创新',
    'problem.innovation.title': '创新缓慢且成本高昂',
    'problem.innovation.description': '机构和企业创新缓慢且成本高昂',
    'problem.innovation.point1': '数据碎片化、孤立，缺乏标准化和共享',
    'problem.innovation.point2': '限制了 AI 驱动创新的发展',
    'problem.innovation.point3': '获取公众和患者的成本高昂',
    
    // 解决方案部分
    'solution.title': '我们的解决方案',
    'solution.subtitle': '通过三大核心支柱，构建一个全面的癌症防治生态系统',
    'solution.core.title': '核心价值循环',
    'solution.ai.title': 'AI 平台',
    'solution.ai.description': '智能分析与预测',
    'solution.blockchain.title': '区块链 Medical ID',
    'solution.blockchain.description': '数据安全与主权',
    'solution.decentralized.title': '去中心化数据库',
    'solution.decentralized.description': '共享与协作',
    'solution.therapy.title': 'AI 驱动疗法',
    'solution.therapy.description': '精准治疗方案',
    'solution.ai.pillar.title': 'AI 赋能',
    'solution.ai.pillar.description': '介绍 AI 在健康领域的应用，如个性化分析、风险预测和疗法优化等，强调其如何提升效率和精准度。',
    'solution.ai.pillar.button': '了解更多 AI 赋能',
    'solution.blockchain.pillar.title': '区块链保障',
    'solution.blockchain.pillar.description': '阐述区块链技术如何确保用户数据安全、隐私和数据主权，以及如何建立透明、可信的数据共享机制。',
    'solution.blockchain.pillar.button': '了解更多区块链保障',
    'solution.community.pillar.title': '社区驱动',
    'solution.community.pillar.description': '说明社区在生态系统中的核心作用，如何通过集体力量、数据贡献和协作促进创新，为所有参与者创造价值。',
    'solution.community.pillar.button': '了解更多社区驱动',
    
    // 产品预览
    'product.title': '核心产品预览 - CancerDAO PILL',
    'product.subtitle': '您的个人健康管理助手，让健康数据为您所用',
    'product.ai.analysis': 'AI 病历解读',
    'product.timeline': '健康时间轴',
    'product.timeline.item1': '体检报告 - 2024/12',
    'product.timeline.item2': '血液检查 - 2024/11',
    'product.feature1.title': 'AI 驱动的病历智能解读',
    'product.feature1.description': '上传您的医学影像和文本报告，CancerDAO PILL 利用先进的 AI 技术，为您快速提取关键信息，解读复杂的医学术语，并提供个性化的风险洞察和健康建议，助您更透彻地理解自身健康状况。',
    'product.feature2.title': '您的专属健康时间轴',
    'product.feature2.description': 'CancerDAO PILL 为您构建一个全面的个人健康时间轴，整合您的每一次检查、每一次用药和日常健康数据。您可以清晰追踪健康历程，管理个人数据，并随时回顾，为健康决策提供可靠依据。',
    'product.learn.more': '了解更多',
    
    // 订阅
    'subscribe.title': '订阅更新',
    'subscribe.subtitle': '第一时间获取 CancerDAO PILL 的最新进展和发布信息',
    'subscribe.placeholder': '输入您的邮箱地址',
    'subscribe.button': '订阅',
    'subscribe.subscribing': '订阅中...',
    
    // 数据主权
    'data.sovereignty.title': '数据主权与信任：您的数据，您做主',
    'data.sovereignty.subtitle': '通过区块链技术和加密算法，确保您的健康数据安全、隐私且为您所有',
    'data.nft.title': 'Data NFT：赋予您数据所有权',
    'data.nft.badge': '区块链技术',
    'data.nft.description': '介绍 Data NFT 的概念，解释它如何将您的健康数据转化为数字资产，并记录在区块链上，确保其唯一性、所有权和可追溯性。强调数据提供者如何通过 Data NFT 控制数据访问和受益。',
    'data.nft.point1': '数据唯一性与所有权确认',
    'data.nft.point2': '区块链记录，永久可追溯',
    'data.nft.point3': '您控制数据访问权限',
    'data.fhe.title': '全同态加密 (FHE)：加密计算，隐私无忧',
    'data.fhe.badge': '隐私保护',
    'data.fhe.description': '介绍 FHE 的概念及其重要性——允许在不解密数据的情况下进行计算。强调这如何彻底保护用户的生物及医疗数据隐私，即使在数据被用于AI分析或研究时也无法被泄露。',
    'data.fhe.point1': '数据始终保持加密状态',
    'data.fhe.point2': '支持加密状态下的AI计算',
    'data.fhe.point3': '医疗数据零泄露风险',
    
    // 社区力量
    'community.power.title': 'You\'re not ALONE',
    'community.power.subtitle': '加入我们的全球社区，与志同道合的人一起为无癌世界而努力',
    'community.global.title': '全球社区',
    'community.global.count': '10,000+',
    'community.global.label': '活跃成员',
    'community.data.title': '数据贡献',
    'community.data.count': '50,000+',
    'community.data.label': '健康记录',
    'community.ai.title': 'AI 模型',
    'community.ai.count': '95%',
    'community.ai.label': '准确率',
    'community.join.title': '准备好加入我们了吗？',
    'community.join.subtitle': '与全球的研究者、患者、医疗专业人士一起，为创造一个无癌世界贡献力量',
    'community.join.discord': '加入 Discord 社区',
    'community.join.twitter': '关注我们的 Twitter',
    
    // 合作伙伴
    'partners.title': '我们的合作伙伴',
    'partners.subtitle': '欢迎各类组织加入，共同推动创新',
    'partners.item': '合作伙伴',
    
    // 团队
    'team.title': '我们的团队',
    'team.subtitle': '由来自顶尖机构的专家组成的跨学科团队',
    'team.founder': '创始人 & CEO',
    'team.cto': '首席技术官',
    'team.cmo': '首席医疗官',
    'team.scientist': '首席科学家',
    'team.ai.bio': 'AI & 生物信息学',
    'team.blockchain.crypto': '区块链 & 加密',
    'team.oncology': '肿瘤学',
    'team.ml': '机器学习',
    'team.learn.more': '了解完整团队',
    
    // Toast消息
    'toast.subscribe.success.title': '订阅成功',
    'toast.subscribe.success.description': '感谢您的关注！我们会及时通知您最新进展。',
    'toast.subscribe.error.title': '订阅失败',
    'toast.subscribe.error.description': '请稍后重试',
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
    'problem.global.title': 'Global Challenge',
    'problem.global.description': 'Rising cancer rates, especially among young people',
    'problem.global.point1': 'About 20% of people will develop cancer, with about 10% dying from it',
    'problem.global.point2': 'Early-onset cancer (under 50) incidence increased by 79.1% from 1990 to 2019',
    'problem.knowledge.title': 'Insufficient Knowledge and Support',
    'problem.knowledge.description': 'Public lacks knowledge and support in cancer prevention and treatment',
    'problem.knowledge.point1': 'Limited knowledge and tools for health management and related data',
    'problem.knowledge.point2': 'Difficulty accessing innovative cancer prevention and treatment methods',
    'problem.knowledge.point3': 'Public and patients often viewed as "customers", limiting active participation in innovation',
    'problem.innovation.title': 'Slow and Costly Innovation',
    'problem.innovation.description': 'Institutional and corporate innovation is slow and expensive',
    'problem.innovation.point1': 'Data is fragmented, siloed, lacking standardization and sharing',
    'problem.innovation.point2': 'Limits AI-driven innovation development',
    'problem.innovation.point3': 'High costs to reach public and patients',
    
    // 解决方案部分
    'solution.title': 'Our Solution',
    'solution.subtitle': 'Building a comprehensive cancer prevention ecosystem through three core pillars',
    'solution.core.title': 'Core Value Loop',
    'solution.ai.title': 'AI Platform',
    'solution.ai.description': 'Intelligent Analysis & Prediction',
    'solution.blockchain.title': 'Blockchain Medical ID',
    'solution.blockchain.description': 'Data Security & Sovereignty',
    'solution.decentralized.title': 'Decentralized Database',
    'solution.decentralized.description': 'Sharing & Collaboration',
    'solution.therapy.title': 'AI-Driven Therapy',
    'solution.therapy.description': 'Precision Treatment Plans',
    'solution.ai.pillar.title': 'AI Empowerment',
    'solution.ai.pillar.description': 'Introducing AI applications in healthcare, such as personalized analysis, risk prediction, and therapy optimization, emphasizing how it improves efficiency and precision.',
    'solution.ai.pillar.button': 'Learn More about AI Empowerment',
    'solution.blockchain.pillar.title': 'Blockchain Security',
    'solution.blockchain.pillar.description': 'Explaining how blockchain technology ensures user data security, privacy, and data sovereignty, and how to establish transparent and trustworthy data sharing mechanisms.',
    'solution.blockchain.pillar.button': 'Learn More about Blockchain Security',
    'solution.community.pillar.title': 'Community Driven',
    'solution.community.pillar.description': 'Explaining the core role of community in the ecosystem, how collective power, data contribution, and collaboration drive innovation and create value for all participants.',
    'solution.community.pillar.button': 'Learn More about Community Driven',
    
    // 产品预览
    'product.title': 'Core Product Preview - CancerDAO PILL',
    'product.subtitle': 'Your personal health management assistant, making health data work for you',
    'product.ai.analysis': 'AI Medical Record Analysis',
    'product.timeline': 'Health Timeline',
    'product.timeline.item1': 'Health Checkup - 2024/12',
    'product.timeline.item2': 'Blood Test - 2024/11',
    'product.feature1.title': 'AI-Driven Intelligent Medical Record Analysis',
    'product.feature1.description': 'Upload your medical images and text reports, CancerDAO PILL uses advanced AI technology to quickly extract key information, interpret complex medical terminology, and provide personalized risk insights and health recommendations to help you better understand your health status.',
    'product.feature2.title': 'Your Personal Health Timeline',
    'product.feature2.description': 'CancerDAO PILL builds a comprehensive personal health timeline, integrating every examination, medication, and daily health data. You can clearly track your health journey, manage personal data, and review at any time to provide reliable basis for health decisions.',
    'product.learn.more': 'Learn More',
    
    // 订阅
    'subscribe.title': 'Subscribe for Updates',
    'subscribe.subtitle': 'Get the latest progress and release information of CancerDAO PILL first',
    'subscribe.placeholder': 'Enter your email address',
    'subscribe.button': 'Subscribe',
    'subscribe.subscribing': 'Subscribing...',
    
    // 数据主权
    'data.sovereignty.title': 'Data Sovereignty & Trust: Your Data, Your Control',
    'data.sovereignty.subtitle': 'Through blockchain technology and encryption algorithms, ensure your health data is secure, private, and owned by you',
    'data.nft.title': 'Data NFT: Granting You Data Ownership',
    'data.nft.badge': 'Blockchain Technology',
    'data.nft.description': 'Introducing the concept of Data NFT, explaining how it transforms your health data into digital assets and records them on the blockchain, ensuring uniqueness, ownership, and traceability. Emphasizing how data providers can control data access and benefit through Data NFT.',
    'data.nft.point1': 'Data uniqueness and ownership confirmation',
    'data.nft.point2': 'Blockchain records, permanently traceable',
    'data.nft.point3': 'You control data access permissions',
    'data.fhe.title': 'Fully Homomorphic Encryption (FHE): Encrypted Computing, Privacy Assured',
    'data.fhe.badge': 'Privacy Protection',
    'data.fhe.description': 'Introducing the concept and importance of FHE - allowing computation without decrypting data. Emphasizing how this completely protects users\' biological and medical data privacy, even when data is used for AI analysis or research.',
    'data.fhe.point1': 'Data remains encrypted at all times',
    'data.fhe.point2': 'Supports AI computation in encrypted state',
    'data.fhe.point3': 'Zero risk of medical data leakage',
    
    // 社区力量
    'community.power.title': 'You\'re not ALONE',
    'community.power.subtitle': 'Join our global community and work together with like-minded people for a cancer-free world',
    'community.global.title': 'Global Community',
    'community.global.count': '10,000+',
    'community.global.label': 'Active Members',
    'community.data.title': 'Data Contribution',
    'community.data.count': '50,000+',
    'community.data.label': 'Health Records',
    'community.ai.title': 'AI Model',
    'community.ai.count': '95%',
    'community.ai.label': 'Accuracy',
    'community.join.title': 'Ready to Join Us?',
    'community.join.subtitle': 'Work together with researchers, patients, and medical professionals worldwide to contribute to creating a cancer-free world',
    'community.join.discord': 'Join Discord Community',
    'community.join.twitter': 'Follow Our Twitter',
    
    // 合作伙伴
    'partners.title': 'Our Partners',
    'partners.subtitle': 'Welcome all types of organizations to join and promote innovation together',
    'partners.item': 'Partner',
    
    // 团队
    'team.title': 'Our Team',
    'team.subtitle': 'An interdisciplinary team of experts from top institutions',
    'team.founder': 'Founder & CEO',
    'team.cto': 'Chief Technology Officer',
    'team.cmo': 'Chief Medical Officer',
    'team.scientist': 'Chief Scientist',
    'team.ai.bio': 'AI & Bioinformatics',
    'team.blockchain.crypto': 'Blockchain & Cryptography',
    'team.oncology': 'Oncology',
    'team.ml': 'Machine Learning',
    'team.learn.more': 'Learn About Complete Team',
    
    // Toast消息
    'toast.subscribe.success.title': 'Subscription Successful',
    'toast.subscribe.success.description': 'Thank you for your attention! We will notify you of the latest progress in time.',
    'toast.subscribe.error.title': 'Subscription Failed',
    'toast.subscribe.error.description': 'Please try again later',
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
