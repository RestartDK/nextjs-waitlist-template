import Link from "next/link";
import { Zap } from "lucide-react";

const sections = [
  {
    title: "Follow Me",
    links: [
      { label: "Github", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Linkedin", href: "#" },
    ],
  },
  {
    title: "Platforms",
    links: [
      { label: "Web", href: "#" },
      { label: "Mobile", href: "#" },
      { label: "Desktop", href: "#" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Youtube", href: "#" },
      { label: "Discord", href: "#" },
      { label: "Twitch", href: "#" },
    ],
  },
];

export default function Footer() {
  

  return (
    <footer id="footer">
      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a href="/" className="font-bold text-xl flex">
            <Zap />
          </a>
        </div>

        {sections.map((section) => (
          <div className="flex flex-col gap-2" key={section.title}>
            <h3 className="font-bold text-lg">{section.title}</h3>
            {section.links.map((link) => (
              <div key={link.label}>
                <a href={link.href} className="opacity-60 hover:opacity-100">
                  {link.label}
                </a>
              </div>
            ))}
          </div>
        ))}
      </section>
      <section className="border-t container py-14 text-center">
        <h3>
          &copy; 2024 Landing page made by{" "}
          <Link
            target="_blank"
            href="https://github.com/restartdk"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Daniel Kumlin
          </Link>
        </h3>
      </section>
    </footer>
  );
}