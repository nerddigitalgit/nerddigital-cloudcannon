import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 md:py-16 relative bg-nerd-dark">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23FFFFFF' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
      }}></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-mono uppercase tracking-widest text-white/60 mb-4">
            Results That Speak
          </p>
          <h2 className="text-3xl md:text-5xl text-white mb-4 font-sans font-semibold">
            From experts <span className="font-serif italic font-semibold">like you</span>
          </h2>
        </div>

        {/* 2-column grid on desktop, 1 on mobile - only show first 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {TESTIMONIALS.slice(0, 2).map((t) => (
            <div
              key={t.id}
              className="relative h-[320px] md:h-[320px] overflow-hidden group cursor-pointer rounded-2xl"
            >
              {/* Background image - positioned to show person on right */}
              <img
                src={t.image}
                alt={t.author}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay - left side darker for text */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

              {/* Content overlay - left aligned */}
              <div className="absolute inset-0 flex flex-col p-6 md:p-8 max-w-[70%]">
                {/* Success story badge */}
                <div className="mb-4">
                  <span className="inline-block px-4 py-1.5 bg-amber-50 rounded-full text-xs font-mono uppercase tracking-widest text-neutral-800">
                    Success Story
                  </span>
                </div>

                {/* Quote as headline */}
                <h3 className="text-white text-lg md:text-xl font-semibold leading-snug font-sans">
                  "{t.quote}"
                </h3>

                {/* Attribution at bottom */}
                <div className="mt-auto pt-4">
                  <p className="text-white/80 text-sm font-sans">
                    <span className="font-semibold text-white">{t.author}</span> · {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
