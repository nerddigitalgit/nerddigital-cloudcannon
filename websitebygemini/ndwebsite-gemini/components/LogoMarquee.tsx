import React from 'react';

const BRAND_LOGOS = [
  { name: 'Bankless', src: '/images/logos/Bankless.png', className: '' },
  { name: 'Boba Guys', src: '/images/logos/BobaGuys.png', className: '' },
  { name: 'Fanexpo', src: '/images/logos/Fanexpo.png', className: '' },
  { name: 'Immi', src: '/images/logos/Immi.png', className: '' },
  { name: 'Kettle & Fire', src: '/images/logos/kettleandfirelogo.png', className: 'scale-75' },
  { name: 'Remedy', src: '/images/logos/Remedy.png', className: '' },
  { name: 'The Tenspot', src: '/images/logos/TheTenspot.png', className: '' },
];

const LogoMarquee: React.FC = () => {
  // Duplicate logos for seamless infinite scroll
  const scrollItems = [...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <div className="w-full py-8 bg-white overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-6 mb-6 text-center">
        <p className="font-mono uppercase tracking-widest text-nerd-muted" style={{ fontSize: '0.6rem' }}>
          Brands Served
        </p>
      </div>

      <div className="container mx-auto px-6 flex justify-center">
        <div className="relative w-full max-w-5xl overflow-hidden">
          {/* Gradient fade on edges - reduced from w-24 to w-[86px] (10% less coverage) */}
          <div className="absolute top-0 left-0 w-[86px] h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-[86px] h-full bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Scrolling logos - reversed direction */}
          <div className="flex gap-16 animate-logo-scroll-reverse">
            {scrollItems.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-24 px-4"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className={`h-16 md:h-20 w-auto object-contain logo-dark ${logo.className}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
