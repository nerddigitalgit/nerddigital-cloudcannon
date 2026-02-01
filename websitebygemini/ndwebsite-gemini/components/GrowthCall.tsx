import React from 'react';
import { ArrowLeft } from 'lucide-react';

const GrowthCall: React.FC = () => {
  return (
    <div className="min-h-screen bg-nerd-light">
      {/* Header */}
      <div className="bg-white border-b border-nerd-border">
        <div className="container mx-auto px-6 py-4">
          <a
            href="#/"
            className="inline-flex items-center gap-2 text-nerd-muted hover:text-nerd-dark transition-colors font-sans"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
        </div>
      </div>

      {/* Hero Section with Headline and Video */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl text-nerd-dark mb-6 leading-tight">
              Let's Grow Your Business <span className="italic">Together</span>
            </h1>
            <p className="text-lg md:text-xl text-nerd-muted mb-10 font-sans">
              Watch this quick video to learn how we can help you package, promote, and profit from your expertise.
            </p>

            {/* Video Placeholder */}
            <div className="aspect-video bg-nerd-light border border-nerd-border mb-8 flex items-center justify-center">
              <div className="text-center text-nerd-muted">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm font-mono">Your video will go here</p>
                <p className="text-xs mt-1 font-sans">Replace this placeholder with your recorded video embed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16 bg-nerd-light">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl text-nerd-dark mb-4">
              Schedule Your Growth Call
            </h2>
            <p className="text-nerd-muted font-sans mb-8">
              Pick a time that works for you and let's discuss how we can help scale your business.
            </p>

            {/* Calendar Embed */}
            <div className="bg-white border border-nerd-border overflow-hidden">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/dS1DJnaUlk24OdZi3Pta"
                style={{ width: '100%', border: 'none', overflow: 'hidden' }}
                className="h-[1000px] md:h-[900px]"
                title="Schedule a Growth Call"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-nerd-border">
        <div className="container mx-auto px-6 text-center text-sm text-nerd-muted font-mono">
          <p>Copyright © NerdDigital {new Date().getFullYear()}. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default GrowthCall;
