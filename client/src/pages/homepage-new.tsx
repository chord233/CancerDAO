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
  Coins,
  Smartphone,
  ArrowRight,
  Mail,
  Linkedin,
  Twitter as TwitterIcon,
} from "lucide-react";

// Custom X (Twitter) Icon
const TwitterXIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-4 h-4"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/language-context";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "@assets/1500x500_1752159520914.jfif";
import medicalTimelineImage from "@assets/fcff4af08eed8cfcd771ee7f8838a565_1752466134324.png";
import cancerDaoLogo from "@assets/透明底_1752468326586.png";

export default function Homepage() {
  const [email, setEmail] = useState("");
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const { toast } = useToast();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const subscribeMutation = useMutation({
    mutationFn: (email: string) =>
      apiRequest("POST", "/api/subscribe", { email }),
    onSuccess: () => {
      toast({
        title: t("toast.subscribe.success.title"),
        description: t("toast.subscribe.success.description"),
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: t("toast.subscribe.error.title"),
        description:
          error.response?.data?.error || t("toast.subscribe.error.description"),
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
    <div className="min-h-screen" style={{ background: '#F9F9F9', fontFamily: 'Quando' }}>
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        {/* Main gradient background */}
        <div 
          className="absolute top-[2795px] left-0 w-full h-[860px]" 
          style={{ background: 'linear-gradient(270deg, #FADF6A 0%, #FC9585 50%, #F1B0DF 100%)' }}
        />
        {/* Hero gradient background */}
        <div 
          className="absolute top-[64px] left-0 w-full h-[573px]" 
          style={{ background: 'linear-gradient(180deg, #F6F7FD 0%, #EAE3FA 100%)' }}
        />
        <div 
          className="absolute top-[64px] left-0 w-full h-[573px]" 
          style={{ background: 'linear-gradient(180deg, #F2F3FB 0%, white 53%, #E8E2F9 100%)' }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20" style={{ minHeight: '637px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Hero Title */}
            <h1 
              className="text-5xl lg:text-6xl font-bold mb-16 leading-tight max-w-4xl mx-auto"
              style={{ 
                color: '#333333', 
                fontSize: '50px',
                fontFamily: 'Quando',
                fontWeight: '400',
                lineHeight: '1.2'
              }}
            >
              Revolutionize Cancer Prevention and Care, with the Public
            </h1>
            
            {/* Main illustration */}
            <div className="flex justify-center items-center mb-16 relative">
              <div className="w-[346px] h-[346px] relative">
                <img 
                  src={cancerDaoLogo} 
                  alt="CancerDAO Illustration" 
                  className="w-full h-full object-contain"
                />
                {/* Decorative elements around the main image */}
                <div className="absolute -top-4 -left-8 w-16 h-16 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-70" />
                <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full opacity-60" />
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="flex justify-center">
              <Button
                className="px-12 py-6 text-xl font-semibold rounded-full transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 217, 97, 0.50) 76%)',
                  boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.08)',
                  color: '#333333',
                  border: '2px white solid'
                }}
                onClick={() => window.location.href = "/solution"}
              >
                Learn Our Solution
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative z-10 py-20" style={{ background: 'linear-gradient(215deg, #EDE2FF 0%, #E6ECFF 38%, #E7E6FD 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl lg:text-5xl font-bold mb-4"
              style={{ 
                color: '#333333',
                fontFamily: 'Quando',
                fontWeight: '400',
                fontSize: '44px'
              }}
            >
              The Challenges We Face
            </h2>
            <p 
              className="text-xl max-w-4xl mx-auto"
              style={{ 
                color: '#333333',
                fontFamily: 'Quando',
                fontWeight: '400',
                fontSize: '20px'
              }}
            >
              Cancer is becoming a major threat to human health, and existing prevention and treatment systems have many limitations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 0,
                title: "Rising Global Cancer Incidence, especially among younger populations",
                image: "/attached_assets/2_1752591217296.jpg"
              },
              {
                id: 1, 
                title: "Public Lacks Knowledge and Support in Cancer Prevention and Treatment",
                image: "/attached_assets/3_1752591389815.jpg"
              },
              {
                id: 2,
                title: "Institutions and Enterprises Face Slow and Costly Innovation", 
                image: "/attached_assets/4_1752591925448.jpg"
              }
            ].map((card) => (
              <div 
                key={card.id} 
                className="bg-white rounded-3xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
                style={{
                  background: 'linear-gradient(270deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.04) 100%)',
                  borderRadius: '35px',
                  border: '1px white solid'
                }}
              >
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h3 
                  className="text-lg font-bold leading-relaxed"
                  style={{ 
                    color: '#333333',
                    fontFamily: 'Quando',
                    fontWeight: '400',
                    fontSize: '18px'
                  }}
                >
                  {card.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CancerDAO's Solution */}
      <section className="relative z-10 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl lg:text-5xl font-bold mb-4"
              style={{ 
                color: '#333333',
                fontFamily: 'Quando',
                fontWeight: '400',
                fontSize: '44px'
              }}
            >
              CancerDAO's Solution
            </h2>
            <p 
              className="text-xl max-w-4xl mx-auto"
              style={{ 
                color: '#333333',
                fontFamily: 'Quando',
                fontWeight: '400',
                fontSize: '20px'
              }}
            >
              Building a comprehensive cancer prevention and treatment ecosystem with patient-centered, technology-empowered, and community-driven approach
            </p>
          </div>
          
          {/* Solution Architecture Image */}
          <div className="flex justify-center mb-16">
            <div className="w-full max-w-6xl">
              <img 
                src="/attached_assets/image_1752475567563.png" 
                alt="CancerDAO Solution Architecture" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
          
          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { label: "Health Data", value: "5000+", sublabel: "Anonymized Records" },
              { label: "Community Members", value: "500+", sublabel: "Global Contributors" },
              { label: "AI Accuracy", value: "95%", sublabel: "Prediction Accuracy" },
              { label: "Our Global Impact", value: "Growing", sublabel: "Cancer-free world" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p 
                  className="text-lg font-semibold mb-2"
                  style={{ 
                    color: '#333333',
                    fontFamily: 'Quando',
                    fontWeight: '400',
                    fontSize: '20px'
                  }}
                >
                  {stat.label}
                </p>
                <p 
                  className="text-4xl font-bold mb-2"
                  style={{ 
                    color: '#A83EF6',
                    fontFamily: 'DIN',
                    fontWeight: '500',
                    fontSize: '52.24px'
                  }}
                >
                  {stat.value}
                </p>
                <p 
                  className="text-lg"
                  style={{ 
                    color: '#333333',
                    fontFamily: 'Quando',
                    fontWeight: '400',
                    fontSize: '20px'
                  }}
                >
                  {stat.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Product Preview - Core Product Preview - CancerDAO PILL */}
      <section className="relative z-10 py-20" style={{ background: '#F9F9F9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl lg:text-5xl font-bold mb-4"
              style={{ 
                color: '#333333',
                fontFamily: 'Quando',
                fontWeight: '400',
                fontSize: '44px'
              }}
            >
              Core Product Preview - CancerDAO PILL
            </h2>
            <p 
              className="text-xl max-w-4xl mx-auto"
              style={{ 
                color: '#333333',
                fontFamily: 'Quando',
                fontWeight: '400',
                fontSize: '20px'
              }}
            >
              Explore CancerDAO PILL, your personalized anti-cancer companion.
            </p>
          </div>
          
          {/* First Feature - AI-Driven Smart Medical Record Interpretation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="w-64 h-[32rem] mx-auto">
                <video
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                  controls
                  autoPlay
                  loop
                  muted
                  poster=""
                  preload="metadata"
                >
                  <source src="/attached_assets/视频_1752331442308.mp4" type="video/mp4" />
                  您的浏览器不支持视频播放。
                </video>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <h3 
                className="text-3xl font-bold"
                style={{ 
                  color: '#333333',
                  fontFamily: 'Quando',
                  fontWeight: '400',
                  fontSize: '28px'
                }}
              >
                AI-Driven Smart Medical Record Interpretation
              </h3>
              <p 
                className="text-lg leading-relaxed"
                style={{ 
                  color: '#A3A3A3',
                  fontFamily: 'Quando',
                  fontWeight: '400',
                  fontSize: '20px',
                  lineHeight: '30px'
                }}
              >
                Upload your medical images and text reports. CancerDAO PILL utilizes advanced AI technology to quickly extract key information, interpret complex medical terms, and provide personalized risk insights and health advice, helping you gain a more thorough understanding of your health status.
              </p>
              <div className="pt-4">
                <Button
                  className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(270deg, #F597A9 0%, #EEB7F8 100%)',
                    boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.08)',
                    color: '#333333',
                    border: '2px white solid'
                  }}
                  onClick={() => console.log("Try Now clicked")}
                >
                  Try Now
                </Button>
              </div>
            </div>
          </div>
          
          {/* Second Feature - Your Exclusive Health Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 
                className="text-3xl font-bold"
                style={{ 
                  color: '#333333',
                  fontFamily: 'Quando',
                  fontWeight: '400',
                  fontSize: '28px'
                }}
              >
                Your Exclusive Health Timeline
              </h3>
              <p 
                className="text-lg leading-relaxed"
                style={{ 
                  color: '#A3A3A3',
                  fontFamily: 'Quando',
                  fontWeight: '400',
                  fontSize: '20px',
                  lineHeight: '30px'
                }}
              >
                CancerDAO PILL builds a comprehensive personal health timeline for you, integrating every examination, medication, and daily health data. You can clearly track your health journey, manage personal data, and review it at any time, providing a reliable basis for health decisions.
              </p>
              <div className="pt-4">
                <Button
                  className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(270deg, #F597A9 0%, #EEB7F8 100%)',
                    boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.08)',
                    color: '#333333',
                    border: '2px white solid'
                  }}
                  onClick={() => console.log("Try Now clicked")}
                >
                  Try Now
                </Button>
              </div>
            </div>
            
            <div>
              <div className="w-64 h-[32rem] mx-auto">
                <video
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                  controls
                  autoPlay
                  loop
                  muted
                  poster=""
                  preload="metadata"
                >
                  <source src="/attached_assets/事件线.mp4" type="video/mp4" />
                  您的浏览器不支持视频播放。
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Community Section */}
      <section className="relative z-10 py-20" style={{ background: 'linear-gradient(215deg, #EDE2FF 0%, #E6ECFF 38%, #E7E6FD 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl lg:text-5xl font-bold mb-4"
              style={{ 
                color: '#333333',
                fontFamily: 'Quando',
                fontWeight: '400',
                fontSize: '44px'
              }}
            >
              Stop facing it alone, join CancerDAO community to fight cancer together and embrace health!
            </h2>
            <p 
              className="text-xl max-w-4xl mx-auto"
              style={{ 
                color: '#333333',
                fontFamily: 'Quando',
                fontWeight: '400',
                fontSize: '20px'
              }}
            >
              Whether you are a patient, family member, medical professional, or someone who cares about health, our community welcomes you. Here, you will find understanding, support, and hope.
            </p>
          </div>

          {/* Community Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
            <Button
              className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(270deg, #F597A9 0%, #EEB7F8 100%)',
                boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.08)',
                color: '#333333',
                border: '2px white solid',
                width: '256px',
                height: '70px'
              }}
              onClick={() => window.open("http://discord.gg/zKwyqxjeun", "_blank")}
            >
              Join Discord
            </Button>
            
            <Button
              className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(270deg, #F597A9 0%, #EEB7F8 100%)',
                boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.08)',
                color: '#333333',
                border: '2px white solid',
                width: '256px',
                height: '70px'
              }}
              onClick={() => window.open("https://twitter.com/CancerDAOxyz", "_blank")}
            >
              Follow Twitter
            </Button>
            
            <Button
              className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(270deg, #F597A9 0%, #EEB7F8 100%)',
                boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.08)',
                color: '#333333',
                border: '2px white solid',
                width: '297px',
                height: '70px'
              }}
              onClick={() => window.open("https://web.telegram.org/a/#-1002393239074_1", "_blank")}
            >
              Join Telegram Group
            </Button>
          </div>
        </div>
      </section>
      
      {/* Partner Section */}
      <section className="relative z-10 py-20" style={{ background: 'linear-gradient(215deg, #EDE2FF 0%, #E6ECFF 38%, #E7E6FD 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl lg:text-5xl font-bold mb-4"
              style={{ 
                color: '#333333',
                fontFamily: 'Quando',
                fontWeight: '400',
                fontSize: '44px'
              }}
            >
              Our partner
            </h2>
            <p 
              className="text-xl max-w-4xl mx-auto"
              style={{ 
                color: '#333333',
                fontFamily: 'Quando',
                fontWeight: '400',
                fontSize: '20px'
              }}
            >
              All kinds of organizations are welcome to join and work together to promote innovation
            </p>
          </div>
          
          {/* Partner Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
            {[
              { name: "City University of HongKong", logoImage: "/partner_logo/CityU_logo.svg" },
              { name: "DeSAI XYZ", logoImage: "/partner_logo/DeSAI Simplified Logo 1(1).svg" },
              { name: "DeSAI Sino", logoImage: "/partner_logo/DESCI_SINO_logo.svg" },
              { name: "AuraSci", logoImage: "/partner_logo/AuraSci_logo.png" },
              { name: "DeSci Asia", logoImage: "/partner_logo/DeSciAsia_logo.svg" }
            ].map((partner, index) => (
              <div 
                key={index} 
                className="rounded-3xl p-6 transition-all duration-300 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(270deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.04) 100%)',
                  borderRadius: '35px',
                  border: '1px white solid',
                  height: '106px',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img 
                  src={partner.logoImage} 
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Become Our Partner Section */}
      <section className="relative z-10 py-20">
        {/* Gradient Background */}
        <div 
          className="absolute inset-0" 
          style={{ background: 'linear-gradient(270deg, #FADF6A 0%, #FC9585 50%, #F1B0DF 100%)' }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 
              className="text-4xl lg:text-5xl font-bold mb-8"
              style={{ 
                color: '#333333',
                fontFamily: 'Quando',
                fontWeight: '400',
                fontSize: '44px'
              }}
            >
              Become our partner
            </h2>
            <p 
              className="text-xl max-w-4xl mx-auto mb-12"
              style={{ 
                color: '#333333',
                fontFamily: 'Quando',
                fontWeight: '400',
                fontSize: '20px'
              }}
            >
              We are seeking like-minded institutions and organizations to jointly build a decentralized ecosystem for cancer prevention and treatment
            </p>
            
            <Button
              className="px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(270deg, #F597A9 0%, #EEB7F8 100%)',
                boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.08)',
                color: '#333333',
                border: '2px white solid',
                width: '310px',
                height: '60px'
              }}
              onClick={() => navigate('/for-partners')}
            >
              Join Our Community
            </Button>
          </div>
        </div>
      </section>
      
      {/* Team Preview */}
      <section className="relative z-10 py-20" style={{ background: 'linear-gradient(215deg, #EDE2FF 0%, #E6ECFF 38%, #E7E6FD 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl lg:text-5xl font-bold mb-4"
              style={{ 
                color: '#333333',
                fontFamily: 'Quando',
                fontWeight: '400',
                fontSize: '44px'
              }}
            >
              Our Team
            </h2>
            <p 
              className="text-xl max-w-4xl mx-auto"
              style={{ 
                color: '#333333',
                fontFamily: 'Quando',
                fontWeight: '400',
                fontSize: '20px'
              }}
            >
              An interdisciplinary team of experts from top institutions
            </p>
          </div>

          {/* Team Members with Circular Design */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-4xl">
              {/* Concentric circles background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 border-2 border-yellow-300 rounded-full opacity-50" />
                <div className="absolute w-80 h-80 border-2 border-yellow-300 rounded-full opacity-30" />
                <div className="absolute w-64 h-64 border-2 border-gray-200 rounded-full opacity-20" />
                <div className="absolute w-48 h-48 border-2 border-yellow-300 rounded-full opacity-40" />
              </div>
              
              {/* Team member avatars positioned in circle */}
              <div className="relative h-96 flex items-center justify-center">
                {[
                  { name: "Prof. Michael Yang, PhD", position: "top-8 left-32" },
                  { name: "Prof. YoSean Wang, PhD", position: "top-32 right-8" },
                  { name: "Zhiwei Bao, PhD", position: "bottom-32 left-8" },
                  { name: "Aspire Cao", position: "bottom-8 right-32" }
                ].map((member, index) => (
                  <div 
                    key={index}
                    className={`absolute ${member.position} w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold bg-gradient-to-r from-purple-300 to-pink-200`}
                  >
                    {member.name.split(' ')[0][0]}{member.name.split(' ')[1] ? member.name.split(' ')[1][0] : ''}
                  </div>
                ))}
                
                {/* Central CancerDAO logo */}
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <img 
                    src={cancerDaoLogo} 
                    alt="CancerDAO Team" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(270deg, #F597A9 0%, #EEB7F8 100%)',
                boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.08)',
                color: '#333333',
                border: '2px white solid'
              }}
              onClick={() => {
                navigate('/about');
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 50);
              }}
            >
              Learn More About Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
