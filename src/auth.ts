import NextAuth, { NextAuthConfig } from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { sendVerificationRequest } from "@/lib/sendVerificationRequest"
import { db } from "@/db"
import Email from "@auth/core/providers/nodemailer"



export const authConfig = { 
  adapter: DrizzleAdapter(db),
  providers: [
    Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      sendVerificationRequest
    })
  ],
  callbacks: {
    async session({session, user}) {
      session.user.id = user.id
      return session
    },
  },
  pages: {
    signIn: "/auth/signin",
    verifyRequest: "/auth/verify-request",
    error: "/auth/error",
  }
} satisfies NextAuthConfig

export const { 
  handlers, 
  auth, 
  signOut,
  signIn
} = NextAuth(authConfig)
