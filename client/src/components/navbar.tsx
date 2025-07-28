// components/navbar.tsx
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Mail, Wallet, User, LogOut, CreditCard, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/language-context";
import { LanguageSwitcher } from "@/components/language-switcher";

interface NavigationItem {
  name: string;
  href: string;
}

// 钱包类型枚举
enum WalletType {
  METAMASK = 'metamask',
  WALLET_CONNECT = 'walletconnect',
  COINBASE = 'coinbase',
  PHANTOM = 'phantom'
}

// 登录类型
enum LoginType {
  EMAIL = 'email',
  WALLET = 'wallet'
}

// 用户状态接口
interface UserState {
  isLoggedIn: boolean;
  loginType?: LoginType;
  user?: {
    name: string;
    avatar?: string;
    email?: string;
    walletAddress?: string;
    walletType?: WalletType;
    points: number;
  };
}

// 钱包图标映射
const walletIcons = {
  [WalletType.METAMASK]: "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg",
  [WalletType.WALLET_CONNECT]: "https://docs.walletconnect.com/img/walletconnect-logo.svg",
  [WalletType.COINBASE]: "https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark_White.svg",
  [WalletType.PHANTOM]: "https://phantom.app/img/phantom-logo.svg"
};

// Google OAuth 配置
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '670986496999-63dok7f7cidje1m7vri1tqvmv59e9ld7.apps.googleusercontent.com';

// 错误提示组件
function ErrorMessage({ message, onClose }: { message: string; onClose: () => void }) {
  return (
      <div className="absolute top-full mt-2 right-0 bg-red-50 border border-red-200 rounded-lg p-3 shadow-lg z-50 max-w-sm">
        <div className="flex items-start space-x-2">
          <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm text-red-800">{message}</p>
            <button
                onClick={onClose}
                className="text-xs text-red-600 hover:text-red-700 mt-1"
            >
              关闭
            </button>
          </div>
        </div>
      </div>
  );
}

// 扩展 Window 接口
declare global {
  interface Window {
    ethereum?: any;
    solana?: any;
    google?: any;
  }
}

// Google 登录服务 - 修改版本，解决 CORS 和弹窗问题
class GoogleAuthService {
  private static instance: GoogleAuthService;
  private isInitialized = false;

  static getInstance() {
    if (!GoogleAuthService.instance) {
      GoogleAuthService.instance = new GoogleAuthService();
    }
    return GoogleAuthService.instance;
  }

