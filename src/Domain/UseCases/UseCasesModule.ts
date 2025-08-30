import { Module } from '@nestjs/common';
import { InfrastructureModule } from 'src/Infrastructure/InfrastructureModule';
import { Bookings } from './Bookings';

@Module({
  imports: [InfrastructureModule],
  providers: [Bookings],
  exports: [Bookings],
})
export class UseCasesModule {}
