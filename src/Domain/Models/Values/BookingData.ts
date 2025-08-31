import { BookingStatusEnum } from '../Enums';
import { CreateCustomerData } from './CustomerData';

export class CreateBookingData {
  bookingDate: Date;
  service: string;
  bookingStatus: BookingStatusEnum;
  notes?: string;
  customer: CreateCustomerData;
}

export class UpdateBookingData {
  bookingDate?: Date;
  service?: string;
  bookingStatus?: BookingStatusEnum;
  notes?: string;
}
