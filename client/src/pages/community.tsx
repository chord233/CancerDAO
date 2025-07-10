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
      title: "小A的故事：从迷茫到坚定",
      avatar: "A",
      summary: "当小A被诊断出患病时，她感到了前所未有的迷茫和无助。在CancerDAO社区中，她找到了有着相似经历的伙伴，他们的鼓励和经验分享让她重新找回了信心，勇敢地面对治疗。社区的医疗资源推荐也帮助她找到了最合适的医生和治疗方案。",
      category: "情感支持",
      readTime: "3分钟阅读"
    },
    {
      id: 2,
      title: "张妈妈：社区让我不再孤单",
      avatar: "张",
      summary: "张妈妈的家人生病后，她日夜操劳，身心俱疲。是社区中其他患者家属的理解和支持，让她意识到自己并不孤单。大家互相帮助，分享日常护理、心理疏导、资源获取等经验，让张妈妈感受到了家的温暖。",
      category: "家属支持",
      readTime: "4分钟阅读"
    },
    {
      id: 3,
      title: "老李的康复之路：AI与社区的双重力量",
      avatar: "李",
      summary: "老李在康复过程中遇到了很多挑战，CancerDAO PILL的个性化健康时间轴帮助他准确记录和管理数据，而社区成员的康复经验分享也给了他宝贵的建议。AI和社区的双重支持，让老李的康复之路更加顺利和充满希望。",
      category: "康复支持",
      readTime: "5分钟阅读"
    }
  ];

  // 社区价值支柱
  const communityValues = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "情感价值",
      description: "共同的经历和感受，让患者和家属找到归属感，减轻孤独和焦虑。在这里，每个人都能理解你的感受，没有人需要独自承担。"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "信息互助价值",
      description: "成员之间分享诊疗经验、护理知识、资源信息，形成一个实时更新的知识库。集体智慧让每个人都能获得更好的治疗和护理建议。"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "专业知识与个人经验结合",
      description: "社区不仅有用户分享，未来也可能引入专业人士答疑，结合个人经验提供多维度帮助。理论与实践相结合，为每个人提供最实用的指导。"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 页面主标题 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-8">
            社区支持：您从不孤单，我们与您同行
          </h1>
          <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed">
            在CancerDAO社区中，每个人都是重要的一份子。我们相信，通过分享经验、互相支持和共同成长，我们能够一起面对挑战，创造更美好的未来。
          </p>
        </div>

        {/* 社区价值支柱 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              社区如何为您提供支持
            </h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              我们的社区通过多个维度为每位成员提供全方位的支持和帮助
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityValues.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #c9a4ff 0%, #e7d1ff 100%)' }}>
                    {index === 0 && <Heart className="h-8 w-8 text-black" />}
                    {index === 1 && <BookOpen className="h-8 w-8 text-black" />}
                    {index === 2 && <Lightbulb className="h-8 w-8 text-black" />}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">
                    {value.title}
                  </h3>
                  <p className="text-black leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 社区真实故事区 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              倾听他们的声音：社区互助真实故事
            </h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              这些真实的故事展现了社区成员之间的温暖与力量，每个故事都是希望的见证
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
              别再独自面对，加入 CancerDAO 社区，与我们共同抗击癌症，拥抱健康！
            </h2>
            <p className="text-lg text-black mb-8">
              无论您是患者、家属、医疗专业人士还是关心健康的普通人，我们的社区都欢迎您的加入。在这里，您将找到理解、支持和希望。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="font-semibold px-8 py-4 text-lg text-black"
                style={{ backgroundColor: '#fad000' }}
                onClick={() => window.location.href = '/'}
              >
                立即加入社区
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