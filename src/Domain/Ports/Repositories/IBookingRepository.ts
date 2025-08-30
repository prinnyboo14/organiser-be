import { Booking } from 'src/Domain/Models/Aggregates/Booking';

export interface IBookingRepository {
  getAllBookings(): Promise<Booking[]>;
}

export const IBookingRepository = Symbol('IBookingRepository');
