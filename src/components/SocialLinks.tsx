import { Code2, Link2, Mail, Phone, MessageCircle } from "lucide-react";

const socials = [
  { icon: Code2, href: "https://github.com/ton-pseudo", label: "GitHub" },
  { icon: Link2, href: "https://linkedin.com/in/ton-profil", label: "LinkedIn" },
  { icon: Mail, href: "mailto:kadiatou.diallo@email.com", label: "Email" },
  { icon: Phone, href: "tel:+221XXXXXXXXX", label: "Téléphone" },
  {
    icon: MessageCircle,
    href: "https://wa.me/221XXXXXXXXX",
    label: "WhatsApp",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-3">
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={social.label}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-blue-500 hover:text-blue-400 transition-colors"
          >
            <Icon size={16} />
          </a>
        );
      })}
    </div>
  );
}
