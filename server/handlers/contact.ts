import { Request, Response } from 'express';
import { sendEmail } from '../utils/email';
import { storage } from '../storage';

/**
 * 联系表单处理器
 * ---------------------------------
 * 职责：
 * - 校验请求体必填字段与邮箱格式
 * - 发送邮件到官方邮箱，并给用户发送确认邮件
 * - 成功返回 { success: true }，失败统一返回 500
 */
interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    organization?: string;
    phone?: string;
    privacyAgreed: boolean;
    timestamp?: string;
    userAgent?: string;
}

export const handleContact = async (req: Request, res: Response) => {
    try {
        const {
            name,
            email,
            subject,
            message,
            organization,
            phone,
            privacyAgreed,
            timestamp,
            userAgent
        }: ContactFormData = req.body;

        // 验证必填字段：姓名、邮箱、主题、消息内容与隐私协议同意
        if (!name || !email || !subject || !message || !privacyAgreed) {
            return res.status(400).json({
                success: false,
                error: 'Missing required fields'
            });
        }

        // 验证邮箱格式：简单正则校验
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                error: 'Invalid email format'
            });
        }

        // 发送邮件通知到官方邮箱：包含用户的详细信息与时间戳/UA
        await sendEmail({
            to: 'contact@cancerdao.org',
            subject: `Contact Form: ${subject}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        ${organization ? `<p><strong>Organization:</strong> ${organization}</p>` : ''}
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Submitted at: ${timestamp || new Date().toISOString()}</small></p>
        ${userAgent ? `<p><small>User Agent: ${userAgent}</small></p>` : ''}
      `
        });

        // 发送确认邮件给用户：提示已收到并将在 24 小时内回复
        await sendEmail({
            to: email,
            subject: 'Thank you for contacting CancerDAO',
            html: `
        <h2>Thank you for your message!</h2>
        <p>Dear ${name},</p>
        <p>We have received your message and will get back to you within 24 hours.</p>
        <p>Best regards,<br>The CancerDAO Team</p>
      `
        });

        // 将消息保存到存储（内存或数据库，视 USE_DB 而定）
        try {
            await storage.createContactMessage({
                name,
                email,
                subject,
                message,
                organization: organization || null,
                phone: phone || null,
                // Drizzle 表定义为 integer，1 表示同意
                privacyAgreed: privacyAgreed ? 1 : 0,
            } as any);
        } catch (persistErr) {
            // 不阻断主流程，但记录错误
            console.error('Persist contact message failed:', persistErr);
        }

        res.status(200).json({
            success: true,
            message: 'Message sent successfully'
        });

    } catch (error) {
        // 统一错误捕获与日志
        console.error('Contact form error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to send message'
        });
    }
};