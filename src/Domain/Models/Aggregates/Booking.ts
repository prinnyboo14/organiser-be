import { BookingStatusEnum } from '../Enums';
import { Customer } from './Customer';

export class Booking {
  id: string;
  service: string;
  bookingDate: Date;
  estimatedDuration: number;
  bookingStatus: BookingStatusEnum;
  isMOT: boolean;
  notes?: string;
  createdAt: Date;
  updatedAt?: Date;
  customer: Customer;
}
