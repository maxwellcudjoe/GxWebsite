import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat: React.FC = () => {
  const whatsappNumber = "233247439400";
  const message = encodeURIComponent("Hello! I'm interested in GxLMS for my institution.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
      <span className="absolute right-full mr-4 bg-white text-slate-800 px-3 py-1 rounded shadow-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap hidden md:block">
        Chat with Sales
      </span>
    </a>
  );
};

export default WhatsAppFloat;