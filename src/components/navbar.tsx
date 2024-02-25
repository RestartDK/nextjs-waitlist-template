import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./dark-toggle";
import { Zap } from "lucide-react";

import { auth } from "@/auth";

import Link from "next/link";

export default async function Navbar() {
	const session = await auth();

	return (
		<nav className="w-full flex justify-between items-center gap-3 border-b-2 border-border px-5 py-3">
			<Link href="/">
				<Zap className="h-6 w-6" />
			</Link>
      <div className="flex gap-3 items-center">
        {session?.user?.email ? (
          <p>{session?.user?.email}</p>
        ) : (
          <Link
            href="/auth/signin"
            className={buttonVariants({
              variant: "default",
            })}
          >
            Get Started
          </Link>
        )}
        <ModeToggle />
      </div>
		</nav>
	);
}
