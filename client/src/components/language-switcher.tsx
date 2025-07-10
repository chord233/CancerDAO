
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-1 text-gray-300 border-gray-600 hover:text-purple-400 hover:border-purple-400 hover:bg-gray-800"
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium">
        {language === 'zh' ? 'EN' : '中文'}
      </span>
    </Button>
  );
}
