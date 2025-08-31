import { Module } from '@nestjs/common';
import { BookingController } from './Controllers/BookingController';
import { DomainModule } from 'src/Domain/DomainModule';
import { InfrastructureModule } from 'src/Infrastructure/InfrastructureModule';
import { HealthController } from './Controllers/HealthController';
import { CustomerController } from './Controllers/CustomerController';

@Module({
  controllers: [BookingController, HealthController, CustomerController],
  imports: [DomainModule, InfrastructureModule],
})
export class ApiModule {}
