"use client";

import { LucideIcon, ExternalLink } from 'lucide-react';
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
      className="group relative flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-900/20 border border-gray-800/50 transition-all duration-500 hover:border-cyan-500/50 overflow-hidden"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ x: 8 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex items-center gap-6">
        {/* Icon container */}
        <motion.div
          className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl group-hover:from-cyan-500 group-hover:to-blue-600 transition-all duration-300 shadow-lg group-hover:shadow-cyan-500/25"
          whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
        >
          <Icon size={24} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
        </motion.div>

        {/* Text content */}
        <div className="flex-1">
          <p className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wider group-hover:text-cyan-400 transition-colors">
            {type}
          </p>
          <p className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors break-all">
            {value}
          </p>
        </div>

        {/* Arrow indicator */}
        <motion.div
          className="p-2 rounded-lg group-hover:bg-cyan-500/20 transition-colors duration-300"
          whileHover={{ x: 3 }}
        >
          <ExternalLink
            size={18}
            className="text-gray-500 group-hover:text-cyan-400 transition-colors duration-300"
          />
        </motion.div>
      </div>
    </motion.a>
  );
};

export default ContactItem;