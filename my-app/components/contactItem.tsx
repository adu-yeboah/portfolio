import { Mail, Phone, Github } from 'lucide-react';

interface ContactItemProps {
  type: 'email' | 'phone' | 'github';
  value: string;
  href: string;
}

const ContactItem = ({ type, value, href }: ContactItemProps) => {
  const icons = {
    email: <Mail className="text-cyan-400" />,
    phone: <Phone className="text-cyan-400" />,
    github: <Github className="text-cyan-400" />,
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-cyan-500/50 transition-all duration-300 group"
    >
      <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-cyan-900/20 transition-colors">
        {icons[type]}
      </div>
      <span className="text-gray-300 group-hover:text-white transition-colors">
        {value}
      </span>
    </a>
  );
};

export default ContactItem;