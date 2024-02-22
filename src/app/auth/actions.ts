"use server"

import { signIn } from "@/auth";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export default async function signInUser(formData: FormData) {
  const email = formData.get("email") as string;
  const user = await db.query.users.findFirst({
    where: ((users) => eq(users.email, email))
  });

  // If user is already registered do not let them sign up again
  if (user) {
    redirect("/")
  }

  await signIn("nodemailer", { email, redirectTo: "/" });
}