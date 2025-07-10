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
      title: "AI在癌症早期检测中的突破性进展",
      author: "Prof. YoSean Wang",
      date: "2024-01-15",
      category: "技术深度",
      excerpt: "探索人工智能如何革命性地改进癌症早期检测的准确性和效率，为患者提供更好的治疗机会。",
      tags: ["AI", "早期检测", "医疗技术"],
      image: "/api/placeholder/400/200",
      readTime: "8 分钟"
    },
    {
      id: 2,
      title: "区块链在医疗数据隐私保护中的应用",
      author: "Zhiwei Bao",
      date: "2024-01-10",
      category: "项目进展",
      excerpt: "了解CancerDAO如何利用区块链技术确保患者数据的安全性和隐私保护，实现真正的数据主权。",
      tags: ["区块链", "数据隐私", "医疗数据"],
      image: "/api/placeholder/400/200",
      readTime: "6 分钟"
    },
    {
      id: 3,
      title: "社区驱动的癌症研究新模式",
      author: "Jennifer Cheng Lo",
      date: "2024-01-05",
      category: "团队见解",
      excerpt: "探讨如何通过社区参与和集体智慧加速癌症研究的进展，建立患者中心的创新生态系统。",
      tags: ["社区", "研究模式", "患者中心"],
      image: "/api/placeholder/400/200",
      readTime: "5 分钟"
    }
  ];

  // 科普知识数据
  const insightArticles = [
    {
      id: 1,
      title: "癌症预防：生活方式的重要性",
      category: "癌症预防",
      excerpt: "了解日常生活中的简单改变如何显著降低患癌风险，包括饮食、运动和环境因素。",
      tags: ["预防", "生活方式", "健康"],
      image: "/api/placeholder/400/200"
    },
    {
      id: 2,
      title: "基因检测：个性化医疗的未来",
      category: "基因科技",
      excerpt: "探索基因检测技术如何帮助我们了解个人癌症风险，制定精准的预防和治疗策略。",
      tags: ["基因检测", "个性化医疗", "精准医疗"],
      image: "/api/placeholder/400/200"
    },
    {
      id: 3,
      title: "免疫疗法：癌症治疗的新希望",
      category: "治疗进展",
      excerpt: "了解免疫疗法如何激活人体自身的免疫系统来对抗癌症，以及最新的研究进展。",
      tags: ["免疫疗法", "治疗", "创新"],
      image: "/api/placeholder/400/200"
    },
    {
      id: 4,
      title: "数据隐私在医疗中的重要性",
      category: "数据隐私",
      excerpt: "了解为什么医疗数据隐私至关重要，以及如何在共享数据促进研究的同时保护患者隐私。",
      tags: ["隐私保护", "医疗数据", "安全"],
      image: "/api/placeholder/400/200"
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
              博客文章
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              科普知识
            </TabsTrigger>
            <TabsTrigger value="faq" className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              常见问题
            </TabsTrigger>
          </TabsList>

          {/* 博客文章模块 */}
          <TabsContent value="blog" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">
                博客与文章：我们的见解与最新进展
              </h2>
              <p className="text-lg text-black">
                深入了解我们的最新研究成果、技术突破和团队洞察
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-t-lg flex items-center justify-center">
                    <BookOpen className="h-12 w-12 text-black" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge style={{ backgroundColor: '#e7d1ff' }} className="text-black">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-sm text-black">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold text-black line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <div className="flex items-center text-sm text-black">
                      <User className="h-4 w-4 mr-2" />
                      <span>{post.author}</span>
                      <Calendar className="h-4 w-4 ml-4 mr-2" />
                      <span>{post.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      className="w-full"
                      style={{ backgroundColor: '#fad000' }}
                    >
                      阅读全文 <ArrowRight className="ml-2 h-4 w-4" />
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
                科普知识：探索健康前沿
              </h2>
              <p className="text-lg text-black">
                了解癌症预防、治疗和前沿科技的最新知识
              </p>
            </div>

            {/* 分类过滤 */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {["全部", "癌症预防", "治疗进展", "基因科技", "数据隐私"].map((category) => (
                <Badge 
                  key={category}
                  className="cursor-pointer px-4 py-2 text-black"
                  style={{ backgroundColor: '#e7d1ff' }}
                >
                  {category}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {insightArticles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg flex items-center justify-center">
                    <Brain className="h-12 w-12 text-black" />
                  </div>
                  <CardHeader>
                    <Badge style={{ backgroundColor: '#c9a4ff' }} className="text-black w-fit">
                      {article.category}
                    </Badge>
                    <CardTitle className="text-lg font-bold text-black line-clamp-2">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {article.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      size="sm"
                      className="w-full"
                      style={{ backgroundColor: '#fad000' }}
                    >
                      了解更多 <ExternalLink className="ml-2 h-4 w-4" />
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
                常见问题
              </h2>
              <p className="text-lg text-black">
                找到关于平台、技术、数据隐私和社区参与的常见问题答案
              </p>
            </div>

            {/* 搜索框 */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-black" />
                <Input
                  placeholder="搜索问题..."
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
                查看所有问题 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* 底部CTA */}
        <div className="mt-16 text-center rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #c9a4ff 0%, #e7d1ff 100%)' }}>
          <h3 className="text-2xl font-bold text-black mb-4">
            还有其他问题？
          </h3>
          <p className="text-black mb-6">
            如果您没有找到所需的信息，请随时联系我们的团队
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
              联系我们
            </Button>
            <Button 
              variant="outline"
              className="font-semibold px-8 py-3 text-black"
              style={{ borderColor: '#fc593d' }}
              onClick={() => window.open('http://discord.gg/zKwyqxjeun', '_blank')}
            >
              加入社区讨论
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}