"use client";

import SectionHeader from '@/components/sectionHeader';
import Reveal from '@/components/reveal';
import { contactInfo } from '@/lib/data';
import ContactItem from '@/components/contactItem';

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <SectionHeader
            center
            kicker="Contact"
            title="Let's Connect"
            description="I'm always open to new ideas and collaborations. Choose your preferred way to connect below!"
          />

          <div className="flex flex-col gap-4">
            {contactInfo.map((contact, index) => (
              <Reveal key={contact.type} delay={index * 0.05}>
                <ContactItem {...contact} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
