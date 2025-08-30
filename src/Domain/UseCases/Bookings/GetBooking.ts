import { Inject, Injectable } from '@nestjs/common';
import { Booking } from 'src/Domain/Models/Aggregates/Booking';
import { IBookingRepository } from 'src/Domain/Ports/Repositories/IBookingRepository';

@Injectable()
export class GetBooking {
  constructor(
    @Inject(IBookingRepository)
    private readonly _bookingRepository: IBookingRepository,
  ) {}

  public async getBooking(id: string): Promise<Booking> {
    return await this._bookingRepository.getBookingById(id);
  }
}
