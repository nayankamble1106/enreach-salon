import React, { useState, useEffect } from 'react';
import { BookingFormData } from '../types';

interface BookingFormProps {
  preselectedService?: string;
}

const SALON_WHATSAPP_NUMBER = '917020678366';

const SALON_SERVICES = [
  'Signature Services',
  'Hair Services',
  'Beauty Services',
  'Waxing & Bleach',
  'Hair Coloring',
  'Global Coloring',
  'Highlighting',
  'Bridal Facial',
  'Hydra Facial',
  'Skin & Polishing',
  'Skin Services',
  'Ironing, Tongs & Iron Curls',
  'Texture Services',
  'Keratin Treatment',
  'Hair Treatment',
  'Hand & Foot Services',
  'Makeup Services',
];

export const BookingForm: React.FC<BookingFormProps> = ({ preselectedService }) => {
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<BookingFormData>({
    customerName: '',
    mobileNumber: '',
    service: SALON_SERVICES[0],
    preferredDate: today,
    preferredTime: '11:00',
    specialNotes: '',
  });

  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedService) {
      // If preselectedService matches or partially matches, set it
      const match = SALON_SERVICES.find((s) =>
        s.toLowerCase().includes(preselectedService.toLowerCase()) ||
        preselectedService.toLowerCase().includes(s.toLowerCase())
      );
      setFormData((prev) => ({
        ...prev,
        service: match || preselectedService,
      }));
    }
  }, [preselectedService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.customerName.trim() || !formData.mobileNumber.trim()) {
      setStatusMessage('Please enter your name and mobile number.');
      return;
    }

    let messageText = `Hello Enreach Salon! I would like to book an appointment.
Name: ${formData.customerName.trim()}
Mobile: ${formData.mobileNumber.trim()}
Service: ${formData.service}
Date: ${formData.preferredDate}
Time: ${formData.preferredTime}`;

    if (formData.specialNotes && formData.specialNotes.trim()) {
      messageText += `\nSpecial Request: ${formData.specialNotes.trim()}`;
    }

    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${SALON_WHATSAPP_NUMBER}?text=${encodedText}`;

    setStatusMessage('Opening WhatsApp to send your booking details...');
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setStatusMessage('Booking details prepared! Please tap send in WhatsApp.');
    }, 1500);
  };

  return (
    <section
      id="appointment-booking-section"
      className="w-full px-4 py-8 sm:px-6 max-w-xl mx-auto"
    >
      <div className="rounded-2xl border border-white/15 bg-[#181818] p-5 sm:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
        {/* Form Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#141414] border border-white/15 text-[#F0EAE1] mb-2.5 shadow-sm">
            <i className="fa-solid fa-calendar-check text-base" />
          </div>
          <h2 className="font-luxury text-xl sm:text-2xl font-bold tracking-wider text-[#F5F5F7] uppercase">
            Book Appointment
          </h2>
          <p className="text-xs text-[#F0EAE1]/80 tracking-wider mt-1 uppercase font-medium">
            Fast WhatsApp Confirmation • Chandrapur
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
          {/* Customer Name */}
          <div>
            <label
              htmlFor="customerName"
              className="block text-xs font-semibold text-[#F0EAE1] uppercase tracking-wider mb-1.5"
            >
              Customer Name <span className="text-[#F5F5F7]">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                <i className="fa-regular fa-user text-sm" />
              </span>
              <input
                id="customerName"
                name="customerName"
                type="text"
                required
                value={formData.customerName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#0D0D0D] border border-white/15 text-[#F5F5F7] placeholder-zinc-500 text-sm focus:outline-none focus:border-[#F0EAE1]/60 focus:ring-1 focus:ring-[#F0EAE1]/60 transition-all"
              />
            </div>
          </div>

          {/* Mobile Number */}
          <div>
            <label
              htmlFor="mobileNumber"
              className="block text-xs font-semibold text-[#F0EAE1] uppercase tracking-wider mb-1.5"
            >
              Mobile Number <span className="text-[#F5F5F7]">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                <i className="fa-solid fa-phone text-sm" />
              </span>
              <input
                id="mobileNumber"
                name="mobileNumber"
                type="tel"
                required
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="e.g. +91 7020678366"
                className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#0D0D0D] border border-white/15 text-[#F5F5F7] placeholder-zinc-500 text-sm focus:outline-none focus:border-[#F0EAE1]/60 focus:ring-1 focus:ring-[#F0EAE1]/60 transition-all"
              />
            </div>
          </div>

          {/* Service Selection Dropdown */}
          <div>
            <label
              htmlFor="service"
              className="block text-xs font-semibold text-[#F0EAE1] uppercase tracking-wider mb-1.5"
            >
              Select Service <span className="text-[#F5F5F7]">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                <i className="fa-solid fa-scissors text-sm" />
              </span>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full pl-10 pr-10 py-3 rounded-xl bg-[#0D0D0D] border border-white/15 text-[#F5F5F7] text-sm focus:outline-none focus:border-[#F0EAE1]/60 focus:ring-1 focus:ring-[#F0EAE1]/60 transition-all appearance-none cursor-pointer"
              >
                {SALON_SERVICES.map((srv, idx) => (
                  <option key={idx} value={srv} className="bg-[#181818] text-zinc-200">
                    {srv}
                  </option>
                ))}
              </select>
              <span className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-zinc-400">
                <i className="fa-solid fa-chevron-down text-xs" />
              </span>
            </div>
          </div>

          {/* Preferred Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label
                htmlFor="preferredDate"
                className="block text-xs font-semibold text-[#F0EAE1] uppercase tracking-wider mb-1.5"
              >
                Preferred Date <span className="text-[#F5F5F7]">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                  <i className="fa-regular fa-calendar text-sm" />
                </span>
                <input
                  id="preferredDate"
                  name="preferredDate"
                  type="date"
                  min={today}
                  required
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#0D0D0D] border border-white/15 text-[#F5F5F7] text-sm focus:outline-none focus:border-[#F0EAE1]/60 focus:ring-1 focus:ring-[#F0EAE1]/60 transition-all cursor-pointer"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="preferredTime"
                className="block text-xs font-semibold text-[#F0EAE1] uppercase tracking-wider mb-1.5"
              >
                Preferred Time <span className="text-[#F5F5F7]">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                  <i className="fa-regular fa-clock text-sm" />
                </span>
                <input
                  id="preferredTime"
                  name="preferredTime"
                  type="time"
                  required
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#0D0D0D] border border-white/15 text-[#F5F5F7] text-sm focus:outline-none focus:border-[#F0EAE1]/60 focus:ring-1 focus:ring-[#F0EAE1]/60 transition-all cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Optional Special Request */}
          <div>
            <label
              htmlFor="specialNotes"
              className="block text-xs font-semibold text-[#F0EAE1] uppercase tracking-wider mb-1.5"
            >
              Special Request <span className="text-zinc-500 font-normal">(Optional)</span>
            </label>
            <input
              id="specialNotes"
              name="specialNotes"
              type="text"
              value={formData.specialNotes}
              onChange={handleChange}
              placeholder="e.g. Preferred stylist or custom notes"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D0D0D] border border-white/10 text-[#F5F5F7] placeholder-zinc-500 text-sm focus:outline-none focus:border-[#F0EAE1]/50 transition-all"
            />
          </div>

          {/* Status Message */}
          {statusMessage && (
            <div
              id="booking-status-notice"
              className="p-3 rounded-xl bg-[#142316] border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2"
            >
              <i className="fa-solid fa-circle-check text-sm text-emerald-400" />
              <span>{statusMessage}</span>
            </div>
          )}

          {/* Primary CTA Button: "Send Request on WhatsApp" */}
          <div className="pt-2">
            <button
              id="btn-send-whatsapp"
              type="submit"
              className="w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base tracking-wide uppercase bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-[#0D0D0D] transition-all duration-200 flex items-center justify-center gap-3 shadow-[0_8px_25px_rgba(37,211,102,0.25)] cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp text-2xl text-[#0D0D0D]" />
              <span className="font-luxury font-bold">Send Request on WhatsApp</span>
            </button>
            <p className="text-center text-[11px] text-zinc-400 mt-2">
              Opens WhatsApp with pre-filled appointment details
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
