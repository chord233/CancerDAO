// 导入React基础hooks
import { useState } from "react";
// 导入UI组件
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// 导入Lucide图标库中的各种图标
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
  Grid3x3,
} from "lucide-react";
// 导入多语言支持
import { useLanguage } from "@/contexts/language-context";
// 导入静态资源
import cancerDaoLogo from "@assets/透明底_1752333750993.png";
import dataNftFlowChart from "@assets/image_1752205358199.png";
import fheFlowChart1 from "@assets/image_1752205374610.png";
import fheFlowChart2 from "@assets/image_1752205381666.png";
import tokenIcon from "@assets/token_1752465516019.png";

/**
 * 自定义区块链立方体图标组件
 * @param {string} className - 可选的CSS类名
 */
const BlockchainCubeIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 1024 1024"
    width="32"
    height="32"
    fill="currentColor"
  >
    {/* SVG路径定义立方体形状 */}
    <path d="M544.928 138.464l256 157.984A66.24 66.24 0 0 1 832 352.896V673.28a66.24 66.24 0 0 1-31.072 56.448l-256 157.984c-20.256 12.48-45.6 12.48-65.856 0l-256-157.984A66.24 66.24 0 0 1 192 673.28V352.896c0-23.136 11.808-44.544 31.072-56.448l256-157.984a62.496 62.496 0 0 1 65.856 0z m220.8 258.912l-220.608 136.16v272.288l220.64-136.16-0.032-272.288z m-507.488 6.944v265.344l209.376 129.216v-265.344L258.24 404.32z m254.336-204.416l-226.848 139.968 221.184 136.48 226.816-139.968-221.152-136.48z" />
  </svg>
);

/**
 * 自定义DNA/代币螺旋图标组件
 * @param {string} className - 可选的CSS类名
 */
const DnaTokenIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 1028 1024"
    width="32"
    height="32"
    fill="currentColor"
  >
    {/* SVG路径定义DNA螺旋形状 */}
    <path d="M1028.096 623.104c0-81.92-111.616-145.92-247.808-145.92-9.216 0-19.968 0.512-28.672 1.024V238.592c1.024-6.144 1.024-12.288 1.024-18.432 0-80.896-103.424-143.872-240.128-143.872S268.8 139.776 268.8 220.16c0 6.144 1.024 12.288 2.048 18.432v65.536c-7.68-0.512-15.36-0.512-23.552-0.512-136.704 0-241.664 62.976-241.664 143.872 0 6.144 0.512 12.288 2.048 18.432v239.104c-1.024 6.144-2.048 12.288-2.048 18.432 0 80.896 104.96 143.872 241.664 143.872 8.192 0 15.872-0.512 23.552-1.024v65.536c-1.024 6.144-2.048 12.288-2.048 18.432 0 80.896 103.424 143.872 240.128 143.872s240.128-62.976 240.128-143.872c0-6.144-0.512-12.288-1.024-18.432V542.72c8.704 0.512 19.456 1.024 28.672 1.024 136.192 0 247.808-63.488 247.808-145.92 0-6.144-0.512-12.288-1.024-18.432V359.424c1.024-6.144 1.024-12.288 1.024-18.432 0-81.92-111.616-145.92-247.808-145.92-9.216 0-19.968 0.512-28.672 1.024V91.648c1.024-6.144 1.024-12.288 1.024-18.432 0-80.896-103.424-143.872-240.128-143.872S268.8 -10.24 268.8 70.144c0 6.144 1.024 12.288 2.048 18.432v105.472c-7.68-0.512-15.36-0.512-23.552-0.512-136.704 0-241.664 62.976-241.664 143.872 0 6.144 0.512 12.288 2.048 18.432v160.768c-1.024 6.144-2.048 12.288-2.048 18.432 0 80.896 104.96 143.872 241.664 143.872 8.192 0 15.872-0.512 23.552-1.024v160.768c-1.024 6.144-2.048 12.288-2.048 18.432 0 80.896 103.424 143.872 240.128 143.872s240.128-62.976 240.128-143.872c0-6.144-0.512-12.288-1.024-18.432V686.08c8.704 0.512 19.456 1.024 28.672 1.024 136.192 0 247.808-63.488 247.808-145.92z" />
  </svg>
);

/**
 * 自定义AI疗法筛选图标组件
 * @param {string} className - 可选的CSS类名
 */
const AiTherapiesIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 1024 1024"
    width="32"
    height="32"
    fill="currentColor"
  >
    {/* SVG路径定义AI相关形状 */}
    <path d="M517.354406 935.282192a296.930527 296.930527 0 0 0 395.118214 21.556434L704.2599 748.376699zM680.4606 678.598648l23.176282-23.176281L885.309021 473.50102l69.155033-69.155033A236.746959 236.746959 0 0 0 619.404806 69.411342l-548.256115 548.256115a236.746959 236.746959 0 1 0 335.183852 335.059248L423.652452 935.157589l256.808148-256.558941zM394.619799 392.633243l274.128057-274.128058a167.467322 167.467322 0 1 1 236.746959 236.746959l-274.128058 274.128057-236.746958-236.746958M958.949786 910.610667h-0.124604 0.124604zM937.393352 515.118643l-186.905493 186.905493L959.4482 910.610667a297.428942 297.428942 0 0 0-22.054848-395.492024z" />
  </svg>
);

/**
 * 自定义网络/连接图标组件
 * @param {string} className - 可选的CSS类名
 */
const NetworkIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 1024 1024"
    width="32"
    height="32"
    fill="currentColor"
  >
    {/* SVG路径定义网络连接形状 */}
    <path d="M510.912 990.016a421.12 421.12 0 0 1-232.896-69.888 19.2 19.2 0 1 1 21.12-32 385.472 385.472 0 0 0 372.288 28.544 19.2 19.2 0 0 1 16 34.944 420.352 420.352 0 0 1-176.512 38.4z" />
    <path d="M111.616 649.088a19.2 19.2 0 0 1-19.2-16.192A424 424 0 0 1 372.224 166.4a19.2 19.2 0 1 1 12.8 36.288 385.344 385.344 0 0 0-259.136 363.84A394.88 394.88 0 0 0 130.56 627.2a19.2 19.2 0 0 1-15.936 22.016zM894.464 713.984a19.776 19.776 0 0 1-6.08-0.96 19.2 19.2 0 0 1-12.16-24.32 385.6 385.6 0 0 0-164.352-450.688 19.2 19.2 0 0 1 20.096-32.768 424.064 424.064 0 0 1 180.672 495.616 19.2 19.2 0 0 1-18.176 13.12zM192.384 967.168a147.2 147.2 0 1 1 147.2-147.2 147.2 147.2 0 0 1-147.2 147.2z m0-255.424a108.8 108.8 0 1 0 108.8 108.8 108.8 108.8 0 0 0-108.8-108.8z" />
    <path d="M849.6 967.168a147.2 147.2 0 1 1 147.2-147.2 147.2 147.2 0 0 1-147.2 147.2z m0-255.424a108.8 108.8 0 1 0 108.8 108.8 108.8 108.8 0 0 0-108.8-108.8zM510.72 313.024a147.2 147.2 0 1 1 147.2-146.88 147.2 147.2 0 0 1-147.2 146.88zM510.72 57.6a108.8 108.8 0 1 0 108.8 108.8 108.8 108.8 0 0 0-108.8-108.8zM510.72 731.584a147.2 147.2 0 1 1 147.2-147.2 147.2 147.2 0 0 1-147.2 147.2z m0-255.424a108.8 108.8 0 1 0 108.8 108.48 108.8 108.8 0 0 0-108.8-108.48z" />
  </svg>
);

/**
 * 解决方案页面主组件
 */
