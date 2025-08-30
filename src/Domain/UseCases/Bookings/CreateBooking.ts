import { Inject, Injectable } from '@nestjs/common';
import { CreateBookingRequest } from 'src/API/DTO/Bookings/CreateBookingRequest';
import { Booking } from 'src/Domain/Models/Aggregates/Booking';
import { IBookingRepository } from 'src/Domain/Ports/Repositories/IBookingRepository';

@Injectable()
export class CreateBooking {
  constructor(
    @Inject(IBookingRepository)
    private readonly _bookingRepository: IBookingRepository,
  ) {}

  public async createBooking(
    createBookingRequest: CreateBookingRequest,
  ): Promise<Booking> {
    return await this._bookingRepository.createBooking(createBookingRequest);
  }
}
