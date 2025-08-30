import { Module } from '@nestjs/common';
import { BookingController } from './Controllers/BookingController';
import { DomainModule } from 'src/Domain/DomainModule';
import { InfrastructureModule } from 'src/Infrastructure/InfrastructureModule';
import { HealthController } from './Controllers/HealthController';

@Module({
  controllers: [BookingController, HealthController],
  imports: [DomainModule, InfrastructureModule],
})
export class ApiModule {}
