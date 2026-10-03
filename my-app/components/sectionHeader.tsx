"use client";

import Reveal from '@/components/reveal';

const SectionHeader = ({
  kicker,
  title,
  description,
  center = false,
}: {
  kicker: string;
  title: string;
  description?: string;
  center?: boolean;
}) => {
  return (
    <Reveal className={`mb-14 max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <p className="text-sm font-medium uppercase tracking-widest text-blue-400 mb-3">
        {kicker}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-4 text-lg text-neutral-400 leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
};

export default SectionHeader;
