import { BookingStatusEnum } from '../Enums';

export class CreateBookingData {
  bookingDate: Date;
  service: string;
  bookingStatus: BookingStatusEnum;
  notes?: string;
}
