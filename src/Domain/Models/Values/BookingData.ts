import { BookingStatusEnum } from '../Enums';

export class CreateBookingData {
  bookingDate: Date;
  service: string;
  bookingStatus: BookingStatusEnum;
  notes?: string;
}

export class UpdateBookingData {
  bookingDate?: Date;
  service?: string;
  bookingStatus?: BookingStatusEnum;
  notes?: string;
}
