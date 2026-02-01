import React from 'react';
import { EXPERTS } from '../constants';

const ExpertMarquee: React.FC = () => {
  // Duplicate exactly twice for seamless infinite scroll
  const scrollItems = [...EXPERTS, ...EXPERTS];

  return (
    <div className="w-full py-8 bg-nerd-light overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="font-mono uppercase tracking-widest text-nerd-muted" style={{ fontSize: '0.6rem' }}>
          Trusted by World-Class Experts
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradients to fade edges - reduced from w-32 to w-[115px] (10% less coverage) */}
        <div className="absolute top-0 left-0 w-[115px] h-full bg-gradient-to-r from-nerd-light to-transparent z-10 hidden md:block"></div>
        <div className="absolute top-0 right-0 w-[115px] h-full bg-gradient-to-l from-nerd-light to-transparent z-10 hidden md:block"></div>

        <div className="flex gap-8 animate-marquee-seamless w-max hover:[animation-play-state:paused]">
          {scrollItems.map((expert, index) => (
            <div
              key={`${expert.id}-${index}`}
              className="expert-card relative group w-[213px] h-[274px] flex-shrink-0 overflow-hidden cursor-pointer transition-all duration-300"
            >
              {/* Full color image */}
              <img
                src={expert.image}
                alt={expert.name}
                className="w-full h-full object-cover transition-all duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>

              <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                <p className="text-xs font-mono uppercase tracking-wider text-nerd-green mb-1">{expert.role}</p>
                <h3 className="text-xl font-sans font-semibold">{expert.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertMarquee;
