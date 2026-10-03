import { LucideIcon, ExternalLink } from 'lucide-react';

interface ContactItemProps {
  type: string;
  value: string;
  href: string;
  icon: LucideIcon;
  color?: string;
}

const ContactItem = ({ type, value, href, icon: Icon }: ContactItemProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 p-4 border border-neutral-800 rounded-xl hover:border-neutral-600 transition-colors"
    >
      <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg">
        <Icon size={20} className="text-neutral-300" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-neutral-500 uppercase tracking-wider mb-0.5">{type}</p>
        <p className="font-medium text-neutral-100 break-all">{value}</p>
      </div>
      <ExternalLink
        size={16}
        className="text-neutral-500 group-hover:text-blue-400 transition-colors shrink-0"
      />
    </a>
  );
};

export default ContactItem;
