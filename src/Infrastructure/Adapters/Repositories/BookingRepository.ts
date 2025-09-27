import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { UUID } from 'crypto';
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
    return plainToInstance(Booking, await this._bookingEntity.find());
  }

  async createBooking(createBookingData: CreateBookingData): Promise<Booking> {
    const createBooking = this._bookingEntity.create(createBookingData);
    await this._bookingEntity.save(createBooking);
    return plainToInstance(Booking, createBooking);
  }

  async getBookingById(id: UUID): Promise<Booking> {
    const booking = await this._bookingEntity.findOne({ where: { id: id } });
    return plainToInstance(Booking, booking);
  }

  async getBookingEntityById(id: UUID): Promise<BookingEntity> {
    return await this._bookingEntity.findOne({ where: { id } });
  }

  async updateBooking(bookingToUpdate: Booking): Promise<Booking> {
    const updatedBooking = await this._bookingEntity.save(bookingToUpdate);
    return plainToInstance(Booking, updatedBooking);
  }

  async deleteBooking(bookingToDelete: Booking): Promise<void> {
    const bookingEntity = plainToInstance(BookingEntity, bookingToDelete);
    await this._bookingEntity.remove(bookingEntity);
  }
}
