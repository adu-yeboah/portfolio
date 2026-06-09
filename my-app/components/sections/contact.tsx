"use client";

import { motion } from 'framer-motion';
import { contactInfo } from '@/lib/data';
import ContactItem from '@/components/contactItem';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4 mb-16">
            <motion.span
              className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              GET IN TOUCH
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              LET&apos;S <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">CONNECT.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
              I&apos;m always open to new ideas and collaborations. Choose your preferred way to connect below!
            </p>
          </div>

          <div className="flex flex-col gap-6 max-w-xl mx-auto text-left">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ContactItem {...contact} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
