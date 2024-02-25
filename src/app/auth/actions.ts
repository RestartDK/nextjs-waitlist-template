"use server"

import { signIn } from "@/auth";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function signInUser(formData: FormData) {
  const session = await auth();

  // If the user is already signed in, redirect to the home page
  if (session) {
    redirect("/");
  }

  const email = formData.get("email") as string;
  await signIn("nodemailer", { email, redirectTo: "/" });
}