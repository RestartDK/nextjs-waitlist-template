import { resend } from '@/lib/resend';
import MagicLinkEmail from '../../emails/magiclink';
import { EmailConfig } from '@auth/core/providers/email';
import { Theme } from '@auth/core/types';

export async function sendVerificationRequest(params: { identifier: string; url: string; expires: Date; provider: EmailConfig; token: string; theme: Theme; request: Request; }) {
  const { identifier, url } = params;
  const { host } = new URL(url);

  try {
    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: identifier,
      subject: `Sign in to ${host}`,
      text: text({ url, host}),
      react: MagicLinkEmail({ url, host}),
    })
  } catch (error) {
      throw new Error('Unable to send email');
  }
}

function text({ url, host }: { url: string; host: string }) {
  return `Use the link below to sign in to your account on ${host}: ${url}`;
}