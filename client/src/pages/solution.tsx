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
  ArrowDown,
  CheckCircle,
  Lock,
  Cpu,
  FileText,
  Search,
  Heart,
  Microscope,
  MessageCircle,
  Upload,
  BarChart3,
  Star,
  BookOpen,
  Activity,
  HelpCircle,
  Stethoscope,
  Edit,
  UserCheck,
  TestTube,
  Vote,
  PenTool,
  Coins,
  RefreshCw,
  Key,
  UserX,
  Fingerprint,
} from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import cancerDaoLogo from "@assets/透明底_1752333750993.png";
import dataNftFlowChart from "@assets/image_1752205358199.png";
import fheFlowChart1 from "@assets/image_1752205374610.png";
import fheFlowChart2 from "@assets/image_1752205381666.png";

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
            <div className="max-w-6xl w-full">
              <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-purple-200">
                {/* Community Section */}
                <div className="absolute top-8 left-8">
                  <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 pl-[50px] pr-[50px]">
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-12 flex items-center justify-center mb-3 overflow-hidden">
                        <img 
                          src={cancerDaoLogo} 
                          alt="CancerDAO Logo" 
                          className="w-full h-auto object-cover scale-150"
                          style={{ transform: 'scale(1.5)' }}
                        />
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-[14px] text-[#000000]">Community</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Token Section */}
                <div className="absolute top-8 right-8">
                  <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: '#c9a4ff' }}>
                        <span className="text-white text-xs font-bold">C</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-black">CancerDAO</h4>
                        <h4 className="text-xs text-gray-600">Token</h4>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Issue Arrow */}
                <div className="absolute top-16 left-40">
                  <div className="flex items-center">
                    <span className="text-xs text-gray-600 mr-2">Issue</span>
                    <ArrowRight className="h-4 w-4 text-purple-400" />
                  </div>
                </div>

                {/* Support Arrow */}
                <div className="absolute top-16 right-32">
                  <div className="flex items-center">
                    <span className="text-xs text-gray-600 mr-2">Support</span>
                    <ArrowDown className="h-4 w-4 text-purple-400" />
                  </div>
                </div>

                {/* Main Flow - Four Boxes */}
                <div className="grid grid-cols-4 gap-6 mt-20 mb-8">
                  {/* AI-powered Cancer Support Platform */}
                  <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3 shadow-lg" style={{ background: 'linear-gradient(135deg, #c9a4ff 0%, #e7d1ff 100%)' }}>
                        <Brain className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-sm font-bold text-black mb-2">AI-powered</h4>
                      <h4 className="text-sm font-bold text-black mb-2">Cancer Support</h4>
                      <h4 className="text-sm font-bold text-black">Platform</h4>
                    </div>
                  </div>

                  {/* Blockchain-based Medical ID */}
                  <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3 shadow-lg" style={{ background: 'linear-gradient(135deg, #c9a4ff 0%, #e7d1ff 100%)' }}>
                        <div className="grid grid-cols-2 gap-1">
                          <div className="w-2 h-2 bg-white rounded-sm"></div>
                          <div className="w-2 h-2 bg-white rounded-sm"></div>
                          <div className="w-2 h-2 bg-white rounded-sm"></div>
                          <div className="w-2 h-2 bg-white rounded-sm"></div>
                        </div>
                      </div>
                      <h4 className="text-sm font-bold text-black mb-2">Blockchain-</h4>
                      <h4 className="text-sm font-bold text-black mb-2">based</h4>
                      <h4 className="text-sm font-bold text-black">Medical ID</h4>
                    </div>
                  </div>

                  {/* Decentralized Cancer Database */}
                  <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3 shadow-lg" style={{ background: 'linear-gradient(135deg, #c9a4ff 0%, #e7d1ff 100%)' }}>
                        <div className="flex items-center justify-center">
                          <Heart className="h-6 w-6 text-white mr-1" />
                          <div className="flex flex-col">
                            <div className="w-1 h-1 bg-white rounded-full mb-1"></div>
                            <div className="w-1 h-1 bg-white rounded-full mb-1"></div>
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      <h4 className="text-sm font-bold text-black mb-2">Decentralized</h4>
                      <h4 className="text-sm font-bold text-black mb-2">Cancer</h4>
                      <h4 className="text-sm font-bold text-black">Database</h4>
                    </div>
                  </div>

                  {/* AI-driven Therapies and Screening */}
                  <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3 shadow-lg" style={{ background: 'linear-gradient(135deg, #c9a4ff 0%, #e7d1ff 100%)' }}>
                        <div className="relative">
                          <div className="w-6 h-6 rounded-full bg-white opacity-80"></div>
                          <div className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white"></div>
                        </div>
                      </div>
                      <h4 className="text-sm font-bold text-black mb-2">AI-driven</h4>
                      <h4 className="text-sm font-bold text-black mb-2">Therapies</h4>
                      <h4 className="text-sm font-bold text-black">and Screening</h4>
                    </div>
                  </div>
                </div>

                {/* Flow Arrows */}
                <div className="absolute bottom-24 left-8">
                  <div className="flex flex-col items-center">
                    <span className="text-xs text-gray-600 mb-2">Build</span>
                    <ArrowDown className="h-4 w-4 text-purple-400" />
                  </div>
                </div>

                <div className="absolute bottom-32 left-1/4">
                  <div className="flex items-center">
                    <span className="text-xs text-gray-600 mr-2">Data</span>
                    <ArrowRight className="h-4 w-4 text-purple-400" />
                  </div>
                </div>

                <div className="absolute bottom-32 left-2/4">
                  <div className="flex items-center">
                    <span className="text-xs text-gray-600 mr-2">Contribute</span>
                    <ArrowRight className="h-4 w-4 text-purple-400" />
                  </div>
                </div>

                <div className="absolute bottom-32 right-1/4">
                  <div className="flex items-center">
                    <span className="text-xs text-gray-600 mr-2">Develop</span>
                    <ArrowRight className="h-4 w-4 text-purple-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </section>

        {/* Three Pillars - Circular Layout */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-black mb-12">
            {t("solution.pillars.title")}
          </h2>
          
          {/* Circular Selection with Rotation */}
          <div className="relative flex items-center justify-center mb-8">
            {/* Triangle indicator pointing down */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-36 z-5 pointer-events-none">
              <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[15px] border-transparent" style={{ borderTopColor: '#c9a4ff' }}></div>
            </div>
            
            <div 
              className="relative w-80 h-80 mx-auto transition-transform duration-700 ease-in-out"
              style={{
                transform: `rotate(${(-selectedPillar * 120) + 180}deg)`,
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
                  icon: Users,
                  title: t("solution.community.pillar.title"),
                  description: t("solution.community.pillar.description"),
                  points: [
                    t("solution.community.pillar.point1"),
                    t("solution.community.pillar.point2"),
                    t("solution.community.pillar.point3")
                  ]
                },
                {
                  id: 2,
                  icon: Shield,
                  title: t("solution.blockchain.pillar.title"),
                  description: t("solution.blockchain.pillar.description"),
                  points: [
                    t("solution.blockchain.pillar.point1"),
                    t("solution.blockchain.pillar.point2"),
                    t("solution.blockchain.pillar.point3")
                  ]
                }
              ].map((pillar, index) => {
                // Calculate position - selected pillar should be at bottom (90°)
                const baseAngle = (index * 120) - 90; // Base angles: -90, 30, 150 degrees
                const radius = 120;
                const x = Math.cos(baseAngle * Math.PI / 180) * radius;
                const y = Math.sin(baseAngle * Math.PI / 180) * radius;
                
                return (
                  <div
                    key={pillar.id}
                    className={`absolute cursor-pointer transition-all duration-300 ${
                      selectedPillar === pillar.id 
                        ? 'z-20' 
                        : 'z-10 hover:scale-110'
                    }`}
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: `translate(-50%, -50%) rotate(${(selectedPillar * 120) - 180}deg)`,
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
                      <h3 className="text-sm font-bold text-black transition-all duration-300">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Selected Pillar Details - Connected to selection above */}
          <div className="max-w-4xl mx-auto relative">
            {/* Connection line to selected pillar */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-0.5 h-8 z-10" style={{ backgroundColor: '#c9a4ff' }}></div>
            
            <Card className="p-8 bg-white shadow-lg transition-all duration-500 rounded-t-3xl" style={{ border: '1px solid #e7d1ff' }}>
              <CardContent className="p-0">
                {(() => {
                  if (selectedPillar === 0) {
                    // AI赋能健康 - 显示AI Agent产品矩阵
                    return (
                      <div className="pt-6">
                        <div className="text-center mb-8">
                          <h3 className="text-2xl font-bold text-black mb-4">
                            {t("ai.powered.health.title")}
                          </h3>
                          <p className="text-lg text-black max-w-3xl mx-auto mb-8">
                            {t("ai.powered.health.description")}
                          </p>
                        </div>
                        
                        {/* AI 解析流程演示区 */}
                        <div className="mb-8">
                          <div className="flex items-center justify-center mb-6">
                            <Cpu className="h-8 w-8 mr-4" style={{ color: '#c9a4ff' }} />
                            <h4 className="text-xl font-bold text-black">
                              {t("ai.analysis.process.title")}
                            </h4>
                          </div>
                          
                          {/* 流程步骤 */}
                          <div className="flex items-center justify-center space-x-8 mb-8">
                            <div className="flex flex-col items-center">
                              <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#e7d1ff' }}>
                                <Upload className="h-6 w-6" style={{ color: '#c9a4ff' }} />
                              </div>
                              <p className="mt-3 text-sm text-black font-semibold">{t("ai.analysis.step1")}</p>
                            </div>
                            
                            <ArrowRight className="h-6 w-6" style={{ color: '#c9a4ff' }} />
                            
                            <div className="flex flex-col items-center">
                              <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#e7d1ff' }}>
                                <Brain className="h-6 w-6" style={{ color: '#c9a4ff' }} />
                              </div>
                              <p className="mt-3 text-sm text-black font-semibold">{t("ai.analysis.step2")}</p>
                            </div>
                            
                            <ArrowRight className="h-6 w-6" style={{ color: '#c9a4ff' }} />
                            
                            <div className="flex flex-col items-center">
                              <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#e7d1ff' }}>
                                <BarChart3 className="h-6 w-6" style={{ color: '#c9a4ff' }} />
                              </div>
                              <p className="mt-3 text-sm text-black font-semibold">{t("ai.analysis.step3")}</p>
                            </div>
                          </div>
                        </div>

                        {/* AI Agent 产品矩阵 */}
                        <div className="text-center mb-6">
                          <h4 className="text-xl font-bold text-black mb-6">
                            {t("ai.agent.matrix.title")}
                          </h4>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {/* Report Bot */}
                          <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                            <div className="flex items-start mb-3">
                              <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: '#c9a4ff' }}>
                                <FileText className="h-5 w-5 text-white" />
                              </div>
                              <div className="flex-1">
                                <h5 className="text-base font-bold text-black mb-1">{t("ai.agent.report.name")}</h5>
                                <p className="text-xs text-gray-600 mb-2">{t("ai.agent.report.description")}</p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <Badge className="text-black text-xs" style={{ backgroundColor: '#fad000' }}>
                                {t("ai.agent.report.status")}
                              </Badge>
                              <span className="text-xs text-gray-500">Agent</span>
                            </div>
                          </div>
                          
                          {/* Trial Bot */}
                          <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                            <div className="flex items-start mb-3">
                              <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: '#fc593d' }}>
                                <Search className="h-5 w-5 text-white" />
                              </div>
                              <div className="flex-1">
                                <h5 className="text-base font-bold text-black mb-1">{t("ai.agent.trial.name")}</h5>
                                <p className="text-xs text-gray-600 mb-2">{t("ai.agent.trial.description")}</p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <Badge className="text-black text-xs" style={{ backgroundColor: '#fc593d' }}>
                                {t("ai.agent.trial.status")}
                              </Badge>
                              <span className="text-xs text-gray-500">Agent</span>
                            </div>
                          </div>
                          
                          {/* Clinical Bot */}
                          <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                            <div className="flex items-start mb-3">
                              <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: '#fad000' }}>
                                <Stethoscope className="h-5 w-5 text-white" />
                              </div>
                              <div className="flex-1">
                                <h5 className="text-base font-bold text-black mb-1">{t("ai.agent.clinical.name")}</h5>
                                <p className="text-xs text-gray-600 mb-2">{t("ai.agent.clinical.description")}</p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <Badge className="text-black text-xs" style={{ backgroundColor: '#fc593d' }}>
                                {t("ai.agent.clinical.status")}
                              </Badge>
                              <span className="text-xs text-gray-500">Agent</span>
                            </div>
                          </div>
                          
                          {/* Content Bot */}
                          <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                            <div className="flex items-start mb-3">
                              <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: '#fad000' }}>
                                <Edit className="h-5 w-5 text-white" />
                              </div>
                              <div className="flex-1">
                                <h5 className="text-base font-bold text-black mb-1">{t("ai.agent.content.name")}</h5>
                                <p className="text-xs text-gray-600 mb-2">{t("ai.agent.content.description")}</p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <Badge className="text-black text-xs" style={{ backgroundColor: '#fad000' }}>
                                {t("ai.agent.content.status")}
                              </Badge>
                              <span className="text-xs text-gray-500">Agent</span>
                            </div>
                          </div>
                          
                          {/* Longevity Bot */}
                          <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                            <div className="flex items-start mb-3">
                              <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: '#c9a4ff' }}>
                                <Activity className="h-5 w-5 text-white" />
                              </div>
                              <div className="flex-1">
                                <h5 className="text-base font-bold text-black mb-1">{t("ai.agent.longevity.name")}</h5>
                                <p className="text-xs text-gray-600 mb-2">{t("ai.agent.longevity.description")}</p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <Badge className="text-black text-xs" style={{ backgroundColor: '#fc593d' }}>
                                {t("ai.agent.longevity.status")}
                              </Badge>
                              <span className="text-xs text-gray-500">Agent</span>
                            </div>
                          </div>
                          
                          {/* AMA Bot */}
                          <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                            <div className="flex items-start mb-3">
                              <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: '#c9a4ff' }}>
                                <HelpCircle className="h-5 w-5 text-white" />
                              </div>
                              <div className="flex-1">
                                <h5 className="text-base font-bold text-black mb-1">{t("ai.agent.ama.name")}</h5>
                                <p className="text-xs text-gray-600 mb-2">{t("ai.agent.ama.description")}</p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <Badge className="text-black text-xs" style={{ backgroundColor: '#fad000' }}>
                                {t("ai.agent.ama.status")}
                              </Badge>
                              <span className="text-xs text-gray-500">Agent</span>
                            </div>
                          </div>
                          
                          {/* Research Bot */}
                          <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                            <div className="flex items-start mb-3">
                              <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: '#c9a4ff' }}>
                                <Microscope className="h-5 w-5 text-white" />
                              </div>
                              <div className="flex-1">
                                <h5 className="text-base font-bold text-black mb-1">{t("ai.agent.research.name")}</h5>
                                <p className="text-xs text-gray-600 mb-2">{t("ai.agent.research.description")}</p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <Badge className="text-black text-xs" style={{ backgroundColor: '#fc593d' }}>
                                {t("ai.agent.research.status")}
                              </Badge>
                              <span className="text-xs text-gray-500">Agent</span>
                            </div>
                          </div>
                          
                          {/* Support Bot */}
                          <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                            <div className="flex items-start mb-3">
                              <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: '#fad000' }}>
                                <MessageCircle className="h-5 w-5 text-white" />
                              </div>
                              <div className="flex-1">
                                <h5 className="text-base font-bold text-black mb-1">{t("ai.agent.support.name")}</h5>
                                <p className="text-xs text-gray-600 mb-2">{t("ai.agent.support.description")}</p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <Badge className="text-black border border-black text-xs" style={{ backgroundColor: 'white' }}>
                                {t("ai.agent.support.status")}
                              </Badge>
                              <span className="text-xs text-gray-500">Agent</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  } else if (selectedPillar === 2) {
                    // 区块链与数据主权 - 显示区块链技术详细内容
                    return (
                      <div className="pt-6">
                        <div className="text-center mb-8">
                          <h3 className="text-2xl font-bold text-black mb-4">
                            区块链与数据主权：构建可信的数字健康未来
                          </h3>
                        </div>
                        
                        {/* 为什么我们需要区块链？ */}
                        <div className="mb-8">
                          <div className="text-center mb-6">
                            <h4 className="text-xl font-bold text-black mb-4">
                              为什么我们需要区块链？
                            </h4>
                          </div>
                          
                          <div className="text-left mb-6">
                            <p className="text-black leading-relaxed">
                              在传统的中心化数据管理模式下，我们面临着严峻的信任挑战和数据孤岛问题。用户的数据通常由单一机构掌控，缺乏透明度，且容易出现隐私泄露和数据滥用。此外，不同机构之间的数据难以互联互通，形成了"信息孤岛"，阻碍了医疗健康领域的协作和创新。CancerDAO 引入区块链技术，正是为了解决这些核心痛点。区块链的去中心化、不可篡改和透明特性，能够在多方参与的健康价值网络中建立起无需信任的协作机制，确保用户对其健康数据拥有绝对主权，并保障数据和价值在网络中的公开透明流转。
                            </p>
                          </div>
                        </div>

                        {/* 核心技术解释与图示 */}
                        <div className="mb-8">
                          <div className="text-center mb-6">
                            <h4 className="text-xl font-bold text-black mb-4">
                              核心技术解释与图示
                            </h4>
                          </div>
                          
                          {/* 子模块 1: Data NFT */}
                          <div className="mb-8">
                            <div className="flex items-center mb-4">
                              <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: '#c9a4ff' }}>
                                <Database className="h-4 w-4 text-white" />
                              </div>
                              <h5 className="text-lg font-bold text-black">子模块 1：Data NFT</h5>
                            </div>
                            
                            <div className="text-left mb-6">
                              <p className="text-black leading-relaxed">
                                Data NFT 是一种独特的数字代币，它将您的个人健康数据转化为真正属于您的数字资产。数据提供者首先提供加密的健康数据，这些数据随后被记录在区块链上并进行通证化，生成独特的Data NFT。这些Data NFT代表了数据的唯一性、所有权和可追溯性，并可以在市场中进行交易。通过这种方式，数据提供者能够控制谁可以访问他们的数据，并通过数据使用费和产品版税的形式获得收益，甚至从平台奖励中受益。
                              </p>
                            </div>
                            
                            <div className="mb-6 flex justify-center">
                              <img 
                                src={dataNftFlowChart} 
                                alt="Data NFT 流程图"
                                className="max-w-full mx-auto rounded-lg shadow-md"
                              />
                            </div>
                          </div>
                          
                          {/* 子模块 2: 全同态加密 (FHE) */}
                          <div className="mb-8">
                            <div className="flex items-center mb-4">
                              <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: '#fad000' }}>
                                <Lock className="h-4 w-4 text-white" />
                              </div>
                              <h5 className="text-lg font-bold text-black">子模块 2：全同态加密 (FHE)</h5>
                            </div>
                            
                            <div className="text-left mb-6">
                              <p className="text-black leading-relaxed">
                                全同态加密 (FHE) 是一项突破性技术，它允许在不解密数据的情况下直接对加密数据执行计算。这意味着，即使您的生物和医疗数据处于加密状态，人工智能模型或研究人员仍然可以对其进行分析和处理，而数据本身的原始形式始终是保密的，不会被泄露。FHE 彻底消除了数据在使用过程中的隐私风险，确保了您的敏感健康信息在被用于生成洞察或开发新疗法时，其隐私性得到最高级别的保护。
                              </p>
                            </div>
                            
                            <div className="mb-6 flex justify-center">
                              <img 
                                src={fheFlowChart1} 
                                alt="FHE 流程图 1"
                                className="max-w-full mx-auto rounded-lg shadow-md"
                              />
                            </div>
                            
                            <div className="mb-6 flex justify-center">
                              <img 
                                src={fheFlowChart2} 
                                alt="FHE 流程图 2"
                                className="max-w-full mx-auto rounded-lg shadow-md"
                              />
                            </div>
                          </div>
                          
                          {/* 子模块 3: 去中心化身份 (DID) */}
                          <div className="mb-8">
                            <div className="flex items-center mb-4">
                              <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: '#fc593d' }}>
                                <Fingerprint className="h-4 w-4 text-white" />
                              </div>
                              <h5 className="text-lg font-bold text-black">子模块 3：去中心化身份 (DID)</h5>
                            </div>
                            
                            <div className="text-left mb-6">
                              <p className="text-black leading-relaxed">
                                去中心化身份（DID）使用户能够在没有中心化机构的情况下拥有并完全控制自己的数字身份。DID 允许用户管理自己的身份信息，并用于对数据访问进行授权。这极大地增强了用户对其数据主权的控制，保障了隐私和安全。
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  } else if (selectedPillar === 1) {
                    // 社区驱动生态 - 显示社区参与方式和生态飞轮模型
                    return (
                      <div className="pt-6">
                        <div className="text-center mb-8">
                          <h3 className="text-2xl font-bold text-black mb-4">
                            社区驱动生态：共建、共享、共赢的未来
                          </h3>
                          <p className="text-lg text-black max-w-3xl mx-auto mb-8">
                            社区在CancerDAO生态系统中占据核心地位。社区成员不仅仅是用户，更是共建者、贡献者、所有者，共同推动癌症防治事业的发展。
                          </p>
                        </div>
                        
                        {/* 社区参与方式 */}
                        <div className="mb-8">
                          <div className="text-center mb-6">
                            <h4 className="text-xl font-bold text-black mb-6">
                              社区参与方式
                            </h4>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* 数据贡献 */}
                            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                              <div className="flex items-start mb-3">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: '#c9a4ff' }}>
                                  <Database className="h-5 w-5 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h5 className="text-base font-bold text-black mb-1">数据贡献</h5>
                                  <p className="text-xs text-gray-600">安全、隐私地共享匿名化健康数据，加速研究和AI模型训练</p>
                                </div>
                              </div>
                            </div>
                            
                            {/* 知识标注与验证 */}
                            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                              <div className="flex items-start mb-3">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: '#fad000' }}>
                                  <UserCheck className="h-5 w-5 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h5 className="text-base font-bold text-black mb-1">知识标注与验证</h5>
                                  <p className="text-xs text-gray-600">参与AI解析结果、医疗信息的标注验证，提升数据质量和模型准确性</p>
                                </div>
                              </div>
                            </div>
                            
                            {/* 产品测试与反馈 */}
                            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                              <div className="flex items-start mb-3">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: '#fc593d' }}>
                                  <TestTube className="h-5 w-5 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h5 className="text-base font-bold text-black mb-1">产品测试与反馈</h5>
                                  <p className="text-xs text-gray-600">参与新产品功能测试，提供使用反馈和改进建议</p>
                                </div>
                              </div>
                            </div>
                            
                            {/* 社区治理 */}
                            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                              <div className="flex items-start mb-3">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: '#c9a4ff' }}>
                                  <Vote className="h-5 w-5 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h5 className="text-base font-bold text-black mb-1">社区治理 (DAO投票)</h5>
                                  <p className="text-xs text-gray-600">通过持有代币参与DAO投票，决定项目发展方向和资金使用</p>
                                </div>
                              </div>
                            </div>
                            
                            {/* 内容创作与分享 */}
                            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                              <div className="flex items-start mb-3">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: '#fad000' }}>
                                  <PenTool className="h-5 w-5 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h5 className="text-base font-bold text-black mb-1">内容创作与分享</h5>
                                  <p className="text-xs text-gray-600">分享经验、科普知识，共同建设社区内容生态</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* 生态飞轮模型 */}
                        <div className="mb-8">
                          <div className="text-center mb-6">
                            <h4 className="text-xl font-bold text-black mb-4">
                              生态飞轮模型
                            </h4>
                            <p className="text-sm text-black max-w-2xl mx-auto mb-6">
                              CancerDAO生态飞轮展现了社区、产品服务、数据AI和代币之间的相互促进关系，形成可持续发展的生态系统。
                            </p>
                          </div>
                          
                          {/* 生态飞轮图片 */}
                          <div className="mb-6 flex justify-center">
                            <img 
                              src="/attached_assets/image_1752204939305.png" 
                              alt="CancerDAO生态飞轮模型"
                              className="max-w-md mx-auto rounded-lg shadow-md"
                            />
                          </div>
                          
                          {/* 生态飞轮说明 */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                              <div className="flex items-start mb-3">
                                <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: '#c9a4ff' }}>
                                  <Heart className="h-4 w-4 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h5 className="text-sm font-bold text-black mb-1">健康管理平台</h5>
                                  <p className="text-xs text-gray-600">为社区成员提供癌症护理和预防支持服务及相关产品（由社区成员付费）</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                              <div className="flex items-start mb-3">
                                <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: '#fad000' }}>
                                  <Brain className="h-4 w-4 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h5 className="text-sm font-bold text-black mb-1">数据和AI平台</h5>
                                  <p className="text-xs text-gray-600">支持生态系统业务合作伙伴的精准癌症治疗和筛查开发（由合作伙伴付费）</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200 md:col-span-2">
                              <div className="flex items-start mb-3">
                                <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: '#fc593d' }}>
                                  <Coins className="h-4 w-4 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h5 className="text-sm font-bold text-black mb-1">CancerDAO代币</h5>
                                  <p className="text-xs text-gray-600">作为生态系统内的流通代币，实现价值传递和治理激励</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    // 其他支柱 - 显示原有的描述和要点
                    const pillars = [
                      {
                        id: 0,
                        description: t("solution.ai.pillar.description"),
                        points: [
                          t("solution.ai.pillar.point1"),
                          t("solution.ai.pillar.point2"),
                          t("solution.ai.pillar.point3")
                        ]
                      },
                      {
                        id: 1,
                        description: t("solution.community.pillar.description"),
                        points: [
                          t("solution.community.pillar.point1"),
                          t("solution.community.pillar.point2"),
                          t("solution.community.pillar.point3")
                        ]
                      },
                      {
                        id: 2,
                        description: t("solution.blockchain.pillar.description"),
                        points: [
                          t("solution.blockchain.pillar.point1"),
                          t("solution.blockchain.pillar.point2"),
                          t("solution.blockchain.pillar.point3")
                        ]
                      }
                    ];
                    
                    const currentPillar = pillars[selectedPillar];
                    
                    return (
                      <div className="text-center pt-6">
                        <p className="text-black mb-8 leading-relaxed text-lg">
                          {currentPillar.description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {currentPillar.points.map((point, index) => (
                            <div key={index} className="flex items-center justify-center text-sm text-black">
                              <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" style={{ color: '#fad000' }} />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  }
                })()}
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