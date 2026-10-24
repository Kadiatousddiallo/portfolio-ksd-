import { Code2, Link2, Mail, Phone, MessageCircle } from "lucide-react";

const socials = [
  { icon: Code2, href: "https://github.com/Kadiatousddiallo", label: "GitHub" },
  { icon: Link2, href: "https://linkedin.com/in/kadiatou-sadio-diallo-a1b478320", label: "LinkedIn" },
  { icon: Mail, href: "mailto:kadiatousddiallo@email.com", label: "Email" },
  { icon: Phone, href: "tel:+221773143046", label: "Téléphone" },
  {
    icon: MessageCircle,
    href: "https://wa.me/221773143046",
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