  async initialize() {
    if (this.isInitialized) return;

    return new Promise<void>((resolve, reject) => {
      // 检查是否已经加载了 Google Identity Services
      if (window.google && window.google.accounts) {
        this.isInitialized = true;
        resolve();
        return;
      }

      // 动态加载 Google Identity Services
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        // 等待 Google API 完全加载
        const checkGoogleLoaded = () => {
          if (window.google && window.google.accounts) {
            this.isInitialized = true;
            resolve();
          } else {
            setTimeout(checkGoogleLoaded, 100);
          }
        };
        checkGoogleLoaded();
      };
      script.onerror = () => {
        reject(new Error('无法加载 Google 登录服务'));
      };
      document.head.appendChild(script);
    });
  }

  async signIn(): Promise<any> {
    if (!this.isInitialized) {
      await this.initialize();
    }

    return new Promise((resolve, reject) => {
      try {
        // 使用新的 Google Identity Services 配置
        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: (response: any) => {
            try {
              // 解析 JWT token
              const credential = response.credential;
              const payload = JSON.parse(atob(credential.split('.')[1]));

              const userData = {
                name: payload.name || payload.given_name + ' ' + payload.family_name,
                email: payload.email,
                avatar: payload.picture,
                googleId: payload.sub
              };

              resolve(userData);
            } catch (error) {
              console.error('解析 Google 用户信息失败:', error);
              reject(new Error('解析 Google 用户信息失败'));
            }
          },
          auto_select: false,
          cancel_on_tap_outside: true,
          // 添加这些配置来解决本地开发问题
          use_fedcm_for_prompt: false, // 禁用 FedCM
          itp_support: true,
          ux_mode: 'popup', // 强制使用弹窗模式
        });

        // 直接渲染登录按钮并自动点击
        this.renderAndClickButton().then(resolve).catch(reject);

      } catch (error) {
        console.error('Google 登录初始化失败:', error);
        reject(new Error('Google 登录服务初始化失败'));
      }
    });
  }

  // 渲染按钮并自动点击的方法
  private async renderAndClickButton(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        // 创建一个临时容器
        const buttonDiv = document.createElement('div');
        buttonDiv.style.position = 'fixed';
        buttonDiv.style.top = '-1000px';
        buttonDiv.style.left = '-1000px';
        buttonDiv.style.opacity = '0';
        buttonDiv.style.pointerEvents = 'none';
        document.body.appendChild(buttonDiv);

        // 设置回调函数
        const callbackName = `googleCallback_${Date.now()}`;
        (window as any)[callbackName] = (response: any) => {
          try {
            const credential = response.credential;
            const payload = JSON.parse(atob(credential.split('.')[1]));

            const userData = {
              name: payload.name || payload.given_name + ' ' + payload.family_name,
              email: payload.email,
              avatar: payload.picture,
              googleId: payload.sub
            };

            // 清理
            document.body.removeChild(buttonDiv);
            delete (window as any)[callbackName];

            resolve(userData);
          } catch (error) {
            document.body.removeChild(buttonDiv);
            delete (window as any)[callbackName];
            reject(new Error('解析 Google 用户信息失败'));
          }
        };

        // 重新初始化 Google Identity Services 使用新的回调
        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: (window as any)[callbackName],
          auto_select: false,
          cancel_on_tap_outside: true,
          use_fedcm_for_prompt: false,
          itp_support: true,
        });

        // 渲染登录按钮
        window.google.accounts.id.renderButton(buttonDiv, {
          theme: 'outline',
          size: 'large',
          text: 'signin_with',
          shape: 'rectangular',
          type: 'standard'
        });

        // 等待按钮渲染完成后自动点击
        setTimeout(() => {
          const button = buttonDiv.querySelector('div[role="button"]') as HTMLElement;
          if (button) {
            // 创建点击事件
            const clickEvent = new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
              view: window
            });
            button.dispatchEvent(clickEvent);
          } else {
            // 如果按钮渲染失败，直接调用登录提示
            window.google.accounts.id.prompt((notification: any) => {
              if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
                document.body.removeChild(buttonDiv);
                delete (window as any)[callbackName];
                reject(new Error('用户取消了登录或登录服务不可用'));
              }
            });
          }
        }, 500);

        // 设置超时
        setTimeout(() => {
          if (document.body.contains(buttonDiv)) {
            document.body.removeChild(buttonDiv);
            delete (window as any)[callbackName];
            reject(new Error('登录超时，请重试'));
          }
        }, 30000);

      } catch (error) {
        console.error('渲染登录按钮失败:', error);
        reject(new Error('登录服务初始化失败'));
      }
    });
  }

  async signOut() {
    if (!this.isInitialized) return;

    try {
      if (window.google && window.google.accounts) {
        window.google.accounts.id.disableAutoSelect();
        // 可选：撤销令牌
        // window.google.accounts.id.revoke(userEmail, () => {
        //   console.log('令牌已撤销');
        // });
      }
    } catch (error) {
      console.warn('Google 登出失败:', error);
    }
  }
}

// 钱包连接服务
class WalletService {
  static async connectMetaMask() {
    if (!window.ethereum) {
      throw new Error('请安装 MetaMask 钱包');
    }

    try {
      // 请求连接钱包
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });

      if (accounts.length === 0) {
        throw new Error('未找到钱包账户');
      }

      // 获取链信息
      const chainId = await window.ethereum.request({
        method: 'eth_chainId'
      });

      return {
        address: accounts[0],
        chainId,
        walletType: WalletType.METAMASK
      };
    } catch (error: any) {
      if (error.code === 4001) {
        throw new Error('用户拒绝连接钱包');
      }
      throw new Error(`连接钱包失败: ${error.message}`);
    }
  }

  static async connectWalletConnect() {
    // 这里需要集成 WalletConnect
    // 由于需要额外的库，这里提供一个基本的框架
    throw new Error('WalletConnect 功能正在开发中，请使用 MetaMask');
  }

  static async connectPhantom() {
    if (!(window as any).solana || !(window as any).solana.isPhantom) {
      throw new Error('请安装 Phantom 钱包');
    }

    try {
      const response = await (window as any).solana.connect();
      return {
        address: response.publicKey.toString(),
        walletType: WalletType.PHANTOM
      };
    } catch (error: any) {
      if (error.code === 4001) {
        throw new Error('用户拒绝连接钱包');
      }
      throw new Error(`连接 Phantom 钱包失败: ${error.message}`);
    }
  }

  static async disconnectWallet() {
    // MetaMask 断开连接
    if (window.ethereum) {
      // MetaMask 没有直接的断开方法，但可以清除权限
      try {
        await window.ethereum.request({
          method: 'wallet_revokePermissions',
          params: [{ eth_accounts: {} }]
        });
      } catch (error) {
        // 如果不支持 revokePermissions，忽略错误
        console.warn('钱包不支持撤销权限');
      }
    }

    // Phantom 断开连接
    if ((window as any).solana && (window as any).solana.isPhantom) {
      try {
        await (window as any).solana.disconnect();
      } catch (error) {
        console.warn('Phantom 断开连接失败');
      }
    }
  }
}

