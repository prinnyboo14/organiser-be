import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IBookingRepository } from '../Ports/Repositories/IBookingRepository';
import { Booking } from '../Models/Aggregates/Booking';
import {
  CreateBookingData,
  UpdateBookingData,
} from '../Models/Values/BookingData';
import { ICustomerRepository } from '../Ports/Repositories/ICustomerRepository';

@Injectable()
export class Bookings {
  constructor(
    @Inject(IBookingRepository)
    private readonly _bookingRepository: IBookingRepository,
    @Inject(ICustomerRepository)
    private readonly _customerRepository: ICustomerRepository,
  ) {}

  bookingNotFoundException(id: string) {
    // exception needs further work
    throw new NotFoundException(
      'BOOKING_NOT_FOUND',
      `Booking with id: ${id} not found`,
    );
  }

  public async createBooking(
    createBookingData: CreateBookingData,
  ): Promise<Booking> {
    // todo: check if booking already exists at that time

    let customer = await this._customerRepository.findExistingCustomer(
      createBookingData.customer,
    );

    if (!customer) {
      customer = await this._customerRepository.createCustomer(
        createBookingData.customer,
      );
    }

    const bookingData: CreateBookingData = {
      ...createBookingData,
      customer: customer,
    };
    return await this._bookingRepository.createBooking(bookingData);
  }

  public async getBooking(id: string): Promise<Booking> {
    return await this._bookingRepository.getBookingById(id);
  }

  public async getAllBookings(): Promise<Booking[]> {
    return await this._bookingRepository.getAllBookings();
  }

  public async updateBooking(id: string, updateBookingData: UpdateBookingData) {
    const bookingToUpdate = await this._bookingRepository.getBookingById(id);

    if (!bookingToUpdate) {
      this.bookingNotFoundException(id);
    }

    bookingToUpdate.bookingDate = updateBookingData.bookingDate;
    bookingToUpdate.service = updateBookingData.service;
    bookingToUpdate.bookingStatus = updateBookingData.bookingStatus;
    bookingToUpdate.notes = updateBookingData.notes;

    return await this._bookingRepository.updateBooking(bookingToUpdate);
  }

  public async deleteBooking(id: string): Promise<void> {
    const bookingToDelete = await this._bookingRepository.getBookingById(id);

    if (!bookingToDelete) {
      this.bookingNotFoundException(id);
    }
    return await this._bookingRepository.deleteBooking(bookingToDelete);
  }
}
