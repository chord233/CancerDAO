import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

declare global {
    interface Window {
        google?: any;
    }
}

const LOCAL_STORAGE_KEY = "connected_email";

export function EmailButton({ className = "" }: { className?: string }) {
    const { t } = useLanguage();
    const [connectedEmail, setConnectedEmail] = useState<string | null>(null);
    const buttonRef = useRef<HTMLDivElement | null>(null); // 用于挂载 Google 登录按钮

    // 登录回调，解析邮箱
    const handleCredentialResponse = (response: any) => {
        const jwt = response.credential;
        const payload = JSON.parse(atob(jwt.split(".")[1]));
        const email = payload.email;

        setConnectedEmail(email);
        localStorage.setItem(LOCAL_STORAGE_KEY, email);
    };

    // 初始化 Google 登录 + 渲染按钮
    useEffect(() => {
        const savedEmail = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (savedEmail) {
            setConnectedEmail(savedEmail);
            return; // 如果已经登录，不再渲染按钮
        }

        if (window.google && buttonRef.current) {
            window.google.accounts.id.initialize({
                client_id:
                    "670986496999-63dok7f7cidje1m7vri1tqvmv59e9ld7.apps.googleusercontent.com",
                callback: handleCredentialResponse,
            });

            window.google.accounts.id.renderButton(buttonRef.current, {
                theme: "outline",
                size: "small",
                type: "standard",
                text: "signin_with",
            });
        }
    }, []);

    const handleDisconnect = () => {
        setConnectedEmail(null);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        window.location.reload(); // 重新加载页面以恢复按钮
    };

    return (
        <div className="relative">
            {connectedEmail ? (
                <Button
                    variant="outline"
                    size="sm"
                    onClick={handleDisconnect}
                    className={className}
                >
                    <Mail className="w-4 h-4 mr-2" />
                    {`${t("email.connected")}: ${connectedEmail}`}
                </Button>
            ) : (
                <div ref={buttonRef} className={className} />
            )}
        </div>
    );
}
