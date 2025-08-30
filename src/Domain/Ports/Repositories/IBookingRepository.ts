import { Booking } from 'src/Domain/Models/Aggregates/Booking';
import { CreateBookingData } from 'src/Domain/Models/Values/BookingData';

export interface IBookingRepository {
  getAllBookings(): Promise<Booking[]>;
  createBooking(createBookingData: CreateBookingData): Promise<Booking>;
  getBookingById(id: string): Promise<Booking>;
}

export const IBookingRepository = Symbol('IBookingRepository');
