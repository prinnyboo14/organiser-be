import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Booking } from 'src/Domain/Models/Aggregates/Booking';
import { CreateBookingData } from 'src/Domain/Models/Values/BookingData';
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

  async createBooking(createBookingData: CreateBookingData): Promise<Booking> {
    // todo: check if booking already exists at that time

    const createBooking = this._bookingEntity.create(createBookingData);
    await this._bookingEntity.save(createBooking);
    return plainToInstance(Booking, createBooking);
  }

  async getBookingById(id: string): Promise<Booking> {
    const booking = await this._bookingEntity.findOne({ where: { id: id } });
    return plainToInstance(Booking, booking);
  }
}
