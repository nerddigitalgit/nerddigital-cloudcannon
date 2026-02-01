import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Mail } from 'lucide-react';

const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/Y1JdoPKbrd3IjmRfSXfY/webhook-trigger/560d0d57-3ae8-4c4d-8519-64a1888ee5d1';

interface GeoData {
  ip: string;
  city: string;
  region: string;
  postal: string;
  country_name: string;
}

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadMagnetModal: React.FC<LeadMagnetModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [geoData, setGeoData] = useState<GeoData | null>(null);

  // Fetch geolocation data on mount
  useEffect(() => {
    const fetchGeoData = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        setGeoData({
          ip: data.ip || '',
          city: data.city || '',
          region: data.region || '',
          postal: data.postal || '',
          country_name: data.country_name || ''
        });
      } catch (error) {
        console.error('Failed to fetch geo data:', error);
      }
    };
    fetchGeoData();
  }, []);

  // Get UTM source from URL
  const getUtmSource = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('utm_source') || '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);

    const payload = {
      email,
      utm_source: getUtmSource(),
      ip: geoData?.ip || '',
      city: geoData?.city || '',
      state: geoData?.region || '',
      zipcode: geoData?.postal || '',
      country: geoData?.country_name || ''
    };

    try {
      // Use URLSearchParams for no-cors compatibility
      const formData = new URLSearchParams();
      Object.entries(payload).forEach(([key, value]) => {
        formData.append(key, value);
      });

      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
        mode: 'no-cors'
      });

      console.log('Lead submitted:', payload);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Failed to submit lead:', error);
      // Still show success to user - webhook likely received it
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white max-w-lg w-full p-8 md:p-10 shadow-2xl" style={{ borderRadius: '4px' }}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-nerd-muted hover:text-nerd-dark transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="text-center">
          <p className="font-mono text-xs tracking-widest text-nerd-muted uppercase mb-3">
            Free 5-Day Email Course
          </p>

          <h2 className="text-3xl md:text-4xl text-nerd-dark mb-3 leading-tight">
            The Conversion Code
          </h2>

          <p className="text-lg md:text-xl text-nerd-dark font-medium mb-6">
            5 days to convert more leads into{' '}
            <span className="whitespace-nowrap">high-paying clients</span>
          </p>

          {!isSubmitted ? (
            <>
              <form onSubmit={handleSubmit} className="mb-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-nerd-muted" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full pl-12 pr-4 py-3 bg-white border-2 border-nerd-dark text-nerd-dark placeholder:text-nerd-muted/60 focus:outline-none focus:border-nerd-pink font-sans text-base"
                      style={{ borderRadius: '2px' }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary px-6 py-3 flex items-center justify-center gap-2 group whitespace-nowrap disabled:opacity-70"
                    style={{ fontSize: '0.6rem' }}
                  >
                    {isSubmitting ? 'Sending...' : 'Get the Course'}
                    {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                  </button>
                </div>
              </form>

              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-nerd-muted">
                <span>5 proven frameworks</span>
                <span>One email per day</span>
                <span>100% free</span>
              </div>
            </>
          ) : (
            <div className="bg-nerd-light border border-nerd-green p-6" style={{ borderRadius: '2px' }}>
              <div className="flex items-center justify-center gap-2 text-nerd-green mb-2">
                <span className="w-3 h-3 bg-nerd-green rounded-full"></span>
                <span className="font-semibold font-sans">You're in!</span>
              </div>
              <p className="text-nerd-muted font-sans">
                Check your inbox for Day 1 of The Conversion Code.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadMagnetModal;
