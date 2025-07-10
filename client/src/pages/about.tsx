import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { 
  Linkedin, 
  Twitter, 
  Mail, 
  MapPin, 
  Award, 
  Users, 
  Heart, 
  Shield, 
  Zap,
  ExternalLink
} from "lucide-react";

export default function About() {
  const { t } = useLanguage();

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

  const coreValues = [
    {
      title: "Deep Science",
      description: "We ground our solutions in rigorous scientific research and cutting-edge technology, ensuring every innovation is backed by solid evidence and expertise."
    },
    {
      title: "Community Driven", 
      description: "Our strength lies in the collective power of our global community. Every voice matters, every contribution counts in our mission to defeat cancer."
    },
    {
      title: "Open Source",
      description: "Transparency and collaboration are at our core. We believe in open science and shared knowledge to accelerate breakthrough discoveries."
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

        {/* Core Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              {t('about.values.title') || 'Our Core Values'}
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              {t('about.values.subtitle') || 'These principles guide everything we do and every decision we make.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #c9a4ff 0%, #e7d1ff 100%)' }}>
                    {index === 0 && <Award className="h-8 w-8 text-black" />}
                    {index === 1 && <Users className="h-8 w-8 text-black" />}
                    {index === 2 && <Shield className="h-8 w-8 text-black" />}
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
                    <h4 className="font-semibold text-black mb-2 text-sm">Achievements:</h4>
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