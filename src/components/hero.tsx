import { ArrowRight } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return(
    <section className="flex flex-col items-center md:py-32 py-20 gap-6">
				<div className="flex flex-row border-border text-muted-foreground text-sm border-2 rounded-full p-2">
					🚀 We just launched version 1.0
				</div>
				<div className="flex flex-col gap-6">
					<h1 className="text-5xl font-bold text-center">
						Welcome to the
						<span className="text-primary"> Waitlist Template</span>
					</h1>
					<h2 className="text-muted-foreground text-center">
						We are a template starter for making a waitlist page with nextjs
					</h2>
					<div className="flex flex-row gap-3 justify-center">
						<Link
							href="/auth/signin"
							className={buttonVariants({ variant: "default" })}
						>
							Get Started
						</Link>
						<Link href="" className={buttonVariants({ variant: "ghost" })}>
							Learn more
							<ArrowRight className="ml-2 h-5 w-5" />
						</Link>
					</div>
				</div>
			</section>
  );
}