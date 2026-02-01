import React, { useState } from 'react';
import ExpertMarquee from './ExpertMarquee';

const CASE_STUDY_VIDEOS = [
  {
    title: "6.9x ROI, 75.6% decrease in cost per leads, 4 months.",
    name: "Joel Koncinsky",
    role: "Agency Services",
    loomId: "e446b8ee0def409eaece9e88299ce7e4"
  },
  {
    title: "$0-$100K in sales 9 weeks",
    name: "Ted Seides",
    role: "Coach/Creator",
    loomId: "18e04cbea11249ec863c55423cac7c32"
  },
  {
    title: "From 5 to 6-Figures in Sales",
    name: "Khe Hy",
    role: "Coach & Creator",
    loomId: "cc607b42279b4ecc91b084d23d1980bb"
  },
  {
    title: "From $40k to $80k in Monthly Recurring Revenue",
    name: "Robbie Crabtree",
    role: "Coach/Investor",
    loomId: "49e0d6b3d4ff4ab08c733d2302b0b553"
  }
];

const VIDEO_TESTIMONIALS = [
  {
    quote: "Now I'm making daily sales from my YouTube audience",
    name: "Shu Omi",
    role: "Creator of Youtube Kickstarter",
    vimeoId: "1069643923"
  },
  {
    quote: "His coaching made me laser-focused on my audience—and my business grew",
    name: "Özlem Özkan",
    role: "Creator of Dare to Ask",
    vimeoId: "1069643940"
  },
  {
    quote: "The go-to guy for messaging, funnels, and Facebook ads",
    name: "Anja Hertkorn",
    role: "Founder of Energy Therapy",
    vimeoId: "1069643965"
  },
  {
    quote: "We launched faster and smarter with Marcio's guidance",
    name: "Hank Strmac",
    role: "Chief of Staff of Capital Allocators",
    vimeoId: "1069643984"
  },
  {
    quote: "Real answers, real results",
    name: "Livia Pellerin",
    role: "Founder of Mobility Junkie",
    vimeoId: "1069644713"
  },
  {
    quote: "He gave me the ideas and strategy I needed to scale my business.",
    name: "Kim L.",
    role: "Entrepreneur",
    vimeoId: "1113343255"
  },
  {
    quote: "He made the process simple and helped me create a brilliant offer.",
    name: "Faris Sheikh",
    role: "Consulting for Shortform Video",
    vimeoId: "1113334124"
  }
];

const FAQ_ITEMS = [
  {
    question: "Will you try to sell me something?",
    answer: "Maybe. If we think we can help and you ask, we'll share how we work. But the call isn't a pitch — it's genuinely about giving you clarity on how to grow."
  },
  {
    question: "What if my marketing is a complete mess?",
    answer: "Good. That's what we're here for. Sometimes a mess just needs to be simplified, not rebuilt. We'll help you see what to keep and what to cut."
  },
  {
    question: "Will you give me a magic solution?",
    answer: "No magic, just proven frameworks. We'll give you honest feedback about what's likely to work based on what we've seen with 30+ clients."
  },
  {
    question: "What if I've tried everything and nothing works?",
    answer: "Perfect. That means you have data about what doesn't work, which is valuable. We can help you see patterns you might have missed."
  },
  {
    question: "How quickly will I see results if I follow your advice?",
    answer: "Depends on what we recommend. Some things can improve quickly, others take time. We'll be honest about realistic timelines."
  },
  {
    question: "What exactly do I get on the call?",
    answer: "Fresh eyes on your marketing, honest feedback about what's working and what isn't, a simple recommendation for moving forward, and access to our private community."
  },
  {
    question: "Do I need to prepare anything for the call?",
    answer: "Just be ready to share what marketing you're currently doing - your ads, landing pages, email sequences, whatever you've been trying. The more we can see, the better feedback we can give."
  },
  {
    question: "What if I'm not making $250k+ yet?",
    answer: "The call works best when we have real numbers to look at. If you're under $250k but have consistent revenue and marketing data, we will still be able to help. Our private community might be a better starting point."
  }
];

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-nerd-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-lg font-semibold text-nerd-dark font-sans pr-4">{question}</span>
        <span className="text-nerd-muted text-xl flex-shrink-0">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="text-nerd-muted font-sans leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

