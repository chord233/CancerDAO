import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/language-context";
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Search, 
  BookOpen, 
  Brain, 
  Shield, 
  Users, 
  HelpCircle,
  ExternalLink,
  Clock
} from "lucide-react";

export default function Resources() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // 博客文章数据
  const blogPosts = [
    {
      id: 1,
      title: "沃伦·巴菲特战胜前列腺癌：健康是最佳投资，早期筛查是关键",
      author: "CancerDAO",
      date: "2024-01-01",
      category: "前列腺癌",
      excerpt: "股神沃伦·巴菲特在81岁时被诊断出早期前列腺癌后，通过每年进行PSA检测的早期发现和为期6周的放射治疗，最终完全康复，并在93岁高龄仍保持健康。",
      tags: ["前列腺癌", "早期筛查", "成功案例"],
      image: "/attached_assets/image_1752400819628.png",
      readTime: "5 分钟",
      link: "https://x.com/CancerDAOxyz/status/1906607182369726728"
    },
    {
      id: 2,
      title: "约翰·韦恩的抗癌之路：吸烟的警示与硬汉的韧性",
      author: "CancerDAO",
      date: "2024-01-02",
      category: "肺癌",
      excerpt: "传奇演员约翰·韦恩在1964年因长期大量吸烟被诊断出晚期肺癌的经历。他最初因担心形象而隐瞒病情，后转变为积极的癌症意识和反吸烟运动倡导者，尽管付出了切除左肺和四根肋骨的代价。",
      tags: ["肺癌", "反吸烟", "意识倡导"],
      image: "/attached_assets/image_1752401190831.png",
      readTime: "5 分钟",
      link: "https://x.com/CancerDAOxyz/status/1904163508125945945"
    },
    {
      id: 3,
      title: "胰腺癌的快速癌症预防提示",
      author: "CancerDAO",
      date: "2024-01-03",
      category: "胰腺癌",
      excerpt: "胰腺癌预防关键在于针对家族史、糖尿病、慢性胰腺炎等高风险人群进行早期筛查和生活方式干预。了解如何识别风险因素并采取有效的预防措施。",
      tags: ["胰腺癌", "预防", "高风险人群"],
      image: "/attached_assets/image_1752412955703.png",
      readTime: "5 分钟",
      link: "https://x.com/CancerDAOxyz/status/1901547167678144864"
    },
    {
      id: 4,
      title: "与 DeSci 对抗乳腺癌：如果安吉丽娜·朱莉早点知道就好了",
      author: "CancerDAO",
      date: "2024-01-04",
      category: "乳腺癌",
      excerpt: "乳腺癌作为女性常见癌症，有激素受体阳性、HER2阳性和三阴性乳腺癌三种主要类型，预后和治疗方案各异。了解安吉丽娜·朱莉的预防性手术选择背后的科学依据。",
      tags: ["乳腺癌", "预防性手术", "DeSci"],
      image: "/attached_assets/image_1752414255252.png",
      readTime: "5 分钟",
      link: "https://x.com/CancerDAOxyz/status/1899391536229499117"
    }
  ];

  // 科普知识数据
  const insightArticles = [
    {
      id: 1,
      title: "癌症治疗的突破",
      category: "治疗进展",
      excerpt: "这个非常规的案例研究强调了溶瘤病毒疗法作为新辅助治疗方式的潜力。",
      tags: ["溶瘤病毒", "治疗突破", "创新疗法"],
      image: "/attached_assets/image_1752401674727.png",
      link: "https://x.com/CancerDAOxyz/status/1859207201610686641"
    },

    {
      id: 5,
      title: "高糖摄入量如何增加癌症风险",
      category: "癌症预防",
      excerpt: "高糖摄入量如何通过四种生理机制增加癌症风险：血糖升高、炎症反应、氧化应激和肥胖相关的激素失衡。",
      tags: ["糖摄入", "癌症预防", "生理机制"],
      image: "/attached_assets/image_1752412155148.png",
      link: "https://x.com/CancerDAOxyz/status/1902009532613808231"
    },
    {
      id: 6,
      title: "癌症免疫治疗的突破",
      category: "治疗进展",
      excerpt: "癌症免疫治疗的突破！Monash 和 Southampton 的研究人员发现 XPO1 蛋白能吸引自然杀伤（NK）细胞，提高癌症患者的生存率。",
      tags: ["免疫治疗", "XPO1蛋白", "NK细胞"],
      image: "/attached_assets/image_1752423313435.png",
      link: "https://x.com/CancerDAOxyz/status/1878793316613128446"
    }
  ];

  // 常见问题数据
  const faqData = [
    {
      category: "平台使用",
      questions: [
        {
          question: "如何开始使用CancerDAO平台？",
          answer: "您可以通过访问我们的官方网站注册账户，下载CancerDAO PILL应用程序，然后按照引导步骤完成个人资料设置。我们的AI医疗助手将帮助您开始健康数据管理。"
        },
        {
          question: "CancerDAO PILL支持哪些类型的医疗数据？",
          answer: "我们的平台支持多种类型的医疗数据，包括实验室检查报告、影像学报告、出院小结、用药记录、基因检测结果等。AI系统能够智能识别和解读这些不同格式的医疗文档。"
        },
        {
          question: "如何上传和管理我的健康数据？",
          answer: "您可以通过应用程序的上传功能添加医疗文档，系统会自动进行AI解析和分类。所有数据都会按时间顺序整理在您的个人健康时间轴中，方便查看和管理。"
        }
      ]
    },
    {
      category: "技术原理",
      questions: [
        {
          question: "CancerDAO的AI技术如何工作？",
          answer: "我们的AI系统基于深度学习和自然语言处理技术，能够识别和解析各种医疗文档。通过训练大量的医疗数据，AI能够提取关键信息，进行风险评估，并提供个性化的健康建议。"
        },
        {
          question: "区块链技术在平台中的作用是什么？",
          answer: "区块链技术确保您的医疗数据具有不可篡改性和可追溯性。每次数据的访问和使用都会被记录在区块链上，您可以完全控制谁可以访问您的数据，以及如何使用这些数据。"
        },
        {
          question: "什么是全同态加密(FHE)？",
          answer: "全同态加密是一种先进的加密技术，允许在不解密数据的情况下直接对加密数据进行计算。这意味着研究人员可以在您的数据保持完全加密的状态下进行分析，确保隐私安全。"
        }
      ]
    },
    {
      category: "数据隐私",
      questions: [
        {
          question: "我的数据安全吗？",
          answer: "是的，我们采用最高级别的安全措施保护您的数据。包括端到端加密、区块链技术、全同态加密等多重保护机制，确保您的健康数据始终安全可控。"
        },
        {
          question: "我可以控制谁访问我的数据吗？",
          answer: "绝对可以。您拥有数据的完全控制权，可以决定是否授权特定的研究机构或AI模型访问您的匿名化数据。所有访问都需要您的明确同意。"
        },
        {
          question: "如果我想删除我的数据怎么办？",
          answer: "您有权随时删除您的个人数据。我们提供完整的数据删除功能，确保您的数据从我们的系统中完全移除。但请注意，已经匿名化用于研究的数据可能无法完全撤回。"
        }
      ]
    },
    {
      category: "社区参与",
      questions: [
        {
          question: "如何加入CancerDAO社区？",
          answer: "您可以通过我们的Discord服务器、Twitter等社交平台加入我们的社区。我们定期举办线上活动、研讨会和开发者聚会，欢迎所有对癌症防治有兴趣的人参与。"
        },
        {
          question: "我可以为项目做出什么贡献？",
          answer: "有多种方式可以贡献：分享您的健康数据支持研究、参与社区讨论、提供反馈建议、参与开发活动、或者帮助传播项目理念。每种贡献都对我们的使命很重要。"
        },
        {
          question: "社区活动有哪些？",
          answer: "我们定期举办各种活动，包括AI医疗创新峰会、区块链健康数据研讨会、社区开发者马拉松、患者支持网络聚会等。请关注我们的社交媒体获取最新活动信息。"
        }
      ]
    }
  ];

  const filteredFaq = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 页面标题 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-8">
            {t('resources.title') || '资源中心'}
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            {t('resources.subtitle') || '获取最新的研究资源、技术文档和社区指南，深入了解CancerDAO的创新理念和前沿技术。'}
          </p>
        </div>

        {/* 主要内容区域 */}
        <Tabs defaultValue="blog" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="blog" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
{t("resources.blog.title")}
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              {t("resources.insights.title")}
            </TabsTrigger>
            <TabsTrigger value="faq" className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              {t("resources.faq.title")}
            </TabsTrigger>
          </TabsList>

          {/* 博客文章模块 */}
          <TabsContent value="blog" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">
                {t("resources.blog.title")}
              </h2>
              <p className="text-lg text-black">
                {t("resources.blog.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="aspect-video rounded-t-lg overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    
                    <CardTitle className="text-lg font-bold text-black line-clamp-2">
                      {post.title}
                    </CardTitle>
                    
                  </CardHeader>
                  <CardContent>
                    <p className="text-black mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <Button 
                      className="w-full"
                      style={{ backgroundColor: '#fad000' }}
                      onClick={() => window.open(post.link, '_blank')}
                    >
                      {t("resources.read.more")} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* 科普知识模块 */}
          <TabsContent value="insights" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">
                {t("resources.insights.title")}
              </h2>
              <p className="text-lg text-black">
                {t("resources.insights.subtitle")}
              </p>
            </div>

            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {insightArticles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer flex flex-col h-full">
                  <div className="aspect-video rounded-t-lg overflow-hidden">
                    {article.image === "/api/placeholder/400/200" ? (
                      <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg flex items-center justify-center h-full">
                        <Brain className="h-12 w-12 text-black" />
                      </div>
                    ) : (
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <CardHeader className="flex-shrink-0">
                    <CardTitle className="text-lg font-bold text-black line-clamp-2 min-h-[56px]">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <p className="text-black mb-4 line-clamp-3 flex-grow">
                      {article.excerpt}
                    </p>
                    
                    <Button 
                      size="sm"
                      className="w-full mt-auto"
                      style={{ backgroundColor: '#fad000' }}
                      onClick={() => article.link && window.open(article.link, '_blank')}
                    >
                      {t("resources.learn.more")} <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* 常见问题模块 */}
          <TabsContent value="faq" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">
                {t("resources.faq.title")}
              </h2>
              <p className="text-lg text-black">
                {t("resources.faq.subtitle")}
              </p>
            </div>

            {/* 搜索框 */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-black" />
                <Input
                  placeholder={t("resources.faq.search.placeholder")}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* FAQ内容 */}
            <div className="space-y-8">
              {filteredFaq.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-xl font-bold text-black mb-4 flex items-center">
                    {category.category === "平台使用" && <Users className="h-5 w-5 mr-2" />}
                    {category.category === "技术原理" && <Brain className="h-5 w-5 mr-2" />}
                    {category.category === "数据隐私" && <Shield className="h-5 w-5 mr-2" />}
                    {category.category === "社区参与" && <Users className="h-5 w-5 mr-2" />}
                    {category.category}
                  </h3>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                        <AccordionTrigger className="text-left text-black hover:text-black">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-black">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            {/* 查看所有问题按钮 */}
            <div className="text-center">
              <Button 
                variant="outline"
                size="lg"
                className="text-black"
                style={{ borderColor: '#fc593d' }}
              >
                {t("resources.faq.viewAll")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* 底部CTA */}
        <div className="mt-16 text-center rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #c9a4ff 0%, #e7d1ff 100%)' }}>
          <h3 className="text-2xl font-bold text-black mb-4">
            {t("resources.contact.title")}
          </h3>
          <p className="text-black mb-6">
            {t("resources.contact.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="font-semibold px-8 py-3 text-black"
              style={{ backgroundColor: '#fad000' }}
              onClick={() => {
                navigate('/about#contact');
                setTimeout(() => {
                  // 滚动到页面大约60%的位置，这是联系我们部分的大概位置
                  window.scrollTo({ top: document.body.scrollHeight * 0.6, behavior: 'smooth' });
                }, 200);
              }}
            >
{t("resources.contact.button")}
            </Button>
            <Button 
              variant="outline"
              className="font-semibold px-8 py-3 text-black"
              style={{ borderColor: '#fc593d' }}
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  document.getElementById('join-community')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
{t("resources.community.button")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}