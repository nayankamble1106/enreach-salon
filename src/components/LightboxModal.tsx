import React, { useState, useEffect, useCallback } from 'react';
import { getAssetUrl } from '../utils';

interface LightboxModalProps {
  currentIndex: number | null;
  images: string[];
  onClose: () => void;
  onSelectIndex: (index: number) => void;
  onBookService?: (serviceName: string) => void;
}

const TOTAL_CARDS = 9;

const CARD_NAMES = [
  'Main Salon Menu',
  'Hair Cutting & Precision Styling',
  'Luxury Hair Spa & Detox Therapy',
  'Hair Color, Highlights & Balayage',
  'Skin Rituals & Hydra Facials',
  'Beard Sculpting & Men\'s Spa',
  'Hands & Feet Care / Nails',
  'Detan, Waxing & Body Glow',
  'Bridal & Occasion Packages',
];

export const LightboxModal: React.FC<LightboxModalProps> = ({
  currentIndex,
  images,
  onClose,
  onSelectIndex,
  onBookService,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // Reset zoom when card changes
  useEffect(() => {
    setZoomLevel(1);
  }, [currentIndex]);

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const newIdx = currentIndex === 0 ? TOTAL_CARDS - 1 : currentIndex - 1;
    onSelectIndex(newIdx);
  }, [currentIndex, onSelectIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const newIdx = currentIndex === TOTAL_CARDS - 1 ? 0 : currentIndex + 1;
    onSelectIndex(newIdx);
  }, [currentIndex, onSelectIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onClose, handlePrev, handleNext]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [currentIndex]);

  if (currentIndex === null) return null;

  const currentSlotNumber = currentIndex + 1;
  const rawImageSrc = images[currentIndex] || `image${currentSlotNumber}.jpg`;
  const imageSrc = getAssetUrl(rawImageSrc);
  const cardTitle = CARD_NAMES[currentIndex] || `Menu Card ${currentSlotNumber}`;

  const toggleZoom = () => {
    setZoomLevel((prev) => (prev === 1 ? 2 : prev === 2 ? 2.8 : 1));
  };

  return (
    <div
      id="lightbox-modal"
      className="fixed inset-0 z-50 bg-[#0D0D0D]/98 backdrop-blur-md flex flex-col justify-between select-none animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Controls Bar */}
      <div
        className="w-full px-4 py-3 bg-[#181818]/95 border-b border-white/10 flex items-center justify-between z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left: Counter and Title */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#F0EAE1] font-mono tracking-widest uppercase">
              CARD 0{currentSlotNumber} / 0{TOTAL_CARDS}
            </span>
            <span className="text-zinc-600 text-xs">•</span>
            <span className="text-xs text-[#F5F5F7] font-medium truncate max-w-[180px] sm:max-w-xs">
              {cardTitle}
            </span>
          </div>
        </div>

        {/* Right: Zoom Controls and Close */}
        <div className="flex items-center gap-2">
          {/* Zoom In/Out Toggle */}
          <button
            id="lightbox-zoom-btn"
            type="button"
            title="Toggle Zoom"
            onClick={toggleZoom}
            className="px-2.5 py-1.5 rounded-lg border border-white/20 bg-[#222222] text-[#F5F5F7] text-xs font-semibold flex items-center gap-1.5 hover:border-[#F0EAE1]/50 active:scale-95 transition-all"
          >
            <i className={`fa-solid ${zoomLevel > 1 ? 'fa-magnifying-glass-minus' : 'fa-magnifying-glass-plus'} text-[#F0EAE1]`} />
            <span>{zoomLevel}x</span>
          </button>

          {/* Close button */}
          <button
            id="lightbox-close-btn"
            type="button"
            onClick={onClose}
            aria-label="Close Lightbox"
            className="w-9 h-9 rounded-lg bg-[#222222] border border-white/20 text-[#F5F5F7] hover:bg-[#2e2e2e] hover:border-white/40 flex items-center justify-center active:scale-95 transition-all"
          >
            <i className="fa-solid fa-xmark text-lg" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative flex-1 w-full overflow-auto flex items-center justify-center p-2 sm:p-4 touch-pan-x touch-pan-y"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <div
          className="relative max-w-full max-h-full flex items-center justify-center transition-transform duration-200 ease-out"
          style={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: 'center center',
          }}
          onClick={(e) => {
            e.stopPropagation();
            toggleZoom();
          }}
        >
          <img
            id="lightbox-active-image"
            src={imageSrc}
            alt={cardTitle}
            referrerPolicy="no-referrer"
            className="max-w-[92vw] max-h-[78vh] object-contain rounded-xl shadow-2xl border border-white/15 cursor-zoom-in bg-[#141414]"
          />
        </div>

        {/* Previous Button */}
        <button
          id="lightbox-prev-btn"
          type="button"
          aria-label="Previous Menu Card"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#181818]/90 border border-white/20 text-[#F5F5F7] flex items-center justify-center hover:bg-white hover:text-[#0D0D0D] active:scale-95 transition-all shadow-xl z-20"
        >
          <i className="fa-solid fa-chevron-left text-base" />
        </button>

        {/* Next Button */}
        <button
          id="lightbox-next-btn"
          type="button"
          aria-label="Next Menu Card"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#181818]/90 border border-white/20 text-[#F5F5F7] flex items-center justify-center hover:bg-white hover:text-[#0D0D0D] active:scale-95 transition-all shadow-xl z-20"
        >
          <i className="fa-solid fa-chevron-right text-base" />
        </button>
      </div>

      {/* Bottom Bar: Quick Booking & Indicator Dots */}
      <div
        className="w-full px-4 py-3 bg-[#181818]/95 border-t border-white/10 flex items-center justify-between gap-3 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Navigation Indicator Dots */}
        <div className="hidden sm:flex items-center gap-1.5 overflow-x-auto py-1">
          {Array.from({ length: TOTAL_CARDS }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Jump to Card ${i + 1}`}
              onClick={() => onSelectIndex(i)}
              className={`h-2 rounded-full transition-all duration-200 ${
                i === currentIndex
                  ? 'w-6 bg-[#F0EAE1]'
                  : 'w-2 bg-zinc-700 hover:bg-zinc-500'
              }`}
            />
          ))}
        </div>

        <div className="text-xs text-zinc-400 sm:hidden">
          Tap image to zoom ({zoomLevel}x)
        </div>

        {/* Quick Book CTA from Lightbox */}
        <button
          id="lightbox-book-service-btn"
          type="button"
          onClick={() => {
            onClose();
            if (onBookService) {
              onBookService(cardTitle);
            }
          }}
          className="px-4 py-2 rounded-xl bg-[#F0EAE1] hover:bg-white text-[#0D0D0D] font-bold text-xs uppercase tracking-wider flex items-center gap-2 active:scale-95 transition-all shadow-md ml-auto"
        >
          <i className="fa-solid fa-calendar-check" />
          <span>Book This Service</span>
        </button>
      </div>
    </div>
  );
};
