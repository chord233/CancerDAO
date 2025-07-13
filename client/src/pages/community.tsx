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
import logoVotingImage from "@assets/image_1752395077376.png";

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
                    {t("community.stories.readMore")} <ArrowRight className="ml-2 h-4 w-4" />
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
                {t("community.stats.title")}
              </h2>
              <p className="text-lg text-black">
                {t("community.stats.subtitle")}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">2,000+</div>
                <div className="text-black">{t("community.stats.members")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">500+</div>
                <div className="text-black">{t("community.stats.stories")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">100+</div>
                <div className="text-black">{t("community.stats.volunteers")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">24/7</div>
                <div className="text-black">{t("community.stats.support")}</div>
              </div>
            </div>
          </div>
        </section>

        {/* 社区活动预览 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              {t("community.activities.title")}
            </h2>
            <p className="text-lg text-black">
              {t("community.activities.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => window.open('https://x.com/CancerDAOxyz/status/1896793598873763861', '_blank')}>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge style={{ backgroundColor: '#c9a4ff' }} className="text-black">
{t("community.activities.event1.status")}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-black">
{t("community.activities.event1.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <img 
                    src={logoVotingImage} 
                    alt="Logo Voting Contest" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <p className="text-black mb-4">
                  {t("community.activities.event1.description")}
                </p>
                <div className="flex items-center gap-4 text-sm text-black">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{t("community.activities.event1.participants")}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>{t("community.activities.event1.format")}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => window.open('https://x.com/CancerDAOxyz/status/1901129600165405043', '_blank')}
            >
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge style={{ backgroundColor: '#e7d1ff' }} className="text-black">
{t("community.activities.event2.status")}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-black">
{t("community.activities.event2.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <img 
                    src="/attached_assets/image_1752396814895.png" 
                    alt="DeSci Community Meetup" 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </div>
                <p className="text-black mb-4">
                  {t("community.activities.event2.description")}
                </p>
                <div className="flex items-center gap-4 text-sm text-black">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{t("community.activities.event2.participants")}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>{t("community.activities.event2.format")}</span>
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
{t("community.join.discord")}
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="font-semibold px-8 py-4 text-lg text-black"
                style={{ borderColor: '#fc593d' }}
                onClick={() => window.open('https://twitter.com/CancerDAOxyz', '_blank')}
              >
{t("community.join.twitter")}
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="font-semibold px-8 py-4 text-lg text-black"
                style={{ borderColor: '#c9a4ff' }}
                onClick={() => window.open('https://web.telegram.org/a/#-1002393239074_1', '_blank')}
              >
{t("community.join.telegram")}
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="mt-6 text-sm text-black">
              <p>
{t("community.join.benefits")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}