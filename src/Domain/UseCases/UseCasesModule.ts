import { Module } from '@nestjs/common';
import { GetAllBookings } from './Bookings/GetAllBookings';
import { InfrastructureModule } from 'src/Infrastructure/InfrastructureModule';

@Module({
  imports: [InfrastructureModule],
  providers: [GetAllBookings],
  exports: [GetAllBookings],
})
export class UseCasesModule {}
