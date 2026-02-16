"use client";

import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactItemProps {
  type: string;
  value: string;
  href: string;
  icon: LucideIcon;
  color?: string;
}

const ContactItem = ({ type, value, href, icon: Icon, color }: ContactItemProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-6 p-6 rounded-2xl bg-gray-900/30 border border-gray-800/50 transition-all duration-300 group hover:border-cyan-500/30 ${color || ''}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ x: 10 }}
    >
      <div className="p-4 bg-gray-800 rounded-xl group-hover:bg-cyan-500 group-hover:text-black transition-colors duration-300">
        <Icon size={24} />
      </div>
      <div>
        <p className="text-sm text-gray-400 font-medium mb-1 uppercase tracking-wider">{type}</p>
        <p className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors uppercase">{value}</p>
      </div>
    </motion.a>
  );
};

export default ContactItem;