// 用户数据存储服务
class UserStorageService {
  private static USERS_KEY = 'cancerdao_users';
  private static CURRENT_USER_KEY = 'cancerdao_current_user';

  static saveUser(userData: any) {
    try {
      const users = this.getAllUsers();
      const userKey = userData.email || userData.walletAddress;
      users[userKey] = {
        ...userData,
        createdAt: new Date().toISOString(),
        lastLoginAt: new Date().toISOString()
      };
      localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
      localStorage.setItem(this.CURRENT_USER_KEY, userKey);
    } catch (error) {
      console.error('保存用户数据失败:', error);
    }
  }

  static getUser(userKey: string) {
    try {
      const users = this.getAllUsers();
      return users[userKey] || null;
    } catch (error) {
      console.error('获取用户数据失败:', error);
      return null;
    }
  }

  static getAllUsers() {
    try {
      const users = localStorage.getItem(this.USERS_KEY);
      return users ? JSON.parse(users) : {};
    } catch (error) {
      console.error('获取用户列表失败:', error);
      return {};
    }
  }

  static userExists(userKey: string) {
    const users = this.getAllUsers();
    return !!users[userKey];
  }

  static validateEmailLogin(email: string, password: string) {
    const userData = this.getUser(email);
    if (!userData) {
      throw new Error('用户不存在，请先注册');
    }
    if (userData.password !== password) {
      throw new Error('密码错误');
    }
    return userData;
  }

  static getCurrentUser() {
    try {
      const currentUserKey = localStorage.getItem(this.CURRENT_USER_KEY);
      return currentUserKey ? this.getUser(currentUserKey) : null;
    } catch (error) {
      return null;
    }
  }

  static clearCurrentUser() {
    try {
      localStorage.removeItem(this.CURRENT_USER_KEY);
    } catch (error) {
      console.error('清除当前用户失败:', error);
    }
  }
}