export default function Solution() {
  // 使用多语言hook
  const { t } = useLanguage();
  // 使用状态管理选中的支柱(0: AI, 1: 社区, 2: 区块链)
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  return (
    <div className="min-h-screen ">
      
        
        <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
          {/* 背景层：图片 + 渐变遮罩 */}
          <div
            aria-hidden
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/solution_background.jpg)", backgroundPosition: 'center 40%' }}
          />
          <div
            aria-hidden
            className="absolute inset-0 z-0 bg-gradient-to-r from-[#f7c1cf]/70 via-[#e3dbfb]/65 to-[#ffd89a]/70"
          />
          <div className="relative z-10 max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-2">
              <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6 lg:mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.15)] font-serif tracking-tight">
                {t("solution.title")}
              </h1>
              <p className="text-lg sm:text-xl text-black max-w-2xl sm:max-w-3xl mx-auto leading-relaxed md:leading-8">
                {t("solution.subtitle")}
              </p>
            </div>
          </div>
          {/* 底部白色渐隐，过渡到内容区 */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 z-0 bg-gradient-to-b from-transparent to-white" />
        </section>

        {/* 核心流程图部分 */}
       
          
          
          {/* CancerDAO生态系统描述 - 三个模块 */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 模块1: 以患者为中心的生态系统 */}
              <div className="bg-white rounded-2xl p-6 shadow border border-gray-200 hover:shadow-lg transition">
                <div className="flex flex-col items-start text-left mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-black/10 bg-white">
                    <Users className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black">
                    {t("solution.core.patient.title")}
                  </h3>
                </div>
                <p className="text-sm text-black/80 leading-relaxed">
                  {t("solution.core.patient.content")}
                </p>
              </div>

              {/* 模块2: Web3 & AI技术（渐变卡片） */}
              <div className="rounded-2xl p-6 shadow border hover:shadow-lg transition" style={{ background: 'linear-gradient(135deg, #f5efff 0%, #efe6ff 100%)', borderColor: '#e7d1ff' }}>
                <div className="flex flex-col items-start text-left mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border" style={{ borderColor: '#e7d1ff', backgroundColor: '#f0e6ff' }}>
                    <Shield className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black">{t("solution.core.web3.title")}</h3>
                </div>
                <p className="text-sm text-black/80 leading-relaxed">
                  {t("solution.core.web3.content")}
                </p>
              </div>

              {/* 模块3: 可持续金融系统 */}
              <div className="bg-white rounded-2xl p-6 shadow border border-gray-200 hover:shadow-lg transition">
                <div className="flex flex-col items-start text-left mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-black/10 bg-white">
                    <Coins className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black">{t("solution.core.finance.title")}</h3>
                </div>
                <p className="text-sm text-black/80 leading-relaxed">
                  {t("solution.core.finance.content")}
                </p>
              </div>
            </div>
          </div>
          
          <section className="mb-20 rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, #e7d1ff 0%, #c9a4ff 100%)', border: '1px solid #e7d1ff' }}>
          {/* CancerDAO架构图 */}
          <div className="mb-16 flex justify-center">
            <div className="max-w-6xl w-full">
              <div className="relative rounded-2xl shadow-lg border border-purple-200">
                <img 
                  src="/attached_assets/image_1752475567563.png" 
                  alt="CancerDAO Architecture Diagram" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 三大支柱 - 圆形布局部分 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-black mb-12">
            {t("solution.pillars.title")}
          </h2>
          
          {/* 选项卡按钮组（替换圆形选择器） */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                { id: 1, icon: Users, label: t('solution.community.pillar.title') },
                { id: 0, icon: Cpu, label: t('solution.ai.pillar.title') },
                { id: 2, icon: Shield, label: t('solution.blockchain.pillar.title') },
              ].map(tab => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedPillar(tab.id)}
                  className={`relative px-5 sm:px-6 py-3 rounded-3xl border transition shadow ${
                    selectedPillar === tab.id
                      ? 'text-black shadow-lg'
                      : 'bg-white border-black/10 hover:shadow-md'
                  }`}
                  style={selectedPillar === tab.id ? { background: 'linear-gradient(135deg, #c9a4ff 0%, #e7d1ff 100%)', borderColor: '#e7d1ff' } : {}}
                >
                  <div className="flex items-center gap-2">
                    <tab.icon className="h-5 w-5 text-black" />
                    <span className="text-sm sm:text-base font-semibold">{tab.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

        
          <div className="max-w-4xl mx-auto relative">
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

                        {/* 容器：浅紫背景的大卡片 */}
                        <div className="rounded-3xl border" style={{ borderColor: '#e7d1ff', background: '#f6f1ff' }}>
                          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
                            {/* 左列： */}
                            <div>
                              <div className="flex items-center mb-6">
                                <Cpu className="h-7 w-7 mr-3" style={{ color: '#c9a4ff' }} />
                                <h4 className="text-lg md:text-xl font-bold text-black">
                                  {t("ai.analysis.process.title")}
                                </h4>
                              </div>

                              

                              {/* 视频 */}
                              <div className="flex justify-center">
                                <div className="w-full max-w-[260px]">
                                  <video
                                    src="/attached_assets/视频2.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-auto rounded-lg shadow-md"
                                  />
                                </div>
                              </div>
                            </div>

                            {/* 右列：AI Agent 产品卡片 */}
                            <div>
                              <div className="mb-6">
                                <h4 className="text-lg md:text-xl font-bold text-black">
                                  {t("ai.agent.matrix.title")}
                                </h4>
                              </div>
                              <div className="space-y-4">
                                {/* Report Bot */}
                                <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200">
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

                                {/* AMA Bot */}
                                <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200">
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
                              </div>
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
                            {t("blockchain.title")}
                          </h3>
                        </div>
                        {/* 为什么我们需要区块链？ */}
                        <div className="mb-8">
                          <div className="text-center mb-6">
                            <h4 className="text-xl font-bold text-black mb-4">
                              {t("blockchain.why.title")}
                            </h4>
                          </div>
                          
                          <div className="text-left mb-6">
                            <p className="text-black leading-relaxed">
                              {t("blockchain.why.content")}
                            </p>
                          </div>
                        </div>
                        {/* 核心技术解释与图示 */}
                        <div className="mb-8">
                          <div className="text-center mb-6">
                            <h4 className="text-xl font-bold text-black mb-4">
                              {t("blockchain.technology.title")}
                            </h4>
                          </div>
                          
                          {/* 子模块 1: Data NFT */}
                          <div className="mb-8">
                            <div className="flex items-center mb-4">
                              <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: '#c9a4ff' }}>
                                <Database className="h-4 w-4 text-white" />
                              </div>
                              <h5 className="text-lg font-bold text-black">
                                {t("blockchain.technology.datanft.title")}
                              </h5>
                            </div>
                            
                            <div className="text-left mb-6">
                              <p className="text-black leading-relaxed">
                                {t("blockchain.technology.datanft.content")}
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
                              <h5 className="text-lg font-bold text-black">
                                {t("blockchain.technology.fhe.title")}
                              </h5>
                            </div>
                            
                            <div className="text-left mb-6">
                              <p className="text-black leading-relaxed">
                                {t("blockchain.technology.fhe.content")}
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
                              <h5 className="text-lg font-bold text-black">
                                {t("blockchain.technology.did.title")}
                              </h5>
                            </div>
                            
                            <div className="text-left mb-6">
                              <p className="text-black leading-relaxed">
                                {t("blockchain.technology.did.content")}
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
                            {t("communitydriven.title")}
                          </h3>
                          <p className="text-lg text-black max-w-3xl mx-auto mb-8">
                            {t("communitydriven.content")}
                          </p>
                        </div>
                        
                        {/* 社区参与方式 */}
                        <div className="mb-8">
                          <div className="text-center mb-6">
                            <h4 className="text-xl font-bold text-black mb-6">
                              {t("communitydriven.join")}
                            </h4>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* 数据贡献 */}
                            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                              <div className="flex items-start mb-3">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: '#c9a4ff' }}>
                                  <Heart className="h-4 w-4 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h5 className="text-base font-bold text-black mb-1">
                                    {t("communitydriven.join.health.title")}
                                  </h5>
                                  <p className="text-xs text-gray-600">
                                    {t("communitydriven.join.health.content")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            
                            {/* 知识标注与验证 */}
                            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                              <div className="flex items-start mb-3">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: '#fad000' }}>
                                  <Brain className="h-4 w-4 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h5 className="text-base font-bold text-black mb-1">
                                    {t("communitydriven.join.data.title")}
                                  </h5>
                                  <p className="text-xs text-gray-600">
                                    {t("communitydriven.join.data.content")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            
                            {/* 产品测试与反馈 */}
                            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                              <div className="flex items-start mb-3">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: '#fc593d' }}>
                                  <Coins className="h-4 w-4 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h5 className="text-base font-bold text-black mb-1">
                                    {t("communitydriven.join.token.title")}
                                  </h5>
                                  <p className="text-xs text-gray-600">
                                    {t("communitydriven.join.token.content")}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* 生态飞轮模型 */}
                        <div className="mb-8">
                          <div className="text-center mb-6">
                            <h4 className="text-xl font-bold text-black mb-4">
                              {t("communitydriven.model.title")}
                            </h4>
                            <p className="text-sm text-black max-w-2xl mx-auto mb-6">
                              {t("communitydriven.model.content")}
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

        {/* 行动号召部分 */}
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
    
  );
}