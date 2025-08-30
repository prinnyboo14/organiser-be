import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Booking } from 'src/Domain/Models/Aggregates/Booking';
import {
  CreateBookingData,
  UpdateBookingData,
} from 'src/Domain/Models/Values/BookingData';
import { IBookingRepository } from 'src/Domain/Ports/Repositories/IBookingRepository';
import { BookingEntity } from 'src/Infrastructure/Database/Entities/BookingEntity';
import { Repository } from 'typeorm';

@Injectable()
export class BookingRepository implements IBookingRepository {
  constructor(
    @InjectRepository(BookingEntity)
    private _bookingEntity: Repository<BookingEntity>,
  ) {}

  bookingNotFoundException(id: string) {
    // exception needs further work
    throw new NotFoundException(
      'BOOKING_NOT_FOUND',
      `Booking with id: ${id} not found`,
    );
  }

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

  async deleteBooking(id: string) {
    const bookingToDelete = await this._bookingEntity.findOne({
      where: { id: id },
    });

    if (!bookingToDelete) {
      this.bookingNotFoundException(id);
    }

    await this._bookingEntity.remove(bookingToDelete);
  }

  async updateBooking(
    id: string,
    updateBookingData: UpdateBookingData,
  ): Promise<Booking> {
    const bookingToUpdate = await this._bookingEntity.findOne({
      where: { id: id },
    });

    if (!bookingToUpdate) {
      this.bookingNotFoundException(id);
    }

    bookingToUpdate.bookingDate = updateBookingData.bookingDate;
    bookingToUpdate.service = updateBookingData.service;
    bookingToUpdate.bookingStatus = updateBookingData.bookingStatus;
    bookingToUpdate.notes = updateBookingData.notes;

    await this._bookingEntity.save(bookingToUpdate);

    const getUpdatedBooking = await this._bookingEntity.findOne({
      where: { id: id },
    });

    return plainToInstance(Booking, getUpdatedBooking);
  }
}
