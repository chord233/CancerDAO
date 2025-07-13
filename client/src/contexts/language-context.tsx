import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "zh" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

// 翻译字典
const translations = {
  zh: {
    // 导航栏
    "nav.home": "首页",
    "nav.about": "关于我们",
    "nav.solution": "解决方案",
    "nav.community": "社区",
    "nav.resources": "资源中心",
    "nav.join": "加入社区",

    // 首页
    "hero.title": "与公众共建，革新癌症防治",
    "hero.subtitle":
      "CancerDAO 是一个由公众驱动、融合人工智能（AI）与区块链技术的个人自主癌症防治平台，致力于为个人和社会提供可及、可信、精准的癌症预防与治疗服务。",
    "hero.cta1": "了解我们的解决方案",
    "hero.cta2": "加入我们的社区",

    // 问题部分
    "problem.title": "我们面临的挑战",
    "problem.subtitle":
      "癌症正成为人类健康的重大威胁，而现有的预防和治疗体系存在诸多局限",
    "problem.global.title": "全球性挑战",
    "problem.global.description": "癌症发病率上升，尤其在年轻群体中",
    "problem.global.point1": "大约有 20% 的人将罹患癌症，其中约 10% 会因此离世",
    "problem.global.point2":
      "早发性癌症（50岁以下）的发病率在 1990 年至 2019 年间增加了 79.1%",
    "problem.knowledge.title": "知识和支持不足",
    "problem.knowledge.description": "公众在癌症预防和治疗方面知识和支持不足",
    "problem.knowledge.point1": "健康管理及相关数据的知识和工具有限",
    "problem.knowledge.point2": "难以获得创新的癌症预防和治疗方法",
    "problem.knowledge.point3":
      '公众和患者通常被视为"顾客"，限制了积极参与创新',
    "problem.innovation.title": "创新缓慢且成本高昂",
    "problem.innovation.description": "机构和企业创新缓慢且成本高昂",
    "problem.innovation.point1":
      "数据碎片化、孤立，缺乏标准化和共享，限制了 AI 驱动创新的发展",
    "problem.innovation.point2": "获取公众和患者的成本高昂",

    // 解决方案部分
    "solution.title": "我们的解决方案",
    "solution.subtitle": "通过三大核心支柱，构建一个全面的癌症防治生态系统",
    "solution.core.title": "核心价值循环",
    "solution.ai.title": "AI 平台",
    "solution.ai.description": "智能分析与预测",
    "solution.blockchain.title": "区块链 Medical ID",
    "solution.blockchain.description": "数据安全与主权",
    "solution.decentralized.title": "去中心化数据库",
    "solution.decentralized.description": "共享与协作",
    "solution.therapy.title": "AI 驱动疗法",
    "solution.therapy.description": "精准治疗方案",
    "solution.ai.pillar.title": "AI 赋能",
    "solution.ai.pillar.description":
      "通过AI算法对用户的基因组、临床、生活方式等多维数据进行整合分析，CancerDAO 为健康人群提供个性化风险评估与预防建议，为癌症患者提供治疗辅助与康复管理。",
    "solution.ai.pillar.button": "了解更多 AI 赋能",
    "solution.blockchain.pillar.title": "区块链保障",
    "solution.blockchain.pillar.description":
      "CancerDAO 构建了一个由用户自主控制的数据基础设施，基于区块链和隐私计算技术，实现数据可控、可追溯、可激励地共享，推动科研与新药开发。",
    "solution.blockchain.pillar.point1": "数据可控与可追溯",
    "solution.blockchain.pillar.point2": "隐私计算技术保护",
    "solution.blockchain.pillar.point3": "激励机制推动共享",
    "solution.blockchain.pillar.button": "了解更多区块链保障",
    "solution.community.pillar.title": "社区驱动",
    "solution.community.pillar.description":
      "CancerDAO 鼓励公众通过贡献数据、参与社区治理与科普活动获得奖励，真正实现'以患者为中心'的公共健康创新生态。",
    "solution.community.pillar.point1": "数据贡献获得奖励",
    "solution.community.pillar.point2": "社区治理参与",
    "solution.community.pillar.point3": "以患者为中心创新",
    "solution.community.pillar.button": "了解更多社区驱动",

    // 产品预览
    "product.title": "核心产品预览 - CancerDAO PILL",
    "product.subtitle": "探索 CancerDAO PILL，您个性化的抗癌伴侣。",
    "product.ai.analysis": "AI 病历解读",
    "product.ai.interpretation.title": "AI 驱动的病历智能解读",
    "product.ai.interpretation.description":
      "上传您的医学影像和文本报告，CancerDAO PILL 利用先进的 AI 技术，为您快速提取关键信息，解读复杂的医学术语，并提供个性化的风险洞察和健康建议，助您更透彻地理解自身健康状况。",
    "product.timeline": "健康时间轴",
    "product.timeline.item1": "2023年3月：首次体检",
    "product.timeline.item2": "2023年6月：开始基因检测",
    "product.timeline.feature.title": "您的专属健康时间轴",
    "product.timeline.feature.description":
      "CancerDAO PILL 为您构建一个全面的个人健康时间轴，整合您的每一次检查、每一次用药和日常健康数据。您可以清晰追踪健康历程，管理个人数据，并随时回顾，为健康决策提供可靠依据。",
    "product.feature1.title": "AI 驱动的病历智能解读",
    "product.feature1.description":
      "上传您的医学影像和文本报告，CancerDAO PILL 利用先进的 AI 技术，为您快速提取关键信息，解读复杂的医学术语，并提供个性化的风险洞察和健康建议，助您更透彻地理解自身健康状况。",
    "product.feature2.title": "您的专属健康时间轴",
    "product.feature2.description":
      "CancerDAO PILL 为您构建一个全面的个人健康时间轴，整合您的每一次检查、每一次用药和日常健康数据。您可以清晰追踪健康历程，管理个人数据，并随时回顾，为健康决策提供可靠依据。",
    "product.learn.more": "了解更多",

    // 订阅
    "subscribe.title": "订阅更新",
    "subscribe.subtitle": "第一时间获取 CancerDAO PILL 的最新进展和发布信息",
    "subscribe.placeholder": "输入您的邮箱地址",
    "subscribe.button": "订阅",
    "subscribe.subscribing": "订阅中...",

    // 数据主权
    "data.sovereignty.title": "数据主权与信任：您的数据，您做主",
    "data.sovereignty.subtitle":
      "通过区块链技术和加密算法，确保您的健康数据安全、隐私且为您所有",
    "data.nft.title": "Data NFT：赋予您数据所有权",
    "data.nft.badge": "区块链技术",
    "data.nft.description":
      "Data NFT 是一种独特的数字代币，它将您的个人健康数据转化为真正属于您的数字资产。数据提供者提供加密的健康数据，这些数据随后被记录在区块链上并进行通证化，生成独特的Data NFT。这些Data NFT代表了数据的唯一性、所有权和可追溯性，并可以在市场中进行交易。通过这种方式，数据提供者能够控制谁可以访问他们的数据，并通过数据使用费和产品版税的形式获得收益，甚至从平台奖励中受益。",
    "data.nft.point1": "数据唯一性与所有权确认",
    "data.nft.point2": "区块链上的可追溯性",
    "data.nft.point3": "通过数据使用获得收益",
    "data.nft.cta": "了解更多 Data NFT",

    // 脚注
    "footer.copyright": "© 2024 CancerDAO. 保留所有权利。",
    "footer.privacy": "隐私政策",
    "footer.terms": "使用条款",
    "footer.contact": "联系我们",
    "footer.description": "与公众共建，革新癌症防治的未来",
    "footer.mission": "CancerDAO 致力于通过AI和区块链技术，构建一个以患者为中心的癌症防治生态系统",
    "footer.solutions": "解决方案",
    "footer.ai": "AI 赋能",
    "footer.blockchain": "区块链保障",
    "footer.community": "社区驱动",
    "footer.resources": "资源",
    "footer.about": "关于我们",
    "footer.blog": "博客",
    "footer.support": "支持",
    "footer.connect": "联系我们",
    "footer.email": "hello@cancerdao.com",
    "footer.social": "关注我们",

    // 联系我们表单
    "contact.title": "联系我们",
    "contact.subtitle": "如果您有任何问题或建议，请随时与我们联系。我们的团队会尽快回复您。",
    "contact.name": "姓名",
    "contact.email": "邮箱",
    "contact.message": "消息",
    "contact.submit": "发送消息",
    "contact.sending": "发送中...",

    // 关于我们页面
    "about.hero.title": "关于 CancerDAO",
    "about.hero.subtitle": "我们的使命是通过创新技术和社区力量，让每个人都能获得最好的癌症预防和治疗。",
    "about.mission.title": "我们的使命",
    "about.mission.subtitle": "在面对癌症这一人类健康的重大挑战时，我们不能仅仅依靠传统的医疗体系。我们需要一个更开放、更智能、更以患者为中心的解决方案。",
    "about.mission.description": "CancerDAO 诞生于这样的信念：通过AI和区块链技术的力量，结合全球社区的智慧，我们可以创造一个更好的未来——一个每个人都能获得个性化、精准的癌症预防和治疗的世界。我们不仅仅是一个技术平台，更是一个承载着希望与关爱的社区。",
    "about.values.title": "我们的价值观",
    "about.values.transparent.title": "透明开放",
    "about.values.transparent.description": "我们相信透明是建立信任的基础，所有的决策过程都向社区开放。",
    "about.values.patient.title": "以患者为中心",
    "about.values.patient.description": "患者的需求和体验始终是我们产品设计和服务的核心。",
    "about.values.innovation.title": "持续创新",
    "about.values.innovation.description": "我们不断探索新技术，为癌症防治带来突破性的解决方案。",
    "about.values.collaboration.title": "协作共赢",
    "about.values.collaboration.description": "我们与全球的研究机构、医疗专家和患者社区紧密合作。",
    "about.team.title": "我们的团队",
    "about.team.subtitle": "来自全球的专家团队，共同致力于癌症防治创新",
    "about.team.member1.name": "Michael Yang",
    "about.team.member1.role": "联合创始人兼首席执行官\n哈佛医学院生物医学信息学博士\n曾任UCSF生物信息学研究员",
    "about.team.member2.name": "YoSean Wang",
    "about.team.member2.role": "联合创始人兼首席技术官\n斯坦福大学计算机科学博士\n前谷歌AI资深工程师",
    "about.team.member3.name": "Zhiwei Bao",
    "about.team.member3.role": "联合创始人兼首席运营官\n宾夕法尼亚大学沃顿商学院MBA\n前麦肯锡公司合伙人",
    "about.team.member4.name": "Aspire Cao",
    "about.team.member4.role": "首席产品官",
    "about.team.member5.name": "Jennifer Cheng Lo",
    "about.team.member5.role": "首席市场官",
    "about.team.member6.name": "Jonathan Hakim",
    "about.team.member6.role": "首席医疗官",
    "about.team.member7.name": "Daqi Lee",
    "about.team.member7.role": "首席技术官",
    "about.partners.title": "合作伙伴",
    "about.partners.subtitle": "与全球领先的机构和组织建立战略合作关系",
    "about.join.title": "加入我们",
    "about.join.subtitle": "成为 CancerDAO 团队的一员，共同推动癌症防治的创新发展",
    "about.join.cta": "查看职位空缺",

    // 解决方案页面
    "solution.hero.title": "创新解决方案",
    "solution.hero.subtitle": "通过AI和区块链技术，为每个人提供个性化的癌症预防和治疗方案",
    "solution.ai.agents.title": "AI 医疗助手矩阵",
    "solution.ai.agents.subtitle": "9大专业AI助手，为您提供全方位的健康服务",
    "solution.ai.agents.analysis.title": "AI 智能分析流程",
    "solution.ai.agents.analysis.step1": "上传病历",
    "solution.ai.agents.analysis.step2": "AI智能解析",
    "solution.ai.agents.analysis.step3": "结构化数据",
    "solution.ai.agents.report.title": "Report Bot",
    "solution.ai.agents.report.description": "智能解读医疗报告，提供易懂的健康分析",
    "solution.ai.agents.report.status": "已上线",
    "solution.ai.agents.trial.title": "Trial Bot",
    "solution.ai.agents.trial.description": "匹配合适的临床试验，获得前沿治疗机会",
    "solution.ai.agents.trial.status": "开发中",
    "solution.ai.agents.clinical.title": "Clinical Bot",
    "solution.ai.agents.clinical.description": "临床数据分析，辅助医生制定治疗方案",
    "solution.ai.agents.clinical.status": "开发中",
    "solution.ai.agents.content.title": "Content Bot",
    "solution.ai.agents.content.description": "生成个性化健康内容，提供专业科普信息",
    "solution.ai.agents.content.status": "已上线",
    "solution.ai.agents.longevity.title": "Longevity Bot",
    "solution.ai.agents.longevity.description": "长寿健康规划，制定个性化抗衰老方案",
    "solution.ai.agents.longevity.status": "开发中",
    "solution.ai.agents.health.title": "Health Bot",
    "solution.ai.agents.health.description": "24/7健康监测，提供实时健康建议",
    "solution.ai.agents.health.status": "已上线",
    "solution.ai.agents.ama.title": "AMA Bot",
    "solution.ai.agents.ama.description": "医疗问答助手，解答您的健康疑问",
    "solution.ai.agents.ama.status": "已上线",
    "solution.ai.agents.research.title": "Research Bot",
    "solution.ai.agents.research.description": "最新医学研究追踪，提供前沿治疗信息",
    "solution.ai.agents.research.status": "开发中",
    "solution.ai.agents.support.title": "Support Bot",
    "solution.ai.agents.support.description": "心理支持与护理指导，陪伴您的康复之路",
    "solution.ai.agents.support.status": "开发中",

    // 社区页面
    "community.hero.title": "加入 CancerDAO 社区",
    "community.hero.subtitle": "与全球的患者、家属、医疗专家和研究者一起，共同对抗癌症",
    "community.hero.button": "立即加入",
    "community.mission.title": "我们的使命",
    "community.mission.subtitle": "构建一个充满希望、支持和创新的癌症防治社区",
    "community.mission.description": "在 CancerDAO 社区中，我们相信每个人都有力量改变癌症防治的现状。无论您是患者、家属、医疗专家还是研究者，我们都欢迎您的加入。在这里，您不仅能获得专业的医疗建议和情感支持，还能参与到革命性的医疗创新中来。",
    "community.values.title": "我们的价值观",
    "community.values.hope.title": "传递希望",
    "community.values.hope.description": "在最困难的时刻，我们相信希望的力量能够点亮前行的道路。",
    "community.values.support.title": "相互支持",
    "community.values.support.description": "没有人需要独自面对癌症。我们是一个大家庭，彼此扶持，共同前行。",
    "community.values.innovation.title": "推动创新",
    "community.values.innovation.description": "通过分享经验和数据，我们共同推动医疗技术的进步。",
    "community.values.empowerment.title": "赋能个人",
    "community.values.empowerment.description": "每个人都应该拥有掌控自己健康的权利和能力。",
    "community.stories.title": "真实故事",
    "community.stories.subtitle": "来自社区成员的真实经历和感人故事",
    "community.stories.story1.title": "李女士的康复之路",
    "community.stories.story1.category": "康复故事",
    "community.stories.story1.excerpt": "从确诊乳腺癌到完全康复，李女士在 CancerDAO 社区找到了力量和希望。她说：'这里不仅有专业的医疗建议，更有来自全世界的温暖支持。'",
    "community.stories.story2.title": "张医生的公益行动",
    "community.stories.story2.category": "医者仁心",
    "community.stories.story2.excerpt": "作为一名肿瘤科医生，张医生在社区中无偿为患者提供咨询服务。他相信：'医者的使命不仅是治病，更是传递希望和温暖。'",
    "community.stories.story3.title": "小王的科研贡献",
    "community.stories.story3.category": "科研创新",
    "community.stories.story3.excerpt": "作为一名生物信息学研究生，小王通过 CancerDAO 平台贡献了自己的研究成果，帮助开发更精准的癌症检测算法。",
    "community.stories.readMore": "阅读完整故事",
    "community.stats.title": "社区力量",
    "community.stats.subtitle": "数字背后是真实的故事和坚定的信念",
    "community.stats.members": "活跃成员",
    "community.stats.stories": "分享故事",
    "community.stats.volunteers": "专业志愿者",
    "community.stats.support": "社区支持",
    "community.activities.title": "社区活动",
    "community.activities.subtitle": "参与我们的各种活动，与社区成员一起学习、成长和互助",
    "community.activities.event1.status": "已结束",
    "community.activities.event1.title": "Cancer DAO Logo 社区投票",
    "community.activities.event1.description": "投票赢取 USDT！🧬 \n我们需要您的帮助来选择完美的品牌标识！1名获奖者将获得25美元USDT奖励！",
    "community.activities.event1.participants": "190人",
    "community.activities.event1.format": "线上会议",
    "community.activities.event2.status": "已结束",
    "community.activities.event2.title": "DeSci 社区线下聚会",
    "community.activities.event2.description": "定期邀请医学专家和有经验的患者分享最新的治疗方法、护理技巧和康复经验。",
    "community.activities.event2.participants": "20-30人",
    "community.activities.event2.format": "线下",
    "community.join.title": "不要独自面对，加入CancerDAO社区，一起抗击癌症，拥抱健康！",
    "community.join.subtitle": "无论您是患者、家属、医疗专家，还是关心健康的人士，我们的社区都欢迎您。在这里，您将找到理解、支持和希望。",
    "community.join.benefits": "加入后，您将获得：24/7 社区支持 • 专业医疗咨询 • 同伴经验分享 • 最新治疗信息",
    "community.join.button": "立即加入社区",
    "community.join.discord": "访问 Discord 社区",
    "community.join.twitter": "关注 Twitter",
    "community.join.telegram": "加入 Telegram 群组",

    // 资源中心页面
    "resources.title": "资源中心",
    "resources.subtitle": "获取最新的癌症防治信息、研究进展和专业知识",
    "resources.nav.blog": "博客 & 文章",
    "resources.nav.insights": "科普知识",
    "resources.nav.faq": "常见问题",
    "resources.blog.title": "博客 & 文章",
    "resources.blog.subtitle": "深度分析和最新见解，帮助您了解癌症防治的前沿发展",
    "resources.insights.title": "科普知识",
    "resources.insights.subtitle": "专业的医学知识和实用的健康建议，让复杂的医学概念变得易懂",
    "resources.faq.title": "常见问题",
    "resources.faq.subtitle": "快速找到您关心的问题答案，获得专业的解答和建议",
    "resources.read.more": "阅读更多",
    "resources.learn.more": "了解更多",
    "resources.faq.search.placeholder": "搜索问题...",
    "resources.blog.post1.title": "AI在癌症早期检测中的突破性进展",
    "resources.blog.post1.category": "技术深度",
    "resources.blog.post1.excerpt": "探索人工智能如何革命性地提高癌症早期检测的准确性和效率，为患者提供更好的治疗机会。",
    "resources.blog.post1.readTime": "8 分钟",
    "resources.blog.post2.title": "区块链在医疗数据隐私保护中的应用",
    "resources.blog.post2.category": "项目进展",
    "resources.blog.post2.excerpt": "了解CancerDAO如何利用区块链技术确保患者数据的安全性和隐私保护，实现真正的数据主权。",
    "resources.blog.post2.readTime": "6 分钟",
    "resources.blog.post3.title": "社区驱动的癌症研究新模式",
    "resources.blog.post3.category": "团队洞察",
    "resources.blog.post3.excerpt": "探索如何通过社区参与和集体智慧，加速癌症研究的进展，构建以患者为中心的创新生态系统。",
    "resources.blog.post3.readTime": "5 分钟",
    "resources.insights.article1.title": "癌症预防：生活方式的重要性",
    "resources.insights.article1.category": "癌症预防",
    "resources.insights.article1.excerpt": "了解日常生活中的简单改变如何显著降低患癌风险，包括饮食、运动和环境因素的影响。",
    "resources.insights.article2.title": "基因检测：个性化医疗的未来",
    "resources.insights.article2.category": "基因科技",
    "resources.insights.article2.excerpt": "探索基因检测技术如何帮助我们了解个人癌症风险，制定精准的预防和治疗策略。",
    "resources.insights.article3.title": "免疫疗法：癌症治疗的新希望",
    "resources.insights.article3.category": "治疗进展",
    "resources.insights.article3.excerpt": "了解免疫疗法如何激活人体自身的免疫系统来对抗癌症，以及最新的研究进展。",
    "resources.insights.category.all": "全部",
    "resources.insights.category.prevention": "癌症预防",
    "resources.insights.category.treatment": "治疗进展",
    "resources.insights.category.genetics": "基因科技",
    "resources.insights.category.privacy": "数据隐私",
    "resources.faq.viewAll": "查看所有问题",
    "resources.contact.title": "还有其他问题？",
    "resources.contact.subtitle": "如果您没有找到需要的信息，请随时联系我们的团队",
    "resources.contact.button": "联系我们",
    "resources.community.button": "加入社区讨论"
  },
  en: {
    // 导航栏
    "nav.home": "Home",
    "nav.about": "About",
    "nav.solution": "Solution",
    "nav.community": "Community",
    "nav.resources": "Resources",
    "nav.join": "Join Community",

    // 首页
    "hero.title": "Revolutionizing Cancer Prevention and Treatment with the Public",
    "hero.subtitle":
      "CancerDAO is a public-driven platform that integrates artificial intelligence (AI) and blockchain technology for personal autonomous cancer prevention and treatment, committed to providing accessible, trustworthy, and precise cancer prevention and treatment services for individuals and society.",
    "hero.cta1": "Learn About Our Solution",
    "hero.cta2": "Join Our Community",

    // 问题部分
    "problem.title": "The Challenges We Face",
    "problem.subtitle":
      "Cancer is becoming a major threat to human health, and existing prevention and treatment systems have many limitations",
    "problem.global.title": "Global Challenge",
    "problem.global.description": "Rising cancer rates, especially among young people",
    "problem.global.point1": "About 20% of people will develop cancer, with about 10% dying from it",
    "problem.global.point2":
      "The incidence of early-onset cancer (under 50) increased by 79.1% from 1990 to 2019",
    "problem.knowledge.title": "Insufficient Knowledge and Support",
    "problem.knowledge.description": "The public lacks knowledge and support for cancer prevention and treatment",
    "problem.knowledge.point1": "Limited knowledge and tools for health management and related data",
    "problem.knowledge.point2": "Difficulty accessing innovative cancer prevention and treatment methods",
    "problem.knowledge.point3":
      'The public and patients are often seen as "customers," limiting active participation in innovation',
    "problem.innovation.title": "Slow and Costly Innovation",
    "problem.innovation.description": "Innovation by institutions and enterprises is slow and costly",
    "problem.innovation.point1":
      "Data fragmentation and isolation, lack of standardization and sharing, limiting AI-driven innovation development",
    "problem.innovation.point2": "High cost of accessing the public and patients",

    // 解决方案部分
    "solution.title": "Our Solution",
    "solution.subtitle": "Building a comprehensive cancer prevention and treatment ecosystem through three core pillars",
    "solution.core.title": "Core Value Loop",
    "solution.ai.title": "AI Platform",
    "solution.ai.description": "Intelligent Analysis & Prediction",
    "solution.blockchain.title": "Blockchain Medical ID",
    "solution.blockchain.description": "Data Security & Sovereignty",
    "solution.decentralized.title": "Decentralized Database",
    "solution.decentralized.description": "Sharing & Collaboration",
    "solution.therapy.title": "AI-Driven Therapy",
    "solution.therapy.description": "Precision Treatment Solutions",
    "solution.ai.pillar.title": "AI Empowerment",
    "solution.ai.pillar.description":
      "Through AI algorithms that integrate multi-dimensional data including genomic, clinical, and lifestyle information, CancerDAO provides personalized risk assessment and prevention recommendations for healthy individuals, and treatment assistance and rehabilitation management for cancer patients.",
    "solution.ai.pillar.button": "Learn More About AI Empowerment",
    "solution.blockchain.pillar.title": "Blockchain Protection",
    "solution.blockchain.pillar.description":
      "CancerDAO has built a user-controlled data infrastructure based on blockchain and privacy computing technology, enabling controllable, traceable, and incentivized data sharing to promote research and new drug development.",
    "solution.blockchain.pillar.point1": "Controllable and traceable data",
    "solution.blockchain.pillar.point2": "Privacy computing technology protection",
    "solution.blockchain.pillar.point3": "Incentive mechanisms drive sharing",
    "solution.blockchain.pillar.button": "Learn More About Blockchain Protection",
    "solution.community.pillar.title": "Community Driven",
    "solution.community.pillar.description":
      "CancerDAO encourages the public to receive rewards by contributing data, participating in community governance and educational activities, truly realizing a 'patient-centered' public health innovation ecosystem.",
    "solution.community.pillar.point1": "Get rewards for data contribution",
    "solution.community.pillar.point2": "Participate in community governance",
    "solution.community.pillar.point3": "Patient-centered innovation",
    "solution.community.pillar.button": "Learn More About Community Driven",

    // 产品预览
    "product.title": "Core Product Preview - CancerDAO PILL",
    "product.subtitle": "Explore CancerDAO PILL, your personalized anti-cancer companion.",
    "product.ai.analysis": "AI Medical Record Analysis",
    "product.ai.interpretation.title": "AI-Driven Medical Record Intelligent Analysis",
    "product.ai.interpretation.description":
      "Upload your medical images and text reports, CancerDAO PILL uses advanced AI technology to quickly extract key information, interpret complex medical terminology, and provide personalized risk insights and health recommendations to help you understand your health status more thoroughly.",
    "product.timeline": "Health Timeline",
    "product.timeline.item1": "March 2023: First Health Checkup",
    "product.timeline.item2": "June 2023: Started Genetic Testing",
    "product.timeline.feature.title": "Your Personal Health Timeline",
    "product.timeline.feature.description":
      "CancerDAO PILL builds a comprehensive personal health timeline for you, integrating every examination, medication, and daily health data. You can clearly track your health journey, manage personal data, and review at any time, providing reliable basis for health decisions.",
    "product.feature1.title": "AI-Driven Medical Record Intelligent Analysis",
    "product.feature1.description":
      "Upload your medical images and text reports, CancerDAO PILL uses advanced AI technology to quickly extract key information, interpret complex medical terminology, and provide personalized risk insights and health recommendations to help you understand your health status more thoroughly.",
    "product.feature2.title": "Your Personal Health Timeline",
    "product.feature2.description":
      "CancerDAO PILL builds a comprehensive personal health timeline for you, integrating every examination, medication, and daily health data. You can clearly track your health journey, manage personal data, and review at any time, providing reliable basis for health decisions.",
    "product.learn.more": "Learn More",

    // 订阅
    "subscribe.title": "Subscribe for Updates",
    "subscribe.subtitle": "Be the first to get the latest progress and release information of CancerDAO PILL",
    "subscribe.placeholder": "Enter your email address",
    "subscribe.button": "Subscribe",
    "subscribe.subscribing": "Subscribing...",

    // 数据主权
    "data.sovereignty.title": "Data Sovereignty and Trust: Your Data, Your Control",
    "data.sovereignty.subtitle":
      "Ensure your health data is secure, private, and owned by you through blockchain technology and encryption algorithms",
    "data.nft.title": "Data NFT: Granting You Data Ownership",
    "data.nft.badge": "Blockchain Technology",
    "data.nft.description":
      "Data NFT is a unique digital token that converts your personal health data into a digital asset that truly belongs to you. Data providers provide encrypted health data, which is then recorded on the blockchain and tokenized to generate unique Data NFTs. These Data NFTs represent the uniqueness, ownership, and traceability of data and can be traded in the market. In this way, data providers can control who can access their data and earn revenue through data usage fees and product royalties, and even benefit from platform rewards.",
    "data.nft.point1": "Data uniqueness and ownership confirmation",
    "data.nft.point2": "Traceability on the blockchain",
    "data.nft.point3": "Earn revenue through data usage",
    "data.nft.cta": "Learn More About Data NFT",

    // 脚注
    "footer.copyright": "© 2024 CancerDAO. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.contact": "Contact Us",
    "footer.description": "Revolutionizing cancer prevention and treatment with the public",
    "footer.mission": "CancerDAO is committed to building a patient-centered cancer prevention and treatment ecosystem through AI and blockchain technology",
    "footer.solutions": "Solutions",
    "footer.ai": "AI Empowerment",
    "footer.blockchain": "Blockchain Protection",
    "footer.community": "Community Driven",
    "footer.resources": "Resources",
    "footer.about": "About Us",
    "footer.blog": "Blog",
    "footer.support": "Support",
    "footer.connect": "Connect",
    "footer.email": "hello@cancerdao.com",
    "footer.social": "Follow Us",

    // 联系我们表单
    "contact.title": "Contact Us",
    "contact.subtitle": "If you have any questions or suggestions, please feel free to contact us. Our team will reply to you as soon as possible.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.submit": "Send Message",
    "contact.sending": "Sending...",

    // 关于我们页面
    "about.hero.title": "About CancerDAO",
    "about.hero.subtitle": "Our mission is to ensure everyone can access the best cancer prevention and treatment through innovative technology and community power.",
    "about.mission.title": "Our Mission",
    "about.mission.subtitle": "When facing cancer, a major challenge to human health, we cannot rely solely on traditional medical systems. We need a more open, intelligent, and patient-centered solution.",
    "about.mission.description": "CancerDAO was born from this belief: through the power of AI and blockchain technology, combined with the wisdom of the global community, we can create a better future—a world where everyone can access personalized, precise cancer prevention and treatment. We are not just a technology platform, but a community carrying hope and care.",
    "about.values.title": "Our Values",
    "about.values.transparent.title": "Transparent and Open",
    "about.values.transparent.description": "We believe transparency is the foundation of trust, and all decision-making processes are open to the community.",
    "about.values.patient.title": "Patient-Centered",
    "about.values.patient.description": "Patient needs and experiences are always at the core of our product design and services.",
    "about.values.innovation.title": "Continuous Innovation",
    "about.values.innovation.description": "We continuously explore new technologies to bring breakthrough solutions to cancer prevention and treatment.",
    "about.values.collaboration.title": "Collaborative Win-Win",
    "about.values.collaboration.description": "We work closely with research institutions, medical experts, and patient communities worldwide.",
    "about.team.title": "Our Team",
    "about.team.subtitle": "Expert team from around the world, committed to cancer prevention and treatment innovation",
    "about.team.member1.name": "Michael Yang",
    "about.team.member1.role": "Co-founder & CEO\nPhD in Biomedical Informatics from Harvard Medical School\nFormer Bioinformatics Researcher at UCSF",
    "about.team.member2.name": "YoSean Wang",
    "about.team.member2.role": "Co-founder & CTO\nPhD in Computer Science from Stanford University\nFormer Senior Engineer at Google AI",
    "about.team.member3.name": "Zhiwei Bao",
    "about.team.member3.role": "Co-founder & COO\nMBA from Wharton School, University of Pennsylvania\nFormer Partner at McKinsey & Company",
    "about.team.member4.name": "Aspire Cao",
    "about.team.member4.role": "Chief Product Officer",
    "about.team.member5.name": "Jennifer Cheng Lo",
    "about.team.member5.role": "Chief Marketing Officer",
    "about.team.member6.name": "Jonathan Hakim",
    "about.team.member6.role": "Chief Medical Officer",
    "about.team.member7.name": "Daqi Lee",
    "about.team.member7.role": "Chief Technology Officer",
    "about.partners.title": "Partners",
    "about.partners.subtitle": "Establishing strategic partnerships with leading institutions and organizations worldwide",
    "about.join.title": "Join Us",
    "about.join.subtitle": "Become a member of the CancerDAO team and jointly promote innovation in cancer prevention and treatment",
    "about.join.cta": "View Job Openings",

    // 解决方案页面
    "solution.hero.title": "Innovative Solutions",
    "solution.hero.subtitle": "Providing personalized cancer prevention and treatment solutions for everyone through AI and blockchain technology",
    "solution.ai.agents.title": "AI Medical Assistant Matrix",
    "solution.ai.agents.subtitle": "9 professional AI assistants providing comprehensive health services",
    "solution.ai.agents.analysis.title": "AI Intelligent Analysis Process",
    "solution.ai.agents.analysis.step1": "Upload Medical Records",
    "solution.ai.agents.analysis.step2": "AI Intelligent Analysis",
    "solution.ai.agents.analysis.step3": "Structured Data",
    "solution.ai.agents.report.title": "Report Bot",
    "solution.ai.agents.report.description": "Intelligently interpret medical reports and provide understandable health analysis",
    "solution.ai.agents.report.status": "Online",
    "solution.ai.agents.trial.title": "Trial Bot",
    "solution.ai.agents.trial.description": "Match suitable clinical trials and get cutting-edge treatment opportunities",
    "solution.ai.agents.trial.status": "In Development",
    "solution.ai.agents.clinical.title": "Clinical Bot",
    "solution.ai.agents.clinical.description": "Clinical data analysis to assist doctors in developing treatment plans",
    "solution.ai.agents.clinical.status": "In Development",
    "solution.ai.agents.content.title": "Content Bot",
    "solution.ai.agents.content.description": "Generate personalized health content and provide professional science education",
    "solution.ai.agents.content.status": "Online",
    "solution.ai.agents.longevity.title": "Longevity Bot",
    "solution.ai.agents.longevity.description": "Longevity health planning and personalized anti-aging solutions",
    "solution.ai.agents.longevity.status": "In Development",
    "solution.ai.agents.health.title": "Health Bot",
    "solution.ai.agents.health.description": "24/7 health monitoring and real-time health advice",
    "solution.ai.agents.health.status": "Online",
    "solution.ai.agents.ama.title": "AMA Bot",
    "solution.ai.agents.ama.description": "Medical Q&A assistant to answer your health questions",
    "solution.ai.agents.ama.status": "Online",
    "solution.ai.agents.research.title": "Research Bot",
    "solution.ai.agents.research.description": "Latest medical research tracking and cutting-edge treatment information",
    "solution.ai.agents.research.status": "In Development",
    "solution.ai.agents.support.title": "Support Bot",
    "solution.ai.agents.support.description": "Psychological support and care guidance for your recovery journey",
    "solution.ai.agents.support.status": "In Development",

    // 社区页面
    "community.hero.title": "Join the CancerDAO Community",
    "community.hero.subtitle": "Unite with patients, families, medical experts, and researchers worldwide to fight cancer together",
    "community.hero.button": "Join Now",
    "community.mission.title": "Our Mission",
    "community.mission.subtitle": "Building a community full of hope, support, and innovation for cancer prevention and treatment",
    "community.mission.description": "In the CancerDAO community, we believe everyone has the power to change the current state of cancer prevention and treatment. Whether you are a patient, family member, medical expert, or researcher, we welcome you to join. Here, you can not only receive professional medical advice and emotional support, but also participate in revolutionary medical innovations.",
    "community.values.title": "Our Values",
    "community.values.hope.title": "Spreading Hope",
    "community.values.hope.description": "In the most difficult moments, we believe in the power of hope to light the way forward.",
    "community.values.support.title": "Mutual Support",
    "community.values.support.description": "No one needs to face cancer alone. We are a big family, supporting each other and moving forward together.",
    "community.values.innovation.title": "Driving Innovation",
    "community.values.innovation.description": "By sharing experiences and data, we jointly promote the advancement of medical technology.",
    "community.values.empowerment.title": "Personal Empowerment",
    "community.values.empowerment.description": "Everyone should have the right and ability to control their own health.",
    "community.stories.title": "Real Stories",
    "community.stories.subtitle": "Real experiences and touching stories from community members",
    "community.stories.story1.title": "Ms. Li's Recovery Journey",
    "community.stories.story1.category": "Recovery Story",
    "community.stories.story1.excerpt": "From breast cancer diagnosis to complete recovery, Ms. Li found strength and hope in the CancerDAO community. She said: 'There is not only professional medical advice here, but also warm support from around the world.'",
    "community.stories.story2.title": "Dr. Zhang's Charitable Actions",
    "community.stories.story2.category": "Medical Compassion",
    "community.stories.story2.excerpt": "As an oncologist, Dr. Zhang provides free consultation services to patients in the community. He believes: 'The mission of a doctor is not only to treat diseases, but also to convey hope and warmth.'",
    "community.stories.story3.title": "Xiao Wang's Research Contribution",
    "community.stories.story3.category": "Research Innovation",
    "community.stories.story3.excerpt": "As a bioinformatics graduate student, Xiao Wang contributed his research results through the CancerDAO platform, helping to develop more precise cancer detection algorithms.",
    "community.stories.readMore": "Read Full Story",
    "community.stats.title": "Community Power",
    "community.stats.subtitle": "Behind the numbers are real stories and firm beliefs",
    "community.stats.members": "Active Members",
    "community.stats.stories": "Shared Stories",
    "community.stats.volunteers": "Professional Volunteers",
    "community.stats.support": "Community Support",
    "community.activities.title": "Community Activities",
    "community.activities.subtitle": "Participate in our various activities to learn, grow, and help each other with community members",
    "community.activities.event1.status": "Completed",
    "community.activities.event1.title": "Cancer DAO Logo Community Vote",
    "community.activities.event1.description": "Vote to Win USDT! 🧬 \nWe need your help to choose the perfect brand logo! 1 winner will receive $25 USDT as a reward!",
    "community.activities.event1.participants": "190 people",
    "community.activities.event1.format": "Online Meeting",
    "community.activities.event2.status": "Completed",
    "community.activities.event2.title": "DeSci Community Offline Meetup",
    "community.activities.event2.description": "Regularly invite medical experts and experienced patients to share the latest treatment methods, care techniques, and recovery experiences.",
    "community.activities.event2.participants": "20-30 people",
    "community.activities.event2.format": "Offline",
    "community.join.title": "Stop facing it alone, join CancerDAO community to fight cancer together and embrace health!",
    "community.join.subtitle": "Whether you are a patient, family member, medical professional, or someone who cares about health, our community welcomes you. Here, you will find understanding, support, and hope.",
    "community.join.benefits": "After joining, you will get: 24/7 community support • Professional medical consultation • Peer experience sharing • Latest treatment information",
    "community.join.button": "Join Community Now",
    "community.join.discord": "Visit Discord Community",
    "community.join.twitter": "Follow Twitter",
    "community.join.telegram": "Join Telegram Group",

    // 资源中心页面
    "resources.title": "Resource Center",
    "resources.subtitle": "Get the latest cancer prevention and treatment information, research progress, and professional knowledge",
    "resources.nav.blog": "Blog & Articles",
    "resources.nav.insights": "Educational Content",
    "resources.nav.faq": "FAQ",
    "resources.blog.title": "Blog & Articles",
    "resources.blog.subtitle": "In-depth analysis and latest insights to help you understand cutting-edge developments in cancer prevention and treatment",
    "resources.insights.title": "Educational Content",
    "resources.insights.subtitle": "Professional medical knowledge and practical health advice, making complex medical concepts easy to understand",
    "resources.faq.title": "Frequently Asked Questions",
    "resources.faq.subtitle": "Quickly find answers to questions you care about, get professional solutions and advice",
    "resources.read.more": "Read More",
    "resources.learn.more": "Learn More",
    "resources.faq.search.placeholder": "Search questions...",
    "resources.blog.post1.title": "Breakthrough Progress in AI for Early Cancer Detection",
    "resources.blog.post1.category": "Technical Deep Dive",
    "resources.blog.post1.excerpt": "Explore how artificial intelligence is revolutionizing the accuracy and efficiency of early cancer detection, providing patients with better treatment opportunities.",
    "resources.blog.post1.readTime": "8 minutes",
    "resources.blog.post2.title": "Application of Blockchain in Medical Data Privacy Protection",
    "resources.blog.post2.category": "Project Progress",
    "resources.blog.post2.excerpt": "Learn how CancerDAO uses blockchain technology to ensure the security and privacy protection of patient data, achieving true data sovereignty.",
    "resources.blog.post2.readTime": "6 minutes",
    "resources.blog.post3.title": "Community-Driven Cancer Research New Model",
    "resources.blog.post3.category": "Team Insights",
    "resources.blog.post3.excerpt": "Explore how to accelerate cancer research progress through community participation and collective intelligence, building a patient-centered innovation ecosystem.",
    "resources.blog.post3.readTime": "5 minutes",
    "resources.insights.article1.title": "Cancer Prevention: The Importance of Lifestyle",
    "resources.insights.article1.category": "Cancer Prevention",
    "resources.insights.article1.excerpt": "Learn how simple changes in daily life can significantly reduce cancer risk, including diet, exercise, and environmental factors.",
    "resources.insights.article2.title": "Genetic Testing: The Future of Personalized Medicine",
    "resources.insights.article2.category": "Genetic Technology",
    "resources.insights.article2.excerpt": "Explore how genetic testing technology helps us understand personal cancer risk and develop precise prevention and treatment strategies.",
    "resources.insights.article3.title": "Immunotherapy: New Hope for Cancer Treatment",
    "resources.insights.article3.category": "Treatment Progress",
    "resources.insights.article3.excerpt": "Learn how immunotherapy activates the body's own immune system to fight cancer, and the latest research progress.",
    "resources.insights.category.all": "All",
    "resources.insights.category.prevention": "Cancer Prevention",
    "resources.insights.category.treatment": "Treatment Progress",
    "resources.insights.category.genetics": "Genetic Technology",
    "resources.insights.category.privacy": "Data Privacy",
    "resources.faq.viewAll": "View All Questions",
    "resources.contact.title": "Have Other Questions?",
    "resources.contact.subtitle": "If you haven't found the information you need, feel free to contact our team",
    "resources.contact.button": "Contact Us",
    "resources.community.button": "Join Community Discussion"
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "zh" || savedLanguage === "en")) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    const translation = translations[language][key];
    return translation || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}