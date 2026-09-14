import React from 'react';
import { ImageSlot } from './ImageSlot';

interface MainMenuProps {
  imageSrc: string;
  onImageClick: () => void;
}

export const MainMenu: React.FC<MainMenuProps> = ({
  imageSrc,
  onImageClick,
}) => {
  return (
    <section id="main-menu-section" className="w-full px-4 pt-4 pb-2 sm:px-6 flex justify-center">
      {/* 
        DIRECTIVE 2: 
        1st Main Front Image: Shown prominently on top.
        - 100% clean and clear image display with no overlays or text fluff.
        - Clicking expands to fullscreen Lightbox.
      */}
      <div className="w-full max-w-md">
        <ImageSlot
          slotNumber={1}
          slotTitle="Primary Salon Menu Card"
          imageSrc={imageSrc}
          onClick={onImageClick}
          isMainSlot={true}
        />
      </div>
    </section>
  );
};
