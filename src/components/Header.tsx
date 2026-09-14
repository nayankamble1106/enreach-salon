import React, { useState } from 'react';
import { getAssetUrl } from '../utils';

interface HeaderProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onBookClick,
  onExploreClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        id="salon-header"
        className="sticky top-0 z-40 w-full bg-[#0D0D0D]/95 backdrop-blur-md border-b border-white/10 shadow-md px-4 py-3 sm:px-6 transition-all duration-300"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          {/* Left: Salon Brand with static public logo.png */}
          <div
            id="salon-brand"
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer select-none"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {/* Top Header Logo */}
            <img
              src={getAssetUrl('logo.png')}
              alt="Enreach Unisex Salon"
              className="h-10 w-auto object-contain"
            />

            {/* Typography "Enreach Unisex Salon" */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-luxury font-bold text-sm sm:text-base md:text-lg tracking-wider text-[#F5F5F7] uppercase whitespace-nowrap">
                  Enreach Unisex Salon
                </span>
                <span
                  id="salon-luxury-badge"
                  className="hidden sm:inline-flex items-center text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full border border-white/20 bg-white/5 text-[#F0EAE1]"
                >
                  LUXURY
                </span>
              </div>
              <span className="text-[10px] tracking-widest text-[#F0EAE1]/70 uppercase font-medium">
                CHANDRAPUR • HAIR • SKIN • GROOMING
              </span>
            </div>
          </div>

          {/* Right: 3-line hamburger menu icon ONLY (NO text navigation links) */}
          <button
            id="hamburger-menu-btn"
            type="button"
            aria-label="Open Salon Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-[#F5F5F7] border border-white/15 bg-[#181818] hover:bg-[#222222] hover:border-white/30 active:scale-95 transition-all shadow-sm"
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-lg`} />
          </button>
        </div>
      </header>

      {/* Slide-over Drawer for Hamburger Menu */}
      {isMenuOpen && (
        <div
          id="hamburger-overlay"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            id="hamburger-drawer"
            className="w-full max-w-xs bg-[#121212] border-l border-white/10 h-full p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2.5">
                  <img
                    src={getAssetUrl('logo.png')}
                    alt="Enreach Unisex Salon"
                    className="h-8 w-auto object-contain"
                  />
                  <div>
                    <div className="font-luxury text-sm font-bold text-[#F5F5F7] tracking-wide">
                      ENREACH
                    </div>
                    <div className="text-[10px] text-[#F0EAE1]/70 tracking-widest uppercase">
                      UNISEX SALON
                    </div>
                  </div>
                </div>
                <button
                  id="close-drawer-btn"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10"
                >
                  <i className="fa-solid fa-xmark text-lg" />
                </button>
              </div>

              {/* Quick Salon Action Cards */}
              <div className="space-y-3">
                <button
                  id="drawer-book-appointment"
                  onClick={() => {
                    setIsMenuOpen(false);
                    onBookClick();
                  }}
                  className="w-full flex items-center gap-3 p-3.5 rounded-xl bg-[#F0EAE1] hover:bg-white text-[#0D0D0D] font-luxury font-bold text-sm tracking-wide shadow-md active:scale-98 transition-all"
                >
                  <i className="fa-solid fa-calendar-check text-base text-[#0D0D0D]" />
                  <span>Book Appointment</span>
                </button>

                <button
                  id="drawer-explore-menu"
                  onClick={() => {
                    setIsMenuOpen(false);
                    onExploreClick();
                  }}
                  className="w-full flex items-center gap-3 p-3 rounded-xl bg-[#181818] border border-white/15 text-[#F5F5F7] text-sm font-medium hover:border-[#F0EAE1]/40 hover:bg-[#222222] transition-all"
                >
                  <i className="fa-solid fa-layer-group text-[#F0EAE1]" />
                  <span>View All 9 Menu Cards</span>
                </button>

                <a
                  id="drawer-whatsapp-chat"
                  href="https://wa.me/917020678366"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center gap-3 p-3 rounded-xl bg-[#181818] border border-emerald-500/30 text-emerald-400 text-sm font-medium hover:bg-emerald-950/20 transition-all"
                >
                  <i className="fa-brands fa-whatsapp text-lg text-emerald-400" />
                  <span>WhatsApp: +91 7020678366</span>
                </a>

                <a
                  id="drawer-phone-call"
                  href="tel:+917020678366"
                  className="w-full flex items-center gap-3 p-3 rounded-xl bg-[#181818] border border-white/10 text-zinc-200 text-sm font-medium hover:border-white/30 transition-all"
                >
                  <i className="fa-solid fa-phone text-[#F0EAE1]" />
                  <span>Call: +91 7020678366</span>
                </a>

                <a
                  id="drawer-instagram"
                  href="https://www.instagram.com/en_reachh_unisex_saloon?stkn=bDFwMmczOWJ1MW1h"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center gap-3 p-3 rounded-xl bg-[#181818] border border-white/10 text-zinc-200 text-sm font-medium hover:border-white/30 transition-all"
                >
                  <i className="fa-brands fa-instagram text-[#F0EAE1]" />
                  <span>Instagram</span>
                </a>

                <a
                  id="drawer-facebook"
                  href="https://www.facebook.com/share/1DubYNnYqE/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center gap-3 p-3 rounded-xl bg-[#181818] border border-white/10 text-zinc-200 text-sm font-medium hover:border-white/30 transition-all"
                >
                  <i className="fa-brands fa-facebook-f text-[#F0EAE1]" />
                  <span>Facebook</span>
                </a>

                <a
                  id="drawer-google-maps"
                  href="#location-section"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full flex items-center gap-3 p-3 rounded-xl bg-[#181818] border border-white/10 text-zinc-200 text-sm font-medium hover:border-white/30 transition-all"
                >
                  <i className="fa-solid fa-location-dot text-[#F0EAE1]" />
                  <span>Jatpura Gate, Chandrapur</span>
                </a>
              </div>
            </div>

            {/* Drawer Bottom Info */}
            <div className="pt-6 border-t border-white/10 text-xs text-zinc-400 space-y-2">
              <div className="flex items-center gap-2 text-[#F0EAE1]">
                <i className="fa-regular fa-clock" />
                <span className="text-[#F5F5F7] font-medium">Daily 10:00 AM – 9:00 PM</span>
              </div>
              <p className="text-[11px] leading-relaxed text-zinc-400">
                Jatpura Gate, Near Gulwade Hospital, Bazar Ward, Chandrapur, Maharashtra
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
