import { Module } from '@nestjs/common';
import { InfrastructureModule } from 'src/Infrastructure/InfrastructureModule';
import { Bookings } from './Bookings';
import { Customers } from './Customers';

@Module({
  imports: [InfrastructureModule],
  providers: [Bookings, Customers],
  exports: [Bookings, Customers],
})
export class UseCasesModule {}
