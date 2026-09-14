import React from 'react';
import { ImageSlot } from './ImageSlot';

interface MenuGalleryProps {
  isOpen: boolean;
  images: string[];
  onImageClick: (index: number) => void;
}

const GALLERY_SLOTS = [
  { slotNumber: 2, slotIndex: 1, title: 'Hair Cutting & Precision Styling' },
  { slotNumber: 3, slotIndex: 2, title: 'Luxury Hair Spa & Detox Therapy' },
  { slotNumber: 4, slotIndex: 3, title: 'Hair Color, Highlights & Balayage' },
  { slotNumber: 5, slotIndex: 4, title: 'Skin Rituals & Hydra Facials' },
  { slotNumber: 6, slotIndex: 5, title: 'Beard Sculpting & Men\'s Spa' },
  { slotNumber: 7, slotIndex: 6, title: 'Hands & Feet Care / Nails' },
  { slotNumber: 8, slotIndex: 7, title: 'Detan, Waxing & Body Glow' },
  { slotNumber: 9, slotIndex: 8, title: 'Bridal & Occasion Packages' },
];

export const MenuGallery: React.FC<MenuGalleryProps> = ({
  isOpen,
  images,
  onImageClick,
}) => {
  if (!isOpen) return null;

  return (
    <section
      id="menu-gallery-section"
      className="w-full px-4 py-4 sm:px-6 max-w-4xl mx-auto transition-all duration-500 animate-in fade-in slide-in-from-top-4"
    >
      {/* Gallery Section Header in Refined Soft Cream & Pearl White */}
      <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2.5">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-layer-group text-[#F0EAE1] text-sm" />
          <h2 className="font-luxury text-xs sm:text-sm font-semibold tracking-widest text-[#F5F5F7] uppercase">
            Extended Menu Gallery
          </h2>
        </div>
        <span className="text-[11px] text-[#F0EAE1]/70 font-mono">
          8 MENU CARDS
        </span>
      </div>

      {/* 
        Responsive grid revealing all remaining 8 images (Cards 02 to 09)
        100% clean and clear images with no dark overlays, + icons, or tags
      */}
      <div
        id="menu-gallery-grid"
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
      >
        {GALLERY_SLOTS.map((slot) => {
          const currentImage = images[slot.slotIndex] || `image${slot.slotNumber}.jpg`;
          return (
            <div key={slot.slotNumber} className="w-full">
              <ImageSlot
                slotNumber={slot.slotNumber}
                slotTitle={slot.title}
                imageSrc={currentImage}
                onClick={() => onImageClick(slot.slotIndex)}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
