import { Inject, Injectable } from '@nestjs/common';
import { IBookingRepository } from '../Ports/Repositories/IBookingRepository';
import { CreateBookingRequest } from 'src/API/DTO/Bookings/CreateBookingRequest';
import { Booking } from '../Models/Aggregates/Booking';
import { UpdateBookingData } from '../Models/Values/BookingData';

@Injectable()
export class Bookings {
  constructor(
    @Inject(IBookingRepository)
    private readonly _bookingRepository: IBookingRepository,
  ) {}

  public async createBooking(
    createBookingRequest: CreateBookingRequest,
  ): Promise<Booking> {
    return await this._bookingRepository.createBooking(createBookingRequest);
  }

  public async getBooking(id: string): Promise<Booking> {
    return await this._bookingRepository.getBookingById(id);
  }

  public async getAllBookings(): Promise<Booking[]> {
    return await this._bookingRepository.getAllBookings();
  }

  public async updateBooking(
    id: string,
    updateBookingRequest: UpdateBookingData,
  ) {
    return await this._bookingRepository.updateBooking(
      id,
      updateBookingRequest,
    );
  }

  public async deleteBooking(id: string) {
    return await this._bookingRepository.deleteBooking(id);
  }
}
