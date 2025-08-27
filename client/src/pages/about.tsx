import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/language-context";
import { apiRequest } from "@/lib/queryClient";
import { 
  Linkedin, 
  Mail, 
  MapPin, 
  Award, 
  Heart, 
  Zap,
  ExternalLink,
  Send,
  Phone,
  ArrowRight,
  Target
} from "lucide-react";

// Custom Twitter X Icon Component
const TwitterXIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function About() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();

  // 确保页面加载时滚动到顶部
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    organization: '',
    phone: '',
    privacyAgreed: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (field: string, value: string) => {
    setContactForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // 改进后的 handleSubmit 函数
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 表单验证
    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim() || !contactForm.subject) {
      toast({
        title: t('about.contact.error.required') || "错误",
        description: t('about.contact.error.required.desc') || "请填写所有必填字段",
        variant: "destructive"
      });
      return;
    }

    // 邮箱格式验证
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactForm.email)) {
      toast({
        title: t('about.contact.error.email') || "错误",
        description: t('about.contact.error.email.desc') || "请输入有效的邮箱地址",
        variant: "destructive"
      });
      return;
    }

    if (!contactForm.privacyAgreed) {
      toast({
        title: t('about.contact.error.privacy') || "错误",
        description: t('about.contact.error.privacy.desc') || "您必须同意隐私政策才能提交表单",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = {
        name: contactForm.name.trim(),
        email: contactForm.email.trim(),
        subject: contactForm.subject,
        message: contactForm.message.trim(),
        organization: contactForm.organization.trim(),
        phone: contactForm.phone.trim(),
        privacyAgreed: contactForm.privacyAgreed,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
      };

      const response = await apiRequest("POST", "/api/contact", formData);


      if (response.ok) {
        toast({
          title: t('about.contact.success') || "成功",
          description: t('about.contact.success.desc') || "信息已发送，感谢您的联系！我们会在24小时内回复您。"
        });

        // Reset form
        setContactForm({
          name: '',
          email: '',
          subject: '',
          message: '',
          organization: '',
          phone: '',
          privacyAgreed: false
        });
      } else {
        throw new Error('Network response was not ok');
      }

    } catch (error) {
      console.error('Contact form submission error:', error);
      toast({
        title: t('about.contact.error') || "提交失败",
        description: t('about.contact.error.desc') || "抱歉，邮件发送失败。请稍后再试或直接发送邮件至 contact@cancerdao.org",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const teamMembers = [
    {
      name: "Prof. Michael Yang, PhD",
      titleKey: "about.team.title.michael",
      roleKey: "about.team.role.michael",
      image: "/homepage/people1.jpg",
      linkedin: "#",
      twitter: "#",
      email: "#"
    },
    {
      name: "Prof. YoSean Wang, PhD", 
      titleKey: "about.team.title.yosean",
      roleKey: "about.team.role.yosean",
      image: "/homepage/people2.jpg",
      linkedin: "#",
      twitter: "#",
      email: "#"
    },
    {
      name: "Zhiwei Bao, PhD",
      titleKey: "about.team.title.zhiwei",
      roleKey: "about.team.role.zhiwei",
      image: "/homepage/people3.jpg",
      linkedin: "#",
      twitter: "#",
      email: "#"
    },
    {
      name: "Aspire Cao",
      titleKey: "about.team.title.aspire",
      image: "/homepage/people4.jpg",
      linkedin: "#",
      twitter: "#",
      email: "#"
    },
    {
      name: "Jennifer Cheng Lo",
      titleKey: "about.team.title.jennifer",
      image: "/homepage/people5.jpg",
      linkedin: "#",
      twitter: "#",
      email: "#"
    },
    {
      name: "Jonathan Hakim",
      titleKey: "about.team.title.jonathan",
      image: "/homepage/people6.png",
      linkedin: "#",
      twitter: "#",
      email: "#"
    },
    {
      name: "Daqi Lee",
      titleKey: "about.team.title.daqi",
      image: "/homepage/people1.jpg",
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  ];

  // Fallback real avatars from public assets
  const fallbackAvatars = [
    "/homepage/people1.jpg",
    "/homepage/people2.jpg",
    "/homepage/people3.jpg",
    "/homepage/people4.jpg",
    "/homepage/people5.jpg",
    "/homepage/people6.png",
  ];

  

  return (
    <div id="top" className="min-h-screen ">
      {/* Hero（仅本区使用背景） */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        {/* 背景层：图片 + 渐变遮罩 */}
        <div
          aria-hidden
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/about_background.png)', backgroundPosition: 'center 40%' }}
        />
        <div
          aria-hidden
          className="absolute inset-0 z-0 bg-gradient-to-b from-[#f7c1cf]/70 via-[#e3dbfb]/65 to-[#ffd89a]/70"
        />
        <div className="relative z-10 max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6 lg:mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.15)] font-serif tracking-tight">
            {t('about.title') || 'About CancerDAO'}
          </h1>
          <p className="text-lg sm:text-xl text-black max-w-2xl sm:max-w-3xl mx-auto leading-relaxed md:leading-8 mb-2 sm:mb-4 lg:mb-6">
            {t('about.hero.description') || 'We are a global community of scientists, technologists, and visionaries united by one mission: to create a world where cancer is no longer a death sentence. Through the power of AI, blockchain technology, and collective intelligence, we are revolutionizing how we prevent, detect, and treat cancer.'}
          </p>
          
        </div>
        </div>
        {/* Hero 底部白色渐隐，过渡到内容区 */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 z-0 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* 主体内容容器 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Mission + Vision Section */}
        <section className="mb-20">
          
          

          {/* 背景带 + 双列卡片 */}
          <div className="rounded-[32px]  p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Mission Card - 浅色卡片 */}
            <div className="rounded-[28px] bg-white/95 backdrop-blur p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] ring-1 ring-black/5">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center bg-black/5">
                  <Zap className="w-8 h-8 text-black"/>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-3 font-serif tracking-tight">{t('about.mission.title') || 'Our Mission'}</h3>
                  <p className="text-black/80 leading-relaxed">
                    {t('about.mission.subtitle') || 'Transforming cancer care through innovation, collaboration, and unwavering determination.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card - 渐变卡片 */}
            <div className="rounded-[28px] p-6 sm:p-8 shadow-[0_12px_36px_rgba(121,90,255,0.18)] ring-1 ring-white/60"
                 style={{ background: 'linear-gradient(180deg, #eef0ff 0%, #e7d1ff 55%, #d9c8ff 100%)' }}>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center bg-white/80">
                  <Target className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-3 font-serif tracking-tight">{t('about.vision.title') || 'Our Vision'}</h3>
                  <p className="text-black leading-relaxed">
                    {t('about.vision.description') || 'We envision a future where every individual has access to personalized, AI-powered cancer prevention and treatment. A world where medical data is secure, transparent, and serves the greater good. Where breakthrough discoveries are accelerated through global collaboration, and where no one faces cancer alone.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

        

        {/* Team Section */}
        <section className="relative overflow-hidden mb-20 py-16 sm:py-20 lg:py-24 rounded-3xl bg-gradient-to-b from-white via-[#F3F0FE] to-[#EAE3FA]">
          {/* 背景叠加图层 */}
          <div
            aria-hidden
            className="absolute inset-0 z-0 opacity-40 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/homepage/background.png)', filter: 'brightness(1.05) contrast(0.95)' }}
          />

          {/* 内容容器 */}
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4 font-serif tracking-tight">
                {t('about.team.title') || 'Our Team'}
              </h2>
              <p className="text-xl text-black/90 max-w-3xl mx-auto">
                {t('about.team.subtitle') || 'Meet the visionaries and experts driving our mission forward.'}
              </p>
            </div>

            {/* Mobile: 简洁头像网格 */}
            <div className="grid sm:hidden grid-cols-3 gap-6 place-items-center">
              {teamMembers.slice(0,9).map((m, i) => (
                <div key={i} className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/70 shadow bg-white/60 flex items-center justify-center">
                  {/* 如果是占位图则落到备用头像 */}
                  {(() => {
                    const hasRealImg = m.image && !m.image.includes('placeholder');
                    const displayImg = hasRealImg ? m.image : fallbackAvatars[i % fallbackAvatars.length];
                    if (displayImg) {
                      return <img src={displayImg} alt={m.name} className="w-full h-full object-cover" loading="lazy" decoding="async" />;
                    }
                    return (
                      <div className="w-full h-full flex items-center justify-center text-xl font-bold text-black" style={{ background: 'linear-gradient(135deg, #c9a4ff 0%, #e7d1ff 100%)' }}>
                        {m.name.split(' ')[0][0]}{m.name.split(' ')[1] ? m.name.split(' ')[1][0] : ''}
                      </div>
                    );
                  })()}
                </div>
              ))}
            </div>

            {/* Desktop: 环形轨道展示 */}
            <div className="hidden sm:block">
              <div className="relative mx-auto w-full max-w-5xl h-[560px] sm:h-[620px] lg:h-[700px]">
                {/* 四个同心圆：纯描边 */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[620px] sm:size-[680px] lg:size-[760px] rounded-full border-[1.5px] border-amber-300" />
                <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[520px] sm:size-[580px] lg:size-[640px] rounded-full border-[1.5px] border-pink-300" />
                <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[400px] sm:size-[440px] lg:size-[480px] rounded-full border-[1.5px] border-rose-200" />
                <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[260px] sm:size-[300px] lg:size-[320px] rounded-full border-[1.5px] border-orange-200" />

                {/* 中心标志 */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center select-none">
                  <div className="leading-tight">
                    <img src="/homepage/people4.jpg" alt="center" className="w-16 h-16 rounded-full object-cover mx-auto mb-1 hidden" />
                    <img src="/homepage/biglogo.png" alt="CancerDAO" className="w-20 h-20 object-contain" />
                  </div>
              </div>

                {/* 头像与悬浮名片 */}
                {teamMembers.slice(0,10).map((m, i) => {
                  const layout = [
                    { orbit: 3, angle: 330 }, { orbit: 3, angle: 110 },
                    { orbit: 2, angle: 210 }, { orbit: 2, angle: 45 },
                    { orbit: 1, angle: 160 }, { orbit: 1, angle: 350 },
                    { orbit: 4, angle: 260 }, { orbit: 4, angle: 20 },
                    { orbit: 2, angle: 300 }, { orbit: 3, angle: 200 },
                  ];
                  const { orbit, angle } = layout[i % layout.length];
                  const translate = orbit === 4 ? 'translate-x-[282px] sm:translate-x-[312px] lg:translate-x-[348px]'
                    : orbit === 3 ? 'translate-x-[253px] sm:translate-x-[283px] lg:translate-x-[312px]'
                    : orbit === 2 ? 'translate-x-[193px] sm:translate-x-[213px] lg:translate-x-[232px]'
                    : 'translate-x-[123px] sm:translate-x-[143px] lg:translate-x-[152px]';
                  const initials = `${m.name.split(' ')[0][0]}${m.name.split(' ')[1] ? m.name.split(' ')[1][0] : ''}`;
                  const hasRealImg = m.image && !m.image.includes('placeholder');
                  const displayImg = hasRealImg ? m.image : fallbackAvatars[i % fallbackAvatars.length];
                  return (
                    <div key={`${m.name}-${i}`} className="group">
                      <div className="absolute left-1/2 top-1/2" style={{ transform: `translate(-50%,-50%) rotate(${angle}deg)` }}>
                        <div className={`relative transform ${translate}`}>
                          <div style={{ transform: `rotate(${-angle}deg)` }} className="relative">
                            {/* 头像/占位 */}
                            {displayImg ? (
                              <img src={displayImg} alt={m.name} className="w-14 h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-white/80 shadow-lg" loading="lazy" decoding="async" />
                            ) : (
                              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border-2 border-white/80 shadow-lg flex items-center justify-center text-base lg:text-lg font-bold text-black" style={{ background: 'linear-gradient(135deg, #c9a4ff 0%, #e7d1ff 100%)' }}>{initials}</div>
                            )}
                            {/* 悬浮名片 */}
                            <div className="absolute left-1/2 -translate-x-1/2 translate-y-3 hidden group-hover:block z-10">
                              <div className="min-w-[180px] max-w-[220px] rounded-2xl bg-white/90 backdrop-blur border border-black/5 p-3 shadow-xl text-left">
                                <div className="flex items-center gap-3 mb-2">
                                  {displayImg ? (
                                    <img src={displayImg} alt={m.name} className="w-10 h-10 rounded-full object-cover" />
                                  ) : (
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-black" style={{ background: 'linear-gradient(135deg, #c9a4ff 0%, #e7d1ff 100%)' }}>{initials}</div>
                                  )}
                                  <div>
                                    <div className="font-semibold text-black">{m.name}</div>
                                    <div className="text-xs text-black/60">{t(m.titleKey)}</div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 pt-1">
                                  <a href={m.linkedin || '#'} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-black/5 hover:bg-black/10 text-black">
                                    <Linkedin className="w-4 h-4" />
                                  </a>
                                  <a href={m.twitter || '#'} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-black/5 hover:bg-black/10 text-black">
                                    <TwitterXIcon className="w-4 h-4" />
                                  </a>
                                  <a href={m.email || '#'} className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-black/5 hover:bg-black/10 text-black">
                                    <Mail className="w-4 h-4" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
  {t('about.contact.title')}
            </h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
{t('about.contact.form.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-black">
  {t('about.contact.name')} <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={contactForm.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      placeholder={t('about.contact.placeholder.name')}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-black">
{t('about.contact.email')} <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      placeholder={t('about.contact.placeholder.email')}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-black">
{t('about.contact.subject')} <span className="text-red-500">*</span>
                  </Label>
                  <Select value={contactForm.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('about.contact.placeholder.subject')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={t('about.contact.subject.general')}>{t('about.contact.subject.general')}</SelectItem>
                      <SelectItem value={t('about.contact.subject.technical')}>{t('about.contact.subject.technical')}</SelectItem>
                      <SelectItem value={t('about.contact.subject.partnership')}>{t('about.contact.subject.partnership')}</SelectItem>
                      <SelectItem value={t('about.contact.subject.media')}>{t('about.contact.subject.media')}</SelectItem>
                      <SelectItem value={t('about.contact.subject.other')}>{t('about.contact.subject.other')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="organization" className="text-black">
{t('about.contact.organization')}
                    </Label>
                    <Input
                      id="organization"
                      type="text"
                      value={contactForm.organization}
                      onChange={(e) => handleInputChange('organization', e.target.value)}
                      placeholder={t('about.contact.placeholder.organization')}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-black">
{t('about.contact.phone')}
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={contactForm.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder={t('about.contact.placeholder.phone')}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-black">
{t('about.contact.message')} <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    value={contactForm.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    placeholder={t('about.contact.placeholder.message')}
                    rows={6}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="privacy"
                    checked={contactForm.privacyAgreed}
                    onCheckedChange={(checked) => 
                      setContactForm(prev => ({ ...prev, privacyAgreed: checked as boolean }))
                    }
                  />
                  <Label htmlFor="privacy" className="text-sm text-black">
{t('about.contact.privacy')}<span className="text-red-500">*</span>
                  </Label>
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                  style={{ backgroundColor: '#fad000' }}
                >
{isSubmitting ? t('about.contact.submitting') : t('about.contact.submit')}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-8">
                <h3 className="text-xl font-bold text-black mb-6">
{t('about.contact.other.title')}
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e7d1ff' }}>
                      <Mail className="h-6 w-6 text-black" />
                    </div>
                    <div>
<h4 className="font-semibold text-black">{t('about.contact.official.email')}</h4>
                      <a 
                        href="mailto:contact@cancerdao.org" 
                        className="text-black hover:underline"
                      >
                        contact@cancerdao.org
                      </a>
                    </div>
                  </div>

                  
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold text-black mb-6">
{t('about.contact.social.media')}
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="flex-1"
                    onClick={() => window.open('http://discord.gg/zKwyqxjeun', '_blank')}
                  >
                    Discord
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="flex-1"
                    onClick={() => window.open('https://twitter.com/CancerDAOxyz', '_blank')}
                  >
                    Twitter
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="flex-1"
                    onClick={() => window.open('https://web.telegram.org/a/#-1002393239074_1', '_blank')}
                  >
                    Telegram
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>

              <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, #e7d1ff 0%, #c9a4ff 100%)' }}>
                <h3 className="text-lg font-bold text-black mb-2">
{t('about.contact.response.time')}
                </h3>
                <p className="text-black">
{t('about.contact.response.desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #c9a4ff 0%, #e7d1ff 100%)' }}>
          <h3 className="text-2xl font-bold text-black mb-4">
            {t('about.cta.title') || 'Join Our Mission'}
          </h3>
          <p className="text-black mb-6 max-w-2xl mx-auto">
            {t('about.cta.description') || 'Whether you are a researcher, developer, patient, or simply someone who believes in our cause, there is a place for you in our community.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="font-semibold px-8 py-3 text-black"
              style={{ backgroundColor: '#fad000' }}
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  document.getElementById('join-community')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              {t('about.cta.join') || 'Join Our Community'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline"
              className="font-semibold px-8 py-3 text-black"
              style={{ borderColor: '#fc593d' }}
              onClick={() => window.location.href = '/solution'}
            >
              {t('about.cta.learn') || 'Learn More'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}