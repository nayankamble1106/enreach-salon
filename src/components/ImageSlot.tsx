import React, { useState, useEffect } from 'react';
import { getAssetUrl } from '../utils';

interface ImageSlotProps {
  slotNumber: number; // 1 to 9
  slotTitle?: string;
  imageSrc: string; // Image path or data URL
  onClick: () => void;
  isMainSlot?: boolean;
}

export const ImageSlot: React.FC<ImageSlotProps> = ({
  slotNumber,
  slotTitle,
  imageSrc,
  onClick,
  isMainSlot = false,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(() => getAssetUrl(imageSrc));

  useEffect(() => {
    setCurrentSrc(getAssetUrl(imageSrc));
  }, [imageSrc]);

  const handleError = () => {
    // If relative path fails, try getAssetUrl with leading slash stripped
    const resolved = getAssetUrl(imageSrc);
    if (currentSrc !== resolved) {
      setCurrentSrc(resolved);
    }
  };

  return (
    <div
      id={`menu-card-slot-${slotNumber}`}
      onClick={onClick}
      className={`group relative w-full rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer select-none bg-[#181818] ${
        isMainSlot
          ? 'border-white/15 hover:border-[#F0EAE1]/50 shadow-[0_12px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(240,234,225,0.06)]'
          : 'border-white/10 hover:border-[#F0EAE1]/40 shadow-[0_8px_25px_rgba(0,0,0,0.7),0_0_15px_rgba(240,234,225,0.04)]'
      }`}
    >
      {/* Aspect Ratio 1080/1520 Menu Card Frame - 100% Clear & Bright with NO Dark Overlays */}
      <div className="relative aspect-[1080/1520] w-full bg-[#141414] overflow-hidden flex items-center justify-center">
        {/* Subtle loading placeholder shimmer */}
        {!loaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#1E1E1E] to-[#141414] animate-pulse flex flex-col items-center justify-center p-6 text-center">
            <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center mb-2">
              <i className="fa-solid fa-scissors text-[#F0EAE1] animate-spin text-xs" />
            </div>
            <span className="font-luxury text-[11px] tracking-widest text-[#F0EAE1]/60 uppercase">
              Loading...
            </span>
          </div>
        )}

        {/* 
          100% Clear, Bright Menu Card Image
          No dark tint, no hover overlay, no search-glass icon, no upload icons, no delete buttons, no label tags
        */}
        <img
          src={currentSrc}
          alt={slotTitle || `Enreach Unisex Salon Menu Card ${slotNumber}`}
          referrerPolicy="no-referrer"
          loading={isMainSlot ? 'eager' : 'lazy'}
          onLoad={() => setLoaded(true)}
          onError={handleError}
          className={`w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.01] ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </div>
  );
};
