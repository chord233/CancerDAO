import nodemailer from 'nodemailer';

interface EmailOptions {
    to: string;
    subject: string;
    html: string;
}

/**
 * 发送邮件
 * @param options 收件人、主题与 HTML 内容
 * @returns Nodemailer 的发送结果对象
 * @throws 发送失败时抛出错误
 */
export const sendEmail = async (options: EmailOptions) => {
    try {
        const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
        if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
            throw new Error('SMTP configuration is incomplete. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS.');
        }

        // 创建邮件传输器（在发送时进行），避免模块加载阶段出错
        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: parseInt(SMTP_PORT, 10),
            secure: false,
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS,
            },
        });

        const mailOptions = {
            from: `"CancerDAO" <${process.env.SMTP_USER}>`,
            to: options.to,
            subject: options.subject,
            html: options.html,
        };

        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent:', result.messageId);
        return result;
    } catch (error) {
        console.error('Email sending failed:', error);
        throw error;
    }
};