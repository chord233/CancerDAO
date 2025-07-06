import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Shield,
  Users,
  AlertTriangle,
  TrendingUp,
  Database,
  Smartphone,
  ArrowRight,
  CheckCircle,
  Mail,
  Lock,
  Cpu,
  Calendar,
  MapPin,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/language-context";
// Logo will be loaded dynamically

export default function Homepage() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const { t } = useLanguage();

  const subscribeMutation = useMutation({
    mutationFn: (email: string) =>
      apiRequest("POST", "/api/subscribe", { email }),
    onSuccess: () => {
      toast({
        title: t('toast.subscribe.success.title'),
        description: t('toast.subscribe.success.description'),
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: t('toast.subscribe.error.title'),
        description: error.response?.data?.error || t('toast.subscribe.error.description'),
        variant: "destructive",
      });
    },
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      subscribeMutation.mutate(email.trim());
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent floating-animation">
                CancerDAO
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                {t('hero.title')}
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="btn-primary text-lg px-8 py-4">
                {t('hero.cta1')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                className="btn-secondary text-lg px-8 py-4"
                onClick={() =>
                  document
                    .getElementById("join-community")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t('hero.cta2')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('problem.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('problem.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="problem-card">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {t('problem.global.title')}
                </h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>{t('problem.global.description')}</strong>
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• {t('problem.global.point1')}</li>
                  <li>• {t('problem.global.point2')}</li>
                </ul>
              </div>
            </div>

            <div className="problem-card">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-red-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {t('problem.knowledge.title')}
                </h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>{t('problem.knowledge.description')}</strong>
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• {t('problem.knowledge.point1')}</li>
                  <li>• {t('problem.knowledge.point2')}</li>
                  <li>• {t('problem.knowledge.point3')}</li>
                </ul>
              </div>
            </div>

            <div className="problem-card">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 text-red-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {t('problem.innovation.title')}
                </h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>{t('problem.innovation.description')}</strong>
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• {t('problem.innovation.point1')}</li>
                  <li>• {t('problem.innovation.point2')}</li>
                  <li>• {t('problem.innovation.point3')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('solution.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solution.subtitle')}
            </p>
          </div>

          {/* Core Flow Diagram */}
          <div className="mb-16 bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-200">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              {t('solution.core.title')}
            </h3>
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mb-3 pulse-glow">
                  <Brain className="h-12 w-12 text-white" />
                </div>
                <p className="text-center font-semibold text-gray-900">
                  {t('solution.ai.title')}
                </p>
                <p className="text-sm text-gray-600 text-center max-w-32">
                  {t('solution.ai.description')}
                </p>
              </div>

              <ArrowRight className="h-8 w-8 text-purple-500 transform lg:rotate-0 rotate-90" />

              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-3 pulse-glow">
                  <Shield className="h-12 w-12 text-white" />
                </div>
                <p className="text-center font-semibold text-gray-900">
                  {t('solution.blockchain.title')}
                </p>
                <p className="text-sm text-gray-600 text-center max-w-32">
                  {t('solution.blockchain.description')}
                </p>
              </div>

              <ArrowRight className="h-8 w-8 text-purple-500 transform lg:rotate-0 rotate-90" />

              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mb-3 pulse-glow">
                  <Database className="h-12 w-12 text-white" />
                </div>
                <p className="text-center font-semibold text-gray-900">
                  {t('solution.decentralized.title')}
                </p>
                <p className="text-sm text-gray-600 text-center max-w-32">
                  {t('solution.decentralized.description')}
                </p>
              </div>

              <ArrowRight className="h-8 w-8 text-purple-500 transform lg:rotate-0 rotate-90" />

              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mb-3 pulse-glow">
                  <Cpu className="h-12 w-12 text-white" />
                </div>
                <p className="text-center font-semibold text-gray-900">
                  {t('solution.therapy.title')}
                </p>
                <p className="text-sm text-gray-600 text-center max-w-32">
                  {t('solution.therapy.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="solution-card">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t('solution.ai.pillar.title')}</h3>
              </div>
              <p className="text-gray-600 text-center mb-6">
                {t('solution.ai.pillar.description')}
              </p>
              <div className="text-center">
                <Button variant="outline" className="hover:bg-purple-100">
                  {t('solution.ai.pillar.button')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="solution-card">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t('solution.blockchain.pillar.title')}</h3>
              </div>
              <p className="text-gray-600 text-center mb-6">
                {t('solution.blockchain.pillar.description')}
              </p>
              <div className="text-center">
                <Button variant="outline" className="hover:bg-blue-100">
                  {t('solution.blockchain.pillar.button')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="solution-card">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t('solution.community.pillar.title')}</h3>
              </div>
              <p className="text-gray-600 text-center mb-6">
                {t('solution.community.pillar.description')}
              </p>
              <div className="text-center">
                <Button variant="outline" className="hover:bg-green-100">
                  {t('solution.community.pillar.button')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('product.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('product.subtitle')}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="relative">
                <div className="w-80 h-96 mx-auto bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-700 h-20 flex items-center justify-center">
                      <div className="text-white font-bold text-lg">
                        CancerDAO PILL
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">
                          {t('product.ai.analysis')}
                        </h4>
                        <div className="w-full bg-purple-200 h-2 rounded-full">
                          <div className="bg-purple-600 h-2 rounded-full w-3/4"></div>
                        </div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">
                          {t('product.timeline')}
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <div className="text-sm text-gray-600">
                              {t('product.timeline.item1')}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <div className="text-sm text-gray-600">
                              {t('product.timeline.item2')}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 lg:pl-12">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center mb-4">
                    <Brain className="h-8 w-8 text-purple-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      {t('product.feature1.title')}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {t('product.feature1.description')}
                  </p>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <Smartphone className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      {t('product.feature2.title')}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {t('product.feature2.description')}
                  </p>
                </div>

                <div className="pt-4">
                  <Button className="btn-primary">
                    {t('product.learn.more')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Subscription */}
          <div className="mt-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('subscribe.title')}</h3>
            <p className="text-gray-600 mb-6">
              {t('subscribe.subtitle')}
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder={t('subscribe.placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button
                type="submit"
                disabled={subscribeMutation.isPending}
                className="btn-primary"
              >
                {subscribeMutation.isPending ? t('subscribe.subscribing') : t('subscribe.button')}
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Data Sovereignty */}
      <section className="py-20 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('data.sovereignty.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('data.sovereignty.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-purple-200">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Shield className="h-12 w-12 text-purple-600 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {t('data.nft.title')}
                    </h3>
                    <Badge className="mt-2 bg-purple-100 text-purple-800">
                      {t('data.nft.badge')}
                    </Badge>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('data.nft.description')}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {t('data.nft.point1')}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {t('data.nft.point2')}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {t('data.nft.point3')}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white/80 backdrop-blur-sm border-purple-200">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Lock className="h-12 w-12 text-blue-600 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {t('data.fhe.title')}
                    </h3>
                    <Badge className="mt-2 bg-blue-100 text-blue-800">
                      {t('data.fhe.badge')}
                    </Badge>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('data.fhe.description')}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {t('data.fhe.point1')}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {t('data.fhe.point2')}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {t('data.fhe.point3')}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Power */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('community.power.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('community.power.subtitle')}
            </p>
          </div>

          {/* Activities Carousel */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              {t('community.activities.title')}
            </h3>
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-4">
                        <Calendar className="h-6 w-6 text-purple-600 mr-2" />
                        <span className="text-sm text-purple-600 font-semibold">
                          {t('community.activities.upcoming')}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {t('community.activities.event1.title')}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        {t('community.activities.event1.description')}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        {t('community.activities.event1.location')}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-4">
                        <Calendar className="h-6 w-6 text-blue-600 mr-2" />
                        <span className="text-sm text-blue-600 font-semibold">
                          {t('community.activities.ongoing')}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {t('community.activities.event2.title')}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        {t('community.activities.event2.description')}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        {t('community.activities.event2.location')}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-4">
                        <Calendar className="h-6 w-6 text-green-600 mr-2" />
                        <span className="text-sm text-green-600 font-semibold">
                          {t('community.activities.completed')}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {t('community.activities.event3.title')}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        {t('community.activities.event3.description')}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        {t('community.activities.event3.location')}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-4">
                        <Calendar className="h-6 w-6 text-yellow-600 mr-2" />
                        <span className="text-sm text-yellow-600 font-semibold">
                          {t('community.activities.upcoming')}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {t('community.activities.event4.title')}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        {t('community.activities.event4.description')}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        {t('community.activities.event4.location')}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t('community.global.title')}
                </h3>
                <p className="text-3xl font-bold text-purple-600 mb-2">
                  {t('community.global.count')}
                </p>
                <p className="text-gray-600">{t('community.global.label')}</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t('community.data.title')}
                </h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">{t('community.data.count')}</p>
                <p className="text-gray-600">{t('community.data.label')}</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t('community.ai.title')}
                </h3>
                <p className="text-3xl font-bold text-green-600 mb-2">{t('community.ai.count')}</p>
                <p className="text-gray-600">{t('community.ai.label')}</p>
              </CardContent>
            </Card>
          </div>

          <div
            id="join-community"
            className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-center text-white"
          >
            <h3 className="text-2xl font-bold mb-4">{t('community.join.title')}</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              {t('community.join.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3">
                {t('community.join.discord')}
              </Button>
              <Button
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3"
                onClick={() =>
                  window.open("https://twitter.com/CancerDAOxyz", "_blank")
                }
              >
                {t('community.join.twitter')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('partners.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('partners.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200 flex items-center justify-center h-24"
              >
                <div className="text-gray-400 font-semibold">{t('partners.item')} {i}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('team.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('team.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Alice Chen",
                role: t('team.founder'),
                expertise: t('team.ai.bio'),
              },
              {
                name: "Dr. Bob Wang",
                role: t('team.cto'),
                expertise: t('team.blockchain.crypto'),
              },
              { name: "Dr. Carol Li", role: t('team.cmo'), expertise: t('team.oncology') },
              {
                name: "Dr. David Zhang",
                role: t('team.scientist'),
                expertise: t('team.ml'),
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(" ")[1][0]}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="btn-primary">
              {t('team.learn.more')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
