import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./dark-toggle";

import { auth } from "@/auth";

import Link from "next/link"; 

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className="w-full flex justify-end items-center gap-3 border-b-2 border-border p-3">
      {session?.user?.email ? (
        <p>
          {session?.user?.email}
        </p>
      ) : (
        <Link href="/auth/signin" className={buttonVariants({
          variant: "default"
          })}>
            Join
        </Link>
      )}
      <ModeToggle />
    </nav>
  );
}