import { Module } from '@nestjs/common';
import { GetAllBookings } from './Bookings/GetAllBookings';
import { InfrastructureModule } from 'src/Infrastructure/InfrastructureModule';
import { CreateBooking } from './Bookings/CreateBooking';
import { GetBooking } from './Bookings/GetBooking';

@Module({
  imports: [InfrastructureModule],
  providers: [GetAllBookings, CreateBooking, GetBooking],
  exports: [GetAllBookings, CreateBooking, GetBooking],
})
export class UseCasesModule {}
