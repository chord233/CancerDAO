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

export default function Solution() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            {t("solution.title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("solution.subtitle")}
          </p>
        </div>

        {/* Core Flow Diagram */}
        <section className="mb-20 bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 border border-purple-200">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t("solution.core.title")}
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mb-3 pulse-glow">
                <Brain className="h-12 w-12 text-white" />
              </div>
              <p className="text-center font-semibold text-gray-900">
                {t("solution.ai.title")}
              </p>
              <p className="text-sm text-gray-600 text-center max-w-32">
                {t("solution.ai.description")}
              </p>
            </div>

            <ArrowRight className="h-8 w-8 text-purple-500 transform lg:rotate-0 rotate-90" />

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-3 pulse-glow">
                <Shield className="h-12 w-12 text-white" />
              </div>
              <p className="text-center font-semibold text-gray-900">
                {t("solution.blockchain.title")}
              </p>
              <p className="text-sm text-gray-600 text-center max-w-32">
                {t("solution.blockchain.description")}
              </p>
            </div>

            <ArrowRight className="h-8 w-8 text-purple-500 transform lg:rotate-0 rotate-90" />

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mb-3 pulse-glow">
                <Database className="h-12 w-12 text-white" />
              </div>
              <p className="text-center font-semibold text-gray-900">
                {t("solution.decentralized.title")}
              </p>
              <p className="text-sm text-gray-600 text-center max-w-32">
                {t("solution.decentralized.description")}
              </p>
            </div>

            <ArrowRight className="h-8 w-8 text-purple-500 transform lg:rotate-0 rotate-90" />

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mb-3 pulse-glow">
                <Cpu className="h-12 w-12 text-white" />
              </div>
              <p className="text-center font-semibold text-gray-900">
                {t("solution.therapy.title")}
              </p>
              <p className="text-sm text-gray-600 text-center max-w-32">
                {t("solution.therapy.description")}
              </p>
            </div>
          </div>
        </section>

        {/* Three Pillars - Detailed */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t("solution.pillars.title")}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-8 bg-white border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {t("solution.ai.pillar.title")}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t("solution.ai.pillar.description")}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {t("solution.ai.pillar.point1")}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {t("solution.ai.pillar.point2")}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {t("solution.ai.pillar.point3")}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {t("solution.blockchain.pillar.title")}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t("solution.blockchain.pillar.description")}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {t("solution.blockchain.pillar.point1")}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {t("solution.blockchain.pillar.point2")}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {t("solution.blockchain.pillar.point3")}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {t("solution.community.pillar.title")}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t("solution.community.pillar.description")}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {t("solution.community.pillar.point1")}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {t("solution.community.pillar.point2")}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {t("solution.community.pillar.point3")}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Data Sovereignty */}
        <section className="mb-20 bg-gradient-to-br from-gray-50 to-purple-50 rounded-3xl p-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("data.sovereignty.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("data.sovereignty.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-purple-200">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Shield className="h-12 w-12 text-purple-600 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {t("data.nft.title")}
                    </h3>
                    <Badge className="mt-2 bg-purple-100 text-purple-800">
                      {t("data.nft.badge")}
                    </Badge>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t("data.nft.description")}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {t("data.nft.point1")}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {t("data.nft.point2")}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {t("data.nft.point3")}
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
                      {t("data.fhe.title")}
                    </h3>
                    <Badge className="mt-2 bg-blue-100 text-blue-800">
                      {t("data.fhe.badge")}
                    </Badge>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t("data.fhe.description")}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {t("data.fhe.point1")}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {t("data.fhe.point2")}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {t("data.fhe.point3")}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            {t("solution.cta.title")}
          </h3>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            {t("solution.cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3"
              onClick={() =>
                window.open("http://discord.gg/zKwyqxjeun", "_blank")
              }
            >
              {t("community.join.discord")}
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-3"
              onClick={() =>
                document
                  .getElementById("join-community")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("solution.cta.learn.more")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}