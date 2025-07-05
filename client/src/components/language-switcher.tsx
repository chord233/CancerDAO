
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
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-1 text-gray-700 hover:text-purple-700 hover:bg-purple-50"
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium">
        {language === 'zh' ? 'EN' : '中文'}
      </span>
    </Button>
  );
}
