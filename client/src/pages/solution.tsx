import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Shield,
  Users,
  Database,
  ArrowRight,
  CheckCircle,
  Lock,
  Cpu,
} from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import architectureDiagram from "@assets/image_1752147829900.png";

export default function Solution() {
  const { t } = useLanguage();
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-8">
            {t("solution.title")}
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            {t("solution.subtitle")}
          </p>
        </div>

        {/* Core Flow Diagram */}
        <section className="mb-20 rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, #e7d1ff 0%, #c9a4ff 100%)', border: '1px solid #e7d1ff' }}>
          <h2 className="text-3xl font-bold text-center text-black mb-12">
            {t("solution.core.title")}
          </h2>
          
          {/* CancerDAO Architecture Diagram */}
          <div className="mb-16 flex justify-center">
            <div className="max-w-4xl w-full">
              <img 
                src={architectureDiagram} 
                alt="CancerDAO Architecture Diagram" 
                className="w-full h-auto rounded-2xl shadow-lg border border-purple-200"
              />
            </div>
          </div>

          
        </section>

        {/* Three Pillars - Circular Layout */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-black mb-12">
            {t("solution.pillars.title")}
          </h2>
          
          {/* Circular Selection with Rotation */}
          <div className="relative flex items-center justify-center mb-16">
            {/* Triangle indicator pointing down */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-36 z-30">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent" style={{ borderTopColor: '#c9a4ff' }}></div>
            </div>
            
            <div 
              className="relative w-80 h-80 mx-auto transition-transform duration-700 ease-in-out"
              style={{
                transform: `rotate(${-selectedPillar * 120}deg)`,
              }}
            >
              {[
                {
                  id: 0,
                  icon: Brain,
                  title: t("solution.ai.pillar.title"),
                  description: t("solution.ai.pillar.description"),
                  points: [
                    t("solution.ai.pillar.point1"),
                    t("solution.ai.pillar.point2"),
                    t("solution.ai.pillar.point3")
                  ]
                },
                {
                  id: 1,
                  icon: Shield,
                  title: t("solution.blockchain.pillar.title"),
                  description: t("solution.blockchain.pillar.description"),
                  points: [
                    t("solution.blockchain.pillar.point1"),
                    t("solution.blockchain.pillar.point2"),
                    t("solution.blockchain.pillar.point3")
                  ]
                },
                {
                  id: 2,
                  icon: Users,
                  title: t("solution.community.pillar.title"),
                  description: t("solution.community.pillar.description"),
                  points: [
                    t("solution.community.pillar.point1"),
                    t("solution.community.pillar.point2"),
                    t("solution.community.pillar.point3")
                  ]
                }
              ].map((pillar, index) => {
                const angle = (index * 120) - 90; // Start from top, 120 degrees apart
                const radius = 120;
                const x = Math.cos(angle * Math.PI / 180) * radius;
                const y = Math.sin(angle * Math.PI / 180) * radius;
                
                return (
                  <div
                    key={pillar.id}
                    className={`absolute cursor-pointer transition-all duration-300 ${
                      selectedPillar === pillar.id 
                        ? 'transform scale-125 z-20' 
                        : 'transform scale-100 z-10 hover:scale-110'
                    }`}
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: `translate(-50%, -50%) rotate(${selectedPillar * 120}deg) ${selectedPillar === pillar.id ? 'scale(1.25)' : 'scale(1)'}`,
                    }}
                    onClick={() => setSelectedPillar(pillar.id)}
                  >
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                      selectedPillar === pillar.id 
                        ? 'shadow-2xl' 
                        : 'shadow-md'
                    }`} style={{ 
                      background: selectedPillar === pillar.id 
                        ? 'linear-gradient(135deg, #c9a4ff 0%, #e7d1ff 100%)' 
                        : '#c9a4ff'
                    }}>
                      <pillar.icon className="h-8 w-8 text-black" />
                    </div>
                    <div className="text-center mt-3">
                      <h3 className={`text-sm font-bold text-black transition-all duration-300 ${
                        selectedPillar === pillar.id ? 'text-base' : 'text-sm'
                      }`}>
                        {pillar.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Selected Pillar Details */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-white shadow-lg transition-all duration-500" style={{ border: '1px solid #e7d1ff' }}>
              <CardContent className="p-0">
                {(() => {
                  const pillars = [
                    {
                      id: 0,
                      icon: Brain,
                      title: t("solution.ai.pillar.title"),
                      description: t("solution.ai.pillar.description"),
                      points: [
                        t("solution.ai.pillar.point1"),
                        t("solution.ai.pillar.point2"),
                        t("solution.ai.pillar.point3")
                      ]
                    },
                    {
                      id: 1,
                      icon: Shield,
                      title: t("solution.blockchain.pillar.title"),
                      description: t("solution.blockchain.pillar.description"),
                      points: [
                        t("solution.blockchain.pillar.point1"),
                        t("solution.blockchain.pillar.point2"),
                        t("solution.blockchain.pillar.point3")
                      ]
                    },
                    {
                      id: 2,
                      icon: Users,
                      title: t("solution.community.pillar.title"),
                      description: t("solution.community.pillar.description"),
                      points: [
                        t("solution.community.pillar.point1"),
                        t("solution.community.pillar.point2"),
                        t("solution.community.pillar.point3")
                      ]
                    }
                  ];
                  
                  const currentPillar = pillars[selectedPillar];
                  
                  return (
                    <div className="text-center">
                      <div className="mb-6">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #c9a4ff 0%, #e7d1ff 100%)' }}>
                          <currentPillar.icon className="h-8 w-8 text-black" />
                        </div>
                        <h3 className="text-2xl font-bold text-black mb-4">
                          {currentPillar.title}
                        </h3>
                      </div>
                      <p className="text-black mb-6 leading-relaxed text-lg">
                        {currentPillar.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {currentPillar.points.map((point, index) => (
                          <div key={index} className="flex items-center justify-center text-sm text-black">
                            <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" style={{ color: '#fad000' }} />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })()}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Data Sovereignty */}
        <section className="mb-20 rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, #e7d1ff 0%, #c9a4ff 100%)' }}>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">
              {t("data.sovereignty.title")}
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              {t("data.sovereignty.subtitle")}
            </p>
          </div>

          <div className="space-y-12">
            <Card className="p-8 bg-white/80 backdrop-blur-sm" style={{ border: '1px solid #e7d1ff' }}>
              <CardContent className="p-0 text-center">
                <div className="flex items-center justify-center mb-6">
                  <Shield className="h-12 w-12 mr-4" style={{ color: '#c9a4ff' }} />
                  <div>
                    <h3 className="text-2xl font-bold text-black">
                      {t("data.nft.title")}
                    </h3>
                    <Badge className="mt-2 text-black" style={{ backgroundColor: '#e7d1ff' }}>
                      {t("data.nft.badge")}
                    </Badge>
                  </div>
                </div>
                <div className="mb-6">
                  <img 
                    src="/attached_assets/image_1752155657182.png" 
                    alt="CancerDAO Data Architecture Diagram"
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center justify-center text-sm text-black">
                    <CheckCircle className="h-4 w-4 mr-2" style={{ color: '#fad000' }} />
                    {t("data.nft.point1")}
                  </div>
                  <div className="flex items-center justify-center text-sm text-black">
                    <CheckCircle className="h-4 w-4 mr-2" style={{ color: '#fad000' }} />
                    {t("data.nft.point2")}
                  </div>
                  <div className="flex items-center justify-center text-sm text-black">
                    <CheckCircle className="h-4 w-4 mr-2" style={{ color: '#fad000' }} />
                    {t("data.nft.point3")}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white/80 backdrop-blur-sm" style={{ border: '1px solid #e7d1ff' }}>
              <CardContent className="p-0 text-center">
                <div className="flex items-center justify-center mb-6">
                  <Lock className="h-12 w-12 mr-4" style={{ color: '#c9a4ff' }} />
                  <div>
                    <h3 className="text-2xl font-bold text-black">
                      {t("data.fhe.title")}
                    </h3>
                    <Badge className="mt-2 text-black" style={{ backgroundColor: '#e7d1ff' }}>
                      {t("data.fhe.badge")}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-6 mb-6">
                  <div>
                    <img 
                      src="/attached_assets/image_1752155881747.png" 
                      alt="Principle of Fully Homomorphic Encryption"
                      className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
                    />
                  </div>
                  <div>
                    <img 
                      src="/attached_assets/image_1752155889489.png" 
                      alt="FHE Data Processing Workflow"
                      className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center justify-center text-sm text-black">
                    <CheckCircle className="h-4 w-4 mr-2" style={{ color: '#fad000' }} />
                    {t("data.fhe.point1")}
                  </div>
                  <div className="flex items-center justify-center text-sm text-black">
                    <CheckCircle className="h-4 w-4 mr-2" style={{ color: '#fad000' }} />
                    {t("data.fhe.point2")}
                  </div>
                  <div className="flex items-center justify-center text-sm text-black">
                    <CheckCircle className="h-4 w-4 mr-2" style={{ color: '#fad000' }} />
                    {t("data.fhe.point3")}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #c9a4ff 0%, #e7d1ff 100%)' }}>
          <h3 className="text-2xl font-bold mb-4 text-black">
            {t("solution.cta.title")}
          </h3>
          <p className="mb-6 max-w-2xl mx-auto text-black">
            {t("solution.cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="font-semibold px-8 py-3 text-black"
              style={{ backgroundColor: '#fad000' }}
              onClick={() =>
                window.open("http://discord.gg/zKwyqxjeun", "_blank")
              }
            >
              {t("community.join.discord")}
            </Button>
            <Button
              className="font-semibold px-8 py-3 text-black"
              style={{ backgroundColor: '#fad000' }}
              onClick={() =>
                window.open("https://twitter.com/CancerDAOxyz", "_blank")
              }
            >
              {t("community.join.twitter")}
            </Button>
            <Button
              className="font-semibold px-8 py-3 text-black"
              style={{ backgroundColor: '#fad000' }}
              onClick={() =>
                window.open("https://web.telegram.org/a/#-1002393239074_1", "_blank")
              }
            >
              {t("community.join.telegram")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}