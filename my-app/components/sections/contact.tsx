"use client";

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { contactInfo } from '@/lib/data';
import ContactItem from '@/components/contactItem';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-4">
                <motion.span
                  className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  GET IN TOUCH
                </motion.span>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                  LET&apos;S <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">CONNECT.</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                  Have a vision for a project? Or just want to talk tech? I&apos;m always open to new ideas and collaborations.
                </p>
              </div>

              <motion.form
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full bg-gray-900/50 border-2 border-gray-800 rounded-xl px-4 py-3.5 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all duration-300 peer placeholder:text-gray-600"
                    />
                  </div>
                  <div className="relative group">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full bg-gray-900/50 border-2 border-gray-800 rounded-xl px-4 py-3.5 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all duration-300 peer placeholder:text-gray-600"
                    />
                  </div>
                </div>
                <div className="relative group">
                  <textarea
                    placeholder="Your message..."
                    rows={5}
                    className="w-full bg-gray-900/50 border-2 border-gray-800 rounded-xl px-4 py-3.5 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all duration-300 peer placeholder:text-gray-600 resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="group relative w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </motion.form>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-center gap-4">
              <motion.div
                className="space-y-2 mb-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-gray-300">Contact Info</h3>
                <p className="text-sm text-gray-500">Choose your preferred way to connect</p>
              </motion.div>
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.type}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ContactItem {...contact} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
