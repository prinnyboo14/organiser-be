import { Inject, Injectable } from '@nestjs/common';
import { Booking } from 'src/Domain/Models/Aggregates/Booking';
import { IBookingRepository } from 'src/Domain/Ports/Repositories/IBookingRepository';

@Injectable()
export class GetAllBookings {
  constructor(
    @Inject(IBookingRepository)
    private readonly _bookingRepository: IBookingRepository,
  ) {}

  public async getAllBookings(): Promise<Booking[]> {
    return await this._bookingRepository.getAllBookings();
  }
}
