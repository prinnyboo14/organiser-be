import { TypeOrmModule } from '@nestjs/typeorm';
import { IBookingRepository } from 'src/Domain/Ports/Repositories/IBookingRepository';
import { ICustomerRepository } from 'src/Domain/Ports/Repositories/ICustomerRepository';
import { BookingRepository } from './Adapters/Repositories/BookingRepository';
import { Module } from '@nestjs/common';
import { entities } from './Database/Entities';
import { CustomerRepository } from './Adapters/Repositories/CustomerRepository';

@Module({
  imports: [TypeOrmModule.forFeature(entities)], // database module??
  providers: [
    { provide: IBookingRepository, useClass: BookingRepository },
    { provide: ICustomerRepository, useClass: CustomerRepository },
  ],
  exports: [
    { provide: IBookingRepository, useClass: BookingRepository },
    { provide: ICustomerRepository, useClass: CustomerRepository },
  ],
})
export class InfrastructureModule {}
