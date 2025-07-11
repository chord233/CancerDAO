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
      "CancerDAO 鼓励公众通过贡献数据、参与社区治理与科普活动获得奖励，真正实现'以患者为中心'的公共健康创新生态。",
    "solution.blockchain.pillar.button": "了解更多区块链保障",
    "solution.community.pillar.title": "社区驱动",
    "solution.community.pillar.description":
"CancerDAO 构建了一个由用户自主控制的数据基础设施，基于区块链和隐私计算技术，实现数据可控、可追溯、可激励地共享，推动科研与新药开发。",
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
    "data.nft.point2": "区块链记录，永久可追溯",
    "data.nft.point3": "您控制数据访问权限",
    "data.fhe.title": "全同态加密 (FHE)：加密计算，隐私无忧",
    "data.fhe.badge": "隐私保护",
    "data.fhe.description":
      "全同态加密 (FHE) 是一项突破性技术，它允许在不解密数据的情况下直接对加密数据执行计算。这意味着，即使您的生物和医疗数据处于加密状态，人工智能模型或研究人员仍然可以对其进行分析和处理，而数据本身的原始形式始终是保密的，不会被泄露。FHE 彻底消除了数据在使用过程中的隐私风险，确保了您的敏感健康信息在被用于生成洞察或开发新疗法时，其隐私性得到最高级别的保护。",
    "data.fhe.point1": "数据始终保持加密状态",
    "data.fhe.point2": "支持加密状态下的AI计算",
    "data.fhe.point3": "医疗数据零泄露风险",

    // 社区力量
    "community.power.title": "You're not ALONE",
    "community.power.subtitle":
      "加入我们的全球社区，与志同道合的人一起为无癌世界而努力",
    "community.global.title": "全球社区",
    "community.global.count": "2,000+",
    "community.global.label": "活跃成员",
    "community.data.title": "数据贡献",
    "community.data.count": "500+",
    "community.data.label": "健康记录",
    "community.ai.title": "AI 模型",
    "community.ai.count": "95%",
    "community.ai.label": "准确率",
    "community.activities.title": "社区活动",
    "community.activities.upcoming": "即将开始",
    "community.activities.ongoing": "进行中",
    "community.activities.completed": "已完成",
    "community.activities.event1.title": "AI医疗创新峰会",
    "community.activities.event1.description":
      "汇聚全球AI医疗专家，探讨癌症预防新技术",
    "community.activities.event1.location": "线上会议",
    "community.activities.event2.title": "区块链健康数据研讨会",
    "community.activities.event2.description":
      "讨论去中心化健康数据管理的最佳实践",
    "community.activities.event2.location": "新加坡",
    "community.activities.event3.title": "社区开发者马拉松",
    "community.activities.event3.description":
      "48小时开发挑战，构建创新健康应用",
    "community.activities.event3.location": "全球在线",
    "community.activities.event4.title": "患者支持网络启动",
    "community.activities.event4.description":
      "为癌症患者建立全球支持和资源共享网络",
    "community.activities.event4.location": "多城市同步",
    "community.join.title": "准备好加入我们了吗？",
    "community.join.subtitle":
      "与全球癌症防治专家、研究人员和支持者一起，构建更美好的未来。",
    "community.join.discord": "加入Discord社区",
    "community.join.twitter": "关注我们的Twitter",
    "community.join.telegram": "加入Telegram群组",

    // 社区统计部分
    "community.title": "我们的全球影响力",
    "community.subtitle": "与我们共同构建无癌世界，数据见证我们的集体力量",
    "community.members.title": "社区成员",
    "community.members.count": "5,000+",
    "community.members.label": "全球贡献者",

    // 产品展示区块链安全描述
    "product.ai.description": "智能识别医学影像中的异常模式，提供实时风险评估和个性化建议。",
    "product.blockchain.security": "区块链安全保障",
    "product.blockchain.description": "基于区块链技术的医疗数据加密存储，确保您的隐私数据安全可控。",

    // 合作伙伴
    "partners.title": "我们的合作伙伴",
    "partners.subtitle": "欢迎各类组织加入，共同推动创新",
    "partners.item": "合作伙伴",

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
    "about.team.role.michael": "高级副总裁（创新与企业）\n香港城市大学\nHK Tech 300 主任\nDeSAI Lab 联合创始人",
    "about.team.role.yosean": "哈佛生物医学科学博士\n研究助理教授\n香港城市大学\nDeSAI Lab 联合创始人、主任",
    "about.team.role.zhiwei": "浙江大学\nAI4Health 博士\nBioLinkX 创始人",

    // About页面
    "about.title": "关于我们",
    "about.hero.description": "我们是由科学家、技术专家和远见者组成的全球社区，团结于一个使命：创造一个癌症不再是死刑的世界。通过AI、区块链技术和集体智慧的力量，我们正在革新癌症的预防、检测和治疗方式。",
    "about.hero.tagline": "共同努力，我们正在通过科学构建希望。",
    "about.mission.title": "我们的使命",
    "about.mission.subtitle": "通过创新、协作和不懈决心改变癌症护理。",
    "about.vision.title": "我们的愿景",
    "about.vision.description": "我们设想一个每个人都能获得个性化、AI驱动的癌症预防和治疗的未来。一个医疗数据安全、透明并服务于更大利益的世界。在这个世界里，突破性发现通过全球合作得到加速，没有人独自面对癌症。",
    "about.values.title": "我们的核心价值观",
    "about.values.subtitle": "这些原则指导着我们所做的一切和我们做出的每一个决定。",
    "about.team.title": "我们的团队",
    "about.team.subtitle": "认识推动我们使命向前发展的远见者和专家。",
    "about.team.achievements": "成就",
    
    // Footer页脚翻译
    "footer.description": "与公众共建一个无癌世界。通过AI、区块链和社区力量，革新癌症的预防与治疗。",
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
    "about.cta.description": "无论您是研究员、开发者、患者，还是仅仅是相信我们事业的人，在我们的社区中都有您的位置。",
    "about.cta.join": "加入我们的社区",
    "about.cta.learn": "了解更多",
    
    // About页面联系表单
    "about.contact.title": "联系我们",
    "about.contact.form.description": "若有疑问，请填写以下表单，我们的团队将在第一时间与您联系。",
    "about.contact.name": "您的姓名",
    "about.contact.email": "邮箱地址",
    "about.contact.subject": "主题",
    "about.contact.organization": "机构/组织",
    "about.contact.phone": "联系电话",
    "about.contact.message": "您的留言",
    "about.contact.privacy": "我同意 CancerDAO 根据隐私政策处理我的个人信息并与我联系。",
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
    "about.contact.response.desc": "我们通常在 24 小时内回复您的咨询。紧急事务请直接发送邮件至官方邮箱。",

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
    "resources.insights.category.all": "全部",
    "resources.insights.category.prevention": "预防知识",
    "resources.insights.category.treatment": "治疗指南",
    "resources.insights.category.nutrition": "营养指导",
    "resources.insights.category.psychology": "心理支持",
    "resources.contact.title": "如果您没有找到所需的信息，请随时联系我们的团队",
    "resources.contact.button": "联系我们",
    
    // Community页面
    "community.hero.title": "您从不孤单，我们与您同行",
    "community.hero.subtitle": "在这里，您将找到理解、支持和希望。无论您是患者、家属还是关心健康的朋友，我们都欢迎您的加入。",
    "community.support.title": "社区支持：您从不孤单，我们与您同行",
    "community.support.description": "在 CancerDAO 社区，我们深知面对癌症时内心的恐惧和无助。但您要知道，您并不孤单。我们的社区就像一个温暖的大家庭，每个成员都在用自己的方式给予关爱和支持。",
    "community.values.title": "社区价值观",
    "community.stories.title": "倾听他们的声音：社区互助真实故事",
    "community.events.title": "社区活动与支持",
    "community.join.title.main": "别再独自面对，加入 CancerDAO 社区，与我们共同抗击癌症，拥抱健康！",
    "community.join.subtitle.main": "无论您是患者、家属、医疗专业人士还是关心健康的普通人，我们的社区都欢迎您的加入。在这里，您将找到理解、支持和希望。",
    "community.join.button.main": "立即加入社区",
    "community.join.discord.button": "访问Discord社区",
    "community.join.telegram.button": "加入Telegram群组",
    "community.join.benefits": "加入后，您将获得：24/7社区支持 • 专业医疗咨询 • 同伴经验分享 • 最新治疗资讯",

    // Toast消息
    "toast.subscribe.success.title": "订阅成功",
    "toast.subscribe.success.description":
      "感谢您的关注！我们会及时通知您最新进展。",
    "toast.subscribe.error.title": "订阅失败",
    "toast.subscribe.error.description": "请稍后重试",

    //for-individuals.tsx
    "forIndividuals.intro.title": "掌控你的健康，加入一个支持你的社区。",
      "forIndividuals.intro.subtitle": "CancerDAO PILL 是您的个性化健康伴侣，赋能您主动管理健康，并在互助社区中获得力量。",

      "forIndividuals.productFeatures.mainTitle": "CancerDAO PILL 产品核心功能",

      "forIndividuals.aiMedicalButler.title": "AI 病历管家：一键解读，告别繁琐",
      "forIndividuals.aiMedicalButler.description": "告别复杂的医学报告和堆积如山的纸质病历。CancerDAO PILL 的 AI 病历管家能够智能识别并解读您上传的各类关键诊疗文书（如检验报告、影像报告、出院小结等），即时提取关键信息，生成清晰易懂的结构化病历数据，助您轻松掌握健康数据。",

      "forIndividuals.personalHealthTimeline.title": "个人健康时间轴：清晰回顾，纵览健康轨迹",
      "forIndividuals.personalHealthTimeline.description": "CancerDAO PILL 为您精心构建专属的个人健康时间轴。无论是历次就诊记录、药物使用详情，还是各项身体检查指标，都能在这里清晰呈现。助您全面回顾诊疗历程，洞察健康趋势，为未来的健康管理提供精准依据。",

      "forIndividuals.riskAssessment.title": "风险评估与个性化预防：了解风险，主动健康",
      "forIndividuals.riskAssessment.description": "基于您的健康数据和先进的 AI 模型，CancerDAO PILL 能为您提供定制化的健康风险评估。更重要的是，它将根据您的个体情况，生成个性化的预防建议和健康管理方案，帮助您降低风险，实现主动健康。",

      "forIndividuals.dataWallet.title": "数据钱包与授权：您的数据，您做主",
      "forIndividuals.dataWallet.description": "CancerDAO PILL 提供强大的数据钱包功能，让您真正掌控自己的健康数据。您可以清晰查看每一份数据的归属，并决定是否将匿名化数据授权给研究机构或 AI 模型进行计算。您的数据主权，由您牢牢掌握。",
      "forIndividuals.emphasis.easyToUse": "易于使用",
      "forIndividuals.emphasis.securePrivate": "安全私密",

      "forIndividuals.downloadSubscribe.title": "立即体验或获取最新动态",
      "forIndividuals.downloadSubscribe.appStore": "App Store 下载",
      "forIndividuals.downloadSubscribe.googlePlay": "Google Play 下载",
      "forIndividuals.downloadSubscribe.or": "或",
      "forIndividuals.downloadSubscribe.agreeTerms": "我同意 CancerDAO 根据隐私政策接收产品更新和营销信息。",

      "forIndividuals.communitySupport.mainTitle": "社区支持：您从不孤单，我们与您同行",
      "forIndividuals.communitySupport.description1": "共同的经历和感受，让患者和家属找到归属感，减轻孤独和焦虑。",
      "forIndividuals.communitySupport.description2": "成员之间分享诊疗经验、护理知识、资源信息，形成一个实时更新的知识库。",
      "forIndividuals.communitySupport.description3": "社区不仅有用户分享，未来也可能引入专业人士答疑，结合个人经验提供多维度帮助。",

      "forIndividuals.communityStories.sectionTitle": "倾听他们的声音：社区互助真实故事",
      "forIndividuals.communityStories.story1.title": "小A的故事：从迷茫到坚定",
      "forIndividuals.communityStories.story1.summary": "当小A被诊断出疾病时，感到前所未有的迷茫和无助。在CancerDAO社区，她找到了同样经历的伙伴，他们的鼓励和经验分享让她重拾信心，勇敢面对治疗。社区的医疗资源推荐也帮她找到了最适合的医生和方案。",
      "forIndividuals.communityStories.story2.title": "张妈妈：社区让我不再孤单",
      "forIndividuals.communityStories.story2.summary": "张妈妈的家人患病后，她日夜操劳，身心俱疲。是社区里其他患者家属的理解与支持，让她意识到自己并不孤单。他们在日常护理、情绪疏导和资源获取上互相帮助，让张妈妈感受到了家的温暖。",
      "forIndividuals.communityStories.story3.title": "老李的康复之路：AI与社区的力量",
      "forIndividuals.communityStories.story3.summary": "老李在康复期面临诸多挑战，CancerDAO PILL 的个性化健康时间轴帮他精确记录和管理数据，社区成员的康复经验分享也给了他宝贵建议。AI与社区的双重支持，让老李的康复之路更加顺畅和有希望。",
      "forIndividuals.communityStories.readMore": "阅读全文",

      "forIndividuals.joinCommunity.callToAction": "别再独自面对，加入 CancerDAO 社区，与我们共同抗击癌症，拥抱健康！",
      "forIndividuals.joinCommunity.subtitle": "与全球癌症防治专家、研究人员和支持者一起，构建更美好的未来。",
      "forIndividuals.joinCommunity.button": "立即加入社区",

    //for-partners.tsx
    "forPartners.intro.title": "携手共建下一代癌症防治生态系统。",

    "forPartners.dataResearch.title": "数据与研究合作",
    "forPartners.dataResearch.subtitle": "面向药企和科研机构。我们提供独特且高质量的数据，赋能您的研究和新药开发。",
    "forPartners.dataResearch.ourDataAdvantages": "我们的数据优势",
    "forPartners.dataResearch.advantage1": "患者直报、多维度数据",
    "forPartners.dataResearch.advantage2": "经AI结构化、纵向追踪",
    "forPartners.dataResearch.advantage3": "清晰的用户授权，保障数据合规",
    "forPartners.dataResearch.advantage4": "持续更新与扩展",
    "forPartners.dataResearch.cooperationModels": "合作模式",
    "forPartners.dataResearch.model1": "获取脱敏数据集用于研究",
    "forPartners.dataResearch.model2": "使用我们的平台进行数据分析和洞察",
    "forPartners.dataResearch.model3": "AI精准匹配临床试验受试者",
    "forPartners.dataResearch.dataQualityCompliance": "数据质量与合规",
    "forPartners.dataResearch.complianceDescription": "我们严格遵守高标准的数据清洗、验证流程，并全面符合 HIPAA, GDPR, 《个人信息保护法》等全球隐私和数据保护法规，确保数据使用的透明和安全。",

    "forPartners.ecosystemPartnership.title": "生态合作",
    "forPartners.ecosystemPartnership.subtitle": "面向更广泛的合作伙伴，如基因测序公司、保险公司、健康管理机构等，共同打造一体化健康服务。",
    "forPartners.ecosystemPartnership.apiIntegration.title": "API 集成",
    "forPartners.ecosystemPartnership.apiIntegration.description": "提供强大的API接口，将我们的核心服务（如患者画像模块、风险评估）无缝集成到您的现有应用或平台中，提升您的服务能力和用户体验。",
    "forPartners.ecosystemPartnership.serviceIntegration.title": "服务整合",
    "forPartners.ecosystemPartnership.serviceIntegration.description": "欢迎优质的医疗、健康服务商入驻 CancerDAO 生态系统。通过资源共享和互利合作，共同为用户提供更全面、更高质量的服务。",
    "forPartners.ecosystemPartnership.jointMarketing.title": "联合营销与品牌合作",
    "forPartners.ecosystemPartnership.jointMarketing.description": "与我们共同开展市场推广活动，扩大品牌影响力，触达更广泛的用户群体，实现共赢。",

    "partners.contactForm.title": "联系我们，开启合作",
    "partners.contactForm.fullName": "您的姓名",
    "partners.contactForm.organizationName": "机构/公司名称",
    "partners.contactForm.titleField": "职位",
    "partners.contactForm.businessEmail": "业务邮箱",
    "partners.contactForm.phoneNumber": "联系电话",
    "partners.contactForm.partnershipInterestType": "合作意向类型",
    "partners.contactForm.selectTypePlaceholder": "请选择合作类型",
    "partners.contactForm.typeDataResearch": "数据与研究合作",
    "partners.contactForm.typeEcosystemIntegration": "生态产品整合",
    "partners.contactForm.typeTechAPI": "技术/API 合作",
    "partners.contactForm.typeJointMarketing": "联合营销",
    "partners.contactForm.typeOther": "其他",
    "partners.contactForm.yourMessageNeeds": "您的需求/留言",
    "partners.contactForm.companyWebsite": "贵公司网址",
    "partners.contactForm.submitButton": "提交申请",
    "partners.contactForm.submitting": "提交中...",
    "partners.contactForm.privacyConsent": "我同意 CancerDAO 处理我的个人信息，并根据隐私政策与我联系。",
    "partners.contactForm.submitSuccessTitle": "提交成功",
    "partners.contactForm.submitSuccessDescription": "感谢您的关注！我们会尽快与您联系。",
    "partners.contactForm.submitErrorTitle": "提交失败",
    "partners.contactForm.submitErrorDescription": "请稍后重试。",
    "partners.contactForm.validationErrorTitle": "表单校验错误",
    "partners.contactForm.validationErrorMessage": "请填写所有必填字段。",
    "partners.contactForm.invalidEmail": "请输入有效的业务邮箱地址。",
    "partners.contactForm.agreePrivacyPolicy": "请勾选同意隐私政策。",
    
    // Solution页面CTA
    "solution.cta.title": "准备好开始您的健康之旅了吗？",
    "solution.cta.subtitle": "加入我们的全球社区，与志同道合的人一起为无癌症世界而努力。",
    "solution.cta.learn.more": "了解更多",
    
    // Solution页面三大支柱
    "solution.pillars.title": "三大支柱：构建完整的癌症防治生态系统",
    "solution.ai.pillar.point1": "个性化健康评估与预测",
    "solution.ai.pillar.point2": "智能治疗方案推荐",
    "solution.ai.pillar.point3": "持续健康监测与管理",
    
    // AI赋能健康部分
    "ai.powered.health.title": "AI 赋能健康：智能洞察，精准呵护",
    "ai.powered.health.description": "通过先进的人工智能技术，CancerDAO 能够解读复杂的非结构化病历，构建个性化健康档案，提供精准的健康建议，并智能匹配最适合的临床试验机会。",
    "ai.analysis.process.title": "AI 解析流程演示",
    "ai.analysis.step1": "上传病历",
    "ai.analysis.step2": "AI 智能解析",
    "ai.analysis.step3": "结构化数据",
    "ai.agent.matrix.title": "AI Agent 产品一览",
    "ai.agent.report.name": "CancerDAO Report Bot",
    "ai.agent.report.description": "智能解析医疗报告，提供个性化健康洞察和风险评估",
    "ai.agent.report.status": "已上线",
    "ai.agent.trial.name": "CancerDAO Trial Bot",
    "ai.agent.trial.description": "智能匹配临床试验，为患者推荐最适合的治疗方案",
    "ai.agent.trial.status": "开发中",
    "ai.agent.insight.name": "CancerDAO Insight Bot",
    "ai.agent.insight.description": "基于最新研究，提供前沿的癌症预防和治疗建议",
    "ai.agent.insight.status": "敬请期待",
    "ai.agent.care.name": "CancerDAO Care Bot",
    "ai.agent.care.description": "24/7 健康监护，提供个性化的康复和护理指导",
    "ai.agent.care.status": "敬请期待",
    "ai.agent.research.name": "CancerDAO Research Bot",
    "ai.agent.research.description": "辅助医学研究，加速新药开发和治疗方案优化",
    "ai.agent.research.status": "开发中",
    "ai.agent.support.name": "CancerDAO Support Bot",
    "ai.agent.support.description": "提供情感支持和社区连接，帮助患者度过治疗难关",
    "ai.agent.support.status": "敬请期待",
    "ai.agent.clinical.name": "CancerDAO Clinical Bot",
    "ai.agent.clinical.description": "临床数据分析和病理报告解读，辅助医生诊断决策",
    "ai.agent.clinical.status": "开发中",
    "ai.agent.content.name": "CancerDAO Content Bot",
    "ai.agent.content.description": "生成个性化健康内容，制作专业医疗科普文章",
    "ai.agent.content.status": "已上线",
    "ai.agent.longevity.name": "CancerDAO Longevity Bot",
    "ai.agent.longevity.description": "专注于癌症风险评估的专业顾问，降低患癌风险",
    "ai.agent.longevity.status": "开发中",
    "ai.agent.health.name": "CancerDAO Health Bot",
    "ai.agent.health.description": "为肿瘤患者提供个性化的饮食建议和生活方式指导",
    "ai.agent.health.status": "开发中",
    "ai.agent.ama.name": "CancerDAO AMA Bot",
    "ai.agent.ama.description": "共同构建一个没有癌症的世界，回答各种癌症相关问题",
    "ai.agent.ama.status": "已上线",
    "solution.blockchain.pillar.point1": "全球专家与患者互助网络",
    "solution.blockchain.pillar.point2": "开放治疗数据共享",
    "solution.blockchain.pillar.point3": "社区治理与决策参与",
    "solution.community.pillar.point1": "数据所有权完全归用户",
    "solution.community.pillar.point2": "隐私保护与透明追踪",
    "solution.community.pillar.point3": "激励机制与价值分享"
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

    // 首页
    "hero.title":
      "Revolutionize Cancer Prevention and Care, with the Public",
    "hero.subtitle":
      "CancerDAO is a public-driven, AI and blockchain-powered personal autonomous cancer prevention and treatment platform, dedicated to providing accessible, trustworthy, and precise cancer prevention and treatment services for individuals and society.",
    "hero.cta1": "Learn Our Solution",
    "hero.cta2": "Join Our Community",

    // 问题部分
    "problem.title": "The Challenges We Face",
    "problem.subtitle":
      "Cancer is becoming a major threat to human health, and existing prevention and treatment systems have many limitations.",
    "problem.global.title": "Global Challenges",
    "problem.global.description":
      "Rising cancer incidence, especially among younger populations",
    "problem.global.point1":
      "Approximately 20% of people will develop cancer, and about 10% will die from it.",
    "problem.global.point2":
      "The incidence of early-onset cancer (under 50) increased by 79.1% between 1990 and 2019.",
    "problem.knowledge.title": "Insufficient Knowledge and Support",
    "problem.knowledge.description":
      "The public lacks sufficient knowledge and support in cancer prevention and treatment.",
    "problem.knowledge.point1":
      "Limited knowledge and tools for health management and related data.",
    "problem.knowledge.point2":
      "Difficulty in accessing innovative cancer prevention and treatment methods.",
    "problem.knowledge.point3":
      "The public and patients are often seen as 'customers,' limiting active participation in innovation.",
    "problem.innovation.title": "Slow and Costly Innovation",
    "problem.innovation.description":
      "Institutional and corporate innovation is slow and expensive.",
    "problem.innovation.point1":
      "Fragmented and isolated data, lack of standardization and sharing, limiting the development of AI-driven innovation.",
    "problem.innovation.point2":
      "High costs of acquiring public and patient data.",

    // 解决方案部分
    "solution.title": "Our Solution",
    "solution.subtitle":
      "Building a comprehensive cancer prevention and treatment ecosystem through three core pillars.",
    "solution.core.title": "Core Value Cycle",
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

    // 订阅
    "subscribe.title": "Subscribe for Updates",
    "subscribe.subtitle":
      "Get the latest progress and release information of CancerDAO PILL firsthand.",
    "subscribe.placeholder": "Enter your email address",
    "subscribe.button": "Subscribe",
    "subscribe.subscribing": "Subscribing...",

    // 数据主权
    "data.sovereignty.title":
      "Data Sovereignty & Trust: Your Data, Your Control",
    "data.sovereignty.subtitle":
      "Ensuring your health data is secure, private, and owned by you through blockchain technology and encryption algorithms.",
    "data.nft.title": "Data NFT: Empowering Your Data Ownership",
    "data.nft.badge": "Blockchain Technology",
    "data.nft.description":
      "Data NFT is a unique digital token that transforms your personal health data into a truly owned digital asset. Data providers offer encrypted health data, which is then recorded on the blockchain and tokenized to generate unique Data NFTs. These Data NFTs represent the data's uniqueness, ownership, and traceability, and can be traded in the market. In this way, data providers can control who accesses their data, benefit from data usage fees and product royalties, and even receive platform rewards.",
    "data.nft.point1": "Data Uniqueness & Ownership Confirmation",
    "data.nft.point2": "Blockchain Record, Permanently Traceable",
    "data.nft.point3": "You Control Data Access Permissions",
    "data.fhe.title":
      "Fully Homomorphic Encryption (FHE): Encrypted Computation, Worry-Free Privacy",
    "data.fhe.badge": "Privacy Protection",
    "data.fhe.description":
      "Fully Homomorphic Encryption (FHE) is a breakthrough technology that allows computations to be performed directly on encrypted data without decryption. This means that even when your biological and medical data is in an encrypted state, AI models or researchers can still analyze and process it, while the original form of the data remains confidential and will not be disclosed. FHE completely eliminates privacy risks during data usage, ensuring that your sensitive health information receives the highest level of privacy protection when used to generate insights or develop new therapies.",
    "data.fhe.point1": "Data Always Remains Encrypted",
    "data.fhe.point2": "Supports AI Computation on Encrypted Data",
    "data.fhe.point3": "Zero Risk of Medical Data Leakage",
    
    // Solution页面CTA
    "solution.cta.title": "Ready to Start Your Health Journey?",
    "solution.cta.subtitle": "Join our global community and work with like-minded people for a cancer-free world.",
    "solution.cta.learn.more": "Learn More",
    
    // Solution页面三大支柱
    "solution.pillars.title": "Three Pillars: Building a Complete Cancer Prevention and Treatment Ecosystem",
    "solution.ai.pillar.point1": "Personalized Health Assessment & Prediction",
    "solution.ai.pillar.point2": "Intelligent Treatment Recommendations",
    "solution.ai.pillar.point3": "Continuous Health Monitoring & Management",
    
    // AI赋能健康部分
    "ai.powered.health.title": "AI-Powered Health: Intelligent Insights, Precise Care",
    "ai.powered.health.description": "Through advanced artificial intelligence technology, CancerDAO can interpret complex unstructured medical records, build personalized health profiles, provide precise health recommendations, and intelligently match the most suitable clinical trial opportunities.",
    "ai.analysis.process.title": "AI Analysis Process Demo",
    "ai.analysis.step1": "Upload Medical Records",
    "ai.analysis.step2": "AI Smart Analysis",
    "ai.analysis.step3": "Structured Data",
    "ai.agent.matrix.title": "AI Agent Product Overview",
    "ai.agent.report.name": "CancerDAO Report Bot",
    "ai.agent.report.description": "Intelligently analyze medical reports, providing personalized health insights and risk assessments",
    "ai.agent.report.status": "Live",
    "ai.agent.trial.name": "CancerDAO Trial Bot",
    "ai.agent.trial.description": "Intelligently match clinical trials, recommending the most suitable treatment options for patients",
    "ai.agent.trial.status": "In Development",
    "ai.agent.insight.name": "CancerDAO Insight Bot",
    "ai.agent.insight.description": "Based on latest research, provide cutting-edge cancer prevention and treatment recommendations",
    "ai.agent.insight.status": "Coming Soon",
    "ai.agent.care.name": "CancerDAO Care Bot",
    "ai.agent.care.description": "24/7 health monitoring, providing personalized rehabilitation and care guidance",
    "ai.agent.care.status": "Coming Soon",
    "ai.agent.research.name": "CancerDAO Research Bot",
    "ai.agent.research.description": "Assist medical research, accelerate drug development and treatment optimization",
    "ai.agent.research.status": "In Development",
    "ai.agent.support.name": "CancerDAO Support Bot",
    "ai.agent.support.description": "Provide emotional support and community connection, helping patients through treatment challenges",
    "ai.agent.support.status": "Coming Soon",
    "ai.agent.clinical.name": "CancerDAO Clinical Bot",
    "ai.agent.clinical.description": "Clinical data analysis and pathology report interpretation, assisting doctors in diagnostic decisions",
    "ai.agent.clinical.status": "In Development",
    "ai.agent.content.name": "CancerDAO Content Bot",
    "ai.agent.content.description": "Generate personalized health content and create professional medical science articles",
    "ai.agent.content.status": "Live",
    "ai.agent.longevity.name": "CancerDAO Longevity Bot",
    "ai.agent.longevity.description": "Professional advisor focused on cancer risk assessment, reducing cancer risk",
    "ai.agent.longevity.status": "In Development",
    "ai.agent.health.name": "CancerDAO Health Bot",
    "ai.agent.health.description": "Provide personalized dietary recommendations and lifestyle guidance for cancer patients",
    "ai.agent.health.status": "In Development",
    "ai.agent.ama.name": "CancerDAO AMA Bot",
    "ai.agent.ama.description": "Together, build a world without cancer, answering various cancer-related questions",
    "ai.agent.ama.status": "Live",
    "solution.blockchain.pillar.point1": "Global Expert & Patient Mutual Support Network",
    "solution.blockchain.pillar.point2": "Open Treatment Data Sharing",
    "solution.blockchain.pillar.point3": "Community Governance & Decision Participation",
    "solution.community.pillar.point1": "Data Ownership Fully Belongs to Users",
    "solution.community.pillar.point2": "Privacy Protection & Transparent Tracking",
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
    "community.subtitle": "Join us in building a cancer-free world, with data demonstrating our collective strength",
    "community.data.title": "Health Data",
    "community.data.count": "10,000+",
    "community.data.label": "Anonymized Records",
    "community.members.title": "Community Members", 
    "community.members.count": "5,000+",
    "community.members.label": "Global Contributors",
    "community.ai.title": "AI Accuracy",
    "community.ai.count": "95%",
    "community.ai.label": "Prediction Accuracy",

    // Product blockchain security description
    "product.ai.description": "Intelligently identify abnormal patterns in medical images, providing real-time risk assessment and personalized recommendations.",
    "product.blockchain.security": "Blockchain Security",
    "product.blockchain.description": "Blockchain-based encrypted storage of medical data, ensuring your private data is secure and controllable.",
    "community.activities.title": "Community Activities",
    "community.activities.upcoming": "Upcoming",
    "community.activities.ongoing": "Ongoing",
    "community.activities.completed": "Completed",
    "community.activities.event1.title": "AI Medical Innovation Summit",
    "community.activities.event1.description":
      "Gathering global AI medical experts to discuss new technologies in cancer prevention.",
    "community.activities.event1.location": "Online Conference",
    "community.activities.event2.title": "Blockchain Health Data Workshop",
    "community.activities.event2.description":
      "Discussing best practices for decentralized health data management.",
    "community.activities.event2.location": "Singapore",
    "community.activities.event3.title": "Community Developer Hackathon",
    "community.activities.event3.description":
      "48-hour development challenge to build innovative health applications.",
    "community.activities.event3.location": "Global Online",
    "community.activities.event4.title": "Patient Support Network Launch",
    "community.activities.event4.description":
      "Establishing a global support and resource-sharing network for cancer patients.",
    "community.activities.event4.location": "Multiple Cities Simultaneously",

    "community.join.discord": "Join Discord Community",
    "community.join.twitter": "Follow us on Twitter",
    "community.join.telegram": "Join Telegram Group",

    // 合作伙伴
    "partners.title": "Our Partners",
    "partners.subtitle":
      "All types of organizations are welcome to join and jointly promote innovation.",
    "partners.item": "Partner",

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

    // for-individuals.tsx

      "forIndividuals.intro.title": "Take Control of Your Health, Join a Supportive Community.",
      "forIndividuals.intro.subtitle": "CancerDAO PILL is your personalized health companion, empowering you to actively manage your health and gain strength within a mutual support community.",

      "forIndividuals.productFeatures.mainTitle": "CancerDAO PILL Core Product Features",

      "forIndividuals.aiMedicalButler.title": "AI Medical Butler: One-Click Interpretation, No More Hassle",
      "forIndividuals.aiMedicalButler.description": "Say goodbye to complex medical reports and piles of paper medical records. CancerDAO PILL's AI Medical Butler intelligently identifies and interprets various key medical documents you upload (such as lab reports, imaging reports, discharge summaries), instantly extracts critical information, and generates clear, easy-to-understand structured medical record data, helping you effortlessly grasp your health data.",

      "forIndividuals.personalHealthTimeline.title": "Personal Health Timeline: Clear Overview, Track Your Health Journey",
      "forIndividuals.personalHealthTimeline.description": "CancerDAO PILL meticulously builds your exclusive personal health timeline. Every consultation record, medication detail, and various physical examination indicators can be clearly presented here. It helps you comprehensively review your treatment history, gain insights into health trends, and provide accurate basis for future health management.",

      "forIndividuals.riskAssessment.title": "Risk Assessment & Personalized Prevention: Understand Risks, Proactive Health",
      "forIndividuals.riskAssessment.description": "Based on your health data and advanced AI models, CancerDAO PILL can provide you with customized health risk assessments. More importantly, it will generate personalized prevention advice and health management plans tailored to your individual situation, helping you reduce risks and achieve proactive health.",

      "forIndividuals.dataWallet.title": "Data Wallet & Authorization: Your Data, Your Control",
      "forIndividuals.dataWallet.description": "CancerDAO PILL offers robust data wallet functionality, allowing you to truly control your health data. You can clearly view the ownership of each piece of data and decide whether to authorize anonymized data to research institutions or AI models for computation. Your data sovereignty is firmly in your hands.",
      "forIndividuals.emphasis.easyToUse": "Easy to Use",
      "forIndividuals.emphasis.securePrivate": "Secure & Private",

      "forIndividuals.downloadSubscribe.title": "Experience Now or Get the Latest Updates",
      "forIndividuals.downloadSubscribe.appStore": "Download on App Store",
      "forIndividuals.downloadSubscribe.googlePlay": "Download on Google Play",
      "forIndividuals.downloadSubscribe.or": "Or",
      "forIndividuals.downloadSubscribe.agreeTerms": "I agree to receive product updates and marketing information from CancerDAO according to the Privacy Policy.",

      "forIndividuals.communitySupport.mainTitle": "Community Support: You Are Not Alone, We Walk With You",
      "forIndividuals.communitySupport.description1": "Shared experiences and feelings allow patients and their families to find a sense of belonging, reducing loneliness and anxiety.",
      "forIndividuals.communitySupport.description2": "Members share treatment experiences, nursing knowledge, and resource information, forming a real-time updated knowledge base.",
      "forIndividuals.communitySupport.description3": "The community not only features user sharing but may also introduce professionals to answer questions in the future, combining personal experience to provide multi-dimensional help.",

      "forIndividuals.communityStories.sectionTitle": "Hear Their Voices: Real Stories of Community Mutual Aid",
      "forIndividuals.communityStories.story1.title": "Xiao A's Story: From Confusion to Determination",
      "forIndividuals.communityStories.story1.summary": "When Xiao A was diagnosed with her illness, she felt an unprecedented sense of confusion and helplessness. In the CancerDAO community, she found companions with similar experiences. Their encouragement and shared experiences helped her regain confidence and bravely face treatment. The community's medical resource recommendations also helped her find the most suitable doctors and solutions.",
      "forIndividuals.communityStories.story2.title": "Mama Zhang: The Community Made Me No Longer Alone",
      "forIndividuals.communityStories.story2.summary": "After her family member fell ill, Mama Zhang toiled day and night, physically and mentally exhausted. It was the understanding and support from other patient families in the community that made her realize she was not alone. They helped each other with daily care, emotional counseling, and resource access, making Mama Zhang feel the warmth of a family.",
      "forIndividuals.communityStories.story3.title": "Old Li's Road to Recovery: The Power of AI and Community",
      "forIndividuals.communityStories.story3.summary": "Old Li faced many challenges during his recovery. CancerDAO PILL's personalized health timeline helped him accurately record and manage data, and the community members' recovery experience sharing also gave him valuable advice. The dual support of AI and the community made Old Li's recovery journey smoother and more hopeful.",
      "forIndividuals.communityStories.readMore": "Read Full Story",

      "forIndividuals.joinCommunity.callToAction": "Don't face it alone. Join the CancerDAO community to fight cancer together and embrace health!",
      "forIndividuals.joinCommunity.subtitle": "Work with global cancer prevention experts, researchers, and supporters to build a better future.",
      "forIndividuals.joinCommunity.button": "Join Community Now",

    //for-partners.tsx
    "forPartners.intro.title": "Partner with Us to Build the Next Generation of Cancer Prevention and Treatment Ecosystem.",

    "forPartners.dataResearch.title": "Data & Research Partnership",
    "forPartners.dataResearch.subtitle": "For pharmaceutical companies and research institutions. We provide unique and high-quality data to empower your research and new drug development.",
    "forPartners.dataResearch.ourDataAdvantages": "Our Data Advantages",
    "forPartners.dataResearch.advantage1": "Patient-reported, Multi-dimensional Data",
    "forPartners.dataResearch.advantage2": "AI-structured, Longitudinal Tracking",
    "forPartners.dataResearch.advantage3": "Clear User Authorization, Ensuring Data Compliance",
    "forPartners.dataResearch.advantage4": "Continuous Updates and Expansion",
    "forPartners.dataResearch.cooperationModels": "Cooperation Models",
    "forPartners.dataResearch.model1": "Access anonymized datasets for research",
    "forPartners.dataResearch.model2": "Use our platform for data analysis and insights",
    "forPartners.dataResearch.model3": "AI-powered precise matching for clinical trial subjects",
    "forPartners.dataResearch.dataQualityCompliance": "Data Quality and Compliance",
    "forPartners.dataResearch.complianceDescription": "We strictly adhere to high standards for data cleansing and validation processes, and fully comply with global privacy and data protection regulations such as HIPAA, GDPR, and the PIPL, ensuring transparent and secure data usage.",

    "forPartners.ecosystemPartnership.title": "Ecosystem Partnership",
    "forPartners.ecosystemPartnership.subtitle": "For a wider range of partners, such as gene sequencing companies, insurance companies, and health management organizations, to jointly build an integrated health service.",
    "forPartners.ecosystemPartnership.apiIntegration.title": "API Integration",
    "forPartners.ecosystemPartnership.apiIntegration.description": "We offer powerful API interfaces to seamlessly integrate our core services (such as patient profiling modules, risk assessment) into your existing applications or platforms, enhancing your service capabilities and user experience.",
    "forPartners.ecosystemPartnership.serviceIntegration.title": "Service Integration",
    "forPartners.ecosystemPartnership.serviceIntegration.description": "We welcome high-quality medical and health service providers to join the CancerDAO ecosystem. Through resource sharing and mutually beneficial cooperation, we aim to provide users with more comprehensive and higher-quality services.",
    "forPartners.ecosystemPartnership.jointMarketing.title": "Joint Marketing & Brand Collaboration",
    "forPartners.ecosystemPartnership.jointMarketing.description": "Collaborate with us on marketing campaigns to expand brand influence, reach a wider user base, and achieve win-win outcomes.",

    "partners.contactForm.title": "Contact Us to Start a Partnership",
    "partners.contactForm.fullName": "Full Name",
    "partners.contactForm.organizationName": "Organization/Company Name",
    "partners.contactForm.titleField": "Title",
    "partners.contactForm.businessEmail": "Business Email",
    "partners.contactForm.phoneNumber": "Phone Number",
    "partners.contactForm.partnershipInterestType": "Partnership Interest Type",
    "partners.contactForm.selectTypePlaceholder": "Please select a partnership type",
    "partners.contactForm.typeDataResearch": "Data & Research Collaboration",
    "partners.contactForm.typeEcosystemIntegration": "Ecosystem Product Integration",
    "partners.contactForm.typeTechAPI": "Technology/API Collaboration",
    "partners.contactForm.typeJointMarketing": "Joint Marketing",
    "partners.contactForm.typeOther": "Other",
    "partners.contactForm.yourMessageNeeds": "Your Message/Needs",
    "partners.contactForm.companyWebsite": "Company Website",
    "partners.contactForm.submitButton": "Submit Application",
    "partners.contactForm.submitting": "Submitting...",
    "partners.contactForm.privacyConsent": "I agree that CancerDAO may process my personal information and contact me in accordance with its Privacy Policy.",
    "partners.contactForm.submitSuccessTitle": "Submission Successful",
    "partners.contactForm.submitSuccessDescription": "Thank you for your interest! We will contact you shortly.",
    "partners.contactForm.submitErrorTitle": "Submission Failed",
    "partners.contactForm.submitErrorDescription": "Please try again later.",
    "partners.contactForm.validationErrorTitle": "Form Validation Error",
    "partners.contactForm.validationErrorMessage": "Please fill in all required fields.",
    "partners.contactForm.invalidEmail": "Please enter a valid business email address.",
    "partners.contactForm.agreePrivacyPolicy": "Please check the privacy policy consent box.",

    // About页面
    "about.title": "About CancerDAO",
    "about.hero.description": "We are a global community of scientists, technologists, and visionaries united by one mission: to create a world where cancer is no longer a death sentence. Through the power of AI, blockchain technology, and collective intelligence, we are revolutionizing how we prevent, detect, and treat cancer.",
    "about.hero.tagline": "Together, we are building hope through science.",
    "about.mission.title": "Our Mission",
    "about.mission.subtitle": "Transforming cancer care through innovation, collaboration, and unwavering determination.",
    "about.vision.title": "Our Vision",
    "about.vision.description": "We envision a future where every individual has access to personalized, AI-powered cancer prevention and treatment. A world where medical data is secure, transparent, and serves the greater good. Where breakthrough discoveries are accelerated through global collaboration, and where no one faces cancer alone.",
    "about.values.title": "Our Core Values",
    "about.values.subtitle": "These principles guide everything we do and every decision we make.",
    "about.team.title": "Our Team",
    "about.team.subtitle": "Meet the visionaries and experts driving our mission forward.",
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
    "about.team.role.michael": "Senior VP (Innovation & Enterprise)\nCity University of Hong Kong\nHK Tech 300 Director\nDeSAI Lab Co-founder",
    "about.team.role.yosean": "Harvard Biomedical Science PhD\nResearch Assistant Professor\nCity University of Hong Kong\nDeSAI Lab Co-founder, Director",
    "about.team.role.zhiwei": "Zhejiang University\nAI4Health PhD\nBioLinkX Founder",
    
    // Footer页脚翻译（英文）
    "footer.description": "Building a cancer-free world with the public. Revolutionizing cancer prevention and treatment through AI, blockchain, and community power.",
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
    "about.cta.description": "Whether you are a researcher, developer, patient, or simply someone who believes in our cause, there is a place for you in our community.",
    "about.cta.join": "Join Our Community",
    "about.cta.learn": "Learn More",
    
    // About页面联系表单
    "about.contact.title": "Contact Us",
    "about.contact.form.description": "Please fill out the following form and our team will contact you as soon as possible.",
    "about.contact.name": "Your Name",
    "about.contact.email": "Email Address",
    "about.contact.subject": "Subject",
    "about.contact.organization": "Organization/Institution",
    "about.contact.phone": "Phone Number",
    "about.contact.message": "Your Message",
    "about.contact.privacy": "I agree that CancerDAO may process my personal information and contact me in accordance with its Privacy Policy.",
    "about.contact.submit": "Submit Information",
    "about.contact.submitting": "Submitting...",
    "about.contact.placeholder.name": "Enter your name",
    "about.contact.placeholder.email": "Enter your email address",
    "about.contact.placeholder.subject": "Please select a subject",
    "about.contact.placeholder.organization": "Enter your organization or institution name",
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
    "about.contact.response.desc": "We typically respond to inquiries within 24 hours. For urgent matters, please send an email directly to our official email address.",

    // Resources页面
    "resources.title": "Resources Center",
    "resources.subtitle": "Explore our knowledge base, educational resources, and frequently asked questions",
    "resources.blog.title": "Blog & Articles",
    "resources.blog.subtitle": "Deep dive into the latest insights on cancer prevention, AI technology, and blockchain healthcare",
    "resources.insights.title": "Educational Content",
    "resources.insights.subtitle": "Authoritative medical experts answer key questions about cancer prevention and treatment",
    "resources.faq.title": "Frequently Asked Questions",
    "resources.faq.subtitle": "Find answers to the questions you care about",
    "resources.search.placeholder": "Search questions...",
    "resources.search.button": "Search",
    "resources.insights.category.all": "All",
    "resources.insights.category.prevention": "Prevention Knowledge",
    "resources.insights.category.treatment": "Treatment Guidelines",
    "resources.insights.category.nutrition": "Nutrition Guidance",
    "resources.insights.category.psychology": "Psychological Support",
    "resources.contact.title": "If you haven't found the information you need, please feel free to contact our team",
    "resources.contact.button": "Contact Us",
    
    // Community页面
    "community.hero.title": "You Are Never Alone, We Walk With You",
    "community.hero.subtitle": "Here, you will find understanding, support, and hope. Whether you are a patient, family member, or friend who cares about health, we welcome you to join us.",
    "community.support.title": "Community Support: You Are Never Alone, We Walk With You",
    "community.support.description": "In the CancerDAO community, we deeply understand the fear and helplessness when facing cancer. But you should know that you are not alone. Our community is like a warm family, where every member gives care and support in their own way.",
    "community.values.title": "Community Values",
    "community.stories.title": "Listen to Their Voices: Real Stories of Community Mutual Support",
    "community.events.title": "Community Events & Support",
    "community.join.title.main": "Stop facing it alone, join CancerDAO community to fight cancer together and embrace health!",
    "community.join.subtitle.main": "Whether you are a patient, family member, medical professional, or someone who cares about health, our community welcomes you. Here, you will find understanding, support, and hope.",
    "community.join.button.main": "Join Community Now",
    "community.join.discord.button": "Visit Discord Community",
    "community.join.telegram.button": "Join Telegram Group",
    "community.join.benefits": "After joining, you will get: 24/7 community support • Professional medical consultation • Peer experience sharing • Latest treatment information"

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
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
