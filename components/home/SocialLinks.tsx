import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { siteConfig } from "@/data/site";

const links = [
  {
    icon: FaGithub,
    href: siteConfig.links.github,
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: siteConfig.links.linkedin,
    label: "LinkedIn",
  },
  {
    icon: FaCode,
    href: siteConfig.links.codeforces,
    label: "Codeforces",
  },
  {
    icon: MdEmail,
    href: siteConfig.links.email,
    label: "Email",
  },
];

export default function SocialLinks() {
  return (
    <div className="mt-10 flex items-center gap-5">
      {links.map((link) => {
        const Icon = link.icon;

        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
          >
            <Icon size={22} />
          </a>
        );
      })}
    </div>
  );
}