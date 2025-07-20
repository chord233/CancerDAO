import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
import { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import logoVotingImage from "@assets/image_1752395077376.png";

export default function Community() {
  const { t } = useLanguage();


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


        {/* 社区真实故事区 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-black mb-8">
              {t("community.stories.title")}
            </h1>
          </div>

          {/* 嵌入论坛 */}
          <div className="w-full h-[800px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
                src="https://cancerdaoforum.freeflarum.com/"
                className="w-full h-full border-0"
                title="CancerDAO Community Forum"
                loading="lazy"
            />
          </div>

          {/* 添加论坛介绍和引导 */}
          <div className="text-center mt-8">
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-black mb-6">
                {t("community.forum.introduce")}
              </p>
              <Button
                  className="font-semibold px-8 py-3 text-black"
                  style={{ backgroundColor: '#fad000' }}
                  onClick={() => window.open('https://cancerdaoforum.freeflarum.com/', '_blank')}
              >
                {t("community.forum.open")}
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
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

          <div className="max-w-6xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {/* 第一页：Logo投票 + DeSci聚会 */}
                <CarouselItem>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => window.open('https://x.com/CancerDAOxyz/status/1896793598873763861', '_blank')}>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge style={{ backgroundColor: '#fc593d' }} className="text-white">
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
                          <Badge style={{ backgroundColor: '#fc593d' }} className="text-white">
                            {t("community.activities.event2.status")}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl font-bold text-black">
                          {t("community.activities.event2.title")}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <Carousel
                            className="w-full"
                            plugins={[
                              Autoplay({
                                delay: 3000,
                              }),
                            ]}
                          >
                            <CarouselContent>
                              <CarouselItem>
                                <img
                                  src="/attached_assets/image_1752396814895.png"
                                  alt="DeSci Community Meetup"
                                  className="w-full h-48 object-cover rounded-lg"
                                />
                              </CarouselItem>
                              <CarouselItem>
                                <img
                                  src="/attached_assets/76a56adc0003d6c5547509fcd01c7737_1752426046247.jpg"
                                  alt="DeSci Community Meetup - Shanghai Night"
                                  className="w-full h-48 object-cover rounded-lg"
                                />
                              </CarouselItem>
                              <CarouselItem>
                                <img
                                  src="/attached_assets/c95f9936c28805a7c86b63f168aa29ba_1752426083436.jpg"
                                  alt="DeSci Community Meetup - Bitcoin Rowing Club"
                                  className="w-full h-48 object-cover rounded-lg"
                                />
                              </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious className="left-2" />
                            <CarouselNext className="right-2" />
                          </Carousel>
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
                </CarouselItem>

                {/* 第二页：DeSci AMA + 可扩展的第四个活动 */}
                <CarouselItem>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card
                      className="p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                      onClick={() => window.open('https://x.com/CancerDAOxyz/status/1859207201610686641', '_blank')}
                    >
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge style={{ backgroundColor: '#fc593d' }} className="text-white">
                            {t("community.activities.event3.status")}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl font-bold text-black">
                          {t("community.activities.event3.title")}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <img
                            src="/attached_assets/image_1752404470286.png"
                            alt="DeSci AMA"
                            className="w-full h-48 object-cover rounded-lg mb-4"
                          />
                        </div>
                        <p className="text-black mb-4">
                          {t("community.activities.event3.description")}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-black">
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>
                              {t("community.activities.event3.format")}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* DeSAI Meetup 活动 */}
                    <Card
                      className="p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                      onClick={() => window.open('https://x.com/CancerDAOxyz', '_blank')}
                    >
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge style={{ backgroundColor: '#fc593d' }} className="text-white">
                            {t("community.activities.event4.status")}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl font-bold text-black">
                          {t("community.activities.event4.title")}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <Carousel
                            className="w-full"
                            plugins={[
                              Autoplay({
                                delay: 3000,
                              }),
                            ]}
                          >
                            <CarouselContent>
                              <CarouselItem>
                                <img
                                  src="/attached_assets/1f29a9d538c6e8fd2befce30d65e800a_1752426759124.jpg"
                                  alt="DeSAI Meetup Poster"
                                  className="w-full h-48 object-cover rounded-lg"
                                />
                              </CarouselItem>
                              <CarouselItem>
                                <img
                                  src="/attached_assets/b3c97d3df9ed6a7e294888c97e0cb461_1752426773167.jpg"
                                  alt="DeSAI Meetup - Conference Room"
                                  className="w-full h-48 object-cover rounded-lg"
                                />
                              </CarouselItem>
                              <CarouselItem>
                                <img
                                  src="/attached_assets/16ba53464d82239c3899e4588fd2388b_1752426782675.jpg"
                                  alt="DeSAI Meetup - Presentation"
                                  className="w-full h-48 object-cover rounded-lg"
                                />
                              </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious className="left-2" />
                            <CarouselNext className="right-2" />
                          </Carousel>
                        </div>
                        <p className="text-black mb-4">
                          {t("community.activities.event4.description")}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-black">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>
                              {t("community.activities.event4.format")}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>

              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
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
                style={{ borderColor: '#fc593d' }}
                onClick={() => window.open('https://web.telegram.org/a/#-1002393239074_1', '_blank')}
              >
{t("community.join.telegram")}
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}