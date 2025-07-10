import { useState } from "react";
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
  Twitter, 
  Mail, 
  MapPin, 
  Award, 
  Heart, 
  Zap,
  ExternalLink,
  Send,
  Phone
} from "lucide-react";

export default function About() {
  const { t } = useLanguage();
  const { toast } = useToast();
  
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
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactForm.privacyAgreed) {
      toast({
        title: "错误",
        description: "您必须同意隐私政策才能提交表单",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const formData = {
        ...contactForm,
        privacyAgreed: contactForm.privacyAgreed ? 1 : 0
      };
      
      await apiRequest("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      toast({
        title: "成功",
        description: "信息已发送，感谢您的联系！"
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
      
    } catch (error) {
      toast({
        title: "提交失败",
        description: "请稍后再试",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const teamMembers = [
    {
      name: "Prof. Michael Yang, PhD",
      title: "Co-founder, SAB Director",
      role: "Senior VP (Innovation & Enterprise)",
      organization: "City University of Hong Kong",
      achievements: ["HK Tech 300 Director", "DeSAI Lab Co-founder"],
      image: "/api/placeholder/200/200",
      linkedin: "#",
      twitter: "#",
      email: "#"
    },
    {
      name: "Prof. YoSean Wang, PhD", 
      title: "Co-founder, President",
      role: "Research Assistant Professor",
      organization: "City University of Hong Kong",
      achievements: ["Harvard Biomedical Science PhD", "DeSAI Lab Co-founder, Director"],
      image: "/api/placeholder/200/200",
      linkedin: "#",
      twitter: "#",
      email: "#"
    },
    {
      name: "Zhiwei Bao, PhD",
      title: "Co-founder, CTO", 
      role: "AI4Health PhD",
      organization: "Zhejiang University",
      achievements: ["BioLinkX Founder", "AI4Health Specialist"],
      image: "/api/placeholder/200/200",
      linkedin: "#",
      twitter: "#",
      email: "#"
    },
    {
      name: "Aspire Cao",
      title: "Business Lead",
      role: "Strategic Operations",
      organization: "CancerDAO",
      achievements: ["Business Development", "Partnership Strategy"],
      image: "/api/placeholder/200/200",
      linkedin: "#",
      twitter: "#",
      email: "#"
    },
    {
      name: "Jennifer Cheng Lo",
      title: "Marketing Lead",
      role: "Brand & Communications",
      organization: "CancerDAO",
      achievements: ["Digital Marketing", "Community Growth"],
      image: "/api/placeholder/200/200",
      linkedin: "#",
      twitter: "#",
      email: "#"
    },
    {
      name: "Jonathan Hakim",
      title: "Ecosystem Lead",
      role: "Partnership Development",
      organization: "CancerDAO",
      achievements: ["Ecosystem Building", "Strategic Partnerships"],
      image: "/api/placeholder/200/200",
      linkedin: "#",
      twitter: "#",
      email: "#"
    },
    {
      name: "Daqi Lee",
      title: "Community Lead",
      role: "Community Management",
      organization: "CancerDAO",
      achievements: ["Community Building", "Engagement Strategy"],
      image: "/api/placeholder/200/200",
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  ];

  

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-8">
            {t('about.title') || 'About CancerDAO'}
          </h1>
          <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed mb-8">
            {t('about.hero.description') || 'We are a global community of scientists, technologists, and visionaries united by one mission: to create a world where cancer is no longer a death sentence. Through the power of AI, blockchain technology, and collective intelligence, we are revolutionizing how we prevent, detect, and treat cancer.'}
          </p>
          <div className="flex items-center justify-center gap-2 text-black">
            <Heart className="h-5 w-5" style={{ color: '#fc593d' }} />
            <span className="font-semibold">{t('about.hero.tagline') || 'Together, we are building hope through science.'}</span>
          </div>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              {t('about.mission.title') || 'Our Mission'}
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              {t('about.mission.subtitle') || 'Transforming cancer care through innovation, collaboration, and unwavering determination.'}
            </p>
          </div>

          <div className="rounded-3xl p-8 mb-12" style={{ background: 'linear-gradient(135deg, #e7d1ff 0%, #c9a4ff 100%)' }}>
            <div className="max-w-4xl mx-auto text-center">
              <Zap className="h-12 w-12 mx-auto mb-6 text-black" />
              <h3 className="text-2xl font-bold text-black mb-6">
                {t('about.vision.title') || 'Our Vision'}
              </h3>
              <p className="text-lg text-black leading-relaxed">
                {t('about.vision.description') || 'We envision a future where every individual has access to personalized, AI-powered cancer prevention and treatment. A world where medical data is secure, transparent, and serves the greater good. Where breakthrough discoveries are accelerated through global collaboration, and where no one faces cancer alone.'}
              </p>
            </div>
          </div>
        </section>

        

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              {t('about.team.title') || 'Our Team'}
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              {t('about.team.subtitle') || 'Meet the visionaries and experts driving our mission forward.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-black" style={{ background: 'linear-gradient(135deg, #c9a4ff 0%, #e7d1ff 100%)' }}>
                      {member.name.split(' ')[0][0]}{member.name.split(' ')[1] ? member.name.split(' ')[1][0] : ''}
                    </div>
                    <h3 className="text-lg font-bold text-black mb-1">
                      {member.name}
                    </h3>
                    <Badge className="mb-2 text-black" style={{ backgroundColor: '#e7d1ff' }}>
                      {member.title}
                    </Badge>
                    <p className="text-sm font-semibold text-black mb-1">
                      {member.role}
                    </p>
                    <p className="text-sm text-black mb-3">
                      {member.organization}
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-black mb-2 text-sm">{t('about.team.achievements')}:</h4>
                    <div className="space-y-1">
                      {member.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center text-sm text-black">
                          <Award className="h-3 w-3 mr-2 flex-shrink-0" style={{ color: '#fad000' }} />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center gap-2 pt-4 border-t" style={{ borderColor: '#e7d1ff' }}>
                    <Button variant="outline" size="sm" className="p-2">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="p-2">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="p-2">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
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
              onClick={() => window.open('http://discord.gg/zKwyqxjeun', '_blank')}
            >
              {t('about.cta.join') || 'Join Our Community'}
              <ExternalLink className="ml-2 h-4 w-4" />
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