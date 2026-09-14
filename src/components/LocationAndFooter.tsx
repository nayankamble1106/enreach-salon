import React from 'react';
import { getAssetUrl } from '../utils';

export const LocationAndFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const MAPS_EMBED_URL =
    'https://maps.google.com/maps?q=Jatpura+Gate,+Near+Gulwade+Hospital,+Bazar+Ward,+Chandrapur,+Maharashtra&t=&z=16&ie=UTF8&iwloc=&output=embed';
  const MAPS_DIRECTIONS_URL =
    'https://maps.google.com/?q=Jatpura+Gate,+Near+Gulwade+Hospital,+Bazar+Ward,+Chandrapur,+Maharashtra';

  return (
    <div className="w-full">
      {/* 
        Embedded Google Maps iframe container for Jatpura Gate, Chandrapur
      */}
      <section
        id="location-section"
        className="w-full px-4 py-6 sm:px-6 max-w-4xl mx-auto"
      >
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 text-xs font-luxury font-semibold uppercase tracking-widest text-[#F0EAE1]">
            <i className="fa-solid fa-location-dot text-[#F0EAE1]" />
            <span>Salon Location • Chandrapur</span>
          </div>
        </div>

        {/* Map Container in Dark Charcoal Black with subtle Pearl White border */}
        <div
          id="google-maps-container"
          className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#181818] shadow-[0_10px_30px_rgba(0,0,0,0.8)] group"
        >
          {/* Responsive aspect ratio container */}
          <div className="relative w-full h-[280px] sm:h-[340px]">
            <iframe
              id="salon-google-maps-iframe"
              title="Enreach Unisex Salon Jatpura Gate Chandrapur Map"
              src={MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter invert-[90%] hue-rotate-180 contrast-[105%] opacity-90 transition-opacity hover:opacity-100"
            />
          </div>

          {/* Location Info & Get Directions CTA */}
          <div className="p-3.5 bg-[#141414] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-start gap-2.5 text-zinc-300">
              <i className="fa-solid fa-location-dot text-[#F0EAE1] mt-0.5" />
              <span className="font-medium text-[#F5F5F7] leading-relaxed">
                Jatpura Gate, Near Gulwade Hospital, Bazar Ward, Chandrapur, Maharashtra
              </span>
            </div>
            <a
              id="btn-get-directions"
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-4 py-2 rounded-lg border border-white/20 bg-[#181818] text-[#F5F5F7] font-semibold text-xs tracking-wider uppercase flex items-center gap-1.5 hover:bg-[#262626] hover:border-[#F0EAE1]/50 transition-colors"
            >
              <i className="fa-solid fa-diamond-turn-right text-xs text-[#F0EAE1]" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </section>

      {/* 
        Pure Deep Matte Black Footer (#0D0D0D)
        Salon Address, Phone Number, WhatsApp, Instagram & Facebook social links.
      */}
      <footer
        id="salon-footer"
        className="w-full bg-[#0D0D0D] border-t border-white/10 pt-10 pb-8 px-4 sm:px-6"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Footer Logo & Brand Display */}
          <div className="flex flex-col items-center mb-1">
            {/* Footer Logo */}
            <img
              src={getAssetUrl('logo.png')}
              alt="Enreach Unisex Salon"
              className="h-16 w-auto object-contain mx-auto mb-3"
            />

            {/* Salon Name in Pearl White/Cream font */}
            <h3 className="font-luxury text-lg sm:text-xl font-bold tracking-widest text-[#F5F5F7] uppercase mb-1">
              Enreach Unisex Salon
            </h3>
          </div>
          <p className="text-xs text-[#F0EAE1]/80 tracking-widest uppercase mb-6 font-medium">
            Hair Care • Chemical &amp; Color • Facial &amp; Bridal Packages
          </p>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl w-full mb-8 text-left">
            {/* Salon Address */}
            <div
              id="footer-address"
              className="p-3.5 rounded-xl bg-[#181818] border border-white/10 flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-[#141414] border border-white/15 flex items-center justify-center text-[#F0EAE1] flex-shrink-0 mt-0.5">
                <i className="fa-solid fa-location-dot text-sm" />
              </div>
              <div className="text-xs">
                <span className="block text-[#F0EAE1] font-semibold uppercase tracking-wider text-[11px] mb-0.5">
                  Salon Address
                </span>
                <p className="text-zinc-300 leading-relaxed">
                  Jatpura Gate, Near Gulwade Hospital, Bazar Ward, Chandrapur, Maharashtra
                </p>
              </div>
            </div>

            {/* Phone & Direct WhatsApp */}
            <div
              id="footer-phone"
              className="p-3.5 rounded-xl bg-[#181818] border border-white/10 flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-[#141414] border border-white/15 flex items-center justify-center text-[#F0EAE1] flex-shrink-0 mt-0.5">
                <i className="fa-solid fa-phone text-sm" />
              </div>
              <div className="text-xs">
                <span className="block text-[#F0EAE1] font-semibold uppercase tracking-wider text-[11px] mb-0.5">
                  Direct Phone &amp; WhatsApp
                </span>
                <a
                  href="tel:+917020678366"
                  className="text-[#F5F5F7] hover:text-[#F0EAE1] font-medium transition-colors block"
                >
                  +91 7020678366
                </a>
                <a
                  href="https://wa.me/917020678366"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors block mt-0.5"
                >
                  <i className="fa-brands fa-whatsapp mr-1" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Social Links (Instagram / Facebook / WhatsApp Direct / Call) */}
          <div className="mb-8">
            <div className="text-[11px] uppercase tracking-widest text-[#F0EAE1]/80 font-semibold mb-3">
              Connect With Enreach Salon
            </div>
            <div id="footer-social-links" className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
              {/* Instagram */}
              <a
                id="social-instagram"
                href="https://www.instagram.com/en_reachh_unisex_saloon?stkn=bDFwMmczOWJ1MW1h"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enreach Unisex Salon Instagram"
                className="w-11 h-11 rounded-xl bg-[#181818] border border-white/15 hover:border-white/30 text-[#F5F5F7] hover:text-[#F0EAE1] flex items-center justify-center text-lg shadow-sm transition-all duration-200"
              >
                <i className="fa-brands fa-instagram" />
              </a>

              {/* Facebook */}
              <a
                id="social-facebook"
                href="https://www.facebook.com/share/1DubYNnYqE/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enreach Unisex Salon Facebook"
                className="w-11 h-11 rounded-xl bg-[#181818] border border-white/15 hover:border-white/30 text-[#F5F5F7] hover:text-[#F0EAE1] flex items-center justify-center text-lg shadow-sm transition-all duration-200"
              >
                <i className="fa-brands fa-facebook-f" />
              </a>

              {/* WhatsApp */}
              <a
                id="social-whatsapp"
                href="https://wa.me/917020678366"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enreach Unisex Salon WhatsApp"
                className="w-11 h-11 rounded-xl bg-[#181818] border border-emerald-500/30 hover:border-emerald-500 text-emerald-400 hover:text-emerald-300 flex items-center justify-center text-lg shadow-sm transition-all duration-200"
              >
                <i className="fa-brands fa-whatsapp" />
              </a>

              {/* Phone Call */}
              <a
                id="social-phone"
                href="tel:+917020678366"
                aria-label="Call Enreach Unisex Salon"
                className="w-11 h-11 rounded-xl bg-[#181818] border border-white/15 hover:border-white/30 text-[#F5F5F7] hover:text-[#F0EAE1] flex items-center justify-center text-base shadow-sm transition-all duration-200"
              >
                <i className="fa-solid fa-phone" />
              </a>
            </div>
          </div>

          {/* Minimal Copyright Divider */}
          <div className="w-full pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 gap-2">
            <span>© {currentYear} Enreach Unisex Salon, Chandrapur. All rights reserved.</span>
            <span className="text-zinc-400">Pure Matte Luxury • Direct Concierge</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
