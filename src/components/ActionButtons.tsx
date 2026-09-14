import React from 'react';

interface ActionButtonsProps {
  isGalleryOpen: boolean;
  onToggleGallery: () => void;
  onBookAppointment: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  isGalleryOpen,
  onToggleGallery,
  onBookAppointment,
}) => {
  return (
    <div id="core-action-buttons" className="w-full px-4 py-4 sm:px-6 flex justify-center">
      <div className="w-full max-w-md flex flex-col sm:flex-row gap-3">
        {/* Button 1: "Explore More Services" (Smoothly opens/expands the gallery section below) */}
        <button
          id="btn-explore-more-services"
          type="button"
          onClick={onToggleGallery}
          className="flex-1 py-3.5 px-4 rounded-xl font-luxury font-semibold text-xs sm:text-sm tracking-wider uppercase border border-white/15 bg-[#181818] hover:bg-[#222222] hover:border-[#F0EAE1]/40 text-[#F5F5F7] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5 shadow-md group"
        >
          <i className="fa-solid fa-layer-group text-[#F0EAE1] group-hover:rotate-12 transition-transform" />
          <span>{isGalleryOpen ? 'Close Menu Gallery' : 'Explore More Services'}</span>
          <i
            className={`fa-solid fa-chevron-down text-xs text-[#F0EAE1] transition-transform duration-300 ${
              isGalleryOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>

        {/* Button 2: "Book Appointment" (Smoothly scrolls down to the appointment form) */}
        <button
          id="btn-book-appointment"
          type="button"
          onClick={onBookAppointment}
          className="flex-1 py-3.5 px-4 rounded-xl font-luxury font-bold text-xs sm:text-sm tracking-wider uppercase bg-[#F0EAE1] hover:bg-white text-[#0D0D0D] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5 shadow-[0_4px_20px_rgba(240,234,225,0.15)]"
        >
          <i className="fa-solid fa-calendar-check text-[#0D0D0D]" />
          <span>Book Appointment</span>
        </button>
      </div>
    </div>
  );
};
