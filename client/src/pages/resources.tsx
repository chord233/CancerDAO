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
      title: t("resources.blog1.title"),
      excerpt: t("resources.blog1.content"),
      image: "/attached_assets/image_1752400819628.png",
      link: "https://x.com/CancerDAOxyz/status/1906607182369726728"
    },
    {
      id: 2,
      title: t("resources.blog2.title"),
      excerpt: t("resources.blog2.content"),
      image: "/attached_assets/image_1752401190831.png",
      link: "https://x.com/CancerDAOxyz/status/1904163508125945945"
    },
    {
      id: 3,
      title: t("resources.blog3.title"),
      excerpt: t("resources.blog3.content"),
      image: "/attached_assets/image_1752412955703.png",
      link: "https://x.com/CancerDAOxyz/status/1901547167678144864"
    },
    {
      id: 4,
      title: t("resources.blog4.title"),
      excerpt: t("resources.blog4.content"),
      image: "/attached_assets/image_1752414255252.png",
      link: "https://x.com/CancerDAOxyz/status/1899391536229499117"
    }
  ];

  // 科普知识数据
  const insightArticles = [
    {
      id: 1,
      title: t("resources.knowledge1.title"),
      excerpt: t("resources.knowledge1.content"),
      image: "/attached_assets/image_1752401674727.png",
      link: "https://x.com/CancerDAOxyz/status/1859207201610686641"
    },

    {
      id: 5,
      title: t("resources.knowledge2.title"),
      excerpt: t("resources.knowledge2.content"),
      image: "/attached_assets/image_1752412155148.png",
      link: "https://x.com/CancerDAOxyz/status/1902009532613808231"
    },
    {
      id: 6,
      title: t("resources.knowledge3.title"),
      excerpt: t("resources.knowledge3.content"),
      image: "/attached_assets/image_1752423313435.png",
      link: "https://x.com/CancerDAOxyz/status/1878793316613128446"
    }
  ];

  // 常见问题数据
  const faqData = [
    {
      category: t("resources.faq.categories.platform"),
      questions: [
        {
          question: t("resources.faq.questions.q1.question"),
          answer: t("resources.faq.questions.q1.answer"),
        },
        {
          question: t("resources.faq.questions.q2.question"),
          answer: t("resources.faq.questions.q2.answer"),
        },
        {
          question: t("resources.faq.questions.q3.question"),
          answer: t("resources.faq.questions.q3.answer"),
        }
      ]
    },
    {
      category: t("resources.faq.categories.tech"),
      questions: [
        {
          question: t("resources.faq.questions.q4.question"),
          answer: t("resources.faq.questions.q4.answer"),
        },
        {
          question: t("resources.faq.questions.q5.question"),
          answer: t("resources.faq.questions.q5.answer"),
        },
        {
          question: t("resources.faq.questions.q6.question"),
          answer: t("resources.faq.questions.q6.answer"),
        }
      ]
    },
    {
      category: t("resources.faq.categories.privacy"),
      questions: [
        {
          question: t("resources.faq.questions.q7.question"),
          answer: t("resources.faq.questions.q7.answer"),
        },
        {
          question: t("resources.faq.questions.q8.question"),
          answer: t("resources.faq.questions.q8.answer"),
        },
        {
          question: t("resources.faq.questions.q9.question"),
          answer: t("resources.faq.questions.q9.answer"),
        }
      ]
    },
    {
      category: t("resources.faq.categories.community"),
      questions: [
        {
          question: t("resources.faq.questions.q10.question"),
          answer: t("resources.faq.questions.q10.answer"),
        },
        {
          question: t("resources.faq.questions.q11.question"),
          answer: t("resources.faq.questions.q11.answer"),
        },
        {
          question: t("resources.faq.questions.q12.question"),
          answer: t("resources.faq.questions.q12.answer"),
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