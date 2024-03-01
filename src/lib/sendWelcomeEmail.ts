import { resend } from "@/lib/resend";
import WelcomeEmail from "../../emails/welcome";

interface sendWelcomeEmailParams {
  name: string | null | undefined,
  email: string | null | undefined
}

export async function sendWelcomeEmail(params: sendWelcomeEmailParams) {
  const { name, email } = params;

  try {
    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: email as string,
      subject: `Welcome to COMPANY NAME!`,
      react: WelcomeEmail({ name }),
    })
  } catch (error) {
      throw new Error('Unable to send email');
  }
}
