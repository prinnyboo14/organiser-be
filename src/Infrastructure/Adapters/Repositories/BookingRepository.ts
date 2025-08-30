import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Booking } from 'src/Domain/Models/Aggregates/Booking';
import { IBookingRepository } from 'src/Domain/Ports/Repositories/IBookingRepository';
import { BookingEntity } from 'src/Infrastructure/Database/Entities/BookingEntity';
import { Repository } from 'typeorm';

@Injectable()
export class BookingRepository implements IBookingRepository {
  constructor(
    @InjectRepository(BookingEntity)
    private _bookingEntity: Repository<BookingEntity>,
  ) {}

  async getAllBookings(): Promise<Booking[]> {
    const bookings = await this._bookingEntity.find();
    return plainToInstance(Booking, bookings);
  }
}
