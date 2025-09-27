import { BookingStatusEnum } from '../Enums';
import { CreateCustomerData } from './CustomerData';

export class CreateBookingData {
  bookingDate: Date;
  estimatedDuration: number;
  service: string;
  bookingStatus: BookingStatusEnum;
  isMOT: boolean;
  notes?: string;
  customer: CreateCustomerData;
}

export class UpdateBookingData {
  bookingDate?: Date;
  estimatedDuration?: number;
  service?: string;
  bookingStatus?: BookingStatusEnum;
  isMOT?: boolean;
  notes?: string;
}
