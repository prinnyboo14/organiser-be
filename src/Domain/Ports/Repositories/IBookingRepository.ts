import { Booking } from 'src/Domain/Models/Aggregates/Booking';
import {
  CreateBookingData,
  UpdateBookingData,
} from 'src/Domain/Models/Values/BookingData';
import { BookingEntity } from 'src/Infrastructure/Database/Entities/BookingEntity';

export interface IBookingRepository {
  getAllBookings(): Promise<Booking[]>;
  createBooking(createBookingData: CreateBookingData): Promise<Booking>;
  getBookingById(id: string): Promise<Booking>;
  deleteBooking(bookingToDelete: Booking): Promise<void>;
  updateBooking(bookingToUpdate: Booking): Promise<Booking>;
}

export const IBookingRepository = Symbol('IBookingRepository');
