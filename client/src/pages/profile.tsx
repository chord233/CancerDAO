// pages/profile.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    User,
    Mail,
    Wallet,
    Trophy,
    Calendar,
    Activity,
    Star,
    Gift,
    History,
    Settings,
    Edit
} from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

// 模拟数据接口
interface UserProfile {
    id: string;
    name: string;
    avatar?: string;
    email?: string;
    walletAddress?: string;
    points: number;
    level: number;
    joinDate: string;
    totalContributions: number;
    completedTasks: number;
    badges: Array<{
        id: string;
        name: string;
        icon: string;
        description: string;
        earnedDate: string;
    }>;
    pointsHistory: Array<{
        id: string;
        action: string;
        points: number;
        date: string;
        description: string;
    }>;
}

export function ProfilePage() {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState<'overview' | 'history' | 'badges' | 'settings'>('overview');

    // 模拟用户数据
    const [userProfile] = useState<UserProfile>({
        id: '1',
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        email: 'john@example.com',
        walletAddress: '0x1234...5678',
        points: 1250,
        level: 5,
        joinDate: '2024-01-15',
        totalContributions: 23,
        completedTasks: 15,
        badges: [
            {
                id: '1',
                name: '早期贡献者',
                icon: '🌟',
                description: '在项目早期就开始贡献的用户',
                earnedDate: '2024-02-01'
            },
            {
                id: '2',
                name: '积极参与者',
                icon: '🏆',
                description: '完成了超过10个任务',
                earnedDate: '2024-03-15'
            },
            {
                id: '3',
                name: '社区建设者',
                icon: '🤝',
                description: '邀请了5位新成员加入',
                earnedDate: '2024-04-10'
            }
        ],
        pointsHistory: [
            {
                id: '1',
                action: '完成任务',
                points: 100,
                date: '2024-07-15',
                description: '完成了数据收集任务'
            },
            {
                id: '2',
                action: '社区互动',
                points: 50,
                date: '2024-07-14',
                description: '参与了社区讨论'
            },
            {
                id: '3',
                action: '推荐奖励',
                points: 200,
                date: '2024-07-13',
                description: '成功推荐新用户注册'
            }
        ]
    });

    const tabItems = [
        { id: 'overview', label: t('profile.overview'), icon: User },
        { id: 'history', label: t('profile.history'), icon: History },
        { id: 'badges', label: t('profile.badges'), icon: Trophy },
        { id: 'settings', label: t('profile.settings'), icon: Settings }
    ];

    const renderOverview = () => (
        <div className="space-y-6">
            {/* 统计卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                    <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-sm font-medium text-gray-600">
                                {t('profile.totalPoints')}
                            </CardTitle>
                            <Star className="h-5 w-5 text-yellow-500" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-purple-600">
                            {userProfile.points.toLocaleString()}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                            {t('profile.level')} {userProfile.level}
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-sm font-medium text-gray-600">
                                {t('profile.completedTasks')}
                            </CardTitle>
                            <Activity className="h-5 w-5 text-green-500" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-600">
                            {userProfile.completedTasks}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                            {t('profile.totalContributions')} {userProfile.totalContributions}
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-sm font-medium text-gray-600">
                                {t('profile.badges')}
                            </CardTitle>
                            <Trophy className="h-5 w-5 text-orange-500" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-orange-600">
                            {userProfile.badges.length}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                            {t('profile.earnedBadges')}
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* 最新徽章 */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center">
                        <Gift className="h-5 w-5 mr-2" />
                        {t('profile.latestBadges')}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {userProfile.badges.slice(0, 3).map((badge) => (
                            <div key={badge.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                <div className="text-2xl">{badge.icon}</div>
                                <div>
                                    <p className="font-medium text-sm">{badge.name}</p>
                                    <p className="text-xs text-gray-500">{badge.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );

    const renderHistory = () => (
        <Card>
            <CardHeader>
                <CardTitle>{t('profile.pointsHistory')}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {userProfile.pointsHistory.map((record) => (
                        <div key={record.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                    <Badge variant={record.points > 0 ? "default" : "secondary"}>
                                        {record.action}
                                    </Badge>
                                    <span className="text-sm text-gray-600">{record.date}</span>
                                </div>
                                <p className="text-sm text-gray-700 mt-1">{record.description}</p>
                            </div>
                            <div className={`font-bold ${record.points > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {record.points > 0 ? '+' : ''}{record.points}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );

    const renderBadges = () => (
        <Card>
            <CardHeader>
                <CardTitle>{t('profile.allBadges')}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {userProfile.badges.map((badge) => (
                        <div key={badge.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                            <div className="text-3xl">{badge.icon}</div>
                            <div className="flex-1">
                                <h3 className="font-medium">{badge.name}</h3>
                                <p className="text-sm text-gray-600 mt-1">{badge.description}</p>
                                <div className="flex items-center mt-2 text-xs text-gray-500">
                                    <Calendar className="h-3 w-3 mr-1" />
                                    {t('profile.earnedOn')} {badge.earnedDate}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );

    const renderSettings = () => (
        <Card>
            <CardHeader>
                <CardTitle>{t('profile.settings')}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-medium mb-4">{t('profile.accountInfo')}</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">{t('profile.name')}</span>
                                <div className="flex items-center space-x-2">
                                    <span>{userProfile.name}</span>
                                    <Button variant="ghost" size="sm">
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">{t('profile.email')}</span>
                                <div className="flex items-center space-x-2">
                                    <span>{userProfile.email}</span>
                                    <Button variant="ghost" size="sm">
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">{t('profile.wallet')}</span>
                                <div className="flex items-center space-x-2">
                                    <span className="font-mono text-sm">{userProfile.walletAddress}</span>
                                    <Button variant="ghost" size="sm">
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* 用户信息头部 */}
                <Card className="mb-8">
                    <CardContent className="pt-6">
                        <div className="flex items-start space-x-6">
                            <div className="flex-shrink-0">
                                {userProfile.avatar ? (
                                    <img
                                        src={userProfile.avatar}
                                        alt={userProfile.name}
                                        className="h-20 w-20 rounded-full object-cover"
                                    />
                                ) : (
                                    <div className="h-20 w-20 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                                        <User className="h-10 w-10 text-white" />
                                    </div>
                                )}
                            </div>
                            <div className="flex-1">
                                <h1 className="text-2xl font-bold text-gray-900">{userProfile.name}</h1>
                                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                                    {userProfile.email && (
                                        <div className="flex items-center">
                                            <Mail className="h-4 w-4 mr-1" />
                                            {userProfile.email}
                                        </div>
                                    )}
                                    {userProfile.walletAddress && (
                                        <div className="flex items-center">
                                            <Wallet className="h-4 w-4 mr-1" />
                                            {userProfile.walletAddress}
                                        </div>
                                    )}
                                    <div className="flex items-center">
                                        <Calendar className="h-4 w-4 mr-1" />
                                        {t('profile.joinedOn')} {userProfile.joinDate}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <Badge variant="secondary" className="text-purple-700 bg-purple-100">
                                        {t('profile.level')} {userProfile.level}
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* 标签页导航 */}
                <div className="mb-8">
                    <nav className="flex space-x-8">
                        {tabItems.map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                                        activeTab === tab.id
                                            ? 'border-purple-500 text-purple-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700'
                                    }`}
                                >
                                    <Icon className="h-4 w-4" />
                                    <span>{tab.label}</span>
                                </button>
                            );
                        })}
                    </nav>
                </div>

                {/* 标签页内容 */}
                <div>
                    {activeTab === 'overview' && renderOverview()}
                    {activeTab === 'history' && renderHistory()}
                    {activeTab === 'badges' && renderBadges()}
                    {activeTab === 'settings' && renderSettings()}
                </div>
            </div>
        </div>
    );
}