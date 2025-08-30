import { Module } from '@nestjs/common';
import { BookingController } from './Controllers/BookingController';
import { DomainModule } from 'src/Domain/DomainModule';
import { InfrastructureModule } from 'src/Infrastructure/InfrastructureModule';

@Module({
  controllers: [BookingController],
  imports: [DomainModule, InfrastructureModule],
})
export class ApiModule {}