// 用户头像下拉菜单组件
function UserProfileDropdown({
                               userState,
                               onLogout
                             }: {
  userState: UserState;
  onLogout: () => void;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useLanguage();
  const navigate = useNavigate();

  if (!userState.isLoggedIn || !userState.user) {
    return null;
  }

  const handleProfileClick = () => {
    navigate('/profile');
    setIsOpen(false);
  };

  const handleLogout = async () => {
    try {
      if (userState.loginType === LoginType.EMAIL) {
        await GoogleAuthService.getInstance().signOut();
      } else if (userState.loginType === LoginType.WALLET) {
        await WalletService.disconnectWallet();
      }
    } catch (error) {
      console.warn('登出过程中出现错误:', error);
    } finally {
      onLogout();
      setIsOpen(false);
    }
  };

  // 渲染用户头像
  const renderUserAvatar = (size: 'sm' | 'md' = 'sm') => {
    const sizeClasses = {
      sm: 'h-8 w-8',
      md: 'h-10 w-10'
    };

    // 如果是钱包登录且有钱包类型，显示钱包logo
    if (userState.loginType === LoginType.WALLET && userState.user?.walletType) {
      const walletIcon = walletIcons[userState.user.walletType];
      return (
          <div className={`${sizeClasses[size]} rounded-full bg-white border-2 border-purple-200 flex items-center justify-center p-1`}>
            <img
                src={walletIcon}
                alt={userState.user.walletType}
                className="h-full w-full object-contain"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
            />
            <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-r from-purple-500 to-purple-600 items-center justify-center`} style={{ display: 'none' }}>
              <Wallet className={`${size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'} text-white`} />
            </div>
          </div>
      );
    }

    // 如果有用户头像，显示头像
    if (userState.user?.avatar) {
      return (
          <img
              src={userState.user.avatar}
              alt={userState.user.name}
              className={`${sizeClasses[size]} rounded-full object-cover border-2 border-purple-200`}
          />
      );
    }

    // 默认显示用户图标
    return (
        <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center`}>
          <User className={`${size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'} text-white`} />
        </div>
    );
  };

  return (
      <div className="relative">
        <Button
            variant="ghost"
            className="h-10 w-10 rounded-full p-0 hover:bg-purple-50"
            onClick={() => setIsOpen(!isOpen)}
        >
          {renderUserAvatar('sm')}
        </Button>

        {isOpen && (
            <>
              {/* 遮罩层 */}
              <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsOpen(false)}
              />

              {/* 下拉菜单 */}
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="py-2">
                  {/* 用户信息头部 */}
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      {renderUserAvatar('md')}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {userState.user.name}
                        </p>
                        {userState.loginType === LoginType.EMAIL && userState.user.email && (
                            <p className="text-xs text-gray-500 truncate flex items-center">
                              <Mail className="h-3 w-3 mr-1" />
                              {userState.user.email}
                            </p>
                        )}
                        {userState.loginType === LoginType.WALLET && userState.user.walletAddress && (
                            <p className="text-xs text-gray-500 truncate flex items-center">
                              <Wallet className="h-3 w-3 mr-1" />
                              {`${userState.user.walletAddress.slice(0, 6)}...${userState.user.walletAddress.slice(-4)}`}
                            </p>
                        )}
                        {userState.loginType === LoginType.WALLET && userState.user.walletType && (
                            <p className="text-xs text-purple-600 capitalize">
                              {userState.user.walletType} 钱包
                            </p>
                        )}
                      </div>
                    </div>

                    {/* 积分显示 */}
                    <div className="mt-3 px-3 py-2 bg-gradient-to-r from-purple-50 to-purple-100 rounded-md">
                      <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-purple-700 flex items-center">
                      <CreditCard className="h-4 w-4 mr-1" />
                      {t('profile.points')}
                    </span>
                        <span className="text-lg font-bold text-purple-800">
                      {userState.user.points.toLocaleString()}
                    </span>
                      </div>
                    </div>
                  </div>

                  {/* 菜单选项 */}
                  <div className="py-1">
                    <button
                        onClick={handleProfileClick}
                        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center transition-colors"
                    >
                      <User className="h-4 w-4 mr-3" />
                      {t('profile.viewProfile')}
                    </button>

                    <button
                        onClick={handleLogout}
                        className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center transition-colors"
                    >
                      <LogOut className="h-4 w-4 mr-3" />
                      {t('profile.logout')}
                    </button>
                  </div>
                </div>
              </div>
            </>
        )}
      </div>
  );
}

// 登录弹窗组件
function LoginDropdown({ onLogin }: { onLogin: (type: LoginType, userData: any) => void }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showEmailForm, setShowEmailForm] = useState<boolean>(false);
  const [emailFormData, setEmailFormData] = useState({
    email: '',
    password: ''
  });

  // 添加注册相关状态
  const [isRegisterMode, setIsRegisterMode] = useState<boolean>(false);
  const [registerFormData, setRegisterFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const { t } = useLanguage();

  const handleEmailLogin = async () => {
    setIsLoading('email');
    setError(null);

    try {
      // 先检查浏览器是否支持弹窗
      const popup = window.open('', '_blank', 'width=1,height=1');
      if (!popup) {
        throw new Error('浏览器阻止了弹窗，请在浏览器设置中允许弹窗后重试');
      }
      popup.close();

      const googleAuth = GoogleAuthService.getInstance();

      // 添加重试机制
      let userData;
      let retryCount = 0;
      const maxRetries = 2;

      while (retryCount <= maxRetries) {
        try {
          userData = await googleAuth.signIn();
          break;
        } catch (error: any) {
          retryCount++;
          console.warn(`Google 登录尝试 ${retryCount} 失败:`, error.message);

          if (retryCount > maxRetries) {
            throw error;
          }

          // 等待一秒后重试
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }

      if (!userData) {
        throw new Error('无法获取用户信息，请重试');
      }

      // 模拟从后端获取用户积分
      const completeUserData = {
        ...userData,
        points: Math.floor(Math.random() * 5000) + 500 // 随机积分 500-5500
      };

      onLogin(LoginType.EMAIL, completeUserData);
      setIsOpen(false);

    } catch (error: any) {
      console.error('Google 登录失败:', error);
      let errorMessage = error.message || 'Google 登录失败，请重试';

      // 处理常见错误
      if (errorMessage.includes('popup')) {
        errorMessage = '浏览器阻止了登录窗口，请检查弹窗设置后重试';
      } else if (errorMessage.includes('CORS')) {
        errorMessage = '网络连接问题，请检查网络设置后重试';
      } else if (errorMessage.includes('Failed to fetch')) {
        errorMessage = '网络请求失败，请检查网络连接';
      }

      setError(errorMessage);
    } finally {
      setIsLoading(null);
    }
  };

  const handleWalletLogin = async () => {
    setIsLoading('wallet');
    setError(null);

    try {
      // 检测可用的钱包
      let walletData;

      if (window.ethereum) {
        walletData = await WalletService.connectMetaMask();
      } else if ((window as any).solana && (window as any).solana.isPhantom) {
        walletData = await WalletService.connectPhantom();
      } else {
        throw new Error('未检测到支持的钱包。请安装 MetaMask 或 Phantom 钱包。');
      }

      // 生成用户数据
      const userData = {
        name: `钱包用户 ${walletData.address.slice(0, 6)}`,
        walletAddress: walletData.address,
        walletType: walletData.walletType,
        points: Math.floor(Math.random() * 3000) + 1000 // 随机积分 1000-4000
      };

      onLogin(LoginType.WALLET, userData);
      setIsOpen(false);
    } catch (error: any) {
      console.error('钱包连接失败:', error);
      setError(error.message || '钱包连接失败，请重试');
    } finally {
      setIsLoading(null);
    }
  };

  const handleEmailFormLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading('email');
    setError(null);

    try {
      // 验证邮箱格式
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailFormData.email)) {
        throw new Error('请输入有效的邮箱地址');
      }

      if (emailFormData.password.length < 6) {
        throw new Error('密码长度至少6位');
      }

      // 模拟登录API调用
      await new Promise(resolve => setTimeout(resolve, 1000));

      // 验证用户登录
      const userData = UserStorageService.validateEmailLogin(emailFormData.email, emailFormData.password);

      // 更新最后登录时间
      UserStorageService.saveUser({
        ...userData,
        lastLoginAt: new Date().toISOString()
      });

      onLogin(LoginType.EMAIL, userData);
      setIsOpen(false);
      setShowEmailForm(false);
      setEmailFormData({ email: '', password: '' });

    } catch (error: any) {
      console.error('邮箱登录失败:', error);
      setError(error.message || '登录失败，请重试');
    } finally {
      setIsLoading(null);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading('register');
    setError(null);

    try {
      // 验证表单
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(registerFormData.email)) {
        throw new Error('请输入有效的邮箱地址');
      }

      if (registerFormData.password.length < 6) {
        throw new Error('密码长度至少6位');
      }

      if (registerFormData.password !== registerFormData.confirmPassword) {
        throw new Error('两次输入的密码不一致');
      }

      if (registerFormData.name.trim().length < 2) {
        throw new Error('用户名至少2个字符');
      }

      // 检查用户是否已存在
      if (UserStorageService.userExists(registerFormData.email)) {
        throw new Error('该邮箱已被注册，请直接登录');
      }

      // 模拟注册API调用
      await new Promise(resolve => setTimeout(resolve, 1500));

      // 创建新用户
      const userData = {
        name: registerFormData.name.trim(),
        email: registerFormData.email,
        password: registerFormData.password, // 实际应用中需要加密
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${registerFormData.email}`,
        points: 1000 // 新用户奖励积分
      };

      // 保存用户数据
      UserStorageService.saveUser(userData);

      // 自动登录
      onLogin(LoginType.EMAIL, userData);
      setIsOpen(false);
      setIsRegisterMode(false);
      setRegisterFormData({ email: '', password: '', confirmPassword: '', name: '' });

    } catch (error: any) {
      console.error('注册失败:', error);
      setError(error.message || '注册失败，请重试');
    } finally {
      setIsLoading(null);
    }
  };

  const handleGoogleRegister = async () => {
    setIsLoading('google');
    setError(null);

    try {
      // 先检查浏览器是否支持弹窗
      const popup = window.open('', '_blank', 'width=1,height=1');
      if (!popup) {
        throw new Error('浏览器阻止了弹窗，请在浏览器设置中允许弹窗后重试');
      }
      popup.close();

      const googleAuth = GoogleAuthService.getInstance();
      const userData = await googleAuth.signIn();

      if (!userData) {
        throw new Error('无法获取用户信息，请重试');
      }

      // 检查用户是否已存在
      if (UserStorageService.userExists(userData.email)) {
        // 如果已存在，直接登录
        const existingUser = UserStorageService.getUser(userData.email);
        UserStorageService.saveUser({
          ...existingUser,
          lastLoginAt: new Date().toISOString()
        });
        onLogin(LoginType.EMAIL, existingUser);
      } else {
        // 如果不存在，注册新用户
        const newUserData = {
          ...userData,
          points: 1000 // 新用户奖励积分
        };
        UserStorageService.saveUser(newUserData);
        onLogin(LoginType.EMAIL, newUserData);
      }

      setIsOpen(false);

    } catch (error: any) {
      console.error('Google 注册/登录失败:', error);
      let errorMessage = error.message || 'Google 注册失败，请重试';

      if (errorMessage.includes('popup')) {
        errorMessage = '浏览器阻止了登录窗口，请检查弹窗设置后重试';
      }

      setError(errorMessage);
    } finally {
      setIsLoading(null);
    }
  };

  const handleWalletRegister = async () => {
    setIsLoading('wallet');
    setError(null);

    try {
      let walletData;

      if (window.ethereum) {
        walletData = await WalletService.connectMetaMask();
      } else if ((window as any).solana && (window as any).solana.isPhantom) {
        walletData = await WalletService.connectPhantom();
      } else {
        throw new Error('未检测到支持的钱包。请安装 MetaMask 或 Phantom 钱包。');
      }

      // 检查钱包是否已注册
      if (UserStorageService.userExists(walletData.address)) {
        // 如果已存在，直接登录
        const existingUser = UserStorageService.getUser(walletData.address);
        UserStorageService.saveUser({
          ...existingUser,
          lastLoginAt: new Date().toISOString()
        });
        onLogin(LoginType.WALLET, existingUser);
      } else {
        // 如果不存在，注册新用户
        const userData = {
          name: `钱包用户 ${walletData.address.slice(0, 6)}`,
          walletAddress: walletData.address,
          walletType: walletData.walletType,
          points: 1000 // 新用户奖励积分
        };
        UserStorageService.saveUser(userData);
        onLogin(LoginType.WALLET, userData);
      }

      setIsOpen(false);
    } catch (error: any) {
      console.error('钱包连接失败:', error);
      setError(error.message || '钱包连接失败，请重试');
    } finally {
      setIsLoading(null);
    }
  };


  return (
      <div className="relative">
        <Button
            variant="outline"
            className="flex items-center space-x-2 hover:bg-purple-50 hover:border-purple-300"
            onClick={() => setIsOpen(true)}
        >
          <span>{t('nav.login')}</span>
        </Button>

        {/* 弹窗遮罩和内容 */}
        {isOpen && createPortal(
            <>
              {/* 遮罩层 */}
              <div
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                  onClick={() => setIsOpen(false)}
              >
                {/* 弹窗内容 */}
                <div
                    className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                  {/* 关闭按钮 */}
                  <button
                      onClick={() => setIsOpen(false)}
                      className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
                  >
                    <X className="h-5 w-5 text-gray-400" />
                  </button>

                  {/* 弹窗头部 */}
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-6 text-white text-center">
                    <h2 className="text-2xl font-bold mb-2">登录 CancerDAO</h2>
                    <p className="text-purple-100 text-sm">选择您偏好的登录方式</p>
                  </div>

                  {/* 登录选项 */}
                  <div className="p-8 space-y-4">
                    {showEmailForm ? (
                        /* 邮箱登录/注册表单 */
                        <>
                          <div className="flex items-center mb-6">
                            <button
                                onClick={() => {
                                  handleBackToOptions();
                                  setIsRegisterMode(false);
                                }}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors mr-3"
                            >
                              <ChevronDown className="h-5 w-5 rotate-90 text-gray-400" />
                            </button>
                            <h3 className="text-lg font-semibold text-gray-800">
                              {isRegisterMode ? '邮箱注册' : '邮箱登录'}
                            </h3>
                          </div>

                          <form onSubmit={isRegisterMode ? handleRegister : handleEmailFormLogin} className="space-y-4">
                            {isRegisterMode && (
                                <div>
                                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    用户名
                                  </label>
                                  <input
                                      type="text"
                                      id="name"
                                      value={registerFormData.name}
                                      onChange={(e) => setRegisterFormData(prev => ({ ...prev, name: e.target.value }))}
                                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                      placeholder="请输入用户名"
                                      required
                                      minLength={2}
                                  />
                                </div>
                            )}

                            <div>
                              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                邮箱地址
                              </label>
                              <input
                                  type="email"
                                  id="email"
                                  value={isRegisterMode ? registerFormData.email : emailFormData.email}
                                  onChange={(e) => {
                                    if (isRegisterMode) {
                                      setRegisterFormData(prev => ({ ...prev, email: e.target.value }));
                                    } else {
                                      setEmailFormData(prev => ({ ...prev, email: e.target.value }));
                                    }
                                  }}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                  placeholder="请输入您的邮箱"
                                  required
                              />
                            </div>

                            <div>
                              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                密码
                              </label>
                              <input
                                  type="password"
                                  id="password"
                                  value={isRegisterMode ? registerFormData.password : emailFormData.password}
                                  onChange={(e) => {
                                    if (isRegisterMode) {
                                      setRegisterFormData(prev => ({ ...prev, password: e.target.value }));
                                    } else {
                                      setEmailFormData(prev => ({ ...prev, password: e.target.value }));
                                    }
                                  }}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                  placeholder="请输入密码"
                                  required
                                  minLength={6}
                              />
                            </div>

                            {isRegisterMode && (
                                <div>
                                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                    确认密码
                                  </label>
                                  <input
                                      type="password"
                                      id="confirmPassword"
                                      value={registerFormData.confirmPassword}
                                      onChange={(e) => setRegisterFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                      placeholder="请再次输入密码"
                                      required
                                      minLength={6}
                                  />
                                </div>
                            )}

                            {!isRegisterMode && (
                                <div className="flex items-center justify-between text-sm">
                                  <label className="flex items-center">
                                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                    <span className="ml-2 text-gray-600">记住我</span>
                                  </label>
                                  <button type="button" className="text-blue-600 hover:text-blue-700">
                                    忘记密码？
                                  </button>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading === 'email' || isLoading === 'register'}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                            >
                              {(isLoading === 'email' || isLoading === 'register') ? (
                                  <>
                                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                                    <span>{isRegisterMode ? '注册中...' : '登录中...'}</span>
                                  </>
                              ) : (
                                  <span>{isRegisterMode ? '注册' : '登录'}</span>
                              )}
                            </button>

                            <div className="text-center">
                              <p className="text-sm text-gray-600 mb-2">
                                {isRegisterMode ? '已有账户？' : '还没有账户？'}
                              </p>
                              <button
                                  type="button"
                                  className="text-blue-600 hover:text-blue-700 font-medium text-sm hover:underline"
                                  onClick={() => {
                                    setIsRegisterMode(!isRegisterMode);
                                    setError(null);
                                  }}
                              >
                                {isRegisterMode ? '立即登录' : '立即注册'}
                              </button>
                            </div>
                          </form>
                        </>
                    ) : (
                        /* 原有的登录选项，需要修改按钮行为 */
                        <>
                          {/* Google 登录/注册 */}
                          <button
                              onClick={handleGoogleRegister}
                              disabled={isLoading !== null}
                              className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-white border-2 border-gray-200 rounded-xl hover:border-red-300 hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group"
                          >
                            <div className="w-6 h-6 flex items-center justify-center">
                              <svg viewBox="0 0 24 24" className="w-5 h-5">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                              </svg>
                            </div>
                            <span className="flex-1 text-gray-700 font-medium group-hover:text-gray-900">
        使用 Google 账户登录/注册
      </span>
                            {isLoading === 'google' && (
                                <div className="animate-spin rounded-full h-5 w-5 border-2 border-red-500 border-t-transparent"></div>
                            )}
                          </button>

                          {/* 钱包登录/注册 */}
                          <button
                              onClick={handleWalletRegister}
                              disabled={isLoading !== null}
                              className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-white border-2 border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group"
                          >
                            <Wallet className="h-6 w-6 text-purple-600 group-hover:text-purple-700" />
                            <span className="flex-1 text-gray-700 font-medium group-hover:text-gray-900">
        连接钱包登录/注册
      </span>
                            {isLoading === 'wallet' && (
                                <div className="animate-spin rounded-full h-5 w-5 border-2 border-purple-600 border-t-transparent"></div>
                            )}
                          </button>

                          {/* 邮箱登录/注册 */}
                          <button
                              className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
                              onClick={() => setShowEmailForm(true)}
                          >
                            <Mail className="h-6 w-6 text-blue-600 group-hover:text-blue-700" />
                            <span className="flex-1 text-gray-700 font-medium group-hover:text-gray-900">
        使用邮箱登录/注册
      </span>
                          </button>

                          {/* 删除原来的注册选项，因为已经集成到各个按钮中 */}
                          <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                              <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                              <span className="px-4 bg-white text-gray-400">快速开始</span>
                            </div>
                          </div>

                          {/* 钱包提示 */}
                          <div className="bg-gray-50 rounded-lg p-3 mt-4">
                            <p className="text-xs text-gray-500 text-center">
                              支持 MetaMask、Phantom 等主流钱包 | 新用户注册即送1000积分
                            </p>
                          </div>
                        </>
                    )}
                  </div>
                </div>
              </div>
            </>, document.body
        )}

        {/* 错误消息 */}
        {error && (
            <div className="fixed top-4 right-4 z-[60]">
              <ErrorMessage
                  message={error}
                  onClose={() => setError(null)}
              />
            </div>
        )}
      </div>
  );
}

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useLanguage();

  // 用户状态管理
  const [userState, setUserState] = useState<UserState>({
    isLoggedIn: false
  });

  // 检查钱包连接状态
  useEffect(() => {
    const checkWalletConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            // 如果之前已连接钱包，恢复连接状态
            const userData = {
              name: `钱包用户 ${accounts[0].slice(0, 6)}`,
              walletAddress: accounts[0],
              walletType: WalletType.METAMASK,
              points: 1500 // 可以从本地存储或后端获取
            };
            setUserState({
              isLoggedIn: true,
              loginType: LoginType.WALLET,
              user: userData
            });
          }
        } catch (error) {
          console.warn('检查钱包连接状态失败:', error);
        }
      }
    };

    checkWalletConnection();

    // 检查是否有已登录的用户
    const currentUser = UserStorageService.getCurrentUser();
    if (currentUser && !userState.isLoggedIn) {
      const loginType = currentUser.walletAddress ? LoginType.WALLET : LoginType.EMAIL;
      setUserState({
        isLoggedIn: true,
        loginType,
        user: currentUser
      });
    }

    // 监听钱包账户变化
    if (window.ethereum) {
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length === 0) {
          // 账户断开连接
          if (userState.loginType === LoginType.WALLET) {
            setUserState({ isLoggedIn: false });
          }
        }
      };

      window.ethereum.on('accountsChanged', handleAccountsChanged);

      return () => {
        window.ethereum?.removeListener('accountsChanged', handleAccountsChanged);
      };
    }
  }, [userState.loginType]);

  const handleLogin = (type: LoginType, userData: any) => {
    setUserState({
      isLoggedIn: true,
      loginType: type,
      user: userData
    });
  };

  const handleLogout = () => {
    UserStorageService.clearCurrentUser();
    setUserState({
      isLoggedIn: false
    });
  };

  const handleJoinCommunity = (): void => {
    if (location.pathname === '/') {
      document.getElementById('join-community')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('join-community')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const navigation: NavigationItem[] = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.about'), href: "/about" },
    { name: t('nav.solution'), href: "/solution" },
    { name: t('nav.community'), href: "/community" },
    { name: t('nav.resources'), href: "/resources" },
  ];


  return (
      <nav className="bg-white/90 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/">
              <div className="flex items-center cursor-pointer">
                <img
                    src="/logo.png"
                    alt="CancerDAO"
                    className="h-10 w-auto"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const textLogo = target.nextElementSibling as HTMLElement;
                      if (textLogo) textLogo.style.display = 'block';
                    }}
                />
                <div
                    className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent"
                    style={{ display: 'none' }}
                >
                  CancerDAO
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                  <Link key={item.name} to={item.href}>
                <span className={cn(
                    "nav-item",
                    location.pathname === item.href && "active"
                )}>
                  {item.name}
                </span>
                  </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <LanguageSwitcher />
              {/* 根据登录状态显示不同组件 */}
              {userState.isLoggedIn ? (
                  <UserProfileDropdown
                      userState={userState}
                      onLogout={handleLogout}
                  />
              ) : (
                  <LoginDropdown onLogin={handleLogin} />
              )}
              <Button
                  className="btn-primary"
                  onClick={handleJoinCommunity}
              >
                {t('nav.join')}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 rounded-lg mt-2 shadow-lg">
                  {navigation.map((item) => (
                      <Link key={item.name} to={item.href}>
                  <span
                      className={cn(
                          "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                          location.pathname === item.href
                              ? "text-purple-700 bg-purple-100"
                              : "text-gray-700 hover:text-purple-700 hover:bg-purple-50"
                      )}
                      onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </span>
                      </Link>
                  ))}
                  <div className="pt-4 space-y-3">
                    <div className="flex justify-center">
                      <LanguageSwitcher />
                    </div>

                    {/* 移动端登录选项 - 根据登录状态显示 */}
                    {userState.isLoggedIn ? (
                        <div className="space-y-2">
                          {/* 移动端用户信息显示 */}
                          <div className="bg-purple-50 rounded-lg p-3">
                            <div className="flex items-center space-x-3">
                              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                                <User className="h-4 w-4 text-white" />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-900">
                                  {userState.user?.name}
                                </p>
                                <p className="text-xs text-purple-600">
                                  {t('profile.points')}: {userState.user?.points.toLocaleString()}
                                </p>
                              </div>
                            </div>
                          </div>
                          <Button
                              variant="outline"
                              className="w-full"
                              onClick={async () => {
                                try {
                                  if (userState.loginType === LoginType.EMAIL) {
                                    await GoogleAuthService.getInstance().signOut();
                                  } else if (userState.loginType === LoginType.WALLET) {
                                    await WalletService.disconnectWallet();
                                  }
                                } catch (error) {
                                  console.warn('登出过程中出现错误:', error);
                                } finally {
                                  handleLogout();
                                  setIsOpen(false);
                                }
                              }}
                          >
                            <LogOut className="h-4 w-4 mr-2" />
                            {t('profile.logout')}
                          </Button>
                        </div>
                    ) : (
                        <div className="space-y-2">
                          <LoginDropdown onLogin={handleLogin} />
                        </div>
                    )}

                    <Button
                        className="btn-primary w-full"
                        onClick={() => {
                          handleJoinCommunity();
                          setIsOpen(false);
                        }}
                    >
                      {t('nav.join')}
                    </Button>
                  </div>
                </div>
              </div>
          )}
        </div>
      </nav>
  );
}