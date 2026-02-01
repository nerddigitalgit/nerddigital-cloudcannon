import React from 'react';

interface LeadMagnetProps {
  onOpenLeadMagnet: () => void;
}

const LeadMagnet: React.FC<LeadMagnetProps> = ({ onOpenLeadMagnet }) => {
  return (
    <section className="py-16 md:py-20 bg-nerd-light relative overflow-hidden">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-xs font-mono text-nerd-muted uppercase tracking-widest mb-4">Free 5-Day Email Course</p>

            <h2 className="text-3xl md:text-4xl text-nerd-dark leading-tight mb-4 font-sans font-semibold">
              Start converting leads <span className="font-serif italic font-semibold">into clients</span>
            </h2>

            <p className="text-lg text-nerd-muted mb-8">
              5 frameworks. 5 days. 100% free.
            </p>

            <button
              onClick={onOpenLeadMagnet}
              className="btn-primary px-8 py-4 inline-flex items-center justify-center"
              style={{ fontSize: '0.6rem' }}
            >
              Get the Free Course
            </button>

            <p className="text-sm text-nerd-muted mt-4">No credit card required.</p>
          </div>

          {/* Cover image */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-[280px] md:w-[320px] rotate-2 hover:rotate-0 transition-transform duration-500 cursor-pointer group">
              <img
                src="/images/conversion-code-cover.png"
                alt="The Conversion Code"
                className="w-full h-auto shadow-xl"
              />
              {/* Pink shadow decoration - visible on hover */}
              <div className="absolute inset-0 bg-nerd-pink/20 -z-10 translate-x-3 translate-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
