export interface BookingFormData {
  customerName: string;
  mobileNumber: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  specialNotes?: string;
}

export interface MenuItemCard {
  id: number;
  imageSrc: string;
  alt: string;
  title: string;
  category: string;
}
