import { Request, Response } from 'express';
import { sendEmail } from '../utils/email';

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

        // 验证必填字段
        if (!name || !email || !subject || !message || !privacyAgreed) {
            return res.status(400).json({
                success: false,
                error: 'Missing required fields'
            });
        }

        // 验证邮箱格式
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                error: 'Invalid email format'
            });
        }

        // 发送邮件通知到官方邮箱
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

        // 发送确认邮件给用户
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

        res.status(200).json({
            success: true,
            message: 'Message sent successfully'
        });

    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to send message'
        });
    }
};