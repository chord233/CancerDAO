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
    "nav.individuals": "面向个人",
    "nav.partners": "面向伙伴",
    "nav.community": "社区",
    "nav.resources": "资源中心",
    "nav.join": "加入社区",
    "nav.login": "登录",
    "nav.chooseLogin": "选择登录方式",
    "nav.googleEmail": "谷歌邮箱",
    "nav.connectWallet": "连接钱包",

    // 邮箱连接
    "email.connect": "连接邮箱",
    "email.connected": "已连接",
    "email.connectTitle": "连接邮箱",
    "email.placeholder": "请输入你的邮箱",
    "email.confirm": "确认连接",
    "email.connecting": "连接中...",
    "email.invalid": "请输入有效的邮箱地址",

    // 简介
    "profile.points": "积分",
    "profile.viewProfile": "我的简介",
    "profile.logout": "登出",

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
    "problem.global.title": "全球癌症发病率上升，尤其在年轻群体中",
    "problem.global.description": "全球癌症发病率上升，尤其在年轻群体中",
    "problem.global.point1": "大约有 20% 的人将罹患癌症，其中约 10% 会因此离世",
    "problem.global.point2":
      "早发性癌症（50岁以下）的发病率在 1990 年至 2019 年间增加了 79.1%",
    "problem.knowledge.title": "公众在癌症预防和治疗方面知识和支持不足",
    "problem.knowledge.description": "公众在癌症预防和治疗方面知识和支持不足",
    "problem.knowledge.point1": "健康管理及相关数据的知识和工具有限",
    "problem.knowledge.point2": "难以获得创新的癌症预防和治疗方法",
    "problem.knowledge.point3":
      '公众和患者通常被视为"顾客"，限制了积极参与创新',
    "problem.innovation.title": "机构和企业创新缓慢且成本高昂",
    "problem.innovation.description": "机构和企业创新缓慢且成本高昂",
    "problem.innovation.point1":
      "数据碎片化、孤立，缺乏标准化和共享，限制了 AI 驱动创新的发展",
    "problem.innovation.point2": "获取公众和患者的成本高昂",

    // 生态系统部分
    "ecosystem.title": "CancerDAO 的解决方案",
    "ecosystem.subtitle": "CancerDAO 生态系统由 AI 驱动的癌症支持平台构成，该平台利用数据建立区块链医疗 ID，进而为去中心化癌症数据库贡献数据，最终目标是开发 AI 驱动的癌症疗法和筛查，共同推动癌症预防和治疗的创新与发展。",

    // 解决方案部分
    "solution.title": "我们的解决方案",
    "solution.subtitle": "通过三大核心支柱，构建一个全面的癌症防治生态系统",
    "solution.core.title": "核心价值循环",
    "solution.core.patient.title":"以患者为核心的生态系统",
    "solution.core.patient.content":"CancerDAO 正在打造一个以患者和公众为核心的生态系统，汇聚包括普通大众在内的所有利益相关方，形成抗击癌症的统一战线。",
    "solution.core.web3.title":"Web3 技术与 AI 驱动",
    "solution.core.web3.content":"CancerDAO 运用 Web3 技术和基础设施，构建去中心化的癌症数据库，以此为基础开发开源、AI 驱动的解决方案，致力于个性化诊疗与癌症预防。",
    "solution.core.finance.title":"可持续金融体系",
    "solution.core.finance.content":"此外，CancerDAO 正在试点运行一套可持续的金融体系，通过其原生代币促进社区支持、激励参与，并确保开源创新成果始终面向公众，造福社会。",

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
    "product.trial.button": "立即试用",

    // 订阅
    "subscribe.title": "订阅更新",
    "subscribe.subtitle": "第一时间获取 CancerDAO PILL 的最新进展和发布信息",
    "subscribe.placeholder": "输入您的邮箱地址",
    "subscribe.button": "订阅",
    "subscribe.subscribing": "订阅中...",


    // 社区统计部分
    "community.title": "我们的全球影响力",
    "community.subtitle": "与我们共同构建无癌世界，数据见证我们的集体力量",
    "community.members.title": "社区成员",
    "community.members.count": "2,000+",
    "community.members.label": "全球贡献者",
    "community.data.title": "数据贡献",
    "community.data.count": "500+",
    "community.data.label": "健康记录",
    "community.ai.title": "AI 模型",
    "community.ai.count": "95%",
    "community.ai.label": "准确率",
    "community.join.discord": "加入Discord社区",
    "community.join.twitter": "关注我们的Twitter",
    "community.join.telegram": "加入Telegram群组",


    // 合作伙伴
    "partners.title": "我们的合作伙伴",
    "partners.subtitle": "欢迎各类组织加入，共同推动创新",
    "partners.join_us": "成为我们的合作伙伴",
    "partners.we_found": "我们正在寻找志同道合的机构和组织，共同构建去中心化的癌症预防与治疗生态系统",
    "partners.collaboration": "了解合作机会",


    // 团队
    "team.title": "我们的团队",
    "team.subtitle": "一支来自顶尖机构的跨学科专家团队",
    "team.member.michael.role": "联合创始人，科学顾问委员会主任",
    "team.member.michael.expertise1": "香港城市大学创新与企业高级副校长",
    "team.member.michael.expertise2": "HK Tech 300 主任",
    "team.member.michael.expertise3": "DeSAI 实验室联合创始人",
    "team.member.yosean.role": "联合创始人，总裁",
    "team.member.yosean.expertise1": "哈佛大学生物医学科学博士",
    "team.member.yosean.expertise2": "香港城市大学研究助理教授",
    "team.member.yosean.expertise3": "DeSAI 实验室联合创始人、主任",
    "team.member.zhiwei.role": "联合创始人，首席技术官",
    "team.member.zhiwei.expertise1": "浙江大学人工智能健康博士",
    "team.member.zhiwei.expertise2": "BioLinkX 创始人",
    "team.member.aspire.role": "业务负责人",
    "team.member.jennifer.role": "市场负责人",
    "team.member.jonathan.role": "生态系统负责人",
    "team.member.daqi.role": "社区负责人",
    "team.learn.more": "了解更多",

    // About页面团队成员职位翻译
    "about.team.title.michael": "联合创始人、科学顾问委员会主任",
    "about.team.title.yosean": "联合创始人、总裁",
    "about.team.title.zhiwei": "联合创始人、首席技术官",
    "about.team.title.aspire": "商务主管",
    "about.team.title.jennifer": "市场主管",
    "about.team.title.jonathan": "生态主管",
    "about.team.title.daqi": "社区主管",

    // About页面团队成员角色详细信息翻译
    "about.team.role.michael":
      "高级副总裁（创新与企业）\n香港城市大学\nHK Tech 300 主任\nDeSAI Lab 联合创始人",
    "about.team.role.yosean":
      "哈佛生物医学科学博士\n研究助理教授\n香港城市大学\nDeSAI Lab 联合创始人、主任",
    "about.team.role.zhiwei": "浙江大学\nAI4Health 博士\nBioLinkX 创始人",

    // About页面
    "about.title": "关于我们",
    "about.hero.description":
      "我们是由科学家、技术专家和远见者组成的全球社区，团结于一个使命：创造一个癌症不再是死刑的世界。通过AI、区块链技术和集体智慧的力量，我们正在革新癌症的预防、检测和治疗方式。",
    "about.hero.tagline": "共同努力，我们正在通过科学构建希望。",
    "about.mission.title": "我们的使命",
    "about.mission.subtitle": "通过创新、协作和不懈决心改变癌症护理。",
    "about.vision.title": "我们的愿景",
    "about.vision.description":
      "我们设想一个每个人都能获得个性化、AI驱动的癌症预防和治疗的未来。一个医疗数据安全、透明并服务于更大利益的世界。在这个世界里，突破性发现通过全球合作得到加速，没有人独自面对癌症。",
    "about.values.title": "我们的核心价值观",
    "about.values.subtitle":
      "这些原则指导着我们所做的一切和我们做出的每一个决定。",
    "about.team.title": "我们的团队",
    "about.team.subtitle": "认识推动我们使命向前发展的远见者和专家。",
    "about.team.achievements": "成就",

    // Footer页脚翻译
    "footer.description":
      "与公众共建一个无癌世界。通过AI、区块链和社区力量，革新癌症的预防与治疗。",
    "footer.quickLinks": "快速链接",
    "footer.resources": "资源",
    "footer.whitepaper": "白皮书",
    "footer.contactUs": "联系我们",
    "footer.privacy": "隐私政策",
    "footer.terms": "服务条款",
    "footer.language": "语言",
    "footer.copyright": "© 2025 CancerDAO. 保留所有权利.",
    "footer.tagline": "每个人都值得拥有没有癌症的生活",

    "about.cta.title": "加入我们的使命",
    "about.cta.description":
      "无论您是研究员、开发者、患者，还是仅仅是相信我们事业的人，在我们的社区中都有您的位置。",
    "about.cta.join": "加入我们的社区",
    "about.cta.learn": "了解更多",

    // About页面联系表单
    "about.contact.title": "联系我们",
    "about.contact.form.description":
      "若有疑问，请填写以下表单，我们的团队将在第一时间与您联系。",
    "about.contact.name": "您的姓名",
    "about.contact.email": "邮箱地址",
    "about.contact.subject": "主题",
    "about.contact.organization": "机构/组织",
    "about.contact.phone": "联系电话",
    "about.contact.message": "您的留言",
    "about.contact.privacy":
      "我同意 CancerDAO 根据隐私政策处理我的个人信息并与我联系。",
    "about.contact.submit": "提交信息",
    "about.contact.submitting": "提交中...",
    "about.contact.placeholder.name": "请输入您的姓名",
    "about.contact.placeholder.email": "请输入您的邮箱地址",
    "about.contact.placeholder.subject": "请选择主题",
    "about.contact.placeholder.organization": "请输入您的机构或组织名称",
    "about.contact.placeholder.phone": "请输入联系电话",
    "about.contact.placeholder.message": "请输入您的留言",
    "about.contact.subject.general": "一般咨询",
    "about.contact.subject.technical": "技术支持",
    "about.contact.subject.partnership": "合作咨询",
    "about.contact.subject.media": "媒体/PR",
    "about.contact.subject.other": "其他",
    "about.contact.other.title": "或通过以下方式联系我们",
    "about.contact.official.email": "官方邮箱",
    "about.contact.social.media": "社交媒体",
    "about.contact.response.time": "响应时间",
    "about.contact.response.desc":
      "我们通常在 24 小时内回复您的咨询。紧急事务请直接发送邮件至官方邮箱。",

    // Resources页面
    "resources.title": "资源中心",
    "resources.subtitle": "探索我们的知识库、教育资源和常见问题解答",
    "resources.blog.title": "博客与文章",
    "resources.blog.subtitle": "深入了解癌症预防、AI技术和区块链医疗的最新见解",
    "resources.insights.title": "科普知识",
    "resources.insights.subtitle": "权威医疗专家为您解答癌症防治的关键问题",
    "resources.faq.title": "常见问题",
    "resources.faq.subtitle": "快速找到您关心问题的答案",
    "resources.search.placeholder": "搜索问题...",
    "resources.search.button": "搜索",
    "resources.contact.title": "还有其他问题？",
    "resources.contact.subtitle":
        "如果您没有找到所需的信息，请随时联系我们的团队",
    "resources.contact.button": "联系我们",
    "resources.community.button": "加入社区讨论",
    "resources.blog1.title": "沃伦·巴菲特战胜前列腺癌：健康是最佳投资，早期筛查是关键",
    "resources.blog1.content": "股神沃伦·巴菲特在81岁时被诊断出早期前列腺癌后，通过每年进行PSA检测的早期发现和为期6周的放射治疗，最终完全康复，并在93岁高龄仍保持健康。",
    "resources.blog2.title": "约翰·韦恩的抗癌之路：吸烟的警示与硬汉的韧性",
    "resources.blog2.content": "传奇演员约翰·韦恩在1964年因长期大量吸烟被诊断出晚期肺癌的经历。他最初因担心形象而隐瞒病情，后转变为积极的癌症意识和反吸烟运动倡导者，尽管付出了切除左肺和四根肋骨的代价。",
    "resources.blog3.title": "胰腺癌的快速癌症预防提示",
    "resources.blog3.content": "胰腺癌预防关键在于针对家族史、糖尿病、慢性胰腺炎等高风险人群进行早期筛查和生活方式干预。了解如何识别风险因素并采取有效的预防措施。",
    "resources.blog4.title": "与 DeSci 对抗乳腺癌：如果安吉丽娜·朱莉早点知道就好了",
    "resources.blog4.content": "乳腺癌作为女性常见癌症，有激素受体阳性、HER2阳性和三阴性乳腺癌三种主要类型，预后和治疗方案各异。了解安吉丽娜·朱莉的预防性手术选择背后的科学依据。",
    "resources.knowledge1.title": "癌症治疗的突破",
    "resources.knowledge1.content": "这个非常规的案例研究强调了溶瘤病毒疗法作为新辅助治疗方式的潜力。",
    "resources.knowledge2.title": "高糖摄入量如何增加癌症风险",
    "resources.knowledge2.content": "高糖摄入量如何通过四种生理机制增加癌症风险：血糖升高、炎症反应、氧化应激和肥胖相关的激素失衡。",
    "resources.knowledge3.title": "癌症免疫治疗的突破",
    "resources.knowledge3.content": "癌症免疫治疗的突破！Monash 和 Southampton 的研究人员发现 XPO1 蛋白能吸引自然杀伤（NK）细胞，提高癌症患者的生存率。",
    "resources.faq.categories.platform": "平台使用",
    "resources.faq.categories.tech": "技术原理",
    "resources.faq.categories.privacy": "数据隐私",
    "resources.faq.categories.community": "社区参与",
    "resources.faq.questions.q1.question": "如何开始使用CancerDAO平台？",
    "resources.faq.questions.q1.answer": "您可以通过访问我们的官方网站注册账户，下载CancerDAO PILL应用程序，然后按照引导步骤完成个人资料设置。我们的AI医疗助手将帮助您开始健康数据管理。",
    "resources.faq.questions.q2.question": "CancerDAO PILL支持哪些类型的医疗数据？",
    "resources.faq.questions.q2.answer": "我们的平台支持多种类型的医疗数据，包括实验室检查报告、影像学报告、出院小结、用药记录、基因检测结果等。AI系统能够智能识别和解读这些不同格式的医疗文档。",
    "resources.faq.questions.q3.question": "如何上传和管理我的健康数据？",
    "resources.faq.questions.q3.answer": "您可以通过应用程序的上传功能添加医疗文档，系统会自动进行AI解析和分类。所有数据都会按时间顺序整理在您的个人健康时间轴中，方便查看和管理。",
    "resources.faq.questions.q4.question": "CancerDAO的AI技术如何工作？",
    "resources.faq.questions.q4.answer": "我们的AI系统基于深度学习和自然语言处理技术，能够识别和解析各种医疗文档。通过训练大量的医疗数据，AI能够提取关键信息，进行风险评估，并提供个性化的健康建议。",
    "resources.faq.questions.q5.question": "区块链技术在平台中的作用是什么？",
    "resources.faq.questions.q5.answer": "区块链技术确保您的医疗数据具有不可篡改性和可追溯性。每次数据的访问和使用都会被记录在区块链上，您可以完全控制谁可以访问您的数据，以及如何使用这些数据。",
    "resources.faq.questions.q6.question": "什么是全同态加密(FHE)？",
    "resources.faq.questions.q6.answer": "全同态加密是一种先进的加密技术，允许在不解密数据的情况下直接对加密数据进行计算。这意味着研究人员可以在您的数据保持完全加密的状态下进行分析，确保隐私安全。",
    "resources.faq.questions.q7.question": "我的数据安全吗？",
    "resources.faq.questions.q7.answer": "是的，我们采用最高级别的安全措施保护您的数据。包括端到端加密、区块链技术、全同态加密等多重保护机制，确保您的健康数据始终安全可控。",
    "resources.faq.questions.q8.question": "我可以控制谁访问我的数据吗？",
    "resources.faq.questions.q8.answer": "绝对可以。您拥有数据的完全控制权，可以决定是否授权特定的研究机构或AI模型访问您的匿名化数据。所有访问都需要您的明确同意。",
    "resources.faq.questions.q9.question": "如果我想删除我的数据怎么办？",
    "resources.faq.questions.q9.answer": "您有权随时删除您的个人数据。我们提供完整的数据删除功能，确保您的数据从我们的系统中完全移除。但请注意，已经匿名化用于研究的数据可能无法完全撤回。",
    "resources.faq.questions.q10.question": "如何加入CancerDAO社区？",
    "resources.faq.questions.q10.answer": "您可以通过我们的Discord服务器、Twitter等社交平台加入我们的社区。我们定期举办线上活动、研讨会和开发者聚会，欢迎所有对癌症防治有兴趣的人参与。",
    "resources.faq.questions.q11.question": "我可以为项目做出什么贡献？",
    "resources.faq.questions.q11.answer": "有多种方式可以贡献：分享您的健康数据支持研究、参与社区讨论、提供反馈建议、参与开发活动、或者帮助传播项目理念。每种贡献都对我们的使命很重要。",
    "resources.faq.questions.q12.question": "社区活动有哪些？",
    "resources.faq.questions.q12.answer": "我们定期举办各种活动，包括AI医疗创新峰会、区块链健康数据研讨会、社区开发者马拉松、患者支持网络聚会等。请关注我们的社交媒体获取最新活动信息。",


    // Community页面
    "community.hero.title": "您从不孤单，我们与您同行",
    "community.hero.subtitle":
      "在这里，您将找到理解、支持和希望。无论您是患者、家属还是关心健康的朋友，我们都欢迎您的加入。",
    "community.support.title": "社区支持：您从不孤单，我们与您同行",
    "community.support.description":
      "在 CancerDAO 社区，我们深知面对癌症时内心的恐惧和无助。但您要知道，您并不孤单。我们的社区就像一个温暖的大家庭，每个成员都在用自己的方式给予关爱和支持。",
    "community.values.title": "社区价值观",
    "community.stories.title": "倾听他们的声音：社区互助真实故事",
    "community.forum.introduce":"在我们的社区论坛中，成员们分享真实的经历、互相支持，并讨论癌症研究的最新进展。",
    "community.forum.open":"在新窗口中打开论坛",
    "community.events.title": "社区活动与支持",
    "community.join.title.main":
      "别再独自面对，加入 CancerDAO 社区，与我们共同抗击癌症，拥抱健康！",
    "community.join.subtitle.main":
      "无论您是患者、家属、医疗专业人士还是关心健康的普通人，我们的社区都欢迎您的加入。在这里，您将找到理解、支持和希望。",
    "community.join.button.main": "立即加入社区",
    "community.join.discord.button": "访问Discord社区",
    "community.join.telegram.button": "加入Telegram群组",

    "community.join.title":
      "别再独自面对，加入 CancerDAO 社区，与我们共同抗击癌症，拥抱健康！",
    "community.join.subtitle":
      "无论您是患者、家属、医疗专业人士还是关心健康的普通人，我们的社区都欢迎您的加入。在这里，您将找到理解、支持和希望。",
    "community.stats.title": "我们的社区力量",
    "community.stats.subtitle": "数字背后是每一个真实的故事和坚定的信念",
    "community.stats.members": "活跃成员",
    "community.stats.stories": "分享故事",
    "community.stats.volunteers": "专业志愿者",
    "community.stats.support": "社区支持",
    "community.activities.title": "社区活动",
    "community.activities.subtitle":
      "参与我们的各种活动，与社区成员一起学习、成长和互助",
    "community.activities.event1.status": "已结束",
    "community.activities.event1.title": "Cancer DAO logo 社区投票",
    "community.activities.event1.description":
      "投票赢取 USDT！ 🧬 \n我们需要您的帮助来选择完美的品牌标志！1 名获胜者将获得 $25 USDT 的奖励！",
    "community.activities.event1.participants": "190人",
    "community.activities.event1.format": "线上",
    "community.activities.event2.status": "已结束",
    "community.activities.event2.title": "DeSci 社区线下见面会",
    "community.activities.event2.description":
      "🏡 DeSci 社区，集结！\nCancerDAO 将于 3 月 15 日在上海举办 #DeSci Builders Meetup！",
    "community.activities.event2.participants": "20-30人",
    "community.activities.event2.format": "上海",
    "community.activities.event3.status": "已结束",
    "community.activities.event3.title": "DeSci AMA",
    "community.activities.event3.description":
        "🧪 DeSci AMA 来了！加入我们，与 @commondotxyz @nobleblocks @Genpharmachain 进行精彩的讨论，讨论将患者数据标记为 RWA 及其彻底改变癌症研究的潜力。",
    "community.activities.event3.format": "线上",
    "community.activities.event4.status": "已结束",
    "community.activities.event4.title": "DeSAI Meetup：科学与医疗保健创新",
    "community.activities.event4.description":
        "很高兴邀请您参加我们的 DeSAI Meetup！本次活动将聚焦科学与医疗保健领域的创新，深入探讨去中心化科学（DeSci）与人工智能（AI）的融合。 无论您是行业专家、研究人员，还是对未来医疗科技充满热情的朋友，我们都诚挚地欢迎您的到来。",
    "community.activities.event4.format": "香港城市大学",

    // Resources页面新增翻译
    "resources.read.more": "阅读全文",
    "resources.learn.more": "了解更多",
    "resources.faq.search.placeholder": "搜索问题...",
    "resources.faq.viewAll": "查看所有问题",


    // Toast消息
    "toast.subscribe.success.title": "订阅成功",
    "toast.subscribe.success.description":
      "感谢您的关注！我们会及时通知您最新进展。",
    "toast.subscribe.error.title": "订阅失败",
    "toast.subscribe.error.description": "请稍后重试",


    // Solution页面CTA
    "solution.cta.title": "准备好开始您的健康之旅了吗？",
    "solution.cta.subtitle":
      "加入我们的全球社区，与志同道合的人一起为无癌症世界而努力。",
    "solution.cta.learn.more": "了解更多",

    // Solution页面三大支柱
    "solution.pillars.title": "三大支柱：构建完整的癌症防治生态系统",
    "solution.ai.pillar.point1": "个性化健康评估与预测",
    "solution.ai.pillar.point2": "智能治疗方案推荐",
    "solution.ai.pillar.point3": "持续健康监测与管理",

    // AI赋能健康部分
    "ai.powered.health.title": "AI 赋能健康：智能洞察，精准呵护",
    "ai.powered.health.description":
      "通过先进的人工智能技术，CancerDAO 能够解读复杂的非结构化病历，构建个性化健康档案，提供精准的健康建议，并智能匹配最适合的临床试验机会。",
    "ai.analysis.process.title": "AI 解析流程演示",
    "ai.analysis.step1": "上传病历",
    "ai.analysis.step2": "AI 智能解析",
    "ai.analysis.step3": "结构化数据",
    "ai.analysis.step4":"个性化AI健康顾问",
    "ai.agent.matrix.title": "AI Agent 产品一览",
    "ai.agent.report.name": "CancerDAO Report Bot",
    "ai.agent.report.description":
      "智能解析医疗报告，提供个性化健康洞察和风险评估",
    "ai.agent.report.status": "已上线",
    "ai.agent.ama.name": "CancerDAO AMA Bot",
    "ai.agent.ama.description":
      "共同构建一个没有癌症的世界，回答各种癌症相关问题",
    "ai.agent.ama.status": "已上线",

    "blockchain.title":"区块链与数据主权：构建可信的数字健康未来",
    "blockchain.why.title":"为什么我们需要区块链？",
    "blockchain.why.content":"区块链的去中心化、不可篡改和透明特性，能够在多方参与的健康价值网络中建立起无需信任的协作机制，确保用户对其健康数据拥有绝对主权，并保障数据和价值在网络中的公开透明流转。",
    "blockchain.technology.title":"核心技术解释与图示",
    "blockchain.technology.datanft.title":"Data NFT",
    "blockchain.technology.datanft.content":"Data NFT 是一种独特的数字代币，它将您的个人健康数据转化为真正属于您的数字资产。数据提供者首先提供加密的健康数据，这些数据随后被记录在区块链上并进行通证化，生成独特的Data NFT。这些Data NFT代表了数据的唯一性、所有权和可追溯性，并可以在市场中进行交易。通过这种方式，数据提供者能够控制谁可以访问他们的数据，并通过数据使用费和产品版税的形式获得收益，甚至从平台奖励中受益。",
    "blockchain.technology.fhe.title":"全同态加密 (FHE)",
    "blockchain.technology.fhe.content":"全同态加密 (FHE) 是一项突破性技术，它允许在不解密数据的情况下直接对加密数据执行计算。这意味着，即使您的生物和医疗数据处于加密状态，人工智能模型或研究人员仍然可以对其进行分析和处理，而数据本身的原始形式始终是保密的，不会被泄露。FHE 彻底消除了数据在使用过程中的隐私风险，确保了您的敏感健康信息在被用于生成洞察或开发新疗法时，其隐私性得到最高级别的保护。",
    "blockchain.technology.did.title":"去中心化身份 (DID)",
    "blockchain.technology.did.content":"去中心化身份（DID）使用户能够在没有中心化机构的情况下拥有并完全控制自己的数字身份。DID 允许用户管理自己的身份信息，并用于对数据访问进行授权。这极大地增强了用户对其数据主权的控制，保障了隐私和安全。",

    "communitydriven.title":"社区驱动生态：共建、共享、共赢的未来",
    "communitydriven.content":"社区在CancerDAO生态系统中占据核心地位。社区成员不仅仅是用户，更是共建者、贡献者、所有者，共同推动癌症防治事业的发展。",
    "communitydriven.join":"社区参与方式",
    "communitydriven.join.health.title":"健康管理平台",
    "communitydriven.join.health.content":"为社区成员提供癌症护理和预防支持服务及相关产品（由社区成员付费）",
    "communitydriven.join.data.title":"数据和AI平台",
    "communitydriven.join.data.content":"支持生态系统业务合作伙伴的精准癌症治疗和筛查开发（由合作伙伴付费）",
    "communitydriven.join.token.title":"CancerDAO代币",
    "communitydriven.join.token.content":"作为生态系统内的流通代币，实现价值传递和治理激励",
    "communitydriven.model.title":"生态飞轮模型",
    "communitydriven.model.content":"CancerDAO生态飞轮展现了社区、产品服务、数据AI和代币之间的相互促进关系，形成可持续发展的生态系统。",

  },
  en: {
    // 导航栏
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.solution": "Solution",
    "nav.individuals": "For Individuals",
    "nav.partners": "For Partners",
    "nav.community": "Community",
    "nav.resources": "Resources",
    "nav.join": "Join Community",
    "nav.login": "Log in",
    "nav.chooseLogin": "Choose Log in",
    "nav.googleEmail": "Google Email",
    "nav.connectWallet": "Connect Wallet",


    // Email Connect
    "email.connect": "Connect Email",
    "email.connected": "Email Connected",
    "email.connectTitle": "Connect Your Email",
    "email.placeholder": "Enter your email address",
    "email.confirm": "Confirm",
    "email.connecting": "Connecting...",
    "email.invalid": "Please enter a valid email address",

    // profile
    "profile.points": "Points",
    "profile.viewProfile": "My Profile",
    "profile.logout": "Log out",

    // 首页
    "hero.title": "Revolutionize Cancer Prevention and Care, with the Public",
    "hero.subtitle":
      "CancerDAO is a public-driven, AI and blockchain-powered personal autonomous cancer prevention and treatment platform, dedicated to providing accessible, trustworthy, and precise cancer prevention and treatment services for individuals and society.",
    "hero.cta1": "Learn Our Solution",
    "hero.cta2": "Join Our Community",

    // 问题部分
    "problem.title": "The Challenges We Face",
    "problem.subtitle":
      "Cancer is becoming a major threat to human health, and existing prevention and treatment systems have many limitations.",
    "problem.global.title":
      "Rising Global Cancer Incidence, especially among younger populations",
    "problem.global.description":
      "Rising global cancer incidence, especially among younger populations",
    "problem.global.point1":
      "Approximately 20% of people will develop cancer, and about 10% will die from it.",
    "problem.global.point2":
      "The incidence of early-onset cancer (under 50) increased by 79.1% between 1990 and 2019.",
    "problem.knowledge.title":
      "Public Lacks Knowledge and Support in Cancer Prevention and Treatment",
    "problem.knowledge.description":
      "The public lacks sufficient knowledge and support in cancer prevention and treatment.",
    "problem.knowledge.point1":
      "Limited knowledge and tools for health management and related data.",
    "problem.knowledge.point2":
      "Difficulty in accessing innovative cancer prevention and treatment methods.",
    "problem.knowledge.point3":
      "The public and patients are often seen as 'customers,' limiting active participation in innovation.",
    "problem.innovation.title":
      "Institutions and Enterprises Face Slow and Costly Innovation",
    "problem.innovation.description":
      "Institutional and corporate innovation is slow and expensive.",
    "problem.innovation.point1":
      "Fragmented and isolated data, lack of standardization and sharing, limiting the development of AI-driven innovation.",
    "problem.innovation.point2":
      "High costs of acquiring public and patient data.",

    // 生态系统部分
    "ecosystem.title": "CancerDAO's Solution",
    "ecosystem.subtitle": "Building a comprehensive cancer prevention and treatment ecosystem with patient-centered, technology-empowered, and community-driven approach",

    // 解决方案部分
    "solution.title": "Our Solution",
    "solution.subtitle":
      "Building a comprehensive cancer prevention and treatment ecosystem through three core pillars.",
    "solution.core.title": "Core Value Cycle",
    "solution.core.patient.title":"Patient-centric ecosystem",
    "solution.core.patient.content":"CancerDAO is building a patient- and public-centered ecosystem that unites all stakeholders, including the general population, to form a united front against cancer.",
    "solution.core.web3.title":"Powered by Web3&AI Technologies",
    "solution.core.web3.content":"CancerDAO leverages Web3 technologies and infrastructure to build a decentralized cancer database, upon which it develops open-source, AI-driven solutions dedicated to personalized diagnosis/treatment and cancer prevention.",
    "solution.core.finance.title":"Sustainable Financial System",
    "solution.core.finance.content":"Moreover, CancerDAO is piloting a sustainable financial system that leverages its native token to foster community support, incentivize participation, and ensure open-source innovations remain publicly accessible for social benefit.",

    "solution.ai.title": "AI Platform",
    "solution.ai.description": "Intelligent Analysis & Prediction",
    "solution.blockchain.title": "Blockchain Medical ID",
    "solution.blockchain.description": "Data Security & Sovereignty",
    "solution.decentralized.title": "Decentralized Database",
    "solution.decentralized.description": "Sharing & Collaboration",
    "solution.therapy.title": "AI-Driven Therapies",
    "solution.therapy.description": "Precision Treatment Plans",
    "solution.ai.pillar.title": "AI Empowerment",
    "solution.ai.pillar.description":
      "Through AI algorithms, CancerDAO integrates and analyzes multi-dimensional user data (genomic, clinical, lifestyle, etc.), providing personalized risk assessments and prevention advice for healthy individuals, and treatment assistance and rehabilitation management for cancer patients.",
    "solution.ai.pillar.button": "Learn More About AI Empowerment",
    "solution.blockchain.pillar.title": "Blockchain Assurance",
    "solution.blockchain.pillar.description":
      "CancerDAO builds a user-controlled data infrastructure, based on blockchain and privacy-preserving computation technologies, to enable controllable, traceable, and incentivized data sharing, promoting scientific research and new drug development.",
    "solution.blockchain.pillar.button":
      "Learn More About Blockchain Assurance",
    "solution.community.pillar.title": "Community-Driven",
    "solution.community.pillar.description":
      "CancerDAO encourages the public to earn rewards by contributing data, participating in community governance, and engaging in science popularization activities, truly realizing a 'patient-centric' public health innovation ecosystem.",
    "solution.community.pillar.button": "Learn More About Community-Driven",

    // 产品预览
    "product.title": "Core Product Preview - CancerDAO PILL",
    "product.subtitle":
      "Explore CancerDAO PILL, your personalized anti-cancer companion.",
    "product.ai.analysis": "AI Medical Record Interpretation",
    "product.ai.interpretation.title":
      "AI-Driven Smart Medical Record Interpretation",
    "product.ai.interpretation.description":
      "Upload your medical images and text reports. CancerDAO PILL utilizes advanced AI technology to quickly extract key information, interpret complex medical terms, and provide personalized risk insights and health advice, helping you gain a more thorough understanding of your health status.",
    "product.timeline": "Health Timeline",
    "product.timeline.item1": "March 2023: First Physical Examination",
    "product.timeline.item2": "June 2023: Started Genetic Testing",
    "product.timeline.feature.title": "Your Exclusive Health Timeline",
    "product.timeline.feature.description":
      "CancerDAO PILL builds a comprehensive personal health timeline for you, integrating every examination, medication, and daily health data. You can clearly track your health journey, manage personal data, and review it at any time, providing a reliable basis for health decisions.",

    "product.feature1.title": "AI-Driven Smart Medical Record Interpretation",
    "product.feature1.description":
      "Upload your medical images and text reports. CancerDAO PILL utilizes advanced AI technology to quickly extract key information, interpret complex medical terms, and provide personalized risk insights and health advice, helping you gain a more thorough understanding of your health status.",
    "product.feature2.title": "Your Exclusive Health Timeline",
    "product.feature2.description":
      "CancerDAO PILL builds a comprehensive personal health timeline for you, integrating every examination, medication, and daily health data. You can clearly track your health journey, manage personal data, and review it at any time, providing a reliable basis for health decisions.",

    "product.learn.more": "Learn More",
    "product.trial.button": "Try Now",

    // 订阅
    "subscribe.title": "Subscribe for Updates",
    "subscribe.subtitle":
      "Get the latest progress and release information of CancerDAO PILL firsthand.",
    "subscribe.placeholder": "Enter your email address",
    "subscribe.button": "Subscribe",
    "subscribe.subscribing": "Subscribing...",


    // Solution页面CTA
    "solution.cta.title": "Ready to Start Your Health Journey?",
    "solution.cta.subtitle":
      "Join our global community and work with like-minded people for a cancer-free world.",
    "solution.cta.learn.more": "Learn More",

    // Solution页面三大支柱
    "solution.pillars.title":
      "Three Pillars: Building a Complete Cancer Prevention and Treatment Ecosystem",
    "solution.ai.pillar.point1": "Personalized Health Assessment & Prediction",
    "solution.ai.pillar.point2": "Intelligent Treatment Recommendations",
    "solution.ai.pillar.point3": "Continuous Health Monitoring & Management",

    // AI赋能健康部分
    "ai.powered.health.title":
      "AI-Powered Health: Intelligent Insights, Precise Care",
    "ai.powered.health.description":
      "Through advanced artificial intelligence technology, CancerDAO can interpret complex unstructured medical records, build personalized health profiles, provide precise health recommendations, and intelligently match the most suitable clinical trial opportunities.",
    "ai.analysis.process.title": "AI Analysis Process Demo",
    "ai.analysis.step1": "Upload Medical Record",
    "ai.analysis.step2": "AI Intelligent Analysis",
    "ai.analysis.step3": "Structured Data",
    "ai.analysis.step4":"Personalized AI Health Advisor",
    "ai.agent.matrix.title": "AI Agent Product Overview",
    "ai.agent.report.name": "CancerDAO Report Bot",
    "ai.agent.report.description":
      "Intelligently analyze medical reports, provide personalized health insights and risk assessments",
    "ai.agent.report.status": "Live",
    "ai.agent.trial.name": "CancerDAO Trial Bot",
    "ai.agent.trial.description":
      "Intelligently match clinical trials, recommend the most suitable treatment options for patients",
    "ai.agent.trial.status": "In Development",
    "ai.agent.insight.name": "CancerDAO Insight Bot",
    "ai.agent.insight.description":
      "Based on the latest research, provide cutting-edge cancer prevention and treatment recommendations",
    "ai.agent.insight.status": "Coming Soon",
    "ai.agent.care.name": "CancerDAO Care Bot",
    "ai.agent.care.description":
      "24/7 health monitoring, providing personalized recovery and care guidance",
    "ai.agent.care.status": "Coming Soon",
    "ai.agent.research.name": "CancerDAO Research Bot",
    "ai.agent.research.description":
      "Assist medical research, accelerate new drug development and treatment plan optimization",
    "ai.agent.research.status": "In Development",
    "ai.agent.support.name": "CancerDAO Support Bot",
    "ai.agent.support.description":
      "Provide emotional support and community connections, helping patients through treatment challenges",
    "ai.agent.support.status": "Coming Soon",
    "ai.agent.clinical.name": "CancerDAO Clinical Bot",
    "ai.agent.clinical.description":
      "Clinical data analysis and pathology report interpretation, assisting doctor diagnostic decisions",
    "ai.agent.clinical.status": "In Development",
    "ai.agent.content.name": "CancerDAO Content Bot",
    "ai.agent.content.description":
      "Generate personalized health content, create professional medical education articles",
    "ai.agent.content.status": "Live",
    "ai.agent.longevity.name": "CancerDAO Longevity Bot",
    "ai.agent.longevity.description":
      "Professional advisor focused on cancer risk assessment, reducing cancer risk",
    "ai.agent.longevity.status": "In Development",
    "ai.agent.health.name": "CancerDAO Health Bot",
    "ai.agent.health.description":
      "Provide personalized dietary recommendations and lifestyle guidance for cancer patients",
    "ai.agent.health.status": "In Development",
    "ai.agent.ama.name": "CancerDAO AMA Bot",
    "ai.agent.ama.description":
      "Building a cancer-free world together, answering various cancer-related questions",
    "ai.agent.ama.status": "Live",

    "blockchain.title": "Blockchain and Data Sovereignty: Building a Trusted Digital Health Future",
    "blockchain.why.title": "Why Do We Need Blockchain?",
    "blockchain.why.content": "Blockchain's decentralized, tamper-proof, and transparent nature enables trustless collaboration mechanisms in multi-party health value networks. It ensures users maintain absolute sovereignty over their health data while guaranteeing open and transparent data/value flow across the network.",
    "blockchain.technology.title": "Core Technology Explanations and Diagrams",
    "blockchain.technology.datanft.title": "Data NFT",
    "blockchain.technology.datanft.content": "A Data NFT is a unique digital token that transforms your personal health data into truly ownable digital assets. Data providers first submit encrypted health data, which is then recorded on the blockchain and tokenized into unique Data NFTs. These NFTs represent data uniqueness, ownership, and traceability, and can be traded in marketplaces. This approach allows data providers to control access to their data while earning revenue through data usage fees, product royalties, and platform rewards.",
    "blockchain.technology.fhe.title": "Fully Homomorphic Encryption (FHE)",
    "blockchain.technology.fhe.content": "Fully Homomorphic Encryption (FHE) is a groundbreaking technology that enables direct computation on encrypted data without decryption. This means AI models or researchers can analyze and process your biometric/medical data while it remains encrypted, with the original data never exposed. FHE completely eliminates privacy risks during data usage, ensuring your sensitive health information receives the highest protection level when generating insights or developing new therapies.",
    "blockchain.technology.did.title": "Decentralized Identity (DID)",
    "blockchain.technology.did.content": "Decentralized Identity (DID) empowers users to own and fully control their digital identities without centralized authorities. DIDs allow users to manage identity information and authorize data access, significantly enhancing control over data sovereignty while safeguarding privacy and security.",

    "communitydriven.title": "Community-Driven Ecosystem: A Future of Co-Creation, Sharing, and Mutual Success",
    "communitydriven.content": "The community occupies a central position in CancerDAO's ecosystem. Members are not just users - they are co-builders, contributors, and owners who collectively advance cancer prevention and treatment initiatives.",
    "communitydriven.join": "Participation Pathways",
    "communitydriven.join.health.title": "Health Management Platform",
    "communitydriven.join.health.content": "Provides cancer care and preventive support services/products for community members (member-funded)",
    "communitydriven.join.data.title": "Data & AI Platform",
    "communitydriven.join.data.content": "Supports ecosystem partners in precision oncology and screening development (partner-funded)",
    "communitydriven.join.token.title": "CancerDAO Token",
    "communitydriven.join.token.content": "Serves as the ecosystem's utility token for value transfer and governance incentives",
    "communitydriven.model.title": "Ecosystem Flywheel Model",
    "communitydriven.model.content": "CancerDAO's ecosystem flywheel demonstrates the synergistic relationship between community, products/services, data/AI, and tokens - forming a sustainable development ecosystem.",


    "solution.blockchain.pillar.point1":
      "Global Expert & Patient Mutual Support Network",
    "solution.blockchain.pillar.point2": "Open Treatment Data Sharing",
    "solution.blockchain.pillar.point3":
      "Community Governance & Decision Participation",
    "solution.community.pillar.point1": "Data Ownership Fully Belongs to Users",
    "solution.community.pillar.point2":
      "Privacy Protection & Transparent Tracking",
    "solution.community.pillar.point3": "Incentive Mechanisms & Value Sharing",

    // 社区力量
    "community.power.title": "You're not ALONE",
    "community.power.subtitle":
      "Join our global community and work with like-minded people for a cancer-free world.",
    "community.global.title": "Global Community",
    "community.global.count": "2,000+",
    "community.global.label": "Active Members",

    // Community Statistics Section - Updated values
    "community.title": "Our Global Impact",
    "community.subtitle":
      "Join us in building a cancer-free world, with data demonstrating our collective strength",
    "community.data.title": "Health Data",
    "community.data.count": "500+",
    "community.data.label": "Anonymized Records",
    "community.members.title": "Community Members",
    "community.members.count": "2,000+",
    "community.members.label": "Global Contributors",
    "community.ai.title": "AI Accuracy",
    "community.ai.count": "95%",
    "community.ai.label": "Prediction Accuracy",


    "community.join.discord": "Join Discord Community",
    "community.join.twitter": "Follow us on Twitter",
    "community.join.telegram": "Join Telegram Group",


    // 合作伙伴
    "partners.title": "Our Partners",
    "partners.subtitle":
      "All types of organizations are welcome to join and jointly promote innovation.",
    "partners.join_us": "Become our Partner",
    "partners.we_found": "We are seeking like-minded institutions and organizations to jointly build a decentralized ecosystem for cancer prevention and treatment.",
    "partners.collaboration": "Explore Collaboration Opportunities",

    // 团队
    "team.title": "Our Team",
    "team.subtitle":
      "An interdisciplinary team of experts from top institutions",
    "team.member.michael.role": "Co-founder, SAB Director",
    "team.member.michael.expertise1":
      "Senior VP (Innovation & Enterprise) City University of Hong Kong",
    "team.member.michael.expertise2": "HK Tech 300 Director",
    "team.member.michael.expertise3": "DeSAI Lab Co-founder",
    "team.member.yosean.role": "Co-founder, President",
    "team.member.yosean.expertise1": "Harvard Biomedical Science PhD",
    "team.member.yosean.expertise2":
      "Research Assistant Professor City University of Hong Kong",
    "team.member.yosean.expertise3": "DeSAI Lab Co-founder, Director",
    "team.member.zhiwei.role": "Co-founder, CTO",
    "team.member.zhiwei.expertise1": "Zhejiang University AI4Health PhD",
    "team.member.zhiwei.expertise2": "BioLinkX Founder",
    "team.member.aspire.role": "Business Lead",
    "team.member.jennifer.role": "Marketing Lead",
    "team.member.jonathan.role": "Ecosystem Lead",
    "team.member.daqi.role": "Community Lead",
    "team.learn.more": "Learn More",

    // Toast消息
    "toast.subscribe.success.title": "Subscription Successful",
    "toast.subscribe.success.description":
      "Thank you for your interest! We will keep you updated on the latest progress.",
    "toast.subscribe.error.title": "Subscription Failed",
    "toast.subscribe.error.description": "Please try again later.",


    // About页面
    "about.title": "About CancerDAO",
    "about.hero.description":
      "We are a global community of scientists, technologists, and visionaries united by one mission: to create a world where cancer is no longer a death sentence. Through the power of AI, blockchain technology, and collective intelligence, we are revolutionizing how we prevent, detect, and treat cancer.",
    "about.hero.tagline": "Together, we are building hope through science.",
    "about.mission.title": "Our Mission",
    "about.mission.subtitle":
      "Transforming cancer care through innovation, collaboration, and unwavering determination.",
    "about.vision.title": "Our Vision",
    "about.vision.description":
      "We envision a future where every individual has access to personalized, AI-powered cancer prevention and treatment. A world where medical data is secure, transparent, and serves the greater good. Where breakthrough discoveries are accelerated through global collaboration, and where no one faces cancer alone.",
    "about.values.title": "Our Core Values",
    "about.values.subtitle":
      "These principles guide everything we do and every decision we make.",
    "about.team.title": "Our Team",
    "about.team.subtitle":
      "Meet the visionaries and experts driving our mission forward.",
    "about.team.achievements": "Achievements",

    // About页面团队成员职位翻译（英文）
    "about.team.title.michael": "Co-founder, SAB Director",
    "about.team.title.yosean": "Co-founder, President",
    "about.team.title.zhiwei": "Co-founder, CTO",
    "about.team.title.aspire": "Business Lead",
    "about.team.title.jennifer": "Marketing Lead",
    "about.team.title.jonathan": "Ecosystem Lead",
    "about.team.title.daqi": "Community Lead",

    // About页面团队成员角色详细信息翻译（英文）
    "about.team.role.michael":
      "Senior VP (Innovation & Enterprise)\nCity University of Hong Kong\nHK Tech 300 Director\nDeSAI Lab Co-founder",
    "about.team.role.yosean":
      "Harvard Biomedical Science PhD\nResearch Assistant Professor\nCity University of Hong Kong\nDeSAI Lab Co-founder, Director",
    "about.team.role.zhiwei":
      "Zhejiang University\nAI4Health PhD\nBioLinkX Founder",

    // Footer页脚翻译（英文）
    "footer.description":
      "Building a cancer-free world with the public. Revolutionizing cancer prevention and treatment through AI, blockchain, and community power.",
    "footer.quickLinks": "Quick Links",
    "footer.resources": "Resources",
    "footer.whitepaper": "Whitepaper",
    "footer.contactUs": "Contact Us",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.language": "Language",
    "footer.copyright": "© 2025 CancerDAO. All rights reserved.",
    "footer.tagline": "Everyone deserves a life without cancer",

    "about.cta.title": "Join Our Mission",
    "about.cta.description":
      "Whether you are a researcher, developer, patient, or simply someone who believes in our cause, there is a place for you in our community.",
    "about.cta.join": "Join Our Community",
    "about.cta.learn": "Learn More",

    // About页面联系表单
    "about.contact.title": "Contact Us",
    "about.contact.form.description":
      "Please fill out the following form and our team will contact you as soon as possible.",
    "about.contact.name": "Your Name",
    "about.contact.email": "Email Address",
    "about.contact.subject": "Subject",
    "about.contact.organization": "Organization/Institution",
    "about.contact.phone": "Phone Number",
    "about.contact.message": "Your Message",
    "about.contact.privacy":
      "I agree that CancerDAO may process my personal information and contact me in accordance with its Privacy Policy.",
    "about.contact.submit": "Submit Information",
    "about.contact.submitting": "Submitting...",
    "about.contact.placeholder.name": "Enter your name",
    "about.contact.placeholder.email": "Enter your email address",
    "about.contact.placeholder.subject": "Please select a subject",
    "about.contact.placeholder.organization":
      "Enter your organization or institution name",
    "about.contact.placeholder.phone": "Enter your phone number",
    "about.contact.placeholder.message": "Enter your message",
    "about.contact.subject.general": "General Inquiry",
    "about.contact.subject.technical": "Technical Support",
    "about.contact.subject.partnership": "Partnership Inquiry",
    "about.contact.subject.media": "Media/PR",
    "about.contact.subject.other": "Other",
    "about.contact.other.title": "Or contact us through the following methods",
    "about.contact.official.email": "Official Email",
    "about.contact.social.media": "Social Media",
    "about.contact.response.time": "Response Time",
    "about.contact.response.desc":
      "We typically respond to inquiries within 24 hours. For urgent matters, please send an email directly to our official email address.",

    // resources
    "resources.title": "Resource Center",
    "resources.subtitle": "Explore our knowledge base, educational resources and FAQs",
    "resources.blog.title": "Blog & Articles",
    "resources.blog.subtitle": "In-depth insights on cancer prevention, AI technology and blockchain healthcare innovations",
    "resources.insights.title": "Science Education",
    "resources.insights.subtitle": "Key cancer prevention and treatment questions answered by medical experts",
    "resources.faq.title": "FAQs",
    "resources.faq.subtitle": "Quick answers to your questions",
    "resources.search.placeholder": "Search questions...",
    "resources.search.button": "Search",
    "resources.contact.title": "Still have questions?",
    "resources.contact.subtitle": "Can't find what you need? Contact our team anytime",
    "resources.contact.button": "Contact Us",
    "resources.community.button": "Join Community Discussion",
    "resources.blog1.title": "Warren Buffett's Prostate Cancer Victory: Health as the Ultimate Investment, Early Screening is Key",
    "resources.blog1.content": "At age 81, investment legend Warren Buffett was diagnosed with early-stage prostate cancer. Through annual PSA testing that enabled early detection and a 6-week radiation treatment course, he achieved full recovery and maintains good health at 93.",
    "resources.blog2.title": "John Wayne's Cancer Journey: A Smoking Warning and the Tough Guy's Resilience",
    "resources.blog2.content": "The story of legendary actor John Wayne, diagnosed with advanced lung cancer in 1964 after chronic heavy smoking. Initially concealing his condition over image concerns, he later became an active cancer awareness advocate and anti-smoking campaigner - despite undergoing left lung and four rib removals.",
    "resources.blog3.title": "Quick Cancer Prevention Tips for Pancreatic Cancer",
    "resources.blog3.content": "Pancreatic cancer prevention focuses on early screening and lifestyle interventions for high-risk groups including those with family history, diabetes, or chronic pancreatitis. Learn to identify risk factors and implement effective preventive measures.",
    "resources.blog4.title": "Fighting Breast Cancer with DeSci: What Angelina Jolie Could Have Known Sooner",
    "resources.blog4.content": "As a common female cancer, breast cancer has three main types (hormone receptor-positive, HER2-positive, and triple-negative) with distinct prognoses and treatments. Understand the science behind Angelina Jolie's preventive surgery choice.",
    "resources.knowledge1.title": "Unconventional Case Study: Oncolytic Virus Therapy as Neoadjuvant Treatment",
    "resources.knowledge1.content": "This unconventional case study highlights the potential of oncolytic virus therapy as a neoadjuvant treatment approach.",
    "resources.knowledge2.title": "How High Sugar Intake Increases Cancer Risk",
    "resources.knowledge2.content": "High sugar consumption elevates cancer risk through four physiological mechanisms: elevated blood glucose, inflammatory responses, oxidative stress, and obesity-related hormonal imbalances.",
    "resources.knowledge3.title": "Breakthrough in Cancer Immunotherapy",
    "resources.knowledge3.content": "Cancer immunotherapy breakthrough! Researchers from Monash and Southampton discovered that XPO1 protein attracts natural killer (NK) cells, significantly improving survival rates in cancer patients.",
    "resources.faq.categories.platform": "Platform Usage",
    "resources.faq.categories.tech": "Technical Principles",
    "resources.faq.categories.privacy": "Data Privacy",
    "resources.faq.categories.community": "Community Engagement",
    "resources.faq.questions.q1.question": "How do I get started with CancerDAO platform?",
    "resources.faq.questions.q1.answer": "Register an account on our official website, download the CancerDAO PILL app, and complete your profile setup through guided steps. Our AI medical assistant will help you begin health data management.",
    "resources.faq.questions.q2.question": "What medical data types does CancerDAO PILL support?",
    "resources.faq.questions.q2.answer": "Our platform supports multiple medical data types including lab reports, imaging reports, discharge summaries, medication records, and genetic test results. The AI system intelligently recognizes and interprets these medical documents in various formats.",
    "resources.faq.questions.q3.question": "How do I upload and manage my health data?",
    "resources.faq.questions.q3.answer": "Add medical documents via the app's upload feature. The system automatically performs AI parsing and categorization, organizing all data chronologically in your personal health timeline for easy viewing and management.",
    "resources.faq.questions.q4.question": "How does CancerDAO's AI technology work?",
    "resources.faq.questions.q4.answer": "Our AI system utilizes deep learning and natural language processing to identify and analyze medical documents. Trained on extensive medical datasets, it extracts key information, conducts risk assessments, and provides personalized health recommendations.",
    "resources.faq.questions.q5.question": "What role does blockchain technology play?",
    "resources.faq.questions.q5.answer": "Blockchain ensures immutability and traceability of your medical data. All data access and usage are recorded on-chain, giving you full control over data access permissions and usage.",
    "resources.faq.questions.q6.question": "What is Fully Homomorphic Encryption (FHE)?",
    "resources.faq.questions.q6.answer": "FHE is advanced encryption technology enabling computations on encrypted data without decryption. Researchers can analyze your data while it remains fully encrypted, ensuring maximum privacy protection.",
    "resources.faq.questions.q7.question": "Is my data secure?",
    "resources.faq.questions.q7.answer": "Yes, we implement top-tier security measures including end-to-end encryption, blockchain technology, and FHE to ensure your health data remains secure and under your control.",
    "resources.faq.questions.q8.question": "Can I control data access?",
    "resources.faq.questions.q8.answer": "Absolutely. You retain full data sovereignty, deciding whether to authorize specific research institutions or AI models to access your anonymized data. All access requires your explicit consent.",
    "resources.faq.questions.q9.question": "How can I delete my data?",
    "resources.faq.questions.q9.answer": "You may delete personal data anytime. While we ensure complete removal from our systems, note that previously anonymized research data may be irretrievable as it's no longer personally identifiable.",
    "resources.faq.questions.q10.question": "How do I join CancerDAO community?",
    "resources.faq.questions.q10.answer": "Join through our Discord server, Twitter or other social platforms. We regularly host online events, workshops, and developer meetups - all are welcome to participate in cancer prevention initiatives.",
    "resources.faq.questions.q11.question": "How can I contribute?",
    "resources.faq.questions.q11.answer": "Contribute by: sharing health data for research, participating in discussions, providing feedback, joining development activities, or helping spread awareness. Every contribution advances our mission.",
    "resources.faq.questions.q12.question": "What community events are available?",
    "resources.faq.questions.q12.answer": "We host various events including: AI healthcare innovation summits, blockchain health data workshops, developer hackathons, and patient support meetups. Follow our social media for updates.",


    // Community页面
    "community.hero.title": "You Are Never Alone, We Walk With You",
    "community.hero.subtitle":
      "Here, you will find understanding, support, and hope. Whether you are a patient, family member, or friend who cares about health, we welcome you to join us.",
    "community.support.title":
      "Community Support: You Are Never Alone, We Walk With You",
    "community.support.description":
      "In the CancerDAO community, we deeply understand the fear and helplessness when facing cancer. But you should know that you are not alone. Our community is like a warm family, where every member gives care and support in their own way.",
    "community.values.title": "Community Values",
    "community.stories.title":
      "Listen to Their Voices: Real Stories of Community Mutual Support",
    "community.forum.introduce":"In our community forum, members share real experiences, support each other, and discuss the latest advances in cancer research.",
    "community.forum.open":"Open forum in new window",
    "community.events.title": "Community Events & Support",
    "community.join.title.main":
      "Stop facing it alone, join CancerDAO community to fight cancer together and embrace health!",
    "community.join.subtitle.main":
      "Whether you are a patient, family member, medical professional, or someone who cares about health, our community welcomes you. Here, you will find understanding, support, and hope.",
    "community.join.button.main": "Join Community Now",
    "community.join.discord.button": "Visit Discord Community",
    "community.join.telegram.button": "Join Telegram Group",
    "community.join.benefits":
      "After joining, you will get: 24/7 community support • Professional medical consultation • Peer experience sharing • Latest treatment information",
    "community.join.title":
      "Stop facing it alone, join CancerDAO community to fight cancer together and embrace health!",
    "community.join.subtitle":
      "Whether you are a patient, family member, medical professional, or someone who cares about health, our community welcomes you. Here, you will find understanding, support, and hope.",
    "community.join.button": "Join Community Now",

    "community.stats.title": "Our Community Power",
    "community.stats.subtitle":
      "Behind the numbers are real stories and firm beliefs",
    "community.stats.members": "Active Members",
    "community.stats.stories": "Shared Stories",
    "community.stats.volunteers": "Professional Volunteers",
    "community.stats.support": "Community Support",
    "community.activities.title": "Community Activities",
    "community.activities.subtitle":
      "Participate in our various activities to learn, grow, and help each other with community members",
    "community.activities.event1.status": "Completed",
    "community.activities.event1.title": "Cancer DAO Logo Community Vote",
    "community.activities.event1.description":
      "Vote to Win USDT! 🧬 \nWe need your help to choose the perfect brand logo! 1 winner will receive $25 USDT as a reward!",
    "community.activities.event1.participants": "190 people",
    "community.activities.event1.format": "Online Meeting",
    "community.activities.event2.status": "Completed",
    "community.activities.event2.title": "DeSci Community Offline Meetup",
    "community.activities.event2.description":
      "🏡 DeSci Community, Assemble!\nCancerDAO will host #DeSci Builders Meetup in Shanghai on March 15th!",
    "community.activities.event2.participants": "20-30 people",
    "community.activities.event2.format": "Shanghai",
    "community.activities.event3.status": "Completed",
    "community.activities.event3.title": "DeSci AMA",
    "community.activities.event3.description": "🧪 DeSci AMA is here! Join us for an exciting discussion with @commondotxyz @nobleblocks @Genpharmachain about tokenizing patient data as RWA and its potential to revolutionize cancer research.",
    "community.activities.event3.format": "Online",
    "community.activities.event4.status": "Completed",
    "community.activities.event4.title": "DeSAI Meetup: Innovations in Science & Healthcare",
    "community.activities.event4.description": "We're delighted to invite you to our DeSAI Meetup! This event will focus on innovations in science and healthcare, with in-depth discussions on the convergence of decentralized science (DeSci) and artificial intelligence (AI). Whether you're an industry expert, researcher, or simply passionate about future medical technologies, we warmly welcome your participation.",
    "community.activities.event4.format": "City University of Hong Kong",

    // Resources页面新增翻译
    "resources.read.more": "Read More",
    "resources.learn.more": "Learn More",
    "resources.faq.search.placeholder": "Search questions...",
    "resources.faq.viewAll": "View All Questions",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

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
    return translations[language][key] || key;
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
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}