import React from 'react';

interface HeroProps {
  onOpenLeadMagnet: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenLeadMagnet }) => {
  return (
    <section className="relative pt-28 pb-8 md:pt-32 md:pb-10 overflow-hidden">
      {/* Clean paper background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-nerd-light"></div>
      </div>

      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[2.28rem] md:text-[3.42rem] text-nerd-dark mb-6 leading-[1.15] font-sans font-semibold">
            You're the expert.<br />
            <span className="font-serif italic font-semibold">Your marketing should show it.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-nerd-muted mb-8 leading-relaxed font-sans">
            Marketing for domain experts building businesses around their expertise.
          </p>

          <button
            onClick={onOpenLeadMagnet}
            className="btn-primary px-8 py-4 inline-flex items-center justify-center"
            style={{ fontSize: '0.6rem' }}
          >
            Learn to Convert Leads Into Clients
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
