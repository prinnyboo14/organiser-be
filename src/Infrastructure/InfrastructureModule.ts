import { TypeOrmModule } from '@nestjs/typeorm';
import { IBookingRepository } from 'src/Domain/Ports/Repositories/IBookingRepository';
import { BookingRepository } from './Adapters/Repositories/BookingRepository';
import { Module } from '@nestjs/common';
import { entities } from './Database/Entities';

@Module({
  imports: [TypeOrmModule.forFeature(entities)], // database module??
  providers: [{ provide: IBookingRepository, useClass: BookingRepository }],
  exports: [{ provide: IBookingRepository, useClass: BookingRepository }],
})
export class InfrastructureModule {}
