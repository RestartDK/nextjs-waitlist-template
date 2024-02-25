import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="flex flex-col gap-6 items-center justify-center py-24 sm:py-30">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-5xl font-bold">
          Some Benefit To <span className="text-primary">Join the Waitlist</span>
        </h1>
        <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis dolor.</p>
        <div className="flex justify-center gap-3">
          <Link
            href="/auth/signin"
            className={buttonVariants({
              variant: "default",
            })}
          >
            Get Started
          </Link>
          <Link
            href=""
            className={buttonVariants({
              variant: "ghost",
            })}
          >
            Learn more
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
		</section>
  );
}