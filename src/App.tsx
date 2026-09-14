/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { MainMenu } from './components/MainMenu';
import { ActionButtons } from './components/ActionButtons';
import { MenuGallery } from './components/MenuGallery';
import { LightboxModal } from './components/LightboxModal';
import { BookingForm } from './components/BookingForm';
import { LocationAndFooter } from './components/LocationAndFooter';

const STORAGE_KEY = 'enreach_salon_custom_menu_images';

const DEFAULT_IMAGES: string[] = [
  './image1.jpg',
  './image2.jpg',
  './image3.jpg',
  './image4.jpg',
  './image5.jpg',
  './image6.jpg',
  './image7.jpg',
  './image8.jpg',
  './image9.jpg',
];
export default function App() {
  // Preserves any existing custom or default menu images (100% untouched)
  const [images] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length === 9) {
          return parsed.map((img, i) => img || DEFAULT_IMAGES[i]);
        }
      }
    } catch {
      // ignore parsing error
    }
    return DEFAULT_IMAGES;
  });

  // Gallery hidden by default as requested
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Lightbox active index: 0 to 8, or null when closed
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Preselected service for appointment booking
  const [preselectedService, setPreselectedService] = useState<string>('');

  const handleToggleGallery = () => {
    setIsGalleryOpen((prev) => {
      const nextState = !prev;
      if (nextState) {
        setTimeout(() => {
          const galleryElement = document.getElementById('menu-gallery-section');
          if (galleryElement) {
            galleryElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
      return nextState;
    });
  };

  const handleScrollToBooking = () => {
    const bookingElement = document.getElementById('appointment-booking-section');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handleBookFromLightbox = (serviceName: string) => {
    setPreselectedService(serviceName);
    setTimeout(() => {
      handleScrollToBooking();
    }, 150);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F5F7] flex flex-col font-sans selection:bg-[#F0EAE1]/20 selection:text-white">
      {/* 
        Clean Header in Pure Deep Matte Black (#0D0D0D)
        - Left: Salon Logo & Name "Enreach Unisex Salon" with subtle Soft Cream badge
        - Right: 3-line hamburger menu icon
      */}
      <Header
        onBookClick={handleScrollToBooking}
        onExploreClick={() => {
          setIsGalleryOpen(true);
          setTimeout(() => {
            document.getElementById('menu-gallery-section')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
      />

      <main className="flex-1 w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* 
          1st Main Front Image: Shown prominently on top (Slot 1)
          - 100% clear & bright image with no overlays, + icons, delete buttons, or tags
          - Clicking opens fullscreen Lightbox
        */}
        <MainMenu
          imageSrc={images[0]}
          onImageClick={() => handleOpenLightbox(0)}
        />

        {/* 
          Core Action Buttons (Directly below Main Image)
          - Button 1: "Explore More Services" (Dark Charcoal #181818 with Pearl White/Soft Cream border)
          - Button 2: "Book Appointment" (Soft Cream #F0EAE1 with Matte Black #0D0D0D text)
        */}
        <ActionButtons
          isGalleryOpen={isGalleryOpen}
          onToggleGallery={handleToggleGallery}
          onBookAppointment={handleScrollToBooking}
        />

        {/* 
          Extended Menu Gallery (Images 2 to 9)
          - Revealed together when "Explore More Services" is clicked
          - 100% clear and bright menu cards with no dark hover overlays, + icons, delete buttons, or tags
        */}
        <MenuGallery
          isOpen={isGalleryOpen}
          images={images}
          onImageClick={handleOpenLightbox}
        />

        {/* 
          Appointment Booking Form
          - Fields: Customer Name, Mobile Number, Service Selection dropdown, Preferred Date & Time
          - Primary CTA Button: "Send Request on WhatsApp"
        */}
        <BookingForm preselectedService={preselectedService} />

        {/* 
          Maps & Minimal Footer
          - Embedded Google Maps iframe container in Dark Charcoal Black with Pearl White border
          - Pure Deep Matte Black (#0D0D0D) footer featuring Salon Address, Phone Number, and Social links
        */}
        <LocationAndFooter />
      </main>

      {/* Lightbox Modal for any clicked menu card (Images 1 through 9) */}
      <LightboxModal
        currentIndex={activeLightboxIndex}
        images={images}
        onClose={handleCloseLightbox}
        onSelectIndex={setActiveLightboxIndex}
        onBookService={handleBookFromLightbox}
      />
    </div>
  );
}
