import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { 
  Heart, 
  Users, 
  MessageCircle, 
  BookOpen, 
  ArrowRight, 
  Shield,
  ExternalLink,
  UserCheck,
  Lightbulb,
  Handshake
} from "lucide-react";

export default function Community() {
  const { t } = useLanguage();

  // 社区真实故事数据
  const communityStories = [
    {
      id: 1,
      title: t("community.story1.title"),
      avatar: "A",
      summary: t("community.story1.summary"),
      category: t("community.story1.category"),
      readTime: t("community.story1.readTime")
    },
    {
      id: 2,
      title: t("community.story2.title"),
      avatar: "张",
      summary: t("community.story2.summary"),
      category: t("community.story2.category"),
      readTime: t("community.story2.readTime")
    },
    {
      id: 3,
      title: t("community.story3.title"),
      avatar: "李",
      summary: t("community.story3.summary"),
      category: t("community.story3.category"),
      readTime: t("community.story3.readTime")
    }
  ];

  // 社区价值支柱
  const communityValues = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: t("community.values.emotional.title"),
      description: t("community.values.emotional.description")
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: t("community.values.information.title"),
      description: t("community.values.information.description")
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: t("community.values.professional.title"),
      description: t("community.values.professional.description")
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 页面主标题 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-8">
            {t("community.title")}
          </h1>
          <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed">
            {t("community.subtitle")}
          </p>
        </div>

        

        {/* 社区真实故事区 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              {t("community.stories.title")}
            </h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              {t("community.stories.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityStories.map((story) => (
              <Card key={story.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-black" style={{ background: 'linear-gradient(135deg, #c9a4ff 0%, #e7d1ff 100%)' }}>
                      {story.avatar}
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold text-black">
                        {story.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge style={{ backgroundColor: '#e7d1ff' }} className="text-black text-xs">
                          {story.category}
                        </Badge>
                        <span className="text-sm text-black">
                          {story.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-black leading-relaxed mb-4">
                    {story.summary}
                  </p>
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
        </section>

        {/* 社区统计数据展示 */}
        <section className="mb-20">
          <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #e7d1ff 0%, #c9a4ff 100%)' }}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-black mb-4">
                我们的社区力量
              </h2>
              <p className="text-lg text-black">
                数字背后是每一个真实的故事和坚定的信念
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">2,000+</div>
                <div className="text-black">活跃成员</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">500+</div>
                <div className="text-black">分享故事</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">100+</div>
                <div className="text-black">专业志愿者</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">24/7</div>
                <div className="text-black">社区支持</div>
              </div>
            </div>
          </div>
        </section>

        {/* 社区活动预览 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              社区活动
            </h2>
            <p className="text-lg text-black">
              参与我们的各种活动，与社区成员一起学习、成长和互助
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge style={{ backgroundColor: '#c9a4ff' }} className="text-black">
                    即将开始
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-black">
                  每周患者支持小组
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-black mb-4">
                  每周日晚上8点，我们都会举办线上支持小组活动，为患者和家属提供情感支持和经验分享的平台。
                </p>
                <div className="flex items-center gap-4 text-sm text-black">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>20-30人</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>线上会议</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge style={{ backgroundColor: '#e7d1ff' }} className="text-black">
                    进行中
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-black">
                  医疗知识分享会
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-black mb-4">
                  定期邀请医疗专家和经验丰富的患者分享最新的治疗方法、护理技巧和康复经验。
                </p>
                <div className="flex items-center gap-4 text-sm text-black">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>50-100人</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>线上直播</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 立即加入社区行动号召区 */}
        <div className="text-center rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #c9a4ff 0%, #e7d1ff 100%)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-6">
              {t("community.join.title")}
            </h2>
            <p className="text-lg text-black mb-8">
              {t("community.join.subtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="font-semibold px-8 py-4 text-lg text-black"
                style={{ backgroundColor: '#fad000' }}
                onClick={() => window.location.href = '/'}
              >
{t("community.join.button")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="font-semibold px-8 py-4 text-lg text-black"
                style={{ borderColor: '#fc593d' }}
                onClick={() => window.open('http://discord.gg/zKwyqxjeun', '_blank')}
              >
                访问Discord社区
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="font-semibold px-8 py-4 text-lg text-black"
                style={{ borderColor: '#fc593d' }}
                onClick={() => window.open('https://twitter.com/CancerDAOxyz', '_blank')}
              >
                关注Twitter
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="font-semibold px-8 py-4 text-lg text-black"
                style={{ borderColor: '#c9a4ff' }}
                onClick={() => window.open('https://web.telegram.org/a/#-1002393239074_1', '_blank')}
              >
                加入Telegram群组
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="mt-6 text-sm text-black">
              <p>
                加入后，您将获得：24/7社区支持 • 专业医疗咨询 • 同伴经验分享 • 最新治疗资讯
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}