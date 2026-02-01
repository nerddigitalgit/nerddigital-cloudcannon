import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendarModal: React.FC<CalendarModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900">Schedule Your Call</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-slate-600" />
          </button>
        </div>

        {/* Calendar iframe */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-88px)]">
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/dS1DJnaUlk24OdZi3Pta"
            style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }}
            scrolling="no"
            id="dS1DJnaUlk24OdZi3Pta_1767639265337"
          ></iframe>
          <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;
