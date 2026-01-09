import React from 'react';
import { Mail, MessageCircle, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 md:grid md:grid-cols-2 md:gap-x-8 md:space-y-0 lg:max-w-none">
          
          {/* Contact Info */}
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Get in touch</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Have questions about GxLMS? Need a custom quote? Our team is ready to help you transform your micro-credit operations.
            </p>
            <dl className="mt-8 space-y-8 text-base leading-7 text-slate-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <Mail className="h-7 w-6 text-slate-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-brand-600" href="mailto:cudjoemaxwell@gmail.com">
                    cudjoemaxwell@gmail.com
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">WhatsApp</span>
                  <MessageCircle className="h-7 w-6 text-slate-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-brand-600" href="https://wa.me/233247439400">
                    0247439400
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <MapPin className="h-7 w-6 text-slate-400" aria-hidden="true" />
                </dt>
                <dd>
                  Accra, Ghana
                </dd>
              </div>
            </dl>
          </div>

          {/* Form */}
          <div className="flex flex-col justify-center">
             <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Send us a message</h3>
                <form className="space-y-4">
                   <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                      <input type="text" id="name" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 border p-2" />
                   </div>
                   <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                      <input type="email" id="email" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 border p-2" />
                   </div>
                   <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                      <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 border p-2"></textarea>
                   </div>
                   <button type="submit" className="w-full bg-brand-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-brand-500 transition-colors shadow-sm">
                      Send Message
                   </button>
                </form>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;