// Grid texture pattern
const gridTexture = `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23000000' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`;
const gridTextureLight = `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23FFFFFF' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`;

// Logo list for mini marquee - same as homepage LogoMarquee
const TRUST_LOGOS = [
  { src: '/images/logos/Bankless.png', alt: 'Bankless' },
  { src: '/images/logos/BobaGuys.png', alt: 'Boba Guys' },
  { src: '/images/logos/Fanexpo.png', alt: 'FanExpo' },
  { src: '/images/logos/Immi.png', alt: 'Immi' },
  { src: '/images/logos/kettleandfirelogo.png', alt: 'Kettle & Fire' },
  { src: '/images/logos/Remedy.png', alt: 'Remedy' },
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-nerd-light">
      {/* Header */}
      <div className="bg-white border-b border-nerd-border">
        <div className="container mx-auto px-6 py-4">
          <a href="#/">
            <img src="/images/nerddigital-logo-250.png" alt="NerdDigital" className="h-5" />
          </a>
        </div>
      </div>

      {/* Hero Section - Light */}
      <section className="relative pt-16 pb-8 md:pt-20 md:pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-nerd-light"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-[2.28rem] md:text-[3.42rem] text-nerd-dark mb-6 leading-[1.15] font-sans font-semibold">
              Grow Your Education Business Working <span className="font-serif italic font-semibold">4 Hours a Month</span> Without Posting Daily
            </h1>

            <p className="max-w-2xl mx-auto text-base md:text-lg text-nerd-muted mb-8 leading-relaxed font-sans">
              Get a free strategy review — and a clear path to more clients.
            </p>

            <button
              onClick={() => document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary px-8 py-4 inline-flex items-center justify-center mb-10"
              style={{ fontSize: '0.6rem' }}
            >
              GET STARTED
            </button>

            <div className="max-w-2xl mx-auto aspect-video rounded-lg overflow-hidden border border-nerd-border">
              <iframe
                src="https://player.vimeo.com/video/1112535405?autoplay=0&muted=1&loop=1&controls=1&byline=0&title=0&portrait=0"
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                title="About NerdDigital"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Marquee */}
      <ExpertMarquee />

      {/* Results Stats Section - Superside style */}
      <section className="py-16 md:py-24 bg-nerd-dark relative">
        <div className="absolute inset-0" style={{ backgroundImage: gridTextureLight }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-sans">Proven Results</p>
                <h2 className="text-3xl md:text-4xl text-white font-sans font-semibold">
                  Marketing that <span className="font-serif italic">actually works</span>
                </h2>
              </div>
              <p className="text-gray-400 font-sans text-sm leading-relaxed max-w-sm">
                Real results from real clients. Proven systems that turn expertise into revenue.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 md:gap-8">
              {/* Stat 1 */}
              <div className="flex items-center gap-6">
                <p className="text-gray-400 font-sans text-sm leading-relaxed max-w-[140px] border-b border-gray-700 pb-4">
                  Lower cost per lead on average.
                </p>
                <p className="text-5xl md:text-6xl text-white font-serif">75%</p>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-6">
                <p className="text-gray-400 font-sans text-sm leading-relaxed max-w-[140px] border-b border-gray-700 pb-4">
                  More leads generated with the same budget.
                </p>
                <p className="text-5xl md:text-6xl text-white font-serif">2x</p>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-6">
                <p className="text-gray-400 font-sans text-sm leading-relaxed max-w-[140px] border-b border-gray-700 pb-4">
                  Experts helped build profitable marketing systems.
                </p>
                <p className="text-5xl md:text-6xl text-white font-serif">30+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 md:py-24 bg-nerd-dark relative">
        <div className="absolute inset-0" style={{ backgroundImage: gridTextureLight }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl text-white mb-12 font-sans font-semibold">
              Without the stuff <span className="font-serif italic font-semibold">you hate:</span>
            </h2>

            <div className="space-y-6 text-left max-w-xl mx-auto">
              {[
                "Spending thousands on ads that lose money",
                "Struggling to get in front of the right people",
                "Depending on referrals and luck for new customers",
                "Creating content that doesn't get results",
                "Constantly rethinking your strategy"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-nerd-pink text-xl mt-0.5">—</span>
                  <p className="text-lg md:text-xl text-gray-300 font-sans">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-xl text-white text-center font-sans mt-12">
              If any of these sound familiar,{' '}
              <span className="font-serif italic">we can help.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Calendar Section - White, no texture */}
      <section id="calendar" className="py-16 bg-white relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl text-nerd-dark mb-2 font-sans font-semibold">
                Get <span className="font-serif italic font-semibold">Started</span>
              </h2>
              <p className="text-nerd-muted font-sans">
                Click on a date to book your free assessment call:
              </p>
            </div>

            {/* Calendar Embed */}
            <div className="bg-nerd-light border border-nerd-border overflow-hidden rounded-lg">
              <iframe
                src="https://bookme.name/embed/widget/4230/o95jvQ0Atoyv4cB17uATURsXsGByPNMQu3bgvEbCMtj9tGwltWAfXMBgjnWr"
                style={{ width: '100%', border: 'none', overflow: 'hidden' }}
                className="h-[650px]"
                title="Book Your Free Call"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client Results & Video Testimonials - Combined, stacked vertically */}
      <section className="py-16 bg-nerd-dark relative">
        <div className="absolute inset-0" style={{ backgroundImage: gridTextureLight }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-white mb-12 text-center font-sans font-semibold">
              Client <span className="font-serif italic font-semibold">Results</span>
            </h2>

            {/* Case Study Videos - Stacked */}
            <div className="space-y-16">
              {CASE_STUDY_VIDEOS.map((video, i) => (
                <React.Fragment key={i}>
                  <div className="bg-white rounded-lg overflow-hidden">
                    <div className="p-6 pb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-nerd-dark">
                        {video.title}
                      </h3>
                      <p className="text-nerd-muted font-sans mt-1">{video.name}, {video.role}</p>
                    </div>
                    <div className="aspect-video">
                      <iframe
                        src={`https://www.loom.com/embed/${video.loomId}`}
                        className="w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                        title={`${video.name} Case Study`}
                      ></iframe>
                    </div>
                  </div>
                  {(i + 1) % 3 === 0 && (
                    <div className="text-center py-8">
                      <button
                        onClick={() => document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' })}
                        className="btn-primary-light px-8 py-4 inline-flex items-center justify-center"
                        style={{ fontSize: '0.9375rem' }}
                      >
                        GET STARTED
                      </button>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Video Testimonials - Stacked */}
            <h3 className="text-2xl md:text-3xl text-white mb-12 mt-20 text-center font-sans font-semibold">
              What clients <span className="font-serif italic font-semibold">say:</span>
            </h3>

            <div className="space-y-16">
              {VIDEO_TESTIMONIALS.map((testimonial, i) => (
                <React.Fragment key={i}>
                  <div className="bg-white rounded-lg overflow-hidden">
                    <div className="p-4 md:p-6">
                      <h4 className="text-lg md:text-xl font-semibold text-nerd-dark">
                        "{testimonial.quote}"
                      </h4>
                      <p className="text-nerd-muted font-sans text-sm mt-1">{testimonial.name}, {testimonial.role}</p>
                    </div>
                    <div className="aspect-video">
                      <iframe
                        src={`https://player.vimeo.com/video/${testimonial.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                        title={`${testimonial.name} Testimonial`}
                      ></iframe>
                    </div>
                  </div>
                  {(i + 1) % 3 === 0 && (
                    <div className="text-center py-8">
                      <button
                        onClick={() => document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' })}
                        className="btn-primary-light px-8 py-4 inline-flex items-center justify-center"
                        style={{ fontSize: '0.9375rem' }}
                      >
                        GET STARTED
                      </button>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="text-center text-gray-400 font-sans mt-8 text-sm">
              <strong>DISCLAIMER:</strong> I have to admit these results aren't typical. We've been doing online marketing for 10+ years, our business has been running for 8+ years, and we've worked on multiple scalable offers.
            </p>
          </div>
        </div>
      </section>

      {/* Who I Am Section - White with grid */}
      <section className="py-16 bg-white relative">
        <div className="absolute inset-0" style={{ backgroundImage: gridTexture }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-nerd-dark mb-10 text-center font-sans font-semibold">
              Who I Am and Why <span className="font-serif italic font-semibold">You Can Trust Me:</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="text-lg text-nerd-dark font-sans mb-6">
                  I'm Marcio, founder of Nerd Digital.
                </p>
                <p className="text-nerd-dark font-sans mb-6">
                  I've been in the trenches of online marketing since 2016, and I've seen every mistake you can make (because I've made most of them myself).
                </p>
                <p className="text-nerd-dark font-sans mb-4">Here's what makes me different:</p>

                <p className="text-nerd-dark font-sans mb-4">
                  <strong>I focus on what actually works.</strong> While other agencies chase the latest "hack," I've spent 8+ years perfecting systems that consistently turns your expertise into a profitable business.
                </p>
                <p className="text-nerd-dark font-sans mb-4">
                  <strong>I've been where you are.</strong> I know what it's like to spend your last $500 on ads that flop. I know the frustration of having a great product but terrible marketing. That's why I only recommend strategies I'd bet my own money on.
                </p>
                <p className="text-nerd-dark font-sans mb-4">
                  <strong>My results speak for themselves.</strong> I've helped 30+ entrepreneurs build profitable marketing systems. From $10 courses to $10,000 coaching programs.
                </p>
                <p className="text-nerd-dark font-sans mb-4">
                  <strong>I keep it simple.</strong> Marketing doesn't have to be complicated. Some of my biggest wins have come from changing a single headline or tweaking one element in a funnel.
                </p>
                <p className="text-nerd-dark font-sans">
                  <strong>The bottom line:</strong> I've spent years figuring out what works so you don't have to waste years (and money) figuring it out yourself.
                </p>
              </div>

              <div>
                <div className="bg-white border border-nerd-border p-4 mb-4 rounded-lg">
                  <img
                    src="/images/marcio-profile.jpg"
                    alt="Marcio"
                    className="w-full aspect-square object-cover rounded"
                  />
                </div>
                {/* Client logos */}
                <div>
                  <p className="text-xs text-nerd-muted mb-3 text-center uppercase tracking-wider">Trusted by</p>
                  <div className="grid grid-cols-3 gap-2">
                    {TRUST_LOGOS.slice(0, 6).map((logo, i) => (
                      <div key={i} className="flex items-center justify-center p-2 bg-nerd-light border border-nerd-border rounded">
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="h-6 w-auto object-contain logo-dark"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - White */}
      <section className="py-16 bg-white relative">
        <div className="absolute inset-0" style={{ backgroundImage: gridTexture }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-nerd-dark mb-8 text-center font-sans font-semibold">
              Frequently Asked <span className="font-serif italic font-semibold">Questions</span>
            </h2>
            <div className="bg-white border border-nerd-border rounded-lg">
              {FAQ_ITEMS.map((item, i) => (
                <FAQItem key={i} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Dark */}
      <section className="py-16 bg-nerd-dark relative">
        <div className="absolute inset-0" style={{ backgroundImage: gridTextureLight }}></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl text-white mb-4 font-sans">
            <span className="font-semibold">Get help to grow your business today</span> <span className="font-serif italic">like the 30+ experts we've helped build profitable marketing systems</span>
          </h2>
          <button
            onClick={() => document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary-light px-8 py-4 inline-flex items-center justify-center mt-6"
            style={{ fontSize: '0.9375rem' }}
          >
            GET STARTED
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-nerd-dark border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <img src="/images/nerd-digital-logo-white.png" alt="NerdDigital" className="h-4 mx-auto mb-4 opacity-80" />
          <p className="text-sm text-gray-400 font-sans mb-4 max-w-2xl mx-auto">
            Marcio and Nerd Digital's results are not typical and are not a guarantee of success. We cannot guarantee that you will make money or that you will be successful if you employ their business strategies specifically or generally. Consequently, your results may significantly vary from theirs.
          </p>
          <p className="text-sm text-gray-500 font-sans">
            © Copyright {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
